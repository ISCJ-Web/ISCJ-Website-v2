import Container from "@/components/ui/Container";
import { assetPath } from "@/lib/assetPath";

const emails = [
  { label: "General Inquiry", value: "admin@iscj.org", href: "mailto:admin@iscj.org" },
  { label: "Volunteering", value: "volunteers@iscj.org", href: "mailto:volunteers@iscj.org" },
  { label: "Imam", value: "imam@iscj.org", href: "mailto:imam@iscj.org" },
  { label: "Advertising", value: "advertising@iscj.org", href: "mailto:advertising@iscj.org" },
  { label: "Feedback", value: "feedback@iscj.org", href: "mailto:feedback@iscj.org" },
];

export default function Page() {
  return (
    <main style={{ minHeight: "100vh", background: "var(--surface)" }}>

      {/* Hero */}
      <section style={{ position: "relative", padding: "204px 0 80px", overflow: "hidden" }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url('${assetPath("/images/hero.jpg")}')`,
            backgroundSize: "cover",
            backgroundPosition: "center 30%",
            filter: "brightness(0.28)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to right, rgba(1,25,48,0.92) 55%, rgba(1,25,48,0.5) 100%)",
          }}
        />
        <Container style={{ position: "relative", padding: "0 48px" }}>
          <span className="section-label">About</span>
          <h1
            style={{
              fontFamily: "var(--ff-head)",
              fontSize: "clamp(2.4rem, 5vw, 4.2rem)",
              fontWeight: 400,
              color: "var(--white)",
              lineHeight: 1.1,
              marginTop: 12,
              marginBottom: 28,
              maxWidth: 600,
            }}
          >
            Who <em>Are We?</em>
          </h1>
          <p style={{ fontSize: "1.05rem", fontWeight: 300, color: "rgba(255,255,255,0.75)", lineHeight: 1.85, maxWidth: 560 }}>
            The Islamic Society of Central Jersey is an organization of Muslim Americans
            providing religious, educational, and social services to our members and the
            broader community — a non-political, non-profit institution open to all.
          </p>
        </Container>
      </section>

      {/* Mission */}
      <section style={{ padding: "80px 0" }}>
        <Container style={{ padding: "0 48px" }}>
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px" }}
            className="max-sm:!grid-cols-1"
          >
            <div style={{ background: "var(--navy)", padding: "48px 36px" }}>
              <span style={{ fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", display: "block", marginBottom: 16 }}>
                Mission
              </span>
              <h2 style={{ fontFamily: "var(--ff-head)", fontSize: "1.8rem", fontWeight: 400, color: "var(--white)", marginBottom: 20, lineHeight: 1.2 }}>
                Our <em>Aspiration</em>
              </h2>
              <p style={{ fontSize: "0.95rem", fontWeight: 300, color: "rgba(255,255,255,0.75)", lineHeight: 1.85, fontStyle: "italic" }}>
                &ldquo;We aspire to be the anchor of a model community of practicing Muslims of
                diverse backgrounds, democratically governed, efficiently served, relating to
                one another with inclusiveness and tolerance.&rdquo;
              </p>
            </div>
            <div style={{ background: "var(--white)", padding: "48px 36px" }}>
              <span style={{ fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", display: "block", marginBottom: 16 }}>
                Who We Serve
              </span>
              <h3 style={{ fontFamily: "var(--ff-head)", fontSize: "1.6rem", fontWeight: 400, color: "var(--navy)", marginBottom: 20 }}>
                Community &amp; <em>Citizenship</em>
              </h3>
              <p style={{ fontSize: "0.95rem", fontWeight: 300, color: "var(--muted)", lineHeight: 1.8, marginBottom: 16 }}>
                ISCJ encourages its members to be model U.S. citizens — to participate in
                government through volunteering, voting, and civic engagement. We regularly
                invite community leaders and elected officials to address our members.
              </p>
              <p style={{ fontSize: "0.95rem", fontWeight: 300, color: "var(--muted)", lineHeight: 1.8 }}>
                ISCJ maintains strict political neutrality and never endorses any candidate
                for any office. Our focus is faith, family, and community service.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Membership + Contact */}
      <section style={{ padding: "0 0 80px" }}>
        <Container style={{ padding: "0 48px" }}>
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "start" }}
            className="max-sm:!grid-cols-1"
          >
            <div>
              <span className="section-label">Membership</span>
              <h2 className="section-title" style={{ marginTop: 12, marginBottom: 16 }}>
                Join <em>ISCJ</em>
              </h2>
              <p style={{ fontSize: "1rem", fontWeight: 300, color: "var(--muted)", lineHeight: 1.8, marginBottom: 24 }}>
                Family and single membership forms are available for download and submission
                to the administrative office. Becoming a member connects you to the full
                breadth of ISCJ programs and services.
              </p>
              <a
                href="mailto:admin@iscj.org"
                style={{
                  display: "inline-block",
                  background: "var(--gold)",
                  color: "var(--navy-deep)",
                  padding: "14px 32px",
                  fontSize: "0.8rem",
                  fontWeight: 500,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  borderRadius: 2,
                }}
              >
                Contact to Join
              </a>
            </div>
            <div>
              <span className="section-label">Contact</span>
              <h2 className="section-title" style={{ marginTop: 12, marginBottom: 24 }}>
                Get in <em>Touch</em>
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {emails.map((e) => (
                  <div key={e.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 0", borderBottom: "1px solid var(--border)" }}>
                    <span style={{ fontSize: "0.72rem", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted)" }}>{e.label}</span>
                    <a href={e.href} style={{ fontFamily: "var(--ff-head)", fontSize: "0.95rem", color: "var(--navy)", textDecoration: "none" }}>{e.value}</a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
