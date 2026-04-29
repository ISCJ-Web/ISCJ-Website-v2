import Container from "@/components/ui/Container";
import { assetPath } from "@/lib/assetPath";

const contacts = [
  {
    role: "Funeral Director",
    name: "Br. Afzal Saeed",
    detail: "State Certified Licensed Muslim Funeral Director — N.J. Lic. #5193\nChairman, ISCJ Burial & Cemetery Services",
    phone: "732-991-5896",
    phoneLabel: "Available 24 hours",
  },
  {
    role: "ISCJ Imam",
    name: "Imam Hamad Chebli",
    detail: null,
    phone: "848-203-2178",
    phoneLabel: "Cell",
    phoneAlt: "732-329-8126",
    phoneAltLabel: "Office",
  },
  {
    role: "ISCJ Admin Office",
    name: null,
    detail: null,
    phone: "732-329-6995",
    phoneLabel: "General inquiries",
  },
];

const steps = [
  {
    number: "01",
    title: "Contact the Funeral Director",
    body: "Call Br. Afzal Saeed at 732-991-5896 as soon as possible — he is available 24 hours a day. He will guide your family through the entire process with a documented checklist to ensure arrangements are made in a timely and proper Islamic manner.",
  },
  {
    number: "02",
    title: "Ghusl & Kafan",
    body: "The body will be washed (Ghusl) and shrouded (Kafan) at the ISCJ Burial Preparation Home according to Islamic tradition. Please note that parking is limited at the Preparation Home — park at the ISCJ/NUI facility and walk from the back.",
  },
  {
    number: "03",
    title: "Janazah Prayer",
    body: "The Janazah (funeral prayer) will be coordinated with Imam Hamad Chebli. The ISCJ community will be notified of the prayer time via a Janazah alert once funeral arrangements have been confirmed.",
  },
  {
    number: "04",
    title: "Burial",
    body: "ISCJ will assist with coordination of the burial. The funeral director will provide guidance on the full checklist of requirements and next steps throughout the process.",
  },
];

