import { useState, useEffect, useCallback } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/scroll";
import { NAV_ITEMS } from "@/constants/portfolio";

export default function PortfolioNav() {
  const [isDark, setIsDark] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("about");

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const shouldBeDark = saved ? saved === "dark" : false;
    setIsDark(shouldBeDark);
    document.documentElement.classList.toggle("dark", shouldBeDark);
  }, []);

  const toggleTheme = useCallback(() => {
    setIsDark((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle("dark", next);
      localStorage.setItem("theme", next ? "dark" : "light");
      return next;
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    NAV_ITEMS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = useCallback(
    (item: string, closeMobile = false) => {
      scrollToSection(item);
      if (closeMobile) setMobileMenuOpen(false);
    },
    []
  );

  const ThemePicker = () => (
    <div
      role="group"
      aria-label="Theme"
      className="inline-flex items-center gap-0.5 p-0.5 rounded-full bg-muted/70 border border-border/70"
    >
      <button
        onClick={() => { if (isDark) toggleTheme(); }}
        aria-label="Light mode"
        aria-pressed={!isDark}
        title="Light mode"
        className={`flex items-center justify-center h-7 w-7 rounded-full transition-all duration-200 ${
          !isDark
            ? "bg-background text-foreground shadow-sm ring-1 ring-border/60"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        <Sun className="h-3.5 w-3.5" />
      </button>
      <button
        onClick={() => { if (!isDark) toggleTheme(); }}
        aria-label="Dark mode"
        aria-pressed={isDark}
        title="Dark mode"
        className={`flex items-center justify-center h-7 w-7 rounded-full transition-all duration-200 ${
          isDark
            ? "bg-background text-foreground shadow-sm ring-1 ring-border/60"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        <Moon className="h-3.5 w-3.5" />
      </button>
    </div>
  );

  return (
    <nav
      aria-label="Main navigation"
      className="fixed top-0 left-0 right-0 z-50 navbar-glass bg-background/80 backdrop-blur-xl border-b border-border/60"
    >
      <div className="container mx-auto px-4 py-3.5">
        <div className="flex justify-between items-center">
          <button
            onClick={() => scrollToSection("about")}
            className="flex items-center gap-2.5"
            aria-label="Go to top"
          >
            <span className="flex items-center justify-center h-8 w-8 rounded-lg bg-foreground text-background text-sm font-semibold tracking-tight">
              SA
            </span>
            <span className="hidden sm:flex flex-col leading-tight text-left">
              <span className="text-sm font-semibold tracking-tight text-foreground">
                Susan Acharya
              </span>
              <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                Full Stack Engineer
              </span>
            </span>
          </button>

          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item;
              return (
                <button
                  key={item}
                  onClick={() => handleNavClick(item)}
                  className={`nav-link relative px-3 py-2 text-sm capitalize rounded-lg hover:bg-muted/40 transition-colors ${
                    isActive
                      ? "text-foreground nav-link-active bg-muted/50"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item}
                </button>
              );
            })}
            <div className="ml-3">
              <ThemePicker />
            </div>
            <Button
              size="sm"
              className="btn-primary !px-5 !py-2 !text-sm ml-1"
              onClick={() => scrollToSection("contact")}
            >
              Get in touch
            </Button>
          </div>

          <div className="md:hidden flex items-center gap-1">
            <ThemePicker />
            <button
              className="p-2 rounded-lg hover:bg-muted transition-colors text-foreground"
              onClick={() => setMobileMenuOpen((o) => !o)}
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            mobileMenuOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-1 pb-4">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item;
              return (
                <button
                  key={item}
                  onClick={() => handleNavClick(item, true)}
                  className={`text-left px-4 py-3 rounded-xl transition-all duration-300 capitalize text-sm ${
                    isActive
                      ? "bg-muted text-foreground font-medium"
                      : "hover:bg-muted/50 text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item}
                </button>
              );
            })}
            <Button
              size="sm"
              className="btn-primary mt-2"
              onClick={() => handleNavClick("contact", true)}
            >
              Get in touch
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
