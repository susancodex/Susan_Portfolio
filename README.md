# Susan Acharya — Portfolio

Personal portfolio website for Susan Acharya, a Full Stack Engineer and BSc. CSIT student based in Kathmandu, Nepal. Built with React + Vite, deployed on Vercel.

**Live site:** _add your Vercel URL here_

---

## Tech Stack

- **Framework:** React 19 + Vite
- **Language:** TypeScript
- **Styling:** Tailwind CSS v3 + Radix UI + shadcn/ui
- **Animations:** Framer Motion
- **Routing:** React Router DOM v7
- **Icons:** Lucide React

## Features

- Scroll-triggered animations and stagger effects
- Role cycler in the hero section
- Projects showcase with live demo + GitHub links
- Skills, Education, Certificates, and Testimonials sections
- Contact section with FAQ
- Light / dark mode toggle
- Fully responsive (mobile-first)
- SEO-optimised: JSON-LD structured data, Open Graph, sitemap.xml, robots.txt

## Project Structure

```
artifacts/portfolio/
├── public/           # Static assets (favicon, OG image, sitemap, robots.txt)
├── src/
│   ├── components/   # UI primitives (shadcn/ui) + portfolio sections
│   ├── contexts/     # LanguageContext, theme
│   ├── hooks/        # useScrollAnimation, useStaggerAnimation, use-mobile
│   ├── pages/        # Index, Contact, Gallery, Apartments, Booking, Amenities
│   └── lib/          # Utilities
├── tailwind.config.ts
├── vite.config.ts
└── package.json
```

## Local Development

Requires Node 20+ and pnpm.

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm --filter @workspace/portfolio run dev
```

The dev server runs on the port set by the `PORT` environment variable (managed automatically by Replit).

## Deployment

### Vercel (recommended)

1. Import the GitHub repo at [vercel.com/new](https://vercel.com/new)
2. Leave all settings as default — `vercel.json` at the repo root configures everything:
   - **Install:** `pnpm install`
   - **Build:** `pnpm --filter @workspace/portfolio run build`
   - **Output:** `artifacts/portfolio/dist`
   - **SPA rewrites:** all routes → `index.html`
3. Click **Deploy**

### Render (Static Site)

| Setting | Value |
|---|---|
| Build Command | `pnpm --filter @workspace/portfolio run build` |
| Publish Directory | `artifacts/portfolio/dist` |
| Environment Variable | `BASE_PATH` = `/` |

## Environment Variables

| Variable | Required | Description |
|---|---|---|
| `PORT` | Dev only | Port for the Vite dev server (set by Replit) |
| `BASE_PATH` | Build | Base URL path — set to `/` for root deployments |
