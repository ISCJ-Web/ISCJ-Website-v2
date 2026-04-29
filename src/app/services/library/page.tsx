import Container from "@/components/ui/Container";
import { assetPath } from "@/lib/assetPath";

const hours = [
  { day: "Friday", time: "4:00 PM – 8:00 PM" },
  { day: "Saturday", time: "3:00 PM – 6:00 PM" },
  { day: "Sunday", time: "10:00 AM – 2:00 PM" },
];

const subjects = [
  "Qur'an & Tajweed", "Hadith", "Fiqh & Fatwa", "Seerah of the Prophet ص",
  "The Prophets", "Hajj & Fasting", "Fundamentals of Islam", "History of the Islamic World",
  "Comparative Religion", "Family Topics", "Women & Youth", "Human Rights",
  "Middle East History", "Politics & Current Affairs", "Great Muslim People",
  "Dictionary & Reference", "Computer", "Miscellaneous Topics",
];

const publications = [
  "Al Jumuah", "Al-Madinah", "Halal Consumer", "Impact International",
  "InSpire", "Islamic Horizons", "Tarjuman-ul-Quran", "The American Muslim",
  "The Message International", "The Minaret", "Iqra",
];

const quranLanguages = [
  "Arabic", "Albanian", "Braille", "Bengali", "Bosnian", "Chinese",
  "English", "French", "German", "Farsi", "Hindi", "Kazakh", "Spanish",
  "Turkish", "Thai", "Urdu",
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
            ISCJ <em>Library</em>
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
            The ISCJ Library is open to the public. Membership is required to borrow
            materials. NUI students are welcome to access the library during school hours.
            No eating or drinking permitted inside.
          </p>
        </Container>
      </section>

      {/* Hours + Membership */}
      <section style={{ padding: "80px 0" }}>
        <Container style={{ padding: "0 48px" }}>
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px" }}
            className="max-sm:!grid-cols-1"
          >
            <div style={{ background: "var(--navy)", padding: "48px 36px" }}>
              <span style={{ fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", display: "block", marginBottom: 16 }}>
                Hours
              </span>
              <h3 style={{ fontFamily: "var(--ff-head)", fontSize: "1.6rem", fontWeight: 400, color: "var(--white)", marginBottom: 28 }}>
                Library <em>Hours</em>
              </h3>
              {hours.map((h) => (
                <div
                  key={h.day}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "14px 0",
                    borderBottom: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <span style={{ fontFamily: "var(--ff-head)", fontSize: "1.05rem", color: "var(--white)" }}>{h.day}</span>
                  <span style={{ fontSize: "0.88rem", fontWeight: 300, color: "rgba(255,255,255,0.6)" }}>{h.time}</span>
                </div>
              ))}
              <div style={{ marginTop: 28 }}>
                <p style={{ fontSize: "0.72rem", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 8 }}>
                  Contact
                </p>
                <a href="mailto:admin@iscj.org" style={{ fontFamily: "var(--ff-head)", fontSize: "1rem", color: "var(--white)", textDecoration: "none" }}>
                  admin@iscj.org
                </a>
              </div>
            </div>

            <div style={{ background: "var(--white)", padding: "48px 36px" }}>
              <span style={{ fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", display: "block", marginBottom: 16 }}>
                Membership & Access
              </span>
              <h3 style={{ fontFamily: "var(--ff-head)", fontSize: "1.6rem", fontWeight: 400, color: "var(--navy)", marginBottom: 20 }}>
                Open to <em>the Public</em>
              </h3>
              <p style={{ fontSize: "0.95rem", fontWeight: 300, color: "var(--muted)", lineHeight: 1.8, marginBottom: 16 }}>
                The library is open to all community members. A membership is required to
                check out materials. Visit us during library hours to register.
              </p>
              <p style={{ fontSize: "0.95rem", fontWeight: 300, color: "var(--muted)", lineHeight: 1.8, marginBottom: 16 }}>
                NUI (Noor-Ul-Iman) students may access the library during school hours
                without a separate membership.
              </p>
              <p style={{ fontSize: "0.95rem", fontWeight: 300, color: "var(--muted)", lineHeight: 1.8 }}>
                You may request new books by sharing feedback with the Library Committee.
                Contact us at admin@iscj.org with your suggestions.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Collection */}
      <section style={{ padding: "0 0 80px" }}>
        <Container style={{ padding: "0 48px" }}>
          <span className="section-label">Collection</span>
          <h2 className="section-title" style={{ marginTop: 12, marginBottom: 48 }}>
            What&apos;s in the <em>Library</em>
          </h2>
          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2px" }}
            className="max-sm:!grid-cols-1"
          >
            <div style={{ background: "var(--white)", padding: "40px 32px" }}>
              <p style={{ fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 16 }}>
                Book Subjects
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {subjects.map((s) => (
                  <span
                    key={s}
                    style={{ fontSize: "0.78rem", fontWeight: 300, color: "var(--muted)", background: "var(--surface)", padding: "4px 10px", borderRadius: 2 }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ background: "var(--navy)", padding: "40px 32px" }}>
              <p style={{ fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 16 }}>
                Periodicals
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {publications.map((p) => (
                  <li key={p} style={{ fontSize: "0.88rem", fontWeight: 300, color: "rgba(255,255,255,0.7)", padding: "8px 0", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                    {p}
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ background: "var(--white)", padding: "40px 32px" }}>
              <p style={{ fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 8 }}>
                Qur&apos;an Translations
              </p>
              <p style={{ fontSize: "0.82rem", fontWeight: 300, color: "var(--muted)", marginBottom: 16 }}>
                Available in 16 languages:
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {quranLanguages.map((lang) => (
                  <span key={lang} style={{ fontSize: "0.78rem", fontWeight: 300, color: "var(--muted)", background: "var(--surface)", padding: "4px 10px", borderRadius: 2 }}>
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
