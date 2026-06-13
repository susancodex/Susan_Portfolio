import { STATS } from "@/constants/portfolio";

export default function MetricsStrip() {
  return (
    <section className="relative z-10 -mt-8 mb-4" aria-label="Key statistics">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-px overflow-hidden rounded-2xl border border-border/70 bg-border/70 shadow-[var(--shadow-sm)]">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="bg-background/90 backdrop-blur-sm px-5 py-5 text-center"
            >
              <div className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground">
                {stat.value}
              </div>
              <div className="mt-1 text-[10px] md:text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
