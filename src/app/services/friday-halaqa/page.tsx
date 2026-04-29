import Container from "@/components/ui/Container";
import { assetPath } from "@/lib/assetPath";

const pastTopics = [
  { title: "Staying Firm on the Straight Path", speaker: "Omar Ahmed" },
  { title: "Protecting Our Families: Balancing Deen and Dunya", speaker: "Dr. Ahmed Mohamed" },
  { title: "Protecting Our Families: Understanding the LGBT Narrative", speaker: "Dr. Ahmed Mohamed" },
  { title: "Leaving Your Legacy", speaker: "Sh. Yousef Bakeer" },
  { title: "Family Strong: How Ramadan Can Strengthen Family Bonds", speaker: "Dr. Ahmed Mohamed" },
  { title: "A Scent of Ramadan: Discussing Rajab and Sha’baan", speaker: "Sh. Abdulrahman Alaa" },
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
            backgroundImage: `url('${assetPath("/images/iscj2.jpg")}')`,
            backgroundSize: "cover",
            backgroundPosition: "center 40%",
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
          <span className="section-label">Services</span>
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
            Friday <em>Halaqa</em>
          </h1>
          <p
            style={{
              fontSize: "1.05rem",
              fontWeight: 300,
              color: "rgba(255,255,255,0.75)",
              lineHeight: 1.85,
              maxWidth: 560,
            }}
          >
            Please take time out of your busy schedule and attend these gatherings for the
            pleasure of Allah Subhanahu Wa Ta&apos;ala. Bring your family and friends —
            time spent here will benefit us in this world and the hereafter.
          </p>
        </Container>
      </section>

      {/* Schedule + About */}
      <section style={{ padding: "80px 0" }}>
        <Container style={{ padding: "0 48px" }}>
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px" }}
            className="max-sm:!grid-cols-1"
          >
            <div style={{ background: "var(--navy)", padding: "48px 36px" }}>
              <span
                style={{
                  fontSize: "0.68rem",
                  fontWeight: 500,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  display: "block",
                  marginBottom: 16,
                }}
              >
                When & Where
              </span>
              <h2
                style={{
                  fontFamily: "var(--ff-head)",
                  fontSize: "1.8rem",
                  fontWeight: 400,
                  color: "var(--white)",
                  marginBottom: 28,
                  lineHeight: 1.2,
                }}
              >
                Every <em>Friday</em>
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {[
                  { label: "Time", value: "After Maghrib or Isha\n(depending on time of year)" },
                  { label: "Coordinator", value: "Dr. Ahmed Mohamed" },
                  { label: "Location", value: "4145 Route 1 South\nMonmouth Junction, NJ 08852" },
                ].map((item) => (
                  <div key={item.label}>
                    <p style={{ fontSize: "0.72rem", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 6 }}>
                      {item.label}
                    </p>
                    <p style={{ fontFamily: "var(--ff-head)", fontSize: "1.1rem", color: "var(--white)", lineHeight: 1.5, whiteSpace: "pre-line" }}>
                      {item.value}
                    </p>
                  </div>
                ))}
                <div>
                  <p style={{ fontSize: "0.72rem", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 6 }}>
                    Contact
                  </p>
                  <a href="mailto:lit@iscj.org" style={{ fontFamily: "var(--ff-head)", fontSize: "1.1rem", color: "var(--white)", textDecoration: "none" }}>
                    lit@iscj.org
                  </a>
                </div>
              </div>
            </div>

            <div style={{ background: "var(--white)", padding: "48px 36px" }}>
              <span
                style={{
                  fontSize: "0.68rem",
                  fontWeight: 500,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  display: "block",
                  marginBottom: 16,
                }}
              >
                About the Halaqa
              </span>
              <h3
                style={{
                  fontFamily: "var(--ff-head)",
                  fontSize: "1.6rem",
                  fontWeight: 400,
                  color: "var(--navy)",
                  marginBottom: 20,
                }}
              >
                Knowledge &amp; <em>Community</em>
              </h3>
              <p style={{ fontSize: "0.95rem", fontWeight: 300, color: "var(--muted)", lineHeight: 1.8, marginBottom: 16 }}>
                The Friday Halaqa is a weekly gathering that brings our community together
                for Islamic learning, discussion, and reflection. Scholars and community
                leaders speak on topics relevant to our daily lives as Muslims in America.
              </p>
              <p style={{ fontSize: "0.95rem", fontWeight: 300, color: "var(--muted)", lineHeight: 1.8 }}>
                All are welcome — bring your family, friends, and neighbors. Every session
                is an opportunity to strengthen your faith and your bonds with the community.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Past Topics */}
      <section style={{ padding: "0 0 80px" }}>
        <Container style={{ padding: "0 48px" }}>
          <span className="section-label">Past Sessions</span>
          <h2 className="section-title" style={{ marginTop: 12, marginBottom: 48 }}>
            Recent <em>Topics</em>
          </h2>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {pastTopics.map((topic, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: 24,
                  padding: "20px 0",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
                  <span
                    style={{
                      fontFamily: "var(--ff-head)",
                      fontSize: "1.4rem",
                      fontWeight: 300,
                      color: "var(--gold)",
                      flexShrink: 0,
                      lineHeight: 1,
                      marginTop: 4,
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p style={{ fontFamily: "var(--ff-head)", fontSize: "1.1rem", fontWeight: 400, color: "var(--navy)", lineHeight: 1.4 }}>
                    {topic.title}
                  </p>
                </div>
                <p style={{ fontSize: "0.82rem", fontWeight: 300, color: "var(--muted)", flexShrink: 0, textAlign: "right" }}>
                  {topic.speaker}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
