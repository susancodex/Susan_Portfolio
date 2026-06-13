import { TECH_STACK } from "@/constants/portfolio";

export default function TechStackStrip() {
  return (
    <section
      className="relative z-10 py-14 md:py-16 border-y border-border/40"
      aria-label="Technologies"
    >
      <div className="container mx-auto px-4">
        <p className="text-center text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-8">
          Tools &amp; technologies I work with
        </p>
        <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-x-10 md:gap-x-14 gap-y-6">
          {TECH_STACK.map((tech) => (
            <div
              key={tech.name}
              className="group flex flex-col items-center gap-2 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              title={tech.name}
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className="h-8 w-8 md:h-9 md:w-9 object-contain"
                width={36}
                height={36}
              />
              <span className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground group-hover:text-foreground transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
