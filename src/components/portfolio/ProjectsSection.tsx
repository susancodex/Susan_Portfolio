import { useScrollAnimation, useStaggerAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { PROJECTS } from "@/constants/portfolio";

export default function ProjectsSection() {
  const [titleRef, titleVisible] = useScrollAnimation<HTMLHeadingElement>({ threshold: 0.3 });
  const [containerRef, visibleItems] = useStaggerAnimation(PROJECTS.length, 200);

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
      <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
        A selection of full-stack and backend projects that demonstrate clean architecture,
        REST API design, and production-ready UX.
      </p>

      <div
        ref={containerRef}
        className="space-y-10 md:space-y-14 max-w-6xl mx-auto"
      >
        {PROJECTS.map((project, index) => {
          const isReversed = index % 2 === 1;
          return (
            <article
              key={project.title}
              className={`group surface-card overflow-hidden grid grid-cols-1 md:grid-cols-2 ${
                visibleItems[index]
                  ? "animate-fade-in-up opacity-100"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div
                className={`relative overflow-hidden h-56 md:h-auto md:min-h-[320px] bg-muted ${
                  isReversed ? "md:order-2" : ""
                }`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  aria-hidden="true"
                />
                <span className="absolute top-4 left-4 inline-flex items-center justify-center h-7 min-w-7 px-2 rounded-full bg-background/95 backdrop-blur text-[11px] font-mono font-medium text-foreground/80 border border-border">
                  {String(index + 1).padStart(2, "0")} /{" "}
                  {String(PROJECTS.length).padStart(2, "0")}
                </span>
                {project.liveDemo && (
                  <span className="absolute top-4 right-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/95 backdrop-blur text-[10px] font-semibold uppercase tracking-[0.14em] text-white shadow-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" aria-hidden="true" />
                    Live
                  </span>
                )}
              </div>

              <div className="flex flex-col justify-center p-6 md:p-8 lg:p-10">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    {project.tags[0]}
                  </span>
                  <span className="h-px flex-1 bg-border" aria-hidden="true" />
                </div>
                <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground mb-3">
                  {project.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-5">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6" aria-label="Technologies used">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] px-2.5 py-1 rounded-md bg-muted text-foreground/80 border border-border/60 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 pt-4 border-t border-border/60">
                  {project.liveDemo ? (
                    <Button
                      size="sm"
                      className="btn-primary !px-5 !py-2 !text-xs"
                      onClick={() => window.open(project.liveDemo!, "_blank")}
                    >
                      <ExternalLink className="h-3.5 w-3.5 mr-1.5" aria-hidden="true" />
                      View Live Demo
                    </Button>
                  ) : (
                    <Button
                      size="sm"
                      disabled
                      variant="secondary"
                      className="!px-5 !py-2 !text-xs rounded-lg cursor-not-allowed opacity-70"
                    >
                      <ExternalLink className="h-3.5 w-3.5 mr-1.5" aria-hidden="true" />
                      Coming soon
                    </Button>
                  )}
                  <Button
                    variant="outline"
                    size="sm"
                    className="!px-5 !py-2 !text-xs rounded-lg border-border hover:border-foreground/40 hover:bg-muted"
                    onClick={() => window.open(project.github, "_blank")}
                    aria-label={`View ${project.title} source code on GitHub`}
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
