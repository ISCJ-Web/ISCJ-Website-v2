/**
 * Site-wide alert banner content.
 *
 * ── To change what the banner says, edit the array below. ──
 *
 * The banner cycles through every entry that is currently visible, in the order
 * written here, so put the most urgent message first. One entry is the normal
 * case; with only one the rotation and its dots switch themselves off.
 *
 *   id        Any short unique string. Only used as the animation key.
 *   label     The gold pill on the left, e.g. "Closure". Two words max.
 *   text      The message. Keep it to roughly 90 characters, about one line.
 *   href      Optional. Where the message links; defaults to the home page.
 *   linkLabel Optional. The wording of the link; defaults to "Read more".
 *   active    Optional. Set false to switch an entry off without deleting it.
 *   startsAt  Optional ISO date. The entry stays hidden until this instant.
 *   endsAt    Optional ISO date. The entry hides itself after this instant.
 *
 * startsAt and endsAt are the reason to write an announcement ahead of time:
 * a Ramadan notice can sit here for weeks and appear on its own. Entries are
 * filtered in the browser, not at build time, so a scheduled message turns over
 * without anyone redeploying the site.
 *
 * Dismissing the banner is deliberately session-only, see AlertBanner.tsx.
 */

export type Announcement = {
  /** Stable identifier. Doubles as the animation key. */
  id: string;
  /** Small gold tag on the left, e.g. "Closure". Two words max. */
  label: string;
  /** Keep to roughly one line, about 90 characters. */
  text: string;
  /** Where the message links. Defaults to the home page. */
  href?: string;
  linkLabel?: string;
  /** Off switch. Anything but an explicit `false` counts as on. */
  active?: boolean;
  /** ISO 8601. Before this instant the message is not shown. */
  startsAt?: string;
  /** ISO 8601. After this instant the message is not shown. */
  endsAt?: string;
};

/* Nothing to announce right now, so every entry below is switched off and the
   banner renders nothing. To bring it back, delete `active: false` from an
   entry (or add a new one) and the strip reappears on its own. */
export const ANNOUNCEMENTS: Announcement[] = [
  {
    id: "snow-closure-2026-02",
    label: "Closure",
    text: "Snow day. The masjid is closed today and all classes and programs are cancelled.",
    href: "/about/contact",
    linkLabel: "Contact us",
    active: false,
  },
  {
    id: "ramadan-2026",
    label: "Ramadan",
    text: "Taraweeh begins nightly after Isha, with iftar served in the community hall.",
    href: "/#prayer-times",
    linkLabel: "Prayer times",
    active: false,
  },
  {
    id: "zakat-drive-2026",
    label: "Give",
    text: "Your sadaqah keeps the masjid, the food pantry, and the weekend school running.",
    href: "/donate",
    linkLabel: "Donate",
    active: false,
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
