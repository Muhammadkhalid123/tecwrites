import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Studio | Start a Project",
  description: "Get in touch with TecWrites Studio for custom web design, mobile app development, AI integrations, game dev, DevOps, or publishing projects. Request a quote.",
  keywords: [
    "contact TecWrites",
    "hire web developers",
    "hire app developers",
    "AI consulting quote",
    "start a software project",
    "TecWrites studio contact"
  ],
  alternates: {
    canonical: "https://www.tecwrites.com/contact",
  },
  openGraph: {
    title: "Contact TecWrites Studio | Start a Project",
    description: "Get in touch with TecWrites for custom software engineering, AI integrations, web design, and publishing projects.",
    url: "https://www.tecwrites.com/contact",
    type: "website",
    images: [
      {
        url: "/tecwrites-og-banner.png",
        width: 1200,
        height: 630,
        alt: "Contact TecWrites Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact TecWrites Studio | Start a Project",
    description: "Get in touch with TecWrites for custom software engineering, AI integrations, web design, and publishing projects.",
    images: ["/tecwrites-og-banner.png"],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://www.tecwrites.com"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Contact",
                    "item": "https://www.tecwrites.com/contact"
                  }
                ]
              },
              {
                "@type": "ContactPage",
                "name": "Contact TecWrites Studio",
                "url": "https://www.tecwrites.com/contact",
                "description": "Contact form and inquiry channel for TecWrites software development, web engineering, and publishing.",
                "mainEntity": {
                  "@type": "Organization",
                  "name": "TecWrites",
                  "telephone": "+1-888-921-3331",
                  "email": "info@tecwrites.com",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "31 Gourdon Ct",
                    "addressLocality": "Lake St. Louis",
                    "addressRegion": "MO",
                    "postalCode": "63367",
                    "addressCountry": "US"
                  }
                }
              }
            ]
          })
        }}
      />
      {children}
    </>
  );
}
