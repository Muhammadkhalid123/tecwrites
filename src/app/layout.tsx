import type { Metadata } from "next";
import { Syne, Fraunces, Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  verification: {
    google: "ZifE4ji4x6DAhHBhJ1LE1zfdcbSjSvOkV8r8O_RLN9k",
  },
  title: {
    default: "TecWrites | Where Code Meets Craft",
    template: "%s | TecWrites",
  },
  description: "TecWrites is a hybrid creative technology & publishing studio specializing in AI & Automation, Bespoke Web Design, and Self Publishing Services.",
  keywords: [
    "AI automation",
    "web design studio",
    "ebook publishing",
    "self publishing consultant",
    "technical writing",
    "3D web design",
    "creative agency"
  ],
  authors: [{ name: "TecWrites Studio" }],
  creator: "TecWrites",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tecwrites.com",
    siteName: "TecWrites",
    title: "TecWrites | Where Code Meets Craft",
    description: "Hybrid creative technology & publishing studio: AI & Automation, Bespoke Web, and Self Publishing Services.",
  },
  twitter: {
    card: "summary_large_image",
    title: "TecWrites | Where Code Meets Craft",
    description: "Hybrid creative technology & publishing studio: AI & Automation, Bespoke Web, and Self Publishing Services.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${syne.variable} ${fraunces.variable} ${inter.variable} ${jakarta.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-[#0A0E1A] text-white selection:bg-[#12D6C4] selection:text-[#0A0E1A]">
        {children}
      </body>
    </html>
  );
}
