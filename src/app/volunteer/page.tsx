import Container from "@/components/ui/Container";
import { assetPath } from "@/lib/assetPath";

const opportunities = [
  {
    title: "Masjid Greeter & Host",
    category: "Community Engagement",
    description:
      "Welcome visitors, new Muslims, and community members during Jumu'ah prayers, Ramadan, and special events. Help guests feel at home and answer questions about ISCJ.",
    contact: "volunteers@iscj.org",
    commitment: "Weekly or as needed",
  },
  {
    title: "Food Pantry Assistant",
    category: "Social Services",
    description:
      "Help sort donations, pack food bags, and assist with distribution at the ISCJ Food Pantry. This is one of our most impactful community programs serving families in need.",
    contact: "foodpantry@iscj.org",
    commitment: "Weekly",
  },
  {
    title: "Events & Social Activities",
    category: "Community Events",
    description:
      "Assist with organizing and running community events including Eid celebrations, iftars, sports days, and family activities. Join the Social Activities Committee volunteer team.",
    contact: "sac@iscj.org",
    commitment: "Monthly or per event",
  },
  {
    title: "Media & Content Creator",
    category: "Media & Outreach",
    description:
      "Help produce photography, videography, graphic design, and social media content to share ISCJ's story and events with the broader community.",
    contact: "media@iscj.org",
    commitment: "As needed",
  },
  {
    title: "Facility Maintenance",
    category: "Facilities",
    description:
      "Support routine upkeep and repairs of the masjid building and campus. Skilled tradespeople and general helpers are both welcome.",
    contact: "maint@iscj.org",
    commitment: "As needed",
  },
  {
    title: "Construction & Expansion Project",
    category: "Building",
    description:
      "Lend your expertise to the ISCJ campus expansion. We are looking for professionals in engineering, architecture, construction management, HVAC, and electrical work.",
    contact: "volunteers@iscj.org",
    commitment: "Project-based",
  },
  {
    title: "Weekend School Teacher",
    category: "Education",
    description:
      "Teach Quran, Islamic studies, or Arabic to children on weekends. Help the next generation connect with their faith through engaging and structured lessons.",
    contact: "wes@iscj.org",
    commitment: "Weekly",
  },
  {
    title: "Youth Mentor",
    category: "Youth",
    description:
      "Mentor Muslim youth through the Career Advancement Program (CAP) or youth group activities. Share your professional experience, life skills, and Islamic values.",
    contact: "cap@iscj.org",
    commitment: "Bi-weekly",
  },
  {
    title: "Library Volunteer",
    category: "Education",
    description:
      "Help organize, catalog, and maintain the ISCJ community library. Assist members in finding Islamic books and resources for their learning journey.",
    contact: "library@iscj.org",
    commitment: "Weekly",
  },
  {
    title: "Funeral Services Support",
    category: "Community Services",
    description:
      "Assist with ghusl (washing), janazah coordination, and logistics for families during their time of loss. Training is provided. This is a deeply rewarding act of service.",
    contact: "funeral@iscj.org",
    commitment: "On call",
  },
  {
    title: "Administrative Support",
    category: "Operations",
    description:
      "Help with office tasks, member records, data entry, correspondence, and day-to-day administrative needs that keep ISCJ running smoothly.",
    contact: "admin@iscj.org",
    commitment: "Weekly",
  },
  {
    title: "Senior Citizens Program",
    category: "Community Engagement",
    description:
      "Accompany, assist, and socialize with ISCJ's senior community members at monthly gatherings and events. Your presence makes a meaningful difference.",
    contact: "admin@iscj.org",
    commitment: "Monthly",
  },
];

