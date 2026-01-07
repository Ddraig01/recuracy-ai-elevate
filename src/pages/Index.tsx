import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import ServicesSection from "@/components/ServicesSection";

import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Recuracy — AI Automation & Agentic Solutions Company</title>

        <meta
          name="description"
          content="Recuracy is an AI automation company building intelligent workflows, agentic AI systems, and custom automation solutions for modern businesses."
        />

        <meta
          name="keywords"
          content="AI automation, agentic AI, business automation, workflow automation, AI agents, document processing, AI chatbots"
        />

        <link rel="canonical" href="https://recuracy.com" />

        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Recuracy — AI Automation & Agentic Solutions Company"
        />
        <meta
          property="og:description"
          content="Recuracy builds intelligent AI automation systems that eliminate manual work and accelerate business growth."
        />
        <meta property="og:url" content="https://recuracy.com" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Recuracy — AI Automation & Agentic Solutions Company"
        />
        <meta
          name="twitter:description"
          content="Recuracy builds intelligent AI automation systems that eliminate manual work and accelerate business growth."
        />
      </Helmet>

      <main className="min-h-screen bg-background overflow-x-hidden">
        <Navbar />
        <HeroSection />
        <BenefitsSection />
        <ServicesSection />

        <ContactSection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
