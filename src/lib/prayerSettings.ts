/**
 * Iqamah and jumu'ah times — the half of the prayer strip the masjid sets by
 * hand. Adhan times come from the Aladhan API and change on their own; these
 * sit underneath them and only change when someone edits this file.
 *
 * ── To update the iqamah times, edit the values below. ──
 *
 * Write them as plain clock times with AM or PM: "5:30 AM". The strip renders
 * them through iqamaLabel(), which drops the suffix and prints "Iqama 5:30".
 * An empty string hides that prayer's iqamah line entirely.
 *
 * Sunrise has no iqamah and is deliberately absent.
 */

export const IQAMAH_PRAYERS = ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"] as const;

export type IqamahPrayer = (typeof IQAMAH_PRAYERS)[number];

export type PrayerSettings = {
  /** Keyed by prayer name, as spelled in IQAMAH_PRAYERS. */
  iqamah: Record<string, string>;
  /** Jumu'ah khutbah times, in order. Add or remove entries freely. */
  jumuah: string[];
};

export const PRAYER_SETTINGS: PrayerSettings = {
  iqamah: {
    Fajr: "5:30 AM",
    Dhuhr: "1:30 PM",
    Asr: "5:10 PM",
    Maghrib: "8:05 PM",
    Isha: "9:45 PM",
  },
  jumuah: ["12:00 PM", "1:10 PM", "3:15 PM"],
};

/** "5:30 AM" -> "Iqama 5:30". Empty stays empty so the line is not rendered. */
export function iqamaLabel(value: string): string {
  const trimmed = value.trim();
  if (!trimmed) return "";
  return `Iqama ${trimmed.replace(/\s*(AM|PM)$/i, "")}`;
}
