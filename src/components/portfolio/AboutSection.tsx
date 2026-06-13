import { useScrollAnimation, useStaggerAnimation } from "@/hooks/useScrollAnimation";
import { Code2, Globe, Layers, Database } from "lucide-react";

const HIGHLIGHTS = [
  {
    icon: Code2,
    label: "Django & DRF",
    desc: "Production-grade REST APIs with JWT auth, serializers & viewsets",
  },
  {
    icon: Globe,
    label: "React + TypeScript",
    desc: "Responsive SPAs built with Vite, Tailwind, and React Query",
  },
  {
    icon: Database,
    label: "Databases",
    desc: "PostgreSQL & MySQL — schema design, migrations, and optimisation",
  },
  {
    icon: Layers,
    label: "Full-Stack",
    desc: "End-to-end delivery from API design through to deployed UI",
  },
];

export default function AboutSection() {
  const [titleRef, titleVisible] = useScrollAnimation<HTMLHeadingElement>({ threshold: 0.3 });
  const [textRef, textVisible] = useScrollAnimation<HTMLParagraphElement>({ threshold: 0.3 });
  const [cardsRef, visibleItems] = useStaggerAnimation(HIGHLIGHTS.length, 120);

  return (
    <div className="max-w-4xl mx-auto text-center">
      {/* Eyebrow */}
      <div
        className={`flex justify-center mb-5 transition-all duration-700 ${
          titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
        }`}
      >
        <span className="eyebrow">About me</span>
      </div>

      {/* Headline */}
      <h2
        ref={titleRef}
        className={`text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-5 transition-all duration-1000 ${
          titleVisible ? "animate-fade-in-up opacity-100" : "opacity-0 translate-y-8"
        }`}
      >
        Crafting reliable software,{" "}
        <span className="gradient-text">one commit at a time.</span>
      </h2>

      <div className="section-divider mb-8" aria-hidden="true" />

      {/* Body */}
      <p
        ref={textRef}
        className={`text-base md:text-lg leading-relaxed text-muted-foreground mb-4 transition-all duration-1000 ${
          textVisible ? "animate-fade-in-up opacity-100" : "opacity-0 translate-y-8"
        }`}
      >
        Motivated developer with hands-on experience building scalable and user-friendly web
        applications. Skilled in RESTful API design, modern web technologies, and responsive
        design. Strong problem solver and collaborative team player with a focus on writing
        clean and efficient code.
      </p>
      <p
        className={`text-base leading-relaxed text-muted-foreground mb-12 transition-all duration-1000 delay-100 ${
          textVisible ? "animate-fade-in-up opacity-100" : "opacity-0 translate-y-8"
        }`}
      >
        Currently pursuing a Bachelor's degree in BSc. CSIT at Tribhuvan University and
        seeking opportunities to contribute, learn, and grow as a developer — ideally in a
        team that values craftsmanship and code quality.
      </p>

      {/* Highlight cards — 4-column centered grid */}
      <div
        ref={cardsRef}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4"
      >
        {HIGHLIGHTS.map(({ icon: Icon, label, desc }, i) => (
          <div
            key={label}
            className={`group relative p-5 rounded-2xl border border-border/70 bg-background/60 backdrop-blur-sm hover:border-primary/30 hover:bg-muted/30 text-left transition-all duration-300 hover:-translate-y-0.5 overflow-hidden ${
              visibleItems[i] ? "animate-fade-in-up opacity-100" : "opacity-0 translate-y-6"
            }`}
          >
            <div
              className="absolute inset-0 bg-gradient-to-br from-primary/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              aria-hidden="true"
            />
            <div className="flex items-center justify-center h-9 w-9 rounded-xl bg-foreground/[0.06] border border-border/60 mb-3 group-hover:bg-primary/10 group-hover:border-primary/20 transition-colors duration-300">
              <Icon
                className="h-4 w-4 text-foreground/70 group-hover:text-primary transition-colors duration-300"
                aria-hidden="true"
              />
            </div>
            <div className="text-sm font-semibold text-foreground tracking-tight mb-1">
              {label}
            </div>
            <div className="text-xs text-muted-foreground leading-relaxed">{desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
