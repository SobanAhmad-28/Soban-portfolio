import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Newsreader } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { personalInfo } from "@/data/personal";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: `${personalInfo.firstName} ${personalInfo.lastName} — Portfolio`,
  description: `${personalInfo.tagline}. ${personalInfo.degree} at ${personalInfo.university}. Exploring AI/ML and Data Science.`,
  keywords: [
    "portfolio",
    "computer science",
    "AI",
    "machine learning",
    "data science",
    "student",
    personalInfo.firstName,
    personalInfo.lastName,
  ],
  openGraph: {
    title: `${personalInfo.firstName} ${personalInfo.lastName} — Portfolio`,
    description: personalInfo.tagline,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} ${newsreader.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* Skip to content link for accessibility */}
        <a
          href="#hero"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:rounded-lg focus:bg-accent focus:text-white focus:px-4 focus:py-2 focus:text-sm"
        >
          Skip to content
        </a>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
