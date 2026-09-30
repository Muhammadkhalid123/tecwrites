import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import SchemaMarkup from "@/components/SchemaMarkup";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "App Store Publishing & ASO Services | TecWrites",
  description: "App Store publishing and ASO services: release management, metadata copywriting, ASO audits, and KDP setup to help your app or book get discovered.",
  keywords: [
    "App Store Publishing and ASO Services",
    "app store optimization services",
    "ASO audit",
    "app store metadata copywriting",
    "iOS App Store release management",
    "Google Play publishing service",
    "KDP setup services",
    "ebook publishing services",
    "self-publishing services"
  ],
  alternates: {
    canonical: "/services/publishing"
  },
  openGraph: {
    title: "App Store Publishing & ASO Services | TecWrites",
    description: "App Store publishing and ASO services: release management, metadata copywriting, ASO audits, and KDP setup to help your app or book get discovered.",
    url: "/services/publishing",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "App Store Publishing & ASO Services | TecWrites",
    description: "App Store publishing and ASO services: release management, metadata copywriting, ASO audits, and KDP setup."
  }
};

export default function PublishingServicesPage() {
  const serviceIncludes = [
    {
      title: "iOS App Store & Google Play Release Management",
      description: "Build preparation, privacy policy manifests, store certificate setup, store compliance checks, and end-to-end launch coordination."
    },
    {
      title: "ASO Audits",
      description: "A comprehensive audit of your current store listing, conversion leaks, keyword positions, screenshot hierarchy, and competitor rankings with prioritized action points."
    },
    {
      title: "App Store Metadata Copywriting",
      description: "Optimized app titles, subtitles, short descriptions, bulleted keyword lists, and long descriptions written to convert human visitors and rank in store algorithms."
    },
    {
      title: "Strategic Keyword Research",
      description: "Identifying high-volume search terms your target users actually type, balancing difficulty and search frequency for maximum organic visibility."
    },
    {
      title: "Store Listing Creative Assets",
      description: "High-converting app icons, promotional banners, feature graphics, and device mockups created in partnership with our branding and animation team.",
      link: "/services/branding"
    },
    {
      title: "KDP Setup & eBook Publishing",
      description: "Kindle Direct Publishing (KDP) and IngramSpark account setup, reflowable EPUB typography formatting, BISAC category research, and metadata management for independent authors."
    },
    {
      title: "Launch Support & Momentum Strategy",
      description: "A tactical release plan for your first 30 days to build positive initial reviews, sustain download momentum, and avoid the post-launch traffic slump."
    }
  ];

  const whyChoosePoints = [
    {
      title: "We Build Apps Too",
      description: "Because our app development engineers work right alongside our publishing specialists, we plan for store requirements before the build is even finished.",
      linkText: "Read: From Idea to App Store",
      href: "/blog/idea-to-app-store-startup-guide"
    },
    {
      title: "Copy Written for Humans and Search",
      description: "Store listings should be persuasive, authentic, and benefit-driven, not stuffed awkwardly with robotic keywords."
    },
    {
      title: "Apps & Books Under One Roof",
      description: "Few studios excel in both domains. We have published 40+ independent titles and managed dozens of mobile app store releases worldwide."
    },
    {
      title: "Clear, Practical Audits",
      description: "You receive specific, prioritized engineering and metadata action items, not vague automated reports."
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Alignment",
      description: "We audit your app or manuscript, target demographic, competitor landscape, and core launch objectives."
    },
    {
      step: "02",
      title: "Strategy & Architecture",
      description: "We research high-traffic keywords, plan metadata hierarchies, and design promotional screenshot storyboards."
    },
    {
      step: "03",
      title: "Creation & Engineering",
      description: "We write conversion-focused metadata copy, render high-res store graphics, and configure store console accounts."
    },
    {
      step: "04",
      title: "Launch & Growth",
      description: "We submit builds, manage store review approval communications, and iterate keywords based on live conversion data."
    }
  ];

  const targetAudience = [
    {
      title: "App Founders & Startups",
      desc: "Prepare a flawless initial release or rescue an underperforming mobile listing that is struggling for organic downloads."
    },
    {
      title: "Established Mobile Brands",
      desc: "Execute structured A/B testing on store screenshots, icons, and localized metadata to drive higher organic conversion rates."
    },
    {
      title: "Authors & Creators",
      desc: "Self-publish professional eBooks and paperbacks on Amazon KDP with pristine formatting and targeted category keywords.",
      link: "/blog/ultimate-guide-ebook-publishing-2026",
      linkText: "Read eBook Publishing Guide"
    },
    {
      title: "Publishers & Media Outlets",
      desc: "Expand traditional media catalogs into digital marketplaces and global mobile ecosystems."
    }
  ];

  const faqs = [
    {
      question: "What is ASO and why does it matter?",
      answer: "ASO stands for App Store Optimization. It is the process of optimizing mobile app listings (titles, keywords, descriptions, screenshots, icons) to rank higher in store search results and convert more visitors into active downloads."
    },
    {
      question: "How long does ASO take to show results?",
      answer: "Initial keyword indexation typically occurs within a few days of releasing an update, with ranking momentum stabilizing over 4 to 8 weeks as download velocity and user reviews accumulate."
    },
    {
      question: "Can you help if my app is rejected by Apple or Google?",
      answer: "Yes. We conduct a thorough compliance audit of your binary build, privacy disclosures, metadata, and in-app purchase setups to resolve guideline violations and successfully resubmit."
    },
    {
      question: "What is KDP setup?",
      answer: "KDP (Kindle Direct Publishing) is Amazon's publishing platform. Our setup includes account configuration, tax setup, reflowable EPUB validation, paperback print formatting, BISAC categorization, and keyword optimization."
    },
    {
      question: "Can you publish both apps and books?",
      answer: "Yes. We provide end-to-end release management for mobile apps (iOS App Store & Google Play) as well as independent book publishing across Amazon KDP, IngramSpark, and global retailers."
    }
  ];

  const technologies = [
    "App Store Connect",
    "Google Play Console",
    "Amazon KDP",
    "IngramSpark",
    "AppTweak (ASO)",
    "Sensor Tower",
    "Figma",
    "Adobe InDesign",
    "EPUB3 Formatting",
    "Google Analytics 4"
  ];

  return (
    <>
      <SchemaMarkup
        type="Service"
        data={{
          name: "App Store Publishing and ASO Services",
          serviceType: "App Store Optimization & Publishing",
          provider: {
            "@type": "Organization",
            name: "TecWrites",
            url: "https://www.tecwrites.com"
          },
          areaServed: "US",
          description: "App Store publishing and ASO services: release management, metadata copywriting, ASO audits, and KDP setup to help your app or book get discovered."
        }}
      />
      <Header />
      <main className="flex-grow pt-32 pb-24 relative z-10 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        {/* Header Section */}
        <header className="text-center mb-20 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-tertiary-fixed to-surface-container-lowest rounded-full shadow-[30px_30px_50px_rgba(0,0,0,0.05)] opacity-30 -z-10 mix-blend-multiply blur-[80px]"></div>
          <p className="font-label-caps text-label-caps text-tertiary tracking-widest uppercase mb-4 opacity-80">
            STORE OPTIMIZATION &amp; PUBLISHING
          </p>
          <h1 className="font-headline-xl text-headline-xl text-on-surface mb-6 mx-auto max-w-4xl leading-tight text-balance">
            App Store Publishing and ASO Services That Get You Discovered
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-3xl mx-auto text-lg leading-relaxed mb-4">
            Publishing is not the finish line. A great app or book that nobody finds is still a struggle. TecWrites provides app store publishing and ASO services that take your product from finished build to discoverable listing: release management, metadata copywriting, App Store Optimization audits, and KDP setup for authors.
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto text-base">
            We have delivered 150+ digital projects and published 40+ books, so we know how store review, keywords, and listing copy work together in practice.
          </p>
        </header>

        {/* What Our Services Include */}
        <section className="mb-24 max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-label-caps text-label-caps text-tertiary uppercase tracking-wider mb-2">FULL SCOPE</p>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">
              What Our App Store Publishing and ASO Services Include
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {serviceIncludes.map((item, idx) => (
              <div
                key={idx}
                className="bg-surface rounded-2xl p-8 shadow-clay hover:-translate-y-1 transition-transform duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="material-symbols-outlined text-tertiary text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                      check_circle
                    </span>
                    <h3 className="font-headline-sm text-xl font-bold text-on-surface">{item.title}</h3>
                  </div>
                  <p className="text-on-surface-variant font-body-md leading-relaxed">{item.description}</p>
                  {item.link && (
                    <Link href={item.link} className="text-tertiary text-xs uppercase font-bold tracking-wider inline-flex items-center gap-1 mt-3 hover:underline">
                      Explore Creative Assets <span className="material-symbols-outlined text-[12px]">arrow_forward</span>
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* What Is ASO Section */}
        <section className="mb-24 max-w-5xl mx-auto">
          <div className="bg-surface-container rounded-3xl p-8 md:p-12 shadow-clay border border-white/60">
            <div className="max-w-3xl mx-auto">
              <p className="font-label-caps text-label-caps text-tertiary uppercase tracking-wider mb-2 text-center">SEARCH FUNDAMENTALS</p>
              <h2 className="font-headline-lg text-headline-lg text-on-surface text-center mb-6">
                What Is App Store Optimization (ASO)?
              </h2>
              <p className="text-on-surface-variant font-body-md text-lg leading-relaxed mb-6">
                <strong>App Store Optimization (ASO)</strong> is the ongoing process of improving your store listing so it appears in more organic searches and convinces a higher percentage of visitors to tap “Install”. It covers high-intent keyword indexing, subtitle copywriting, screenshot conversion hierarchies, icon tests, and rating management.
              </p>
              <p className="text-on-surface-variant font-body-md text-lg leading-relaxed">
                Think of ASO as SEO for mobile app ecosystems. Small, data-backed adjustments to keywords and visual layouts can double your download conversion rate without increasing your paid advertising spend.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose TecWrites for Publishing */}
        <section className="mb-24 max-w-5xl mx-auto">
          <div className="bg-surface-container-lowest rounded-3xl p-8 md:p-12 shadow-clay border border-white/60">
            <div className="text-center mb-12">
              <p className="font-label-caps text-label-caps text-tertiary uppercase tracking-wider mb-2">THE TECWRITES ADVANTAGE</p>
              <h2 className="font-headline-lg text-headline-lg text-on-surface">
                Why Choose TecWrites for App Publishing and ASO
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {whyChoosePoints.map((point, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="material-symbols-outlined text-tertiary text-[20px]">storefront</span>
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-lg font-bold text-on-surface mb-2">{point.title}</h3>
                    <p className="text-on-surface-variant font-body-md text-sm leading-relaxed mb-2">{point.description}</p>
                    {point.href && (
                      <Link href={point.href} className="text-tertiary font-semibold text-sm inline-flex items-center gap-1 hover:underline">
                        {point.linkText} <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Publishing Process */}
        <section className="mb-24 max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="font-label-caps text-label-caps text-tertiary uppercase tracking-wider mb-2">PUBLISHING TIMELINE</p>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">
              Our Publishing Process
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, idx) => (
              <div key={idx} className="bg-surface rounded-2xl p-6 shadow-clay relative flex flex-col justify-between">
                <div>
                  <span className="text-3xl font-black text-tertiary/20 font-headline-xl block mb-3">{step.step}</span>
                  <h3 className="font-headline-sm text-lg font-bold text-on-surface mb-2">{step.title}</h3>
                  <p className="text-on-surface-variant font-body-md text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Who Our Publishing Services Are For */}
        <section className="mb-24 max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-label-caps text-label-caps text-tertiary uppercase tracking-wider mb-2">TARGET AUDIENCE</p>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">
              Who Our Publishing Services Are For
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {targetAudience.map((item, idx) => (
              <div key={idx} className="bg-surface rounded-2xl p-6 shadow-clay flex items-start gap-4">
                <span className="material-symbols-outlined text-tertiary text-[24px] mt-1">check</span>
                <div>
                  <h3 className="font-headline-sm text-lg font-bold text-on-surface mb-1">{item.title}</h3>
                  <p className="text-on-surface-variant font-body-md text-sm">{item.desc}</p>
                  {item.link && (
                    <Link href={item.link} className="text-tertiary text-xs uppercase font-bold tracking-wider inline-flex items-center gap-1 mt-2 hover:underline">
                      {item.linkText || "Learn More"} <span className="material-symbols-outlined text-[12px]">arrow_forward</span>
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technologies Grid */}
        <section className="mb-24 max-w-4xl mx-auto text-center">
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-8">Platforms &amp; Tools We Use</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, idx) => (
              <span key={idx} className="px-5 py-2.5 bg-surface rounded-full shadow-clay-sm text-on-surface font-label-caps text-label-caps border border-white/50">
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section className="mb-24 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-label-caps text-label-caps text-tertiary uppercase tracking-wider mb-2">QUESTIONS &amp; ANSWERS</p>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">
              Frequently Asked Questions About App Publishing and ASO
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-surface rounded-2xl p-6 shadow-clay-sm">
                <h3 className="font-headline-sm text-lg font-bold text-on-surface mb-2">{faq.question}</h3>
                <p className="text-on-surface-variant font-body-md leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Start Your Publishing Project / CTA */}
        <section className="max-w-4xl mx-auto text-center bg-surface-container-lowest rounded-3xl p-10 md:p-16 shadow-clay border border-white/60">
          <p className="font-label-caps text-label-caps text-tertiary uppercase tracking-widest mb-3">GET STARTED</p>
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">
            Start Your App Store Publishing and ASO Project
          </h2>
          <p className="text-on-surface-variant font-body-md text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Launching well takes planning, and discovery takes ongoing attention. Tell us what you are publishing and we will build a plan to get it noticed.
          </p>

          <p className="font-medium text-on-surface text-xl mb-6">Ready to get your app or book in front of the right readers and users?</p>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-10 py-5 rounded-full bg-tertiary text-on-tertiary font-label-caps text-label-caps tracking-widest uppercase shadow-clay hover:scale-105 active:scale-95 transition-all duration-300 gap-3"
          >
            Get Your Publishing Plan
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </Link>

          <div className="mt-10 pt-8 border-t border-outline-variant/30 flex flex-wrap justify-center items-center gap-3 text-xs font-label-caps text-on-surface-variant uppercase">
            <span>Related Services:</span>
            <Link href="/services/app" className="text-tertiary hover:underline">End-to-End App Dev</Link>
            <span>•</span>
            <Link href="/services/branding" className="text-tertiary hover:underline">Branding &amp; Animation</Link>
            <span>•</span>
            <Link href="/services/ai" className="text-tertiary hover:underline">AI-Integrated Products</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
