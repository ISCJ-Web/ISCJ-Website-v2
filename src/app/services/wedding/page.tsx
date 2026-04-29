import Container from "@/components/ui/Container";
import { assetPath } from "@/lib/assetPath";

const steps = [
  {
    number: "01",
    title: "Initial Contact",
    body: [
      "Email shamsa.khan@iscj.org as soon as possible with the following information: occasion description, membership status, requested date & time, number of expected guests, and food plan.",
      "The office will reply within 3 business days. Please allow enough time — last-minute requests will NOT be honored.",
    ],
  },
  {
    number: "02",
    title: "Reservation & Payment",
    body: [
      "Once the admin office confirms date and time availability, fill out the Reservation Form and email it back with proof of your full payment.",
      "Your reservation will be confirmed after ISCJ fees are received. Refer to the Reservation Form for fee schedules.",
    ],
  },
  {
    number: "03",
    title: "Imam Coordination",
    body: [
      "The office will verify Imam Hamad Chebli's availability and facilitate direct communication with him.",
      "Please contact Imam Chebli directly for any inquiries regarding the Nikkah ceremony or marriage certificates.",
    ],
  },
  {
    number: "04",
    title: "Day-of Requirements",
    body: [],
    list: [
      "Provide two witnesses for the Nikkah ceremony",
      "Bring your marriage permit obtained from your local Township Municipality",
      "A printed Marriage Application Form (to be given to the Imam)",
      "Imam's payment",
    ],
  },
];

const paymentMethods = [
  "In-Person (10am–2pm, 7 days a week)",
  "Zelle: accounting@iscj.org",
  "PayPal: accounting@iscj.org",
  "Venmo: iscj-nj",
  "Check payable to ISCJ",
];

const guidelines = [
  "All marriage requests and reservations are handled by the ISCJ office to streamline the process and coordinate scheduling.",
  "Marriage request forms and ISCJ Space/MPR reservation forms are available online and at the ISCJ office.",
  "After confirming availability and finalizing the date/time, the admin office will contact Imam Chebli to confirm his availability and update the applicant.",
  "A refundable security deposit of $500 in CASH ONLY is due at the time of reservation. If the deposit is not received, your reservation may be CANCELLED. The deposit will be refunded after a satisfactory post-event inspection.",
  "Satisfactory inspection includes: adhering to your reservation time and the NO FOOD OR DRINKS in the Musala area policy.",
  "No one will be turned away for lack of funds.",
];

const steps = [
  {
    number: "01",
    title: "Initial Contact",
    body: [
      "Email shamsa.khan@iscj.org as soon as possible with the following information: occasion description, membership status, requested date & time, number of expected guests, and food plan.",
      "The office will reply within 3 business days. Please allow enough time — last-minute requests will NOT be honored.",
    ],
  },
  {
    number: "02",
    title: "Reservation & Payment",
    body: [
      "Once the admin office confirms date and time availability, fill out the Reservation Form and email it back with proof of your full payment.",
      "Your reservation will be confirmed after ISCJ fees are received. Refer to the Reservation Form for fee schedules.",
    ],
  },
  {
    number: "03",
    title: "Imam Coordination",
    body: [
      "The office will verify Imam Hamad Chebli's availability and facilitate direct communication with him.",
      "Please contact Imam Chebli directly for any inquiries regarding the Nikkah ceremony or marriage certificates.",
    ],
  },
  {
    number: "04",
    title: "Day-of Requirements",
    body: [],
    list: [
      "Provide two witnesses for the Nikkah ceremony",
      "Bring your marriage permit obtained from your local Township Municipality",
      "A printed Marriage Application Form (to be given to the Imam)",
      "Imam's payment",
    ],
  },
];

const paymentMethods = [
  "In-Person (10am–2pm, 7 days a week)",
  "Zelle: accounting@iscj.org",
  "PayPal: accounting@iscj.org",
  "Venmo: iscj-nj",
  "Check payable to ISCJ",
];

