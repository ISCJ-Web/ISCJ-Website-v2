import Container from "@/components/ui/Container";
import { assetPath } from "@/lib/assetPath";

const benefits = [
  "Financial strength and long-term self-funding for ISCJ",
  "Reduced reliance on annual fundraising campaigns",
  "Ability to cover budget shortfalls without borrowing",
  "Sustained support for programs and services for future generations",
];

const waysToDonate = [
  {
    title: "Cash or Check",
    body: "Write a check with \"Endowment Fund\" in the memo line, or donate online via Mohid. Mail to P.O. Box 628, Monmouth Junction, NJ 08852.",
  },
  {
    title: "Property & Securities",
    body: "Transfer property deeds or financial securities directly to the ISCJ Endowment Fund. Contact us to coordinate the transfer.",
  },
  {
    title: "Last Will & Testament",
    body: "Designate the ISCJ Endowment Fund as a beneficiary in your estate. This is one of the most impactful forms of Sadaqah Jariyah.",
  },
  {
    title: "Charitable Trust",
    body: "Establish a Charitable Remainder Trust, Charitable Leading Trust, or donor-advised fund with ISCJ as the beneficiary.",
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
            Endowment <em>Fund</em>
          </h1>
          <p style={{ fontSize: "1.05rem", fontWeight: 300, color: "rgba(255,255,255,0.75)", lineHeight: 1.85, maxWidth: 560 }}>
            The ISCJ Endowment Fund is a pool of gifted assets invested to generate
            recurring income — permanently funding the mission of our mosque and community
            for generations to come.
          </p>
        </Container>
      </section>

      {/* Vision + What it is */}
      <section style={{ padding: "80px 0" }}>
        <Container style={{ padding: "0 48px" }}>
          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2px" }}
            className="max-sm:!grid-cols-1"
          >
            <div style={{ background: "var(--navy)", padding: "48px 36px" }}>
              <span style={{ fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", display: "block", marginBottom: 16 }}>
                Vision
              </span>
              <h3 style={{ fontFamily: "var(--ff-head)", fontSize: "1.6rem", fontWeight: 400, color: "var(--white)", marginBottom: 16, lineHeight: 1.2 }}>
                $10 Million <em>Goal</em>
              </h3>
              <p style={{ fontSize: "0.9rem", fontWeight: 300, color: "rgba(255,255,255,0.7)", lineHeight: 1.8 }}>
                Our mission is to build a $10 million endowment by collecting, investing, and
                growing funds through halal investment vehicles — preserving principal while
                seeking modest 5–8% returns to spend on Masjid operations.
              </p>
            </div>
            <div style={{ background: "var(--white)", padding: "48px 36px" }}>
              <span style={{ fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", display: "block", marginBottom: 16 }}>
                What It Is
              </span>
              <h3 style={{ fontFamily: "var(--ff-head)", fontSize: "1.6rem", fontWeight: 400, color: "var(--navy)", marginBottom: 16, lineHeight: 1.2 }}>
                Income-Producing <em>Assets</em>
              </h3>
              <p style={{ fontSize: "0.9rem", fontWeight: 300, color: "var(--muted)", lineHeight: 1.8 }}>
                An endowment fund is a pool of money gifted to an institution. The assets
                — such as mutual funds, rental properties, and investments — generate
                recurring income that is spent on furthering the mission of ISCJ, while
                the principal is preserved and grown.
              </p>
            </div>
            <div style={{ background: "var(--surface)", padding: "48px 36px" }}>
              <span style={{ fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", display: "block", marginBottom: 16 }}>
                Benefits
              </span>
              <h3 style={{ fontFamily: "var(--ff-head)", fontSize: "1.6rem", fontWeight: 400, color: "var(--navy)", marginBottom: 20, lineHeight: 1.2 }}>
                Why It <em>Matters</em>
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {benefits.map((b, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 12 }}>
                    <span style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--gold)", flexShrink: 0, marginTop: 7 }} />
                    <span style={{ fontSize: "0.88rem", fontWeight: 300, color: "var(--muted)", lineHeight: 1.65 }}>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Ways to Give */}
      <section style={{ padding: "0 0 80px" }}>
        <Container style={{ padding: "0 48px" }}>
          <span className="section-label">Contribute</span>
          <h2 className="section-title" style={{ marginTop: 12, marginBottom: 48 }}>
            Ways to <em>Give</em>
          </h2>
          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "2px" }}
            className="max-sm:!grid-cols-1"
          >
            {waysToDonate.map((w, i) => (
              <div key={i} style={{ background: "var(--white)", padding: "40px 36px" }}>
                <div
                  style={{
                    fontFamily: "var(--ff-head)",
                    fontSize: "2.4rem",
                    fontWeight: 300,
                    color: "var(--gold)",
                    lineHeight: 1,
                    marginBottom: 16,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 style={{ fontFamily: "var(--ff-head)", fontSize: "1.3rem", fontWeight: 400, color: "var(--navy)", marginBottom: 12 }}>
                  {w.title}
                </h3>
                <p style={{ fontSize: "0.88rem", fontWeight: 300, color: "var(--muted)", lineHeight: 1.75 }}>
                  {w.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Contact CTA */}
      <section style={{ background: "var(--white)", borderTop: "1px solid var(--border)", padding: "64px 0" }}>
        <Container style={{ padding: "0 48px" }}>
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center" }}
            className="max-sm:!grid-cols-1"
          >
            <div>
              <span className="section-label">Invest in the Future</span>
              <h2 className="section-title" style={{ marginTop: 12, marginBottom: 16 }}>
                Build a Lasting <em>Legacy</em>
              </h2>
              <p style={{ fontSize: "1rem", fontWeight: 300, color: "var(--muted)", lineHeight: 1.8 }}>
                Every contribution to the ISCJ Endowment Fund is a form of Sadaqah Jariyah —
                ongoing charity whose rewards continue beyond your lifetime. Help us build a
                financially self-sustaining institution for future generations of Muslims in
                Central New Jersey.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div style={{ padding: "24px 28px", border: "1px solid var(--border)", borderRadius: 2 }}>
                <p style={{ fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 6 }}>
                  Endowment Office
                </p>
                <a href="mailto:endowment@iscj.org" style={{ fontFamily: "var(--ff-head)", fontSize: "1.1rem", color: "var(--navy)", textDecoration: "none" }}>
                  endowment@iscj.org
                </a>
              </div>
              <div style={{ padding: "24px 28px", border: "1px solid var(--border)", borderRadius: 2 }}>
                <p style={{ fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 6 }}>
                  Mailing Address
                </p>
                <p style={{ fontFamily: "var(--ff-head)", fontSize: "1rem", color: "var(--navy)", lineHeight: 1.5 }}>
                  P.O. Box 628<br />Monmouth Junction, NJ 08852
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
