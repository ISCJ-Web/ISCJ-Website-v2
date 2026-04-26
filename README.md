# ISCJ Website v2

The official website for the **Islamic Society of Central Jersey (ISCJ)**. A modern, animated, public-facing site built with Next.js — covering the mosque's about pages, services, events, and donation.

**Live site:** [iscj-web.github.io/ISCJ-Website-v2](https://iscj-web.github.io/ISCJ-Website-v2)

---

## Tech Stack

| Tool | Purpose |
|---|---|
| [Next.js 15](https://nextjs.org) (App Router) | Framework + routing |
| TypeScript | Type safety |
| Tailwind CSS v4 | Utility classes + CSS custom properties |
| Framer Motion | Scroll animations, parallax, transitions |
| Lucide React | Icons |
| Google Fonts | Cormorant Garamond, DM Sans, Scheherazade New |

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production static export → out/
```

---

## Project Structure

```
src/
├── app/                        # Next.js App Router pages
│   ├── layout.tsx              # Root layout — fonts, metadata, navbar/footer
│   ├── page.tsx                # Home page
│   ├── globals.css             # CSS custom properties + Tailwind directives
│   ├── about/                  # About section (who we are, history, board, etc.)
│   ├── services/               # Services (funeral, wedding, zakat, library, etc.)
│   ├── committees/
│   ├── donate/
│   ├── learn-about-islam/
│   └── morocco-26/             # Morocco 2026 trip + registration
├── components/
│   ├── ui/                     # Design-system primitives (Button, Card, Container)
│   ├── layout/                 # Navbar, Footer
│   └── home/                   # Home page sections (Hero, About, Prayer Times, etc.)
├── lib/
│   └── utils.ts                # cn() — clsx + tailwind-merge
└── types/
    └── index.ts                # Shared TypeScript interfaces
public/
└── images/                     # Static assets (logo, hero photo)
```

---

## Design System

### Colors

All colors are CSS custom properties defined in [`globals.css`](src/app/globals.css) and used via `var(--token)` in inline styles.

| Token | Value | Usage |
|---|---|---|
| `--navy` | `#012544` | Primary brand, headings, card headers |
| `--navy-light` | `#1a3a5c` | Hover states on navy |
| `--navy-deep` | `#011830` | Navbar, footer, prayer bar |
| `--gold` | `oklch(0.72 0.10 75)` | Accents, labels, CTA buttons |
| `--gold-light` | `oklch(0.88 0.06 80)` | Gold hover states |
| `--surface` | `#f8fafc` | Alternating section backgrounds |
| `--text` | `#0d1f2d` | Default body text |
| `--muted` | `#6b7f8f` | Secondary / description text |
| `--border` | `#e2e8f0` | Dividers, card borders |

### Typography

- **Cormorant Garamond** — all headings and display text. Italic `<em>` at weight 300.
- **DM Sans** — body copy, nav links, labels, buttons.
- **Scheherazade New** — Arabic text only (hero greeting).

### Layout

- Max content width: `1200px` centered
- Horizontal padding: `48px` desktop / `24px` mobile
- Section vertical padding: `120px` (large) / `80px` (compact)
- Card grids use a `2px` gap — intentional tight mosaic join, not a gutter

---

## Styling Approach

This project uses **inline styles for all component-level styling**. Tailwind arbitrary-value classes don't reliably generate CSS in the Tailwind v4 setup, so every section component uses `style={{}}` props directly.

Tailwind is only used for a small set of globals defined in `globals.css`:
- `.section-label` — gold, uppercase, 0.2em tracking
- `.section-title` — Cormorant heading with italic `<em>` support
- Responsive overrides like `max-sm:!grid-cols-1`

---

## Animations

Scroll-triggered reveals use **Framer Motion** `whileInView`:

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  viewport={{ once: true, amount: 0.1 }}
/>
```

The navbar transitions from transparent (over the hero) to `--navy-deep` once the user scrolls past 60px.

---

## Deployment

The site is deployed to **GitHub Pages** via a GitHub Actions workflow ([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)). Every push to `main` triggers a fresh build and deploy.

Next.js is configured with `output: "export"` to produce a fully static site in `out/`.

---

## Roadmap

- Supabase integration for live prayer times and events CRUD
- Admin dashboard with Supabase Auth
- Data migration from the existing static site
