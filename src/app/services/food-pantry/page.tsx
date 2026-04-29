import Container from "@/components/ui/Container";
import { assetPath } from "@/lib/assetPath";

const boxContents = [
  "Pasta & Spaghetti Sauce",
  "Rice & Canned Goods",
  "Cooking Oil",
  "Bread",
  "Frozen Organic Chicken",
  "Toiletries & Much More",
];

const donationNeeds = [
  "Bags of 5 lb Flour",
  "Bags of 4 lb Sugar",
  "Bottles of 24–30 oz Pasta Sauce",
  "Boxes of Breakfast Cereal",
  "Bottles of 16–20 oz Peanut Butter",
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
            backgroundPosition: "center 50%",
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
            Food <em>Pantry</em>
          </h1>
          <p
            style={{
              fontSize: "1.05rem",
              fontWeight: 300,
              color: "rgba(255,255,255,0.75)",
              lineHeight: 1.85,
              maxWidth: 560,
            }}
          >
            ISCJ&apos;s Food Pantry provides boxes of food and essential supplies to
            community members in need — regardless of faith or background — organized and
            delivered by our dedicated volunteers. Together, we&apos;ve distributed over
            100,000 meals.
          </p>
        </Container>
      </section>

      {/* Stats */}
      <section style={{ padding: "80px 0" }}>
        <Container style={{ padding: "0 48px" }}>
          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "2px" }}
            className="max-sm:!grid-cols-1"
          >
            {[
              { number: "100,000+", label: "Meals Distributed", dark: false },
              { number: "All Faiths", label: "Recipients Welcome", dark: true },
              { number: "Alt. Saturdays", label: "Donation Drop-Off", dark: false },
              { number: "100%", label: "Volunteer-Run", dark: true },
            ].map((s) => (
              <div
                key={s.label}
                style={{
                  background: s.dark ? "var(--navy)" : "var(--white)",
                  padding: "40px 32px",
                  textAlign: "center",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--ff-head)",
                    fontSize: "1.8rem",
                    fontWeight: 300,
                    color: s.dark ? "var(--white)" : "var(--navy)",
                    lineHeight: 1.2,
                    marginBottom: 8,
                  }}
                >
                  {s.number}
                </p>
                <p
                  style={{
                    fontSize: "0.68rem",
                    fontWeight: 500,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "var(--gold)",
                  }}
                >
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Box contents + Donations needed */}
      <section style={{ padding: "0 0 80px" }}>
        <Container style={{ padding: "0 48px" }}>
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px" }}
            className="max-sm:!grid-cols-1"
          >
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
                What You Receive
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
                What&apos;s in <em>Each Box</em>
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {boxContents.map((item) => (
                  <li
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      marginBottom: 14,
                      paddingBottom: 14,
                      borderBottom: "1px solid var(--border)",
                    }}
                  >
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--gold)", flexShrink: 0 }} />
                    <span style={{ fontSize: "0.95rem", fontWeight: 300, color: "var(--muted)" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

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
                Donate Goods
              </span>
              <h3
                style={{
                  fontFamily: "var(--ff-head)",
                  fontSize: "1.6rem",
                  fontWeight: 400,
                  color: "var(--white)",
                  marginBottom: 16,
                }}
              >
                Most Needed <em>Items</em>
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
                We accept donations on alternating Saturdays, 12:00 PM – 2:00 PM, at the
                ISCJ Multipurpose Room. The items below are most needed:
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {donationNeeds.map((item) => (
                  <li key={item} style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--gold)", flexShrink: 0 }} />
                    <span style={{ fontSize: "0.95rem", fontWeight: 300, color: "rgba(255,255,255,0.75)" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Volunteer + Contact */}
      <section style={{ background: "var(--white)", borderTop: "1px solid var(--border)", padding: "64px 0" }}>
        <Container style={{ padding: "0 48px" }}>
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center" }}
            className="max-sm:!grid-cols-1"
          >
            <div>
              <span className="section-label">Get Involved</span>
              <h2 className="section-title" style={{ marginTop: 12, marginBottom: 16 }}>
                Volunteer <em>With Us</em>
              </h2>
              <p style={{ fontSize: "1rem", fontWeight: 300, color: "var(--muted)", lineHeight: 1.8, marginBottom: 28 }}>
                The ISCJ Food Pantry runs entirely on the dedication of our volunteers. If you
                would like to join our team and help make a difference in the community, sign
                up through our volunteer portal.
              </p>
              <a
                href="https://iscj.ivolunteer.com"
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
                Volunteer Sign-Up
              </a>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div style={{ padding: "24px 28px", border: "1px solid var(--border)", borderRadius: 2 }}>
                <p style={{ fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 6 }}>
                  Contact
                </p>
                <a href="mailto:foodpantry@iscj.org" style={{ fontFamily: "var(--ff-head)", fontSize: "1.1rem", color: "var(--navy)", textDecoration: "none" }}>
                  foodpantry@iscj.org
                </a>
              </div>
              <div style={{ padding: "24px 28px", border: "1px solid var(--border)", borderRadius: 2 }}>
                <p style={{ fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 6 }}>
                  Donation Drop-Off
                </p>
                <p style={{ fontFamily: "var(--ff-head)", fontSize: "1.1rem", color: "var(--navy)", lineHeight: 1.5 }}>
                  Alternating Saturdays<br />12:00 PM – 2:00 PM
                </p>
              </div>
              <div style={{ padding: "24px 28px", border: "1px solid var(--border)", borderRadius: 2 }}>
                <p style={{ fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 6 }}>
                  Location
                </p>
                <p style={{ fontFamily: "var(--ff-head)", fontSize: "1rem", color: "var(--navy)", lineHeight: 1.5 }}>
                  ISCJ Multipurpose Room<br />4145 Route 1 South, Monmouth Junction, NJ
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
