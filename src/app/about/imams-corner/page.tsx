import Container from "@/components/ui/Container";
import { assetPath } from "@/lib/assetPath";

const responsibilities = [
  "Daily, Friday, and Eid Prayers",
  "Funeral and Wedding Services",
  "Interfaith Activities and Dialogue",
  "Teaching Islamic Culture and Traditions",
  "Community Counseling and Guidance",
];

const accomplishments = [
  "Appointed to the Governor's Leadership Summit on Diversity",
  "Invited to deliver the opening prayer at Congress",
  "Guest at the President's State of the Union",
  "Multiple awards from local, state, and national organizations",
  "Active member of the North and South Brunswick Diversity Committee",
  "Member of the South Brunswick Clergy Association",
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
            Imam&apos;s <em>Corner</em>
          </h1>
          <p style={{ fontSize: "1.05rem", fontWeight: 300, color: "rgba(255,255,255,0.75)", lineHeight: 1.85, maxWidth: 560 }}>
            Imam Hamad Ahmad Chebli has served as the religious leader of the Islamic Society
            of Central Jersey since 1986, becoming an indispensable part of interfaith
            dialogue throughout Central New Jersey and beyond.
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
                Biography
              </span>
              <h2 style={{ fontFamily: "var(--ff-head)", fontSize: "2rem", fontWeight: 400, color: "var(--white)", marginBottom: 6, lineHeight: 1.1 }}>
                Imam Hamad Ahmad Chebli
              </h2>
              <p style={{ fontSize: "0.78rem", fontWeight: 300, color: "var(--gold)", marginBottom: 24, letterSpacing: "0.05em" }}>
                ISCJ Imam since 1986
              </p>
              <p style={{ fontSize: "0.95rem", fontWeight: 300, color: "rgba(255,255,255,0.75)", lineHeight: 1.85, marginBottom: 16 }}>
                Imam Chebli grew up in Lebanon and attended Al-Azhar University in Cairo,
                Egypt, where he earned a Master&apos;s degree in Islamic Canonical Law.
              </p>
              <p style={{ fontSize: "0.95rem", fontWeight: 300, color: "rgba(255,255,255,0.75)", lineHeight: 1.85 }}>
                With a commanding presence and deep scholarly grounding, he has served
                the ISCJ community for nearly four decades and has become a leading
                voice in interfaith cooperation across New Jersey.
              </p>
            </div>

            <div style={{ background: "var(--white)", padding: "48px 36px" }}>
              <span style={{ fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", display: "block", marginBottom: 16 }}>
                Responsibilities
              </span>
              <h3 style={{ fontFamily: "var(--ff-head)", fontSize: "1.6rem", fontWeight: 400, color: "var(--navy)", marginBottom: 24 }}>
                Services <em>Offered</em>
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {responsibilities.map((r) => (
                  <li key={r} style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 14, paddingBottom: 14, borderBottom: "1px solid var(--border)" }}>
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--gold)", flexShrink: 0, marginTop: 7 }} />
                    <span style={{ fontSize: "0.95rem", fontWeight: 300, color: "var(--muted)", lineHeight: 1.65 }}>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Accomplishments + Contact */}
      <section style={{ padding: "0 0 80px" }}>
        <Container style={{ padding: "0 48px" }}>
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px" }}
            className="max-sm:!grid-cols-1"
          >
            <div style={{ background: "var(--surface)", padding: "48px 36px", border: "1px solid var(--border)" }}>
              <span style={{ fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", display: "block", marginBottom: 16 }}>
                Recognition
              </span>
              <h3 style={{ fontFamily: "var(--ff-head)", fontSize: "1.5rem", fontWeight: 400, color: "var(--navy)", marginBottom: 24 }}>
                Key <em>Accomplishments</em>
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {accomplishments.map((a) => (
                  <li key={a} style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 12 }}>
                    <span style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--gold)", flexShrink: 0, marginTop: 8 }} />
                    <span style={{ fontSize: "0.88rem", fontWeight: 300, color: "var(--muted)", lineHeight: 1.65 }}>{a}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ background: "var(--white)", padding: "48px 36px", border: "1px solid var(--border)" }}>
              <span style={{ fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", display: "block", marginBottom: 16 }}>
                Contact the Imam
              </span>
              <h3 style={{ fontFamily: "var(--ff-head)", fontSize: "1.5rem", fontWeight: 400, color: "var(--navy)", marginBottom: 28 }}>
                Get in <em>Touch</em>
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {[
                  { label: "Mosque", value: "732-329-6995 (Option 4)", href: "tel:7323296995" },
                  { label: "Home", value: "732-329-2400", href: "tel:7323292400" },
                  { label: "Email", value: "imam@iscj.org", href: "mailto:imam@iscj.org" },
                ].map((c) => (
                  <div key={c.label} style={{ padding: "16px 0", borderBottom: "1px solid var(--border)" }}>
                    <p style={{ fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 4 }}>{c.label}</p>
                    <a href={c.href} style={{ fontFamily: "var(--ff-head)", fontSize: "1.05rem", color: "var(--navy)", textDecoration: "none" }}>{c.value}</a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
