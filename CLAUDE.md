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
│   ├── not-found.tsx             # Custom 404 page
│   ├── about/                    # No index page — subpages only
│   │   ├── who-are-we/page.tsx
│   │   ├── history/page.tsx
│   │   ├── history-of-women/page.tsx
│   │   ├── board-of-trustees/page.tsx
│   │   ├── resident-scholar/page.tsx
│   │   ├── imams-corner/page.tsx
│   │   ├── expansion/page.tsx
│   │   └── contact/page.tsx
│   ├── services/                 # No index page — subpages only
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
│   ├── programs/
│   │   ├── lit/page.tsx
│   │   ├── quran-academy/page.tsx
│   │   ├── sanad/page.tsx
│   │   └── weekend-school/page.tsx
│   ├── committees/page.tsx
│   ├── donate/page.tsx
│   ├── learn-about-islam/page.tsx
│   └── volunteer/page.tsx
├── components/
│   ├── ui/                       # Reusable design-system primitives
│   │   ├── Button.tsx
│   │   ├── Container.tsx
│   │   └── SectionHeading.tsx
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── AlertBanner.tsx       # Announcement ticker (top strip of the navbar)
│   │   ├── AlertBannerView.tsx   # The strip's markup
│   │   └── Footer.tsx
│   ├── events/
│   │   └── EventCardView.tsx     # The event card itself
│   ├── about/
│   │   └── MissionVision.tsx     # CONTENT: Mission + Vision cards (home + Who We Are)
│   └── home/                     # Home page section components
│       ├── HeroSection.tsx
│       ├── AboutSection.tsx
│       ├── PrayerTimesSection.tsx
│       ├── ServicesSection.tsx
│       ├── EventsSection.tsx
│       ├── AnnouncementsSection.tsx
│       └── DonateCTASection.tsx
├── lib/
│   ├── utils.ts                  # cn() utility
│   ├── announcements.ts          # CONTENT: alert banner messages
│   ├── events.ts                 # CONTENT: upcoming events + date helpers
│   ├── prayerSettings.ts         # CONTENT: iqamah + jumu'ah times
│   └── assetPath.ts              # basePath-aware URL helper for /public assets
└── types/
    └── index.ts                  # Shared TypeScript interfaces
public/
├── images/                       # iscj-white-logo.png, hero.jpg (homepage hero only),
                                  # + 14 masjid photos (Aug 2026 shoot) used as page
                                  # heroes: campus-grounds, dome-through-trees,
                                  # dome-golden-hour, dome-entrance, dome-minaret,
                                  # masjid-entrance, minaret-sky, prayer-hall,
                                  # prayer-hall-worshipper, mihrab, skylight-chandelier,
                                  # calligraphy-{arch,panels,roundel}. All resized to
                                  # 2400px wide, mozjpeg q72, EXIF stripped.
                                  # hero.jpg: 2560px, mozjpeg q82, progressive.
                                  # Keep new photos under ~600 KB — next.config.ts sets
                                  # images.unoptimized (required by output: "export"),
                                  # so nothing is compressed at build time.
                                  # Run EVERY new image through the optimizer first:
                                  #   npm run optimize-image public/images/<file>
                                  # (see scripts/optimize-image.mjs). Add --quality 88
                                  # for screenshots/graphics with text, which show JPEG
                                  # ringing at the q80 default.
└── documents/                    # PDFs rescued from the old Webflow site (bylaws,
                                  # membership/zakat forms, etc.), plus the 2018 ISCJ
                                  # history book (iscj-history-book.pdf, 324 pages, the
                                  # source for /about/history) — referenced via
                                  # assetPath("/documents/<name>.pdf"); keep filenames
                                  # stable/year-less so yearly updates are drop-in
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

### Alert Banner

Site-wide announcement ticker, rendered as the first child of the fixed `<nav>`
so it stays visible while scrolling and never reflows page content.

- **Content:** `src/lib/announcements.ts`. One entry per message; the banner
  cycles them every 6.5s (paused on hover/focus). Keep text to ~90 characters.
  Fields: `label`, `text`, `href`, `linkLabel`, `active` (off switch),
  `startsAt`/`endsAt` (ISO scheduling window, so a notice can be written weeks
  ahead and appear on its own). `getVisibleAnnouncements()` does the filtering
  and is the only thing the component calls.
- **Dismissal is session-only, by design.** The X hides the banner for the rest
  of that visit (it survives client-side navigation, since the component lives
  in the root layout) and a reload brings it back. Nothing is written to
  storage — a closure notice must not be lost to a stray tap.
- **Rendered after mount**, not at build time: this is a static export, so a
  build-time `Date.now()` would freeze the `startsAt`/`endsAt` window at deploy
  time and scheduled announcements would never turn over.
- **Height:** the banner publishes its measured height as the `--banner-h` CSS
  variable on `<html>` (0px when hidden or empty). Anything positioned against
  the bottom of the navbar must add it, e.g. `.imam-hero-photo` uses
  `top: calc(108px + var(--banner-h))`. Navbar is 108px desktop / 64px mobile.
- **Styles:** `.alert-banner*` in `globals.css` (inline styles can't do the
  media queries or the pulse keyframes).

### Editing Site Content

Three files hold everything the masjid changes between code releases. There is
no database and no admin UI: edit the file, commit, push, and the GitHub Actions
workflow redeploys. Each file opens with a comment explaining its own fields.

