/**
 * Site-wide alert banner content.
 *
 * This module is the seam for the planned admin dashboard: today the rows live
 * in the array below, later they come from the Supabase `announcements` table.
 * Every field here is meant to map 1:1 to a column and to a control on an admin
 * form, so swapping the source should not touch the banner component at all:
 *
 *   id        text (primary key)   — stable; the admin form never edits it
 *   label     text                 — short tag shown in the gold pill
 *   text      text                 — the message itself
 *   href      text, nullable       — where the message links
 *   linkLabel text, nullable       — the call-to-action wording
 *   active    boolean, default true — the admin's on/off switch
 *   startsAt  timestamptz, nullable — publish from (admin date picker)
 *   endsAt    timestamptz, nullable — auto-expire at (admin date picker)
 *   sortOrder int                   — array order here; a column there
 *
 * Ordering is the array order, most urgent first. The banner cycles through
 * whatever `getVisibleAnnouncements()` returns.
 *
 * Dismissing the banner is deliberately session-only — see AlertBanner.tsx.
 */

export type Announcement = {
  /** Stable identifier. Doubles as the animation key. */
  id: string;
  /** Small gold tag on the left, e.g. "Closure". Two words max. */
  label: string;
  /** Keep to roughly one line, about 90 characters. */
  text: string;
  /** Where the message links. Defaults to the home page announcements list. */
  href?: string;
  linkLabel?: string;
  /** Off switch. Anything but an explicit `false` counts as on. */
  active?: boolean;
  /** ISO 8601. Before this instant the message is not shown. */
  startsAt?: string;
  /** ISO 8601. After this instant the message is not shown. */
  endsAt?: string;
};

export const ANNOUNCEMENTS: Announcement[] = [
  {
    id: "snow-closure-2026-02",
    label: "Closure",
    text: "Snow day. The masjid is closed today and all classes and programs are cancelled.",
    href: "/#announcements",
    linkLabel: "Details",
  },
  {
    id: "ramadan-2026",
    label: "Ramadan",
    text: "Taraweeh begins nightly after Isha, with iftar served in the community hall.",
    href: "/#events",
    linkLabel: "See schedule",
  },
  {
    id: "zakat-drive-2026",
    label: "Give",
    text: "Your sadaqah keeps the masjid, the food pantry, and the weekend school running.",
    href: "/donate",
    linkLabel: "Donate",
  },
];

/**
 * The announcements a visitor should see right now.
 *
 * The date window is evaluated in the visitor's browser rather than at build
 * time — this is a static export, so a build-time `new Date()` would freeze the
 * answer at deploy time and a scheduled announcement would never expire on its
 * own.
 */
export function getVisibleAnnouncements(
  now: number = Date.now(),
  source: Announcement[] = ANNOUNCEMENTS,
): Announcement[] {
  return source.filter((a) => {
    if (a.active === false) return false;
    if (a.startsAt && now < Date.parse(a.startsAt)) return false;
    if (a.endsAt && now > Date.parse(a.endsAt)) return false;
    return true;
  });
}
