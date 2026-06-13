import { Github, Linkedin, Mail } from "lucide-react";
import { SOCIAL_LINKS } from "@/constants/portfolio";

export default function PortfolioFooter() {
  return (
    <footer className="bg-background/80 backdrop-blur-sm border-t border-border py-8 relative z-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <span
            className="flex items-center justify-center h-7 w-7 rounded-md bg-foreground text-background text-[11px] font-semibold tracking-tight"
            aria-hidden="true"
          >
            SA
          </span>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Susan Acharya &middot; Built with React &amp;
            Tailwind CSS
          </p>
        </div>
        <nav aria-label="Footer social links" className="flex items-center gap-2">
          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
          >
            <Github className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
          >
            <Linkedin className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href={`mailto:${SOCIAL_LINKS.email}`}
            aria-label="Email"
            className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
          </a>
        </nav>
      </div>
    </footer>
  );
}
