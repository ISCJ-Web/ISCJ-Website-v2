"use client";

import { motion } from "framer-motion";
import type { Announcement } from "@/types";

const ANNOUNCEMENTS: Announcement[] = [
  {
    title: "Ramadan 2026 Schedule Now Available",
    description: "Full Taraweeh, Tahajjud, and Suhoor times available. Pick up printed schedules at the front desk.",
    date: "Apr 20",
  },
  {
    title: "New Quran Memorization Circle — Enrolling Now",
    description: "Weekly hifz circle for adults beginning May 5th. Limited spots. Contact the school office to register.",
    date: "Apr 18",
  },
  {
    title: "Parking Update: East Lot Closed May 3–7",
    description: "Resurfacing work will take place. Please use the west entrance and overflow parking on Birch Street.",
    date: "Apr 15",
  },
  {
    title: "Volunteer Appreciation Night — Thank You!",
    description: "Over 80 volunteers were recognized at our annual appreciation dinner. Jazakum Allahu Khayran.",
    date: "Apr 10",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08 },
  }),
};

export default function AnnouncementsSection() {
  return (
    <section
      id="announcements"
      style={{
        background: "var(--surface)",
        padding: "80px 48px",
        borderTop: "1px solid var(--border)",
      }}
      className="max-sm:!py-16 max-sm:!px-6"
    >
      <div
        style={{ maxWidth: 1200, margin: "0 auto", display: "flex", gap: 80, alignItems: "flex-start" }}
        className="max-sm:!flex-col max-sm:!gap-8"
      >
        {/* Label col */}
        <div style={{ minWidth: 200 }}>
          <span className="section-label">Latest</span>
          <h2
            className="section-title"
            style={{ fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)" }}
          >
            News &<br />
            <em>Announcements</em>
          </h2>
        </div>

        {/* Items */}
        <div style={{ flex: 1 }}>
          {ANNOUNCEMENTS.map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              style={{
                padding: "24px 0",
                borderBottom: "1px solid var(--border)",
                borderTop: i === 0 ? "1px solid var(--border)" : undefined,
                display: "flex",
                gap: 32,
                alignItems: "baseline",
              }}
            >
              <div
                style={{
                  width: 6,
                  height: 6,
                  background: "var(--gold)",
                  borderRadius: "50%",
                  flexShrink: 0,
                  marginTop: 8,
                }}
              />
              <div>
                <h4 style={{ fontSize: "1rem", fontWeight: 500, color: "var(--navy)", marginBottom: 4 }}>
                  {item.title}
                </h4>
                <p style={{ fontSize: "0.85rem", fontWeight: 300, color: "var(--muted)", lineHeight: 1.6 }}>
                  {item.description}
                </p>
              </div>
              <div
                style={{
                  fontSize: "0.72rem",
                  fontWeight: 400,
                  color: "var(--muted)",
                  whiteSpace: "nowrap",
                  marginLeft: "auto",
                }}
              >
                {item.date}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
