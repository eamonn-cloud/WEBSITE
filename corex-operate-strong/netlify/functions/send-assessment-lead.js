const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);
const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL;
const NOTIFY_EMAIL = "eamonn@corexoperations.com";

function escapeHtml(unsafe) {
  if (typeof unsafe !== "string") {
    return String(unsafe ?? "");
  }
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    const lead = JSON.parse(event.body || "{}");
    console.log("Received assessment lead:", lead);

    // Build answers HTML for email - grouped by section
    const answersBySection = {};
    lead.answers.forEach((a) => {
      if (!answersBySection[a.section]) {
        answersBySection[a.section] = [];
      }
      answersBySection[a.section].push(a);
    });

    const detailedAnswersHtml = Object.entries(answersBySection)
      .map(
        ([section, answers]) => `
        <h3 style="margin-top: 25px; margin-bottom: 10px; color: #1a365d;">${escapeHtml(section)}</h3>
        <table style="border-collapse: collapse; width: 100%; margin-bottom: 20px;">
          ${answers
            .map(
              (a) => `
            <tr style="border-bottom: 1px solid #e2e8f0;">
              <td style="padding: 10px; vertical-align: top; width: 50%;"><strong>${escapeHtml(a.question)}</strong></td>
              <td style="padding: 10px; vertical-align: top;"><span style="background: #edf2f7; padding: 4px 8px; border-radius: 4px; font-size: 13px;"><strong>${escapeHtml(String(a.selectedValue))}/3</strong></span> — ${escapeHtml(a.selectedAnswer)}</td>
            </tr>`
            )
            .join("")}
        </table>`
      )
      .join("");

    // Email to customer with their report
    const customerEmailHtml = `
      <h1 style="color: #1a365d; margin-bottom: 20px;">Your Operational Maturity Assessment Results</h1>
      <p style="font-size: 16px; line-height: 1.6; color: #4a5568; margin-bottom: 20px;">
        Thank you for completing your assessment. Here are your results:
      </p>

      <div style="background: #f0f4ff; border-left: 4px solid #3b82f6; padding: 15px; margin: 20px 0; border-radius: 4px;">
        <p style="margin: 0; font-size: 14px; color: #1e40af;"><strong>Your Score:</strong> <span style="font-size: 20px; font-weight: bold;">${lead.score}/36</span></p>
        <p style="margin: 10px 0 0 0; font-size: 14px; color: #1e40af;"><strong>Maturity Tier:</strong> Tier ${lead.tier}: ${escapeHtml(lead.tierName)}</p>
      </div>

      ${detailedAnswersHtml}

      <p style="margin-top: 30px; font-size: 14px; color: #718096;">
        A detailed analysis will be sent separately by the Corex Operations team.
      </p>
    `;

    const customerEmail = await resend.emails.send({
      from: "Corex Operations <notifications@updates.corexoperations.com>",
      to: [lead.email],
      subject: "Your Operational Maturity Assessment Results",
      html: customerEmailHtml,
    });

    console.log("Customer email sent:", customerEmail);

    // Email to internal team with full details
    const internalEmailHtml = `
      <h1 style="color: #1a365d;">New Assessment Submission</h1>

      <div style="background: #f7fafc; padding: 15px; border-radius: 4px; margin-bottom: 20px;">
        <p style="margin: 5px 0;"><strong>Name:</strong> ${escapeHtml(lead.fullName)}</p>
        <p style="margin: 5px 0;"><strong>Email:</strong> ${escapeHtml(lead.email)}</p>
        <p style="margin: 5px 0;"><strong>Mobile:</strong> ${escapeHtml(lead.mobile)}</p>
        <p style="margin: 5px 0;"><strong>Score:</strong> ${escapeHtml(String(lead.score))}/36</p>
        <p style="margin: 5px 0;"><strong>Tier:</strong> Tier ${escapeHtml(lead.tier)}: ${escapeHtml(lead.tierName)}</p>
        <p style="margin: 5px 0;"><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
      </div>

      <h2 style="color: #1a365d; margin-top: 25px;">Detailed Assessment Responses</h2>
      ${detailedAnswersHtml}
    `;

    const internalEmail = await resend.emails.send({
      from: "Corex Operations <notifications@updates.corexoperations.com>",
      to: [NOTIFY_EMAIL],
      subject: `New Assessment Lead: ${escapeHtml(lead.fullName)} (Tier ${escapeHtml(lead.tier)})`,
      html: internalEmailHtml,
    });

    console.log("Internal email sent:", internalEmail);

    // Send to Slack
    if (SLACK_WEBHOOK_URL) {
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
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (error) {
    console.error("Error in send-assessment-lead function:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
