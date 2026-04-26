"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { assetPath } from "@/lib/assetPath";

const SOCIAL_LINKS = [
  /**
   * The Path variable is the SVG path for the social icon.
   */
  {
    title: "Facebook",
    href: "https://www.facebook.com/ISCJ1/",
    external: true,
    path: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/iscj_official/",
    external: true,
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z",
  },
  {
    title: "YouTube",
    href: "https://www.youtube.com/user/iscjtv",
    external: true,
    path: "M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z",
  },
  {
    title: "Email",
    href: "mailto:admin@iscj.org",
    external: false,
    path: "M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z",
  },
];

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
  const [mobileOpen, setMobileOpen] = useState(false);

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

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (mobileOpen) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [mobileOpen]);

  // Close drawer when viewport grows past mobile breakpoint
  useEffect(() => {
    const mql = window.matchMedia("(min-width: 640px)");
    const handler = (e: MediaQueryListEvent) => {
      if (e.matches) setMobileOpen(false);
    };
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  const navBg = scrolled || mobileOpen ? "var(--navy-deep)" : "transparent";

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: navBg,
        boxShadow: scrolled || mobileOpen ? "0 1px 24px rgba(1,25,44,0.25)" : "none",
        transition: "background 0.4s, box-shadow 0.4s",
        overflow: "visible",
      }}
    >
      {/* ===================== DESKTOP ===================== */}
      <div
        className="desktop-only"
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
          {SOCIAL_LINKS.map((s) => (
            <a
              key={s.title}
              href={s.href}
              title={s.title}
              target={s.external ? "_blank" : undefined}
              rel={s.external ? "noopener noreferrer" : undefined}
              style={{ color: "rgba(255,255,255,0.5)", display: "flex", alignItems: "center", transition: "color 0.2s" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--gold)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.5)")}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d={s.path} />
              </svg>
            </a>
          ))}
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
          <Image src={assetPath("/images/iscj-white-logo.png")} alt="ISCJ" width={80} height={36} style={{ height: 36, width: "auto" }} />
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

      {/* Desktop bottom tier — nav links */}
      <div
        className="desktop-only"
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

      {/* ===================== MOBILE ===================== */}
      <div
        className="nav-mobile-bar"
        style={{
          padding: "0 20px",
          alignItems: "center",
          justifyContent: "space-between",
          height: 64,
          gap: 12,
        }}
      >
        {/* Brand: logo + 3-line wordmark */}
        <a
          href="#hero"
          onClick={() => setMobileOpen(false)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            textDecoration: "none",
            minWidth: 0,
          }}
        >
          <Image
            src={assetPath("/images/iscj-white-logo.png")}
            alt="ISCJ"
            width={56}
            height={40}
            style={{ height: 40, width: "auto", flexShrink: 0 }}
          />
          <span
            style={{
              fontFamily: "var(--ff-body)",
              fontSize: "0.62rem",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--white)",
              lineHeight: 1.25,
              display: "block",
            }}
          >
            Islamic
            <br />
            Society of
            <br />
            Central Jersey
          </span>
        </a>

        {/* Hamburger */}
        <button
          type="button"
          aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
          className={`hamburger${mobileOpen ? " is-open" : ""}`}
          style={{ flexShrink: 0 }}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-drawer"
            className="nav-mobile-drawer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.4, 0, 0.2, 1] }}
            style={{
              overflow: "hidden",
              borderTop: "1px solid rgba(255,255,255,0.08)",
              background: "var(--navy-deep)",
            }}
          >
            <ul
              style={{
                listStyle: "none",
                margin: 0,
                padding: "12px 0 20px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {NAV_LINKS.map((link, i) => {
                const active = activeHref === link.href;
                return (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -8 }}
                    transition={{ delay: 0.05 + i * 0.05, duration: 0.25 }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 14,
                        padding: "14px 24px",
                        fontFamily: "var(--ff-body)",
                        fontSize: "0.95rem",
                        fontWeight: 400,
                        letterSpacing: "0.06em",
                        color: active ? "var(--white)" : "rgba(255,255,255,0.72)",
                        textDecoration: "none",
                        borderLeft: active
                          ? "2px solid var(--gold)"
                          : "2px solid transparent",
                        transition: "color 0.2s, border-color 0.2s",
                      }}
                    >
                      <span
                        style={{
                          width: 6,
                          height: 1,
                          background: active ? "var(--gold)" : "rgba(255,255,255,0.35)",
                          display: "inline-block",
                        }}
                      />
                      {link.label}
                    </a>
                  </motion.li>
                );
              })}
            </ul>

            {/* Donate CTA in drawer */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.05 + NAV_LINKS.length * 0.05, duration: 0.25 }}
              style={{ padding: "4px 24px 20px" }}
            >
              <a
                href="#donate"
                onClick={() => setMobileOpen(false)}
                style={{
                  display: "block",
                  background: "var(--gold)",
                  color: "var(--navy-deep)",
                  fontFamily: "var(--ff-body)",
                  fontSize: "0.78rem",
                  fontWeight: 500,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  textAlign: "center",
                  padding: "14px 20px",
                  textDecoration: "none",
                  borderRadius: 2,
                }}
              >
                Donate
              </a>
            </motion.div>

            {/* Social row in drawer */}
            <div
              style={{
                display: "flex",
                gap: 20,
                alignItems: "center",
                padding: "12px 24px 24px",
                borderTop: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.title}
                  href={s.href}
                  title={s.title}
                  target={s.external ? "_blank" : undefined}
                  rel={s.external ? "noopener noreferrer" : undefined}
                  onClick={() => setMobileOpen(false)}
                  style={{ color: "rgba(255,255,255,0.55)", display: "flex", transition: "color 0.2s" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--gold)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.55)")}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
