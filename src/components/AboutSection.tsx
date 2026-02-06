import { Bot, Shield, Brain } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="section-padding relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass neon-border">
                <span className="text-xs text-primary font-medium uppercase tracking-wider">About Me</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold">
                Hi, I'm{" "}
                <span className="gradient-text">Surender Singh</span>
              </h2>
              
              <p className="text-muted-foreground text-lg leading-relaxed">
                I'm a passionate technologist specializing in <span className="text-primary font-medium">Python programming</span>, 
                <span className="text-secondary font-medium"> Data Science</span>, and strategic AI implementation. 
                My focus is on building solutions that don't just work—they work securely and intelligently.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                What drives me? Building <span className="text-primary font-medium">Agentic AI systems</span> that solve 
                real customer support problems. I believe AI should augment human capabilities, not replace them—creating 
                seamless experiences that delight customers while empowering businesses.
              </p>

              <div className="pt-4 flex flex-wrap gap-3">
                <span className="px-4 py-2 rounded-lg glass neon-border text-sm text-primary">
                  Python Expert
                </span>
                <span className="px-4 py-2 rounded-lg glass neon-border-purple text-sm text-secondary">
                  AI Strategist
                </span>
                <span className="px-4 py-2 rounded-lg glass neon-border text-sm text-primary">
                  Security-First
                </span>
              </div>
            </div>

            {/* Right: Feature Cards */}
            <div className="grid gap-4">
              <div className="glass rounded-2xl p-6 neon-border hover:shadow-[0_0_30px_hsl(185_100%_50%/0.2)] transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Brain className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">Data Science Expertise</h3>
                <p className="text-muted-foreground text-sm">
                  Transforming raw data into actionable insights that drive business decisions.
                </p>
              </div>

              <div className="glass rounded-2xl p-6 neon-border-purple hover:shadow-[0_0_30px_hsl(270_100%_65%/0.2)] transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Bot className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">Generative AI Pioneer</h3>
                <p className="text-muted-foreground text-sm">
                  Building intelligent chatbots and AI agents that understand and respond naturally.
                </p>
              </div>

              <div className="glass rounded-2xl p-6 neon-border hover:shadow-[0_0_30px_hsl(185_100%_50%/0.2)] transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">DevSecOps Champion</h3>
                <p className="text-muted-foreground text-sm">
                  Implementing secure CI/CD pipelines that protect your code from day one.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
