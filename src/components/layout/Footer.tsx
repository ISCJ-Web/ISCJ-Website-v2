"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
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

const EMAIL_CONTACTS = [
  { label: "General Inquiry", email: "admin@iscj.org" },
  { label: "Advertise With Us", email: "advertising@iscj.org" },
  { label: "Volunteer", email: "volunteers@iscj.org" },
  { label: "Imam", email: "imam@iscj.org" },
  { label: "Feedback", email: "feedback@iscj.org" },
];

const QUICK_LINKS = [
  { label: "About", href: "/about/who-are-we" },
  { label: "Donate", href: "/donate" },
  { label: "Endowment Fund", href: "/services/endowment-fund" },
  { label: "Contact Us", href: "/about/contact" },
];

const PROGRAMS = [
  { label: "Quran Academy", href: "https://qa.iscj.org/", external: true },
  { label: "LIT", href: "https://lit.iscj.org/", external: true },
  { label: "Weekend School", href: "https://www.iscjwes.org/", external: true },
  { label: "NUI School", href: "https://www.nuischool.org/", external: true },
  { label: "Sanad", href: "http://sanad.iscj.org", external: true },
];

function FooterLink({ href, children, external }: { href: string; children: React.ReactNode; external?: boolean }) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      style={{
        fontSize: "0.85rem",
        fontWeight: 300,
        color: "rgba(255,255,255,0.45)",
        textDecoration: "none",
        transition: "color 0.2s",
        display: "block",
      }}
      onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--white)")}
      onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.45)")}
    >
      {children}
    </a>
  );
}

function ColHeading({ children }: { children: React.ReactNode }) {
  return (
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
      {children}
    </h5>
  );
}

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <footer
      id="contact"
      style={{ background: "var(--navy-deep)", color: "rgba(255,255,255,0.5)" }}
      className="footer-root"
    >
      {/* Mailing list banner — top of footer */}
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "40px 0",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 48,
          borderBottom: "1px solid rgba(255,255,255,0.07)",
          flexWrap: "wrap",
        }}
        className="footer-mailing"
      >
        <div style={{ flex: "1 1 280px" }}>
          <h4
            style={{
              fontFamily: "var(--ff-display)",
              fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)",
              fontWeight: 400,
              color: "var(--white)",
              marginBottom: 8,
              letterSpacing: "-0.01em",
            }}
          >
            Stay <em style={{ fontStyle: "italic", fontWeight: 300 }}>Connected</em>
          </h4>
          <p style={{ fontSize: "0.85rem", fontWeight: 300, color: "rgba(255,255,255,0.4)", lineHeight: 1.7 }}>
            Join our mailing list to receive the latest news &amp; updates from ISCJ.
          </p>
        </div>

        <form
          onSubmit={handleSubscribe}
          style={{ display: "flex", gap: 0, flex: "1 1 360px", maxWidth: 480 }}
        >
          {submitted ? (
            <p style={{ fontSize: "0.85rem", fontWeight: 300, color: "var(--gold)", padding: "12px 0" }}>
              Thank you for subscribing!
            </p>
          ) : (
            <>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                style={{
                  flex: 1,
                  padding: "12px 18px",
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRight: "none",
                  color: "var(--white)",
                  fontFamily: "var(--ff-body)",
                  fontSize: "0.85rem",
                  fontWeight: 300,
                  outline: "none",
                  borderRadius: 0,
                }}
              />
              <button
                type="submit"
                style={{
                  padding: "12px 24px",
                  background: "var(--gold)",
                  color: "var(--navy-deep)",
                  fontFamily: "var(--ff-body)",
                  fontSize: "0.72rem",
                  fontWeight: 500,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  border: "none",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  transition: "background 0.2s",
                  borderRadius: 0,
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "var(--gold-light)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "var(--gold)")}
              >
                Subscribe
              </button>
            </>
          )}
        </form>
      </div>

      {/* Main grid */}
      <div
        className="footer-grid"
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1.5fr",
          gap: 48,
          paddingTop: 48,
          paddingBottom: 48,
          borderBottom: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        {/* Brand col */}
        <div>
          <Link href="/">
            <Image
              src={assetPath("/images/iscj-white-logo.png")}
              alt="ISCJ"
              width={100}
              height={44}
              style={{ height: 44, width: "auto", marginBottom: 16 }}
            />
          </Link>
          <p style={{ fontSize: "0.85rem", fontWeight: 300, lineHeight: 1.75, color: "rgba(255,255,255,0.4)", maxWidth: 280, marginBottom: 24 }}>
            Islamic Society of Central Jersey — a place of worship, learning, and community for Muslim families throughout Central New Jersey.
          </p>

          {/* Addresses */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div>
              <p style={{ fontSize: "0.65rem", fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 8 }}>
                Mailing Address
              </p>
              <p style={{ fontSize: "0.8rem", fontWeight: 300, color: "rgba(255,255,255,0.35)", lineHeight: 1.7 }}>
                P.O. Box 628<br />
                Monmouth Junction, NJ 08852-0628
              </p>
            </div>
            <div>
              <p style={{ fontSize: "0.65rem", fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 8 }}>
                Address
              </p>
              <p style={{ fontSize: "0.8rem", fontWeight: 300, color: "rgba(255,255,255,0.35)", lineHeight: 1.7 }}>
                4145 Route 1 South and Promenade Blvd<br />
                Monmouth Junction, NJ 08852-0628
              </p>
              <a
                href="https://maps.google.com/?q=4145+Route+1+South,+Monmouth+Junction,+NJ+08852"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 5,
                  marginTop: 8,
                  fontSize: "0.75rem",
                  fontWeight: 400,
                  letterSpacing: "0.08em",
                  color: "var(--gold)",
                  textDecoration: "none",
                  opacity: 0.85,
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.85")}
              >
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Maps &amp; Directions
              </a>
            </div>
          </div>
        </div>

        {/* Quick Links col */}
        <div>
          <ColHeading>ISCJ</ColHeading>
          <ul style={{ listStyle: "none" }}>
            {QUICK_LINKS.map((link, i) => (
              <li key={link.href + link.label} style={{ marginTop: i > 0 ? 10 : 0 }}>
                <Link
                  href={link.href}
                  style={{
                    fontSize: "0.85rem",
                    fontWeight: 300,
                    color: "rgba(255,255,255,0.45)",
                    textDecoration: "none",
                    transition: "color 0.2s",
                    display: "block",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--white)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.45)")}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Programs col */}
        <div>
          <ColHeading>Programs</ColHeading>
          <ul style={{ listStyle: "none" }}>
            {PROGRAMS.map((link, i) => (
              <li key={link.label} style={{ marginTop: i > 0 ? 10 : 0 }}>
                <FooterLink href={link.href} external={link.external}>
                  {link.label}
                </FooterLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Email Us col */}
        <div>
          <ColHeading>Email Us</ColHeading>
          <ul style={{ listStyle: "none" }}>
            {EMAIL_CONTACTS.map((contact, i) => (
              <li key={contact.email} style={{ marginTop: i > 0 ? 14 : 0 }}>
                <p style={{ fontSize: "0.68rem", fontWeight: 400, letterSpacing: "0.06em", color: "rgba(255,255,255,0.3)", marginBottom: 3 }}>
                  {contact.label}
                </p>
                <FooterLink href={`mailto:${contact.email}`}>
                  {contact.email}
                </FooterLink>
              </li>
            ))}
          </ul>
        </div>
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
