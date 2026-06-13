import { useScrollAnimation, useStaggerAnimation } from "@/hooks/useScrollAnimation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SKILL_CATEGORIES } from "@/constants/portfolio";

const SKILL_DELAY_CLASSES = [
  "",
  "[animation-delay:100ms]",
  "[animation-delay:200ms]",
  "[animation-delay:300ms]",
  "[animation-delay:400ms]",
  "[animation-delay:500ms]",
];

export default function SkillsSection() {
  const [titleRef, titleVisible] = useScrollAnimation<HTMLHeadingElement>({ threshold: 0.3 });
  const [containerRef, visibleItems] = useStaggerAnimation(SKILL_CATEGORIES.length, 200);

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
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {SKILL_CATEGORIES.map((category, index) => (
          <Card
            key={category.title}
            className={`surface-card border-border/70 transition-all duration-500 hover:-translate-y-1 ${
              visibleItems[index]
                ? "animate-fade-in-up opacity-100"
                : "opacity-0 translate-y-8"
            }`}
          >
            <CardHeader className="pb-3 border-b border-border/60">
              <CardTitle className="text-sm font-semibold tracking-tight uppercase text-foreground">
                {category.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-5">
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={skill.name}
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-muted/70 transition-colors duration-200 ${
                      visibleItems[index] ? "animate-fade-in" : "opacity-0"
                    } ${
                      SKILL_DELAY_CLASSES[skillIndex] ??
                      SKILL_DELAY_CLASSES[SKILL_DELAY_CLASSES.length - 1]
                    }`}
                  >
                    {skill.icon.startsWith("http") ? (
                      <img
                        src={skill.icon}
                        alt=""
                        aria-hidden="true"
                        className="w-6 h-6 object-contain"
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).style.display = "none";
                        }}
                      />
                    ) : (
                      <span className="text-lg" aria-hidden="true">
                        {skill.icon}
                      </span>
                    )}
                    <span className="text-sm font-medium text-foreground/90">
                      {skill.name}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
