import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "Data Science 101",
    issuer: "IBM (Cognitive Class)",
    color: "primary",
  },
  {
    title: "Ultimate DevSecOps Bootcamp",
    issuer: "School of Devops",
    color: "secondary",
  },
  {
    title: "Agentic AI Playbook: Guide for Tech Leaders",
    issuer: "Udemy",
    color: "primary",
  },
  {
    title: "Google Generative AI Leader Exam Prep",
    issuer: "Udemy",
    color: "secondary",
  },
  {
    title: "Python for Everyone",
    issuer: "Sayman Creative Institute",
    color: "primary",
  },
  {
    title: "Generative AI in Customer Support",
    issuer: "Udemy",
    color: "secondary",
  },
];

export function CertificationsSection() {
  return (
    <section id="certifications" className="section-padding relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass neon-border-purple mb-4">
              <Award className="w-4 h-4 text-secondary" />
              <span className="text-xs text-secondary font-medium uppercase tracking-wider">Verified Credentials</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
              Professional <span className="gradient-text">Certifications</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Industry-recognized certifications that validate my expertise in AI, Data Science, and Security.
            </p>
          </div>

          {/* Certifications Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, idx) => (
              <div
                key={cert.title}
                className={`group relative glass rounded-2xl p-6 ${
                  cert.color === "primary" ? "neon-border" : "neon-border-purple"
                } hover:scale-[1.02] transition-all duration-300 cursor-pointer overflow-hidden`}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  cert.color === "primary" 
                    ? "bg-gradient-to-br from-primary/10 via-transparent to-transparent"
                    : "bg-gradient-to-br from-secondary/10 via-transparent to-transparent"
                }`} />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl ${
                    cert.color === "primary" ? "bg-primary/10" : "bg-secondary/10"
                  } flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                    <Award className={`w-7 h-7 ${
                      cert.color === "primary" ? "text-primary" : "text-secondary"
                    }`} />
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {cert.title}
                  </h3>

                  {/* Issuer */}
                  <p className="text-sm text-muted-foreground flex items-center gap-2">
                    <span>Issued by</span>
                    <span className={`font-medium ${
                      cert.color === "primary" ? "text-primary" : "text-secondary"
                    }`}>
                      {cert.issuer}
                    </span>
                  </p>

                  {/* View Badge */}
                  <div className="mt-4 flex items-center gap-1 text-xs text-muted-foreground group-hover:text-primary transition-colors">
                    <span>View Credential</span>
                    <ExternalLink className="w-3 h-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>

                {/* Corner Accent */}
                <div className={`absolute -top-2 -right-2 w-16 h-16 ${
                  cert.color === "primary" ? "bg-primary/20" : "bg-secondary/20"
                } rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
