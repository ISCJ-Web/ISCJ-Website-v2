import Container from "@/components/ui/Container";
import { assetPath } from "@/lib/assetPath";

export default function Page() {
  return (
    <main style={{ minHeight: "100vh", background: "var(--surface)" }}>

      {/* Hero */}
      <section style={{ position: "relative", padding: "204px 0 80px", overflow: "hidden" }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url('${assetPath("/images/prayer-hall-worshipper.jpg")}')`,
            backgroundSize: "cover",
            backgroundPosition: "center 50%",
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
          <span className="section-label">Get Involved</span>
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
            Volunteer <em>Opportunities</em>
          </h1>
          <p style={{ fontSize: "1.05rem", fontWeight: 300, color: "rgba(255,255,255,0.75)", lineHeight: 1.85, maxWidth: 560 }}>
            ISCJ is built on the shoulders of its volunteers. Whether you have an
            hour a week or a professional skill to share, there is a place for you
            to serve and grow here.
          </p>
        </Container>
      </section>

      {/* Opportunities */}
      <section style={{ padding: "80px 0" }}>
        <Container style={{ padding: "0 48px" }}>
          <span className="section-label">Open Positions</span>
          <h2 className="section-title" style={{ marginTop: 12, marginBottom: 16 }}>
            Coming <em>Soon</em>
          </h2>
          <p style={{ fontSize: "1rem", fontWeight: 300, color: "var(--muted)", lineHeight: 1.8, maxWidth: 560 }}>
            Volunteer opportunities will be posted here soon. Check back, or reach
            out below and we will let you know when a role opens up.
          </p>
        </Container>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--white)", borderTop: "1px solid var(--border)", padding: "64px 0" }}>
        <Container style={{ padding: "0 48px" }}>
          <div style={{ maxWidth: 640 }}>
            <span className="section-label">Ready to Serve</span>
            <h2 className="section-title" style={{ marginTop: 12, marginBottom: 16 }}>
              Start Your <em>Journey</em>
            </h2>
            <p style={{ fontSize: "1rem", fontWeight: 300, color: "var(--muted)", lineHeight: 1.8, marginBottom: 24 }}>
              Not sure where to begin? Reach out and we will help match you with the
              right opportunity based on your skills, availability, and interests.
              Every contribution — big or small — matters.
            </p>
            <a
              href="mailto:volunteers@iscj.org"
              style={{ fontFamily: "var(--ff-head)", fontSize: "1.2rem", color: "var(--navy)", textDecoration: "none" }}
            >
              volunteers@iscj.org
            </a>
          </div>
        </Container>
      </section>
    </main>
  );
}
