import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cipher — a daily puzzle for curious people",
  description:
    "One term a day from AI, tech, healthcare, startups, science and research. Guess it from a clue, then learn why it matters.",
  openGraph: {
    title: "Cipher — a daily puzzle for curious people",
    description:
      "One term a day from AI, tech, healthcare, startups, science and research.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#08090a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-dvh">{children}</body>
    </html>
  );
}
