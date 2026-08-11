import Container from "@/components/ui/Container";
import { assetPath } from "@/lib/assetPath";

const milestones = [
  {
    era: "Late 1970s and 1980s",
    title: "The Early Years",
    body: "Beginning in the late 1970s and 1980s, women served the ISCJ Board selflessly and with distinction. Sr. Azra Shahidi, followed by Sr. Raafat Ahmad and Sr. Atyaat El-Saady, served the ISCJ as Trustees, and Sr. Aziza Badr as an Overseer. These women have since retired from the ISCJ community.",
  },
  {
    era: "The 1990s",
    title: "Trustees and Overseers",
    body: "In the 1990s, Sr. Sogra Saleem and Sr. Nadia Younes served as Trustees. Other women such as Sr. Fatima Aziz, Sr. Afaf Fayoumy, Sr. Reem Fakhry, Sr. Uzma Mehmood, Sr. Sadia Ansari, Sr. Azra Ahmed, and Sr. Durriya Asghar worked as Overseers, and Sr. Naheed Rehmat as a Trustee. Many of these sisters are still active in different ISCJ committees.",
  },
  {
    era: "April 2012",
    title: "The First Chairperson",
    body: "At the Annual General Body Meeting on April 15, 2012, members of the ISCJ elected new Trustees and Overseers. Two weeks later the new Board of Trustees met and elected the executive committee, and for the first time in the 37-year history of ISCJ, a female, Sr. Atiya Aftab, was elected Chairperson. She is not only the first woman to hold this leadership position; she is also the first second-generation Muslim American to lead the ISCJ. An attorney by profession and one of the early graduates of the ISCJ weekend school, Sr. Atiya served over 15 years as a Trustee and an Overseer, served as Secretary of the ISCJ Board for several years with distinction, and led the ISCJ as its Acting President and Chairperson. She is an inspiration to young Muslim Americans.",
  },
  {
    era: "The Second Generation",
    title: "Following Her Lead",
    body: "Following Sr. Atiya's lead, several other second-generation sisters have served the ISCJ in important capacities. Sr. Dalya Youssef has served the ISCJ as an Overseer and a Trustee. Sr. Rabia Saeed, Sr. Azra Baig, and Sr. Rabia Ahmed recently finished their terms as Overseers. Sr. Omayma Mansour served as a Trustee and Sr. Mona Abdala was an Overseer in the past. Sr. Mona is currently a full-time teacher, and Sr. Omayma a part-time teacher, at the Noor-Ul-Iman School.",
  },
  {
    era: "April 2014",
    title: "The First Woman Treasurer",
    body: "In April 2014 there was another milestone in the history of women at ISCJ. Two women, Sr. Tabassum Khan and Sr. Heba Macksoud, were elected to the position of Trustee, making a total of three women serving as Trustee in a given year. Not only that, Sr. Tabassum Khan, CPA, holds the position of Treasurer as a woman for the first time.",
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
            Women are an integral part of the Islamic Society of Central Jersey.
            Twenty-three women have served the ISCJ as Trustee or Overseer, and the
            overwhelming majority of the teachers at the ISCJ Weekend School and the
            full-time Noor-Ul-Iman School are women.
          </p>
          <p style={{ fontSize: "0.85rem", fontWeight: 400, letterSpacing: "0.05em", color: "var(--gold)" }}>
            By Dr. Sogra Saleem, ISCJ Founding Member · May 2014
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
                Besides those named, there are several other women who have served the
                committees tirelessly and continue to do so. ISCJ acknowledges and
                appreciates their contributions to its success. Most of these women are
                wives and working mothers; there are a few who are young and pursuing
                higher education. Their professions include physicians, lawyers,
                educators, social workers, accountants, nutritionists, office workers,
                and nurses.
              </p>
              <p style={{ fontSize: "1rem", fontWeight: 300, fontStyle: "italic", color: "var(--muted)", lineHeight: 1.8, marginBottom: 24 }}>
                &ldquo;Please volunteer and serve Islam and be rewarded by Allah subhana wa
                ta&rsquo;ala. You may inspire and be a role model to your own children, and
                those of your friends. It is my earnest hope that more sisters follow in
                the footsteps of their predecessors, seek elective office, join
                committees, and take the ISCJ to new heights.&rdquo;
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
                This page is adapted from the original article by Dr. Sogra Saleem, ISCJ
                Founding Member, Member of the Board of Overseers, past Member of the
                ISCJ Board of Trustees, and past Member of the Noor-Ul-Iman Schools Board
                of Directors.
              </p>
              <a
                href={assetPath("/documents/history-of-women-at-iscj.pdf")}
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
                Download the PDF
              </a>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
