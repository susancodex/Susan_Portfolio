import PortfolioNav from "@/components/portfolio/PortfolioNav";
import ScrollProgress from "@/components/portfolio/ScrollProgress";
import BackToTop from "@/components/portfolio/BackToTop";
import HeroSection from "@/components/portfolio/HeroSection";
import MetricsStrip from "@/components/portfolio/MetricsStrip";
import TechStackStrip from "@/components/portfolio/TechStackStrip";
import AboutSection from "@/components/portfolio/AboutSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import EducationSection from "@/components/portfolio/EducationSection";
import CertificatesSection from "@/components/portfolio/CertificatesSection";
import LanguagesSection from "@/components/portfolio/LanguagesSection";
import TestimonialsSection from "@/components/portfolio/TestimonialsSection";
import ContactSection from "@/components/portfolio/ContactSection";
import PortfolioFooter from "@/components/portfolio/PortfolioFooter";

export default function Index() {
  return (
    <div className="min-h-screen bg-transparent">
      <div
        className="fixed inset-0 overflow-hidden pointer-events-none"
        style={{ zIndex: -1 }}
        aria-hidden="true"
      >
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 opacity-[0.28] md:opacity-[0.35] animate-grid-drift bg-dot-grid" />
        <div className="absolute top-[6%] -left-[10%] md:top-[8%] md:left-[6%] w-[18rem] h-[18rem] md:w-[28rem] md:h-[28rem] lg:w-[34rem] lg:h-[34rem] rounded-full bg-gradient-to-br from-primary/10 md:from-primary/12 to-transparent blur-3xl animate-aurora-1" />
        <div className="absolute bottom-[8%] -right-[10%] md:bottom-[12%] md:right-[6%] w-[20rem] h-[20rem] md:w-[32rem] md:h-[32rem] lg:w-[38rem] lg:h-[38rem] rounded-full bg-gradient-to-br from-[hsl(var(--accent-cyan))]/8 md:from-[hsl(var(--accent-cyan))]/10 to-transparent blur-3xl animate-aurora-2" />
        <div className="hidden sm:block absolute top-[40%] left-[55%] w-[18rem] h-[18rem] md:w-[24rem] md:h-[24rem] lg:w-[28rem] lg:h-[28rem] rounded-full bg-gradient-to-br from-[hsl(var(--accent-purple))]/6 md:from-[hsl(var(--accent-purple))]/8 to-transparent blur-3xl animate-aurora-3" />
        <div className="hidden lg:block absolute -top-1/4 left-1/2 -translate-x-1/2 w-[140vw] h-[140vw] opacity-[0.05] animate-spin-slow bg-conic-shimmer" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background/60 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background/60 to-transparent" />
      </div>

      <ScrollProgress />
      <BackToTop />
      <PortfolioNav />

      <main>
        <HeroSection />
        <MetricsStrip />
        <TechStackStrip />

        <section id="about" className="py-20 md:py-28 bg-background/60 backdrop-blur-sm border-y border-border/40 relative z-10">
          <div className="container mx-auto px-4">
            <AboutSection />
          </div>
        </section>

        <section id="projects" className="py-20 md:py-28 relative z-10">
          <div className="container mx-auto px-4">
            <ProjectsSection />
          </div>
        </section>

        <section id="skills" className="py-20 md:py-28 bg-background/60 backdrop-blur-sm border-y border-border/40 relative z-10">
          <div className="container mx-auto px-4">
            <SkillsSection />
          </div>
        </section>

        <section id="education" className="py-20 md:py-28 relative z-10">
          <div className="container mx-auto px-4">
            <EducationSection />
          </div>
        </section>

        <section className="py-20 md:py-28 bg-background/60 backdrop-blur-sm border-y border-border/40 relative z-10" aria-label="Certificates">
          <div className="container mx-auto px-4">
            <CertificatesSection />
          </div>
        </section>

        <section className="py-20 md:py-28 relative z-10" aria-label="Languages and achievements">
          <div className="container mx-auto px-4">
            <LanguagesSection />
          </div>
        </section>

        <section className="py-20 md:py-28 relative z-10" aria-label="Testimonials">
          <div className="container mx-auto px-4">
            <TestimonialsSection />
          </div>
        </section>

        <section id="contact" className="py-20 md:py-28 bg-background/60 backdrop-blur-sm border-y border-border/40 relative z-10">
          <div className="container mx-auto px-4">
            <ContactSection />
          </div>
        </section>
      </main>

      <PortfolioFooter />
    </div>
  );
}
