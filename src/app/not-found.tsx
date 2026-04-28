import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--surface)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "48px 24px",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: 520 }}>
        {/* Decorative Arabic-style divider */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 16,
            marginBottom: 40,
          }}
        >
          <span style={{ display: "block", height: 1, width: 48, background: "var(--gold)", opacity: 0.4 }} />
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" opacity={0.6}>
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
          <span style={{ display: "block", height: 1, width: 48, background: "var(--gold)", opacity: 0.4 }} />
        </div>

        <p
          style={{
            fontFamily: "var(--ff-body)",
            fontSize: "0.68rem",
            fontWeight: 500,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--gold)",
            marginBottom: 20,
          }}
        >
          Page Not Found
        </p>

        <h1
          style={{
            fontFamily: "var(--ff-display)",
            fontSize: "clamp(2.2rem, 5vw, 3.6rem)",
            fontWeight: 400,
            color: "var(--navy)",
            lineHeight: 1.15,
            letterSpacing: "-0.01em",
            marginBottom: 20,
          }}
        >
          Sorry, this page <em style={{ fontStyle: "italic", fontWeight: 300 }}>doesn&apos;t exist.</em>
        </h1>

        <p
          style={{
            fontFamily: "var(--ff-body)",
            fontSize: "1rem",
            fontWeight: 300,
            color: "var(--muted)",
            lineHeight: 1.8,
            letterSpacing: "0.03em",
            marginBottom: 40,
          }}
        >
          The page you&apos;re looking for may have been moved or removed.
          Head back home and we&apos;ll get you where you need to go.
        </p>

        <Link
          href="/"
          style={{
            display: "inline-block",
            background: "var(--gold)",
            color: "var(--navy-deep)",
            fontFamily: "var(--ff-body)",
            fontSize: "0.8rem",
            fontWeight: 500,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            padding: "14px 36px",
            textDecoration: "none",
            borderRadius: 2,
            transition: "background 0.2s",
          }}
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
