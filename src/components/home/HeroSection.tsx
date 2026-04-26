"use client";

import Button from "@/components/ui/Button";
import { assetPath } from "@/lib/assetPath";

export default function HeroSection() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        overflow: "hidden",
        padding: "0 24px",
        background: "var(--navy)",
        backgroundImage: `url('${assetPath("/images/hero.jpg")}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(1,25,44,0.72) 0%, rgba(1,25,44,0.55) 50%, rgba(1,25,44,0.80) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 760,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-scheherazade), 'Scheherazade New', serif",
            fontSize: "clamp(1.2rem, 2.5vw, 1.9rem)",
            fontWeight: 400,
            color: "var(--gold)",
            marginBottom: 20,
            opacity: 0.95,
            direction: "rtl",
          }}
        >
          السَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ
        </p>

        <h1
          style={{
            fontFamily: "var(--ff-head)",
            fontSize: "clamp(2.4rem, 5vw, 4.8rem)",
            fontWeight: 400,
            color: "var(--white)",
            lineHeight: 1.1,
            letterSpacing: "0.02em",
            marginBottom: 24,
            whiteSpace: "nowrap",
          }}
        >
          Welcome to{" "}
          <em style={{ fontStyle: "italic", fontWeight: 300, color: "var(--gold)" }}>
            ISCJ
          </em>
        </h1>

        <p
          style={{
            fontSize: "1rem",
            fontWeight: 300,
            color: "rgba(255,255,255,0.65)",
            letterSpacing: "0.06em",
            lineHeight: 1.7,
            maxWidth: 480,
            margin: "0 auto 44px",
          }}
        >
          Islamic Society of Central Jersey — a place of worship, community, and
          lifelong learning in the heart of New Jersey.
        </p>

        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <Button variant="primary" href="#events">Upcoming Events</Button>
          <Button variant="outline" href="#about">Learn More</Button>
        </div>
      </div>

      {/* Scroll hint */}
      <div
        style={{
          position: "absolute",
          bottom: 36,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          color: "rgba(255,255,255,0.3)",
          fontSize: "0.65rem",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
        }}
      >
        <div
          className="scroll-hint-line"
          style={{
            width: 1,
            height: 48,
            background: "linear-gradient(to bottom, rgba(255,255,255,0.3), transparent)",
          }}
        />
      </div>
    </section>
  );
}
