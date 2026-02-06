import { useState } from "react";
import { Send, Linkedin, Github, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  project: z.string().trim().min(1, "Project details are required").max(1000, "Project details must be less than 1000 characters"),
});

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
  });
  const [errors, setErrors] = useState<{ name?: string; email?: string; project?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    
    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: typeof errors = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as keyof typeof errors] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast.success("Message sent successfully! I'll get back to you soon.");
    setFormData({ name: "", email: "", project: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section id="contact" className="section-padding relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass neon-border-purple mb-4">
              <Mail className="w-4 h-4 text-secondary" />
              <span className="text-xs text-secondary font-medium uppercase tracking-wider">Get in Touch</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
              Let's Build Something <span className="gradient-text">Amazing</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Ready to transform your business with AI? I'm here to help you navigate the future of technology.
            </p>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 md:p-10 neon-border mb-12">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg bg-muted/50 border ${
                    errors.name ? "border-destructive" : "border-border"
                  } focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors`}
                  placeholder="John Doe"
                />
                {errors.name && (
                  <p className="text-destructive text-xs mt-1">{errors.name}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg bg-muted/50 border ${
                    errors.email ? "border-destructive" : "border-border"
                  } focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors`}
                  placeholder="john@example.com"
                />
                {errors.email && (
                  <p className="text-destructive text-xs mt-1">{errors.email}</p>
                )}
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="project" className="block text-sm font-medium mb-2">
                Project Details
              </label>
              <textarea
                id="project"
                name="project"
                value={formData.project}
                onChange={handleChange}
                rows={5}
                className={`w-full px-4 py-3 rounded-lg bg-muted/50 border ${
                  errors.project ? "border-destructive" : "border-border"
                } focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors resize-none`}
                placeholder="Tell me about your project and how I can help..."
              />
              {errors.project && (
                <p className="text-destructive text-xs mt-1">{errors.project}</p>
              )}
            </div>

            <Button
              type="submit"
              variant="hero"
              size="lg"
              className="w-full md:w-auto"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send className="w-4 h-4" />
                </>
              )}
            </Button>
          </form>

          {/* Social Links */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <span className="text-muted-foreground text-sm">Or connect with me on:</span>
            <div className="flex items-center gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl glass neon-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl glass neon-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="mailto:surender@example.com"
                className="w-12 h-12 rounded-xl glass neon-border flex items-center justify-center text-muted-foreground hover:text-secondary hover:border-secondary/50 transition-all duration-300 hover:scale-110"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
