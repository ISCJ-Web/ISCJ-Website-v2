"use client";

import { useEffect, useRef, useState } from "react";
import type { PrayerTime } from "@/types";

// ISCJ — Monmouth Junction, NJ
const LAT = 40.3748;
const LNG = -74.5488;
const CACHE_KEY = "iscj_prayer_times";
const PRAYER_NAMES = ["Fajr", "Sunrise", "Dhuhr", "Asr", "Maghrib", "Isha"];

// Iqama times — update monthly as needed
const IQAMA_TIMES: Record<string, string> = {
  Fajr:    "Iqama 5:30",
  Sunrise: "",
  Dhuhr:   "Iqama 1:30",
  Asr:     "Iqama 5:10",
  Maghrib: "Iqama 8:05",
  Isha:    "Iqama 9:45",
};

// Fallback adhan times — update monthly if API is unavailable
const FALLBACK_TIMES: PrayerTime[] = [
  { name: "Fajr",    time: "5:12 AM" },
  { name: "Sunrise", time: "6:41 AM" },
  { name: "Dhuhr",   time: "1:10 PM" },
  { name: "Asr",     time: "4:50 PM" },
  { name: "Maghrib", time: "7:58 PM" },
  { name: "Isha",    time: "9:24 PM" },
];

const JUMUAH_TIMES = ["12:00 PM", "1:10 PM", "3:15 PM"];

function to12h(time24: string): string {
  const [h, m] = time24.split(":").map(Number);
  const period = h >= 12 ? "PM" : "AM";
  const h12 = h % 12 || 12;
  return `${h12}:${String(m).padStart(2, "0")} ${period}`;
}

function parseTimeToMinutes(timeStr: string): number {
  const parts = timeStr.trim().split(" ");
  const [h, m] = parts[0].split(":").map(Number);
  const period = parts[1];
  let hours = h;
  if (period === "PM" && h !== 12) hours += 12;
  if (period === "AM" && h === 12) hours = 0;
  return hours * 60 + m;
}

function computeActivePrayer(times: PrayerTime[], now: Date): string | null {
  const nowMinutes = now.getHours() * 60 + now.getMinutes();
  let active: string | null = null;
  for (const p of times) {
    if (p.name === "Sunrise") continue;
    if (nowMinutes >= parseTimeToMinutes(p.time)) {
      active = p.name;
    }
  }
  return active;
}

async function fetchFromAladhan(): Promise<PrayerTime[]> {
  const timestamp = Math.floor(Date.now() / 1000);
  const res = await fetch(
    `https://api.aladhan.com/v1/timings/${timestamp}?latitude=${LAT}&longitude=${LNG}&method=2`,
    { signal: AbortSignal.timeout(8000) }
  );
  if (!res.ok) throw new Error("Aladhan API error");
  const data = await res.json();
  const t = data.data.timings;
  return PRAYER_NAMES.map((name) => ({ name, time: to12h(t[name]) }));
}

function loadCached(): PrayerTime[] | null {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const { date, times } = JSON.parse(raw);
    if (date !== new Date().toDateString()) return null;
    return times;
  } catch {
    return null;
  }
}

function saveCache(times: PrayerTime[]): void {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify({ date: new Date().toDateString(), times }));
  } catch {}
}

function withIqama(times: PrayerTime[]): PrayerTime[] {
  return times.map((p) => ({ ...p, iqama: IQAMA_TIMES[p.name] ?? "" }));
}

function buildGregorianLabel(): string {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  }).format(new Date());
}

function buildHijriLabel(): string {
  const parts = new Intl.DateTimeFormat("en-US-u-ca-islamic-umalqura", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).formatToParts(new Date());
  const day   = parts.find((p) => p.type === "day")?.value   ?? "";
  const month = parts.find((p) => p.type === "month")?.value ?? "";
  const year  = (parts.find((p) => p.type === "year")?.value ?? "").replace(/\s*AH$/i, "");
  return `${day} ${month} ${year}`;
}

