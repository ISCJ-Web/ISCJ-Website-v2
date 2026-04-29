import Container from "@/components/ui/Container";
import { assetPath } from "@/lib/assetPath";

const committees = [
  {
    name: "Membership Committee",
    contact: "admin@iscj.org",
    description: "Maintains and verifies accurate membership records, reviews applications, conducts membership drives, and proposes ways to welcome new members. Family and single membership forms are available.",
  },
  {
    name: "Social Activities Committee",
    contact: "sac@iscj.org",
    description: "Plans halal community events including iftars, sports activities, camping, matrimonial events, and more. Functions as the community's programming hub.",
  },
  {
    name: "Building Committee",
    contact: "volunteers@iscj.org",
    description: "Manages facility expansion projects and seeks professionals in engineering, construction, HVAC, and project management to join the volunteer team.",
  },
  {
    name: "Media and Outreach Committee",
    contact: "732-329-6995",
    description: "Handles media relations, interfaith meetings, and all external communications on behalf of ISCJ.",
  },
  {
    name: "Constitution Committee",
    contact: "admin@iscj.org",
    description: "Reviews and proposes constitutional amendments for community voting. Maintains the ISCJ Constitution, procedures, and amendment resources.",
  },
  {
    name: "Internal Audit Committee",
    contact: "accounting@iscj.org",
    description: "Reviews financial transactions and ensures compliance with GAAP and statutory requirements to maintain fiscal integrity.",
  },
  {
    name: "Maintenance Committee",
    contact: "maint@iscj.org",
    description: "Responsible for routine repairs and maintenance of the main Masjid building and campus facilities.",
  },
  {
    name: "Career Advancement Program (CAP)",
    contact: "cap@iscj.org",
    description: "Provides seminars, workshops, group discussions, and mentoring for community members aged 15 and above. Led by Br. Sadiq Shariff.",
  },
  {
    name: "Endowment Fund Management",
    contact: "endowment@iscj.org",
    description: "Manages the ISCJ Endowment Fund with a goal of reaching $1 million and beyond through community contributions and halal investments.",
  },
  {
    name: "Expansion Funding Group (EFG)",
    contact: "expansion@iscj.org",
    description: "Conducts fundraising activities specifically to support the ISCJ campus expansion project.",
  },
  {
    name: "Senior Citizens 65+",
    contact: "admin@iscj.org",
    description: "Meets on the last Sunday of each month for social activities and community connection for senior members of the ISCJ community.",
  },
  {
    name: "Policies and Procedures Committee",
    contact: "admin@iscj.org",
    description: "Maintains standards of quality for ISCJ policies and procedures, ensuring consistency and fairness across all operations.",
  },
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
          <span className="section-label">Community</span>
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
            ISCJ <em>Committees</em>
          </h1>
          <p style={{ fontSize: "1.05rem", fontWeight: 300, color: "rgba(255,255,255,0.75)", lineHeight: 1.85, maxWidth: 560 }}>
            ISCJ is powered by dedicated volunteers and elected committees that manage
            everything from community events and expansion funding to financial oversight
            and career development. Find your place and get involved.
          </p>
        </Container>
      </section>

      {/* Committees Grid */}
      <section style={{ padding: "80px 0" }}>
        <Container style={{ padding: "0 48px" }}>
          <span className="section-label">All Committees</span>
          <h2 className="section-title" style={{ marginTop: 12, marginBottom: 48 }}>
            Get <em>Involved</em>
          </h2>
          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2px" }}
            className="max-sm:!grid-cols-1"
          >
            {committees.map((c, i) => (
              <div
                key={i}
                style={{
                  background: i % 6 === 0 || i % 6 === 3 ? "var(--navy)" : "var(--white)",
                  padding: "36px 28px",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--ff-head)",
                    fontSize: "1.1rem",
                    fontWeight: 400,
                    color: i % 6 === 0 || i % 6 === 3 ? "var(--white)" : "var(--navy)",
                    marginBottom: 10,
                    lineHeight: 1.3,
                  }}
                >
                  {c.name}
                </p>
                <p
                  style={{
                    fontSize: "0.83rem",
                    fontWeight: 300,
                    color: i % 6 === 0 || i % 6 === 3 ? "rgba(255,255,255,0.62)" : "var(--muted)",
                    lineHeight: 1.7,
                    marginBottom: 16,
                  }}
                >
                  {c.description}
                </p>
                <a
                  href={c.contact.includes("@") ? `mailto:${c.contact}` : `tel:${c.contact.replace(/-/g, "")}`}
                  style={{
                    fontSize: "0.72rem",
                    fontWeight: 500,
                    letterSpacing: "0.1em",
                    color: "var(--gold)",
                    textDecoration: "none",
                    textTransform: "lowercase",
                  }}
                >
                  {c.contact}
                </a>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Volunteer CTA */}
      <section style={{ background: "var(--white)", borderTop: "1px solid var(--border)", padding: "64px 0" }}>
        <Container style={{ padding: "0 48px" }}>
          <div style={{ maxWidth: 640 }}>
            <span className="section-label">Volunteer</span>
            <h2 className="section-title" style={{ marginTop: 12, marginBottom: 16 }}>
              Join a <em>Committee</em>
            </h2>
            <p style={{ fontSize: "1rem", fontWeight: 300, color: "var(--muted)", lineHeight: 1.8, marginBottom: 24 }}>
              ISCJ thrives because of its volunteers. If you would like to serve your
              community by joining a committee, reach out to us and we will connect you
              with the right team.
            </p>
            <a href="mailto:volunteers@iscj.org" style={{ fontFamily: "var(--ff-head)", fontSize: "1.2rem", color: "var(--navy)", textDecoration: "none" }}>
              volunteers@iscj.org
            </a>
          </div>
        </Container>
      </section>
    </main>
  );
}
