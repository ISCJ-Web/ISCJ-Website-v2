"use client";

import Image from "next/image";
import { assetPath } from "@/lib/assetPath";

const SOCIAL_LINKS = [
  {
    title: "Facebook",
    href: "https://www.facebook.com/ISCJ1/",
    path: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/iscj_official/",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z",
  },
  {
    title: "YouTube",
    href: "https://www.youtube.com/user/iscjtv",
    path: "M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z",
  },
];

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
    <footer
      id="contact"
      style={{ background: "var(--navy-deep)", color: "rgba(255,255,255,0.5)" }}
      className="footer-root"
    >
      {/* Top grid */}
      <div
        className="footer-grid"
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
            <a href="mailto:admin@iscj.org" style={{ color: "rgba(255,255,255,0.35)", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--gold)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.35)")}
            >admin@iscj.org</a>
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
        className="footer-bottom"
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
        <div style={{ display: "flex", gap: 10 }}>
          {SOCIAL_LINKS.map((s) => (
            <a
              key={s.title}
              href={s.href}
              title={s.title}
              target="_blank"
              rel="noopener noreferrer"
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
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d={s.path} />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