function PrayerCell({
  p,
  isActive,
  isLast,
}: {
  p: PrayerTime;
  isActive: boolean;
  isLast: boolean;
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "14px 16px",
        borderRight: isLast ? "none" : "1px solid rgba(255,255,255,0.06)",
        flex: 1,
        minWidth: 78,
        background: isActive ? "rgba(255,255,255,0.04)" : "transparent",
      }}
    >
      <span
        style={{
          fontSize: "0.65rem",
          fontWeight: 500,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: isActive ? "var(--gold)" : "rgba(255,255,255,0.45)",
          marginBottom: 4,
        }}
      >
        {p.name}
      </span>
      <span
        style={{
          fontFamily: "var(--ff-head)",
          fontSize: "clamp(0.9rem, 1.2vw, 1.1rem)",
          fontWeight: 400,
          color: isActive ? "var(--white)" : "rgba(255,255,255,0.85)",
          whiteSpace: "nowrap",
        }}
      >
        {p.time}
      </span>
      {p.iqama && p.iqama.trim() && (
        <span style={{ fontSize: "0.6rem", color: "rgba(255,255,255,0.3)", marginTop: 2 }}>
          {p.iqama}
        </span>
      )}
    </div>
  );
}

function JumuahStrip() {
  return (
    <div
      className="jumuah-strip"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: 18,
        padding: "10px 24px",
        background: "rgba(255,255,255,0.025)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <span
        style={{
          fontSize: "0.62rem",
          fontWeight: 500,
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: "var(--gold)",
          whiteSpace: "nowrap",
        }}
      >
        Jumu&apos;ah Khutbahs
      </span>

      <span
        aria-hidden
        className="jumuah-strip-sep"
        style={{ width: 1, height: 14, background: "rgba(255,255,255,0.18)" }}
      />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 14,
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {JUMUAH_TIMES.map((t, i) => (
          <span key={t} style={{ display: "inline-flex", alignItems: "center", gap: 14 }}>
            <span
              style={{
                fontFamily: "var(--ff-head)",
                fontSize: "1rem",
                fontWeight: 400,
                color: "rgba(255,255,255,0.9)",
                letterSpacing: "0.01em",
                whiteSpace: "nowrap",
              }}
            >
              {t}
            </span>
            {i < JUMUAH_TIMES.length - 1 && (
              <span
                aria-hidden
                style={{
                  width: 3,
                  height: 3,
                  borderRadius: "50%",
                  background: "var(--gold)",
                  opacity: 0.6,
                  display: "inline-block",
                }}
              />
            )}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function PrayerTimesSection() {
  const [times, setTimes] = useState<PrayerTime[]>(withIqama(FALLBACK_TIMES));
  const [now, setNow] = useState<Date>(new Date());
  const mobileScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cached = loadCached();
    if (cached) {
      setTimes(withIqama(cached));
    } else {
      fetchFromAladhan()
        .then((fetched) => {
          saveCache(fetched);
          setTimes(withIqama(fetched));
        })
        .catch(() => {/* fallback already set */});
    }

    const tick = setInterval(() => setNow(new Date()), 60_000);
    return () => clearInterval(tick);
  }, []);

  const activePrayer = computeActivePrayer(times, now);

  // Centre the active prayer cell horizontally within its scroll container.
  // Uses scrollLeft directly so the page's vertical position is never touched.
  useEffect(() => {
    const container = mobileScrollRef.current;
    if (!container || !activePrayer) return;
    const activeIndex = times.findIndex((p) => p.name === activePrayer);
    if (activeIndex < 0) return;
    const cell = container.children[activeIndex] as HTMLElement | undefined;
    if (!cell) return;
    container.scrollLeft = Math.max(
      0,
      cell.offsetLeft - container.clientWidth / 2 + cell.clientWidth / 2
    );
  }, [times, activePrayer]);

  const gregorian = buildGregorianLabel();
  const hijri = buildHijriLabel();

  return (
    <div
      id="prayer-times"
      style={{
        background: "var(--navy-deep)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      {/* Desktop layout */}
      <div
        className="desktop-only"
        style={{
          padding: "0 48px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          overflowX: "auto",
        }}
      >
        <div
          style={{
            fontSize: "0.7rem",
            fontWeight: 500,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "var(--gold)",
            padding: "18px 0",
            paddingRight: 32,
            borderRight: "1px solid rgba(255,255,255,0.1)",
            marginRight: 28,
            whiteSpace: "nowrap",
          }}
        >
          Prayer Times
        </div>

        <div style={{ display: "flex", flex: 1 }}>
          {times.map((p, i) => (
            <PrayerCell
              key={p.name}
              p={p}
              isActive={p.name === activePrayer}
              isLast={i === times.length - 1}
            />
          ))}
        </div>

        <div
          style={{
            fontSize: "0.72rem",
            color: "rgba(255,255,255,0.4)",
            paddingLeft: 24,
            whiteSpace: "nowrap",
          }}
        >
          {gregorian} · {hijri}
        </div>
      </div>

      {/* Mobile layout */}
      <div className="prayer-mobile">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 12,
            padding: "12px 20px",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <span
            style={{
              fontSize: "0.62rem",
              fontWeight: 500,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--gold)",
              whiteSpace: "nowrap",
            }}
          >
            Prayer Times
          </span>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.5 }}>
              {gregorian}
            </div>
            <div style={{ fontSize: "0.6rem", color: "rgba(255,255,255,0.3)", lineHeight: 1.4 }}>
              {hijri}
            </div>
          </div>
        </div>

        <div
          ref={mobileScrollRef}
          style={{
            display: "flex",
            overflowX: "auto",
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
          }}
        >
          {times.map((p, i) => (
            <PrayerCell
              key={p.name}
              p={p}
              isActive={p.name === activePrayer}
              isLast={i === times.length - 1}
            />
          ))}
        </div>
      </div>

      {/* Mobile grid layout — alternative to the scrolling row above.
          To switch: set prayer-mobile { display:none } and prayer-mobile-grid { display:block } in globals.css */}
      <div className="prayer-mobile-grid">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 12,
            padding: "12px 20px",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <span
            style={{
              fontSize: "0.62rem",
              fontWeight: 500,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--gold)",
              whiteSpace: "nowrap",
            }}
          >
            Prayer Times
          </span>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.5 }}>
              {gregorian}
            </div>
            <div style={{ fontSize: "0.6rem", color: "rgba(255,255,255,0.3)", lineHeight: 1.4 }}>
              {hijri}
            </div>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1px",
            background: "rgba(255,255,255,0.06)",
          }}
        >
          {times.map((p) => {
            const isActive = p.name === activePrayer;
            return (
              <div
                key={p.name}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "14px 8px",
                  background: isActive ? "rgba(255,255,255,0.06)" : "var(--navy-deep)",
                }}
              >
                <span
                  style={{
                    fontSize: "0.6rem",
                    fontWeight: 500,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: isActive ? "var(--gold)" : "rgba(255,255,255,0.4)",
                    marginBottom: 4,
                  }}
                >
                  {p.name}
                </span>
                <span
                  style={{
                    fontFamily: "var(--ff-head)",
                    fontSize: "1rem",
                    fontWeight: 400,
                    color: isActive ? "var(--white)" : "rgba(255,255,255,0.85)",
                    whiteSpace: "nowrap",
                  }}
                >
                  {p.time}
                </span>
                {p.iqama && p.iqama.trim() && (
                  <span
                    style={{
                      fontSize: "0.58rem",
                      color: "rgba(255,255,255,0.28)",
                      marginTop: 3,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {p.iqama}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <JumuahStrip />
    </div>
  );
}
