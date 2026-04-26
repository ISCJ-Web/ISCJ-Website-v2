# ISCJ Mosque Website

## Project Overview

Website for the Islamic Society of Central Jersey (ISCJ) mosque. A modern, animated, public-facing site with multiple pages covering about, services, events, and donation.

## Tech Stack

- **Framework:** Next.js 15.x (App Router) + TypeScript
- **Styling:** Tailwind CSS v4 (utility-first)
- **Animations:** Framer Motion (parallax, scroll-triggered reveals, transitions)
- **Icons:** Lucide React
- **Fonts:** Cormorant Garamond + DM Sans + Scheherazade New (Google Fonts)
- **Utilities:** `clsx` + `tailwind-merge` (via `cn()` in `src/lib/utils.ts`)

## Directory Structure

```
src/
├── app/
│   ├── layout.tsx                # Root layout (fonts, metadata, navbar/footer)
│   ├── page.tsx                  # Home page (assembles section components)
│   ├── globals.css               # Tailwind directives + CSS custom properties
│   ├── about/
│   │   ├── page.tsx
│   │   ├── who-are-we/page.tsx
│   │   ├── history/page.tsx
│   │   ├── board-of-trustees/page.tsx
│   │   ├── resident-scholar/page.tsx
│   │   ├── imams-corner/page.tsx
│   │   ├── expansion/page.tsx
│   │   └── contact/page.tsx
│   ├── services/
│   │   ├── page.tsx
│   │   ├── funeral/page.tsx
│   │   ├── wedding/page.tsx
│   │   ├── zakat/page.tsx
│   │   ├── sadaqah/page.tsx
│   │   ├── food-pantry/page.tsx
│   │   ├── library/page.tsx
│   │   ├── senior-housing/page.tsx
│   │   ├── endowment-fund/page.tsx
│   │   ├── business-directory/page.tsx
│   │   └── friday-halaqa/page.tsx
│   ├── committees/page.tsx
│   ├── donate/page.tsx
│   ├── learn-about-islam/page.tsx
│   └── morocco-26/
│       ├── page.tsx
│       └── registration/page.tsx
├── components/
│   ├── ui/                       # Reusable design-system primitives
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Container.tsx
│   │   └── SectionHeading.tsx
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   └── home/                     # Home page section components
│       ├── HeroSection.tsx
│       ├── AboutSection.tsx
│       ├── PrayerTimesSection.tsx
│       ├── ServicesSection.tsx
│       ├── EventsSection.tsx
│       ├── AnnouncementsSection.tsx
│       └── DonateCTASection.tsx
├── lib/
│   └── utils.ts                  # cn() utility
└── types/
    └── index.ts                  # Shared TypeScript interfaces
public/
└── images/
    ├── iscj-white-logo.png
    └── hero.jpg
```

## Design System

### Colors

Defined as CSS custom properties in `globals.css`. Map these directly to Tailwind theme tokens.

| Token        | Value                  | Usage                                      |
|--------------|------------------------|--------------------------------------------|
| `--navy`     | `#012544`              | Primary brand, headings, card headers      |
| `--navy-light`| `#1a3a5c`             | Hover states on navy backgrounds           |
| `--navy-deep`| `#011830`              | Navbar (scrolled), footer, prayer bar      |
| `--gold`     | `oklch(0.72 0.10 75)`  | Accents, labels, CTA buttons, active states|
| `--gold-light`| `oklch(0.88 0.06 80)` | Gold hover states                          |
| `--white`    | `#ffffff`              | Text on dark backgrounds, card fills       |
| `--surface`  | `#f8fafc`              | Alternating section backgrounds            |
| `--text`     | `#0d1f2d`              | Default body text                          |
| `--muted`    | `#6b7f8f`              | Secondary body text, descriptions          |
| `--border`   | `#e2e8f0`              | Dividers, card borders                     |

### Typography

**Fonts:**
- `Cormorant Garamond` — display/headings. Italic weight-300 for emphasis (`<em>`). Loaded from Google Fonts.
- `DM Sans` — body copy, nav, labels, buttons. Weights 300/400/500.
- `Scheherazade New` — Arabic text only (hero greeting). Weight 400.

