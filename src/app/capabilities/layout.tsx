import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Capabilities & Services",
  description: "Explore TecWrites capabilities: Bespoke Web Design, End-to-End App Development, AI-Integrated Products, Game Dev, Branding, DevOps, and App Store Publishing.",
  keywords: [
    "TecWrites capabilities",
    "web design services",
    "mobile app development services",
    "AI integration services",
    "game development services",
    "branding and animation",
    "app store publishing and ASO",
    "cloud infrastructure and DevOps"
  ],
  alternates: {
    canonical: "https://www.tecwrites.com/capabilities",
  },
  openGraph: {
    title: "Our Capabilities & Services | TecWrites",
    description: "Explore TecWrites capabilities: Bespoke Web Design, App Dev, AI, Game Dev, Branding, DevOps, and Publishing.",
    url: "https://www.tecwrites.com/capabilities",
    type: "website",
    images: [
      {
        url: "/tecwrites-og-banner.png",
        width: 1200,
        height: 630,
        alt: "TecWrites Capabilities & Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Capabilities & Services | TecWrites",
    description: "Explore TecWrites capabilities: Bespoke Web Design, App Dev, AI, Game Dev, Branding, DevOps, and Publishing.",
    images: ["/tecwrites-og-banner.png"],
  },
};

export default function CapabilitiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const faqs = [
    {
      question: "Can we hire TecWrites for standalone DevOps and cloud services?",
      answer: "Yes, absolutely! Our cloud engineer provides DevOps as a standalone service. We can audit your existing cloud setups (AWS/GCP), configure Terraform Infrastructure as Code, set up CI/CD pipeline automations, and optimize your servers to cut monthly host costs."
    },
    {
      question: "What makes your Game Development service unique?",
      answer: "We offer a rare in-house Game Developer + Animator combo. This means we design the game physics, level blueprints, and rich custom animations under one roof. We build lightweight, hardware-accelerated 2D/3D games running at 60+ FPS natively in browsers or mobile stores."
    },
    {
      question: "What is included in App Store Publishing & ASO?",
      answer: "Most dev agencies build an application and dump it on store consoles with no setup. We audit your app against strict Apple & Google guidelines to ensure review approval, construct optimized metadata/keywords, write high-conversion copy, and design store screenshots to drive organic downloads."
    },
    {
      question: "Do you only build full products, or can you integrate features into active codebases?",
      answer: "We do both. We build end-to-end products from raw blueprints ('idea to App Store'). However, we also serve clients who need standalone features, such as bolting custom AI co-pilots, cloud scaling configurations, or brand asset animation packages directly into existing setups."
    },
    {
      question: "How do your pricing models and engagements work?",
      answer: "We align pricing with deliverables. Short-term audits, brand kits, and publishing setups are flat-fee project packages starting at $2.5k. Full-scale product builds and continuous integrations are scoped as fixed MVP cycles starting at $10k or flat monthly retainers."
    }
  ];

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
                    "name": "Capabilities",
                    "item": "https://www.tecwrites.com/capabilities"
                  }
                ]
              },
              {
                "@type": "FAQPage",
                "mainEntity": faqs.map((faq) => ({
                  "@type": "Question",
                  "name": faq.question,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.answer
                  }
                }))
              }
            ]
          })
        }}
      />
      {children}
    </>
  );
}
