import Container from "@/components/ui/Container";
import { assetPath } from "@/lib/assetPath";

const leadership = [
  { title: "Chair", name: "Arif Khan" },
  { title: "President", name: "Arif Patel" },
  { title: "Secretary", name: "Omayma Mansour" },
  { title: "Treasurer", name: "Habib Ahson" },
  { title: "Executive Secretary", name: "Mohammed Farooqui" },
];

const members = [
  "Arifa Zaheer",
  "Quratulain Annie Hassan",
  "Aysha Khalid",
  "Issam Koleilat",
];

const liaisons = [
  { title: "NUI Liaison", name: "Mohamed Asker" },
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
            backgroundImage: `url('${assetPath("/images/masjid-entrance.jpg")}')`,
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
            Board of <em>Trustees</em>
          </h1>
          <p style={{ fontSize: "1.05rem", fontWeight: 300, color: "rgba(255,255,255,0.75)", lineHeight: 1.85, maxWidth: 560 }}>
            The ISCJ Board of Trustees is elected by the community to govern the Islamic
            Society of Central Jersey. The board oversees operations, finances, and the
            long-term mission of ISCJ. Shown below: Board of Trustees &amp; Overseers 2026–2027.
          </p>
        </Container>
      </section>

      {/* Leadership */}
      <section style={{ padding: "80px 0" }}>
        <Container style={{ padding: "0 48px" }}>
          <span className="section-label">Executive Leadership</span>
          <h2 className="section-title" style={{ marginTop: 12, marginBottom: 48 }}>
            Board <em>Officers</em>
          </h2>
          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2px" }}
            className="max-sm:!grid-cols-1"
          >
            {leadership.map((l, i) => (
              <div
                key={i}
                style={{
                  background: i === 0 ? "var(--navy)" : "var(--white)",
                  padding: "40px 32px",
                }}
              >
                <p
                  style={{
                    fontSize: "0.68rem",
                    fontWeight: 500,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "var(--gold)",
                    marginBottom: 12,
                  }}
                >
                  {l.title}
                </p>
                <p
                  style={{
                    fontFamily: "var(--ff-head)",
                    fontSize: "1.35rem",
                    fontWeight: 400,
                    color: i === 0 ? "var(--white)" : "var(--navy)",
                    lineHeight: 1.3,
                  }}
                >
                  {l.name}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Members + Overseers */}
      <section style={{ padding: "0 0 80px" }}>
        <Container style={{ padding: "0 48px" }}>
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px" }}
            className="max-sm:!grid-cols-1"
          >
            {/* Members */}
            <div style={{ background: "var(--white)", padding: "48px 36px" }}>
              <span style={{ fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", display: "block", marginBottom: 16 }}>
                Board Members
              </span>
              <h3 style={{ fontFamily: "var(--ff-head)", fontSize: "1.6rem", fontWeight: 400, color: "var(--navy)", marginBottom: 28 }}>
                Elected <em>Members</em>
              </h3>
              <div style={{ display: "flex", flexDirection: "column" }}>
                {members.map((m) => (
                  <div
                    key={m}
                    style={{
                      padding: "16px 0",
                      borderBottom: "1px solid var(--border)",
                      fontFamily: "var(--ff-head)",
                      fontSize: "1.1rem",
                      color: "var(--navy)",
                    }}
                  >
                    {m}
                  </div>
                ))}
              </div>
            </div>

            {/* Liaisons */}
            <div style={{ background: "var(--navy)", padding: "48px 36px" }}>
              <span style={{ fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", display: "block", marginBottom: 16 }}>
                Liaisons
              </span>
              <h3 style={{ fontFamily: "var(--ff-head)", fontSize: "1.6rem", fontWeight: 400, color: "var(--white)", marginBottom: 28 }}>
                Board <em>Liaisons</em>
              </h3>
              <div style={{ display: "flex", flexDirection: "column" }}>
                {liaisons.map((o) => (
                  <div
                    key={o.name}
                    style={{
                      padding: "16px 0",
                      borderBottom: "1px solid rgba(255,255,255,0.1)",
                      display: "flex",
                      flexDirection: "column",
                      gap: 4,
                    }}
                  >
                    <p style={{ fontSize: "0.7rem", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--gold)" }}>
                      {o.title}
                    </p>
                    <p style={{ fontFamily: "var(--ff-head)", fontSize: "1.1rem", color: "var(--white)" }}>
                      {o.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Contact CTA */}
      <section style={{ background: "var(--white)", borderTop: "1px solid var(--border)", padding: "64px 0" }}>
        <Container style={{ padding: "0 48px" }}>
          <div style={{ maxWidth: 640 }}>
            <span className="section-label">Contact</span>
            <h2 className="section-title" style={{ marginTop: 12, marginBottom: 16 }}>
              Reach <em>the Board</em>
            </h2>
            <p style={{ fontSize: "1rem", fontWeight: 300, color: "var(--muted)", lineHeight: 1.8, marginBottom: 24 }}>
              For general questions about ISCJ governance or membership, contact the
              administrative office.
            </p>
            <a href="mailto:admin@iscj.org" style={{ fontFamily: "var(--ff-head)", fontSize: "1.2rem", color: "var(--navy)", textDecoration: "none" }}>
              admin@iscj.org
            </a>
          </div>
        </Container>
      </section>
    </main>
  );
}
