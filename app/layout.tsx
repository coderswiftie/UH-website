import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Unhackable Humans (UH) — Minds over Manipulation",
  description:
    "Unhackable Humans builds human security by decoding manipulation, exposing real-world scams and helping people make safer decisions.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "https://unhackablehumans.org"),
  openGraph: {
    title: "Unhackable Humans (UH) — Minds over Manipulation",
    description:
      "Unhackable Humans builds human security by decoding manipulation, exposing real-world scams and helping people make safer decisions.",
    siteName: "Unhackable Humans",
    locale: "en_US",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#12263A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-offwhite text-ink font-sans antialiased selection:bg-teal selection:text-white">
        {children}
      </body>
    </html>
  );
}
