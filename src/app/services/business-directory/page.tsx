import Container from "@/components/ui/Container";
import { assetPath } from "@/lib/assetPath";

const partners = [
  "Go Physical Therapy",
  "Manville Manor",
  "Insure Shelter Services",
  "MR CPA PLLC",
  "BelleMeade Orthodontics",
  "H&A",
  "Blossom Commercial",
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
            Business <em>Directory</em>
          </h1>
          <p style={{ fontSize: "1.05rem", fontWeight: 300, color: "rgba(255,255,255,0.75)", lineHeight: 1.85, maxWidth: 560 }}>
            Promote your business effectively by advertising with ISCJ. Our platform
            offers an exceptional chance to expand your reach and connect with the
            diverse and engaged ISCJ community — while supporting the growth of the Masjid.
          </p>
        </Container>
      </section>

      {/* Advertise + Partners */}
      <section style={{ padding: "80px 0" }}>
        <Container style={{ padding: "0 48px" }}>
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px" }}
            className="max-sm:!grid-cols-1"
          >
            <div style={{ background: "var(--white)", padding: "48px 36px" }}>
              <span style={{ fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", display: "block", marginBottom: 16 }}>
                Advertise With Us
              </span>
              <h3 style={{ fontFamily: "var(--ff-head)", fontSize: "1.6rem", fontWeight: 400, color: "var(--navy)", marginBottom: 20 }}>
                Reach the <em>ISCJ Community</em>
              </h3>
              <p style={{ fontSize: "0.95rem", fontWeight: 300, color: "var(--muted)", lineHeight: 1.8, marginBottom: 16 }}>
                Advertising with ISCJ gives your business exclusive access to our members,
                fostering brand visibility and meaningful customer engagement within a
                trusted community setting.
              </p>
              <p style={{ fontSize: "0.95rem", fontWeight: 300, color: "var(--muted)", lineHeight: 1.8, marginBottom: 28 }}>
                Multiple advertising packages are available to suit your budget and goals.
                Contact our advertising team to learn more about how to get listed.
              </p>
              <div style={{ borderTop: "1px solid var(--border)", paddingTop: 24 }}>
                <p style={{ fontSize: "0.72rem", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 8 }}>
                  Advertising Contact
                </p>
                <a href="mailto:advertising@iscj.org" style={{ fontFamily: "var(--ff-head)", fontSize: "1.1rem", color: "var(--navy)", textDecoration: "none" }}>
                  advertising@iscj.org
                </a>
              </div>
            </div>

            <div style={{ background: "var(--navy)", padding: "48px 36px" }}>
              <span style={{ fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", display: "block", marginBottom: 16 }}>
                Current Partners
              </span>
              <h3 style={{ fontFamily: "var(--ff-head)", fontSize: "1.6rem", fontWeight: 400, color: "var(--white)", marginBottom: 28 }}>
                Featured <em>Businesses</em>
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                {partners.map((partner, i) => (
                  <div
                    key={i}
                    style={{
                      padding: "16px 0",
                      borderBottom: "1px solid rgba(255,255,255,0.1)",
                      display: "flex",
                      alignItems: "center",
                      gap: 14,
                    }}
                  >
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--gold)", flexShrink: 0 }} />
                    <span style={{ fontFamily: "var(--ff-head)", fontSize: "1.05rem", color: "var(--white)" }}>
                      {partner}
                    </span>
                  </div>
                ))}
              </div>
            </div>
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
              <span className="section-label">List Your Business</span>
              <h2 className="section-title" style={{ marginTop: 12, marginBottom: 16 }}>
                Grow With <em>ISCJ</em>
              </h2>
              <p style={{ fontSize: "1rem", fontWeight: 300, color: "var(--muted)", lineHeight: 1.8 }}>
                Join our growing network of community business partners. Reach out to our
                advertising team and we will send you details on available packages and how
                to get your business featured.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div style={{ padding: "24px 28px", border: "1px solid var(--border)", borderRadius: 2 }}>
                <p style={{ fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 6 }}>
                  Advertising
                </p>
                <a href="mailto:advertising@iscj.org" style={{ fontFamily: "var(--ff-head)", fontSize: "1.1rem", color: "var(--navy)", textDecoration: "none" }}>
                  advertising@iscj.org
                </a>
              </div>
              <div style={{ padding: "24px 28px", border: "1px solid var(--border)", borderRadius: 2 }}>
                <p style={{ fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 6 }}>
                  General Inquiries
                </p>
                <a href="tel:7323296995" style={{ fontFamily: "var(--ff-head)", fontSize: "1.1rem", color: "var(--navy)", textDecoration: "none" }}>
                  732-329-6995
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
