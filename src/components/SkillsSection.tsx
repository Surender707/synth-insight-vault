import { Code, Database, Cloud, Container, Cpu, GitBranch, Bot, Shield, BarChart3 } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    color: "primary",
    skills: [
      { name: "Python", icon: Code, level: 95 },
      { name: "SQL", icon: Database, level: 85 },
      { name: "HTML/CSS", icon: Code, level: 80 },
    ],
  },
  {
    title: "Domain Expertise",
    color: "secondary",
    skills: [
      { name: "Data Science", icon: BarChart3, level: 90 },
      { name: "Generative AI (LLMs)", icon: Bot, level: 92 },
      { name: "Agentic AI", icon: Cpu, level: 88 },
      { name: "DevSecOps", icon: Shield, level: 85 },
      { name: "CI/CD Pipelines", icon: GitBranch, level: 82 },
    ],
  },
  {
    title: "Tools & Platforms",
    color: "primary",
    skills: [
      { name: "IBM Watson", icon: Cloud, level: 85 },
      { name: "Google Cloud AI", icon: Cloud, level: 88 },
      { name: "Docker", icon: Container, level: 80 },
      { name: "Kubernetes", icon: Container, level: 75 },
    ],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="section-padding relative">
      {/* Background accent */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-secondary/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass neon-border mb-4">
              <span className="text-xs text-primary font-medium uppercase tracking-wider">Skills & Expertise</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
              Technical <span className="gradient-text">Arsenal</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for building secure, intelligent, and scalable AI solutions.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, idx) => (
              <div
                key={category.title}
                className={`glass rounded-2xl p-6 ${
                  category.color === "primary" ? "neon-border" : "neon-border-purple"
                } hover:shadow-[0_0_30px_hsl(${category.color === "primary" ? "185_100%_50%" : "270_100%_65%"}/0.15)] transition-all duration-300`}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <h3 className={`font-display text-lg font-semibold mb-6 ${
                  category.color === "primary" ? "text-primary" : "text-secondary"
                }`}>
                  {category.title}
                </h3>
                
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="group">
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`w-8 h-8 rounded-lg ${
                          category.color === "primary" ? "bg-primary/10" : "bg-secondary/10"
                        } flex items-center justify-center group-hover:scale-110 transition-transform`}>
                          <skill.icon className={`w-4 h-4 ${
                            category.color === "primary" ? "text-primary" : "text-secondary"
                          }`} />
                        </div>
                        <span className="text-sm font-medium text-foreground">{skill.name}</span>
                        <span className="ml-auto text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-1000 ${
                            category.color === "primary"
                              ? "bg-gradient-to-r from-primary to-primary/70"
                              : "bg-gradient-to-r from-secondary to-secondary/70"
                          }`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Skill Tags Cloud */}
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {["Machine Learning", "NLP", "LangChain", "RAG Systems", "API Development", "Security Auditing", "Cloud Architecture", "Automation"].map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 rounded-full glass neon-border text-sm text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
