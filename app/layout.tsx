import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vanaya — Grow With Humility | Plants, Care & Green Living",
  description:
    "Vanaya brings nature to your doorstep. Discover 300+ plants, expert gardening services, smart care reminders, and sustainable green living — all in one app. Available across India.",
  keywords: [
    "buy plants online india",
    "indoor plants",
    "plant care app",
    "gardening services india",
    "green living",
    "vanaya app",
    "plant delivery india",
    "sustainable living",
    "home garden",
    "plant parent",
  ],
  authors: [{ name: "Lumeya Studios" }],
  creator: "Lumeya Studios",
  publisher: "Lumeya Studios",
  metadataBase: new URL("https://lumeyaliving.com"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Vanaya — Grow With Humility | Plants & Green Living",
    description:
      "Discover 300+ plants, expert care, and sustainable green living with Vanaya. Download the app and start your green journey today.",
    url: "https://lumeyaliving.com",
    siteName: "Vanaya by Lumeya Studios",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vanaya — Grow With Humility",
    description:
      "India's most beautiful plant & gardening app. Download Vanaya today.",
    creator: "@lumeyastudios",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${GeistSans.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
