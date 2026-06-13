import { useState, useEffect } from "react";
import { ChevronDown, Mail, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/scroll";
import { SOCIAL_LINKS } from "@/constants/portfolio";

const ROLES = [
  "Computer Science",
  "Full Stack Developer",
  "API Architect",
  "Django · DRF",
];

function useRoleCycler(roles: string[], intervalMs = 2600) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % roles.length);
        setVisible(true);
      }, 350);
    }, intervalMs);
    return () => clearInterval(id);
  }, [roles.length, intervalMs]);

  return { role: roles[index], visible };
}

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const { role, visible: roleVisible } = useRoleCycler(ROLES);

  useEffect(() => {
    const t = setTimeout(() => setIsVisible(true), 60);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      aria-label="Hero"
    >
      <div className="container mx-auto px-4 pt-20 pb-32 relative z-10 flex flex-col items-center text-center">

        {/* Profile photo */}
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="relative w-40 h-40 md:w-48 md:h-48 mx-auto mb-8">
            {/* Soft outer glow */}
            <div
              className="absolute -inset-4 rounded-full bg-gradient-to-tr from-primary/20 via-[hsl(var(--accent-cyan))]/15 to-[hsl(var(--accent-purple))]/20 blur-2xl animate-aurora-1"
              aria-hidden="true"
            />
            {/* Gradient ring border */}
            <div
              className="absolute -inset-[3px] rounded-full bg-gradient-to-tr from-primary/80 via-[hsl(var(--accent-cyan))]/60 to-[hsl(var(--accent-purple))]/80"
              aria-hidden="true"
            />
            {/* White gap ring */}
            <div
              className="absolute -inset-[1px] rounded-full bg-background"
              aria-hidden="true"
            />
            {/* Photo */}
            <div className="relative w-full h-full rounded-full overflow-hidden shadow-[var(--shadow-lg)]">
              <img
                src="/profile.png"
                alt="Susan Acharya profile photo"
                className="w-full h-full object-cover"
                width={192}
                height={192}
                loading="eager"
              />
            </div>
          </div>
        </div>

        {/* Available badge */}
        <div
          className={`mb-5 transition-all duration-700 [transition-delay:120ms] ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-[0.16em] text-foreground bg-muted border border-border/80">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Available for opportunities · {new Date().getFullYear()}
          </span>
        </div>

        {/* Name — animated gradient */}
        <h1
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.03em] mb-4 transition-all duration-1000 [transition-delay:200ms] ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-foreground font-bold">Susan Acharya</span>
        </h1>

        {/* Static tagline */}
        <div
          className={`mb-2 transition-all duration-700 [transition-delay:280ms] ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="text-sm md:text-base font-medium text-muted-foreground tracking-wide">
            Frontend Developer&nbsp;·&nbsp;React&nbsp;·&nbsp;Vite&nbsp;·&nbsp;JavaScript
          </p>
        </div>

        {/* Rotating role */}
        <div
          className={`h-8 mb-5 flex items-center justify-center transition-all duration-700 [transition-delay:320ms] ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span
            className={`text-lg md:text-xl font-semibold text-primary transition-all duration-300 ${
              roleVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
            }`}
          >
            {role}
          </span>
        </div>

        {/* Meta row */}
        <div
          className={`flex flex-wrap items-center justify-center gap-x-4 gap-y-2 mb-7 text-xs text-muted-foreground transition-all duration-700 [transition-delay:380ms] ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5 flex-shrink-0" aria-hidden="true" />
            Kathmandu, Nepal
          </span>
          <span className="hidden sm:block h-3 w-px bg-border" aria-hidden="true" />
          <span className="hidden sm:inline">BSc. CSIT · Tribhuvan University</span>
          <span className="hidden sm:block h-3 w-px bg-border" aria-hidden="true" />
          <span className="hidden sm:inline">Open to remote &amp; on-site roles</span>
          <span className="sm:hidden text-center leading-relaxed">BSc. CSIT · Open to remote &amp; on-site</span>
        </div>

        {/* Description */}
        <div
          className={`max-w-xl mx-auto mb-8 transition-all duration-1000 [transition-delay:460ms] ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            A motivated Full Stack Developer and final-year{" "}
            <strong className="text-foreground font-medium">BSc. CSIT student</strong> from{" "}
            <strong className="text-foreground font-medium">Tribhuvan University, Nepal</strong> — building scalable web applications with{" "}
            Django REST Framework and React, with a focus on clean architecture and thoughtful user experience.
          </p>
        </div>

        {/* CTA buttons */}
        <div
          className={`flex flex-wrap justify-center gap-3 mb-8 transition-all duration-1000 [transition-delay:540ms] ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Button
            onClick={() => scrollToSection("projects")}
            size="lg"
            className="btn-primary group"
          >
            View Projects
            <ArrowRight
              className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => scrollToSection("contact")}
            className="rounded-xl border-border/80 hover:border-foreground/30 hover:bg-muted/60 transition-all duration-300"
          >
            <Mail className="mr-2 h-4 w-4" aria-hidden="true" />
            Contact Me
          </Button>
        </div>

        {/* Social links */}
        <div
          className={`flex justify-center gap-3 mb-10 transition-all duration-1000 [transition-delay:620ms] ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="social-icon"
          >
            <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="currentColor" aria-hidden="true">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
          </a>
          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="social-icon"
          >
            <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="currentColor" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a
            href={`mailto:${SOCIAL_LINKS.email}`}
            aria-label="Send email"
            className="social-icon"
          >
            <Mail className="h-[18px] w-[18px]" aria-hidden="true" />
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce-gentle">
          <button
            onClick={() => scrollToSection("about")}
            aria-label="Scroll to about section"
            className="flex flex-col items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="text-[10px] uppercase tracking-[0.18em]">Scroll</span>
            <ChevronDown className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