**Scale:**

| Role              | Size                           | Weight | Letter-spacing | Notes                          |
|-------------------|--------------------------------|--------|----------------|--------------------------------|
| Hero heading      | `clamp(2.4rem, 5vw, 4.8rem)`   | 400    | `0.02em`       | Cormorant Garamond             |
| Section title     | `clamp(2rem, 4vw, 3.2rem)`     | 400    | `-0.01em`      | Cormorant Garamond, line-height 1.1 |
| Donate CTA heading| `clamp(2.2rem, 5vw, 4rem)`     | 400    | —              | Cormorant Garamond             |
| Section label     | `0.68rem`                      | 500    | `0.2em`        | DM Sans, uppercase, gold color |
| Body large        | `1.05rem`                      | 300    | —              | line-height 1.85               |
| Body              | `1rem`                         | 300    | `0.06em`       | line-height 1.7–1.8            |
| Body small        | `0.88rem`                      | 300    | —              | line-height 1.75               |
| Nav links         | `0.78rem`                      | 400    | `0.08em`       | uppercase                      |
| Prayer time       | `1.1rem`                       | 400    | —              | Cormorant Garamond             |
| Prayer label      | `0.65rem`                      | 500    | `0.12em`       | uppercase                      |
| Event day number  | `2.2rem`                       | 300    | —              | Cormorant Garamond             |
| Stat number       | `3rem`                         | 300    | —              | Cormorant Garamond             |

### Spacing & Layout

- **Horizontal padding:** `48px` desktop, `24px` mobile
- **Max content width:** `1200px`, centered with `margin: 0 auto`
- **Section vertical padding:** `120px` (large sections), `80px` (compact sections like announcements)
- **Card grid gap:** `2px` — tight mosaic joins, not gutters
- **Section grid gap:** `96px` (about), `64px` (services head), `48px` (footer columns)

### Grid Layouts

| Section        | Columns                    | Gap    |
|----------------|----------------------------|--------|
| About          | `1fr 1fr`                  | `96px` |
| Services       | `repeat(3, 1fr)`           | `2px`  |
| Events         | `repeat(3, 1fr)`           | `2px`  |
| Services head  | `1fr 1fr`                  | `64px` |
| Footer top     | `2fr 1fr 1fr 1fr`          | `48px` |
| Stats          | `1fr 1fr`                  | `2px`  |
| Nav top        | `1fr auto 1fr`             | —      |

### Buttons

**Primary** — gold fill, navy-deep text:
- `background: var(--gold)`, `color: var(--navy-deep)`
- Padding: `14px 32px`, font-size `0.8rem`, weight 500, letter-spacing `0.1em`, uppercase
- `border-radius: 2px`
- Hover: `background: var(--gold-light)`, `translateY(-1px)`

**Outline** — transparent with white border (on dark backgrounds):
- `border: 1px solid rgba(255,255,255,0.35)`, `color: white`
- Padding: `13px 32px` (1px less top/bottom to account for border)
- Hover: `border-color: var(--gold)`, `color: var(--gold)`, `translateY(-1px)`

**Nav Donate** — minimal outline, smaller:
- `border: 1px solid rgba(255,255,255,0.45)`, padding `8px 22px`, font-size `0.7rem`
- Hover: fills white, text goes navy-deep

### Component Patterns

**Section label + title block:**
```
<span class="section-label">Category Name</span>   ← gold, 0.68rem, uppercase, 0.2em spacing
<h2 class="section-title">Heading <em>Italic</em></h2>  ← em = italic weight-300
```

**Service card:** white fill, `48px 36px` padding, 2px gap grid. SVG icon (40×40, opacity 0.7) → h3 (Cormorant 1.4rem) → p (0.88rem muted). Hover: `translateY(-4px)` + shadow.

**Event card:** navy header block (date + tag) stacked over white/surface body. Date block: gold month label (0.6rem) + large day number (Cormorant 2.2rem white). Tag: small pill, `rgba(255,255,255,0.07)` bg. Body: Cormorant h4 (1.25rem) + meta row.

**Announce item:** flex row — gold dot (6px circle) + content block (h4 + p) + date pushed right with `margin-left: auto`. Top/bottom borders `1px solid var(--border)`.

