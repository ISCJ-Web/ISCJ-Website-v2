/**
 * Upcoming events shown on the home page.
 *
 * ── To add an event, copy a block and edit it. ──
 *
 * Order does not matter; the list is sorted by date automatically. Events
 * disappear on their own the day after they happen, so old ones are safe to
 * leave here, though deleting them keeps this file readable.
 *
 *   date     "YYYY-MM-DD". Drives the month and day printed on the card.
 *   time     Free text, printed exactly as written: "6:30 PM", "After Maghrib".
 *   location Free text: "Main Hall".
 *   tag      The small pill on the navy header. Any text works; EVENT_TAGS
 *            below lists the ones already in use, purely for consistency.
 */

export type SiteEvent = {
  title: string;
  /** ISO calendar date, "2026-09-14". */
  date: string;
  time: string;
  location: string;
  tag: string;
};

export const EVENTS: SiteEvent[] = [
  {
    title: "Community Potluck Dinner",
    date: "2026-09-05",
    time: "6:30 PM",
    location: "Main Hall",
    tag: "Community",
  },
  {
    title: "Islamic Finance Workshop",
    date: "2026-09-13",
    time: "2:00 PM",
    location: "Conference Room",
    tag: "Education",
  },
  {
    title: "Youth Leadership Summit",
    date: "2026-09-20",
    time: "10:00 AM",
    location: "Community Center",
    tag: "Youth",
  },
];

/** Tags already in use. Not a restriction, just a reference while editing. */
export const EVENT_TAGS = ["Community", "Education", "Youth", "Religious", "Family"];

/**
 * Parsed at local noon rather than as a bare date string: `new Date("2026-09-14")`
 * is UTC midnight, which is the evening of the 13th in New Jersey and would show
 * the wrong day on the card.
 */
export function parseEventDate(isoDate: string): Date {
  return new Date(`${isoDate}T12:00:00`);
}

/** "2026-09-14" -> { month: "Sep", day: "14" }, the two halves of the date block. */
export function eventDisplayParts(isoDate: string): { month: string; day: string } {
  const d = parseEventDate(isoDate);
  if (Number.isNaN(d.getTime())) return { month: "", day: "" };
  return {
    month: new Intl.DateTimeFormat("en-US", { month: "short" }).format(d),
    day: String(d.getDate()).padStart(2, "0"),
  };
}

/** Today as an ISO calendar date in the visitor's own timezone. */
export function todayIso(now: Date = new Date()): string {
  const offset = now.getTimezoneOffset() * 60_000;
  return new Date(now.getTime() - offset).toISOString().slice(0, 10);
}

export function sortEvents(events: SiteEvent[]): SiteEvent[] {
  return [...events].sort((a, b) => a.date.localeCompare(b.date));
}

/** Events stay listed through the whole of their own day, then drop off. */
export function upcomingOnly(events: SiteEvent[], now: Date = new Date()): SiteEvent[] {
  const today = todayIso(now);
  return events.filter((e) => e.date >= today);
}
