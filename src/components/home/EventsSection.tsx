"use client";

import { motion } from "framer-motion";
import type { EventCard } from "@/types";

const EVENTS: EventCard[] = [
  { month: "May", day: "02", tag: "Community",  title: "Community Potluck Dinner",   time: "6:30 PM", location: "Main Hall" },
  { month: "May", day: "10", tag: "Education",  title: "Islamic Finance Workshop",   time: "2:00 PM", location: "Conference Room" },
  { month: "May", day: "17", tag: "Youth",      title: "Youth Leadership Summit",    time: "10:00 AM", location: "Community Center" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

export default function EventsSection() {
  return (
    <section id="events">
      <div style={{ padding: "120px 48px", maxWidth: 1200, margin: "0 auto" }}
        className="max-sm:!py-20 max-sm:!px-6"
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginBottom: 56,
            flexWrap: "wrap",
            gap: 20,
          }}
        >
          <div>
            <span className="section-label">Calendar</span>
            <h2 className="section-title">
              Upcoming <em>Events</em>
            </h2>
          </div>
          <a
            href="#"
            style={{
              fontSize: "0.78rem",
              fontWeight: 400,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--navy)",
              textDecoration: "none",
              borderBottom: "1px solid var(--gold)",
              paddingBottom: 2,
              transition: "color 0.2s",
              whiteSpace: "nowrap",
            }}
          >
            View Full Calendar
          </a>
        </div>

        {/* Events grid */}
        <div
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2 }}
          className="max-sm:!grid-cols-1"
        >
          {EVENTS.map((ev, i) => (
            <motion.div
              key={ev.title}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              whileHover={{ y: -3 }}
              style={{ background: "var(--surface)", position: "relative", overflow: "hidden", cursor: "pointer" }}
            >
              {/* Top block */}
              <div
                style={{
                  background: "var(--navy)",
                  padding: "20px 28px",
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                }}
              >
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", minWidth: 48 }}>
                  <span
                    style={{
                      fontSize: "0.6rem",
                      fontWeight: 500,
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "var(--gold)",
                    }}
                  >
                    {ev.month}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--ff-head)",
                      fontSize: "2.2rem",
                      fontWeight: 300,
                      color: "var(--white)",
                      lineHeight: 1,
                    }}
                  >
                    {ev.day}
                  </span>
                </div>
                <span
                  style={{
                    fontSize: "0.6rem",
                    fontWeight: 500,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.4)",
                    background: "rgba(255,255,255,0.07)",
                    padding: "4px 10px",
                    borderRadius: 1,
                    marginLeft: "auto",
                  }}
                >
                  {ev.tag}
                </span>
              </div>

              {/* Body */}
              <div style={{ padding: 28 }}>
                <h4
                  style={{
                    fontFamily: "var(--ff-head)",
                    fontSize: "1.25rem",
                    fontWeight: 500,
                    color: "var(--navy)",
                    lineHeight: 1.25,
                    marginBottom: 10,
                  }}
                >
                  {ev.title}
                </h4>
                <div
                  style={{
                    display: "flex",
                    gap: 16,
                    fontSize: "0.76rem",
                    fontWeight: 300,
                    color: "var(--muted)",
                  }}
                >
                  <span>{ev.time}</span>
                  <span>{ev.location}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
