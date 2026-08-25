/**
 * Iqamah and jumu'ah times — the half of the prayer strip the masjid sets by
 * hand. Adhan times keep coming from the Aladhan API; these sit underneath them
 * and are whatever the admin last published.
 *
 * Stored as plain display strings with an AM/PM suffix ("5:30 AM"). The strip
 * renders them through iqamaLabel(), which is what drops the suffix and adds the
 * word "Iqama".
 */

export const IQAMAH_PRAYERS = ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"] as const;

export type IqamahPrayer = (typeof IQAMAH_PRAYERS)[number];

export type PrayerSettings = {
  /** Keyed by prayer name. Sunrise has no iqamah and is absent by design. */
  iqamah: Record<string, string>;
  jumuah: string[];
};

/** What the strip showed before the database existed; also the offline fallback. */
export const FALLBACK_PRAYER_SETTINGS: PrayerSettings = {
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
