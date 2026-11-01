import Image from "next/image";
import Container from "@/components/ui/Container";
import { assetPath } from "@/lib/assetPath";

type PaymentMethod = {
  label: string;
  value: string;
  detail: string;
  /** Where the card's link and QR code go. */
  href?: string;
  linkLabel?: string;
  /** QR code image in /public/images, rescued from the old Webflow donate page. */
  qr?: string;
};

/* Links and QR codes match iscj.org/donate. Each QR was decoded and points at
   the same URL as its link. */
const scanMethods: PaymentMethod[] = [
  {
    label: "Venmo",
    value: "@iscj-nj",
    detail: "Add the donation category as a note in the transaction.",
    href: "https://venmo.com/code?user_id=2995353091571712717",
    linkLabel: "Open Venmo",
    qr: "/images/donate-qr-venmo.png",
  },
  {
    label: "Zelle",
    value: "accounting@iscj.org",
    detail: "Add the donation category as a note in the transaction.",
    href: "https://enroll.zellepay.com/qr-codes?data=eyJuYW1lIjoiSVNMQU1JQyBTT0NJRVRZIE9GIENFTlRSQUwgSkVSU0VZIiwiYWN0aW9uIjoicGF5bWVudCIsInRva2VuIjoiNzMyNzg5NjY3MyJ9",
    linkLabel: "Open Zelle",
    qr: "/images/donate-qr-zelle.png",
  },
  {
    label: "PayPal",
    value: "accounting@iscj.org",
    detail: "Credit card donations are accepted via PayPal. Add the donation category as a note in the transaction.",
    href: "https://www.paypal.com/paypalme/iscjnj",
    linkLabel: "Open PayPal",
    qr: "/images/donate-qr-paypal.png",
  },
];

const otherMethods: PaymentMethod[] = [
  {
    label: "Mohid",
    value: "Credit card donations",
    detail: "Select the category toward which you want your donation to be applied.",
    href: "https://us.mohid.co/nj/njrgn/iscj/masjid/online/donation",
    linkLabel: "Donate via Mohid",
  },
  {
    label: "Check",
    value: "Payable to \"Islamic Society of Central Jersey\"",
    detail: "Drop it off in person at the ISCJ office, or mail it to P.O. Box 628, Monmouth Junction, NJ 08852.",
  },
];

