import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/constants/portfolio";

export default function TestimonialsSection() {
  return (
    <>
      <div className="flex justify-center mb-5">
        <span className="eyebrow">Recommendations</span>
      </div>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-center mb-4">
        What people say
      </h2>
      <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
        Kind words from peers, mentors, and collaborators I've had the chance to work with.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {TESTIMONIALS.map((testimonial) => (
          <Card
            key={testimonial.name}
            className="surface-card transition-all duration-500 hover:-translate-y-1"
          >
            <CardContent className="pt-6 pb-6 flex flex-col h-full">
              <Quote
                className="h-6 w-6 text-foreground/20 mb-4"
                aria-hidden="true"
              />
              <blockquote className="text-sm md:text-base text-foreground/85 leading-relaxed mb-6 flex-1">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-3 pt-4 border-t border-border/60">
                <div
                  className="flex items-center justify-center h-10 w-10 rounded-full bg-foreground text-background text-xs font-semibold tracking-tight flex-shrink-0"
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
