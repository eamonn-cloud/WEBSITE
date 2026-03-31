import { Link } from "react-router-dom";
import { Shield, Lock, Eye, FileCheck, Linkedin, Instagram } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import corexLogoFull from "@/assets/corex-logo-full.svg";

const navigation = {
  main: [
    { name: "How We Work", href: "/how-we-work" },
    { name: "What We Fix", href: "/what-we-fix" },
    { name: "Assessment", href: "/assessment" },
    { name: "Partnerships", href: "/partnerships" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ],
};

const trustItems = [
  { icon: Shield, text: "Client data is isolated" },
  { icon: Lock, text: "No public model training" },
  { icon: Eye, text: "Human approval gates" },
  { icon: FileCheck, text: "Audit trails available" },
];

export function Footer() {
  return (
    <footer className="bg-deep-navy text-white">
      {/* Trust Block */}
      <div className="bg-background border-b border-border">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h3 className="label-caps text-primary-blue mb-8 text-center">
            Trust & Governance
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustItems.map((item) => (
              <div key={item.text} className="flex flex-col items-center text-center gap-3">
                <div className="p-3 bg-light-blue">
                  <item.icon className="h-5 w-5 text-primary-blue" />
                </div>
                <span className="text-sm text-foreground">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Logo */}
          <div>
            <Link to="/" className="flex items-center">
              <img src={corexLogoFull} alt="COREx Operations" className="h-8 w-auto" />
            </Link>
            <p className="mt-2 text-sm text-white/50 max-w-sm">
              We install the Operational Excellence System that eliminates €1M–€5M in annual leakage.
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap gap-x-8 gap-y-4">
            {navigation.main.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        <Separator className="my-8 bg-white/10" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} COREx Operations. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-sm text-white/40">Privacy Policy</span>
            <span className="text-sm text-white/40">Terms of Service</span>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/company/corex-operations/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/corexoperations"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
