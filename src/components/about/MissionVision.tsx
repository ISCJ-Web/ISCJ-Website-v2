"use client";

import { motion } from "framer-motion";

/* The official statements, shown on the home page and on Who We Are. Edit the
   wording here and both pages follow. */
const STATEMENTS = [
  {
    label: "Mission",
    text: "To provide a welcoming space and relevant programming that exemplifies Quranic ideals and the Prophetic model to serve the greater Central Jersey community.",
    dark: true,
  },
  {
    label: "Vision",
    text: "To inspire a beautiful and excellent example of Islam on our campus, offering religious, spiritual and educational programming to preserve our Islamic and Muslim heritage.",
    dark: false,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

type MissionVisionProps = {
  /** Fill of the light card. Pass the surface color on white page backgrounds. */
  lightFill?: string;
};

export default function MissionVision({ lightFill = "var(--white)" }: MissionVisionProps) {
  return (
    <div
      style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}
      className="max-sm:!grid-cols-1"
    >
      {STATEMENTS.map((s) => (
        <motion.div
          key={s.label}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          style={{ background: s.dark ? "var(--navy)" : lightFill, padding: "48px 36px" }}
        >
          <span
            style={{
              fontSize: "0.68rem",
              fontWeight: 500,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--gold)",
              display: "block",
              marginBottom: 16,
            }}
          >
            {s.label}
          </span>
          <p
            style={{
              fontFamily: "var(--ff-head)",
              fontSize: "1.5rem",
              fontWeight: 400,
              lineHeight: 1.4,
              color: s.dark ? "var(--white)" : "var(--navy)",
            }}
          >
            {s.text}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
