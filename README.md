# Dev space club — Presentation Website

A premium, horizontally scrolling presentation website built with Next.js 14, Tailwind CSS, and Framer Motion.

## Design Language
- **Background:** Deep space black (`#050505`)
- **Primary accent:** GitHub Contribution Green (`#39d353`)
- **Secondary accent:** Electric blue (`#58a6ff`)
- **Typography:** JetBrains Mono (mono) + Inter/Geist (sans)
- **Motifs:** Glassmorphism, terminal windows, contribution heatmaps, node graphs

## Slides
| # | Slide | Component |
|---|-------|-----------|
| 01 | The Hook (Hero) | `Slide1Hero` |
| 02 | Tutorial Hell vs Reality | `Slide2Reality` |
| 03 | Choose Your Path (Cohorts) | `Slide3Path` |
| 04 | The Gateway (QR Onboarding) | `Slide4Gateway` |
| 05 | The Pipeline (Architecture) | `Slide5Pipeline` |
| 06 | Open Sessions (Bento Grid) | `Slide6OpenSessions` |
| 07 | Build Days Sprint | `Slide7BuildDays` |
| 08 | The Ecosystem (Parallax) | `Slide8Ecosystem` |
| 09 | whoami Terminal | `Slide9WhoAmI` |
| 10 | The Engineering Core (Team) | `Slide10Team` |
| 11 | Exit / Q&A Outro | `Slide11Outro` |

## Navigation
- **Mouse wheel / trackpad** — scroll between slides
- **Arrow keys** — left/right or up/down
- **Dot nav** — bottom center pill dots
- **Arrow buttons** — right edge
- **Touch swipe** — swipe left/right on mobile

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Production Build

```bash
npm run build
npm run start
```

## Customisation

### Team Data
Edit `components/slides/Slide10Team.tsx` — update the `team` array with real names, bios, and handles.

### QR Code
Replace the procedurally generated QR in `Slide4Gateway.tsx` and `Slide11Outro.tsx` with a real QR pointing to your onboarding portal.

### Colour Palette
All CSS variables are in `app/globals.css` under `:root`.

### Slide Content
Each slide is a standalone component in `components/slides/`. Edit copy and data directly in each file.

## Tech Stack
- **Next.js 14** (App Router)
- **Tailwind CSS 3**
- **Framer Motion 11**
- **TypeScript**
- **JetBrains Mono** (Google Fonts)
