"use client";

import Image from "next/image";
import { assetPath } from "@/lib/assetPath";

const FOOTER_COLS = [
  {
    heading: "Mosque",
    links: [
      { label: "Prayer Times", href: "#prayer-times" },
      { label: "Jumu'ah", href: "#events" },
      { label: "Ramadan", href: "#announcements" },
      { label: "Directions", href: "#" },
    ],
  },
  {
    heading: "Programs",
    links: [
      { label: "Weekend School", href: "#services" },
      { label: "Youth Programs", href: "#services" },
      { label: "Adult Education", href: "#services" },
      { label: "Social Services", href: "#services" },
    ],
  },
  {
    heading: "Community",
    links: [
      { label: "Events Calendar", href: "#events" },
      { label: "Announcements", href: "#announcements" },
      { label: "Volunteer", href: "#" },
      { label: "Contact Us", href: "#contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer id="contact" style={{ background: "var(--navy-deep)", padding: "72px 48px 36px", color: "rgba(255,255,255,0.5)" }}>
      {/* Top grid */}
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1fr",
          gap: 48,
          paddingBottom: 56,
          borderBottom: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        {/* Brand col */}
        <div>
          <Image src={assetPath("/images/iscj-white-logo.png")} alt="ISCJ" width={100} height={44} style={{ height: 44, width: "auto", marginBottom: 16 }} />
          <p style={{ fontSize: "0.85rem", fontWeight: 300, lineHeight: 1.75, color: "rgba(255,255,255,0.4)", maxWidth: 280 }}>
            Islamic Society of Central Jersey — a place of worship, learning, and community for Muslim families throughout Central New Jersey.
          </p>
          <div style={{ marginTop: 20, fontSize: "0.8rem", fontWeight: 300, color: "rgba(255,255,255,0.35)", lineHeight: 1.7 }}>
            123 Main Street<br />
            East Brunswick, NJ 08816<br />
            (732) 555-0100
          </div>
        </div>

        {/* Nav cols */}
        {FOOTER_COLS.map((col) => (
          <div key={col.heading}>
            <h5
              style={{
                fontSize: "0.68rem",
                fontWeight: 500,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "var(--gold)",
                marginBottom: 20,
              }}
            >
              {col.heading}
            </h5>
            <ul style={{ listStyle: "none" }}>
              {col.links.map((link, i) => (
                <li key={link.href + i} style={{ marginTop: i > 0 ? 10 : 0 }}>
                  <a
                    href={link.href}
                    style={{
                      fontSize: "0.85rem",
                      fontWeight: 300,
                      color: "rgba(255,255,255,0.45)",
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--white)")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.45)")}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom row */}
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          paddingTop: 28,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        <p style={{ fontSize: "0.75rem", fontWeight: 300 }}>
          © 2026 Islamic Society of Central Jersey. All rights reserved.
        </p>
        <div style={{ display: "flex", gap: 16 }}>
          {[
            { label: "f", title: "Facebook" },
            { label: "in", title: "Instagram" },
            { label: "yt", title: "YouTube" },
          ].map((s) => (
            <a
              key={s.title}
              href="#"
              title={s.title}
              style={{
                width: 36,
                height: 36,
                border: "1px solid rgba(255,255,255,0.12)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 2,
                textDecoration: "none",
                color: "rgba(255,255,255,0.4)",
                fontSize: "0.75rem",
                transition: "border-color 0.2s, color 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--gold)";
                (e.currentTarget as HTMLAnchorElement).style.color = "var(--gold)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.12)";
                (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.4)";
              }}
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
