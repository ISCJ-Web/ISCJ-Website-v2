"use client";

import { useEffect, useState } from "react";
import EventCardView from "@/components/events/EventCardView";
import { EVENTS, eventDisplayParts, sortEvents, upcomingOnly } from "@/lib/events";
import type { SiteEvent } from "@/lib/events";

/**
 * The list is sorted at module scope so the build output and the browser's
 * first render are identical, then narrowed to upcoming events after mount.
 * Filtering by date up front would not survive hydration: this is a static
 * export, so the build would bake in whatever "today" meant at deploy time.
 */
const SORTED = sortEvents(EVENTS);

export default function EventsSection() {
  const [events, setEvents] = useState<SiteEvent[]>(SORTED);

  useEffect(() => {
    setEvents(upcomingOnly(SORTED));
  }, []);

  return (
    <section id="events">
      <div style={{ padding: "120px 48px", maxWidth: 1200, margin: "0 auto" }}
        className="max-sm:!py-20 max-sm:!px-6"
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginBottom: 56,
            flexWrap: "wrap",
            gap: 20,
          }}
        >
          <div>
            <span className="section-label">Calendar</span>
            <h2 className="section-title">
              Upcoming <em>Events</em>
            </h2>
          </div>
          <a
            href="#"
            style={{
              fontSize: "0.78rem",
              fontWeight: 400,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--navy)",
              textDecoration: "none",
              borderBottom: "1px solid var(--gold)",
              paddingBottom: 2,
              transition: "color 0.2s",
              whiteSpace: "nowrap",
            }}
          >
            View Full Calendar
          </a>
        </div>

        {/* Events grid */}
        {events.length > 0 ? (
          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2 }}
            className="max-sm:!grid-cols-1"
          >
            {events.map((ev, i) => (
              <EventCardView
                key={`${ev.date}-${ev.title}`}
                index={i}
                ev={{
                  ...eventDisplayParts(ev.date),
                  tag: ev.tag,
                  title: ev.title,
                  time: ev.time,
                  location: ev.location,
                }}
              />
            ))}
          </div>
        ) : (
          <p
            style={{
              fontSize: "0.95rem",
              fontWeight: 300,
              lineHeight: 1.8,
              color: "var(--muted)",
              margin: 0,
            }}
          >
            New events are announced here as they are scheduled. Check back soon.
          </p>
        )}
      </div>
    </section>
  );
}
