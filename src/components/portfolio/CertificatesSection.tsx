import { useScrollAnimation, useStaggerAnimation } from "@/hooks/useScrollAnimation";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Trophy } from "lucide-react";
import { CERTIFICATES } from "@/constants/portfolio";

const ANIMATE_CLASSES = [
  "animate-fade-in-left opacity-100",
  "animate-fade-in-right opacity-100",
  "animate-fade-in-left opacity-100",
  "animate-fade-in-right opacity-100",
];

const HIDDEN_CLASSES = [
  "opacity-0 -translate-x-8",
  "opacity-0 translate-x-8",
  "opacity-0 -translate-x-8",
  "opacity-0 translate-x-8",
];

export default function CertificatesSection() {
  const [titleRef, titleVisible] = useScrollAnimation<HTMLHeadingElement>({ threshold: 0.3 });
  const [containerRef, visibleItems] = useStaggerAnimation(CERTIFICATES.length, 200);

  return (
    <>
      <div
        className={`flex justify-center mb-5 transition-all duration-700 ${
          titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
        }`}
      >
        <span className="eyebrow">Credentials</span>
      </div>
      <h2
        ref={titleRef}
        className={`text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-center mb-4 transition-all duration-1000 ${
          titleVisible ? "animate-fade-in-down opacity-100" : "opacity-0 -translate-y-8"
        }`}
      >
        Certificates
      </h2>
      <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
        Continuous learning across Python, data, and software engineering fundamentals.
      </p>

      <div
        ref={containerRef}
        className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-6xl mx-auto"
      >
        {CERTIFICATES.map((cert, index) => (
          <Card
            key={cert.index}
            className={`surface-card transition-all duration-500 hover:-translate-y-1 ${
              visibleItems[index] ? ANIMATE_CLASSES[index] : HIDDEN_CLASSES[index]
            }`}
          >
            <CardHeader>
              <div className="flex items-center justify-between mb-3">
                <span className="eyebrow !text-[10px]">{cert.issuer}</span>
                <span className="font-mono text-xs text-muted-foreground">{cert.index}</span>
              </div>
              <CardTitle className="text-base font-semibold tracking-tight leading-snug flex items-center gap-2">
                {cert.index === "04" && (
                  <Trophy className="h-4 w-4 text-foreground/60 flex-shrink-0" aria-hidden="true" />
                )}
                {cert.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                {cert.description}
              </p>
              <Button
                variant="ghost"
                size="sm"
                className="w-full justify-between hover:bg-muted text-foreground border border-border"
                onClick={() => window.open(cert.linkUrl, "_blank")}
                aria-label={`${cert.linkLabel} for ${cert.title}`}
              >
                <span className="text-xs font-medium">{cert.linkLabel}</span>
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
