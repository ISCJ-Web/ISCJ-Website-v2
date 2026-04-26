import HeroSection from "@/components/home/HeroSection";
import PrayerTimesSection from "@/components/home/PrayerTimesSection";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/home/ServicesSection";
import EventsSection from "@/components/home/EventsSection";
import AnnouncementsSection from "@/components/home/AnnouncementsSection";
import DonateCTASection from "@/components/home/DonateCTASection";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <PrayerTimesSection />
      <AboutSection />
      <ServicesSection />
      <EventsSection />
      <AnnouncementsSection />
      <DonateCTASection />
    </main>
  );
}
