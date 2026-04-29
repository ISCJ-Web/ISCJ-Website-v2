import Container from "@/components/ui/Container";
import { assetPath } from "@/lib/assetPath";

const generalResources = [
  { name: "Why Islam", url: "https://www.whyislam.org", description: "Introduction to Islam for seekers and curious minds." },
  { name: "Islamic Society of North America (ISNA)", url: "https://www.isna.net", description: "One of the largest Muslim organizations in North America." },
  { name: "Islamic Circle of North America (ICNA)", url: "https://www.icna.org", description: "Community programs, education, and outreach." },
  { name: "IslamicFinder", url: "https://www.islamicfinder.org", description: "Prayer times, Qibla direction, and Islamic calendar." },
];

const quranResources = [
  { name: "Quran Flash", url: "https://www.quranflash.com", description: "Read the Quran online with multiple translations." },
  { name: "Quran Explorer", url: "https://www.quranexplorer.com", description: "Listen, read, and study the Quran with audio recitation." },
  { name: "Tanzil", url: "https://tanzil.info", description: "Quranic text with translations in dozens of languages." },
  { name: "Kids Land", url: "https://kids.farhathashmi.com", description: "Quranic learning resources designed for children." },
];

const otherResources = [
  { name: "Zabihah", url: "https://www.zabihah.com", description: "Find halal food and restaurants near you." },
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
          <span className="section-label">Education</span>
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
            Learn About <em>Islam</em>
          </h1>
          <p style={{ fontSize: "1.05rem", fontWeight: 300, color: "rgba(255,255,255,0.75)", lineHeight: 1.85, maxWidth: 560 }}>
            Whether you are a Muslim seeking to deepen your knowledge or a curious visitor
            exploring the faith, the resources below are a starting point. ISCJ does not
            endorse external sites — linking to them does not constitute endorsement.
          </p>
        </Container>
      </section>

      {/* General Resources */}
      <section style={{ padding: "80px 0" }}>
        <Container style={{ padding: "0 48px" }}>
          <span className="section-label">General Information</span>
          <h2 className="section-title" style={{ marginTop: 12, marginBottom: 48 }}>
            Islamic <em>Resources</em>
          </h2>
          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "2px" }}
            className="max-sm:!grid-cols-1"
          >
            {generalResources.map((r, i) => (
              <div
                key={i}
                style={{
                  background: i % 4 === 1 || i % 4 === 2 ? "var(--navy)" : "var(--white)",
                  padding: "36px 32px",
                }}
              >
                <a
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: "var(--ff-head)",
                    fontSize: "1.25rem",
                    fontWeight: 400,
                    color: i % 4 === 1 || i % 4 === 2 ? "var(--white)" : "var(--navy)",
                    textDecoration: "none",
                    display: "block",
                    marginBottom: 8,
                  }}
                >
                  {r.name} ↗
                </a>
                <p style={{ fontSize: "0.88rem", fontWeight: 300, color: i % 4 === 1 || i % 4 === 2 ? "rgba(255,255,255,0.6)" : "var(--muted)", lineHeight: 1.65, marginBottom: 12 }}>
                  {r.description}
                </p>
                <span style={{ fontSize: "0.72rem", color: "var(--gold)", fontWeight: 400 }}>{r.url.replace("https://www.", "").replace("https://", "")}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Quran Resources */}
      <section style={{ padding: "0 0 80px" }}>
        <Container style={{ padding: "0 48px" }}>
          <span className="section-label">The Qur&apos;an</span>
          <h2 className="section-title" style={{ marginTop: 12, marginBottom: 48 }}>
            Qur&apos;an <em>Resources</em>
          </h2>
          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "2px" }}
            className="max-sm:!grid-cols-1"
          >
            {quranResources.map((r, i) => (
              <div
                key={i}
                style={{
                  background: i % 2 === 0 ? "var(--white)" : "var(--navy)",
                  padding: "36px 32px",
                }}
              >
                <a
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: "var(--ff-head)",
                    fontSize: "1.25rem",
                    fontWeight: 400,
                    color: i % 2 === 0 ? "var(--navy)" : "var(--white)",
                    textDecoration: "none",
                    display: "block",
                    marginBottom: 8,
                  }}
                >
                  {r.name} ↗
                </a>
                <p style={{ fontSize: "0.88rem", fontWeight: 300, color: i % 2 === 0 ? "var(--muted)" : "rgba(255,255,255,0.6)", lineHeight: 1.65, marginBottom: 12 }}>
                  {r.description}
                </p>
                <span style={{ fontSize: "0.72rem", color: "var(--gold)", fontWeight: 400 }}>{r.url.replace("https://www.", "").replace("https://", "")}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Other + Disclaimer */}
      <section style={{ padding: "0 0 80px" }}>
        <Container style={{ padding: "0 48px" }}>
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px" }}
            className="max-sm:!grid-cols-1"
          >
            <div style={{ background: "var(--white)", padding: "40px 36px" }}>
              <span style={{ fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", display: "block", marginBottom: 16 }}>
                Additional
              </span>
              {otherResources.map((r) => (
                <div key={r.name}>
                  <a
                    href={r.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontFamily: "var(--ff-head)", fontSize: "1.2rem", color: "var(--navy)", textDecoration: "none", display: "block", marginBottom: 8 }}
                  >
                    {r.name} ↗
                  </a>
                  <p style={{ fontSize: "0.88rem", fontWeight: 300, color: "var(--muted)", lineHeight: 1.65 }}>{r.description}</p>
                </div>
              ))}
            </div>
            <div style={{ background: "var(--navy)", padding: "40px 36px" }}>
              <span style={{ fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", display: "block", marginBottom: 16 }}>
                Disclaimer
              </span>
              <p style={{ fontSize: "0.95rem", fontWeight: 300, color: "rgba(255,255,255,0.75)", lineHeight: 1.85 }}>
                Our linking to an external website does not constitute an endorsement of
                that site or the organization it represents. ISCJ provides these links
                as a convenience and starting point for Islamic learning only.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
