import Container from "@/components/ui/Container";
import { assetPath } from "@/lib/assetPath";

const phases = [
  { year: "2007", title: "Master Plan Approved", body: "South Brunswick Township approved ISCJ's master expansion plan, authorizing the long-term campus growth vision." },
  { year: "2020", title: "Masjid Phase 1 Complete", body: "The first phase of the Masjid expansion was completed during COVID-19 — a testament to the community's resolve and dedication." },
  { year: "2021", title: "Zoning Board Approval", body: "The Zoning Board approved a 42,449 sq ft two-story school addition, a 44,880 sq ft sports facility, and 24 senior housing units." },
  { year: "2024", title: "Infrastructure Complete", body: "Stormwater management, utilities, and parking infrastructure finished — the foundation for all future construction phases." },
  { year: "2025+", title: "Next Phases", body: "Senior housing, sports facility, Noor-Ul-Iman school addition, and Masjid completion are all planned for upcoming years." },
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
            Campus <em>Expansion</em>
          </h1>
          <p style={{ fontSize: "1.05rem", fontWeight: 300, color: "rgba(255,255,255,0.75)", lineHeight: 1.85, maxWidth: 560 }}>
            For over two decades, ISCJ has been working toward a transformational campus
            expansion — building a legacy that will serve generations of Muslims in
            Central New Jersey for years to come.
          </p>
        </Container>
      </section>

      {/* Stats */}
      <section style={{ padding: "80px 0" }}>
        <Container style={{ padding: "0 48px" }}>
          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2px" }}
            className="max-sm:!grid-cols-1"
          >
            {[
              { number: "17", label: "Acres of Land", dark: false },
              { number: "$1.5M+", label: "Community-Funded Property", dark: true },
              { number: "2007–2025+", label: "Expansion Timeline", dark: false },
            ].map((s) => (
              <div
                key={s.label}
                style={{ background: s.dark ? "var(--navy)" : "var(--white)", padding: "48px 36px", textAlign: "center" }}
              >
                <p
                  style={{
                    fontFamily: "var(--ff-head)",
                    fontSize: "3rem",
                    fontWeight: 300,
                    color: s.dark ? "var(--white)" : "var(--navy)",
                    lineHeight: 1,
                    marginBottom: 12,
                  }}
                >
                  {s.number}
                </p>
                <p style={{ fontSize: "0.72rem", fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--gold)" }}>
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Overview */}
      <section style={{ padding: "0 0 80px" }}>
        <Container style={{ padding: "0 48px" }}>
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "start", marginBottom: 64 }}
            className="max-sm:!grid-cols-1"
          >
            <div>
              <span className="section-label">Project History</span>
              <h2 className="section-title" style={{ marginTop: 12, marginBottom: 24 }}>
                A Community-Built <em>Future</em>
              </h2>
              <p style={{ fontSize: "1rem", fontWeight: 300, color: "var(--muted)", lineHeight: 1.85, marginBottom: 16 }}>
                ISCJ began as a modest gathering of Muslim families in the early 1970s. It
                has since evolved into one of America&apos;s most distinguished Islamic centers,
                receiving visits from government officials and hosting interfaith gatherings
                from across the region.
              </p>
              <p style={{ fontSize: "1rem", fontWeight: 300, color: "var(--muted)", lineHeight: 1.85 }}>
                Property acquisition cost approximately $1.5 million — fully funded by
                the community. Engineering and legal fees exceeded $1 million, also
                community-donated. Every dollar reflects the dedication of our members.
              </p>
            </div>
            <div>
              <span className="section-label">Programs</span>
              <h2 className="section-title" style={{ marginTop: 12, marginBottom: 24 }}>
                Education &amp; <em>Programs</em>
              </h2>
              <p style={{ fontSize: "1rem", fontWeight: 300, color: "var(--muted)", lineHeight: 1.85, marginBottom: 16 }}>
                The expansion supports a thriving ecosystem of education: the Weekend School
                (active since founding), Noor-Ul-Iman School (full-time, est. 1993 with
                27 students — now 480+), Qur&apos;an Academy, and Learning Islam Together (LIT).
              </p>
              <p style={{ fontSize: "1rem", fontWeight: 300, color: "var(--muted)", lineHeight: 1.85 }}>
                NUI graduates consistently attend four-year universities, reflecting our
                commitment to both Islamic and academic excellence.
              </p>
            </div>
          </div>

          {/* Phases */}
          <span className="section-label">Phases</span>
          <h2 className="section-title" style={{ marginTop: 12, marginBottom: 48 }}>
            Expansion <em>Milestones</em>
          </h2>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {phases.map((p, i) => (
              <div
                key={i}
                style={{
                  display: "grid",
                  gridTemplateColumns: "120px 1fr",
                  gap: 32,
                  padding: "28px 0",
                  borderBottom: "1px solid var(--border)",
                  alignItems: "start",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--ff-head)",
                    fontSize: "1.6rem",
                    fontWeight: 300,
                    color: "var(--gold)",
                    lineHeight: 1,
                  }}
                >
                  {p.year}
                </div>
                <div>
                  <h3 style={{ fontFamily: "var(--ff-head)", fontSize: "1.15rem", fontWeight: 400, color: "var(--navy)", marginBottom: 8 }}>
                    {p.title}
                  </h3>
                  <p style={{ fontSize: "0.88rem", fontWeight: 300, color: "var(--muted)", lineHeight: 1.75 }}>
                    {p.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--navy)", padding: "64px 0" }}>
        <Container style={{ padding: "0 48px" }}>
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center" }}
            className="max-sm:!grid-cols-1"
          >
            <div>
              <span className="section-label" style={{ color: "var(--gold)" }}>Support the Expansion</span>
              <h2
                style={{
                  fontFamily: "var(--ff-head)",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 400,
                  color: "var(--white)",
                  lineHeight: 1.1,
                  marginTop: 12,
                  marginBottom: 16,
                }}
              >
                Help Build Our <em>Future</em>
              </h2>
              <p style={{ fontSize: "1rem", fontWeight: 300, color: "rgba(255,255,255,0.7)", lineHeight: 1.8 }}>
                The expansion is entirely community-funded. Your contribution — large or
                small — becomes part of the legacy of ISCJ. Contact our expansion team
                to learn how to give.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ padding: "24px 28px", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 2 }}>
                <p style={{ fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 6 }}>
                  Expansion Fund
                </p>
                <a href="mailto:expansion@iscj.org" style={{ fontFamily: "var(--ff-head)", fontSize: "1.1rem", color: "var(--white)", textDecoration: "none" }}>
                  expansion@iscj.org
                </a>
              </div>
              <div style={{ padding: "24px 28px", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 2 }}>
                <p style={{ fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 6 }}>
                  General Inquiries
                </p>
                <a href="mailto:admin@iscj.org" style={{ fontFamily: "var(--ff-head)", fontSize: "1.1rem", color: "var(--white)", textDecoration: "none" }}>
                  admin@iscj.org
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
