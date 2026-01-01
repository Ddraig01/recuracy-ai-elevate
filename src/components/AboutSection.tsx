import { motion } from "framer-motion";
import { Target, Lightbulb, Users, Shield } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Precision",
    description: "We deliver solutions with 99%+ accuracy, ensuring your automation runs flawlessly."
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Leveraging cutting-edge AI to solve complex business challenges creatively."
  },
  {
    icon: Users,
    title: "Partnership",
    description: "We work alongside your team, not just for you—building lasting relationships."
  },
  {
    icon: Shield,
    title: "Reliability",
    description: "24/7 operations with enterprise-grade security and consistent performance."
  }
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-medium text-sm tracking-wider uppercase">
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
              Building the Future of{" "}
              <span className="gradient-text">Business Automation</span>
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                At <span className="text-foreground font-semibold">Recuracy</span>, 
                we believe every business deserves the power of intelligent automation. 
                We're a team of AI engineers, automation specialists, and business 
                strategists dedicated to transforming how companies operate.
              </p>
              <p>
                From startups to enterprises, we've helped organizations eliminate 
                thousands of hours of manual work, reduce errors to near zero, and 
                unlock growth they never thought possible.
              </p>
              <p>
                Our approach combines deep technical expertise with a genuine 
                understanding of business challenges. We don't just build tools—we 
                build solutions that drive real results.
              </p>
            </div>
          </motion.div>

          {/* Right - Values Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-card p-5 sm:p-6"
              >
                <value.icon className="w-8 h-8 text-secondary mb-4" />
                <h3 className="font-display font-bold text-lg mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 glass-card p-8 sm:p-12 gradient-border"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "50+", label: "Projects Delivered" },
              { value: "99.8%", label: "Accuracy Rate" },
              { value: "10,000+", label: "Hours Saved" },
              { value: "100%", label: "Client Satisfaction" }
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl sm:text-4xl font-display font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
