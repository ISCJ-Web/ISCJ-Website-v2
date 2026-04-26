import Button from "@/components/ui/Button";

export default function DonateCTASection() {
  return (
    <section
      id="donate"
      className="geo-pattern"
      style={{
        background: "var(--navy)",
        padding: "120px 48px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: 720,
          margin: "0 auto",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <span className="section-label" style={{ textAlign: "center" }}>
          Support ISCJ
        </span>
        <h2
          style={{
            fontFamily: "var(--ff-head)",
            fontSize: "clamp(2.2rem, 5vw, 4rem)",
            fontWeight: 400,
            color: "var(--white)",
            lineHeight: 1.1,
            marginBottom: 24,
          }}
        >
          Help Us{" "}
          <em style={{ fontStyle: "italic", fontWeight: 300, color: "var(--gold)" }}>
            Serve
            <br />
            the Community
          </em>
        </h2>
        <p
          style={{
            fontSize: "1rem",
            fontWeight: 300,
            color: "rgba(255,255,255,0.55)",
            lineHeight: 1.8,
            marginBottom: 44,
          }}
        >
          Your generous donations fund our programs, maintain our facilities, and help us reach families in need. Every contribution — large or small — makes a meaningful difference.
        </p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <Button variant="primary" href="#">Donate Now</Button>
          <Button variant="outline" href="#">Become a Member</Button>
        </div>
      </div>
    </section>
  );
}
