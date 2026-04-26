import type { PrayerTime } from "@/types";

const PRAYER_TIMES: PrayerTime[] = [
  { name: "Fajr",     time: "5:12 AM",  iqama: "Iqama 5:30" },
  { name: "Sunrise",  time: "6:41 AM",  iqama: " " },
  { name: "Dhuhr",    time: "1:10 PM",  iqama: "Iqama 1:30",  active: true },
  { name: "Asr",      time: "4:50 PM",  iqama: "Iqama 5:10" },
  { name: "Maghrib",  time: "7:58 PM",  iqama: "Iqama 8:05" },
  { name: "Isha",     time: "9:24 PM",  iqama: "Iqama 9:45" },
  { name: "Jumu’ah", time: "1:30 PM", iqama: "Fridays" },
];

export default function PrayerTimesSection() {
  return (
    <div
      id="prayer-times"
      style={{
        background: "var(--navy-deep)",
        padding: "0 48px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
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
        {PRAYER_TIMES.map((p) => (
          <div
            key={p.name}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "14px 20px",
              borderRight: "1px solid rgba(255,255,255,0.06)",
              flex: 1,
              minWidth: 80,
              background: p.active ? "rgba(255,255,255,0.04)" : "transparent",
            }}
          >
            <span
              style={{
                fontSize: "0.65rem",
                fontWeight: 500,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: p.active ? "var(--gold)" : "rgba(255,255,255,0.45)",
                marginBottom: 4,
              }}
            >
              {p.name}
            </span>
            <span
              style={{
                fontFamily: "var(--ff-head)",
                fontSize: "clamp(0.85rem, 1.2vw, 1.1rem)",
                fontWeight: 400,
                color: p.active ? "var(--white)" : "rgba(255,255,255,0.85)",
                whiteSpace: "nowrap",
              }}
            >
              {p.time}
            </span>
            {p.iqama && (
              <span style={{ fontSize: "0.6rem", color: "rgba(255,255,255,0.3)", marginTop: 2 }}>
                {p.iqama}
              </span>
            )}
          </div>
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
        Saturday, April 25 · 27 Shawwal 1446
      </div>
    </div>
  );
}
