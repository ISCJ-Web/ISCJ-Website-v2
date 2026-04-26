import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, Scheherazade_New } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
  display: "swap",
});

const scheherazade = Scheherazade_New({
  subsets: ["arabic"],
  weight: ["400"],
  variable: "--font-scheherazade",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ISCJ — Islamic Society of Central Jersey",
  description:
    "Islamic Society of Central Jersey — a place of worship, community, and lifelong learning in the heart of New Jersey.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable} ${scheherazade.variable}`}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
