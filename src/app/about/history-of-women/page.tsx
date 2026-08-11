import Container from "@/components/ui/Container";
import { assetPath } from "@/lib/assetPath";

const milestones = [
  {
    era: "Late 1970s–1980s",
    title: "The Pioneers",
    body: "Sr. Azra Shahidi, followed by Sr. Raafat Ahmad and Sr. Atyaat El-Saady, served the ISCJ as Trustees, and Sr. Aziza Badr as an Overseer — women who served the ISCJ Board selflessly and with distinction.",
  },
  {
    era: "1990s",
    title: "Growing Leadership",
    body: "Sr. Sogra Saleem and Sr. Nadia Younes served as Trustees, and Sr. Naheed Rehmat as a Trustee. Sr. Fatima Aziz, Sr. Afaf Fayoumy, Sr. Reem Fakhry, Sr. Uzma Mehmood, Sr. Sadia Ansari, Sr. Azra Ahmed, and Sr. Durriya Asghar worked as Overseers. Many of these sisters remain active in ISCJ committees.",
  },
  {
    era: "April 2012",
    title: "A Historic First",
    body: "For the first time in ISCJ's 37-year history, a woman — Sr. Atiya Aftab — was elected Chairperson. She was also the first second-generation Muslim American to lead the ISCJ. An attorney by profession and an early graduate of the ISCJ weekend school, she had served over 15 years as Trustee and Overseer, as Board Secretary, and as Acting President and Chairperson.",
  },
  {
    era: "The Next Generation",
    title: "Following the Lead",
    body: "Sr. Dalya Youssef served as an Overseer and a Trustee. Sr. Rabia Saeed, Sr. Azra Baig, and Sr. Rabia Ahmed completed terms as Overseers. Sr. Omayma Mansour served as a Trustee and Sr. Mona Abdala as an Overseer — both now teach at the Noor-Ul-Iman School.",
  },
  {
    era: "April 2014",
    title: "Another Milestone",
    body: "Sr. Tabassum Khan and Sr. Heba Macksoud were elected Trustees — making three women Trustees in a single year. Sr. Tabassum Khan, CPA, became the first woman to hold the position of Treasurer.",
  },
];

const stats = [
  { value: "23", label: "Women who have served as Trustee or Overseer" },
  { value: "21", label: "ISCJ committees to get involved in", dark: true },
  { value: "1st", label: "Woman Chairperson elected in 2012" },
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
              maxWidth: 640,
            }}
          >
            History of <em>Women at ISCJ</em>
          </h1>
          <p style={{ fontSize: "1.05rem", fontWeight: 300, color: "rgba(255,255,255,0.75)", lineHeight: 1.85, maxWidth: 560, marginBottom: 12 }}>
            Women are an integral part of the Islamic Society of Central Jersey — serving
            as Trustees, Overseers, committee members, and the overwhelming majority of
            teachers at the ISCJ Weekend School and Noor-Ul-Iman School.
          </p>
          <p style={{ fontSize: "0.85rem", fontWeight: 400, letterSpacing: "0.05em", color: "var(--gold)" }}>
            By Dr. Sogra Saleem — ISCJ Founding Member · May 2014
          </p>
        </Container>
      </section>

      {/* Milestones */}
      <section style={{ padding: "80px 0" }}>
        <Container style={{ padding: "0 48px" }}>
          <span className="section-label">Milestones</span>
          <h2 className="section-title" style={{ marginTop: 12, marginBottom: 48 }}>
            Decades of <em>Service</em>
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {milestones.map((m, i) => (
              <div
                key={m.era}
                style={{
                  background: i % 2 === 0 ? "var(--white)" : "var(--navy)",
                  padding: "40px 36px",
                  display: "grid",
                  gridTemplateColumns: "200px 1fr",
                  gap: 32,
                  alignItems: "start",
                }}
                className="max-sm:!grid-cols-1"
              >
                <div>
                  <p style={{ fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 8 }}>
                    {m.era}
                  </p>
                  <p style={{ fontFamily: "var(--ff-head)", fontSize: "1.35rem", fontWeight: 400, color: i % 2 === 0 ? "var(--navy)" : "var(--white)", lineHeight: 1.25 }}>
                    {m.title}
                  </p>
                </div>
                <p style={{ fontSize: "0.95rem", fontWeight: 300, color: i % 2 === 0 ? "var(--muted)" : "rgba(255,255,255,0.75)", lineHeight: 1.85 }}>
                  {m.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Stats */}
      <section style={{ padding: "0 0 80px" }}>
        <Container style={{ padding: "0 48px" }}>
          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2px" }}
            className="max-sm:!grid-cols-1"
          >
            {stats.map((s) => (
              <div
                key={s.label}
                style={{ background: s.dark ? "var(--navy)" : "var(--white)", padding: "40px 32px" }}
              >
                <div style={{ fontFamily: "var(--ff-head)", fontSize: "3rem", fontWeight: 300, color: s.dark ? "var(--white)" : "var(--navy)", lineHeight: 1 }}>
                  {s.value}
                </div>
                <div style={{ fontSize: "0.82rem", fontWeight: 400, letterSpacing: "0.04em", color: s.dark ? "rgba(255,255,255,0.55)" : "var(--muted)", marginTop: 10, lineHeight: 1.5 }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Get Involved + Download */}
      <section style={{ background: "var(--white)", borderTop: "1px solid var(--border)", padding: "64px 0" }}>
        <Container style={{ padding: "0 48px" }}>
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "start" }}
            className="max-sm:!grid-cols-1"
          >
            <div>
              <span className="section-label">Get Involved</span>
              <h2 className="section-title" style={{ marginTop: 12, marginBottom: 16 }}>
                Serve &amp; <em>Inspire</em>
              </h2>
              <p style={{ fontSize: "1rem", fontWeight: 300, color: "var(--muted)", lineHeight: 1.8, marginBottom: 16 }}>
                The women who serve ISCJ include physicians, lawyers, educators, social
                workers, accountants, nutritionists, office workers, and nurses — most of
                them wives and working mothers, and some young students pursuing higher
                education.
              </p>
              <p style={{ fontSize: "1rem", fontWeight: 300, color: "var(--muted)", lineHeight: 1.8, marginBottom: 24 }}>
                By volunteering, a sister not only helps ISCJ but also enriches her own
                life — inspiring her own children and those of her friends. Sisters young
                and not so young are encouraged to seek elective office, join committees,
                and take the ISCJ to new heights.
              </p>
              <a href="mailto:volunteers@iscj.org" style={{ fontFamily: "var(--ff-head)", fontSize: "1.2rem", color: "var(--navy)", textDecoration: "none" }}>
                volunteers@iscj.org
              </a>
            </div>
            <div>
              <span className="section-label">Original Article</span>
              <h2 className="section-title" style={{ marginTop: 12, marginBottom: 16 }}>
                Read the <em>Full Story</em>
              </h2>
              <p style={{ fontSize: "1rem", fontWeight: 300, color: "var(--muted)", lineHeight: 1.8, marginBottom: 24 }}>
                This page is adapted from the original article by Dr. Sogra Saleem — ISCJ
                Founding Member, Member of the Board of Overseers, and past Member of the
                Board of Trustees and the Noor-Ul-Iman Schools Board of Directors.
              </p>
              <a
                href={assetPath("/documents/history-of-women-at-iscj.pdf")}
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
                Download the PDF
              </a>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
