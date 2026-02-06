import { MessageSquareText, Shield, LineChart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: MessageSquareText,
    title: "AI-Powered Customer Support",
    description: "Transform your customer service with intelligent chatbots powered by Generative AI. Reduce response times, increase satisfaction, and scale your support effortlessly.",
    features: ["24/7 Automated Responses", "Natural Language Understanding", "Seamless Human Handoff"],
    color: "primary",
  },
  {
    icon: Shield,
    title: "Secure Pipeline Architecture",
    description: "Implement DevSecOps practices that protect your code from development to deployment. Build trust with customers through robust security measures.",
    features: ["CI/CD Security Integration", "Vulnerability Scanning", "Compliance Automation"],
    color: "secondary",
  },
  {
    icon: LineChart,
    title: "Data-Driven Strategy",
    description: "Turn your data into competitive advantage. Get actionable insights that inform better decisions and drive measurable business growth.",
    features: ["Predictive Analytics", "Business Intelligence Dashboards", "Custom Data Models"],
    color: "primary",
  },
];

export function ServicesSection() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="section-padding relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-secondary/5" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass neon-border mb-4">
              <span className="text-xs text-primary font-medium uppercase tracking-wider">What I Offer</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
              Services That <span className="gradient-text">Drive Results</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              End-to-end solutions designed for business owners who want to leverage AI and secure development practices.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div
                key={service.title}
                className={`group relative glass rounded-2xl p-8 ${
                  service.color === "primary" ? "neon-border" : "neon-border-purple"
                } hover:shadow-[0_0_40px_hsl(${service.color === "primary" ? "185_100%_50%" : "270_100%_65%"}/0.2)] transition-all duration-500 flex flex-col`}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl ${
                  service.color === "primary" ? "bg-primary/10" : "bg-secondary/10"
                } flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  <service.icon className={`w-8 h-8 ${
                    service.color === "primary" ? "text-primary" : "text-secondary"
                  }`} />
                </div>

                {/* Title */}
                <h3 className="font-display text-xl font-semibold mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <div className={`w-1.5 h-1.5 rounded-full ${
                        service.color === "primary" ? "bg-primary" : "bg-secondary"
                      }`} />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  onClick={scrollToContact}
                  className={`inline-flex items-center gap-2 text-sm font-medium ${
                    service.color === "primary" ? "text-primary" : "text-secondary"
                  } group-hover:gap-3 transition-all`}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-6">
              Not sure which service fits your needs?
            </p>
            <Button
              variant="hero"
              size="lg"
              onClick={scrollToContact}
              className="animate-glow"
            >
              Let's Discuss Your Project
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
