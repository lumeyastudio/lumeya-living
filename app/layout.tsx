import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lumeya Living | Modern Plant & Gardening Ecosystem",
  description:
    "Discover plants, gardening services, plant care, and green living solutions with Lumeya Living — a Lumeya Studios experience.",
  keywords: [
    "plants",
    "gardening",
    "plant care",
    "green living",
    "sustainable",
    "home garden",
    "India",
  ],
  openGraph: {
    title: "Lumeya Living | Modern Plant & Gardening Ecosystem",
    description:
      "Discover plants, gardening services, plant care, and green living solutions with Lumeya Living.",
    url: "https://lumeyaliving.com",
    siteName: "Lumeya Living",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lumeya Living | Modern Plant & Gardening Ecosystem",
    description:
      "Discover plants, gardening services, plant care, and green living solutions with Lumeya Living.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${GeistSans.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
