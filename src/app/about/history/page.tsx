import Link from "next/link";
import Container from "@/components/ui/Container";
import { assetPath } from "@/lib/assetPath";

type Milestone = { year: string; title: string; body: string };
type Era = { span: string; title: string; summary: string; milestones: Milestone[] };

/* Dates through 2018 follow the ISCJ history book (public/documents/
   iscj-history-book.pdf). Later entries cover the expansion that came after it. */
const eras: Era[] = [
  {
    span: "The 1970s",
    title: "Founding",
    summary: "From Sunday gatherings at Rutgers to a piece of land on Route 1.",
    milestones: [
      {
        year: "1970s",
        title: "The Beginning",
        body: "Four Muslim students from Rutgers University and four local families formed the nucleus of an Islamic community in Central New Jersey, united by a sense of belonging and a yearning for Islamic identity.",
      },
      {
        year: "1974",
        title: "Sundays at Scott Hall",
        body: "Rutgers University allowed Muslim students and families to use two classrooms in Scott Hall on Sundays, beginning with the 1974 to 1975 school year. They met there for Qur'anic seminars and Zuhr prayers.",
      },
      {
        year: "1975",
        title: "ISCJ Is Incorporated",
        body: "The Islamic Society of Central Jersey was organized as a nonprofit religious and charitable organization and registered with the State of New Jersey on May 27, 1975. Its first fund-raising event that year raised $3,000.",
      },
      {
        year: "1976",
        title: "First Board of Trustees",
        body: "The first Board of Trustees was elected, and the search began for a place to build a mosque and community center.",
      },
      {
        year: "1977",
        title: "Two Groups Join",
        body: "On September 18, 1977, the Rutgers group met with a group of Muslims from Trenton who were also looking for a site. They agreed to combine their resources and build a single Islamic center.",
      },
      {
        year: "1979",
        title: "The First Land",
        body: "ISCJ bought its first parcel, 6.41 acres along Route 1 South in Monmouth Junction, on April 24, 1979, for $70,000. A building committee was formed and the Princeton firm Mahony & Zvosec was chosen to design the center.",
      },
    ],
  },
  {
    span: "1981 to 1990",
    title: "Building",
    summary: "A constitution, the first building, and then the masjid itself.",
    milestones: [
      {
        year: "1981",
        title: "Approval and a Constitution",
        body: "The ISCJ Constitution was adopted on March 29, 1981. After public hearings and meetings with neighbors, South Brunswick Township approved the plans in September and construction of Phase 1 began.",
      },
      {
        year: "1983",
        title: "Phase 1 Opens",
        body: "Weekend school classes and Sunday seminars moved into the new building on October 9, 1983. Phase 1, a multipurpose room with classrooms, was formally dedicated on December 4.",
      },
      {
        year: "1986",
        title: "Imam Chebli Arrives",
        body: "Imam Hamad Ahmad Chebli joined ISCJ as imam and religious director in the summer of 1986. He has served the community ever since.",
      },
      {
        year: "1990",
        title: "The Masjid Opens",
        body: "Ground was broken for Phase 2, the masjid, on August 29, 1989. It was dedicated on July 28, 1990, and formally opened on December 22. About three hundred families were members at the time.",
      },
    ],
  },
  {
    span: "1993 to 2015",
    title: "Growing",
    summary: "A full-time school, a campus master plan, and a fortieth anniversary.",
    milestones: [
      {
        year: "1993",
        title: "Noor-Ul-Iman School Founded",
        body: "Noor-Ul-Iman School was incorporated as an independent organization and opened that fall on the masjid premises with just 27 students. Today it enrolls over 480 students from Pre-K through Grade 12, maintaining approximately 8% annual growth.",
      },
      {
        year: "1995",
        title: "Room to Grow",
        body: "Modular classrooms were added in 1995, 1997 and 2000 as the school grew. By 1998 it had 180 students and a long waiting list.",
      },
      {
        year: "2006",
        title: "Campus Master Plan",
        body: "ISCJ prepared a master plan for the whole campus, including a permanent school building, an addition to the masjid and new parking, and submitted it to the South Brunswick Township Zoning Board.",
      },
      {
        year: "2007",
        title: "Expansion Plan Approved",
        body: "South Brunswick Township approved ISCJ's master expansion plan, setting the stage for a major campus growth that would serve the community for decades to come.",
      },
      {
        year: "2009",
        title: "Burial Preparation Home",
        body: "A fully functional burial preparation home opened on the campus.",
      },
      {
        year: "2012",
        title: "A Permanent School Building",
        body: "Phase 1 of the Noor-Ul-Iman School building was completed in August and celebrated with a grand opening on September 8. The same year, Sr. Atiya Aftab was elected the first woman chairperson of the ISCJ Board of Trustees.",
      },
      {
        year: "2014",
        title: "School Building Completed",
        body: "Phase 2 of the school building was completed in August, bringing the total cost of construction to about $10 million.",
      },
      {
        year: "2015",
        title: "Forty Years",
        body: "ISCJ celebrated its fortieth anniversary on December 12, 2015.",
      },
    ],
  },
  {
    span: "2016 to Today",
    title: "Expanding",
    summary: "The masjid expansion and the campus plans now under way.",
    milestones: [
      {
        year: "2016",
        title: "Masjid Expansion Begins",
        body: "Work began on the renovation and expansion of the masjid.",
      },
      {
        year: "2018",
        title: "The History Book",
        body: "After three and a half years of work, the ISCJ History Project Team published The Islamic Society of Central Jersey: Its Historical Journey.",
      },
      {
        year: "2020",
        title: "Masjid Phase 1 Complete",
        body: "The first phase of the Masjid expansion was completed during the COVID-19 pandemic, a testament to the resilience and dedication of the ISCJ community.",
      },
      {
        year: "2021",
        title: "Zoning Board Approval",
        body: "The Zoning Board approved a 42,449 sq ft two-story school addition, a 44,880 sq ft sports facility, and 24 senior housing units, the most ambitious phase of the expansion.",
      },
      {
        year: "2024",
        title: "Infrastructure Complete",
        body: "Stormwater management, utilities, and parking infrastructure work were completed, paving the way for the next phases of construction.",
      },
      {
        year: "2025+",
        title: "The Road Ahead",
        body: "Planned activities include senior housing construction, the sports facility, Noor-Ul-Iman school expansion, and Masjid completion, all funded by the generous ISCJ community.",
      },
    ],
  },
];

