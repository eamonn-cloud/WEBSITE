import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import HowWeWork from "./pages/HowWeWork";
import AIInOperations from "./pages/AIInOperations";
import WhatWeFix from "./pages/WhatWeFix";
import Assessment from "./pages/Assessment";
import Partnerships from "./pages/Partnerships";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import Insights from "./pages/Insights";
import BlogPost from "./pages/BlogPost";
import NotFound from "./pages/NotFound";

// Industry Pages
import ProfessionalServices from "./pages/industries/ProfessionalServices";
import Recruitment from "./pages/industries/Recruitment";
import Construction from "./pages/industries/Construction";
import LendingFinance from "./pages/industries/LendingFinance";
import Property from "./pages/industries/Property";
import Agencies from "./pages/industries/Agencies";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/how-we-work" element={<HowWeWork />} />
          <Route path="/how-we-work/ai-in-operations" element={<AIInOperations />} />
          <Route path="/what-we-fix" element={<WhatWeFix />} />
          <Route path="/assessment" element={<Assessment />} />
          <Route path="/partnerships" element={<Partnerships />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/insights/:id" element={<BlogPost />} />
          
          {/* Industry Pages */}
          <Route path="/industries/professional-services" element={<ProfessionalServices />} />
          <Route path="/industries/recruitment" element={<Recruitment />} />
          <Route path="/industries/construction" element={<Construction />} />
          <Route path="/industries/lending-finance" element={<LendingFinance />} />
          <Route path="/industries/property" element={<Property />} />
          <Route path="/industries/agencies" element={<Agencies />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
