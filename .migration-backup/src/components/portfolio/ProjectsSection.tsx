import { useScrollAnimation, useStaggerAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/constants/portfolio";

export default function ProjectsSection() {
  const [titleRef, titleVisible] = useScrollAnimation<HTMLHeadingElement>({ threshold: 0.3 });
  const [containerRef, visibleItems] = useStaggerAnimation(PROJECTS.length, 180);

  return (
    <>
      <div
        className={`flex justify-center mb-5 transition-all duration-700 ${
          titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
        }`}
      >
        <span className="eyebrow">Selected Work</span>
      </div>
      <h2
        ref={titleRef}
        className={`text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-center mb-4 transition-all duration-1000 ${
          titleVisible ? "animate-fade-in-down opacity-100" : "opacity-0 -translate-y-8"
        }`}
      >
        Featured Projects
      </h2>
      <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-14">
        A selection of full-stack and backend projects demonstrating clean architecture, REST
        API design, and production-ready UX.
      </p>

      <div ref={containerRef} className="space-y-6 max-w-6xl mx-auto">
        {PROJECTS.map((project, index) => {
          const isReversed = index % 2 === 1;
          return (
            <article
              key={project.title}
              className={`group relative surface-card overflow-hidden grid grid-cols-1 md:grid-cols-2 hover:shadow-[var(--shadow-lg)] hover:border-border transition-all duration-500 ${
                visibleItems[index]
                  ? "animate-fade-in-up opacity-100"
                  : "opacity-0 translate-y-8"
              }`}
            >
              {/* Shimmer overlay on hover */}
              <div
                className="pointer-events-none absolute inset-0 z-10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent"
                aria-hidden="true"
              />

              {/* Image */}
              <div
                className={`relative overflow-hidden h-52 md:h-auto md:min-h-[300px] bg-muted ${
                  isReversed ? "md:order-2" : ""
                }`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-foreground/0 to-transparent"
                  aria-hidden="true"
                />
                {/* Index badge */}
                <span className="absolute top-3 left-3 inline-flex items-center justify-center h-6 min-w-[2rem] px-2 rounded-md bg-background/90 backdrop-blur text-[10px] font-mono font-bold text-primary border border-primary/20">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {/* Live badge */}
                {project.liveDemo && (
                  <span className="absolute top-3 right-3 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500 text-[10px] font-bold uppercase tracking-[0.12em] text-white shadow-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-white/80 animate-pulse" aria-hidden="true" />
                    Live
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center p-6 md:p-8 lg:p-10">
                {/* Category line */}
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    {project.tags[0]}
                  </span>
                  <span className="h-px flex-1 bg-border/60" aria-hidden="true" />
                </div>

                <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6" aria-label="Technologies used">
                  {project.tags.map((tag, ti) => (
                    <span
                      key={tag}
                      className={`text-[11px] px-2.5 py-1 rounded-md font-medium border transition-colors duration-200 hover:border-primary/40 hover:text-primary ${
                        ti === 0
                          ? "bg-primary/8 border-primary/20 text-primary"
                          : "bg-muted/80 text-foreground/70 border-border/50"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-border/60">
                  {project.liveDemo ? (
                    <Button
                      size="sm"
                      className="btn-primary !px-4 !py-2 !text-xs group/btn flex-1 sm:flex-none"
                      onClick={() => window.open(project.liveDemo!, "_blank")}
                    >
                      <ExternalLink className="h-3.5 w-3.5 mr-1.5" aria-hidden="true" />
                      Live Demo
                      <ArrowUpRight className="h-3 w-3 ml-1 opacity-60 group-hover/btn:opacity-100 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200" aria-hidden="true" />
                    </Button>
                  ) : (
                    <Button
                      size="sm"
                      disabled
                      variant="secondary"
                      className="!px-4 !py-2 !text-xs rounded-lg opacity-60 cursor-not-allowed flex-1 sm:flex-none"
                    >
                      Coming Soon
                    </Button>
                  )}
                  <Button
                    variant="outline"
                    size="sm"
                    className="!px-4 !py-2 !text-xs rounded-lg border-border hover:border-foreground/30 hover:bg-muted transition-all duration-200 flex-1 sm:flex-none"
                    onClick={() => window.open(project.github, "_blank")}
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <Github className="h-3.5 w-3.5 mr-1.5" aria-hidden="true" />
                    Source Code
                  </Button>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
}
