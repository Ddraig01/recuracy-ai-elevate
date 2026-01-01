import { motion } from "framer-motion";
import { 
  Workflow, 
  FileText, 
  MessageSquare, 
  BarChart3, 
  Bot,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: MessageSquare,
    title: "Chatbot Development",
    description: "Imagine a tireless assistant, expertly trained on your company's data, that can engage customers 24/7. That's the power of our custom chatbots.",
    examples: [
      "Chatbot for your shopify store",
      "Airbnb guest support",
      "Onboarding assistant",
      "Staff training chatbot",
      "Personalized cold email outreach"
    ],
    color: "bg-pink-soft",
  },
  {
    icon: Workflow,
    title: "AI Workflow Automation",
    description: "Transform manual, repetitive processes into intelligent, automated workflows that run 24/7 with zero errors.",
    examples: [
      "Operations data entry",
      "Invoice processing",
      "CRM updates automation",
      "Employee onboarding",
      "Report generation"
    ],
    color: "bg-accent",
  },
  {
    icon: FileText,
    title: "Document Processing",
    description: "Eliminate manual data entry from PDFs, invoices, contracts, and forms using AI-powered extraction with 99.8% accuracy.",
    examples: [
      "Contract analysis",
      "Invoice extraction",
      "Claims processing",
      "Lease management",
      "Compliance documents"
    ],
    color: "bg-cream",
  },
  {
    icon: BarChart3,
    title: "Data Intelligence",
    description: "Automatically collect, analyze, and visualize your business data with AI-powered insights delivered to your inbox.",
    examples: [
      "Real-time dashboards",
      "Automated reports",
      "Anomaly detection",
      "Predictive analytics",
      "KPI monitoring"
    ],
    color: "bg-secondary",
  },
  {
    icon: Bot,
    title: "Custom AI Agents",
    description: "Build bespoke AI agents tailored to your unique business processes—from research assistants to autonomous sales agents.",
    examples: [
      "Research assistants",
      "Sales automation",
      "Customer service agents",
      "Content generation",
      "Process orchestration"
    ],
    color: "bg-pink-soft",
  }
];

const ServicesSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-24 gradient-section">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="section-label">Our Services</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display mt-4 mb-6">
            Comprehensive AI solutions for modern businesses
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="card-elevated p-6 h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center mb-5`}>
                  <service.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-display font-bold mb-3">{service.title}</h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-5">{service.description}</p>

                {/* Examples */}
                <div className="space-y-2 mb-6">
                  <p className="text-xs font-semibold text-foreground uppercase tracking-wider">Examples:</p>
                  <ul className="space-y-1">
                    {service.examples.slice(0, 4).map((example) => (
                      <li key={example} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <Button
                  variant="ghost"
                  className="p-0 h-auto text-primary hover:text-green-light group/btn"
                  onClick={scrollToContact}
                >
                  Learn more
                  <ArrowRight className="ml-1 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
