"use client";

/**
 * Form and layout primitives for the admin dashboard.
 *
 * Inline styles throughout, matching the rest of the site — Tailwind's
 * arbitrary-value classes do not reliably emit here. Everything pulls from the
 * same CSS custom properties the public pages use, so the dashboard reads as
 * part of the same site rather than a bolted-on tool.
 */

import type { CSSProperties, ReactNode } from "react";

export const ui = {
  card: {
    background: "var(--white)",
    border: "1px solid var(--border)",
    padding: 28,
  } as CSSProperties,

  sectionHeading: {
    fontFamily: "var(--ff-head)",
    fontSize: "1.5rem",
    fontWeight: 500,
    color: "var(--navy)",
    lineHeight: 1.2,
  } as CSSProperties,

  label: {
    display: "block",
    fontSize: "0.62rem",
    fontWeight: 500,
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    color: "var(--muted)",
    marginBottom: 7,
  } as CSSProperties,

  input: {
    width: "100%",
    fontFamily: "var(--ff-body)",
    fontSize: "0.9rem",
    fontWeight: 300,
    color: "var(--text)",
    background: "var(--white)",
    border: "1px solid var(--border)",
    borderRadius: 2,
    padding: "10px 12px",
    outline: "none",
  } as CSSProperties,

  hint: {
    fontSize: "0.72rem",
    fontWeight: 300,
    color: "var(--muted)",
    marginTop: 6,
    lineHeight: 1.5,
  } as CSSProperties,

  primaryButton: {
    background: "var(--gold)",
    color: "var(--navy-deep)",
    border: "none",
    borderRadius: 2,
    padding: "13px 30px",
    fontFamily: "var(--ff-body)",
    fontSize: "0.75rem",
    fontWeight: 500,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    cursor: "pointer",
  } as CSSProperties,

  ghostButton: {
    background: "transparent",
    color: "var(--navy)",
    border: "1px solid var(--border)",
    borderRadius: 2,
    padding: "12px 22px",
    fontFamily: "var(--ff-body)",
    fontSize: "0.72rem",
    fontWeight: 400,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    cursor: "pointer",
  } as CSSProperties,

  smallButton: {
    background: "transparent",
    color: "var(--navy)",
    border: "1px solid var(--border)",
    borderRadius: 2,
    padding: "6px 12px",
    fontFamily: "var(--ff-body)",
    fontSize: "0.68rem",
    fontWeight: 400,
    letterSpacing: "0.05em",
    cursor: "pointer",
  } as CSSProperties,
};

export function Field({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: ReactNode;
  children: ReactNode;
}) {
  return (
    <div style={{ marginBottom: 18 }}>
      <label style={ui.label}>{label}</label>
      {children}
      {hint ? <p style={ui.hint}>{hint}</p> : null}
    </div>
  );
}

export function TextInput({
  value,
  onChange,
  placeholder,
  type = "text",
  maxLength,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  maxLength?: number;
}) {
  return (
    <input
      type={type}
      value={value}
      maxLength={maxLength}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      style={ui.input}
    />
  );
}

export function TextArea({
  value,
  onChange,
  placeholder,
  rows = 3,
  maxLength,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  rows?: number;
  maxLength?: number;
}) {
  return (
    <textarea
      value={value}
      rows={rows}
      maxLength={maxLength}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      style={{ ...ui.input, resize: "vertical", lineHeight: 1.6 }}
    />
  );
}

export function Select({
  value,
  onChange,
  options,
}: {
  value: string;
  onChange: (v: string) => void;
  options: readonly string[];
}) {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value)} style={ui.input}>
      {options.map((o) => (
        <option key={o} value={o}>
          {o}
        </option>
      ))}
    </select>
  );
}

export function Toggle({
  checked,
  onChange,
  label,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  label: string;
}) {
  return (
    <label style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }}>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        style={{
          width: 38,
          height: 21,
          borderRadius: 11,
          border: "none",
          padding: 2,
          cursor: "pointer",
          background: checked ? "var(--gold)" : "var(--border)",
          display: "flex",
          justifyContent: checked ? "flex-end" : "flex-start",
          transition: "background 0.18s",
        }}
      >
        <span
          style={{
            width: 17,
            height: 17,
            borderRadius: "50%",
            background: "var(--white)",
            display: "block",
          }}
        />
      </button>
      <span style={{ fontSize: "0.82rem", fontWeight: 300, color: "var(--text)" }}>{label}</span>
    </label>
  );
}

/** The small caption under a save button: idle, in-flight, or the outcome. */
export type SaveState = "idle" | "saving" | "saved" | "error";

export function SaveStatus({ state, error }: { state: SaveState; error?: string }) {
  if (state === "idle") return null;
  const map: Record<Exclude<SaveState, "idle">, { text: string; color: string }> = {
    saving: { text: "Saving…", color: "var(--muted)" },
    saved: { text: "Saved", color: "var(--navy)" },
    error: { text: error ?? "Could not save", color: "#b4472e" },
  };
  const { text, color } = map[state];
  return <span style={{ fontSize: "0.75rem", fontWeight: 300, color }}>{text}</span>;
}

export function PreviewFrame({
  label,
  children,
  background = "var(--surface)",
  note = "This is the live component from the public site, not a mock-up.",
}: {
  label: string;
  children: ReactNode;
  background?: string;
  note?: ReactNode;
}) {
  return (
    <div>
      <span className="section-label" style={{ marginBottom: 12 }}>
        {label}
      </span>
      <div style={{ background, border: "1px solid var(--border)", padding: 20 }}>{children}</div>
      {note ? <p style={{ ...ui.hint, marginTop: 10 }}>{note}</p> : null}
    </div>
  );
}
