"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { StatItem } from "@/types";
import { assetPath } from "@/lib/assetPath";

const STATS: StatItem[] = [
  { value: "500+", label: "Families served" },
  { value: "5",    label: "Daily prayers held", dark: true },
  { value: "20+",  label: "Years of service" },
  { value: "12+",  label: "Community programs" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function AboutSection() {
  return (
    <section id="about">
      <div
        style={{
          padding: "120px 48px",
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 96,
          alignItems: "center",
        }}
        className="max-sm:!grid-cols-1 max-sm:!gap-14 max-sm:!py-20 max-sm:!px-6"
      >
        {/* Text + stats */}
        <div>
          <span className="section-label">About Us</span>
          <h2 className="section-title">
            A Community
            <br />
            <em>Rooted in Faith</em>
          </h2>

          <p style={{ marginTop: 24, fontSize: "1.05rem", fontWeight: 300, color: "var(--muted)", lineHeight: 1.85 }}>
            The Islamic Society of Central Jersey has served as a spiritual home and community center for Muslim families across Central New Jersey for decades. We are committed to fostering a welcoming, inclusive environment for worship, education, and service.
          </p>
          <p style={{ marginTop: 16, fontSize: "1.05rem", fontWeight: 300, color: "var(--muted)", lineHeight: 1.85 }}>
            From daily prayers to youth programs, from community iftars to charitable outreach — ISCJ is built on the values of compassion, knowledge, and unity.
          </p>

          {/* Stats grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 2,
              marginTop: 48,
            }}
          >
            {STATS.map((stat, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                style={{
                  background: stat.dark ? "var(--navy)" : "var(--surface)",
                  padding: "32px 28px",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--ff-head)",
                    fontSize: "3rem",
                    fontWeight: 300,
                    color: stat.dark ? "var(--white)" : "var(--navy)",
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontSize: "0.78rem",
                    fontWeight: 400,
                    letterSpacing: "0.06em",
                    color: stat.dark ? "rgba(255,255,255,0.5)" : "var(--muted)",
                    marginTop: 8,
                  }}
                >
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Visual */}
        <div style={{ position: "relative" }} className="max-sm:order-first">
          <div style={{ width: "100%", aspectRatio: "4/5", position: "relative", overflow: "hidden" }}>
            <Image
              src={assetPath("/images/hero.jpg")}
              alt="ISCJ community"
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </div>
          {/* Gold accent border */}
          <div
            style={{
              position: "absolute",
              bottom: -24,
              left: 24,
              right: -24,
              top: 24,
              border: "1px solid var(--gold)",
              opacity: 0.25,
              zIndex: -1,
            }}
          />
        </div>
      </div>
    </section>
  );
}
