import { motion } from "framer-motion";
import { Clock, TrendingUp, Shield, Zap } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Save 1000+ Hours",
    description: "Automate repetitive tasks and free your team to focus on what truly matters—growing your business.",
  },
  {
    icon: TrendingUp,
    title: "99.8% Accuracy",
    description: "AI-powered precision eliminates human errors, ensuring consistent and reliable results every time.",
  },
  {
    icon: Zap,
    title: "24/7 Operations",
    description: "Your automated workflows never sleep. Handle customer queries, process documents, and generate reports around the clock.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade encryption and compliance-ready solutions to keep your sensitive data protected.",
  },
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="section-label">Why Choose Us</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display mt-4 mb-6">
            The benefits of intelligent automation
          </h2>
          <p className="text-muted-foreground text-lg">
            Join hundreds of businesses that have transformed their operations with our AI solutions.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-elevated p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground text-sm">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
