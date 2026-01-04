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
        <title>Recuracy - AI-Powered Business Automation | Transform Your Operations</title>
        <meta
          name="description"
          content="Transform manual processes into intelligent automated workflows with Recuracy. AI workflow automation, document processing, chatbots & custom AI agents. 99.8% accuracy guaranteed."
        />
        <meta
          name="keywords"
          content="AI automation, business automation, workflow automation, document processing, AI chatbots, custom AI agents, India AI services"
        />
        <link rel="canonical" href="https://recuracy.com" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Recuracy - AI-Powered Business Automation" />
        <meta
          property="og:description"
          content="Transform manual processes into intelligent automated workflows. 99.8% accuracy, 24/7 operations."
        />
        <meta property="og:url" content="https://recuracy.com" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Recuracy - AI-Powered Business Automation" />
        <meta
          name="twitter:description"
          content="Transform manual processes into intelligent automated workflows. 99.8% accuracy, 24/7 operations."
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
