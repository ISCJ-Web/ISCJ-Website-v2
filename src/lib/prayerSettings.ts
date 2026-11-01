/**
 * Iqamah and jumu'ah times — the half of the prayer strip the masjid sets by
 * hand. Adhan times come from the Aladhan API and change on their own; these
 * sit underneath them and only change when someone edits this file.
 *
 * ── To update the iqamah times, add a period below. ──
 *
 * Copy the monthly flyer in as one period per block of dates. Each period runs
 * from its `from` date until the next period starts, so a flyer with "1st-15th"
 * and "16th-30th" becomes two periods, and the switch on the 16th happens on its
 * own. Old periods are safe to leave; deleting them keeps the file readable.
 *
 *   from     "YYYY-MM-DD". The first day these times apply.
 *   iqamah   One time per prayer. Plain clock times with AM or PM: "5:30 AM".
 *            The strip renders them through iqamaLabel(), which drops the
 *            suffix and prints "Iqama 5:30". Any other text ("On Time") is
 *            printed as written. An empty string hides that prayer's line.
 *   sunday   Optional. Times that differ on Sundays, e.g. { Dhuhr: "1:10 PM" }.
 *
 * Sunrise has no iqamah and is deliberately absent.
 */

export const IQAMAH_PRAYERS = ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"] as const;

export type IqamahPrayer = (typeof IQAMAH_PRAYERS)[number];

export type IqamahPeriod = {
  /** ISO calendar date, "2026-11-01". */
  from: string;
  /** Keyed by prayer name, as spelled in IQAMAH_PRAYERS. */
  iqamah: Record<string, string>;
  /** Sunday overrides, same keys as `iqamah`. */
  sunday?: Record<string, string>;
};

export type PrayerSettings = {
  /** Order does not matter; sorted by `from` when read. */
  periods: IqamahPeriod[];
  /** Jumu'ah khutbah times, in order. Add or remove entries freely. */
  jumuah: string[];
};

export const PRAYER_SETTINGS: PrayerSettings = {
  periods: [
    {
      from: "2026-11-01",
      iqamah: {
        Fajr: "5:45 AM",
        Dhuhr: "12:30 PM",
        Asr: "2:45 PM",
        Maghrib: "On Time",
        Isha: "8:00 PM",
      },
      sunday: { Dhuhr: "1:10 PM" },
    },
    {
      from: "2026-11-16",
      iqamah: {
        Fajr: "6:00 AM",
        Dhuhr: "12:30 PM",
        Asr: "2:45 PM",
        Maghrib: "On Time",
        Isha: "8:00 PM",
      },
      sunday: { Dhuhr: "1:10 PM" },
    },
  ],
  jumuah: ["12:00 PM", "1:10 PM"],
};

/**
 * The iqamah times in force on a given day: the latest period that has started,
 * with its Sunday overrides applied. Before the first period starts nothing is
 * returned and the iqamah lines hide: a new month's times can be an hour off
 * the day before (November's start the day daylight saving ends).
 */
export function iqamahFor(date: Date, settings: PrayerSettings = PRAYER_SETTINGS): Record<string, string> {
  const periods = [...settings.periods].sort((a, b) => a.from.localeCompare(b.from));
  const offset = date.getTimezoneOffset() * 60_000;
  const today = new Date(date.getTime() - offset).toISOString().slice(0, 10);
  const current = periods.filter((p) => p.from <= today).pop();
  if (!current) return {};
  return date.getDay() === 0 ? { ...current.iqamah, ...current.sunday } : current.iqamah;
}

/** "5:30 AM" -> "Iqama 5:30". Empty stays empty so the line is not rendered. */
export function iqamaLabel(value: string): string {
  const trimmed = value.trim();
  if (!trimmed) return "";
  return `Iqama ${trimmed.replace(/\s*(AM|PM)$/i, "")}`;
}
