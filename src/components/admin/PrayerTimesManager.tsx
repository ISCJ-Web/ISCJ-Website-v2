"use client";

import { useEffect, useState } from "react";
import { getPrayerSettings, savePrayerSettings } from "@/lib/adminData";
import {
  IQAMAH_PRAYERS,
  iqamaLabel,
  type PrayerSettings,
} from "@/lib/prayerSettings";
import {
  Field,
  PreviewFrame,
  SaveStatus,
  TextInput,
  ui,
  type SaveState,
} from "@/components/admin/adminUi";

/** Placeholder adhan times: the real ones come from the Aladhan API at runtime. */
const SAMPLE_ADHAN: Record<string, string> = {
  Fajr: "5:12 AM",
  Dhuhr: "1:04 PM",
  Asr: "4:41 PM",
  Maghrib: "7:52 PM",
  Isha: "9:18 PM",
};

export default function PrayerTimesManager() {
  const [settings, setSettings] = useState<PrayerSettings | null>(null);
  const [save, setSave] = useState<SaveState>("idle");

  useEffect(() => {
    getPrayerSettings().then(setSettings);
  }, []);

  function setIqamah(prayer: string, value: string) {
    setSettings((s) => (s ? { ...s, iqamah: { ...s.iqamah, [prayer]: value } } : s));
    setSave("idle");
  }

  function setJumuah(i: number, value: string) {
    setSettings((s) => {
      if (!s) return s;
      const jumuah = [...s.jumuah];
      jumuah[i] = value;
      return { ...s, jumuah };
    });
    setSave("idle");
  }

  async function onSave() {
    if (!settings) return;
    setSave("saving");
    const saved = await savePrayerSettings(settings);
    setSettings(saved);
    setSave("saved");
  }

  if (!settings) return <p style={ui.hint}>Loading…</p>;

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 400px", gap: 32, alignItems: "start" }}
      className="max-sm:!grid-cols-1"
    >
      <div style={ui.card}>
        <h2 style={{ ...ui.sectionHeading, marginBottom: 6 }}>Iqamah times</h2>
        <p style={{ ...ui.hint, marginTop: 0, marginBottom: 24 }}>
          Adhan times come from the prayer-time calculation automatically. These are the
          iqamah times printed underneath them, and they only change when you change them
          here. Sunrise has no iqamah, so it is not listed.
        </p>

        <button
          type="button"
          disabled
          style={{
            ...ui.ghostButton,
            width: "100%",
            marginBottom: 24,
            opacity: 0.5,
            cursor: "not-allowed",
            borderStyle: "dashed",
          }}
        >
          Upload monthly schedule to autofill
        </button>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          {IQAMAH_PRAYERS.map((p) => (
            <Field key={p} label={p}>
              <TextInput
                value={settings.iqamah[p] ?? ""}
                onChange={(v) => setIqamah(p, v)}
                placeholder="5:30 AM"
              />
            </Field>
          ))}
        </div>

        <h2 style={{ ...ui.sectionHeading, marginTop: 20, marginBottom: 6 }}>Jumu&apos;ah</h2>
        <p style={{ ...ui.hint, marginTop: 0, marginBottom: 18 }}>
          Listed in order. Leave one blank to remove it.
        </p>

        {settings.jumuah.map((t, i) => (
          <Field key={i} label={`Khutbah ${i + 1}`}>
            <TextInput value={t} onChange={(v) => setJumuah(i, v)} placeholder="1:10 PM" />
          </Field>
        ))}

        <button
          type="button"
          onClick={() => setSettings({ ...settings, jumuah: [...settings.jumuah, ""] })}
          style={{ ...ui.smallButton, marginBottom: 24 }}
        >
          Add another khutbah
        </button>

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <button type="button" onClick={onSave} style={ui.primaryButton}>
            Publish times
          </button>
          <SaveStatus state={save} />
        </div>
      </div>

      {/* ------------------------------------------------------- preview */}
      <div style={{ position: "sticky", top: 140 }}>
        <PreviewFrame
          label="Prayer strip preview"
          background="var(--navy-deep)"
          note="Adhan times here are samples — on the site they are calculated for today. The iqamah lines are exactly what visitors will read."
        >
          <div style={{ display: "flex", gap: 8, justifyContent: "space-between" }}>
            {IQAMAH_PRAYERS.map((p) => (
              <div
                key={p}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "10px 2px",
                  flex: 1,
                  minWidth: 0,
                }}
              >
                <span
                  style={{
                    fontSize: "0.58rem",
                    fontWeight: 500,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.45)",
                    whiteSpace: "nowrap",
                  }}
                >
                  {p}
                </span>
                <span
                  style={{
                    fontFamily: "var(--ff-head)",
                    fontSize: "1rem",
                    color: "rgba(255,255,255,0.85)",
                    marginTop: 3,
                    whiteSpace: "nowrap",
                  }}
                >
                  {SAMPLE_ADHAN[p]}
                </span>
                <span
                  style={{
                    fontSize: "0.56rem",
                    color: "rgba(255,255,255,0.3)",
                    marginTop: 2,
                    whiteSpace: "nowrap",
                  }}
                >
                  {iqamaLabel(settings.iqamah[p] ?? "")}
                </span>
              </div>
            ))}
          </div>

          <div
            style={{
              borderTop: "1px solid rgba(255,255,255,0.08)",
              marginTop: 12,
              paddingTop: 12,
              display: "flex",
              gap: 14,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <span
              style={{
                fontSize: "0.6rem",
                fontWeight: 500,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--gold)",
              }}
            >
              Jumu&apos;ah
            </span>
            {settings.jumuah
              .filter((t) => t.trim())
              .map((t, i) => (
                <span
                  key={i}
                  style={{ fontFamily: "var(--ff-head)", fontSize: "0.95rem", color: "rgba(255,255,255,0.85)" }}
                >
                  {t}
                </span>
              ))}
          </div>
        </PreviewFrame>
      </div>
    </div>
  );
}
