"use client";

import React from "react";

interface ButtonProps extends React.ComponentPropsWithoutRef<"a"> {
  variant?: "primary" | "outline";
  href?: string;
}

export default function Button({
  variant = "primary",
  href = "#",
  children,
  style,
  ...props
}: ButtonProps) {
  const base: React.CSSProperties = {
    display: "inline-block",
    fontFamily: "var(--ff-body)",
    fontSize: "0.8rem",
    fontWeight: variant === "primary" ? 500 : 400,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    borderRadius: 2,
    textDecoration: "none",
    whiteSpace: "nowrap",
    cursor: "pointer",
  };

  const variants: Record<string, React.CSSProperties> = {
    primary: {
      background: "var(--gold)",
      color: "var(--navy-deep)",
      padding: "14px 32px",
      border: "none",
      transition: "background 0.2s, transform 0.15s",
    },
    outline: {
      background: "transparent",
      color: "var(--white)",
      padding: "13px 32px",
      border: "1px solid rgba(255,255,255,0.35)",
      transition: "border-color 0.2s, color 0.2s, transform 0.15s",
    },
  };

  return (
    <a
      href={href}
      style={{ ...base, ...variants[variant], ...style }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        if (variant === "primary") {
          el.style.background = "var(--gold-light)";
          el.style.transform = "translateY(-1px)";
        } else {
          el.style.borderColor = "var(--gold)";
          el.style.color = "var(--gold)";
          el.style.transform = "translateY(-1px)";
        }
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        if (variant === "primary") {
          el.style.background = "var(--gold)";
          el.style.transform = "translateY(0)";
        } else {
          el.style.borderColor = "rgba(255,255,255,0.35)";
          el.style.color = "var(--white)";
          el.style.transform = "translateY(0)";
        }
      }}
      {...props}
    >
      {children}
    </a>
  );
}
