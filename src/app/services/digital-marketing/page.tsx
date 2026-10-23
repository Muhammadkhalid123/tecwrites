import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import SchemaMarkup from "@/components/SchemaMarkup";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing Services: SEO, PPC, CRO & Performance Growth",
  description: "Full-service digital marketing by TecWrites in the USA: technical SEO audits, Google & Meta PPC ads, conversion rate optimization (CRO), content marketing, email automation & data analytics.",
  keywords: [
    "digital marketing services",
    "full-service digital marketing agency",
    "SEO services USA",
    "technical SEO audit",
    "PPC management services",
    "Google Ads agency",
    "paid social media advertising",
    "conversion rate optimization agency",
    "content marketing strategy",
    "growth marketing services",
    "performance marketing agency",
    "B2B digital marketing services",
    "e-commerce SEO and PPC",
    "email marketing automation",
    "ROI attribution and analytics",
    "digital marketing and growth"
  ],
  alternates: {
    canonical: "https://www.tecwrites.com/services/digital-marketing"
  },
  openGraph: {
    title: "Digital Marketing Services: SEO, PPC, CRO & Growth | TecWrites",
    description: "Data-driven digital marketing services: technical SEO audits, high-ROAS PPC advertising, conversion rate optimization, and automated growth funnels.",
    url: "https://www.tecwrites.com/services/digital-marketing",
    type: "website",
    images: [
      {
        url: "/services/Digital Marketing & Growth.png",
        width: 1200,
        height: 630,
        alt: "Digital Marketing Services by TecWrites",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Services: SEO, PPC, CRO & Growth | TecWrites",
    description: "Data-driven digital marketing services: technical SEO audits, high-ROAS PPC advertising, CRO, and automated growth funnels.",
    images: ["/services/Digital Marketing & Growth.png"],
  }
};

export default function DigitalMarketingPage() {
  const serviceIncludes = [
    {
      title: "Search Engine Optimization (SEO & Technical Audits)",
      description: "Comprehensive on-page, off-page, and technical SEO engineered to dominate organic search rankings. We optimize site architecture, Core Web Vitals, schema markup, and keyword clustering to attract high-intent organic traffic that converts.",
      icon: "search"
    },
    {
      title: "Pay-Per-Click Advertising (PPC & Google Ads)",
      description: "Laser-targeted paid search campaigns across Google Ads and Bing. We architect high-converting keyword trees, negative keyword shields, Performance Max campaigns, and hyper-optimized ad copy designed for maximum ROAS and lower CAC.",
      icon: "ads_click"
    },
    {
      title: "Paid Social & Performance Media",
      description: "Scalable customer acquisition campaigns across Meta (Facebook & Instagram), LinkedIn Ads, TikTok, and X. We pair compelling creative formats, scroll-stopping video hooks, and granular audience retargeting to capture prospective buyers across every stage of the funnel.",
      icon: "campaign"
    },
    {
      title: "Content Marketing & SEO Copywriting",
      description: "Editorial strategies and high-authority written content that build industry credibility and organic authority. From search-intent blog articles and case studies to whitepapers and interactive landing page copy, our words educate, rank, and drive action.",
      icon: "edit_note"
    },
    {
      title: "Conversion Rate Optimization (CRO & Funnel A/B Testing)",
      description: "Transform website visitors into paying customers. We analyze user friction through heatmaps, session replays, and multivariate split tests. By optimizing page speed, headline messaging, checkout flows, and CTAs, we turn existing traffic into increased revenue.",
      icon: "trending_up"
    },
    {
      title: "Email Marketing & Lifecycle Automation",
      description: "Revenue-generating email flows and retention strategies built on Klaviyo, HubSpot, and Customer.io. We construct automated welcome series, abandoned cart recovery, product education drips, re-engagement campaigns, and segmented VIP newsletters.",
      icon: "mail"
    },
    {
      title: "Social Media Strategy & Organic Growth",
      description: "Strategic organic brand positioning across Instagram, LinkedIn, YouTube, and X. We curate engaging visual content, build community relationships, establish executive thought leadership, and expand brand touchpoints without burning budget.",
      icon: "hub"
    },
    {
      title: "Performance Analytics, GTM & ROI Attribution",
      description: "Enterprise-grade tracking implementations using Google Tag Manager (GTM), GA4 event architectures, Meta Conversions API (CAPI), and live Looker Studio executive dashboards. Eliminate blind spots and know down to the dollar where your conversions originate.",
      icon: "monitoring"
    },
    {
      title: "Digital PR & High-Authority Backlink Building",
      description: "Earn organic editorial backlinks and media coverage from respected industry publications. We build authentic relationships with journalists and publishers to elevate your domain authority and protect your search dominance against competitor shifts.",
      icon: "verified"
    }
  ];

  const whyChoosePoints = [
    {
      title: "Engineered by Developers & Marketers Under One Roof",
      description: "Most agencies propose marketing recommendations that get stuck in developer backlogs. Because TecWrites has full-stack software engineers in-house, we implement technical SEO fixes, tracking pixels, and sub-second landing pages instantly."
    },
    {
      title: "Obsessed with Revenue & ROI, Not Vanity Metrics",
      description: "We don't celebrate impressions or empty clicks. Every campaign is calibrated against real business KPIs: qualified pipeline leads, customer acquisition cost (CAC), customer lifetime value (LTV), and bottom-line return on ad spend (ROAS)."
    },
    {
      title: "Full-Funnel Cohesion",
      description: "From the very first Google search or social impression through the high-performance landing page to post-purchase email onboarding, your audience experiences a unified, seamless, and frictionless brand journey."
    },
    {
      title: "AI-Powered Optimization & Precision Targeting",
      description: "We leverage proprietary AI research tools, predictive audience modeling, and automated bidding algorithms to uncover overlooked keyword opportunities and outmaneuver competitors in auction bids."
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Comprehensive Digital Audit",
      description: "We inspect your historical ad performance, technical SEO health, competitor positioning, keyword share of voice, and conversion funnel friction to locate untapped revenue potential."
    },
    {
      step: "02",
      title: "Tailored Growth Roadmap",
      description: "We construct a prioritized multi-channel strategy aligning your specific unit economics, budget allocations, target customer personas, and channel-by-channel milestones."
    },
    {
      step: "03",
      title: "Multi-Channel Deployment & Creative",
      description: "Our team writes compelling ad copy, designs high-converting visual assets, builds fast landing pages, configures server-side tracking, and launches synchronized campaigns."
    },
    {
      step: "04",
      title: "A/B Optimization & Aggressive Scaling",
      description: "We monitor performance daily, continuously testing headlines, audience segments, and bidding thresholds to trim waste and double down on top-performing assets for exponential growth."
    }
  ];

  const useCases = [
    {
      title: "B2B SaaS & Tech Startups",
      desc: "Accelerate pipeline velocity with high-intent Google search ads, LinkedIn account-based marketing (ABM), comparison content, and demo booking CRO."
    },
    {
      title: "E-Commerce & DTC Brands",
      desc: "Scale customer acquisition with Google Shopping, Meta dynamic product ads, TikTok UGC creative hooks, and automated Klaviyo retention flows."
    },
    {
      title: "Professional & Enterprise Services",
      desc: "Attract high-ticket corporate clients through authority technical SEO, Google Search campaigns, and digital PR thought leadership."
    },
    {
      title: "Local & Multi-Location Businesses",
      desc: "Dominate local map packs, geo-targeted Google search queries, and hyper-localized social advertising to drive consistent walk-ins and phone calls."
    }
  ];

  const faqs = [
    {
      question: "What digital marketing services does TecWrites provide?",
      answer: "TecWrites delivers end-to-end digital marketing covering Search Engine Optimization (SEO & technical audits), Pay-Per-Click advertising (Google Ads & Bing), Paid Social (Meta, LinkedIn, TikTok), Content Marketing, Conversion Rate Optimization (CRO), Email Marketing Automation, Performance Tracking (GA4/GTM), and Digital PR."
    },
    {
      question: "How quickly will we see results from SEO vs PPC advertising?",
      answer: "PPC advertising generates traffic and leads immediately upon launch (within days), making it ideal for quick customer acquisition and testing. SEO is a compounding long-term investment that typically shows significant rank advancements, authority growth, and exponential traffic within 3 to 6 months. We recommend a balanced strategy leveraging both for immediate and sustained growth."
    },
    {
      question: "How do you measure and report marketing ROI?",
      answer: "We configure transparent, real-time Looker Studio dashboards linked to Google Analytics 4 (GA4), your ad accounts, and your CRM. We track actual revenue, qualified pipeline leads, cost per acquisition (CPA), and return on ad spend (ROAS)—ensuring complete transparency without confusing jargon."
    },
    {
      question: "Can TecWrites fix technical SEO and tracking issues on our existing website?",
      answer: "Yes! Because TecWrites is a creative technology and engineering studio, our developers can directly audit and repair broken structured data, slow Core Web Vitals, crawl errors, server-side Google Tag Manager containers, and Meta Conversions API (CAPI) setups without needing third-party engineering support."
    },
    {
      question: "Do you require long-term lock-in contracts?",
      answer: "No. We believe client relationships should be earned through performance. We offer flexible monthly retainers as well as project-based audits and setup sprints with transparent deliverable milestones."
    }
  ];

  const technologies = [
    "Google Ads",
    "Meta Ads Manager",
    "Google Analytics 4 (GA4)",
    "Google Tag Manager",
    "Semrush",
    "Ahrefs",
    "Google Search Console",
    "Klaviyo",
    "HubSpot",
    "Hotjar",
    "Looker Studio",
    "LinkedIn Campaign Manager"
  ];

  return (
    <>
      <SchemaMarkup
        type="CollectionPage"
        data={{
          name: "TecWrites Digital Marketing Services",
          description: "Full suite of data-driven digital marketing services: SEO, PPC, paid social, CRO, content strategy, email marketing, and analytics.",
          url: "https://www.tecwrites.com/services/digital-marketing"
        }}
      />
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
                    "name": "Services",
                    "item": "https://www.tecwrites.com/services"
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Digital Marketing",
                    "item": "https://www.tecwrites.com/services/digital-marketing"
                  }
                ]
              },
              {
                "@type": "Service",
                "name": "Digital Marketing Services",
                "serviceType": "Performance Marketing & SEO",
                "provider": {
                  "@type": "Organization",
                  "name": "TecWrites",
                  "url": "https://www.tecwrites.com"
                },
                "areaServed": "US",
                "description": "Full-service digital marketing: technical SEO, PPC management, conversion rate optimization, content marketing, and lifecycle automation engineered for sustainable ROI."
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
      <Header />
      <main className="flex-grow pt-32 pb-24 relative z-10 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        {/* Header Section */}
        <header className="text-center mb-20 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-amber-200/40 to-surface-container-lowest rounded-full shadow-[30px_30px_50px_rgba(0,0,0,0.05)] opacity-30 -z-10 mix-blend-multiply blur-[80px]"></div>
          <p className="font-label-caps text-label-caps text-[#C84B10] tracking-widest uppercase mb-4 opacity-80">
            PERFORMANCE MARKETING &amp; GROWTH
          </p>
          <h1 className="font-headline-xl text-headline-xl text-on-surface mb-6 mx-auto max-w-4xl leading-tight text-balance">
            Digital Marketing Services Engineered for Measurable ROI and Sustainable Growth
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-3xl mx-auto text-lg leading-relaxed mb-4">
            Great technology and exceptional products deserve a qualified audience. TecWrites delivers full-service digital marketing that unites data-driven technical SEO, high-converting PPC advertising, paid social campaigns, and conversion rate optimization (CRO) to build predictable customer acquisition engines.
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto text-base">
            We don’t chase vanity clicks or empty impressions. We engineer every campaign to increase your bottom-line revenue, lower your acquisition costs, and maximize customer lifetime value.
          </p>
        </header>

        {/* Hero Visual Card */}
        <section className="mb-24 max-w-4xl mx-auto">
          <div className="bg-surface-container-lowest rounded-3xl p-6 md:p-10 shadow-clay border border-white/60 flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2 aspect-[4/3] rounded-2xl overflow-hidden shadow-clay-sm bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center p-4">
              <img
                src="/services/Digital Marketing & Growth.png"
                alt="TecWrites Digital Marketing and SEO Services"
                className="w-full h-full object-contain drop-shadow-md rounded-xl"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-4">
              <span className="inline-block px-3 py-1 bg-amber-100 text-[#C84B10] rounded-full text-xs font-label-caps tracking-widest uppercase font-bold">
                FULL-FUNNEL ACCELERATION
              </span>
              <h2 className="font-headline-sm text-2xl font-bold text-on-surface">
                Turn Every Click Into Qualified Revenue
              </h2>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                By integrating technical code performance, psychological copywriting, and rigorous data tracking, we bridge the gap between creative storytelling and hard numbers.
              </p>
              <div className="pt-2 flex flex-wrap gap-2">
                <span className="clay-pill text-xs font-label-caps">Technical SEO</span>
                <span className="clay-pill text-xs font-label-caps">Google Ads PPC</span>
                <span className="clay-pill text-xs font-label-caps">Meta &amp; LinkedIn</span>
                <span className="clay-pill text-xs font-label-caps">CRO &amp; Funnels</span>
              </div>
            </div>
          </div>
        </section>

        {/* What Our Digital Marketing Services Include */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <p className="font-label-caps text-label-caps text-[#C84B10] uppercase tracking-wider mb-2">FULL-SERVICE EXPERTISE</p>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">
              Our Digital Marketing Capabilities
            </h2>
            <p className="text-on-surface-variant font-body-md text-lg max-w-2xl mx-auto mt-4">
              A comprehensive suite of digital marketing channels working together in synergy to amplify your reach and compound your results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceIncludes.map((item, idx) => (
              <article key={idx} className="bg-surface-container-lowest rounded-3xl p-8 shadow-clay hover:-translate-y-1 transition-all duration-300 border border-white/60 flex flex-col">
                <div className="w-14 h-14 rounded-2xl bg-amber-50 shadow-clay-inset flex items-center justify-center mb-6 text-[#C84B10]">
                  <span className="material-symbols-outlined text-3xl">
                    {item.icon}
                  </span>
                </div>
                <h3 className="font-headline-sm text-xl font-bold text-on-surface mb-3">
                  {item.title}
                </h3>
                <p className="text-on-surface-variant font-body-md text-sm leading-relaxed flex-grow">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Why Choose TecWrites */}
        <section className="mb-24 max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-label-caps text-label-caps text-[#C84B10] uppercase tracking-wider mb-2">THE TECWRITES ADVANTAGE</p>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">
              Why Choose TecWrites for Digital Marketing
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyChoosePoints.map((item, idx) => (
              <div key={idx} className="bg-surface-container-lowest rounded-3xl p-8 shadow-clay border border-white/60 flex flex-col justify-between">
                <div>
                  <h3 className="font-headline-sm text-xl font-bold text-on-surface mb-3 flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#C84B10] text-2xl">check_circle</span>
                    {item.title}
                  </h3>
                  <p className="text-on-surface-variant font-body-md text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4-Step Process */}
        <section className="mb-24 max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-label-caps text-label-caps text-[#C84B10] uppercase tracking-wider mb-2">PROVEN FRAMEWORK</p>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">
              How We Scale Your Digital Presence
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, idx) => (
              <div key={idx} className="bg-surface-container-lowest rounded-3xl p-6 shadow-clay border border-white/60 flex flex-col">
                <span className="font-mono text-3xl font-black text-[#C84B10]/40 mb-3">{step.step}</span>
                <h3 className="font-headline-sm text-lg font-bold text-on-surface mb-2">{step.title}</h3>
                <p className="text-on-surface-variant font-body-md text-xs leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Common Use Cases */}
        <section className="mb-24 max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-label-caps text-label-caps text-[#C84B10] uppercase tracking-wider mb-2">INDUSTRIES WE SERVE</p>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">
              Tailored Marketing for Modern Verticals
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {useCases.map((item, idx) => (
              <div key={idx} className="bg-surface-container-lowest rounded-2xl p-6 shadow-clay flex items-start gap-4 border border-white/50">
                <span className="material-symbols-outlined text-[#C84B10] text-[24px] mt-1">trending_up</span>
                <div>
                  <h3 className="font-headline-sm text-lg font-bold text-on-surface mb-1">{item.title}</h3>
                  <p className="text-on-surface-variant font-body-md text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technologies / Tools Grid */}
        <section className="mb-24 max-w-4xl mx-auto text-center">
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-8">MarTech Platforms &amp; Tools We Master</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, idx) => (
              <span key={idx} className="px-5 py-2.5 bg-surface-container-lowest rounded-full shadow-clay-sm text-on-surface font-label-caps text-label-caps border border-white/50">
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section className="mb-24 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-label-caps text-label-caps text-[#C84B10] uppercase tracking-wider mb-2">QUESTIONS &amp; ANSWERS</p>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">
              Frequently Asked Questions About Digital Marketing
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-surface-container-lowest rounded-2xl p-6 shadow-clay-sm border border-white/50">
                <h3 className="font-headline-sm text-lg font-bold text-on-surface mb-2">{faq.question}</h3>
                <p className="text-on-surface-variant font-body-md leading-relaxed text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-4xl mx-auto text-center bg-surface-container-lowest rounded-3xl p-10 md:p-16 shadow-clay border border-white/60">
          <p className="font-label-caps text-label-caps text-[#C84B10] uppercase tracking-widest mb-3">ACCELERATE YOUR GROWTH</p>
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">
            Ready to Outrank Competitors and Scale Revenue?
          </h2>
          <p className="text-on-surface-variant font-body-md text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Let’s review your website, ad accounts, and SEO health. Request a free digital marketing consultation and custom growth roadmap today.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-10 py-5 rounded-full bg-primary text-on-primary font-label-caps text-label-caps tracking-widest uppercase shadow-clay hover:scale-105 active:scale-95 transition-all duration-300 gap-3"
          >
            Schedule Your Marketing Strategy Call
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </Link>

          <div className="mt-10 pt-8 border-t border-outline-variant/30 flex flex-wrap justify-center items-center gap-3 text-xs font-label-caps text-on-surface-variant uppercase">
            <span>Related Services:</span>
            <Link href="/services/web-design" className="text-primary hover:underline">Web Design &amp; Development</Link>
            <span>•</span>
            <Link href="/services/ai" className="text-primary hover:underline">AI &amp; Automation</Link>
            <span>•</span>
            <Link href="/services/branding" className="text-primary hover:underline">Branding &amp; Animation</Link>
            <span>•</span>
            <Link href="/services/publishing" className="text-primary hover:underline">App Store Publishing &amp; ASO</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
