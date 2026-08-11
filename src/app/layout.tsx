import type { Metadata } from "next";
import { DM_Sans, Plus_Jakarta_Sans, Hanken_Grotesk } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["400", "500", "700"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap",
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://tecwrites.com'),
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
  const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // Placeholder GA4 ID
  
  return (
    <html lang="en" className={`${dmSans.variable} ${jakarta.variable} ${hanken.variable} scroll-smooth`}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "TecWrites",
              url: "https://tecwrites.com",
              logo: "https://tecwrites.com/TecWrites-Logo_Facicon.png",
              sameAs: [
                "https://twitter.com/tecwrites",
                "https://linkedin.com/company/tecwrites"
              ]
            })
          }}
        />
      </head>
      <body className="font-body antialiased bg-surface text-on-surface selection:bg-primary-fixed selection:text-on-primary-fixed">
        {children}

        {/* Google Analytics 4 */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>

        {/* SPC-RAG Live Chat Widget Integration */}
        <Script
          src="http://localhost:5000/frontend/widget.js"
          strategy="lazyOnload"
          data-bot-id="tecwrites"
          data-api-base="http://localhost:5000"
        />
      </body>
    </html>
  );
}

