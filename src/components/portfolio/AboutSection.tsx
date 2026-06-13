import { useScrollAnimation, useStaggerAnimation } from "@/hooks/useScrollAnimation";
import { Code2, Globe, Layers, Database } from "lucide-react";

const HIGHLIGHTS = [
  {
    icon: Code2,
    label: "Django & DRF",
    desc: "Production-grade REST APIs with JWT auth, serializers & viewsets",
    iconClass: "bg-blue-500/10 border-blue-500/20 text-blue-500",
    hoverIconClass: "group-hover:bg-blue-500/15 group-hover:border-blue-500/30 group-hover:text-blue-500",
    glowClass: "from-blue-500/[0.06]",
  },
  {
    icon: Globe,
    label: "React + TypeScript",
    desc: "Responsive SPAs built with Vite, Tailwind, and React Query",
    iconClass: "bg-cyan-500/10 border-cyan-500/20 text-cyan-500",
    hoverIconClass: "group-hover:bg-cyan-500/15 group-hover:border-cyan-500/30 group-hover:text-cyan-500",
    glowClass: "from-cyan-500/[0.06]",
  },
  {
    icon: Database,
    label: "Databases",
    desc: "PostgreSQL & MySQL — schema design, migrations, and optimisation",
    iconClass: "bg-violet-500/10 border-violet-500/20 text-violet-500",
    hoverIconClass: "group-hover:bg-violet-500/15 group-hover:border-violet-500/30 group-hover:text-violet-500",
    glowClass: "from-violet-500/[0.06]",
  },
  {
    icon: Layers,
    label: "Full-Stack",
    desc: "End-to-end delivery from API design through to deployed UI",
    iconClass: "bg-emerald-500/10 border-emerald-500/20 text-emerald-500",
    hoverIconClass: "group-hover:bg-emerald-500/15 group-hover:border-emerald-500/30 group-hover:text-emerald-500",
    glowClass: "from-emerald-500/[0.06]",
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
        Crafting reliable software, one commit at a time.
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
        Final year BSc. CSIT student at Tribhuvan University, seeking opportunities to
        contribute, learn, and grow as a developer — ideally in a team that values
        craftsmanship and code quality.
      </p>

      {/* Highlight cards — 4-column centered grid */}
      <div
        ref={cardsRef}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4"
      >
        {HIGHLIGHTS.map(({ icon: Icon, label, desc, iconClass, hoverIconClass, glowClass }, i) => (
          <div
            key={label}
            className={`group relative p-5 rounded-2xl border border-border/70 bg-background/60 backdrop-blur-sm hover:border-border hover:bg-muted/30 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-md)] overflow-hidden ${
              visibleItems[i] ? "animate-fade-in-up opacity-100" : "opacity-0 translate-y-6"
            }`}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${glowClass} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              aria-hidden="true"
            />
            <div className={`flex items-center justify-center h-9 w-9 rounded-xl border mb-3 transition-all duration-300 ${iconClass} ${hoverIconClass}`}>
              <Icon className="h-4 w-4 transition-colors duration-300" aria-hidden="true" />
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
