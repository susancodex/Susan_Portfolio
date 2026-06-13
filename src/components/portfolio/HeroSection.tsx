import { useState, useEffect } from "react";
import { ChevronDown, Github, Linkedin, Mail, MapPin, Download, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/scroll";
import { SOCIAL_LINKS } from "@/constants/portfolio";

const ROLES = [
  "Full-Stack Developer",
  "Django REST Expert",
  "React Engineer",
  "API Architect",
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

  const delay = (ms: number) =>
    `transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"} [transition-delay:${ms}ms]`;

  return (
    <section
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      aria-label="Hero"
    >
      <div className="container mx-auto px-4 pt-24 pb-32 relative z-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 items-center">

          {/* ── Left: Text content ── */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">

            {/* Profile photo — mobile only */}
            <div className={`lg:hidden mb-8 ${delay(0)}`}>
              <ProfilePhoto size="md" />
            </div>

            {/* Available badge */}
            <div className={`mb-6 ${delay(100)}`}>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-[0.16em] text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/60">
                <span className="relative flex h-2 w-2" aria-hidden="true">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                Available for opportunities · {new Date().getFullYear()}
              </span>
            </div>

            {/* Name — gradient animated */}
            <h1 className={`text-5xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.03em] mb-4 ${delay(200)}`}>
              <span className="gradient-text bg-gradient-to-r from-foreground via-foreground to-foreground dark:from-white dark:via-blue-100 dark:to-cyan-200 bg-clip-text text-transparent">
                Susan
              </span>
              <br />
              <span className="gradient-text">Acharya</span>
            </h1>

            {/* Rotating role */}
            <div className={`h-8 mb-5 flex items-center justify-center lg:justify-start ${delay(300)}`}>
              <span
                className={`text-lg md:text-xl font-medium text-primary transition-all duration-300 ${
                  roleVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
                }`}
              >
                {role}
              </span>
            </div>

            {/* Meta row */}
            <div className={`flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-1.5 mb-6 text-xs text-muted-foreground ${delay(400)}`}>
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 flex-shrink-0" aria-hidden="true" />
                Kathmandu, Nepal
              </span>
              <span className="hidden sm:block h-3 w-px bg-border" aria-hidden="true" />
              <span>BSc. CSIT · Tribhuvan University</span>
              <span className="hidden sm:block h-3 w-px bg-border" aria-hidden="true" />
              <span>Open to remote &amp; on-site roles</span>
            </div>

            {/* Description */}
            <p className={`text-base md:text-lg text-muted-foreground leading-relaxed max-w-lg mb-8 ${delay(500)}`}>
              I design and build production-grade web applications with{" "}
              <strong className="text-foreground font-medium">Django REST Framework</strong>{" "}
              and <strong className="text-foreground font-medium">React</strong> — focused on
              clean architecture, reliable APIs, and thoughtful UX.
            </p>

            {/* CTA buttons */}
            <div className={`flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-8 ${delay(600)}`}>
              <Button
                onClick={() => scrollToSection("projects")}
                size="lg"
                className="btn-primary group"
              >
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
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
                className="rounded-xl border-border/80 hover:border-foreground/30 hover:bg-muted/60 transition-all duration-300"
              >
                <Download className="mr-2 h-4 w-4" aria-hidden="true" />
                Download CV
              </Button>
            </div>

            {/* Social links */}
            <div className={`flex items-center gap-2 ${delay(700)}`}>
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
              <span className="ml-2 h-4 w-px bg-border" aria-hidden="true" />
              <span className="text-xs text-muted-foreground ml-1">
                susanacharya.sp@gmail.com
              </span>
            </div>
          </div>

          {/* ── Right: Visual card ── */}
          <div className={`hidden lg:flex flex-col items-center gap-6 ${delay(150)}`}>
            <ProfilePhoto size="lg" />
            <CodeCard />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce-gentle">
          <button
            onClick={() => scrollToSection("about")}
            aria-label="Scroll to about section"
            className="flex flex-col items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors group"
          >
            <span className="text-[10px] uppercase tracking-[0.18em]">Scroll</span>
            <ChevronDown className="h-5 w-5 group-hover:translate-y-0.5 transition-transform" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}

function ProfilePhoto({ size }: { size: "md" | "lg" }) {
  const dim = size === "lg" ? "w-56 h-56" : "w-36 h-36";
  return (
    <div className={`relative ${dim} flex-shrink-0`}>
      <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-primary/40 via-[hsl(var(--accent-cyan))]/30 to-[hsl(var(--accent-purple))]/40 blur-md animate-aurora-1" aria-hidden="true" />
      <div className="relative w-full h-full rounded-full overflow-hidden ring-2 ring-border/60 bg-background shadow-[var(--shadow-lg)]">
        <img
          src="/profile.png"
          alt="Susan Acharya"
          className="w-full h-full object-cover"
          width={224}
          height={224}
          loading="eager"
        />
      </div>
    </div>
  );
}

function CodeCard() {
  return (
    <div className="w-full rounded-2xl border border-border/70 bg-background/80 backdrop-blur-sm shadow-[var(--shadow-md)] overflow-hidden">
      {/* Terminal top bar */}
      <div className="flex items-center gap-1.5 px-4 py-3 bg-muted/60 border-b border-border/60">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" aria-hidden="true" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" aria-hidden="true" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" aria-hidden="true" />
        <span className="ml-2 text-[11px] font-mono text-muted-foreground">developer.ts</span>
      </div>
      {/* Code content */}
      <pre className="p-4 text-[12px] font-mono leading-relaxed overflow-x-auto">
        <code>
          <span className="text-muted-foreground">{"// Susan Acharya\n"}</span>
          <span className="text-blue-500 dark:text-blue-400">{"const "}</span>
          <span className="text-foreground">{"developer"}</span>
          <span className="text-muted-foreground">{" = {"}</span>
          {"\n"}
          {"  "}
          <span className="text-cyan-600 dark:text-cyan-400">{"  stack"}</span>
          <span className="text-muted-foreground">:{" ["}</span>
          <span className="text-emerald-600 dark:text-emerald-400">{'"Django"'}</span>
          <span className="text-muted-foreground">{", "}</span>
          <span className="text-emerald-600 dark:text-emerald-400">{'"React"'}</span>
          <span className="text-muted-foreground">{","}</span>
          {"\n"}
          {"           "}
          <span className="text-emerald-600 dark:text-emerald-400">{'"PostgreSQL"'}</span>
          <span className="text-muted-foreground">{", "}</span>
          <span className="text-emerald-600 dark:text-emerald-400">{'"DRF"'}</span>
          <span className="text-muted-foreground">{"],"}</span>
          {"\n"}
          {"  "}
          <span className="text-cyan-600 dark:text-cyan-400">{"  building"}</span>
          <span className="text-muted-foreground">{": "}</span>
          <span className="text-emerald-600 dark:text-emerald-400">{'"Brain Pilot AI"'}</span>
          <span className="text-muted-foreground">{","}</span>
          {"\n"}
          {"  "}
          <span className="text-cyan-600 dark:text-cyan-400">{"  status"}</span>
          <span className="text-muted-foreground">{":  "}</span>
          <span className="text-emerald-600 dark:text-emerald-400">{'"available"'}</span>
          <span className="text-muted-foreground">{","}</span>
          {"\n"}
          {"  "}
          <span className="text-cyan-600 dark:text-cyan-400">{"  location"}</span>
          <span className="text-muted-foreground">{": "}</span>
          <span className="text-emerald-600 dark:text-emerald-400">{'"Kathmandu, NP"'}</span>
          {"\n"}
          <span className="text-muted-foreground">{"};"}</span>
        </code>
      </pre>
      {/* Status row */}
      <div className="flex items-center justify-between px-4 py-3 border-t border-border/60 bg-muted/30">
        <span className="flex items-center gap-1.5 text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
          Ready to collaborate
        </span>
        <span className="text-[11px] font-mono text-muted-foreground">Ln 8, Col 1</span>
      </div>
    </div>
  );
}
