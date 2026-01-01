import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({ name: "", email: "", company: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 animated-gradient-bg opacity-50" />
      
      {/* Gradient Orbs */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
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
          <span className="text-secondary font-medium text-sm tracking-wider uppercase">
            Get Started
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
            Let's Build Your{" "}
            <span className="gradient-text">AI Automation</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Ready to transform your business operations? Reach out and let's discuss 
            how we can automate your workflows.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-6 sm:p-8"
          >
            <h3 className="text-xl font-display font-bold mb-6">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">
                    Your Name
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">
                    Email Address
                  </label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-2 block">
                  Company Name
                </label>
                <Input
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your Company"
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-2 block">
                  Tell us about your project
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your automation needs, current challenges, or any questions..."
                  rows={5}
                  required
                />
              </div>
              <Button
                type="submit"
                variant="gradient"
                size="lg"
                className="w-full group"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            {/* Quick Info Cards */}
            <div className="glass-card p-6">
              <Mail className="w-6 h-6 text-secondary mb-3" />
              <h4 className="font-display font-bold mb-1">Email Us</h4>
              <p className="text-muted-foreground text-sm mb-2">
                We respond within 24 hours
              </p>
              <a
                href="mailto:hello@recuracy.com"
                className="text-secondary hover:text-secondary/80 transition-colors font-medium"
              >
                hello@recuracy.com
              </a>
            </div>

            <div className="glass-card p-6">
              <Clock className="w-6 h-6 text-accent mb-3" />
              <h4 className="font-display font-bold mb-1">Quick Response</h4>
              <p className="text-muted-foreground text-sm">
                Get a detailed proposal within 48 hours after our discovery call. 
                We value your time.
              </p>
            </div>

            <div className="glass-card p-6">
              <MapPin className="w-6 h-6 text-primary mb-3" />
              <h4 className="font-display font-bold mb-1">Work With Us Globally</h4>
              <p className="text-muted-foreground text-sm">
                We work with clients worldwide. Remote-first approach ensures 
                seamless collaboration across time zones.
              </p>
            </div>

            {/* CTA Card */}
            <div className="glass-card p-6 gradient-border">
              <h4 className="font-display font-bold text-lg mb-2">
                Not sure where to start?
              </h4>
              <p className="text-muted-foreground text-sm mb-4">
                Book a free 30-minute consultation. We'll analyze your current 
                processes and identify automation opportunities.
              </p>
              <Button variant="glass" className="group">
                Schedule Free Consultation
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
