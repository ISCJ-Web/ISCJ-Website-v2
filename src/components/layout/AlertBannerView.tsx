"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import type { Announcement } from "@/lib/announcements";

type Props = {
  items: Announcement[];
  index: number;
  onSelectIndex?: (i: number) => void;
  onDismiss?: () => void;
  /** "span" renders the call to action as plain text instead of a link. */
  linkAs?: "link" | "span";
};

/**
 * The banner strip itself, with no state of its own. The rotation timer, the
 * session dismissal and the ResizeObserver that publishes --banner-h all stay in
 * AlertBanner, which must remain the only writer of that variable: page layouts
 * elsewhere are anchored to it.
 */
export default function AlertBannerView({
  items,
  index,
  onSelectIndex,
  onDismiss,
  linkAs = "link",
}: Props) {
  if (items.length === 0) return null;

  const item = items[Math.min(index, items.length - 1)];
  const href = item.href ?? "/#announcements";

  const message = (
    <>
      <span className="alert-banner-copy">{item.text}</span>
      <span className="alert-banner-cta">{item.linkLabel ?? "Read more"} &rarr;</span>
    </>
  );

  return (
    <div className="alert-banner-inner">
      <span className="alert-banner-pulse" aria-hidden="true" />

      <div className="alert-banner-ticker" aria-live="polite" aria-atomic="true">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={item.id}
            className="alert-banner-message"
            initial={{ opacity: 0, y: 9 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -9 }}
            transition={{ duration: 0.32, ease: [0.4, 0, 0.2, 1] }}
          >
            <span className="alert-banner-tag">{item.label}</span>
            {linkAs === "link" ? (
              <Link href={href} className="alert-banner-text">
                {message}
              </Link>
            ) : (
              <span className="alert-banner-text">{message}</span>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="alert-banner-controls">
        {items.length > 1 && (
          <div className="alert-banner-dots">
            {items.map((a, i) => (
              <button
                key={a.id}
                type="button"
                onClick={() => onSelectIndex?.(i)}
                aria-label={`Announcement ${i + 1} of ${items.length}`}
                aria-current={i === index}
                className={i === index ? "alert-banner-dot is-active" : "alert-banner-dot"}
              />
            ))}
          </div>
        )}

        <button
          type="button"
          onClick={() => onDismiss?.()}
          className="alert-banner-close"
          aria-label="Hide announcements until the page is reloaded"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