const stories: { title: string; body: string; link?: { label: string; href: string } }[] = [
  {
    title: "Finding the Land",
    body: "The founders first tried to buy a building from Rutgers University, then looked at churches and other buildings in New Brunswick and East Brunswick, without success. They settled on 6.41 acres at Route 1 South and Stouts Lane, roughly midway between Princeton and Rutgers and between Trenton and New Brunswick. Later, Br. Abdel-Rehim Riad donated $450,000 to buy neighboring homes and a further 4.5 acres for a future full-time school. The campus has since grown to about 17 acres.",
  },
  {
    title: "Built as Funds Allowed",
    body: "The first parcel was paid for by two groups, the Friends of Rutgers and the Trenton physicians, who each raised $35,000. The first public fund-raising dinner followed at the Nassau Inn in Princeton in 1980. Both building phases were released for construction one segment at a time, so that each invoice could be paid from funds already raised and the work never had to stop. Members who gave $1,000 or more before the 1981 general body meeting became the society's founding members.",
  },
  {
    title: "The Imams",
    body: "The first imam, Ahmed M. H. Sharkawy, came to ISCJ from Canada and served for a short time before returning home because of his health. Imam Hamad Ahmad Chebli, originally from Lebanon and a graduate of Al-Azhar University in Cairo, came to the United States in 1982 and served four years in New Orleans before joining ISCJ in 1986.",
    link: { label: "Imam's Corner", href: "/about/imams-corner" },
  },
  {
    title: "ISCJ and Noor-Ul-Iman",
    body: "Noor-Ul-Iman School opened in 1993 in a few rooms of the masjid. The school and ISCJ have remained independent nonprofit organizations that share one campus, under an agreement first signed on May 13, 2001. The school's permanent building went up in two phases, completed in 2012 and 2014.",
    link: { label: "Expansion", href: "/about/expansion" },
  },
];

