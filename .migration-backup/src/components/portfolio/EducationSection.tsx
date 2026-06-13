import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GraduationCap } from "lucide-react";
import { CORE_SUBJECTS } from "@/constants/portfolio";

export default function EducationSection() {
  const [titleRef, titleVisible] = useScrollAnimation<HTMLHeadingElement>({ threshold: 0.3 });
  const [cardRef, cardVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.3 });

  return (
    <>
      <div
        className={`flex justify-center mb-5 transition-all duration-700 ${
          titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
        }`}
      >
        <span className="eyebrow">Academic Background</span>
      </div>
      <h2
        ref={titleRef}
        className={`text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-center mb-4 transition-all duration-1000 ${
          titleVisible ? "animate-fade-in-down opacity-100" : "opacity-0 -translate-y-8"
        }`}
      >
        Education
      </h2>
      <div className="section-divider mb-12" aria-hidden="true" />

      <div ref={cardRef} className="max-w-4xl mx-auto">
        <Card
          className={`surface-card transition-all duration-500 ${
            cardVisible ? "animate-fade-in-up opacity-100" : "opacity-0 translate-y-8"
          }`}
        >
          <CardHeader className="border-b border-border/60">
            <div className="flex items-start gap-4">
              <div
                className="flex-shrink-0 h-12 w-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center shadow-sm"
                aria-hidden="true"
              >
                <GraduationCap className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <CardTitle className="text-xl md:text-2xl font-semibold tracking-tight">
                  BSc. Computer Science and Information Technology
                </CardTitle>
                <CardDescription className="text-sm mt-2 flex flex-wrap items-center gap-2">
                  <span>Bhaktapur Multiple Campus, Tribhuvan University (IOST)</span>
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-xs font-medium border border-emerald-500/20">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
                    Final Year
                  </span>
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6 pt-6">
            <div>
              <p className="text-base leading-relaxed mb-6 text-muted-foreground">
                The BSc. CSIT programme is a four-year undergraduate degree blending
                theoretical knowledge and practical skills in computing, software development,
                and IT. It prepares students for both advanced studies and professional careers
                in the tech industry.
              </p>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-4">
                  Core Subjects
                </h4>
                <ul className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {CORE_SUBJECTS.map((subject) => (
                    <li
                      key={subject}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-muted/40 border border-border/60 hover:bg-muted hover:border-primary/20 transition-colors"
                    >
                      <span
                        className="h-1.5 w-1.5 rounded-full bg-primary/60 flex-shrink-0"
                        aria-hidden="true"
                      />
                      <span className="text-xs font-medium text-foreground/90">{subject}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="border-t border-border/60 pt-6">
              <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-2">
                Higher Secondary
              </h4>
              <p className="text-base font-medium text-foreground">+2 Science</p>
              <p className="text-sm text-muted-foreground mt-1">Sudurpaschimanchal Academy</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
