---
name: Portfolio architecture
description: How the Susan Acharya portfolio and the MareSereno hotel demo coexist in the same codebase.
---

## Rule
The portfolio (Index.tsx + `src/components/portfolio/`) and the MareSereno hotel demo (Apartments, BookingPage, Gallery, Contact, Amenities pages + `src/components/{Navbar,Footer,HeroSection,TestimonialsSection,ApartmentCard,BookingForm,LanguageSelector}.tsx` + `src/contexts/LanguageContext.tsx` + `src/locales/`) must stay fully isolated from each other.

**Why:** They are two completely different apps bundled in one repo. The portfolio has its own nav (PortfolioNav), its own hero (HeroSection in portfolio/), its own theme toggle, its own footer. The MareSereno pages use their own Navbar.tsx/Footer.tsx/HeroSection.tsx which read from LanguageContext (EN/IT). Mixing the two breaks both.

**How to apply:**
- Never import MareSereno components into portfolio pages and vice versa.
- Profile image for portfolio: `/public/profile.png` → `/profile.png` URL.
- Portfolio data (projects, skills, stats, etc.) lives in `src/constants/portfolio.ts`; types in `src/types/portfolio.ts`.
- All portfolio section components live under `src/components/portfolio/`.
- Scroll utility for the portfolio: `src/lib/scroll.ts` → `scrollToSection(id)`.
