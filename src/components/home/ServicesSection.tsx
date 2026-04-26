"use client";

import { motion } from "framer-motion";

const SERVICES = [
  {
    title: "Daily Prayer",
    description: "All five daily prayers held in congregation, led by qualified imams. Open to the entire Muslim community.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" width={40} height={40} style={{ opacity: 0.7 }}>
        <path d="M20 4 L20 36 M4 20 L36 20 M4 4 L36 36 M36 4 L4 36" stroke="#012544" strokeWidth="1.2" opacity="0.5"/>
        <circle cx="20" cy="20" r="7" stroke="#012544" strokeWidth="1.2"/>
      </svg>
    ),
  },
  {
    title: "Weekend School",
    description: "Quran, Arabic, and Islamic studies for children and youth. Building the next generation on a foundation of faith.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" width={40} height={40} style={{ opacity: 0.7 }}>
        <rect x="6" y="8" width="28" height="24" rx="1" stroke="#012544" strokeWidth="1.2"/>
        <path d="M13 8 L13 4 M27 8 L27 4" stroke="#012544" strokeWidth="1.2"/>
        <path d="M6 16 L34 16" stroke="#012544" strokeWidth="1.2"/>
      </svg>
    ),
  },
  {
    title: "Jumu'ah Prayer",
    description: "Friday congregational prayer with a weekly khutbah addressing timely topics in faith and community life.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" width={40} height={40} style={{ opacity: 0.7 }}>
        <path d="M8 32 L20 8 L32 32" stroke="#012544" strokeWidth="1.2"/>
        <path d="M12 24 L28 24" stroke="#012544" strokeWidth="1.2"/>
      </svg>
    ),
  },
  {
    title: "Community Events",
    description: "Monthly gatherings, Eid celebrations, community iftars, and interfaith events that bring families together.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" width={40} height={40} style={{ opacity: 0.7 }}>
        <circle cx="16" cy="14" r="6" stroke="#012544" strokeWidth="1.2"/>
        <circle cx="27" cy="14" r="6" stroke="#012544" strokeWidth="1.2"/>
        <path d="M4 34 C4 26 28 26 28 34" stroke="#012544" strokeWidth="1.2"/>
      </svg>
    ),
  },
  {
    title: "Counseling",
    description: "Pastoral counseling, marriage support, and referrals to trusted mental health resources rooted in Islamic values.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" width={40} height={40} style={{ opacity: 0.7 }}>
        <path d="M20 6 C13 6 7 12 7 19 C7 27 20 36 20 36 C20 36 33 27 33 19 C33 12 27 6 20 6Z" stroke="#012544" strokeWidth="1.2"/>
        <circle cx="20" cy="19" r="4" stroke="#012544" strokeWidth="1.2"/>
      </svg>
    ),
  },
  {
    title: "Social Services",
    description: "Food pantry, financial assistance referrals, and new Muslim support programs for those in need.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" width={40} height={40} style={{ opacity: 0.7 }}>
        <path d="M8 10 L32 10 L32 30 L8 30 Z" stroke="#012544" strokeWidth="1.2"/>
        <path d="M8 10 L20 20 L32 10" stroke="#012544" strokeWidth="1.2"/>
      </svg>
    ),
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.07 },
  }),
};

export default function ServicesSection() {
  return (
    <section id="services" style={{ background: "var(--surface)", padding: "120px 48px" }}
      className="max-sm:!py-20 max-sm:!px-6"
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 64,
            marginBottom: 72,
            alignItems: "end",
          }}
          className="max-sm:!grid-cols-1 max-sm:!gap-6"
        >
          <div>
            <span className="section-label">What We Offer</span>
            <h2 className="section-title">
              Programs &<br />
              <em>Services</em>
            </h2>
          </div>
          <p style={{ fontSize: "1rem", fontWeight: 300, color: "var(--muted)", lineHeight: 1.8 }}>
            We provide a broad range of services to nurture faith, strengthen community bonds, and support families at every stage of life.
          </p>
        </div>

        {/* Cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 2,
          }}
          className="max-sm:!grid-cols-1"
        >
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(1,25,44,0.08)" }}
              style={{
                background: "var(--white)",
                padding: "48px 36px",
                cursor: "default",
              }}
            >
              <div style={{ marginBottom: 28 }}>{service.icon}</div>
              <h3
                style={{
                  fontFamily: "var(--ff-head)",
                  fontSize: "1.4rem",
                  fontWeight: 500,
                  color: "var(--navy)",
                  marginBottom: 14,
                  lineHeight: 1.2,
                }}
              >
                {service.title}
              </h3>
              <p style={{ fontSize: "0.88rem", fontWeight: 300, color: "var(--muted)", lineHeight: 1.75 }}>
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