const guidelines = [
  "All marriage requests and reservations are handled by the ISCJ office to streamline the process and coordinate scheduling.",
  "Marriage request forms and ISCJ Space/MPR reservation forms are available online and at the ISCJ office.",
  "After confirming availability and finalizing the date/time, the admin office will contact Imam Chebli to confirm his availability and update the applicant.",
  "A refundable security deposit of $500 in CASH ONLY is due at the time of reservation. If the deposit is not received, your reservation may be CANCELLED. The deposit will be refunded after a satisfactory post-event inspection.",
  "Satisfactory inspection includes: adhering to your reservation time and the NO FOOD OR DRINKS in the Musala area policy.",
  "No one will be turned away for lack of funds.",
];

export default function Page() {
  return (
    <main style={{ minHeight: "100vh", background: "var(--surface)" }}>

      {/* Hero with background image */}
      <section
        style={{
          position: "relative",
          padding: "204px 0 80px",
          overflow: "hidden",
        }}
      >
        {/* Background image */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url('${assetPath("/images/iscj2.jpg")}')`,
            backgroundSize: "cover",
            backgroundPosition: "center 30%",
            filter: "brightness(0.35)",
          }}
        />
        {/* Gradient overlay for readability */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, rgba(1,25,48,0.85) 55%, rgba(1,25,48,0.4) 100%)",
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
              maxWidth: 600,
            }}
          >
            Wedding <em>Services</em>
          </h1>

          {/* Quran verse */}
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
              &ldquo;And among His signs is that He created for you mates from among yourselves,
              that you may dwell in tranquility with them, and He put love and mercy between
              your hearts. Verily in that are signs for those who reflect.&rdquo;
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
              Qur&apos;an 30:21
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
            Congratulations on the joyous occasion of your wedding! We are honored that you
            have chosen ISCJ to share this occasion with you and your loved ones. Marriage in
            Islam is a beautiful union that completes one&apos;s faith — we pray we can make
            this union a memorable and spiritual one.
          </p>
        </Container>
      </section>

      {/* Four-Step Process */}
      <section style={{ padding: "80px 0" }}>
        <Container style={{ padding: "0 48px" }}>
          <span className="section-label">How It Works</span>
          <h2 className="section-title" style={{ marginTop: 12, marginBottom: 48 }}>
            Four Steps to Your <em>Ceremony</em>
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
                {step.body.map((para, i) => (
                  <p
                    key={i}
                    style={{
                      fontSize: "0.88rem",
                      fontWeight: 300,
                      color: "var(--muted)",
                      lineHeight: 1.75,
                      marginBottom: step.list && i === step.body.length - 1 ? 16 : 10,
                    }}
                  >
                    {para}
                  </p>
                ))}
                {step.list && (
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {step.list.map((item) => (
                      <li
                        key={item}
                        style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 8 }}
                      >
                        <span
                          style={{
                            width: 5,
                            height: 5,
                            borderRadius: "50%",
                            background: "var(--gold)",
                            flexShrink: 0,
                            marginTop: 7,
                          }}
                        />
                        <span
                          style={{
                            fontSize: "0.88rem",
                            fontWeight: 300,
                            color: "var(--muted)",
                            lineHeight: 1.65,
                          }}
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Off-site policy callout */}
      <section style={{ padding: "0 0 80px" }}>
        <Container style={{ padding: "0 48px" }}>
          <div
            style={{
              background: "var(--navy)",
              padding: "36px 40px",
              borderLeft: "3px solid var(--gold)",
              display: "flex",
              gap: 28,
              alignItems: "flex-start",
            }}
          >
            <div>
              <p
                style={{
                  fontSize: "0.68rem",
                  fontWeight: 500,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  marginBottom: 8,
                }}
              >
                Off-Site Ceremonies
              </p>
              <p
                style={{
                  fontSize: "0.95rem",
                  fontWeight: 300,
                  color: "rgba(255,255,255,0.8)",
                  lineHeight: 1.75,
                  maxWidth: 720,
                }}
              >
                If you would like Imam Chebli to attend a wedding ceremony scheduled off-site,
                contact the ISCJ office at{" "}
                <a
                  href="tel:7323296995"
                  style={{ color: "var(--gold)", textDecoration: "none" }}
                >
                  732-329-6995
                </a>{" "}
                to check availability. Please note there will be an additional{" "}
                <strong style={{ color: "var(--white)", fontWeight: 400 }}>
                  $100/hour travel fee
                </strong>{" "}
                for off-site ceremonies, which is not included in the standard wedding
                processing fees.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Guidelines & Payment */}
      <section style={{ padding: "0 0 80px" }}>
        <Container style={{ padding: "0 48px" }}>
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px" }}
            className="max-sm:!grid-cols-1"
          >
            {/* Guidelines */}
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
                Guidelines
              </span>
              <h3
                style={{
                  fontFamily: "var(--ff-head)",
                  fontSize: "1.6rem",
                  fontWeight: 400,
                  color: "var(--navy)",
                  marginBottom: 20,
                }}
              >
                Marriage Service <em>Policies</em>
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {guidelines.map((item) => (
                  <li
                    key={item}
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
                    <span
                      style={{
                        fontSize: "0.88rem",
                        fontWeight: 300,
                        color: "var(--muted)",
                        lineHeight: 1.65,
                      }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Payment */}
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
                Fees & Payment
              </span>
              <h3
                style={{
                  fontFamily: "var(--ff-head)",
                  fontSize: "1.6rem",
                  fontWeight: 400,
                  color: "var(--white)",
                  marginBottom: 12,
                }}
              >
                Payment <em>Options</em>
              </h3>
              <p
                style={{
                  fontSize: "0.88rem",
                  fontWeight: 300,
                  color: "rgba(255,255,255,0.65)",
                  lineHeight: 1.75,
                  marginBottom: 24,
                }}
              >
                Full fee details are provided in the Reservation Form. A{" "}
                <strong style={{ color: "var(--white)", fontWeight: 400 }}>
                  $500 refundable cash security deposit
                </strong>{" "}
                is required at the time of reservation.
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px" }}>
                {paymentMethods.map((method) => (
                  <li
                    key={method}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 12,
                      marginBottom: 12,
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
                    <span
                      style={{
                        fontSize: "0.88rem",
                        fontWeight: 300,
                        color: "rgba(255,255,255,0.75)",
                        lineHeight: 1.6,
                      }}
                    >
                      {method}
                    </span>
                  </li>
                ))}
              </ul>

              <div
                style={{
                  borderTop: "1px solid rgba(255,255,255,0.12)",
                  paddingTop: 24,
                }}
              >
                <p
                  style={{
                    fontSize: "0.68rem",
                    fontWeight: 500,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "var(--gold)",
                    marginBottom: 10,
                  }}
                >
                  Mailing Address
                </p>
                <p
                  style={{
                    fontFamily: "var(--ff-head)",
                    fontSize: "1rem",
                    fontWeight: 300,
                    color: "rgba(255,255,255,0.75)",
                    lineHeight: 1.7,
                  }}
                >
                  Islamic Society of Central Jersey
                  <br />
                  4145 Route 1 South
                  <br />
                  Monmouth Junction, NJ 08852
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Contact CTA */}
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
              <span className="section-label">Get in Touch</span>
              <h2 className="section-title" style={{ marginTop: 12, marginBottom: 16 }}>
                Ready to Begin <em>Planning?</em>
              </h2>
              <p
                style={{
                  fontSize: "1rem",
                  fontWeight: 300,
                  color: "var(--muted)",
                  lineHeight: 1.8,
                }}
              >
                Reach out to start the process. Our team will respond within 3 business
                days and guide you through every step. We look forward to working with you —
                congratulations once again!
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
                  Weddings & Reservations
                </p>
                <a
                  href="mailto:shamsa.khan@iscj.org"
                  style={{
                    fontFamily: "var(--ff-head)",
                    fontSize: "1.1rem",
                    color: "var(--navy)",
                    textDecoration: "none",
                  }}
                >
                  shamsa.khan@iscj.org
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
                  4145 Route 1 South
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
