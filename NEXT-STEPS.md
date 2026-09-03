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

1. ~~**Uncommitted deletion of `src/app/morocco-26/`**~~ **RESOLVED 2026-08-11:**
   trip is over — removal committed.
2. ~~**Stale hardcoded events are live on the site.**~~ **RESOLVED 2026-09-03:**
   events moved to `src/lib/events.ts` with real ISO dates, and `EventsSection`
   now drops past events after mount, so they expire on their own.
   `AnnouncementsSection.tsx` is a separate hardcoded list and still shows April
   2026 items — it was left out of the content-file work and needs either the
   same treatment or deletion.
3. **npm audit findings** (postcss, sharp). Build-time only — low real-world risk
   for a static site. `npm audit fix` was a no-op; the remaining 3 high findings
   are versions bundled inside Next 15 and only clear with a **Next 16 upgrade**
   (breaking). Fold that upgrade into Phase 3 or 4 when there's appetite for it.
4. **The old site is Webflow, and every document lives on Webflow's CDN**
   (`cdn.prod.website-files.com/...`). The moment the Webflow subscription is
   cancelled, every PDF link dies. All files must be downloaded and rehosted
   (Phase 2c) before the old site is retired.
5. ~~**Stale docs**~~ **RESOLVED 2026-08-11:** CLAUDE.md and README directory
   trees, component lists, and roadmaps updated to match reality.

## Architectural constraint to keep in mind

The site is a **static export** (`output: "export"`) — there is no server at
runtime on GitHub Pages. Anything dynamic has to be a third-party service called
from the browser, or it has to happen at build time. This is why content lives in
files that ship with the build rather than behind an API.

---

## Phase 1 — Housekeeping ✅ (completed 2026-08-11)

- [x] Resolved morocco-26: trip over, pages removed and committed.
- [x] `npm audit fix` (no-op — remaining findings need Next 16, deferred),
      `npm run build` verified.
- [x] CLAUDE.md + README updated to match reality.
- [x] Stale events stopgap: skipped at the time; fixed in Phase 3 by moving events
      to `src/lib/events.ts`, where past ones expire on their own.

## Phase 2 — Content parity with ISCJ.org (the launch-blocking work)

**2a. Page inventory.** Walk the old site's nav (Webflow exposes no public
sitemap.xml) and build a checklist table in `content-audit.md`:
`old URL → new route → status (matched / content differs / missing / dropped on purpose)`.

Known gaps already found:
- `/hff` — Halal Food Fest page: **dropped on purpose** (event over, per 2026-08-11
  decision) — do not port; add a redirect at launch (Phase 5).
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

## Phase 3 — Content editing ✅ (completed 2026-09-03)

**Superseded plan:** this phase was going to be Supabase plus an `/admin`
dashboard with LLM flyer parsing. The dashboard was built against mock data,
reviewed, and then removed along with the whole database plan.

**Why it was dropped.** The site changes roughly fifty times a year and the
developer makes those changes. A database bought nothing that editing a file
does not already do, while adding an account someone has to keep alive, RLS to
get right, an API key to hold, and a runtime failure mode a static site
otherwise cannot have (Supabase down or paused means an empty events section).
The fallback cascade in the plan existed only to paper over that.

**What shipped instead.** Three content files, each documented in its own header
comment, edited and pushed like any other change:

- `src/lib/events.ts` — the `EVENTS` array. ISO dates; past events drop off on
  their own after mount.
- `src/lib/prayerSettings.ts` — `PRAYER_SETTINGS`, the iqamah and jumu'ah times.
  Adhan times still come from the Aladhan API at runtime.
- `src/lib/announcements.ts` — the alert banner, with `active` and
  `startsAt`/`endsAt` so a notice can be written ahead of time and appear on its
  own.

**If this ever needs to change**, the trigger is a non-technical volunteer
needing to publish without the developer. Reach for a git-based CMS (Decap,
Sveltia, Pages CMS) before a database: those give a form UI, commit to this repo,
and keep the site's zero-backend property. A step below that, GitHub's own web
editor already lets someone edit these files through a browser.

## Phase 4 — Cloudflare migration (last)

- Deploy the same static `out/` to Cloudflare Pages (or Workers static assets).
- Once on a custom domain, drop the `/ISCJ-Website-v2` basePath — it's
  centralized in `next.config.ts` + `assetPath()`, so it's a one-line env
  change, but grep for any stragglers.
- DNS cutover for iscj.org only after Phase 2 parity is confirmed; keep the
  Webflow site up until then (but rescue the files first — 2c).

## Phase 5 — Launch checklist

- [ ] Per-page `metadata` (titles/descriptions) for SEO.
- [ ] Old-site URL → new-site redirects (paths mostly match already; handle
      `/hff` and anything renamed) via Cloudflare redirect rules.
- [ ] Lighthouse + real-phone mobile pass.
- [ ] Analytics (Cloudflare Web Analytics is free and cookie-less).
- [ ] A one-page "how to post an event" doc covering the three content files in
      `src/lib/`, for whoever maintains the site next.

**Recommended order:** Phase 2 is what blocks retiring the old site, so it comes
next, then Phase 4/5. Phase 3 is done.
