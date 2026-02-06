import { ArrowRight, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="py-12 border-t border-border/50 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <a
              href="#"
              className="font-display text-xl font-bold gradient-text"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Surender.AI
            </a>

            {/* CTA */}
            <Button
              variant="hero"
              size="default"
              onClick={scrollToContact}
              className="group"
            >
              Hire Me for a Project
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>

            {/* Copyright */}
            <p className="text-muted-foreground text-sm flex items-center gap-1">
              © {new Date().getFullYear()} Built with{" "}
              <Heart className="w-4 h-4 text-secondary fill-secondary" /> by Surender Singh
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
