import Container from "@/components/ui/Container";

export default function Page() {
  return (
    <main style={{ paddingTop: 108, minHeight: "60vh" }}>
      <Container style={{ padding: "80px 48px" }}>
        <span className="section-label">Coming Soon</span>
        <h1
          style={{
            fontFamily: "var(--ff-head)",
            fontSize: "clamp(2rem, 4vw, 3.2rem)",
            fontWeight: 400,
            color: "var(--navy)",
            lineHeight: 1.1,
            marginBottom: 24,
          }}
        >
          Sadaqah
        </h1>
        <p style={{ fontSize: "1rem", fontWeight: 300, color: "var(--muted)", lineHeight: 1.8 }}>
          This page is coming soon. Check back later for updates.
        </p>
      </Container>
    </main>
  );
}
