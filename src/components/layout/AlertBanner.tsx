"use client";

import { useEffect, useRef, useState } from "react";
import AlertBannerView from "@/components/layout/AlertBannerView";
import { getVisibleAnnouncements, type Announcement } from "@/lib/announcements";

const ROTATE_MS = 6500;

/**
 * Slim announcement ticker pinned above the nav rows. One message at a time,
 * flipping over like a departures board.
 *
 * Closing it is deliberately not remembered: it hides the banner for the rest of
 * that visit (including client-side navigation, since this lives in the root
 * layout and never remounts) and a refresh brings it straight back. What runs up
 * here are things like closures, so someone who taps the X by accident should not
 * lose them for good.
 *
 * The list is resolved after mount rather than at build time — see
 * getVisibleAnnouncements() for why.
 */
export default function AlertBanner() {
  const [items, setItems] = useState<Announcement[]>([]);
  const [dismissed, setDismissed] = useState(false);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setItems(getVisibleAnnouncements());
  }, []);

  /* Publish the real height as --banner-h so anything anchored to the bottom of
     the navbar (which now includes this strip) can offset itself. It varies on
     mobile, where a long message wraps. */
  useEffect(() => {
    const el = rootRef.current;
    const root = document.documentElement;
    if (!el) {
      root.style.setProperty("--banner-h", "0px");
      return;
    }
    /* Seeded up front as well as observed: a tab opened in the background gets
       no rendering steps, so the observer's first callback can be held back
       until the visitor actually looks at the page. */
    root.style.setProperty("--banner-h", `${Math.round(el.getBoundingClientRect().height)}px`);

    const observer = new ResizeObserver(([entry]) => {
      root.style.setProperty("--banner-h", `${Math.round(entry.contentRect.height)}px`);
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, [dismissed, items.length]);

  useEffect(() => {
    if (dismissed || paused || items.length < 2) return;
    const slower = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const id = window.setInterval(
      () => setIndex((i) => (i + 1) % items.length),
      slower ? ROTATE_MS * 2 : ROTATE_MS,
    );
    return () => window.clearInterval(id);
  }, [dismissed, paused, items.length]);

  if (dismissed || items.length === 0) return null;

  return (
    <div
      ref={rootRef}
      className="alert-banner"
      role="region"
      aria-label="Announcements"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <AlertBannerView
        items={items}
        index={index}
        onSelectIndex={setIndex}
        onDismiss={() => setDismissed(true)}
      />
    </div>
  );
}
