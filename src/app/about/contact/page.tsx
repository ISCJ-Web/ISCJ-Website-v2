import Container from "@/components/ui/Container";
import { assetPath } from "@/lib/assetPath";

const phones = [
  { label: "Administration", value: "732-329-6995 (Option 2)" },
  { label: "Accounting", value: "732-329-6995 (Option 3)" },
  { label: "Imam", value: "732-329-6995 (Option 4)" },
  { label: "Zakat", value: "732-329-6995 (Option 5)" },
  { label: "Fax", value: "732-329-1988" },
  { label: "Zakat Fax", value: "732-510-5299" },
];

const emails = [
  { label: "General Inquiry", value: "admin@iscj.org", href: "mailto:admin@iscj.org" },
  { label: "Advertise With Us", value: "advertising@iscj.org", href: "mailto:advertising@iscj.org" },
  { label: "Volunteer", value: "volunteers@iscj.org", href: "mailto:volunteers@iscj.org" },
  { label: "Imam", value: "imam@iscj.org", href: "mailto:imam@iscj.org" },
  { label: "Feedback", value: "feedback@iscj.org", href: "mailto:feedback@iscj.org" },
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
            Contact <em>Us</em>
          </h1>
          <p style={{ fontSize: "1.05rem", fontWeight: 300, color: "rgba(255,255,255,0.75)", lineHeight: 1.85, maxWidth: 560 }}>
            Reach out to the ISCJ office for any inquiries, services, or general information.
            We look forward to hearing from you.
          </p>
        </Container>
      </section>

      {/* Phone + Email */}
      <section style={{ padding: "80px 0" }}>
        <Container style={{ padding: "0 48px" }}>
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px" }}
            className="max-sm:!grid-cols-1"
          >
            {/* Phone */}
            <div style={{ background: "var(--navy)", padding: "48px 36px" }}>
              <span style={{ fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", display: "block", marginBottom: 16 }}>
                Phone
              </span>
              <h3 style={{ fontFamily: "var(--ff-head)", fontSize: "1.6rem", fontWeight: 400, color: "var(--white)", marginBottom: 28 }}>
                Call <em>the Office</em>
              </h3>
              {phones.map((p) => (
                <div key={p.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "13px 0", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                  <span style={{ fontSize: "0.78rem", fontWeight: 400, color: "rgba(255,255,255,0.5)", letterSpacing: "0.05em" }}>{p.label}</span>
                  <span style={{ fontFamily: "var(--ff-head)", fontSize: "0.95rem", color: "var(--white)" }}>{p.value}</span>
                </div>
              ))}
            </div>

            {/* Email */}
            <div style={{ background: "var(--white)", padding: "48px 36px" }}>
              <span style={{ fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", display: "block", marginBottom: 16 }}>
                Email
              </span>
              <h3 style={{ fontFamily: "var(--ff-head)", fontSize: "1.6rem", fontWeight: 400, color: "var(--navy)", marginBottom: 28 }}>
                Email <em>Us</em>
              </h3>
              {emails.map((e) => (
                <div key={e.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "13px 0", borderBottom: "1px solid var(--border)", gap: 16 }}>
                  <span style={{ fontSize: "0.78rem", fontWeight: 400, color: "var(--muted)", letterSpacing: "0.05em", flexShrink: 0 }}>{e.label}</span>
                  <a href={e.href} style={{ fontFamily: "var(--ff-head)", fontSize: "0.95rem", color: "var(--navy)", textDecoration: "none", textAlign: "right" }}>{e.value}</a>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Address */}
      <section style={{ padding: "0 0 80px" }}>
        <Container style={{ padding: "0 48px" }}>
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px" }}
            className="max-sm:!grid-cols-1"
          >
            <div style={{ background: "var(--surface)", padding: "40px 36px", border: "1px solid var(--border)" }}>
              <p style={{ fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 12 }}>
                Physical Address
              </p>
              <p style={{ fontFamily: "var(--ff-head)", fontSize: "1.2rem", color: "var(--navy)", lineHeight: 1.6 }}>
                4145 Route 1 South &amp; Promenade Blvd<br />
                Monmouth Junction, NJ 08852-0628
              </p>
            </div>
            <div style={{ background: "var(--surface)", padding: "40px 36px", border: "1px solid var(--border)" }}>
              <p style={{ fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 12 }}>
                Mailing Address
              </p>
              <p style={{ fontFamily: "var(--ff-head)", fontSize: "1.2rem", color: "var(--navy)", lineHeight: 1.6 }}>
                P.O. Box 628<br />
                Monmouth Junction, NJ 08852-0628
              </p>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
