"use client";

import EventCardView from "@/components/events/EventCardView";
import type { EventCard } from "@/types";

const EVENTS: EventCard[] = [
  { month: "May", day: "02", tag: "Community",  title: "Community Potluck Dinner",   time: "6:30 PM", location: "Main Hall" },
  { month: "May", day: "10", tag: "Education",  title: "Islamic Finance Workshop",   time: "2:00 PM", location: "Conference Room" },
  { month: "May", day: "17", tag: "Youth",      title: "Youth Leadership Summit",    time: "10:00 AM", location: "Community Center" },
];

export default function EventsSection() {
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
        <div
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2 }}
          className="max-sm:!grid-cols-1"
        >
          {EVENTS.map((ev, i) => (
            <EventCardView key={ev.title} ev={ev} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
