import { useScrollAnimation, useStaggerAnimation } from "@/hooks/useScrollAnimation";
import { SKILL_CATEGORIES } from "@/constants/portfolio";

const CATEGORY_META: Record<string, { accent: string; bar: string; emoji: string }> = {
  "Programming & Frontend": {
    accent: "group-hover:border-blue-400/50",
    bar: "from-blue-400 to-cyan-400",
    emoji: "⚡",
  },
  "Backend": {
    accent: "group-hover:border-emerald-400/50",
    bar: "from-emerald-400 to-teal-400",
    emoji: "🛠️",
  },
  "Databases": {
    accent: "group-hover:border-violet-400/50",
    bar: "from-violet-400 to-purple-400",
    emoji: "🗄️",
  },
  "Concepts": {
    accent: "group-hover:border-amber-400/50",
    bar: "from-amber-400 to-orange-400",
    emoji: "💡",
  },
  "Tools": {
    accent: "group-hover:border-cyan-400/50",
    bar: "from-cyan-400 to-sky-400",
    emoji: "🔧",
  },
  "Soft Skills": {
    accent: "group-hover:border-pink-400/50",
    bar: "from-pink-400 to-rose-400",
    emoji: "🌟",
  },
};

export default function SkillsSection() {
  const [titleRef, titleVisible] = useScrollAnimation<HTMLHeadingElement>({ threshold: 0.3 });
  const [containerRef, visibleItems] = useStaggerAnimation(SKILL_CATEGORIES.length, 120);

  return (
    <>
      <div
        className={`flex justify-center mb-5 transition-all duration-700 ${
          titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
        }`}
      >
        <span className="eyebrow">Capabilities</span>
      </div>
      <h2
        ref={titleRef}
        className={`text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-center mb-4 transition-all duration-1000 ${
          titleVisible ? "animate-fade-in-down opacity-100" : "opacity-0 -translate-y-8"
        }`}
      >
        Skills &amp; Technologies
      </h2>
      <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
        The tools, frameworks, and disciplines I rely on to ship dependable products.
      </p>

      <div
        ref={containerRef}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {SKILL_CATEGORIES.map((category, index) => {
          const meta = CATEGORY_META[category.title] ?? {
            accent: "group-hover:border-foreground/20",
            bar: "from-foreground/40 to-foreground/20",
            emoji: "📦",
          };

          return (
            <div
              key={category.title}
              className={`group relative flex flex-col rounded-2xl border border-border/70 bg-background/70 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-lg)] ${meta.accent} ${
                visibleItems[index]
                  ? "animate-fade-in-up opacity-100"
                  : "opacity-0 translate-y-8"
              }`}
            >
              {/* Colored accent bar */}
              <div
                className={`h-0.5 w-full bg-gradient-to-r ${meta.bar} opacity-70 group-hover:opacity-100 transition-opacity duration-300`}
                aria-hidden="true"
              />

              {/* Card header */}
              <div className="flex items-center gap-3 px-5 pt-5 pb-4 border-b border-border/50">
                <span
                  className="flex items-center justify-center h-9 w-9 rounded-xl bg-muted/80 border border-border/60 text-lg flex-shrink-0"
                  aria-hidden="true"
                >
                  {meta.emoji}
                </span>
                <h3 className="text-sm font-semibold tracking-tight text-foreground">
                  {category.title}
                </h3>
              </div>

              {/* Skill chips */}
              <div className="flex flex-wrap gap-2 p-5">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-muted/60 border border-border/50 hover:border-border hover:bg-muted transition-all duration-200 group/chip cursor-default"
                  >
                    {skill.icon.startsWith("http") ? (
                      <img
                        src={skill.icon}
                        alt=""
                        aria-hidden="true"
                        className="w-4 h-4 object-contain flex-shrink-0"
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).style.display = "none";
                        }}
                      />
                    ) : skill.icon ? (
                      <span className="text-sm leading-none flex-shrink-0" aria-hidden="true">
                        {skill.icon}
                      </span>
                    ) : null}
                    <span className="text-xs font-medium text-foreground/85 group-hover/chip:text-foreground transition-colors whitespace-nowrap">
                      {skill.name}
                    </span>
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
