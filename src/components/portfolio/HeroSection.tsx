import { useState, useEffect } from "react";
import { ChevronDown, Github, Linkedin, Mail, MapPin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/scroll";
import { SOCIAL_LINKS } from "@/constants/portfolio";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      aria-label="Hero"
    >
      <div className="container mx-auto px-4 pt-20 relative z-10 flex flex-col items-center text-center">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="relative w-40 h-40 md:w-48 md:h-48 mx-auto mb-8">
            <div className="absolute -inset-3 rounded-full bg-foreground/[0.04] blur-xl" aria-hidden="true" />
            <div className="relative w-full h-full rounded-full overflow-hidden ring-1 ring-border bg-background shadow-[var(--shadow-md)]">
              <img
                src="/profile.png"
                alt="Susan Acharya"
                className="w-full h-full object-cover"
                width={192}
                height={192}
              />
            </div>
          </div>
        </div>

        <div
          className={`mb-5 transition-all duration-700 delay-150 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground bg-background/80 backdrop-blur border border-border">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
            Available · {new Date().getFullYear()}
          </span>
        </div>

        <h1
          className={`text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground mb-3 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Susan Acharya
        </h1>

        <p
          className={`text-base md:text-lg font-normal text-muted-foreground mb-6 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Full-Stack Developer ·{" "}
          <span className="text-foreground font-medium">Django</span> &amp;{" "}
          <span className="text-foreground font-medium">React</span>
        </p>

        <div
          className={`flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mb-8 text-xs text-muted-foreground transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
            Kathmandu, Nepal
          </span>
          <span className="hidden sm:inline h-3 w-px bg-border" aria-hidden="true" />
          <span>BSc. CSIT · Tribhuvan University</span>
          <span className="hidden sm:inline h-3 w-px bg-border" aria-hidden="true" />
          <span>Open to remote &amp; on-site roles</span>
        </div>

        <div
          className={`max-w-xl mx-auto mb-8 transition-all duration-1000 delay-[500ms] ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            I design and build production-grade web applications with Django, Django REST
            Framework, and React — focusing on clean architecture, reliable APIs, and
            thoughtful user experience.
          </p>
        </div>

        <div
          className={`mb-8 transition-all duration-1000 delay-[600ms] ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs text-muted-foreground bg-muted/60 border border-border/70">
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/70">
              Now
            </span>
            <span className="h-3 w-px bg-border" aria-hidden="true" />
            <span>
              Building Brain Pilot AI — an AI-powered learning platform with Django REST &amp;
              React
            </span>
          </div>
        </div>

        <div
          className={`flex flex-wrap justify-center gap-3 mb-10 transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Button
            onClick={() => scrollToSection("projects")}
            size="lg"
            className="btn-primary"
          >
            View My Work
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1qv1Ax8rl2FfuTZMncyP7CHbPUFV688YU/view?usp=sharing",
                "_blank"
              )
            }
            className="rounded-xl border-border hover:border-foreground/40 hover:bg-muted transition-all duration-300"
          >
            <Download className="mr-2 h-4 w-4" aria-hidden="true" />
            Download CV
          </Button>
        </div>

        <div
          className={`flex justify-center gap-4 mb-10 transition-all duration-1000 delay-800 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="p-3 rounded-xl bg-white/70 dark:bg-muted/40 backdrop-blur-sm border border-border hover:border-primary/50 text-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover:shadow-lg hover:-translate-y-1"
          >
            <Github className="h-5 w-5" aria-hidden="true" />
          </a>
          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="p-3 rounded-xl bg-white/70 dark:bg-muted/40 backdrop-blur-sm border border-border hover:border-primary/50 text-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover:shadow-lg hover:-translate-y-1"
          >
            <Linkedin className="h-5 w-5" aria-hidden="true" />
          </a>
          <a
            href={`mailto:${SOCIAL_LINKS.email}`}
            aria-label="Send email"
            className="p-3 rounded-xl bg-white/70 dark:bg-muted/40 backdrop-blur-sm border border-border hover:border-primary/50 text-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover:shadow-lg hover:-translate-y-1"
          >
            <Mail className="h-5 w-5" aria-hidden="true" />
          </a>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
          <button
            onClick={() => scrollToSection("about")}
            aria-label="Scroll to about section"
            className="p-2 rounded-full bg-white/80 dark:bg-muted/40 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300 hover:scale-110"
          >
            <ChevronDown className="h-6 w-6 text-muted-foreground" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
