import Container from "@/components/ui/Container";
import { assetPath } from "@/lib/assetPath";

const requirements = [
  "Complete all application sections accurately",
  "Thoroughly document your explanation of financial need",
  "Provide your current year tax return (Form 1040)",
  "Attach a copy of your Social Security Card",
  "Supply supporting documentation as applicable: disability check stubs, welfare payment records, unemployment stubs, Social Security benefits proof, food stamp benefits proof, employment stubs, unpaid bill copies, or veteran benefit documents",
];

const submissionMethods = [
  { label: "Online", value: "Submit Application Form", href: "https://forms.gle/G8ga2JvBF7zNponx7" },
  { label: "Email", value: "zakat@iscj.org", href: "mailto:zakat@iscj.org" },
  { label: "Fax", value: "732-510-5299", href: null },
  { label: "Mail", value: "P.O. Box 628\nMonmouth Junction, NJ 08852", href: null },
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
            Zakat <em>Assistance</em>
          </h1>
          <blockquote
            style={{
              borderLeft: "2px solid var(--gold)",
              paddingLeft: 20,
              margin: "0 0 28px",
              maxWidth: 580,
            }}
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
              &ldquo;Surely they who believe and do good deeds and keep up prayer and pay the
              poor-rate — they shall have their reward from their Lord.&rdquo;
            </p>
            <cite
              style={{
                fontSize: "0.72rem",
                fontWeight: 500,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--gold)",
                fontStyle: "normal",
              }}
            >
              Qur&apos;an 2:277
            </cite>
          </blockquote>
          <p
            style={{
              fontSize: "1.05rem",
              fontWeight: 300,
              color: "rgba(255,255,255,0.7)",
              lineHeight: 1.85,
              maxWidth: 560,
            }}
          >
            Zakat is an obligatory act ordained by Allah for every Muslim who is able to
            give. ISCJ collects and distributes Zakat to assist the neediest members of our
            community. If you are in need, we encourage you to apply.
          </p>
        </Container>
      </section>

      {/* What is Zakat + Requirements */}
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
                What is Zakat?
              </span>
              <h2
                style={{
                  fontFamily: "var(--ff-head)",
                  fontSize: "1.8rem",
                  fontWeight: 400,
                  color: "var(--white)",
                  marginBottom: 20,
                  lineHeight: 1.2,
                }}
              >
                The Third <em>Pillar of Islam</em>
              </h2>
              <p
                style={{
                  fontSize: "0.95rem",
                  fontWeight: 300,
                  color: "rgba(255,255,255,0.75)",
                  lineHeight: 1.8,
                  marginBottom: 16,
                }}
              >
                Zakat is an obligatory act for every Muslim who possesses wealth above the
                Nisab threshold. It represents giving a portion of one&apos;s wealth to assist
                the poorest and most needy members of the community.
              </p>
              <p
                style={{
                  fontSize: "0.88rem",
                  fontWeight: 300,
                  fontStyle: "italic",
                  color: "rgba(255,255,255,0.6)",
                  lineHeight: 1.75,
                  marginBottom: 24,
                }}
              >
                &ldquo;As-Sadaqat are only for the Fuqara&apos; (poor), and Al-Masakeen (the
                Needy)&rdquo; — Surah At-Taubah 9:60
              </p>
              <div style={{ borderTop: "1px solid rgba(255,255,255,0.12)", paddingTop: 20 }}>
                <p
                  style={{
                    fontSize: "0.72rem",
                    fontWeight: 500,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "var(--gold)",
                    marginBottom: 8,
                  }}
                >
                  Processing Time
                </p>
                <p
                  style={{
                    fontSize: "0.88rem",
                    fontWeight: 300,
                    color: "rgba(255,255,255,0.65)",
                    lineHeight: 1.7,
                  }}
                >
                  Allow 2–3 weeks for your application to be reviewed. Status inquiries
                  will receive a response within 1–3 business days.
                </p>
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
                Application Requirements
              </span>
              <h3
                style={{
                  fontFamily: "var(--ff-head)",
                  fontSize: "1.6rem",
                  fontWeight: 400,
                  color: "var(--navy)",
                  marginBottom: 24,
                }}
              >
                What to <em>Submit</em>
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {requirements.map((item, i) => (
                  <li
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 12,
                      marginBottom: 14,
                      paddingBottom: 14,
                      borderBottom: "1px solid var(--border)",
                    }}
                  >
                    <span
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        background: "var(--gold)",
                        flexShrink: 0,
                        marginTop: 7,
                      }}
                    />
                    <span style={{ fontSize: "0.88rem", fontWeight: 300, color: "var(--muted)", lineHeight: 1.65 }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Submission methods */}
      <section style={{ padding: "0 0 80px" }}>
        <Container style={{ padding: "0 48px" }}>
          <span className="section-label">How to Apply</span>
          <h2 className="section-title" style={{ marginTop: 12, marginBottom: 48 }}>
            Submission <em>Methods</em>
          </h2>
          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "2px" }}
            className="max-sm:!grid-cols-1"
          >
            {submissionMethods.map((m) => (
              <div key={m.label} style={{ background: "var(--white)", padding: "36px 28px" }}>
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
                  {m.label}
                </p>
                {m.href ? (
                  <a
                    href={m.href}
                    style={{
                      fontFamily: "var(--ff-head)",
                      fontSize: "1rem",
                      color: "var(--navy)",
                      textDecoration: "none",
                      lineHeight: 1.5,
                    }}
                  >
                    {m.value}
                  </a>
                ) : (
                  <p
                    style={{
                      fontFamily: "var(--ff-head)",
                      fontSize: "1rem",
                      color: "var(--navy)",
                      lineHeight: 1.5,
                      whiteSpace: "pre-line",
                    }}
                  >
                    {m.value}
                  </p>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--white)", borderTop: "1px solid var(--border)", padding: "64px 0" }}>
        <Container style={{ padding: "0 48px" }}>
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center" }}
            className="max-sm:!grid-cols-1"
          >
            <div>
              <span className="section-label">No One Turned Away</span>
              <h2 className="section-title" style={{ marginTop: 12, marginBottom: 16 }}>
                Need Help? <em>We&apos;re Here.</em>
              </h2>
              <p style={{ fontSize: "1rem", fontWeight: 300, color: "var(--muted)", lineHeight: 1.8 }}>
                ISCJ is committed to supporting community members in need. If you cannot
                afford services or are experiencing hardship, Zakat assistance is available.
                Reach out to our office and we will guide you through the process.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div style={{ padding: "24px 28px", border: "1px solid var(--border)", borderRadius: 2 }}>
                <p style={{ fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 6 }}>
                  Zakat Office
                </p>
                <a href="mailto:zakat@iscj.org" style={{ fontFamily: "var(--ff-head)", fontSize: "1.1rem", color: "var(--navy)", textDecoration: "none" }}>
                  zakat@iscj.org
                </a>
              </div>
              <div style={{ padding: "24px 28px", border: "1px solid var(--border)", borderRadius: 2 }}>
                <p style={{ fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 6 }}>
                  Phone
                </p>
                <a href="tel:7323296995" style={{ fontFamily: "var(--ff-head)", fontSize: "1.1rem", color: "var(--navy)", textDecoration: "none" }}>
                  732-329-6995 (Option 5)
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
