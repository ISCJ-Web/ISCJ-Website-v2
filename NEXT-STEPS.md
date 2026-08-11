# ISCJ Website v2 — Pickup Plan (written 2026-08-11)

Where the project stands after ~3 months away, and the path to finishing it.

## Where you left off (last commit: May 9, 2026)

- Last work: prayer times section fetching live times from the Aladhan API with
  active-prayer detection and mobile polish; before that, the volunteer page and
  navbar reorganization.
- 27 pages exist and the production build (`npm run build`) passes cleanly.
- Deploys automatically to GitHub Pages on every push to `main`.
- The repo was in a detached HEAD state (same commit as `main`) — now back on `main`.

## Problems found during the scan

1. **Uncommitted deletion of `src/app/morocco-26/`** (trip page + registration).
   Decide: commit the removal (`git add -A && git commit`) if the trip is over,
   or restore with `git checkout -- src/app/morocco-26/`.
2. **Stale hardcoded events are live on the site.** `EventsSection.tsx` and
   `AnnouncementsSection.tsx` show May 2026 events in August. Quick interim fix:
   hand-update the arrays until the database exists (Phase 3 replaces this).
3. **4 high-severity npm audit findings** (postcss, sharp). Both are build-time
   only — low real-world risk for a static site — but run `npm audit fix`,
   rebuild, and commit the lockfile.
4. **The old site is Webflow, and every document lives on Webflow's CDN**
   (`cdn.prod.website-files.com/...`). The moment the Webflow subscription is
   cancelled, every PDF link dies. All files must be downloaded and rehosted
   (Phase 2c) before the old site is retired.
5. **Stale docs:** CLAUDE.md/README still list `about/page.tsx`,
   `services/page.tsx`, and `morocco-26/` and omit `programs/*` and
   `volunteer/`. Update the directory trees.

## Architectural constraint to keep in mind

The site is a **static export** (`output: "export"`) — there is no server at
runtime on GitHub Pages. So the admin terminal, database, and LLM event-parsing
cannot use Next.js API routes. The architecture below works on GitHub Pages
today and carries over to Cloudflare unchanged.

---

## Phase 1 — Housekeeping (first session back, ~1 hour)

- [ ] Resolve the morocco-26 deletion (commit or restore).
- [ ] `npm audit fix`, verify `npm run build`, commit.
- [ ] Update CLAUDE.md + README directory structure to match reality.
- [ ] Hand-update the hardcoded events/announcements so the live site isn't
      showing May events (stopgap until Phase 3).

## Phase 2 — Content parity with ISCJ.org (the launch-blocking work)

**2a. Page inventory.** Walk the old site's nav (Webflow exposes no public
sitemap.xml) and build a checklist table in `content-audit.md`:
`old URL → new route → status (matched / content differs / missing / dropped on purpose)`.

Known gaps already found:
- `/hff` — Halal Food Fest page: exists on old site, missing from new site.
- External links in old nav to verify in the new navbar/footer: Noor-Ul-Iman
  School, Maun Credit Union, LIT/Sanad/Weekend School/Quran Academy externals,
  YouTube, Facebook.
- "History of Women at ISCJ" PDF (linked from old About menu).

**2b. Content diff.** Pages were populated in the "Populate all pages with live
content" commit — but verify each page against the *current* old site text,
since content may have changed since. Fix mismatches; get updated copy from the
ISCJ board where the old content itself is outdated.

**2c. File/document rescue.** Inventory every PDF/DOC/form linked anywhere on
the old site. Download them all (they are on Webflow's CDN and will vanish),
place under `public/documents/`, reference via `assetPath()`, and swap in
new/updated versions where ISCJ has them. Keep a `documents.json` manifest
(name, path, category, which pages reference it) — this becomes the seed data
for the Phase 3 documents manager.

## Phase 3 — Database, events, and the admin terminal (Supabase)

Supabase free tier: Postgres + Auth + Storage + Edge Functions, all callable
from a static site.

1. **Schema:** `events` (title, date, time, location, tag, description,
   published), `announcements`, `documents` (name, category, storage_url,
   referenced_on[]). RLS: anonymous role gets read-only on published rows;
   writes require an authenticated admin.
2. **Public site:** convert `EventsSection` / `AnnouncementsSection` to fetch
   from Supabase client-side with the anon key (safe to ship — RLS enforces
   read-only). Keep the current hardcoded data as the loading/error fallback.
3. **Admin terminal:** an `/admin` route in the same app — static page,
   client-side Supabase Auth (email/password), so it deploys with GitHub Pages
   unchanged. Sections: Events, Announcements, Documents.
4. **LLM event entry:** a paste-a-description box. The Claude API key cannot
   live in a static page, so put the call in a **Supabase Edge Function** that
   requires an authenticated admin JWT: paste text → Edge Function calls Claude
   (claude-haiku-4-5 is cheap and plenty for field extraction) → returns
   structured fields → prefills the event form → admin reviews → save.
5. **Documents manager:** upload to Supabase Storage from the admin page; the
   `documents` table tracks each file and which pages reference it, so admins
   can see where a file is used and swap in a new version without touching code.

## Phase 4 — Cloudflare migration (last)

- Deploy the same static `out/` to Cloudflare Pages (or Workers static assets).
- Once on a custom domain, drop the `/ISCJ-Website-v2` basePath — it's
  centralized in `next.config.ts` + `assetPath()`, so it's a one-line env
  change, but grep for any stragglers.
- Optionally move the LLM endpoint from Supabase Edge Functions to a Cloudflare
  Worker later; not required.
- DNS cutover for iscj.org only after Phase 2 parity is confirmed; keep the
  Webflow site up until then (but rescue the files first — 2c).

## Phase 5 — Launch checklist

- [ ] Per-page `metadata` (titles/descriptions) for SEO.
- [ ] Old-site URL → new-site redirects (paths mostly match already; handle
      `/hff` and anything renamed) via Cloudflare redirect rules.
- [ ] Lighthouse + real-phone mobile pass.
- [ ] Analytics (Cloudflare Web Analytics is free and cookie-less).
- [ ] Hand off admin credentials + a one-page "how to post an event" doc.

**Recommended order:** Phase 1 now → Phase 2 (content is what blocks retiring
the old site) → Phase 3 (admin/DB) → Phase 4/5. If motivation strikes for the
fun part first, Phase 3 is independent of Phase 2 — nothing breaks either way.
