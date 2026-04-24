# Susan Acharya Portfolio

A personal portfolio website for Susan Acharya, a Junior Django & Python Developer.

## Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS + shadcn/ui components
- **Routing**: React Router DOM v6
- **State/Data**: TanStack React Query
- **Forms**: React Hook Form + Zod

## Project Structure

```
src/
  App.tsx           # Root component with routing
  main.tsx          # Entry point
  pages/            # Page-level components
  components/       # Reusable UI components
  hooks/            # Custom React hooks
  lib/              # Utility functions
  contexts/         # React context providers
  locales/          # i18n locale files
  assets/           # Static assets
```

## Development

Run the development server:
```bash
npm run dev
```

The app runs on port 5000.

## Deployment

Build for production:
```bash
npm run build
```

The output goes to `dist/` and is served as a static site.

## Notes

- Migrated from Lovable to Replit
- `lovable-tagger` plugin removed (Lovable-specific, not needed on Replit)
- Vite configured to listen on `0.0.0.0:5000` for Replit compatibility