| What changes | File | Notes |
|---|---|---|
| Alert banner ticker | `src/lib/announcements.ts` | See "Alert Banner" above |
| Upcoming events | `src/lib/events.ts` | `EVENTS` array |
| Iqamah + jumu'ah times | `src/lib/prayerSettings.ts` | `PRAYER_SETTINGS` |

- **Events carry an ISO date, not display strings.** `"2026-09-14"` is the
  source of truth; the "Sep" and "14" on the card are derived by
  `eventDisplayParts()`. Parse dates only with `parseEventDate()`, which reads
  them at local noon: a bare `new Date("2026-09-14")` is UTC midnight, which is
  the previous evening in New Jersey and renders the wrong day.
- **Past events drop off by themselves.** `EventsSection` sorts at module scope
  so the build output and the browser's first render match, then narrows to
  upcoming events in a `useEffect`. Filtering before mount would bake "today"
  into the static HTML at deploy time and break hydration. Leaving an old event
  in the array is therefore harmless; deleting it just keeps the file tidy. With
  nothing upcoming the section renders a short line instead of an empty grid.
- **Iqamah times are stored plain** (`"5:30 AM"`); `iqamaLabel()` is what turns
  them into the `"Iqama 5:30"` the strip renders. An empty string hides that
  prayer's line. Sunrise has no iqamah and is absent from the record by design.
- **Adhan times are never edited here.** They come from the Aladhan API at
  runtime; `FALLBACK_TIMES` in `PrayerTimesSection` only shows if that call
  fails.
- `EventCardView` and `AlertBannerView` hold the markup for the event card and
  the banner strip. They are separate from their sections so the card and strip
  can be rendered on their own; `AlertBanner` remains the only writer of
  `--banner-h`.

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
- Current Client Components: `Navbar`, `Footer`, `Button`, `HeroSection`, `AboutSection`, `ServicesSection`, `EventsSection`, `AnnouncementsSection`, `MissionVision`, `PrayerTimesSection` (fetches live times from the Aladhan API)
- Current Server Components (no `"use client"`): `DonateCTASection`, `Container`, `SectionHeading`
- Framer Motion variants defined at the component level, not inline

## Styling Conventions

- **Use inline styles for all component styling** — Tailwind arbitrary-value classes (e.g., `px-8`, `py-[14px]`, `font-[family-name:...]`) do not reliably generate CSS in this project's Tailwind v4 setup. Drop to `style={{}}` props directly, as every section component already does.
- Tailwind is only used for a small set of known-working utility classes: `section-label`, `section-title`, and responsive override classes like `max-sm:!grid-cols-1`.
- Section labels are always: small, uppercase, gold, `tracking-[0.2em]` — use the `.section-label` CSS class defined in `globals.css`
- Section title `<em>` is always: italic, `font-light` (weight 300), same color as heading — use the `h2.section-title` CSS class
- The `2px` gap between cards is intentional — it creates a mosaic/grid-join effect, not a traditional gutter
- Dark-background sections use `rgba(255,255,255,*)` for all sub-colors (never hardcode grays)
- Geometric texture overlays go on `::before` pseudo-elements so content stays above

## Image References

This project is deployed as a static export (`output: "export"`) under a production `basePath` of `/ISCJ-Website-v2` (see `next.config.ts`). Next.js auto-prefixes `<Image>`/`<Link>` `href`/`src` props, but it does **not** rewrite raw URLs inside CSS `background-image`, plain `<img>` tags, or anything else where you build a string yourself.

**Rule:** Every reference to a file in `/public` must go through the `assetPath()` helper from `@/lib/assetPath`. Otherwise the URL works in `next dev` but 404s in the production build, leaving you with broken images / missing assets.

```tsx
import { assetPath } from "@/lib/assetPath";

// next/image
<Image src={assetPath("/images/iscj-white-logo.png")} alt="ISCJ" width={80} height={36} />

// inline-style background-image
<div style={{ backgroundImage: `url('${assetPath("/images/hero.jpg")}')` }} />
```

Never write `src="/images/..."` or `backgroundImage: "url(/images/...)"` directly.

## Known Gotchas

- **Stale `.next` cache:** After installing packages, if you see `__webpack_modules__[moduleId] is not a function`, delete `.next/` and restart the dev server. Webpack module IDs get out of sync with cached build artifacts.
- **`Button.tsx` is a Client Component** (`"use client"`) because it uses `onMouseEnter`/`onMouseLeave` for hover effects. It is safe to import from both Server and Client Components.

## Roadmap

See `NEXT-STEPS.md` for the full phased plan. Confirmed direction:

- **Content parity** with the old Webflow site (iscj.org), including rescuing all
  PDFs/documents off Webflow's CDN into `public/documents/` before it is retired.
  Morocco '26 and Halal Food Fest (`/hff`) pages are intentionally dropped (events over).
- **No database.** Events, iqamah times and banner alerts are edited in the three
  content files listed under "Editing Site Content" and ship in the build. A
  Supabase backend and an `/admin` portal were planned, built against mock data,
  and then removed: at roughly fifty content changes a year, run by the developer,
  a database bought nothing that code edits do not already do, and it added an
  account to keep alive plus a runtime failure mode a static site otherwise cannot
  have. Revisit only if a non-technical volunteer needs to publish, and prefer a
  git-based CMS (Decap, Sveltia) over a database even then.
- **Visitor analytics** — Cloudflare Web Analytics, a cookieless script tag, for
  visit counts and referrers. Not yet added.
- **Hosting migration** to Cloudflare Pages at the end; basePath drops to `""` then
  (centralized in `next.config.ts` + `assetPath()`).
