"use client";

import { motion } from "framer-motion";
import type { EventCard } from "@/types";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

const shell: React.CSSProperties = {
  background: "var(--surface)",
  position: "relative",
  overflow: "hidden",
  cursor: "pointer",
};

type Props = {
  ev: EventCard;
  index?: number;
  /** Off when the card must be visible without first scrolling into view. */
  animate?: boolean;
};

/**
 * The event card. Kept apart from EventsSection so the card can be rendered on
 * its own, and so the section is left holding only the layout around it.
 */
export default function EventCardView({ ev, index = 0, animate = true }: Props) {
  const body = (
    <>
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
    </>
  );

  if (!animate) return <div style={shell}>{body}</div>;

  return (
    <motion.div
      custom={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      whileHover={{ y: -3 }}
      style={shell}
    >
      {body}
    </motion.div>
  );
}
