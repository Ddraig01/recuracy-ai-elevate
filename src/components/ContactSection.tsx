import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, ArrowRight } from "lucide-react";
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
    <section id="contact" className="py-24 gradient-section">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="section-label">Contact</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display mt-4 mb-6">
            Let's build something amazing together
          </h2>
          <p className="text-muted-foreground text-lg">
            Ready to automate your business? Get in touch and we'll create a custom solution for you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card-elevated p-8"
          >
            <h3 className="text-xl font-display font-bold mb-6">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Your Name
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="bg-muted/50"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Email Address
                  </label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    required
                    className="bg-muted/50"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Company Name
                </label>
                <Input
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your Company"
                  className="bg-muted/50"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  How can we help?
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your automation needs..."
                  rows={5}
                  required
                  className="bg-muted/50"
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
            <div className="card-soft p-6">
              <Mail className="w-8 h-8 text-primary mb-4" />
              <h4 className="font-display font-bold text-lg mb-2">Email Us</h4>
              <p className="text-muted-foreground text-sm mb-3">
                We respond within 24 hours
              </p>
              <a
                href="mailto:hello@recuracy.com"
                className="text-primary hover:text-green-light transition-colors font-semibold"
              >
                hello@recuracy.com
              </a>
            </div>

            <div className="card-soft p-6">
              <Phone className="w-8 h-8 text-primary mb-4" />
              <h4 className="font-display font-bold text-lg mb-2">Call Us</h4>
              <p className="text-muted-foreground text-sm mb-3">
                Available Mon-Fri, 9am-6pm IST
              </p>
              <a
                href="tel:+919876543210"
                className="text-primary hover:text-green-light transition-colors font-semibold"
              >
                +91 98765 43210
              </a>
            </div>

            <div className="card-elevated p-6 border-primary/20">
              <h4 className="font-display font-bold text-lg mb-2">
                Free Consultation
              </h4>
              <p className="text-muted-foreground text-sm mb-4">
                Book a 30-minute call to discuss your automation needs. We'll analyze your processes and identify quick wins.
              </p>
              <Button variant="outline" className="group">
                Book A Call
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
