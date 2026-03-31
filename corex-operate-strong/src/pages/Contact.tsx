import { Layout } from "@/components/layout/Layout";
import { WaveDivider } from "@/components/shared/WaveDivider";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { MessageSquare, Target, ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import contactBg from "@/assets/contact-bg.jpg";
const callExpectations = [{
  icon: MessageSquare,
  title: "Scope Discussion",
  description: "Review your current operational challenges and objectives."
}, {
  icon: Target,
  title: "Fit Check",
  description: "Determine if our approach aligns with your situation."
}, {
  icon: ArrowRight,
  title: "Next Steps",
  description: "Agree on path forward if there's mutual fit."
}];
export default function Contact() {
  return <Layout>
      {/* Hero with Background Image */}
      <section className="relative min-h-[50vh] flex items-center">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: `url(${contactBg})`
      }}>
          <div className="absolute inset-0 bg-deep-navy/75" />
        </div>
        <WaveDivider variant="bottom" fill="fill-background" />
        
        <div className="container-wide mx-auto relative z-10 section-padding">
          <div className="max-w-3xl animate-fade-in">
            <Badge variant="outline" className="border-primary-blue text-primary-blue bg-white/10 mb-4">
              Contact
            </Badge>
            <h1 className="heading-display text-white mb-6">
              Book a call to discuss
              <br /><span className="heading-accent">your operations</span>.
            </h1>
            <p className="body-large text-white/80">
              30-minute call to understand your situation and determine if we can help.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left Column - What to Expect */}
            <div className="animate-fade-in">
              <h2 className="heading-card text-deep-navy mb-8">
                What happens on the call
              </h2>
              <div className="space-y-6">
                {callExpectations.map((item, index) => <div key={item.title} className="flex gap-4 group hover:bg-muted/50 p-4 -mx-4 transition-colors">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 bg-light-blue group-hover:bg-primary-blue/20 transition-colors">
                        <item.icon className="h-5 w-5 text-primary-blue" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-deep-navy mb-1">
                        {index + 1}. {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>)}
              </div>

              <Separator className="my-8" />

              <div className="bg-muted p-6 shadow-md">
                <h3 className="font-semibold text-deep-navy mb-4">Direct Contact</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                    <Mail className="h-4 w-4 text-primary-blue" />
                    <a href="mailto:eamonn@corexoperations.com" className="text-sm hover:text-primary-blue transition-colors">
                      eamonn@corexoperations.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                    <Phone className="h-4 w-4 text-primary-blue" />
                    <a href="tel:+353838278293" className="text-sm hover:text-primary-blue transition-colors">
                      +353 83 827 8293
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <MapPin className="h-4 w-4 text-primary-blue" />
                    <span className="text-sm">Dublin, Ireland</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Calendly */}
            <div className="animate-slide-up">
              <Card className="overflow-hidden shadow-xl border-2 border-border">
                <CardContent className="p-0">
                  <iframe src="https://calendly.com/eamonn-corexoperations/30min?hide_event_type_details=1&hide_gdpr_banner=1&text_color=005eb7&primary_color=4b5964" width="100%" height="700" frameBorder="0" title="Schedule a call with COREx" className="min-w-[320px]" />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>;
}