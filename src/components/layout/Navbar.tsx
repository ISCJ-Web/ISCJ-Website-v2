"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Prayer Times", href: "#prayer-times" },
  { label: "Events", href: "#events" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState("#hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);

      const sections = document.querySelectorAll<HTMLElement>("section[id], div[id]");
      let current = "#hero";
      sections.forEach((s) => {
        if (window.scrollY >= s.offsetTop - 120) current = "#" + s.id;
      });
      setActiveHref(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? "var(--navy-deep)" : "transparent",
        boxShadow: scrolled ? "0 1px 24px rgba(1,25,44,0.25)" : "none",
        transition: "background 0.4s, box-shadow 0.4s",
        overflow: "visible",
      }}
    >
      {/* Top tier */}
      <div
        style={{
          padding: "0 48px",
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          alignItems: "center",
          height: 64,
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "1px solid transparent",
          transition: "border-color 0.4s",
        }}
      >
        {/* Social icons */}
        <div
          style={{
            display: "flex",
            gap: 14,
            alignItems: "center",
            opacity: scrolled ? 1 : 0,
            pointerEvents: scrolled ? "auto" : "none",
            transition: "opacity 0.4s",
          }}
        >
          <a href="#" title="Facebook" style={{ color: "rgba(255,255,255,0.5)", display: "flex", alignItems: "center", transition: "color 0.2s" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
            </svg>
          </a>
          <a href="#" title="YouTube" style={{ color: "rgba(255,255,255,0.5)", display: "flex", alignItems: "center", transition: "color 0.2s" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
              <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#011830"/>
            </svg>
          </a>
          <a href="#" title="Instagram" style={{ color: "rgba(255,255,255,0.5)", display: "flex", alignItems: "center", transition: "color 0.2s" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" fill="#011830"/>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="#011830" strokeWidth="2"/>
            </svg>
          </a>
          <a href="tel:+17325550100" title="Phone" style={{ color: "rgba(255,255,255,0.5)", display: "flex", alignItems: "center", transition: "color 0.2s" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.44a2 2 0 0 1 1.99-2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
          </a>
          <a href="mailto:info@iscj.org" title="Email" style={{ color: "rgba(255,255,255,0.5)", display: "flex", alignItems: "center", transition: "color 0.2s" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6" stroke="#011830" strokeWidth="1.5" fill="none"/>
            </svg>
          </a>
        </div>

        {/* Logo */}
        <a
          href="#hero"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 4,
            textDecoration: "none",
            justifySelf: "center",
            opacity: scrolled ? 1 : 0,
            pointerEvents: scrolled ? "auto" : "none",
            transition: "opacity 0.4s",
          }}
        >
          <Image src="/images/iscj-white-logo.png" alt="ISCJ" width={80} height={36} style={{ height: 36, width: "auto" }} />
          <span
            style={{
              fontFamily: "var(--ff-body)",
              fontSize: "0.6rem",
              fontWeight: 500,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.65)",
              whiteSpace: "nowrap",
            }}
          >
            Islamic Society of Central Jersey
          </span>
        </a>

        {/* Donate button */}
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <a
            href="#donate"
            style={{
              background: "transparent",
              color: "var(--white)",
              fontFamily: "var(--ff-body)",
              fontSize: "0.7rem",
              fontWeight: 500,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              padding: "8px 22px",
              border: "1px solid rgba(255,255,255,0.45)",
              textDecoration: "none",
              display: "inline-block",
              transition: "border-color 0.2s, background 0.2s, color 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "var(--white)";
              (e.currentTarget as HTMLAnchorElement).style.color = "var(--navy-deep)";
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--white)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
              (e.currentTarget as HTMLAnchorElement).style.color = "var(--white)";
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.45)";
            }}
          >
            Donate
          </a>
        </div>
      </div>

      {/* Bottom tier — nav links */}
      <div
        style={{
          padding: "0 48px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: 44,
          overflow: "visible",
        }}
      >
        <ul
          style={{
            display: "flex",
            alignItems: "center",
            gap: 48,
            listStyle: "none",
            position: "relative",
            top: scrolled ? 0 : -54,
            transition: "top 0.35s ease",
            margin: 0,
          }}
        >
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                style={{
                  fontSize: "0.78rem",
                  fontWeight: 400,
                  letterSpacing: "0.08em",
                  color: activeHref === link.href ? "var(--white)" : "rgba(255,255,255,0.72)",
                  textDecoration: "none",
                  position: "relative",
                  paddingBottom: 2,
                  transition: "color 0.2s",
                  whiteSpace: "nowrap",
                }}
              >
                {link.label}
                {/* Gold underline */}
                <span
                  style={{
                    position: "absolute",
                    bottom: -2,
                    left: 0,
                    right: 0,
                    height: 1,
                    background: "var(--gold)",
                    transform: activeHref === link.href ? "scaleX(1)" : "scaleX(0)",
                    transition: "transform 0.2s",
                    display: "block",
                  }}
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
