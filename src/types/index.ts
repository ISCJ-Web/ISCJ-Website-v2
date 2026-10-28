export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceCard {
  title: string;
  description: string;
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