**Stat card:** 2×2 grid, `2px` gap. Alternating fill: `--surface` / `--navy`. Navy card inverts text colors. Cormorant number (3rem weight-300) + small label.

**Geometric pattern overlay:** used on hero background and CTA section `::before`. Repeating linear gradients at 30°/−30° or 45°/−45°, `rgba(255,255,255,0.012)` — nearly invisible texture.

**Gold accent line:** absolutely positioned box offset `24px` from image, border `1px solid var(--gold)` at `0.25` opacity, `z-index: -1`.

### Navbar Behavior

- Fixed, `z-index: 100`
- Default (over hero): `background: transparent`, social icons hidden (`opacity: 0`), nav links slid up (`top: -54px`), logo hidden
- On scroll past 60px (`.scrolled`): `background: var(--navy-deep)`, all elements fade in, nav links slide down to `top: 0`
- Active link: full-width gold underline via `::after` pseudo-element

### Scroll Animations

Apply to `.service-card`, `.event-card`, `.announce-item`, `.stat-card`:
- Initial state: `opacity: 0`, `transform: translateY(20px)`
- On `IntersectionObserver` entry: `opacity: 1`, `transform: translateY(0)`, `transition: 0.5s ease`
- In Next.js, use Framer Motion `whileInView` with `viewport={{ once: true, amount: 0.1 }}`

### Responsive Breakpoint (≤768px)

- Nav links hidden; horizontal padding drops to `24px`
- About section: single column, visual moves to top (`order: -1`)
- Services/Events grids: single column
- Prayer bar: `overflow-x: auto`
- Footer: `1fr 1fr` two-column
- Announcements: stacks vertically

## Component Conventions

- All components are PascalCase files (e.g., `Button.tsx`)
- UI primitives accept standard HTML props via `React.ComponentPropsWithoutRef`
- Section components are self-contained with their own data/layout
- Use `"use client"` on components that need browser APIs, interactivity, or event handlers. Any component with `onMouseEnter`/`onMouseLeave`/`onClick` etc. **must** be a Client Component — even if it has no hooks — or Next.js will throw when a Server Component tries to render it.
- Current Client Components: `Navbar`, `Footer`, `Button`, `HeroSection`, `AboutSection`, `ServicesSection`, `EventsSection`, `AnnouncementsSection`
- Current Server Components (no `"use client"`): `PrayerTimesSection`, `DonateCTASection`
- Framer Motion variants defined at the component level, not inline

## Styling Conventions

- **Use inline styles for all component styling** — Tailwind arbitrary-value classes (e.g., `px-8`, `py-[14px]`, `font-[family-name:...]`) do not reliably generate CSS in this project's Tailwind v4 setup. Drop to `style={{}}` props directly, as every section component already does.
- Tailwind is only used for a small set of known-working utility classes: `section-label`, `section-title`, and responsive override classes like `max-sm:!grid-cols-1`.
- Section labels are always: small, uppercase, gold, `tracking-[0.2em]` — use the `.section-label` CSS class defined in `globals.css`
- Section title `<em>` is always: italic, `font-light` (weight 300), same color as heading — use the `h2.section-title` CSS class
- The `2px` gap between cards is intentional — it creates a mosaic/grid-join effect, not a traditional gutter
- Dark-background sections use `rgba(255,255,255,*)` for all sub-colors (never hardcode grays)
- Geometric texture overlays go on `::before` pseudo-elements so content stays above

## Known Gotchas

- **Stale `.next` cache:** After installing packages, if you see `__webpack_modules__[moduleId] is not a function`, delete `.next/` and restart the dev server. Webpack module IDs get out of sync with cached build artifacts.
- **`Button.tsx` is a Client Component** (`"use client"`) because it uses `onMouseEnter`/`onMouseLeave` for hover effects. It is safe to import from both Server and Client Components.
- **`index.html` in the project root** is the original static prototype — use it as a reference for styles and layout when porting sections to React.

## Future Plans

- Supabase integration for events CRUD and prayer times
- Admin dashboard with Supabase Auth (email/password)
- Data migration from existing static site
