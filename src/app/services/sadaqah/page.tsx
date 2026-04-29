import Container from "@/components/ui/Container";
import { assetPath } from "@/lib/assetPath";

const whatItFunds = [
  "Mosque construction and expansion",
  "Financial assistance for families and students in need",
  "Health clinic development and equipment",
  "Educational institutions and schools",
  "Water projects enabling community development",
];

const requirements = [
  "Complete the application thoroughly in English",
  "Document your explanation of financial need",
  "Provide your current year tax return (Form 1040)",
  "Attach a copy of your Social Security Card",
  "Supply supporting documentation: disability statements, welfare letters, unemployment records, employment stubs, unpaid bills, etc.",
];

const donationMethods = [
  { label: "Venmo", value: "@iscj-nj" },
  { label: "Zelle", value: "accounting@iscj.org" },
  { label: "PayPal", value: "accounting@iscj.org" },
  { label: "Check", value: "Payable to Islamic Society of Central Jersey" },
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
            Sadaqah <em>Jariyah</em>
          </h1>
          <blockquote
            style={{ borderLeft: "2px solid var(--gold)", paddingLeft: 20, margin: "0 0 28px", maxWidth: 580 }}
          >
            <p
              style={{
                fontFamily: "var(--ff-head)",
                fontSize: "clamp(1rem, 2vw, 1.15rem)",
                fontWeight: 300,
                fontStyle: "italic",
                color: "rgba(255,255,255,0.85)",
                lineHeight: 1.7,
                marginBottom: 8,
              }}
            >
              &ldquo;The likeness of those who spend their wealth in the way of Allah is as
              the likeness of a grain of corn; it grows seven ears, and each ear has a
              hundred grains.&rdquo;
            </p>
            <cite style={{ fontSize: "0.72rem", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold)", fontStyle: "normal" }}>
              Qur&apos;an 2:261
            </cite>
          </blockquote>
          <p style={{ fontSize: "1.05rem", fontWeight: 300, color: "rgba(255,255,255,0.7)", lineHeight: 1.85, maxWidth: 560 }}>
            Sadaqah Jariyah — ongoing charity — is among the greatest acts in Islam. The
            Prophet ﷺ said: &ldquo;When a son of Adam dies, then his good deeds stop except
            for three: a Sadaqah Jariyah.&rdquo; Your generosity today creates blessings
            that continue long after.
          </p>
        </Container>
      </section>

      {/* What it funds + Application */}
      <section style={{ padding: "80px 0" }}>
        <Container style={{ padding: "0 48px" }}>
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px" }}
            className="max-sm:!grid-cols-1"
          >
            <div style={{ background: "var(--white)", padding: "48px 36px" }}>
              <span style={{ fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", display: "block", marginBottom: 16 }}>
                Where It Goes
              </span>
              <h3 style={{ fontFamily: "var(--ff-head)", fontSize: "1.6rem", fontWeight: 400, color: "var(--navy)", marginBottom: 24 }}>
                What Sadaqah <em>Funds</em>
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {whatItFunds.map((item, i) => (
                  <li
                    key={i}
                    style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 14, paddingBottom: 14, borderBottom: "1px solid var(--border)" }}
                  >
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--gold)", flexShrink: 0, marginTop: 7 }} />
                    <span style={{ fontSize: "0.95rem", fontWeight: 300, color: "var(--muted)", lineHeight: 1.65 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ background: "var(--navy)", padding: "48px 36px" }}>
              <span style={{ fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", display: "block", marginBottom: 16 }}>
                Assistance Available
              </span>
              <h3 style={{ fontFamily: "var(--ff-head)", fontSize: "1.6rem", fontWeight: 400, color: "var(--white)", marginBottom: 16 }}>
                Apply for <em>Aid</em>
              </h3>
              <p style={{ fontSize: "0.88rem", fontWeight: 300, color: "rgba(255,255,255,0.65)", lineHeight: 1.75, marginBottom: 20 }}>
                If you are in need of financial assistance, you may apply for Sadaqah support.
                Allow 2–3 weeks for processing. Gather the following documents:
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {requirements.map((item, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 12 }}>
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--gold)", flexShrink: 0, marginTop: 7 }} />
                    <span style={{ fontSize: "0.85rem", fontWeight: 300, color: "rgba(255,255,255,0.7)", lineHeight: 1.65 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* How to Donate */}
      <section style={{ padding: "0 0 80px" }}>
        <Container style={{ padding: "0 48px" }}>
          <span className="section-label">Give</span>
          <h2 className="section-title" style={{ marginTop: 12, marginBottom: 48 }}>
            How to <em>Donate</em>
          </h2>
          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "2px" }}
            className="max-sm:!grid-cols-1"
          >
            {donationMethods.map((m) => (
              <div key={m.label} style={{ background: "var(--white)", padding: "36px 28px" }}>
                <p style={{ fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 12 }}>
                  {m.label}
                </p>
                <p style={{ fontFamily: "var(--ff-head)", fontSize: "1rem", color: "var(--navy)", lineHeight: 1.5 }}>
                  {m.value}
                </p>
              </div>
            ))}
          </div>
          <div
            style={{ background: "var(--navy)", padding: "32px 36px", marginTop: 2, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 32, flexWrap: "wrap" }}
          >
            <p style={{ fontSize: "0.95rem", fontWeight: 300, color: "rgba(255,255,255,0.8)", lineHeight: 1.7, maxWidth: 560 }}>
              Donate for yourself or on behalf of a loved one. Your reward with Allah
              (SWT) will continue, insha&apos;Allah.
            </p>
            <a
              href="mailto:zakat@iscj.org"
              style={{ color: "var(--gold)", fontFamily: "var(--ff-head)", fontSize: "1rem", textDecoration: "none", flexShrink: 0 }}
            >
              zakat@iscj.org
            </a>
          </div>
        </Container>
      </section>
    </main>
  );
}
