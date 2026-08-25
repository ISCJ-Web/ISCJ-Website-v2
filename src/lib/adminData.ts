/**
 * The admin dashboard's data layer.
 *
 * Everything is async and returns plain rows, so the mock store below can be
 * swapped for Supabase queries without any of the managers changing. Flip
 * MOCK to false once `src/lib/supabase.ts` and the tables exist.
 *
 * The mock store lives in module scope: edits survive tab switches but not a
 * page reload, which is what you want while judging the layout.
 */

import type { DbEvent } from "@/lib/events";
import { sortEvents } from "@/lib/events";
import type { PrayerSettings } from "@/lib/prayerSettings";
import { FALLBACK_PRAYER_SETTINGS } from "@/lib/prayerSettings";
import type { Announcement } from "@/lib/announcements";
import { ANNOUNCEMENTS } from "@/lib/announcements";

export const MOCK = true;

/** Stand-in for the database's default; real rows get their id from Postgres. */
function newId(): string {
  return globalThis.crypto?.randomUUID?.() ?? `tmp-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

/** Pretend network latency, so loading states are actually visible in review. */
function settle<T>(value: T, ms = 180): Promise<T> {
  return new Promise((resolve) => setTimeout(() => resolve(value), ms));
}

/* ------------------------------------------------------------------ events */

let mockEvents: DbEvent[] = [
  {
    id: "seed-potluck",
    title: "Community Potluck Dinner",
    event_date: "2026-09-05",
    time_label: "6:30 PM",
    location: "Main Hall",
    tag: "Community",
    published: true,
    sort_order: 0,
  },
  {
    id: "seed-finance",
    title: "Islamic Finance Workshop",
    event_date: "2026-09-13",
    time_label: "2:00 PM",
    location: "Conference Room",
    tag: "Education",
    published: true,
    sort_order: 0,
  },
  {
    id: "seed-youth",
    title: "Youth Leadership Summit",
    event_date: "2026-09-20",
    time_label: "10:00 AM",
    location: "Community Center",
    tag: "Youth",
    published: false,
    sort_order: 0,
  },
];

export function emptyEvent(): DbEvent {
  return {
    id: "",
    title: "",
    event_date: "",
    time_label: "",
    location: "",
    tag: "Community",
    published: false,
    sort_order: 0,
  };
}

export async function listEvents(): Promise<DbEvent[]> {
  return settle(sortEvents(mockEvents));
}

export async function saveEvent(event: DbEvent): Promise<DbEvent> {
  const row: DbEvent = { ...event, id: event.id || newId() };
  const at = mockEvents.findIndex((e) => e.id === row.id);
  if (at >= 0) mockEvents[at] = row;
  else mockEvents = [...mockEvents, row];
  return settle(row);
}

export async function deleteEvent(id: string): Promise<void> {
  mockEvents = mockEvents.filter((e) => e.id !== id);
  return settle(undefined);
}

/* ---------------------------------------------------------- prayer settings */

let mockPrayerSettings: PrayerSettings = {
  iqamah: { ...FALLBACK_PRAYER_SETTINGS.iqamah },
  jumuah: [...FALLBACK_PRAYER_SETTINGS.jumuah],
};

export async function getPrayerSettings(): Promise<PrayerSettings> {
  return settle({
    iqamah: { ...mockPrayerSettings.iqamah },
    jumuah: [...mockPrayerSettings.jumuah],
  });
}

export async function savePrayerSettings(settings: PrayerSettings): Promise<PrayerSettings> {
  mockPrayerSettings = {
    iqamah: { ...settings.iqamah },
    jumuah: settings.jumuah.filter((t) => t.trim()),
  };
  return settle(mockPrayerSettings);
}

/* ----------------------------------------------------------- announcements */

export type AdminAnnouncement = Announcement & { sortOrder: number };

let mockAnnouncements: AdminAnnouncement[] = ANNOUNCEMENTS.map((a, i) => ({
  ...a,
  active: a.active ?? true,
  sortOrder: i,
}));

export function emptyAnnouncement(): AdminAnnouncement {
  return {
    id: "",
    label: "",
    text: "",
    href: "",
    linkLabel: "",
    active: true,
    startsAt: "",
    endsAt: "",
    sortOrder: 0,
  };
}

export async function listAnnouncements(): Promise<AdminAnnouncement[]> {
  return settle([...mockAnnouncements].sort((a, b) => a.sortOrder - b.sortOrder));
}

export async function saveAnnouncement(item: AdminAnnouncement): Promise<AdminAnnouncement> {
  const row: AdminAnnouncement = { ...item, id: item.id || newId() };
  const at = mockAnnouncements.findIndex((a) => a.id === row.id);
  if (at >= 0) {
    mockAnnouncements[at] = row;
  } else {
    row.sortOrder = mockAnnouncements.length;
    mockAnnouncements = [...mockAnnouncements, row];
  }
  return settle(row);
}

export async function deleteAnnouncement(id: string): Promise<void> {
  mockAnnouncements = mockAnnouncements.filter((a) => a.id !== id);
  return settle(undefined);
}

/** Moves one row up or down and renumbers, so sortOrder stays 0..n-1. */
export async function moveAnnouncement(id: string, direction: -1 | 1): Promise<AdminAnnouncement[]> {
  const ordered = [...mockAnnouncements].sort((a, b) => a.sortOrder - b.sortOrder);
  const from = ordered.findIndex((a) => a.id === id);
  const to = from + direction;
  if (from < 0 || to < 0 || to >= ordered.length) return settle(ordered, 0);

  [ordered[from], ordered[to]] = [ordered[to], ordered[from]];
  mockAnnouncements = ordered.map((a, i) => ({ ...a, sortOrder: i }));
  return settle(mockAnnouncements, 0);
}
