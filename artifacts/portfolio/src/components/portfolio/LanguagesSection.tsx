import { useStaggerAnimation } from "@/hooks/useScrollAnimation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Star, Trophy } from "lucide-react";
import { LANGUAGES, ACHIEVEMENTS } from "@/constants/portfolio";
import type { Language } from "@/types/portfolio";

function levelBadge(variant: Language["variant"]) {
  if (variant === "native") {
    return (
      <span className="text-xs px-2.5 py-0.5 rounded-md bg-foreground text-background font-medium">
        Native
      </span>
    );
  }
  if (variant === "fluent") {
    return (
      <span className="text-xs px-2.5 py-0.5 rounded-md bg-muted text-foreground border border-border font-medium">
        Fluent
      </span>
    );
  }
  return (
    <span className="text-xs px-2.5 py-0.5 rounded-md bg-muted text-muted-foreground border border-border font-medium">
      Intermediate
    </span>
  );
}

export default function LanguagesSection() {
  const [containerRef, visibleItems] = useStaggerAnimation(2, 300);

  return (
    <div ref={containerRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <Card
        className={`surface-card transition-all duration-500 ${
          visibleItems[0] ? "animate-fade-in-left opacity-100" : "opacity-0 -translate-x-8"
        }`}
      >
        <CardHeader className="border-b border-border/60">
          <CardTitle className="flex items-center gap-2.5 text-sm font-semibold uppercase tracking-[0.18em] text-foreground">
            <Globe className="h-4 w-4" aria-hidden="true" />
            Languages
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-5">
          <ul className="space-y-3">
            {LANGUAGES.map((lang, i) => (
              <li
                key={lang.name}
                className={`flex justify-between items-center py-2 ${
                  i < LANGUAGES.length - 1 ? "border-b border-border/40" : ""
                }`}
              >
                <span className="text-sm font-medium text-foreground">{lang.name}</span>
                {levelBadge(lang.variant)}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card
        className={`surface-card transition-all duration-500 ${
          visibleItems[1] ? "animate-fade-in-right opacity-100" : "opacity-0 translate-x-8"
        }`}
      >
        <CardHeader className="border-b border-border/60">
          <CardTitle className="flex items-center gap-2.5 text-sm font-semibold uppercase tracking-[0.18em] text-foreground">
            <Trophy className="h-4 w-4" aria-hidden="true" />
            Achievements
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-5">
          <ul className="space-y-1">
            {ACHIEVEMENTS.map((item, i) => (
              <li
                key={item}
                className={`flex items-start gap-3 py-2.5 ${
                  i < ACHIEVEMENTS.length - 1 ? "border-b border-border/40" : ""
                }`}
              >
                <Star
                  className="h-3.5 w-3.5 text-foreground/70 mt-0.5 flex-shrink-0"
                  strokeWidth={2.5}
                  aria-hidden="true"
                />
                <span className="text-sm text-foreground/85 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
