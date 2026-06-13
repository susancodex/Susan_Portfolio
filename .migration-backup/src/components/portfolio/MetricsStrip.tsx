import { useState, useEffect, useRef } from "react";
import { STATS } from "@/constants/portfolio";

function useCountUp(target: number, duration = 1500, active = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const elapsed = ts - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(target);
    };
    const raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [active, target, duration]);

  return count;
}

function parseStatValue(value: string): { numeric: number; suffix: string } {
  const match = value.match(/^(\d+(?:\.\d+)?)(.*)/);
  if (!match) return { numeric: 0, suffix: value };
  return { numeric: parseFloat(match[1]), suffix: match[2] };
}

function AnimatedStat({ stat, active }: { stat: (typeof STATS)[0]; active: boolean }) {
  const { numeric, suffix } = parseStatValue(stat.value);
  const count = useCountUp(numeric, 1400, active);
  const display = numeric > 0 ? `${count}${suffix}` : stat.value;

  return (
    <div className="group relative bg-background/90 backdrop-blur-sm px-5 py-6 text-center overflow-hidden transition-all duration-300 hover:bg-muted/40">
      <div
        className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        aria-hidden="true"
      />
      <div className="text-3xl md:text-4xl font-bold tracking-[-0.02em] text-primary tabular-nums">
        {active ? display : stat.value}
      </div>
      <div className="w-6 h-[2px] rounded-full bg-gradient-to-r from-primary/60 to-transparent mx-auto my-2" aria-hidden="true" />
      <div className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
        {stat.label}
      </div>
    </div>
  );
}

export default function MetricsStrip() {
  const [active, setActive] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative z-10 -mt-8 mb-4"
      aria-label="Key statistics"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-px overflow-hidden rounded-2xl border border-border/70 bg-border/50 shadow-[var(--shadow-md)]">
          {STATS.map((stat) => (
            <AnimatedStat key={stat.label} stat={stat} active={active} />
          ))}
        </div>
      </div>
    </section>
  );
}
