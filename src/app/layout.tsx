import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  verification: {
    google: "ZifE4ji4x6DAhHBhJ1LE1zfdcbSjSvOkV8r8O_RLN9k",
  },
  title: {
    default: "TecWrites | The Future of Publishing & Software Solutions",
    template: "%s | TecWrites"
  },
  description: "TecWrites provides professional book publishing, software development, and digital marketing solutions. Transform your ideas into reality with our expert team.",
  keywords: ["publishing services", "software development", "web development", "book designing", "ghostwriting", "digital marketing", "UI/UX design"],
  authors: [{ name: "TecWrites Team" }],
  creator: "TecWrites",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://techwrites.com",
    siteName: "TecWrites",
    title: "TecWrites | The Future of Publishing & Software Solutions",
    description: "Transform your ideas into reality with our professional publishing and software development services.",
    images: [
      {
        url: "/TecWrites-Logo-03.png",
        width: 1200,
        height: 630,
        alt: "TecWrites - Publishing & Software Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TecWrites | The Future of Publishing & Software Solutions",
    description: "Transform your ideas into reality with our professional publishing and software development services.",
    images: ["/TecWrites-Logo-03.png"],
    creator: "@tecwrites",
  },
  icons: {
    icon: '/TecWrites-Logo_Facicon.png',
    shortcut: '/TecWrites-Logo_Facicon.png',
    apple: '/TecWrites-Logo_Facicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
