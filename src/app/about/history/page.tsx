import Container from "@/components/ui/Container";
import { assetPath } from "@/lib/assetPath";

const milestones = [
  {
    year: "1970",
    title: "The Beginning",
    body: "Four Muslim students from Rutgers University and four local families formed the Islamic community nucleus in Central New Jersey — united by a sense of belonging and a yearning for Islamic identity.",
  },
  {
    year: "1970s",
    title: "Early Growth",
    body: "The small founding group, guided by a vision to preserve Islamic heritage and maintain ethical and intellectual standards, gradually evolved into a thriving institution serving the wider community.",
  },
  {
    year: "1993",
    title: "Noor-Ul-Iman School Founded",
    body: "The Noor-Ul-Iman School was established with just 27 students from Pre-K through Grade 1. Today it enrolls over 480 students from Pre-K through Grade 12, maintaining approximately 8% annual growth.",
  },
  {
    year: "2007",
    title: "Expansion Plan Approved",
    body: "South Brunswick Township approved ISCJ's master expansion plan, setting the stage for a major campus growth that would serve the community for decades to come.",
  },
  {
    year: "2020",
    title: "Masjid Phase 1 Complete",
    body: "The first phase of the Masjid expansion was completed during the COVID-19 pandemic — a testament to the resilience and dedication of the ISCJ community.",
  },
  {
    year: "2021",
    title: "Zoning Board Approval",
    body: "The Zoning Board approved a 42,449 sq ft two-story school addition, a 44,880 sq ft sports facility, and 24 senior housing units — the most ambitious phase of the expansion.",
  },
  {
    year: "2024",
    title: "Infrastructure Complete",
    body: "Stormwater management, utilities, and parking infrastructure work were completed, paving the way for the next phases of construction.",
  },
  {
    year: "2025+",
    title: "The Road Ahead",
    body: "Planned activities include senior housing construction, the sports facility, Noor-Ul-Iman school expansion, and Masjid completion — all funded by the generous ISCJ community.",
  },
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
            Our <em>History</em>
          </h1>
          <p style={{ fontSize: "1.05rem", fontWeight: 300, color: "rgba(255,255,255,0.75)", lineHeight: 1.85, maxWidth: 560 }}>
            Conceived by Muslim American students of Rutgers University in the 1970s, ISCJ
            has grown from a small gathering of eight families into one of America&apos;s most
            distinguished Islamic centers — serving thousands and expanding every year.
          </p>
        </Container>
      </section>

      {/* Timeline */}
      <section style={{ padding: "80px 0" }}>
        <Container style={{ padding: "0 48px" }}>
          <span className="section-label">Timeline</span>
          <h2 className="section-title" style={{ marginTop: 12, marginBottom: 64 }}>
            Five Decades of <em>Growth</em>
          </h2>
          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "2px" }}
            className="max-sm:!grid-cols-1"
          >
            {milestones.map((m, i) => (
              <div
                key={i}
                style={{
                  background: i % 4 === 1 || i % 4 === 2 ? "var(--navy)" : "var(--white)",
                  padding: "40px 36px",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--ff-head)",
                    fontSize: "2.4rem",
                    fontWeight: 300,
                    color: "var(--gold)",
                    lineHeight: 1,
                    marginBottom: 12,
                  }}
                >
                  {m.year}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--ff-head)",
                    fontSize: "1.25rem",
                    fontWeight: 400,
                    color: i % 4 === 1 || i % 4 === 2 ? "var(--white)" : "var(--navy)",
                    marginBottom: 12,
                  }}
                >
                  {m.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.88rem",
                    fontWeight: 300,
                    color: i % 4 === 1 || i % 4 === 2 ? "rgba(255,255,255,0.65)" : "var(--muted)",
                    lineHeight: 1.75,
                  }}
                >
                  {m.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Services overview callout */}
      <section style={{ padding: "0 0 80px" }}>
        <Container style={{ padding: "0 48px" }}>
          <div style={{ background: "var(--navy)", padding: "48px 40px", borderLeft: "3px solid var(--gold)" }}>
            <p style={{ fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 12 }}>
              Today
            </p>
            <p style={{ fontSize: "1.05rem", fontWeight: 300, color: "rgba(255,255,255,0.82)", lineHeight: 1.85, maxWidth: 800 }}>
              ISCJ is now represented by an integrated institution offering far more than a
              place of worship — a full-time Islamic school enrolling 480+ students, a weekend
              school serving ~500 students, a library, food pantry, funeral and burial services,
              Zakat distribution, interfaith dialogue initiatives, and an ambitious campus
              expansion spanning 17 acres in Monmouth Junction, NJ.
            </p>
          </div>
        </Container>
      </section>
    </main>
  );
}