const CATEGORY_COLORS: Record<string, string> = {
  "Community Engagement": "#4a7c59",
  "Social Services": "#7c4a4a",
  "Community Events": "#4a5a7c",
  Education: "#5a4a7c",
  Facilities: "#7c6a4a",
  Building: "#4a6a7c",
  Media: "#7c4a6a",
  "Media & Outreach": "#7c4a6a",
  Youth: "#4a7c7c",
  "Community Services": "#7c5a4a",
  Operations: "#5a5a5a",
};

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
          <span className="section-label">Get Involved</span>
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
            Volunteer <em>Opportunities</em>
          </h1>
          <p style={{ fontSize: "1.05rem", fontWeight: 300, color: "rgba(255,255,255,0.75)", lineHeight: 1.85, maxWidth: 560 }}>
            ISCJ is built on the shoulders of its volunteers. Whether you have an
            hour a week or a professional skill to share, there is a place for you
            to serve and grow here.
          </p>
        </Container>
      </section>

      {/* Stats bar */}
      <section
        style={{
          background: "var(--navy)",
          borderBottom: "2px solid var(--gold)",
        }}
      >
        <Container style={{ padding: "0 48px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "2px",
            }}
            className="max-sm:!grid-cols-1"
          >
            {[
              { number: "12+", label: "Volunteer Roles" },
              { number: "100+", label: "Active Volunteers" },
              { number: "10+", label: "Community Programs" },
            ].map((stat) => (
              <div
                key={stat.label}
                style={{
                  padding: "32px 40px",
                  textAlign: "center",
                  borderRight: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--ff-head)",
                    fontSize: "2.8rem",
                    fontWeight: 300,
                    color: "var(--gold)",
                    lineHeight: 1,
                    marginBottom: 6,
                  }}
                >
                  {stat.number}
                </p>
                <p
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: 500,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.55)",
                  }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Opportunities Grid */}
      <section style={{ padding: "80px 0" }}>
        <Container style={{ padding: "0 48px" }}>
          <span className="section-label">Open Positions</span>
          <h2 className="section-title" style={{ marginTop: 12, marginBottom: 48 }}>
            Find Your <em>Role</em>
          </h2>
          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2px" }}
            className="max-sm:!grid-cols-1"
          >
            {opportunities.map((opp, i) => {
              const isDark = i % 6 === 0 || i % 6 === 3;
              const bg = isDark ? "var(--navy)" : "var(--white)";
              const titleColor = isDark ? "var(--white)" : "var(--navy)";
              const descColor = isDark ? "rgba(255,255,255,0.62)" : "var(--muted)";
              const metaColor = isDark ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.35)";

              return (
                <div
                  key={i}
                  style={{
                    background: bg,
                    padding: "36px 28px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 0,
                  }}
                >
                  {/* Category pill */}
                  <span
                    style={{
                      display: "inline-block",
                      fontSize: "0.62rem",
                      fontWeight: 500,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: isDark ? "rgba(255,255,255,0.55)" : "var(--muted)",
                      background: isDark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.04)",
                      padding: "4px 10px",
                      marginBottom: 14,
                      alignSelf: "flex-start",
                    }}
                  >
                    {opp.category}
                  </span>

                  <p
                    style={{
                      fontFamily: "var(--ff-head)",
                      fontSize: "1.2rem",
                      fontWeight: 400,
                      color: titleColor,
                      marginBottom: 10,
                      lineHeight: 1.3,
                    }}
                  >
                    {opp.title}
                  </p>
                  <p
                    style={{
                      fontSize: "0.83rem",
                      fontWeight: 300,
                      color: descColor,
                      lineHeight: 1.75,
                      marginBottom: 20,
                      flexGrow: 1,
                    }}
                  >
                    {opp.description}
                  </p>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: 12,
                      flexWrap: "wrap",
                      paddingTop: 16,
                      borderTop: `1px solid ${isDark ? "rgba(255,255,255,0.1)" : "var(--border)"}`,
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.72rem",
                        fontWeight: 400,
                        color: metaColor,
                        letterSpacing: "0.04em",
                      }}
                    >
                      {opp.commitment}
                    </span>
                    <a
                      href={`mailto:${opp.contact}`}
                      style={{
                        fontSize: "0.72rem",
                        fontWeight: 500,
                        letterSpacing: "0.08em",
                        color: "var(--gold)",
                        textDecoration: "none",
                        textTransform: "lowercase",
                      }}
                    >
                      Apply →
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--white)", borderTop: "1px solid var(--border)", padding: "64px 0" }}>
        <Container style={{ padding: "0 48px" }}>
          <div style={{ maxWidth: 640 }}>
            <span className="section-label">Ready to Serve</span>
            <h2 className="section-title" style={{ marginTop: 12, marginBottom: 16 }}>
              Start Your <em>Journey</em>
            </h2>
            <p style={{ fontSize: "1rem", fontWeight: 300, color: "var(--muted)", lineHeight: 1.8, marginBottom: 24 }}>
              Not sure where to begin? Reach out and we will help match you with the
              right opportunity based on your skills, availability, and interests.
              Every contribution — big or small — matters.
            </p>
            <a
              href="mailto:volunteers@iscj.org"
              style={{ fontFamily: "var(--ff-head)", fontSize: "1.2rem", color: "var(--navy)", textDecoration: "none" }}
            >
              volunteers@iscj.org
            </a>
          </div>
        </Container>
      </section>
    </main>
  );
}
