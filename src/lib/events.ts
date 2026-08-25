/**
 * Event data shape and the display helpers that turn a stored row into the
 * strings the card renders.
 *
 * The row shape mirrors the Supabase `events` table one field per column, so the
 * admin dashboard and the home page agree on what an event is before the
 * database exists.
 */

export type DbEvent = {
  id: string;
  title: string;
  /** ISO calendar date, "2026-09-14". The source of truth for month and day. */
  event_date: string;
  /** Display string exactly as it should read on the card, e.g. "6:30 PM". */
  time_label: string;
  location: string;
  tag: string;
  published: boolean;
  sort_order: number;
};

export const EVENT_TAGS = ["Community", "Education", "Youth", "Religious", "Family"];

/**
 * Parsed at local noon rather than as a bare date string: `new Date("2026-09-14")`
 * is UTC midnight, which is the evening of the 13th in New Jersey and would show
 * the wrong day on the card.
 */
export function parseEventDate(isoDate: string): Date {
  return new Date(`${isoDate}T12:00:00`);
}

export function eventDisplayParts(isoDate: string): { month: string; day: string } {
  const d = parseEventDate(isoDate);
  if (Number.isNaN(d.getTime())) return { month: "", day: "" };
  return {
    month: new Intl.DateTimeFormat("en-US", { month: "short" }).format(d),
    day: String(d.getDate()).padStart(2, "0"),
  };
}

/** Today's date as an ISO calendar date in the visitor's own timezone. */
export function todayIso(now: Date = new Date()): string {
  const offset = now.getTimezoneOffset() * 60_000;
  return new Date(now.getTime() - offset).toISOString().slice(0, 10);
}

/** Events stay listed through the whole of their own day, then drop off. */
export function upcomingOnly(events: DbEvent[], now: Date = new Date()): DbEvent[] {
  const today = todayIso(now);
  return events.filter((e) => e.event_date >= today);
}

export function sortEvents(events: DbEvent[]): DbEvent[] {
  return [...events].sort(
    (a, b) => a.event_date.localeCompare(b.event_date) || a.sort_order - b.sort_order,
  );
}
