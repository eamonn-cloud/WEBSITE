import { Link, useLocation } from "react-router-dom";
import { Menu, ArrowRight, ChevronDown } from "lucide-react";
import corexLogo from "@/assets/corex-logo.jpg";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { cn } from "@/lib/utils";

const industries = [
  { name: "Professional Services", href: "/industries/professional-services" },
  { name: "Recruitment", href: "/industries/recruitment" },
  { name: "Construction", href: "/industries/construction" },
  { name: "Lending & Finance", href: "/industries/lending-finance" },
  { name: "Property", href: "/industries/property" },
  { name: "Agencies", href: "/industries/agencies" },
];

const navigation = [
  { name: "What We Fix", href: "/what-we-fix" },
  { name: "Assessment", href: "/assessment" },
  { name: "Partnerships", href: "/partnerships" },
  { name: "Insights", href: "/insights" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const location = useLocation();

  const isIndustryActive = location.pathname.startsWith("/industries") || location.pathname.startsWith("/how-we-work");

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={corexLogo} alt="COREx Operations" className="h-8 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-6">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger 
                    className={cn(
                      "bg-transparent hover:bg-transparent hover:text-primary-blue text-sm font-medium",
                      isIndustryActive ? "text-primary-blue" : "text-muted-foreground"
                    )}
                  >
                    How We Work
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[280px] bg-background border border-border shadow-lg p-2">
                      {/* Main How We Work Link */}
                      <NavigationMenuLink asChild>
                        <Link
                          to="/how-we-work"
                          className="block px-4 py-3 text-sm font-semibold text-foreground hover:bg-primary-blue hover:text-white transition-colors border-b border-border mb-2"
                        >
                          Our Methodology
                        </Link>
                      </NavigationMenuLink>

                      {/* AI in Operations Link */}
                      <NavigationMenuLink asChild>
                        <Link
                          to="/how-we-work/ai-in-operations"
                          className={cn(
                            "flex items-center gap-2 px-4 py-3 text-sm font-semibold transition-colors border-b border-border mb-2",
                            location.pathname === "/how-we-work/ai-in-operations"
                              ? "bg-primary-blue text-white"
                              : "text-primary-blue hover:bg-primary-blue hover:text-white"
                          )}
                        >
                          <span className="w-2 h-2 bg-primary-blue rounded-full" />
                          The AI Engine
                        </Link>
                      </NavigationMenuLink>
                      
                      {/* Industry Links */}
                      <div className="space-y-1">
                        <p className="px-4 py-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                          Industries We Serve
                        </p>
                        {industries.map((industry) => (
                          <NavigationMenuLink key={industry.name} asChild>
                            <Link
                              to={industry.href}
                              className={cn(
                                "block px-4 py-2 text-sm transition-colors hover:bg-primary-blue hover:text-white",
                                location.pathname === industry.href 
                                  ? "bg-primary-blue/10 text-primary-blue font-medium" 
                                  : "text-foreground"
                              )}
                            >
                              {industry.name}
                            </Link>
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary-blue ${
                  location.pathname === item.href
                    ? "text-primary-blue"
                    : "text-muted-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex lg:items-center lg:gap-3">
            <Button variant="cta" size="sm" asChild>
              <Link to="/contact">Schedule a Call</Link>
            </Button>
          </div>

          {/* Mobile menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle className="text-left">
                  <img src={corexLogo} alt="COREx Operations" className="h-8 w-auto" />
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-4 mt-8">
                {/* How We Work with expandable industries */}
                <div>
                  <button
                    onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)}
                    className={cn(
                      "flex items-center justify-between w-full text-base font-medium py-2 transition-colors hover:text-primary-blue",
                      isIndustryActive ? "text-primary-blue" : "text-foreground"
                    )}
                  >
                    How We Work
                    <ChevronDown className={cn(
                      "h-4 w-4 transition-transform",
                      mobileIndustriesOpen && "rotate-180"
                    )} />
                  </button>
                  
                  {mobileIndustriesOpen && (
                    <div className="pl-4 mt-2 space-y-2 border-l-2 border-primary-blue/20">
                      <Link
                        to="/how-we-work"
                        className="block text-sm font-medium py-1.5 text-foreground hover:text-primary-blue"
                        onClick={() => setOpen(false)}
                      >
                        Our Methodology
                      </Link>
                      <Link
                        to="/how-we-work/ai-in-operations"
                        className={cn(
                          "flex items-center gap-2 text-sm font-medium py-1.5 transition-colors hover:text-primary-blue",
                          location.pathname === "/how-we-work/ai-in-operations"
                            ? "text-primary-blue"
                            : "text-primary-blue/80"
                        )}
                        onClick={() => setOpen(false)}
                      >
                        <span className="w-1.5 h-1.5 bg-primary-blue rounded-full" />
                        The AI Engine
                      </Link>
                      <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground pt-2">
                        Industries
                      </p>
                      {industries.map((industry) => (
                        <Link
                          key={industry.name}
                          to={industry.href}
                          className={cn(
                            "block text-sm py-1.5 transition-colors hover:text-primary-blue",
                            location.pathname === industry.href 
                              ? "text-primary-blue font-medium" 
                              : "text-muted-foreground"
                          )}
                          onClick={() => setOpen(false)}
                        >
                          {industry.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`text-base font-medium py-2 transition-colors hover:text-primary-blue ${
                      location.pathname === item.href
                        ? "text-primary-blue"
                        : "text-foreground"
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Separator className="my-2" />
                <div className="flex flex-col gap-3">
                  <Button variant="cta" asChild>
                    <Link to="/assessment" onClick={() => setOpen(false)} className="flex items-center justify-center gap-2">
                      Take Assessment
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="ctaOutline" asChild>
                    <Link to="/contact" onClick={() => setOpen(false)}>
                      Book a Call
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
