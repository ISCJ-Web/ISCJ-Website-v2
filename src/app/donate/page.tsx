import Container from "@/components/ui/Container";
import { assetPath } from "@/lib/assetPath";

const paymentMethods = [
  { label: "Venmo", value: "@iscj-nj", detail: "Scan QR or search handle" },
  { label: "Zelle", value: "accounting@iscj.org", detail: "Direct bank transfer" },
  { label: "PayPal", value: "accounting@iscj.org", detail: "Credit & debit accepted" },
  { label: "Mohid", value: "Online portal", detail: "Select your fund category" },
  { label: "Check", value: "Islamic Society of Central Jersey", detail: "Mail to PO Box 628" },
];

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
          <h2 className="section-title" style={{ marginTop: 12, marginBottom: 48 }}>
            Payment <em>Options</em>
          </h2>
          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2px" }}
            className="max-sm:!grid-cols-1"
          >
            {paymentMethods.map((m, i) => (
              <div
                key={i}
                style={{
                  background: i === 0 || i === 2 || i === 4 ? "var(--navy)" : "var(--white)",
                  padding: "36px 32px",
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
                    fontSize: "1.05rem",
                    color: i === 0 || i === 2 || i === 4 ? "var(--white)" : "var(--navy)",
                    marginBottom: 8,
                    lineHeight: 1.4,
                  }}
                >
                  {m.value}
                </p>
                <p
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: 300,
                    color: i === 0 || i === 2 || i === 4 ? "rgba(255,255,255,0.5)" : "var(--muted)",
                  }}
                >
                  {m.detail}
                </p>
              </div>
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
