import { useScrollAnimation, useStaggerAnimation } from "@/hooks/useScrollAnimation";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/constants/portfolio";

const AVATAR_GRADIENTS = [
  "from-blue-500 to-indigo-600",
  "from-emerald-500 to-teal-600",
  "from-violet-500 to-purple-600",
];

export default function TestimonialsSection() {
  const [titleRef, titleVisible] = useScrollAnimation<HTMLHeadingElement>({ threshold: 0.3 });
  const [containerRef, visibleItems] = useStaggerAnimation(TESTIMONIALS.length, 150);

  return (
    <>
      <div
        className={`flex justify-center mb-5 transition-all duration-700 ${
          titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
        }`}
      >
        <span className="eyebrow">Recommendations</span>
      </div>
      <h2
        ref={titleRef}
        className={`text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-center mb-4 transition-all duration-1000 ${
          titleVisible ? "animate-fade-in-down opacity-100" : "opacity-0 -translate-y-8"
        }`}
      >
        What people say
      </h2>
      <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
        Kind words from peers, mentors, and collaborators I've had the chance to work with.
      </p>

      <div
        ref={containerRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
      >
        {TESTIMONIALS.map((testimonial, i) => (
          <Card
            key={testimonial.name}
            className={`surface-card transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-lg)] ${
              visibleItems[i] ? "animate-fade-in-up opacity-100" : "opacity-0 translate-y-6"
            }`}
          >
            <CardContent className="pt-6 pb-6 flex flex-col h-full">
              <Quote
                className="h-6 w-6 text-primary/40 mb-4"
                aria-hidden="true"
              />
              <blockquote className="text-sm md:text-base text-foreground/85 leading-relaxed mb-6 flex-1">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-3 pt-4 border-t border-border/60">
                <div
                  className={`flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-br ${AVATAR_GRADIENTS[i % AVATAR_GRADIENTS.length]} text-white text-xs font-semibold tracking-tight flex-shrink-0`}
                  aria-hidden="true"
                >
                  {testimonial.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
