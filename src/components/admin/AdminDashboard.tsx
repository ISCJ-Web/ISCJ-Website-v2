"use client";

import { useState } from "react";
import { MOCK } from "@/lib/adminData";
import EventsManager from "@/components/admin/EventsManager";
import PrayerTimesManager from "@/components/admin/PrayerTimesManager";
import AlertsManager from "@/components/admin/AlertsManager";
import { ui } from "@/components/admin/adminUi";

const TABS = [
  { id: "events", label: "Events" },
  { id: "prayer", label: "Prayer Times" },
  { id: "alerts", label: "Alerts" },
] as const;

type TabId = (typeof TABS)[number]["id"];

export default function AdminDashboard() {
  const [tab, setTab] = useState<TabId>("events");

  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px 120px" }} className="max-sm:!px-6">
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 20,
          paddingBottom: 28,
        }}
      >
        <div>
          <span className="section-label">Administration</span>
          <h1
            style={{
              fontFamily: "var(--ff-head)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 400,
              color: "var(--navy)",
              lineHeight: 1.1,
            }}
          >
            Site <em style={{ fontStyle: "italic", fontWeight: 300 }}>Dashboard</em>
          </h1>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <span style={{ fontSize: "0.8rem", fontWeight: 300, color: "var(--muted)" }}>
            admin@iscj.org
          </span>
          <button type="button" disabled style={{ ...ui.smallButton, opacity: 0.45, cursor: "not-allowed" }}>
            Sign out
          </button>
        </div>
      </div>

      {MOCK && (
        <div
          style={{
            background: "var(--navy)",
            color: "rgba(255,255,255,0.85)",
            padding: "12px 20px",
            fontSize: "0.78rem",
            fontWeight: 300,
            letterSpacing: "0.02em",
            marginBottom: 28,
          }}
        >
          Preview mode. Nothing here is saved yet — edits live in the browser and reset on
          reload, and the public site is untouched.
        </div>
      )}

      {/* Tabs */}
      <div style={{ display: "flex", gap: 2, marginBottom: 32, flexWrap: "wrap" }}>
        {TABS.map((t) => {
          const active = t.id === tab;
          return (
            <button
              key={t.id}
              type="button"
              onClick={() => setTab(t.id)}
              style={{
                border: "none",
                cursor: "pointer",
                padding: "14px 28px",
                fontFamily: "var(--ff-body)",
                fontSize: "0.72rem",
                fontWeight: 500,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                background: active ? "var(--navy)" : "var(--white)",
                color: active ? "var(--white)" : "var(--muted)",
                borderBottom: active ? "2px solid var(--gold)" : "2px solid var(--border)",
                transition: "background 0.18s, color 0.18s",
              }}
            >
              {t.label}
            </button>
          );
        })}
      </div>

      {tab === "events" && <EventsManager />}
      {tab === "prayer" && <PrayerTimesManager />}
      {tab === "alerts" && <AlertsManager />}
    </div>
  );
}
