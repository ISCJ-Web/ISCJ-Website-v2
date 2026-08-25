"use client";

import { useEffect, useState } from "react";
import AlertBannerView from "@/components/layout/AlertBannerView";
import {
  deleteAnnouncement,
  emptyAnnouncement,
  listAnnouncements,
  moveAnnouncement,
  saveAnnouncement,
  type AdminAnnouncement,
} from "@/lib/adminData";
import { getVisibleAnnouncements } from "@/lib/announcements";
import {
  Field,
  PreviewFrame,
  SaveStatus,
  TextArea,
  TextInput,
  Toggle,
  ui,
  type SaveState,
} from "@/components/admin/adminUi";

const TEXT_LIMIT = 90;

/** timestamptz <-> the value a datetime-local input wants. Blank means unset. */
function toLocalInput(iso?: string): string {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  const offset = d.getTimezoneOffset() * 60_000;
  return new Date(d.getTime() - offset).toISOString().slice(0, 16);
}

function fromLocalInput(value: string): string | undefined {
  if (!value) return undefined;
  const d = new Date(value);
  return Number.isNaN(d.getTime()) ? undefined : d.toISOString();
}

/**
 * Blank optional fields become undefined, which is what a nullable column reads
 * back as. Without this the banner would render an empty call to action instead
 * of falling back to "Read more".
 */
function normalize(item: AdminAnnouncement): AdminAnnouncement {
  return {
    ...item,
    href: item.href?.trim() || undefined,
    linkLabel: item.linkLabel?.trim() || undefined,
    startsAt: item.startsAt || undefined,
    endsAt: item.endsAt || undefined,
  };
}

function statusOf(item: AdminAnnouncement, now = Date.now()): { text: string; live: boolean } {
  if (item.active === false) return { text: "Off", live: false };
  if (item.startsAt && now < Date.parse(item.startsAt)) return { text: "Scheduled", live: false };
  if (item.endsAt && now > Date.parse(item.endsAt)) return { text: "Expired", live: false };
  return { text: "Live now", live: true };
}

