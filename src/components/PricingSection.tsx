import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const pricingData = [
  {
    title: "AI Workflow Automation",
    description: "Automate repetitive tasks with intelligent workflows",
    startingPrice: "₹10,000",
    features: [
      "Simple workflows (1-3 steps): ₹10,000 - ₹12,000",
      "Medium (4-8 steps): ₹15,000 - ₹16,000",
      "Complex (9+ steps): ₹20,000 - ₹25,000",
      "2-week post-launch support",
      "Documentation & training included"
    ],
    timeline: "3-6 weeks",
    popular: false
  },
  {
    title: "Customer Communication",
    description: "24/7 AI chatbots across all channels",
    startingPrice: "₹20,000",
    features: [
      "Website chatbot: ₹20,000 + ₹6,000/mo",
      "Multi-channel: ₹35,000 + ₹10,000/mo",
      "Custom AI Agent: ₹80,000+",
      "GPT-4 powered conversations",
      "CRM integration included"
    ],
    timeline: "3-5 weeks",
    popular: true
  },
  {
    title: "Document Processing",
    description: "AI-powered extraction with 99.8% accuracy",
    startingPrice: "₹25,000",
    features: [
      "Setup: ₹25,000 - ₹30,000",
      "1-1,000 docs: ₹15-25 per doc",
      "1,001-10,000: ₹8-15 per doc",
      "10,000+: ₹3-7 per doc",
      "OCR for scanned documents"
    ],
    timeline: "4-8 weeks",
    popular: false
  },
  {
    title: "Data Intelligence",
    description: "AI-powered insights delivered to your inbox",
    startingPrice: "₹45,000",
    features: [
      "Standard: ₹45,000 + ₹10,000/mo",
      "Advanced: ₹90,000 + ₹25,000/mo",
      "Custom dashboards",
      "Predictive analytics",
      "Automated daily reports"
    ],
    timeline: "4-6 weeks",
    popular: false
  },
  {
    title: "Custom AI Agents",
    description: "Bespoke AI for unique business needs",
    startingPrice: "₹1,50,000",
    features: [
      "Standard: ₹1,50,000 - ₹2,50,000",
      "Multi-Agent: ₹5,00,000 - ₹8,00,000",
      "Support: ₹30,000-50,000/mo",
      "3 months post-launch support",
      "Full API documentation"
    ],
    timeline: "8-12 weeks",
    popular: false
  }
];

const PricingSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="section-label">Pricing</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display mt-4 mb-6">
            Transparent pricing for every business
          </h2>
          <p className="text-muted-foreground text-lg">
            Flexible plans that grow with you. No hidden fees, just honest pricing.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pricingData.map((plan, index) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative ${plan.popular ? "lg:-mt-4 lg:mb-4" : ""}`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                  Most Popular
                </div>
              )}
              <div className={`card-elevated p-6 h-full flex flex-col ${
                plan.popular ? "border-primary border-2 shadow-xl" : ""
              }`}>
                <div className="mb-6">
                  <h3 className="text-xl font-display font-bold mb-2">{plan.title}</h3>
                  <p className="text-muted-foreground text-sm">{plan.description}</p>
                </div>

                <div className="mb-6">
                  <span className="text-sm text-muted-foreground">Starting at</span>
                  <div className="text-3xl font-display font-bold text-primary">
                    {plan.startingPrice}
                  </div>
                  <span className="text-sm text-muted-foreground">Timeline: {plan.timeline}</span>
                </div>

                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.popular ? "gradient" : "outline"}
                  className="w-full group"
                  onClick={scrollToContact}
                >
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom Quote CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Need something custom? Let's build the perfect solution for your business.
          </p>
          <Button variant="glass" size="lg" onClick={scrollToContact}>
            Request Custom Quote
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
