import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(185 100% 50% / 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(185 100% 50% / 0.3) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass neon-border mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">AI Solutions Architect</span>
          </div>

          {/* Main Headline */}
          <h1 
            className="text-4xl md:text-5xl lg:text-7xl font-display font-bold leading-tight mb-6 animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            Building{" "}
            <span className="gradient-text">Secure, Intelligent</span>
            <br />
            AI Solutions for Your Business
          </h1>

          {/* Subheadline */}
          <p 
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Bridging the gap between Data Science, DevSecOps, and Generative AI 
            to transform your business operations.
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <Button
              variant="hero"
              size="xl"
              onClick={scrollToContact}
              className="group animate-glow"
            >
              Hire Me for a Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="hero-outline"
              size="xl"
              onClick={() => {
                const element = document.querySelector("#services");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
            >
              View Services
            </Button>
          </div>

          {/* Stats */}
          <div 
            className="grid grid-cols-3 gap-8 mt-16 max-w-md mx-auto animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-display font-bold text-primary">6+</div>
              <div className="text-xs text-muted-foreground mt-1">Certifications</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-display font-bold text-secondary">AI</div>
              <div className="text-xs text-muted-foreground mt-1">Specialized</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-display font-bold gradient-text">100%</div>
              <div className="text-xs text-muted-foreground mt-1">Secure Code</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