export default function AlertsManager() {
  const [items, setItems] = useState<AdminAnnouncement[] | null>(null);
  const [draft, setDraft] = useState<AdminAnnouncement>(emptyAnnouncement);
  const [save, setSave] = useState<SaveState>("idle");

  useEffect(() => {
    listAnnouncements().then(setItems);
  }, []);

  const editing = Boolean(draft.id);

  function set<K extends keyof AdminAnnouncement>(key: K, value: AdminAnnouncement[K]) {
    setDraft((d) => ({ ...d, [key]: value }));
    setSave("idle");
  }

  async function onSave() {
    if (!draft.label.trim() || !draft.text.trim()) {
      setSave("error");
      return;
    }
    setSave("saving");
    await saveAnnouncement(normalize(draft));
    setItems(await listAnnouncements());
    setDraft(emptyAnnouncement());
    setSave("saved");
  }

  async function onDelete(item: AdminAnnouncement) {
    if (!confirm(`Delete the "${item.label}" alert?`)) return;
    await deleteAnnouncement(item.id);
    setItems(await listAnnouncements());
    if (draft.id === item.id) setDraft(emptyAnnouncement());
  }

  async function onMove(item: AdminAnnouncement, direction: -1 | 1) {
    setItems(await moveAnnouncement(item.id, direction));
  }

  async function onToggleActive(item: AdminAnnouncement) {
    await saveAnnouncement({ ...item, active: item.active === false });
    setItems(await listAnnouncements());
  }

  /* The banner shows one message at a time and cycles. The preview shows the
     draft on its own, plus whatever is actually live, so the admin can see both
     the message and the rotation it is joining. */
  const previewDraft: AdminAnnouncement = {
    ...normalize(draft),
    id: draft.id || "preview",
    label: draft.label || "Label",
    text: draft.text || "Your announcement text will appear here.",
  };
  const liveNow = getVisibleAnnouncements(Date.now(), items ?? []);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
      {/* Preview sits on top: the banner is a full-width strip, so a sidebar
          would misrepresent it. */}
      <PreviewFrame label="Banner preview" background="var(--navy)">
        <AlertBannerView items={[previewDraft]} index={0} linkAs="span" />
      </PreviewFrame>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, alignItems: "start" }}
        className="max-sm:!grid-cols-1"
      >
        {/* ------------------------------------------------------ editor */}
        <div style={ui.card}>
          <h2 style={{ ...ui.sectionHeading, marginBottom: 6 }}>
            {editing ? "Edit alert" : "New alert"}
          </h2>
          <p style={{ ...ui.hint, marginTop: 0, marginBottom: 24 }}>
            The banner runs across the top of every page. Visitors can close it for their
            visit, and it comes back on their next one.
          </p>

          <Field label="Label" hint="The small gold tag. Two words at most.">
            <TextInput value={draft.label} onChange={(v) => set("label", v)} placeholder="Closure" maxLength={24} />
          </Field>

          <Field
            label="Message"
            hint={`${draft.text.length}/${TEXT_LIMIT} characters. Longer messages are cut off on desktop.`}
          >
            <TextArea
              value={draft.text}
              onChange={(v) => set("text", v)}
              placeholder="Snow day. The masjid is closed today and all classes are cancelled."
              maxLength={140}
            />
          </Field>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <Field label="Links to" hint="Defaults to the announcements list.">
              <TextInput value={draft.href ?? ""} onChange={(v) => set("href", v)} placeholder="/donate" />
            </Field>
            <Field label="Link wording" hint={`Defaults to "Read more".`}>
              <TextInput value={draft.linkLabel ?? ""} onChange={(v) => set("linkLabel", v)} placeholder="Details" />
            </Field>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <Field label="Show from" hint="Leave blank to show immediately.">
              <TextInput
                type="datetime-local"
                value={toLocalInput(draft.startsAt)}
                onChange={(v) => set("startsAt", fromLocalInput(v))}
              />
            </Field>
            <Field label="Hide after" hint="Leave blank to run until switched off.">
              <TextInput
                type="datetime-local"
                value={toLocalInput(draft.endsAt)}
                onChange={(v) => set("endsAt", fromLocalInput(v))}
              />
            </Field>
          </div>

          <div style={{ marginBottom: 24 }}>
            <Toggle
              checked={draft.active !== false}
              onChange={(v) => set("active", v)}
              label="Switched on"
            />
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
            <button type="button" onClick={onSave} style={ui.primaryButton}>
              {editing ? "Save changes" : "Add alert"}
            </button>
            {editing && (
              <button type="button" onClick={() => setDraft(emptyAnnouncement())} style={ui.ghostButton}>
                Cancel
              </button>
            )}
            <SaveStatus state={save} error="Add a label and a message first" />
          </div>
        </div>

        {/* -------------------------------------------------------- list */}
        <div style={ui.card}>
          <h2 style={{ ...ui.sectionHeading, marginBottom: 6 }}>All alerts</h2>
          <p style={{ ...ui.hint, marginTop: 0, marginBottom: 20 }}>
            {liveNow.length === 0
              ? "Nothing is showing on the site right now."
              : liveNow.length === 1
                ? "One alert is showing on the site."
                : `${liveNow.length} alerts are cycling on the site, in this order.`}
          </p>

          {items === null && <p style={ui.hint}>Loading…</p>}
          {items?.length === 0 && <p style={ui.hint}>No alerts yet.</p>}

          {items?.map((item, i) => {
            const status = statusOf(item);
            return (
              <div
                key={item.id}
                style={{
                  padding: "16px 0",
                  borderTop: "1px solid var(--border)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                  <span
                    style={{
                      fontSize: "0.58rem",
                      fontWeight: 500,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "var(--gold)",
                      border: "1px solid color-mix(in oklab, var(--gold) 38%, transparent)",
                      padding: "3px 8px",
                    }}
                  >
                    {item.label}
                  </span>
                  <span
                    style={{
                      fontSize: "0.68rem",
                      fontWeight: 300,
                      color: status.live ? "var(--navy)" : "var(--muted)",
                    }}
                  >
                    {status.text}
                  </span>
                </div>

                <p style={{ fontSize: "0.82rem", fontWeight: 300, color: "var(--text)", lineHeight: 1.5 }}>
                  {item.text}
                </p>

                <div style={{ display: "flex", gap: 8, marginTop: 10, flexWrap: "wrap" }}>
                  <button
                    type="button"
                    onClick={() => onMove(item, -1)}
                    disabled={i === 0}
                    style={{ ...ui.smallButton, opacity: i === 0 ? 0.35 : 1 }}
                    aria-label="Move up"
                  >
                    ↑
                  </button>
                  <button
                    type="button"
                    onClick={() => onMove(item, 1)}
                    disabled={i === items.length - 1}
                    style={{ ...ui.smallButton, opacity: i === items.length - 1 ? 0.35 : 1 }}
                    aria-label="Move down"
                  >
                    ↓
                  </button>
                  <button type="button" onClick={() => onToggleActive(item)} style={ui.smallButton}>
                    {item.active === false ? "Switch on" : "Switch off"}
                  </button>
                  <button type="button" onClick={() => { setDraft(item); setSave("idle"); }} style={ui.smallButton}>
                    Edit
                  </button>
                  <button
                    type="button"
                    onClick={() => onDelete(item)}
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
    </div>
  );
}
