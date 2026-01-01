import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const pricingData = [
  {
    title: "AI Workflow Automation",
    tiers: [
      { name: "Simple (1-3 steps)", price: "₹10,000 - ₹12,000", type: "one-time" },
      { name: "Medium (4-8 steps)", price: "₹15,000 - ₹16,000", type: "one-time" },
      { name: "Complex (9+ steps)", price: "₹20,000 - ₹25,000", type: "one-time" }
    ],
    highlight: false
  },
  {
    title: "Document Processing",
    tiers: [
      { name: "Setup Fee", price: "₹25,000 - ₹30,000", type: "one-time" },
      { name: "1-1,000 docs", price: "₹15 - ₹25/doc", type: "per-use" },
      { name: "1,001-10,000 docs", price: "₹8 - ₹15/doc", type: "per-use" },
      { name: "10,000+ docs", price: "₹3 - ₹7/doc", type: "per-use" }
    ],
    highlight: false
  },
  {
    title: "Customer Communication",
    tiers: [
      { name: "Website Chatbot", price: "₹20,000 setup + ₹6,000/mo", type: "recurring" },
      { name: "Multi-channel", price: "₹35,000 setup + ₹10,000/mo", type: "recurring" },
      { name: "Custom AI Agent", price: "₹80,000 setup + ₹15,000/mo", type: "recurring" }
    ],
    highlight: true
  },
  {
    title: "Data Intelligence",
    tiers: [
      { name: "Standard Dashboard", price: "₹45,000 + ₹10,000/mo", type: "recurring" },
      { name: "Advanced Analytics", price: "₹90,000 + ₹25,000/mo", type: "recurring" }
    ],
    highlight: false
  },
  {
    title: "Custom AI Agents",
    tiers: [
      { name: "Standard Project", price: "₹1,50,000 - ₹2,50,000", type: "one-time" },
      { name: "Multi-Agent Complex", price: "₹5,00,000 - ₹8,00,000", type: "one-time" },
      { name: "Ongoing Support", price: "₹30,000 - ₹50,000/mo", type: "recurring" }
    ],
    highlight: false
  }
];

const PricingSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/50 via-background to-card/50" />
      
      {/* Floating Orbs */}
      <motion.div
        className="absolute top-1/3 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
        animate={{ x: [-20, 20, -20], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 right-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"
        animate={{ x: [20, -20, 20], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-accent font-medium text-sm tracking-wider uppercase">
            Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
            Transparent <span className="gradient-text">Investment Plans</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Flexible pricing designed for businesses of all sizes. Pay for what you need, 
            scale when you're ready.
          </p>
        </motion.div>

        {/* Pricing Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pricingData.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`glass-card p-6 relative overflow-hidden transition-all duration-300 hover:scale-[1.02] ${
                service.highlight ? "gradient-border glow-accent" : ""
              }`}
            >
              {service.highlight && (
                <div className="absolute top-4 right-4 px-3 py-1 bg-accent/20 rounded-full text-accent text-xs font-medium">
                  Popular
                </div>
              )}

              <h3 className="text-xl font-display font-bold mb-6">{service.title}</h3>

              <div className="space-y-4">
                {service.tiers.map((tier) => (
                  <div
                    key={tier.name}
                    className="flex items-start justify-between gap-4 pb-4 border-b border-border/50 last:border-0"
                  >
                    <div>
                      <p className="text-sm font-medium">{tier.name}</p>
                      <span className={`text-xs px-2 py-0.5 rounded-full mt-1 inline-block ${
                        tier.type === "one-time" 
                          ? "bg-secondary/20 text-secondary" 
                          : tier.type === "recurring"
                          ? "bg-accent/20 text-accent"
                          : "bg-primary/20 text-primary"
                      }`}>
                        {tier.type === "one-time" ? "One-time" : tier.type === "recurring" ? "Recurring" : "Per use"}
                      </span>
                    </div>
                    <p className="text-sm font-bold text-right gradient-text whitespace-nowrap">
                      {tier.price}
                    </p>
                  </div>
                ))}
              </div>

              <Button
                variant={service.highlight ? "gradient" : "glass"}
                className="w-full mt-6 group"
                onClick={scrollToContact}
              >
                Get Quote
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Custom Quote CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-4">
            Need a custom solution? We'll tailor a package specifically for your business.
          </p>
          <Button variant="gradient" size="lg" onClick={scrollToContact}>
            Request Custom Quote
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
