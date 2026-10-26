import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Studio | Start a Project",
  description: "Get in touch with Techtron Global Studio for custom web design, mobile app development, AI integrations, game dev, DevOps, or publishing projects. Request a quote.",
  keywords: [
    "contact Techtron Global",
    "hire web developers",
    "hire app developers",
    "AI consulting quote",
    "start a software project",
    "Techtron Global studio contact"
  ],
  alternates: {
    canonical: "https://www.techtronglobal.com/contact",
  },
  openGraph: {
    title: "Contact Techtron Global Studio | Start a Project",
    description: "Get in touch with Techtron Global for custom software engineering, AI integrations, web design, and publishing projects.",
    url: "https://www.techtronglobal.com/contact",
    type: "website",
    images: [
      {
        url: "/tecwrites-og-banner.png",
        width: 1200,
        height: 630,
        alt: "Contact Techtron Global Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Techtron Global Studio | Start a Project",
    description: "Get in touch with Techtron Global for custom software engineering, AI integrations, web design, and publishing projects.",
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
                    "item": "https://www.techtronglobal.com"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Contact",
                    "item": "https://www.techtronglobal.com/contact"
                  }
                ]
              },
              {
                "@type": "ContactPage",
                "name": "Contact Techtron Global Studio",
                "url": "https://www.techtronglobal.com/contact",
                "description": "Contact form and inquiry channel for Techtron Global software development, web engineering, and publishing.",
                "mainEntity": {
                  "@type": "Organization",
                  "name": "Techtron Global",
                  "telephone": "+1-888-921-3331",
                  "email": "info@techtronglobal.com",
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