const bookContents = [
  "Forty years of ISCJ history, from 1975 to 2015, set out year by year",
  "More than fifty personal write-ups and tributes from founding members and their families",
  "The founding members, and every Board of Trustees and Board of Overseers from 1976 to 2015",
  "The constitution and its amendments",
  "Land purchases, building phases and fund-raising",
  "The imams, the Noor-Ul-Iman School and the development plans",
  "Photographs from the society's first decades",
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
            backgroundImage: `url('${assetPath("/images/skylight-chandelier.jpg")}')`,
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
        <Container style={{ position: "relative", padding: "0 48px" }} className="max-sm:!px-6">
          <span className="section-label">About</span>
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
            Our <em>History</em>
          </h1>
          <p style={{ fontSize: "1.05rem", fontWeight: 300, color: "rgba(255,255,255,0.75)", lineHeight: 1.85, maxWidth: 560 }}>
            Conceived by Muslim American students of Rutgers University in the 1970s, ISCJ
            has grown from a small gathering of eight families into one of America&apos;s most
            distinguished Islamic centers — serving thousands and expanding every year.
          </p>
        </Container>
      </section>

      {/* Origins */}
      <section style={{ padding: "80px 0 0" }}>
        <Container style={{ padding: "0 48px" }} className="max-sm:!px-6">
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}
            className="max-sm:!grid-cols-1 max-sm:!gap-6"
          >
            <div>
              <span className="section-label">Origins</span>
              <h2 className="section-title" style={{ marginTop: 12 }}>
                How It <em>Began</em>
              </h2>
            </div>
            <div>
              <p style={{ fontSize: "1.05rem", fontWeight: 300, color: "var(--muted)", lineHeight: 1.85, marginBottom: 16 }}>
                The story of ISCJ begins with families who came to New Jersey from many
                countries, starting in the 1950s, for education and work. Once they had
                settled, they found there was no mosque nearby where they and their children
                could pray, meet one another and learn their faith.
              </p>
              <p style={{ fontSize: "1.05rem", fontWeight: 300, color: "var(--muted)", lineHeight: 1.85 }}>
                In 1974, Muslim students and families began gathering on Sundays in two
                borrowed classrooms at Rutgers University. The group soon outgrew the
                arrangement. The following year it organized as the Islamic Society of
                Central Jersey and set out to build a place of its own.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Timeline */}
      <section style={{ padding: "80px 0" }}>
        <Container style={{ padding: "0 48px" }} className="max-sm:!px-6">
          <span className="section-label">Timeline</span>
          <h2 className="section-title" style={{ marginTop: 12, marginBottom: 48 }}>
            Five Decades of <em>Growth</em>
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {eras.map((era) => (
              <div
                key={era.title}
                style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 2 }}
                className="max-sm:!grid-cols-1"
              >
                <div style={{ background: "var(--navy)", padding: "40px 36px" }}>
                  {/* Sticky, so the era stays in view while its entries scroll past */}
                  <div style={{ position: "sticky", top: "calc(148px + var(--banner-h))" }}>
                    <span style={{ fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", display: "block", marginBottom: 12 }}>
                      {era.span}
                    </span>
                    <h3 style={{ fontFamily: "var(--ff-head)", fontSize: "2rem", fontWeight: 400, color: "var(--white)", lineHeight: 1.1, marginBottom: 14 }}>
                      {era.title}
                    </h3>
                    <p style={{ fontSize: "0.88rem", fontWeight: 300, color: "rgba(255,255,255,0.65)", lineHeight: 1.75 }}>
                      {era.summary}
                    </p>
                  </div>
                </div>
                <div style={{ background: "var(--white)", padding: "12px 36px" }}>
                  {era.milestones.map((m, i) => (
                    <div
                      key={m.year}
                      style={{
                        display: "grid",
                        gridTemplateColumns: "104px 1fr",
                        gap: 16,
                        padding: "28px 0",
                        borderTop: i === 0 ? "none" : "1px solid var(--border)",
                      }}
                      className="max-sm:!grid-cols-1 max-sm:!gap-2"
                    >
                      <div
                        style={{
                          fontFamily: "var(--ff-head)",
                          fontSize: "1.9rem",
                          fontWeight: 300,
                          color: "var(--gold)",
                          lineHeight: 1,
                        }}
                      >
                        {m.year}
                      </div>
                      <div>
                        <h4
                          style={{
                            fontFamily: "var(--ff-head)",
                            fontSize: "1.25rem",
                            fontWeight: 400,
                            color: "var(--navy)",
                            marginBottom: 8,
                          }}
                        >
                          {m.title}
                        </h4>
                        <p style={{ fontSize: "0.88rem", fontWeight: 300, color: "var(--muted)", lineHeight: 1.75 }}>
                          {m.body}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Stories from the book */}
      <section style={{ padding: "0 0 80px" }}>
        <Container style={{ padding: "0 48px" }} className="max-sm:!px-6">
          <span className="section-label">From the History Book</span>
          <h2 className="section-title" style={{ marginTop: 12, marginBottom: 48 }}>
            How It Was <em>Built</em>
          </h2>
          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "2px" }}
            className="max-sm:!grid-cols-1"
          >
            {stories.map((s, i) => {
              const dark = i % 4 === 1 || i % 4 === 2;
              return (
                <div key={s.title} style={{ background: dark ? "var(--navy)" : "var(--white)", padding: "40px 36px" }}>
                  <h3
                    style={{
                      fontFamily: "var(--ff-head)",
                      fontSize: "1.4rem",
                      fontWeight: 400,
                      color: dark ? "var(--white)" : "var(--navy)",
                      marginBottom: 12,
                    }}
                  >
                    {s.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.88rem",
                      fontWeight: 300,
                      color: dark ? "rgba(255,255,255,0.65)" : "var(--muted)",
                      lineHeight: 1.75,
                    }}
                  >
                    {s.body}
                  </p>
                  {s.link && (
                    <Link
                      href={s.link.href}
                      style={{
                        display: "inline-block",
                        marginTop: 16,
                        fontSize: "0.8rem",
                        fontWeight: 400,
                        color: dark ? "var(--gold-light)" : "var(--navy)",
                        textDecoration: "underline",
                        textUnderlineOffset: 3,
                      }}
                    >
                      {s.link.label}
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
          <p style={{ fontSize: "0.95rem", fontWeight: 300, color: "var(--muted)", lineHeight: 1.8, marginTop: 28 }}>
            Women have been part of this story from the first days. Read the{" "}
            <Link href="/about/history-of-women" style={{ color: "var(--navy)", textDecoration: "underline", textUnderlineOffset: 3 }}>
              History of Women at ISCJ
            </Link>
            .
          </p>
        </Container>
      </section>

      {/* Services overview callout */}
      <section style={{ padding: "0 0 80px" }}>
        <Container style={{ padding: "0 48px" }} className="max-sm:!px-6">
          <div style={{ background: "var(--navy)", padding: "48px 40px", borderLeft: "3px solid var(--gold)" }}>
            <p style={{ fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 12 }}>
              Today
            </p>
            <p style={{ fontSize: "1.05rem", fontWeight: 300, color: "rgba(255,255,255,0.82)", lineHeight: 1.85, maxWidth: 800 }}>
              ISCJ is now represented by an integrated institution offering far more than a
              place of worship — a full-time Islamic school enrolling 480+ students, a weekend
              school serving ~500 students, a library, food pantry, funeral and burial services,
              Zakat distribution, interfaith dialogue initiatives, and an ambitious campus
              expansion spanning 17 acres in Monmouth Junction, NJ.
            </p>
          </div>
        </Container>
      </section>

      {/* The history book */}
      <section style={{ background: "var(--white)", borderTop: "1px solid var(--border)", padding: "80px 0" }}>
        <Container style={{ padding: "0 48px" }} className="max-sm:!px-6">
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}
            className="max-sm:!grid-cols-1 max-sm:!gap-10"
          >
            <div>
              <span className="section-label">The History Book</span>
              <h2 className="section-title" style={{ marginTop: 12, marginBottom: 20 }}>
                Its Historical <em>Journey</em>
              </h2>
              <p style={{ fontSize: "1rem", fontWeight: 300, color: "var(--muted)", lineHeight: 1.8, marginBottom: 16 }}>
                The Islamic Society of Central Jersey: Its Historical Journey was compiled by
                the ISCJ History Project Team and published in 2018. Imam Hamad Chebli proposed
                the project at a general assembly meeting in June 2014, so that the story of
                the society would not be lost as its founding generation retired. The Board of
                Trustees approved it that November.
              </p>
              <p style={{ fontSize: "1rem", fontWeight: 300, color: "var(--muted)", lineHeight: 1.8, marginBottom: 16 }}>
                Over the next three and a half years the team met more than seventy times,
                recorded interviews with founders, and scanned thousands of documents and
                photographs from the ISCJ archives.
              </p>
              <p style={{ fontSize: "0.88rem", fontWeight: 300, color: "var(--muted)", lineHeight: 1.75, marginBottom: 28 }}>
                History Project Team: Br. Shoukat Ali (chairman), Br. Dawud Assad, Imam Hamad
                Ahmad Chebli, Sr. Sogra Saleem, MD, Br. Fakhruddin Ahmed, Br. Arif Khan and
                Sr. Dawlat Chebly.
              </p>
              <a
                href={assetPath("/documents/iscj-history-book.pdf")}
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
                Read the Full Book
              </a>
              <p style={{ fontSize: "0.78rem", fontWeight: 300, color: "var(--muted)", marginTop: 14 }}>
                PDF, 324 pages, 7 MB
              </p>
            </div>
            <div>
              <p style={{ fontSize: "0.72rem", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 8 }}>
                Inside the book
              </p>
              <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                {bookContents.map((item) => (
                  <li
                    key={item}
                    style={{
                      fontFamily: "var(--ff-head)",
                      fontSize: "1.1rem",
                      color: "var(--navy)",
                      lineHeight: 1.4,
                      padding: "14px 0",
                      borderBottom: "1px solid var(--border)",
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
