"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { StatItem } from "@/types";
import MissionVision from "@/components/about/MissionVision";
import { assetPath } from "@/lib/assetPath";

const STATS: StatItem[] = [
  { value: "1970", label: "Founded in Central NJ" },
  { value: "5",    label: "Daily prayers held", dark: true },
  { value: "53+",  label: "Years serving New Jersey" },
  { value: "17",   label: "Acres of campus" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const linkStyle = {
  color: "var(--navy)",
  fontWeight: 400,
  textDecoration: "underline",
  textDecorationColor: "var(--gold)",
  textUnderlineOffset: 4,
};

function ProgramLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" style={linkStyle}>
      {children}
    </a>
  );
}

/* "What we do", one column per kind of service. */
const WHAT_WE_DO: { label: string; body: React.ReactNode }[] = [
  {
    label: "Religious",
    body: (
      <>
        The ISCJ hosts congregational prayer five times a day, weekly jummah prayers,
        extensive annual Ramadan programming and Eid prayers. The ISCJ provides religious
        services that include nikkah (marriage) and janaza (funeral) services. In addition,
        the ISCJ collects and distributes sadaqa and zakat and operates a food pantry.
      </>
    ),
  },
  {
    label: "Educational",
    body: (
      <>
        The educational services include partnering with{" "}
        <ProgramLink href="https://www.nuischool.org/">Noor-Ul-Iman Schools</ProgramLink>, a
        full-time K-12 Islamic school located on the premises and hosting{" "}
        <ProgramLink href="https://www.iscjwes.org/">ISCJ Weekend School</ProgramLink> (K-10),{" "}
        <ProgramLink href="http://sanad.iscj.org">Sanad Institute</ProgramLink>,{" "}
        <ProgramLink href="https://qa.iscj.org/">Quran Academy</ProgramLink> and{" "}
        <ProgramLink href="https://lit.iscj.org/">LiT</ProgramLink> programming. These serve a
        range of age groups from school age children to adult classes, seminars and courses.
      </>
    ),
  },
  {
    label: "Social",
    body: (
      <>
        There are many socializing opportunities at the ISCJ including Ramadan and Eid
        celebrations, annual gala, picnics, monthly senior socials, youth programming and
        special events.
      </>
    ),
  },
];

export default function AboutSection() {
  return (
    <section id="about">
      <div
        style={{
          padding: "120px 48px 0",
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 96,
          alignItems: "center",
        }}
        className="max-sm:!grid-cols-1 max-sm:!gap-14 max-sm:!pt-20 max-sm:!px-6"
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
            We aspire to be the anchor of a model community of practicing Muslims of diverse backgrounds, democratically governed, efficiently served, relating to one another with inclusiveness and tolerance, and interacting with the neighbors and the community at large in an Islamic exemplary fashion.
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
              src={assetPath("/images/mihrab-portrait.jpg")}
              alt="The mihrab in the main prayer hall at ISCJ"
              fill
              style={{ objectFit: "cover", objectPosition: "center 25%" }}
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

      {/* Mission + Vision */}
      <div
        style={{ padding: "96px 48px 0", maxWidth: 1200, margin: "0 auto" }}
        className="max-sm:!pt-16 max-sm:!px-6"
      >
        <MissionVision lightFill="var(--surface)" />
      </div>

      {/* What we do */}
      <div
        style={{ padding: "96px 48px 120px", maxWidth: 1200, margin: "0 auto" }}
        className="max-sm:!pt-16 max-sm:!pb-20 max-sm:!px-6"
      >
        <span className="section-label">What We Do</span>
        <p
          style={{
            fontFamily: "var(--ff-head)",
            fontSize: "clamp(1.5rem, 2.6vw, 2.1rem)",
            fontWeight: 400,
            color: "var(--navy)",
            lineHeight: 1.3,
            maxWidth: 760,
          }}
        >
          The ISCJ provides a multitude of religious, educational and social services.
        </p>
        <div
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 48, marginTop: 48 }}
          className="max-sm:!grid-cols-1 max-sm:!gap-8"
        >
          {WHAT_WE_DO.map((item) => (
            <motion.div
              key={item.label}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              style={{ borderTop: "1px solid var(--border)", paddingTop: 24 }}
            >
              <h3
                style={{
                  fontFamily: "var(--ff-head)",
                  fontSize: "1.4rem",
                  fontWeight: 400,
                  color: "var(--navy)",
                  marginBottom: 12,
                }}
              >
                {item.label}
              </h3>
              <p style={{ fontSize: "0.95rem", fontWeight: 300, color: "var(--muted)", lineHeight: 1.8 }}>
                {item.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
