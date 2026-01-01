import { motion } from "framer-motion";
import { 
  Workflow, 
  FileText, 
  MessageSquare, 
  BarChart3, 
  Bot,
  ArrowRight,
  Check
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: 1,
    icon: Workflow,
    title: "AI Workflow Automation",
    description: "Transform manual, repetitive processes into intelligent, automated workflows running 24/7 with zero errors.",
    features: [
      "Discovery & process mapping",
      "Custom workflow design",
      "Tool integrations (CRM, email, databases)",
      "99%+ accuracy guarantee"
    ],
    bestFor: ["Operations teams", "Finance teams", "Sales teams", "HR teams"],
    timeline: "3-6 weeks",
    color: "secondary"
  },
  {
    id: 2,
    icon: FileText,
    title: "Intelligent Document Processing",
    description: "Eliminate manual data entry from PDFs, invoices, contracts using AI extraction with 99.8% accuracy.",
    features: [
      "AI model training per document type",
      "Automated validation & error handling",
      "OCR for scanned documents",
      "Ongoing model optimization"
    ],
    bestFor: ["Legal firms", "Accounting firms", "Real estate agencies", "Insurance companies"],
    timeline: "4-8 weeks",
    color: "accent"
  },
  {
    id: 3,
    icon: MessageSquare,
    title: "Customer Communication Automation",
    description: "Deploy AI chatbots handling customer inquiries, lead qualification, and support—24/7 across all channels.",
    features: [
      "GPT-4 powered chatbots",
      "Multi-channel (Website, WhatsApp, SMS)",
      "CRM integration for lead capture",
      "Smart human handoff"
    ],
    bestFor: ["E-commerce sites", "Service businesses", "SaaS companies", "Real estate agencies"],
    timeline: "3-5 weeks",
    color: "primary"
  },
  {
    id: 4,
    icon: BarChart3,
    title: "Data Intelligence & Reporting",
    description: "Automatically collect, analyze, and visualize your business data with AI-powered insights delivered daily.",
    features: [
      "Custom dashboard creation",
      "Automated report generation",
      "AI anomaly detection",
      "Predictive analytics"
    ],
    bestFor: ["Leadership teams", "Marketing agencies", "Sales teams", "Operations teams"],
    timeline: "4-6 weeks",
    color: "secondary"
  },
  {
    id: 5,
    icon: Bot,
    title: "Custom AI Agent Development",
    description: "Build bespoke AI agents tailored to your unique processes—from research assistants to autonomous sales agents.",
    features: [
      "Custom AI development",
      "Multi-agent orchestration",
      "API & database integration",
      "3 months post-launch support"
    ],
    bestFor: ["Complex business processes", "Research operations", "Enterprises", "Compliance-heavy industries"],
    timeline: "8-12 weeks",
    color: "accent"
  }
];

const colorVariants = {
  secondary: {
    icon: "text-secondary",
    glow: "group-hover:shadow-[0_0_60px_-15px_hsl(var(--secondary)/0.4)]",
    border: "group-hover:border-secondary/30"
  },
  accent: {
    icon: "text-accent",
    glow: "group-hover:shadow-[0_0_60px_-15px_hsl(var(--accent)/0.4)]",
    border: "group-hover:border-accent/30"
  },
  primary: {
    icon: "text-primary",
    glow: "group-hover:shadow-[0_0_60px_-15px_hsl(var(--primary)/0.4)]",
    border: "group-hover:border-primary/30"
  }
};

const ServicesSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-secondary font-medium text-sm tracking-wider uppercase">
            What We Offer
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
            Our <span className="gradient-text">Service Portfolio</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            End-to-end AI automation solutions designed to eliminate manual work and 
            supercharge your business operations.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid gap-8">
          {services.map((service, index) => {
            const colorStyle = colorVariants[service.color as keyof typeof colorVariants];
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group glass-card p-6 sm:p-8 transition-all duration-500 ${colorStyle.glow} ${colorStyle.border}`}
              >
                <div className="grid lg:grid-cols-[1fr,auto] gap-6">
                  {/* Main Content */}
                  <div>
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`p-3 rounded-xl bg-muted ${colorStyle.icon}`}>
                        <service.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-display font-bold mb-2">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="grid sm:grid-cols-2 gap-3 mt-6">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                          <Check className={`w-4 h-4 ${colorStyle.icon}`} />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Best For Tags */}
                    <div className="flex flex-wrap gap-2 mt-6">
                      {service.bestFor.map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1 text-xs rounded-full bg-muted text-muted-foreground"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Timeline & CTA */}
                  <div className="flex flex-col justify-between items-start lg:items-end gap-4">
                    <div className="text-right">
                      <span className="text-xs text-muted-foreground uppercase tracking-wider">Timeline</span>
                      <p className={`text-lg font-display font-bold ${colorStyle.icon}`}>
                        {service.timeline}
                      </p>
                    </div>
                    <Button
                      variant="glass"
                      size="sm"
                      className="group/btn"
                      onClick={scrollToContact}
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