export default function Page() {
  return (
    <main style={{ minHeight: "100vh", background: "var(--surface)" }}>

      {/* Hero */}
      <section
        style={{
          position: "relative",
          padding: "204px 0 80px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url('${assetPath("/images/iscj2.jpg")}')`,
            backgroundSize: "cover",
            backgroundPosition: "center 40%",
            filter: "brightness(0.25)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, rgba(1,25,48,0.92) 55%, rgba(1,25,48,0.5) 100%)",
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
              letterSpacing: "0.01em",
              maxWidth: 620,
            }}
          >
            Funeral <em>Services</em>
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
                fontSize: "clamp(1rem, 2vw, 1.2rem)",
                fontWeight: 300,
                fontStyle: "italic",
                color: "rgba(255,255,255,0.85)",
                lineHeight: 1.7,
                marginBottom: 8,
              }}
            >
              &ldquo;And We will surely test you with something of fear and hunger and a loss of
              wealth and lives and fruits, but give good tidings to the patient — who, when
              disaster strikes them, say: Indeed we belong to Allah, and indeed to Him we will
              return.&rdquo;
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
              Qur&apos;an 2:155–156
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
            Assalamu &lsquo;alaikum. We pray that Allah grants the deceased His mercy and
            grants your family patience during this difficult time. ISCJ is here to guide
            and assist you through every step of the process with care and compassion.
          </p>
        </Container>
      </section>

      {/* Steps */}
      <section style={{ padding: "80px 0" }}>
        <Container style={{ padding: "0 48px" }}>
          <span className="section-label">What to Expect</span>
          <h2 className="section-title" style={{ marginTop: 12, marginBottom: 48 }}>
            The Funeral <em>Process</em>
          </h2>

          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "2px" }}
            className="max-sm:!grid-cols-1"
          >
            {steps.map((step) => (
              <div key={step.number} style={{ background: "var(--white)", padding: "40px 36px" }}>
                <div
                  style={{
                    fontFamily: "var(--ff-head)",
                    fontSize: "2.8rem",
                    fontWeight: 300,
                    color: "var(--gold)",
                    lineHeight: 1,
                    marginBottom: 16,
                  }}
                >
                  {step.number}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--ff-head)",
                    fontSize: "1.4rem",
                    fontWeight: 400,
                    color: "var(--navy)",
                    marginBottom: 14,
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.88rem",
                    fontWeight: 300,
                    color: "var(--muted)",
                    lineHeight: 1.75,
                  }}
                >
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Fees notice */}
      <section style={{ padding: "0 0 80px" }}>
        <Container style={{ padding: "0 48px" }}>
          <div
            style={{
              background: "var(--navy)",
              padding: "36px 40px",
              borderLeft: "3px solid var(--gold)",
            }}
          >
            <p
              style={{
                fontSize: "0.68rem",
                fontWeight: 500,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--gold)",
                marginBottom: 10,
              }}
            >
              Important Notice — Fees
            </p>
            <p
              style={{
                fontSize: "0.95rem",
                fontWeight: 300,
                color: "rgba(255,255,255,0.8)",
                lineHeight: 1.75,
                maxWidth: 740,
              }}
            >
              Please be aware that{" "}
              <strong style={{ color: "var(--white)", fontWeight: 400 }}>
                funeral services are not free
              </strong>
              . Fees are associated with the funeral process. If a family is unable to
              afford the fees, they may{" "}
              <strong style={{ color: "var(--gold)", fontWeight: 400 }}>
                apply for Zakat assistance
              </strong>{" "}
              through ISCJ. No family will be turned away during their time of need.
            </p>
          </div>
        </Container>
      </section>

      {/* Contacts */}
      <section style={{ padding: "0 0 80px" }}>
        <Container style={{ padding: "0 48px" }}>
          <span className="section-label">Contact</span>
          <h2 className="section-title" style={{ marginTop: 12, marginBottom: 48 }}>
            Who to <em>Call</em>
          </h2>

          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2px" }}
            className="max-sm:!grid-cols-1"
          >
            {contacts.map((c, i) => (
              <div
                key={i}
                style={{
                  background: i === 0 ? "var(--navy)" : "var(--white)",
                  padding: "40px 36px",
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
                  {c.role}
                </p>
                {c.name && (
                  <h3
                    style={{
                      fontFamily: "var(--ff-head)",
                      fontSize: "1.35rem",
                      fontWeight: 400,
                      color: i === 0 ? "var(--white)" : "var(--navy)",
                      marginBottom: 10,
                    }}
                  >
                    {c.name}
                  </h3>
                )}
                {c.detail && (
                  <p
                    style={{
                      fontSize: "0.82rem",
                      fontWeight: 300,
                      color: i === 0 ? "rgba(255,255,255,0.6)" : "var(--muted)",
                      lineHeight: 1.65,
                      marginBottom: 20,
                      whiteSpace: "pre-line",
                    }}
                  >
                    {c.detail}
                  </p>
                )}
                <div style={{ marginTop: c.detail ? 0 : 8 }}>
                  <a
                    href={`tel:${c.phone.replace(/-/g, "")}`}
                    style={{
                      fontFamily: "var(--ff-head)",
                      fontSize: "1.2rem",
                      color: i === 0 ? "var(--white)" : "var(--navy)",
                      textDecoration: "none",
                      display: "block",
                    }}
                  >
                    {c.phone}
                  </a>
                  <p
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 300,
                      color: i === 0 ? "rgba(255,255,255,0.5)" : "var(--muted)",
                      marginTop: 4,
                      letterSpacing: "0.05em",
                    }}
                  >
                    {c.phoneLabel}
                  </p>
                  {"phoneAlt" in c && c.phoneAlt && (
                    <>
                      <a
                        href={`tel:${c.phoneAlt!.replace(/-/g, "")}`}
                        style={{
                          fontFamily: "var(--ff-head)",
                          fontSize: "1.2rem",
                          color: "var(--navy)",
                          textDecoration: "none",
                          display: "block",
                          marginTop: 14,
                        }}
                      >
                        {c.phoneAlt}
                      </a>
                      <p
                        style={{
                          fontSize: "0.75rem",
                          fontWeight: 300,
                          color: "var(--muted)",
                          marginTop: 4,
                          letterSpacing: "0.05em",
                        }}
                      >
                        {c.phoneAltLabel}
                      </p>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Location / address CTA */}
      <section
        style={{
          background: "var(--white)",
          borderTop: "1px solid var(--border)",
          padding: "64px 0",
        }}
      >
        <Container style={{ padding: "0 48px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "64px",
              alignItems: "center",
            }}
            className="max-sm:!grid-cols-1"
          >
            <div>
              <span className="section-label">We Are Here for You</span>
              <h2 className="section-title" style={{ marginTop: 12, marginBottom: 16 }}>
                ISCJ Is With You <em>Every Step</em>
              </h2>
              <p
                style={{
                  fontSize: "1rem",
                  fontWeight: 300,
                  color: "var(--muted)",
                  lineHeight: 1.8,
                }}
              >
                Our first priority is to support your family through this difficult time.
                Please reach out immediately — Br. Afzal Saeed is available around the
                clock and will ensure your loved one is handled with the dignity and respect
                they deserve.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div
                style={{ padding: "24px 28px", border: "1px solid var(--border)", borderRadius: 2 }}
              >
                <p
                  style={{
                    fontSize: "0.68rem",
                    fontWeight: 500,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "var(--gold)",
                    marginBottom: 6,
                  }}
                >
                  24-Hour Funeral Director
                </p>
                <a
                  href="tel:7329915896"
                  style={{
                    fontFamily: "var(--ff-head)",
                    fontSize: "1.1rem",
                    color: "var(--navy)",
                    textDecoration: "none",
                  }}
                >
                  732-991-5896
                </a>
              </div>

              <div
                style={{ padding: "24px 28px", border: "1px solid var(--border)", borderRadius: 2 }}
              >
                <p
                  style={{
                    fontSize: "0.68rem",
                    fontWeight: 500,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "var(--gold)",
                    marginBottom: 6,
                  }}
                >
                  General Inquiries
                </p>
                <a
                  href="mailto:admin@iscj.org"
                  style={{
                    fontFamily: "var(--ff-head)",
                    fontSize: "1.1rem",
                    color: "var(--navy)",
                    textDecoration: "none",
                    display: "block",
                    marginBottom: 4,
                  }}
                >
                  admin@iscj.org
                </a>
                <a
                  href="tel:7323296995"
                  style={{
                    fontFamily: "var(--ff-head)",
                    fontSize: "1.1rem",
                    color: "var(--navy)",
                    textDecoration: "none",
                  }}
                >
                  732-329-6995
                </a>
              </div>

              <div
                style={{ padding: "24px 28px", border: "1px solid var(--border)", borderRadius: 2 }}
              >
                <p
                  style={{
                    fontSize: "0.68rem",
                    fontWeight: 500,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "var(--gold)",
                    marginBottom: 6,
                  }}
                >
                  Location
                </p>
                <p
                  style={{
                    fontFamily: "var(--ff-head)",
                    fontSize: "1.1rem",
                    color: "var(--navy)",
                    lineHeight: 1.5,
                  }}
                >
                  4145 Route 1 South & Promenade Blvd
                  <br />
                  Monmouth Junction, NJ 08852
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
