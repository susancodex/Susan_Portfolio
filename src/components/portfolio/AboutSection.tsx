import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function AboutSection() {
  const [titleRef, titleVisible] = useScrollAnimation<HTMLHeadingElement>({ threshold: 0.3 });
  const [textRef, textVisible] = useScrollAnimation<HTMLParagraphElement>({ threshold: 0.5 });

  return (
    <>
      <div
        className={`flex justify-center mb-5 transition-all duration-700 ${
          titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
        }`}
      >
        <span className="eyebrow">About</span>
      </div>
      <h2
        ref={titleRef}
        className={`text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-5 transition-all duration-1000 ${
          titleVisible ? "animate-fade-in-up opacity-100" : "opacity-0 translate-y-8"
        }`}
      >
        Crafting reliable software, one commit at a time.
      </h2>
      <div className="section-divider mb-8" aria-hidden="true" />
      <p
        ref={textRef}
        className={`text-base md:text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto transition-all duration-1000 ${
          textVisible ? "animate-fade-in-up opacity-100" : "opacity-0 translate-y-8"
        }`}
      >
        Motivated developer with hands-on experience building scalable and user-friendly web
        applications. Skilled in RESTful API design, modern web technologies, and responsive
        design. Strong problem solver and collaborative team player with a focus on writing
        clean and efficient code. Currently pursuing a Bachelor's degree in BSc. CSIT and
        seeking opportunities to contribute, learn, and grow as a developer.
      </p>
    </>
  );
}
