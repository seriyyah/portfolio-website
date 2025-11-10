# Read.md
## Project Overview

This is a modern portfolio website built with Next.js 16, React 19, TypeScript, and Tailwind CSS. It showcases personal information, skills, work experience, and projects with a focus on clean code architecture and type safety.

## Development Commands

### Essential Commands
- `npm run dev` - Start development server on http://localhost:3000
- `npm run build` - Build production application
- `npm run start` - Start production server (requires build first)
- `npm run lint` - Run ESLint for code linting

### Testing Commands
Currently no test framework is configured. When adding tests, follow these patterns:
- Unit tests: Use Jest with React Testing Library
- E2E tests: Consider Playwright or Cypress

## Project Architecture

### Directory Structure
```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with fonts and metadata
│   ├── page.tsx           # Home page with all sections
│   └── globals.css        # Global styles and CSS variables
├── components/            # Reusable components
│   ├── hero.tsx          # Landing section with typewriter effect
│   ├── navigation.tsx    # Fixed navigation with active states
│   └── ui/               # Shadcn-style UI components
│       └── button.tsx    # Button component with CVA variants
├── data/                 # Static data and content
│   └── portfolio.ts      # Personal info, skills, experience, projects
├── hooks/                # Custom React hooks
│   └── useTypewriter.ts  # Advanced typewriter animation hook
├── lib/                  # Utilities and helpers
│   └── utils.ts          # Common utilities (cn, debounce, throttle)
└── types/                # TypeScript type definitions
    └── portfolio.ts      # Domain types for portfolio data
```

### Environment Setup
- Node.js 18+ required
- Strict TypeScript configuration
- ESLint for code quality
- Dark mode as default theme

## Technology Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript with strict configuration
- **Styling**: Tailwind CSS v4 with custom design system
- **UI Components**: Custom components with class-variance-authority
- **Animations**: Framer Motion + CSS animations
- **Fonts**: Geist Sans and Geist Mono from Google Fonts
- **Icons**: Lucide React
- **Forms**: React Hook Form with Zod validation (ready for contact form)
- **Build Tool**: Next.js built-in bundler with React Compiler