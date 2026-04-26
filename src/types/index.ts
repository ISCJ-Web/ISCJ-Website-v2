export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceCard {
  title: string;
  description: string;
}

export interface EventCard {
  month: string;
  day: string;
  tag: string;
  title: string;
  time: string;
  location: string;
}

export interface Announcement {
  title: string;
  description: string;
  date: string;
}

export interface PrayerTime {
  name: string;
  time: string;
  iqama?: string;
  active?: boolean;
}

export interface StatItem {
  value: string;
  label: string;
  dark?: boolean;
}
