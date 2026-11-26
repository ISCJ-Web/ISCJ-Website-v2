import Link from "next/link";
import Container from "@/components/ui/Container";

/* Shared layout for the Privacy Policy and Terms of Service pages. The text of
   both lives in their page files and is copied verbatim from the policy
   document the board approved; change it only from a revised document. */

export function LegalPage({
  title,
  lastUpdated,
  other,
  children,
}: {
  title: React.ReactNode;
  lastUpdated: string;
  other: { href: string; label: string };
  children: React.ReactNode;
}) {
  return (
    <main style={{ minHeight: "100vh", background: "var(--surface)" }}>
      <section className="legal-hero" style={{ background: "var(--navy-deep)", padding: "204px 0 64px" }}>
        <Container style={{ padding: "0 48px" }}>
          <span className="section-label">Legal</span>
          <h1
            style={{
              fontFamily: "var(--ff-head)",
              fontSize: "clamp(2.4rem, 5vw, 4.2rem)",
              fontWeight: 400,
              color: "var(--white)",
              lineHeight: 1.1,
              marginTop: 12,
              marginBottom: 20,
            }}
          >
            {title}
          </h1>
          <p style={{ fontSize: "0.9rem", fontWeight: 300, color: "rgba(255,255,255,0.7)" }}>
            Last Updated: {lastUpdated}
          </p>
        </Container>
      </section>

      <section style={{ padding: "72px 0 96px" }}>
        <Container style={{ padding: "0 48px" }}>
          <article
            className="legal-card"
            style={{
              maxWidth: 780,
              background: "var(--white)",
              border: "1px solid var(--border)",
              padding: "56px var(--card-px, 56px)",
            }}
          >
            {children}

            <p
              style={{
                marginTop: 48,
                paddingTop: 24,
                borderTop: "1px solid var(--border)",
                fontSize: "0.88rem",
                fontWeight: 300,
                color: "var(--muted)",
              }}
            >
              See also our{" "}
              <Link href={other.href} style={{ color: "var(--navy)", textDecoration: "underline" }}>
                {other.label}
              </Link>
              .
            </p>
          </article>
        </Container>
      </section>
    </main>
  );
}

export function LegalIntro({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ fontSize: "1rem", fontWeight: 300, lineHeight: 1.8, color: "var(--text)", marginBottom: 18 }}>
      {children}
    </p>
  );
}

export function LegalSection({
  id,
  number,
  title,
  children,
}: {
  id: string;
  number: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="legal-section" style={{ marginTop: 44 }}>
      <h2
        style={{
          fontFamily: "var(--ff-head)",
          fontSize: "1.65rem",
          fontWeight: 500,
          color: "var(--navy)",
          lineHeight: 1.25,
          marginBottom: 16,
        }}
      >
        <span style={{ color: "var(--gold)", marginRight: 12 }}>{number}.</span>
        {title}
      </h2>
      {children}
    </section>
  );
}

export function LegalP({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ fontSize: "1rem", fontWeight: 300, lineHeight: 1.8, color: "var(--text)", marginBottom: 16 }}>
      {children}
    </p>
  );
}

export function LegalList({ children }: { children: React.ReactNode }) {
  return <ul className="legal-list">{children}</ul>;
}

/* A list item, optionally opening with a bold lead-in such as "Personal Data:". */
export function LegalItem({ lead, children }: { lead?: string; children: React.ReactNode }) {
  return (
    <li>
      {lead && <strong style={{ fontWeight: 500, color: "var(--navy)" }}>{lead} </strong>}
      {children}
    </li>
  );
}

export function LegalContact() {
  return (
    <LegalList>
      <LegalItem lead="Email:">
        <a href="mailto:admin@iscj.org" style={{ color: "var(--navy)" }}>admin@iscj.org</a>
      </LegalItem>
      <LegalItem lead="Phone:">
        <a href="tel:+17323296995" style={{ color: "var(--navy)" }}>732 329 6995</a>
      </LegalItem>
      <LegalItem lead="Mail:">4145 Route 1 South, Monmouth Junction, NJ 08852</LegalItem>
    </LegalList>
  );
}
