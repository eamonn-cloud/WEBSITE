import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const SLACK_WEBHOOK_URL = Deno.env.get("SLACK_WEBHOOK_URL");
const NOTIFY_EMAIL = "eamonn@corexoperations.com";

interface QuizAnswer {
  questionId: string;
  section: string;
  question: string;
  selectedValue: number | null;
  selectedAnswer: string;
}

interface AssessmentLead {
  fullName: string;
  email: string;
  mobile: string;
  score: number;
  tier: string;
  tierName: string;
  answers: QuizAnswer[];
}

// HTML escaping function to prevent XSS attacks
function escapeHtml(unsafe: string): string {
  if (typeof unsafe !== 'string') {
    return String(unsafe ?? '');
  }
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const lead: AssessmentLead = await req.json();
    console.log("Received assessment lead:", lead);

    // Build answers HTML for email with proper escaping
    const answersHtml = lead.answers
      .map(
        (a) => `
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold; width: 30%;">${escapeHtml(a.section)}</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${escapeHtml(a.question)}</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${escapeHtml(a.selectedAnswer)} (${escapeHtml(String(a.selectedValue))}/3)</td>
        </tr>`
      )
      .join("");

    // Send email notification with escaped user inputs
    const emailResponse = await resend.emails.send({
      from: "Corex Operations <notifications@updates.corexoperations.com>",
      to: [NOTIFY_EMAIL],
      subject: `New Assessment Lead: ${escapeHtml(lead.fullName)} (Tier ${escapeHtml(lead.tier)})`,
      html: `
        <h1>New Assessment Submission</h1>
        <table style="border-collapse: collapse; width: 100%; max-width: 500px;">
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Name</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${escapeHtml(lead.fullName)}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Email</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${escapeHtml(lead.email)}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Mobile</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${escapeHtml(lead.mobile)}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Score</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${escapeHtml(String(lead.score))}/36</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Tier</td>
            <td style="padding: 8px; border: 1px solid #ddd;">Tier ${escapeHtml(lead.tier)}: ${escapeHtml(lead.tierName)}</td>
          </tr>
        </table>

        <h2 style="margin-top: 30px;">Quiz Answers</h2>
        <table style="border-collapse: collapse; width: 100%; max-width: 800px;">
          <tr style="background-color: #f5f5f5;">
            <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Section</th>
            <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Question</th>
            <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Answer</th>
          </tr>
          ${answersHtml}
        </table>
        <p style="margin-top: 20px; color: #666;">Submitted at: ${new Date().toISOString()}</p>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    // Send to Slack webhook
    try {
      const slackMessage = {
        text: `New Assessment Submission: ${escapeHtml(lead.fullName)}`,
        blocks: [
          {
            type: "header",
            text: {
              type: "plain_text",
              text: "🎯 New Assessment Submission",
            },
          },
          {
            type: "section",
            fields: [
              {
                type: "mrkdwn",
                text: `*Name:*\n${escapeHtml(lead.fullName)}`,
              },
              {
                type: "mrkdwn",
                text: `*Email:*\n${escapeHtml(lead.email)}`,
              },
              {
                type: "mrkdwn",
                text: `*Mobile:*\n${escapeHtml(lead.mobile)}`,
              },
              {
                type: "mrkdwn",
                text: `*Score:*\n${escapeHtml(String(lead.score))}/36`,
              },
              {
                type: "mrkdwn",
                text: `*Tier:*\nTier ${escapeHtml(lead.tier)}: ${escapeHtml(lead.tierName)}`,
              },
              {
                type: "mrkdwn",
                text: `*Submitted:*\n${new Date().toLocaleString()}`,
              },
            ],
          },
          {
            type: "divider",
          },
        ],
      };

      await fetch(SLACK_WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(slackMessage),
      });
      console.log("Slack notification sent successfully");
    } catch (slackError) {
      console.error("Slack error (non-fatal):", slackError);
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error in send-assessment-lead function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
