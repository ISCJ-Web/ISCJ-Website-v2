"use client";

import { useEffect, useState } from "react";
import EventCardView from "@/components/events/EventCardView";
import {
  deleteEvent,
  emptyEvent,
  listEvents,
  saveEvent,
} from "@/lib/adminData";
import {
  EVENT_TAGS,
  eventDisplayParts,
  todayIso,
  type DbEvent,
} from "@/lib/events";
import {
  Field,
  PreviewFrame,
  SaveStatus,
  Select,
  TextInput,
  Toggle,
  ui,
  type SaveState,
} from "@/components/admin/adminUi";

export default function EventsManager() {
  const [events, setEvents] = useState<DbEvent[] | null>(null);
  const [draft, setDraft] = useState<DbEvent>(emptyEvent);
  const [save, setSave] = useState<SaveState>("idle");

  useEffect(() => {
    listEvents().then(setEvents);
  }, []);

  const editing = Boolean(draft.id);
  const parts = eventDisplayParts(draft.event_date);

  function set<K extends keyof DbEvent>(key: K, value: DbEvent[K]) {
    setDraft((d) => ({ ...d, [key]: value }));
    setSave("idle");
  }

  async function onSave() {
    if (!draft.title.trim() || !draft.event_date) {
      setSave("error");
      return;
    }
    setSave("saving");
    await saveEvent(draft);
    setEvents(await listEvents());
    setDraft(emptyEvent());
    setSave("saved");
  }

  async function onDelete(ev: DbEvent) {
    if (!confirm(`Delete "${ev.title}"? This cannot be undone.`)) return;
    await deleteEvent(ev.id);
    setEvents(await listEvents());
    if (draft.id === ev.id) setDraft(emptyEvent());
  }

  async function togglePublished(ev: DbEvent) {
    await saveEvent({ ...ev, published: !ev.published });
    setEvents(await listEvents());
  }

  const today = todayIso();

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 400px", gap: 32, alignItems: "start" }}
      className="max-sm:!grid-cols-1"
    >
      {/* ------------------------------------------------ editor + list */}
      <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
        <div style={ui.card}>
          <h2 style={{ ...ui.sectionHeading, marginBottom: 6 }}>
            {editing ? "Edit event" : "New event"}
          </h2>
          <p style={{ ...ui.hint, marginTop: 0, marginBottom: 24 }}>
            Upload the flyer to fill these in automatically, then correct anything the
            reader got wrong before publishing.
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
            Upload flyer to autofill
          </button>

          <Field label="Event title">
            <TextInput
              value={draft.title}
              onChange={(v) => set("title", v)}
              placeholder="Community Potluck Dinner"
            />
          </Field>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <Field label="Date">
              <TextInput type="date" value={draft.event_date} onChange={(v) => set("event_date", v)} />
            </Field>
            <Field label="Time" hint="Shown exactly as typed.">
              <TextInput
                value={draft.time_label}
                onChange={(v) => set("time_label", v)}
                placeholder="6:30 PM"
              />
            </Field>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <Field label="Location">
              <TextInput
                value={draft.location}
                onChange={(v) => set("location", v)}
                placeholder="Main Hall"
              />
            </Field>
            <Field label="Category">
              <Select value={draft.tag} onChange={(v) => set("tag", v)} options={EVENT_TAGS} />
            </Field>
          </div>

          <div style={{ marginBottom: 24 }}>
            <Toggle
              checked={draft.published}
              onChange={(v) => set("published", v)}
              label="Published on the home page"
            />
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
            <button type="button" onClick={onSave} style={ui.primaryButton}>
              {editing ? "Save changes" : "Add event"}
            </button>
            {editing && (
              <button type="button" onClick={() => setDraft(emptyEvent())} style={ui.ghostButton}>
                Cancel
              </button>
            )}
            <SaveStatus state={save} error="Add a title and a date first" />
          </div>
        </div>

        {/* List */}
        <div style={ui.card}>
          <h2 style={{ ...ui.sectionHeading, marginBottom: 20 }}>All events</h2>

          {events === null && <p style={ui.hint}>Loading…</p>}
          {events?.length === 0 && <p style={ui.hint}>No events yet. Add the first one above.</p>}

          {events?.map((ev) => {
            const past = ev.event_date < today;
            return (
              <div
                key={ev.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  padding: "16px 0",
                  borderTop: "1px solid var(--border)",
                  flexWrap: "wrap",
                }}
              >
                <div style={{ minWidth: 62 }}>
                  <div
                    style={{
                      fontSize: "0.6rem",
                      fontWeight: 500,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "var(--gold)",
                    }}
                  >
                    {eventDisplayParts(ev.event_date).month}
                  </div>
                  <div style={{ fontFamily: "var(--ff-head)", fontSize: "1.5rem", color: "var(--navy)", lineHeight: 1 }}>
                    {eventDisplayParts(ev.event_date).day}
                  </div>
                </div>

                <div style={{ flex: "1 1 200px", minWidth: 0 }}>
                  <div style={{ fontSize: "0.92rem", fontWeight: 400, color: "var(--navy)" }}>{ev.title}</div>
                  <div style={{ fontSize: "0.75rem", fontWeight: 300, color: "var(--muted)", marginTop: 3 }}>
                    {ev.tag}
                    {ev.time_label ? ` · ${ev.time_label}` : ""}
                    {ev.location ? ` · ${ev.location}` : ""}
                    {past ? " · past, hidden from the site" : ""}
                  </div>
                </div>

                <span
                  style={{
                    fontSize: "0.6rem",
                    fontWeight: 500,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    padding: "4px 10px",
                    borderRadius: 1,
                    color: ev.published ? "var(--navy)" : "var(--muted)",
                    background: ev.published ? "color-mix(in oklab, var(--gold) 28%, transparent)" : "var(--surface)",
                    border: "1px solid var(--border)",
                  }}
                >
                  {ev.published ? "Live" : "Draft"}
                </span>

                <div style={{ display: "flex", gap: 8 }}>
                  <button type="button" onClick={() => togglePublished(ev)} style={ui.smallButton}>
                    {ev.published ? "Unpublish" : "Publish"}
                  </button>
                  <button type="button" onClick={() => { setDraft(ev); setSave("idle"); }} style={ui.smallButton}>
                    Edit
                  </button>
                  <button
                    type="button"
                    onClick={() => onDelete(ev)}
                    style={{ ...ui.smallButton, color: "#b4472e" }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ------------------------------------------------------- preview */}
      <div style={{ position: "sticky", top: 140 }}>
        <PreviewFrame label="Card preview">
          <EventCardView
            animate={false}
            ev={{
              month: parts.month || "—",
              day: parts.day || "--",
              tag: draft.tag,
              title: draft.title || "Event title",
              time: draft.time_label || "Time",
              location: draft.location || "Location",
            }}
          />
        </PreviewFrame>
      </div>
    </div>
  );
}
