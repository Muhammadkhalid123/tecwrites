import type { Metadata } from "next";
import { DM_Sans, Plus_Jakarta_Sans, Hanken_Grotesk } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import LiveChatWidget from "@/components/LiveChatWidget";

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
  metadataBase: new URL('https://www.tecwrites.com'),
  alternates: {
    canonical: '/',
  },
  verification: {
    google: "ZifE4ji4x6DAhHBhJ1LE1zfdcbSjSvOkV8r8O_RLN9k",
  },
  title: {
    default: "TecWrites | Web Design, App, AI & Game Development Studio",
    template: "%s | TecWrites",
  },
  description: "TecWrites is a digital studio specializing in bespoke web design, custom animation, mobile apps, AI automation, and publishing services.",
  keywords: [
    "AI automation",
    "web design studio",
    "custom web design company",
    "mobile app development",
    "game development services",
    "DevOps consulting services",
    "branding and animation services",
    "app store publishing and ASO",
    "ebook publishing",
    "self publishing consultant",
    "technical writing",
    "3D web design",
    "creative agency"
  ],
  authors: [{ name: "TecWrites Studio", url: "https://www.tecwrites.com" }],
  creator: "TecWrites",
  publisher: "TecWrites Studio",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.tecwrites.com",
    siteName: "TecWrites",
    title: "TecWrites | Web Design, App, AI & Game Development Studio",
    description: "Bespoke web design, custom animation, mobile apps, AI automation, and publishing services.",
    images: [
      {
        url: "/tecwrites-og-banner.png",
        width: 1200,
        height: 630,
        alt: "TecWrites Studio - Web Design, App, AI & Game Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TecWrites | Web Design, App, AI & Game Development Studio",
    description: "Bespoke web design, custom animation, mobile apps, AI automation, and publishing services.",
    images: ["/tecwrites-og-banner.png"],
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://www.tecwrites.com/#organization",
                  "name": "TecWrites",
                  "url": "https://www.tecwrites.com",
                  "logo": {
                    "@type": "ImageObject",
                    "@id": "https://www.tecwrites.com/#logo",
                    "url": "https://www.tecwrites.com/TecWrites-Logo_Facicon.png",
                    "caption": "TecWrites Logo"
                  },
                  "image": "https://www.tecwrites.com/TecWrites-Logo-03.png",
                  "description": "Hybrid creative technology & publishing studio specializing in AI & Automation, Bespoke Web Design, App Development, Game Dev, and Publishing.",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "31 Gourdon Ct",
                    "addressLocality": "Lake St. Louis",
                    "addressRegion": "MO",
                    "postalCode": "63367",
                    "addressCountry": "US"
                  },
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+1-888-921-3331",
                    "contactType": "customer service",
                    "email": "info@tecwrites.com"
                  },
                  "sameAs": [
                    "https://twitter.com/tecwrites",
                    "https://linkedin.com/company/tecwrites"
                  ]
                },
                {
                  "@type": "WebSite",
                  "@id": "https://www.tecwrites.com/#website",
                  "url": "https://www.tecwrites.com",
                  "name": "TecWrites",
                  "publisher": {
                    "@id": "https://www.tecwrites.com/#organization"
                  },
                  "inLanguage": "en-US"
                }
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

        {/* Custom Live Chat Widget Connected to Railway Backend */}
        <LiveChatWidget />
      </body>
    </html>
  );
}

