import Container from "@/components/ui/Container";
import { assetPath } from "@/lib/assetPath";

const fields = [
  "Qur'anic Exegesis",
  "Hadith Sciences",
  "Comparative Islamic Law",
  "Principles of Jurisprudence",
  "Legal Maxims",
  "Objectives of Islamic Law",
  "Prophetic Biography (Seerah)",
  "Arabic Philology",
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
            Resident <em>Scholar</em>
          </h1>
          <p style={{ fontSize: "1.05rem", fontWeight: 300, color: "rgba(255,255,255,0.75)", lineHeight: 1.85, maxWidth: 560 }}>
            Shaykh Ismail Bowers brings a rare combination of classical Islamic scholarship
            and modern academic rigor to our community — guiding and inspiring the ISCJ
            community in their faith and daily lives.
          </p>
        </Container>
      </section>

      {/* Bio */}
      <section style={{ padding: "80px 0" }}>
        <Container style={{ padding: "0 48px" }}>
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px" }}
            className="max-sm:!grid-cols-1"
          >
            <div style={{ background: "var(--navy)", padding: "48px 36px" }}>
              <span style={{ fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", display: "block", marginBottom: 16 }}>
                Resident Scholar
              </span>
              <h2 style={{ fontFamily: "var(--ff-head)", fontSize: "2rem", fontWeight: 400, color: "var(--white)", marginBottom: 6, lineHeight: 1.1 }}>
                Shaykh Ismail Bowers
              </h2>
              <p style={{ fontSize: "0.78rem", fontWeight: 300, color: "var(--gold)", marginBottom: 24, letterSpacing: "0.05em" }}>
                University of Al-Qarawiyyin · Emory University · Oxford University
              </p>
              <p style={{ fontSize: "0.95rem", fontWeight: 300, color: "rgba(255,255,255,0.75)", lineHeight: 1.85, marginBottom: 16 }}>
                Born in Knoxville, Tennessee to an American convert father and a Moroccan
                mother from Fes, Shaykh Ismail Bowers completed a 12-year &lsquo;Alimiyyah
                degree at the University of Al-Qarawiyyin — one of the oldest universities
                in the world.
              </p>
              <p style={{ fontSize: "0.95rem", fontWeight: 300, color: "rgba(255,255,255,0.75)", lineHeight: 1.85 }}>
                He received Ij&#x101;zah licenses from prominent Moroccan scholars, then earned
                a Master&apos;s in Theology from Emory University (top of his class) and is
                currently pursuing a Ph.D. at Oxford&apos;s Faculty of Theology and Religion,
                researching Hadith and Islamic theology.
              </p>
            </div>

            <div style={{ background: "var(--white)", padding: "48px 36px" }}>
              <span style={{ fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", display: "block", marginBottom: 16 }}>
                Areas of Study
              </span>
              <h3 style={{ fontFamily: "var(--ff-head)", fontSize: "1.6rem", fontWeight: 400, color: "var(--navy)", marginBottom: 24 }}>
                Fields of <em>Scholarship</em>
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 28 }}>
                {fields.map((f) => (
                  <span
                    key={f}
                    style={{
                      fontSize: "0.82rem",
                      fontWeight: 300,
                      color: "var(--muted)",
                      background: "var(--surface)",
                      padding: "6px 14px",
                      borderRadius: 2,
                      border: "1px solid var(--border)",
                    }}
                  >
                    {f}
                  </span>
                ))}
              </div>
              <div style={{ borderTop: "1px solid var(--border)", paddingTop: 24 }}>
                <p style={{ fontSize: "0.72rem", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 10 }}>
                  Also
                </p>
                <p style={{ fontSize: "0.88rem", fontWeight: 300, color: "var(--muted)", lineHeight: 1.75 }}>
                  Co-founder of Pillars Seminary, where he has instructed hundreds of
                  students in Islamic sciences and Arabic. His academic background combined
                  with practical teaching experience uniquely positions him to guide and
                  inspire the community.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Contact */}
      <section style={{ background: "var(--white)", borderTop: "1px solid var(--border)", padding: "64px 0" }}>
        <Container style={{ padding: "0 48px" }}>
          <div style={{ maxWidth: 640 }}>
            <span className="section-label">Contact</span>
            <h2 className="section-title" style={{ marginTop: 12, marginBottom: 16 }}>
              Get in <em>Touch</em>
            </h2>
            <p style={{ fontSize: "1rem", fontWeight: 300, color: "var(--muted)", lineHeight: 1.8, marginBottom: 24 }}>
              For inquiries related to Islamic education, classes, or the resident scholar
              program, please contact the ISCJ administrative office.
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
