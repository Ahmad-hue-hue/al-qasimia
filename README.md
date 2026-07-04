# Al Qasimia Tahfidhul Qur'an — Official Website

Tovuti rasmi ya chuo cha hifadhi ya Qur'an — Nzuguni, Dodoma, Tanzania.

## Tech Stack

- **Next.js** (App Router) + **Bun**
- Tailwind CSS v4
- GSAP (scroll reveals) + Framer Motion (micro-interactions)
- Three.js via React Three Fiber (hero ambience)
- next-themes (dark/light mode)
- Phosphor Icons

## Getting Started

```bash
bun install
bun dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
bun run build
bun start
```

## Pages

| Route | Page |
|-------|------|
| `/` | Nyumbani |
| `/kuhusu` | Kuhusu |
| `/mafunzo` | Mafunzo |
| `/udahili` | Udahili |
| `/picha` | Picha |
| `/mawasiliano` | Mawasiliano |

## CI/CD

GitHub Actions runs lint + build on every push/PR. On merge to `main`, deploys to Vercel (requires `VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID` secrets).

## Configuration

WhatsApp number and contact details live in `lib/site-config.ts` — single source of truth.

## License

Private — Al Qasimia Tahfidhul Qur'an.
