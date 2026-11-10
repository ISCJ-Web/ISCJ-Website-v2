import Container from "@/components/ui/Container";
import MissionVision from "@/components/about/MissionVision";
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
            backgroundImage: `url('${assetPath("/images/prayer-hall.jpg")}')`,
            backgroundSize: "cover",
            backgroundPosition: "center 45%",
            filter: "brightness(0.55)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to right, rgba(1,25,48,0.88) 0%, rgba(1,25,48,0.74) 48%, rgba(1,25,48,0.34) 100%)",
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

      {/* Mission + Vision, then Who We Serve as a full-width card beneath. */}
      <section style={{ padding: "80px 0" }}>
        <Container style={{ padding: "0 48px" }}>
          <MissionVision />
          <div style={{ background: "var(--white)", padding: "48px var(--card-px, 36px)", marginTop: 2 }}>
            <span style={{ fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", display: "block", marginBottom: 16 }}>
              Who We Serve
            </span>
            <h3 style={{ fontFamily: "var(--ff-head)", fontSize: "1.6rem", fontWeight: 400, color: "var(--navy)", marginBottom: 20 }}>
              Community &amp; <em>Citizenship</em>
            </h3>
            <div style={{ maxWidth: 720 }}>
              <p style={{ fontSize: "0.95rem", fontWeight: 300, color: "var(--muted)", lineHeight: 1.8, marginBottom: 16 }}>
                The ISCJ encourages its members to represent Islam in the best manner through
                their character in all facets of their life including their home life, work
                life and as members of the American society. We encourage our members to serve
                not just the ISCJ community but the larger community by volunteering and civic
                engagement.
              </p>
              <p style={{ fontSize: "0.95rem", fontWeight: 300, color: "var(--muted)", lineHeight: 1.8 }}>
                As an organization, the ISCJ invites members of the public, the community and
                elected officials as well as political candidates to address our community.
                Note that ISCJ is a non-partisan non-profit organization and does not endorse
                any candidate for any office. Our focus is faith, family and community service.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Membership + Contact. The id is the home page "Become a Member" target;
          the scroll margin keeps the heading clear of the fixed navbar. */}
      <section
        id="membership"
        style={{ padding: "0 0 80px", scrollMarginTop: "calc(108px + var(--banner-h, 0px) + 24px)" }}
      >
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
                Are you a member? If not, download the applicable form below, complete it,
                and send it to{" "}
                <a href="mailto:admin@iscj.org" style={{ color: "var(--navy)" }}>
                  admin@iscj.org
                </a>{" "}
                or hand it in person at the ISCJ office.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 24 }}>
                <a
                  href={assetPath("/documents/membership-form-family-2026.pdf")}
                  target="_blank"
                  rel="noopener noreferrer"
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
                  Family Membership Form
                </a>
                <a
                  href={assetPath("/documents/membership-form-single-2026.pdf")}
                  target="_blank"
                  rel="noopener noreferrer"
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
                  Single Membership Form
                </a>
              </div>
              <a
                href={assetPath("/documents/iscj-bylaws.pdf")}
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: "0.9rem", fontWeight: 400, color: "var(--navy)", textDecoration: "underline", textUnderlineOffset: 4 }}
              >
                Click here for ISCJ Bylaws
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