function PaymentCard({ m, dark }: { m: PaymentMethod; dark: boolean }) {
  return (
    <div
      style={{
        background: dark ? "var(--navy)" : "var(--white)",
        padding: "36px 32px",
        display: "flex",
        flexDirection: "column",
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
        {m.label}
      </p>
      <p
        style={{
          fontFamily: "var(--ff-head)",
          fontSize: "1.25rem",
          color: dark ? "var(--white)" : "var(--navy)",
          marginBottom: 8,
          lineHeight: 1.4,
          overflowWrap: "anywhere",
        }}
      >
        {m.value}
      </p>
      <p
        style={{
          fontSize: "0.85rem",
          fontWeight: 300,
          lineHeight: 1.7,
          color: dark ? "rgba(255,255,255,0.6)" : "var(--muted)",
          marginBottom: m.qr || m.href ? 24 : 0,
        }}
      >
        {m.detail}
      </p>

      {m.qr && m.href && (
        <a
          href={m.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${m.label} QR code`}
          style={{ alignSelf: "flex-start", background: "var(--white)", padding: 10, border: dark ? "none" : "1px solid var(--border)", marginBottom: 20, lineHeight: 0 }}
        >
          <Image src={assetPath(m.qr)} alt={`Scan to donate with ${m.label}`} width={140} height={140} style={{ display: "block" }} />
        </a>
      )}

      {m.href && (
        <a
          href={m.href}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            marginTop: "auto",
            alignSelf: "flex-start",
            fontSize: "0.75rem",
            fontWeight: 500,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--gold)",
            textDecoration: "none",
            borderBottom: "1px solid var(--gold)",
            paddingBottom: 2,
          }}
        >
          {m.linkLabel} &rarr;
        </a>
      )}
    </div>
  );
}

const funds = [
  { name: "Masjid Operations", description: "Day-to-day running of the mosque and its programs." },
  { name: "Campus Infrastructure", description: "Construction and expansion of the ISCJ campus." },
  { name: "Endowment Fund", description: "Long-term halal investment for ISCJ's financial future." },
  { name: "Quran Academy", description: "Supporting Quran education for children and adults." },
  { name: "Youth — LIT", description: "Learning Islam Together program for young Muslims." },
  { name: "Sadaqah", description: "General charitable giving to support families in need." },
  { name: "Zakat", description: "Obligatory giving distributed to qualifying recipients." },
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
            backgroundImage: `url('${assetPath("/images/dome-through-trees.jpg")}')`,
            backgroundSize: "cover",
            backgroundPosition: "center 40%",
            filter: "brightness(0.55)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to right, rgba(1,25,48,0.88) 0%, rgba(1,25,48,0.74) 48%, rgba(1,25,48,0.34) 100%)",
          }}
        />
        <Container style={{ position: "relative", padding: "0 48px" }}>
          <span className="section-label">Support ISCJ</span>
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
            Donate to <em>ISCJ</em>
          </h1>
          <blockquote style={{ borderLeft: "2px solid var(--gold)", paddingLeft: 20, margin: "0 0 28px", maxWidth: 580 }}>
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
              &ldquo;Donate for yourself or on behalf of a loved one. You will continue to
              receive rewards from Allah (SWT).&rdquo;
            </p>
          </blockquote>
          <p style={{ fontSize: "1.05rem", fontWeight: 300, color: "rgba(255,255,255,0.7)", lineHeight: 1.85, maxWidth: 560 }}>
            Your generosity sustains our mosque, school, programs, and community services.
            Every contribution — in any amount — makes a lasting difference.
          </p>
        </Container>
      </section>

      {/* Payment Methods */}
      <section style={{ padding: "80px 0" }}>
        <Container style={{ padding: "0 48px" }}>
          <span className="section-label">How to Give</span>
          <h2 className="section-title" style={{ marginTop: 12, marginBottom: 16 }}>
            Payment <em>Options</em>
          </h2>
          <p style={{ fontSize: "1rem", fontWeight: 300, color: "var(--muted)", lineHeight: 1.8, maxWidth: 640, marginBottom: 48 }}>
            In the memo of your donation, please specify the type of donation (for
            example Campus Infrastructure, Endowment, Masjid Operations, Quran Academy,
            Sadaqah, Youth LIT, or Zakat).
          </p>
          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2px", marginBottom: 2 }}
            className="max-sm:!grid-cols-1"
          >
            {scanMethods.map((m, i) => (
              <PaymentCard key={m.label} m={m} dark={i !== 1} />
            ))}
          </div>
          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "2px" }}
            className="max-sm:!grid-cols-1"
          >
            {otherMethods.map((m, i) => (
              <PaymentCard key={m.label} m={m} dark={i === 1} />
            ))}
          </div>
        </Container>
      </section>

      {/* Fund Categories */}
      <section style={{ padding: "0 0 80px" }}>
        <Container style={{ padding: "0 48px" }}>
          <span className="section-label">Where It Goes</span>
          <h2 className="section-title" style={{ marginTop: 12, marginBottom: 48 }}>
            Donation <em>Categories</em>
          </h2>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {funds.map((f, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: 32,
                  padding: "20px 0",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                <p style={{ fontFamily: "var(--ff-head)", fontSize: "1.15rem", fontWeight: 400, color: "var(--navy)" }}>
                  {f.name}
                </p>
                <p style={{ fontSize: "0.85rem", fontWeight: 300, color: "var(--muted)", textAlign: "right", maxWidth: 360 }}>
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Address CTA */}
      <section style={{ background: "var(--white)", borderTop: "1px solid var(--border)", padding: "64px 0" }}>
        <Container style={{ padding: "0 48px" }}>
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center" }}
            className="max-sm:!grid-cols-1"
          >
            <div>
              <span className="section-label">Questions?</span>
              <h2 className="section-title" style={{ marginTop: 12, marginBottom: 16 }}>
                Contact <em>Accounting</em>
              </h2>
              <p style={{ fontSize: "1rem", fontWeight: 300, color: "var(--muted)", lineHeight: 1.8 }}>
                For questions about donations, fund categories, or to confirm a payment has
                been received, reach out to the ISCJ accounting office.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div style={{ padding: "24px 28px", border: "1px solid var(--border)", borderRadius: 2 }}>
                <p style={{ fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 6 }}>Accounting</p>
                <a href="mailto:accounting@iscj.org" style={{ fontFamily: "var(--ff-head)", fontSize: "1.1rem", color: "var(--navy)", textDecoration: "none" }}>accounting@iscj.org</a>
              </div>
              <div style={{ padding: "24px 28px", border: "1px solid var(--border)", borderRadius: 2 }}>
                <p style={{ fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 6 }}>Mailing Address</p>
                <p style={{ fontFamily: "var(--ff-head)", fontSize: "1rem", color: "var(--navy)", lineHeight: 1.5 }}>
                  P.O. Box 628<br />Monmouth Junction, NJ 08852
                </p>
              </div>
              <div style={{ padding: "24px 28px", border: "1px solid var(--border)", borderRadius: 2 }}>
                <p style={{ fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 6 }}>Phone</p>
                <a href="tel:7323296995" style={{ fontFamily: "var(--ff-head)", fontSize: "1.1rem", color: "var(--navy)", textDecoration: "none" }}>732-329-6995 (Option 3)</a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
