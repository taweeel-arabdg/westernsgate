import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import SEO from "./pages/services/SEO";
import Photography from "./pages/services/Photography";
import Development from "./pages/services/Development";
import Ads from "./pages/services/Ads";
import Design from "./pages/services/Design";
import SocialMedia from "./pages/services/SocialMedia";
import AI from "./pages/services/AI";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/seo" element={<SEO />} />
          <Route path="/services/photography" element={<Photography />} />
          <Route path="/services/development" element={<Development />} />
          <Route path="/services/ads" element={<Ads />} />
          <Route path="/services/design" element={<Design />} />
          <Route path="/services/social-media" element={<SocialMedia />} />
          <Route path="/services/ai" element={<AI />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
