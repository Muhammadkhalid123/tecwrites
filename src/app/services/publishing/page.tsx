import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import SchemaMarkup from "@/components/SchemaMarkup";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "eBook Publishing, KDP & Full Marketing Services | TecWrites",
  description: "TecWrites provides end-to-end eBook publishing, developmental and line editing, KDP formatting, cover design, and full SEO & Social Media Marketing (SMM).",
  alternates: {
    canonical: 'https://tecwrites.com/services/publishing'
  }
};

export default function PublishingServicesPage() {
  const sections = [
    {
      title: "1. Manuscript Editorial Services",
      description: "Perfecting your raw manuscript prior to layout and upload to ensure traditional-publishing quality:",
      items: [
        { name: "Developmental Editing", desc: "Substantive evaluation of plot structure, pacing, theme progression, character arcs, and overall narrative clarity." },
        { name: "Line Editing & Proofreading", desc: "Detailed refinement of style, sentence rhythm, voice, grammar, spelling, and paragraph flow." },
        { name: "Editorial Quality Control", desc: "Auditing formatting, index lists, and citations to ensure structural consistency." }
      ]
    },
    {
      title: "2. eBook Formatting & Custom Cover Design",
      description: "Transforming raw text manuscripts into high-end, professionally typeset files and custom covers:",
      items: [
        { name: "Reflowable EPUB Formatting", desc: "Typesetting manuscripts so text, drop caps, and illustrations adapt beautifully across iPad, Kindle, and Kobo screens." },
        { name: "Print Layout & Typesetting", desc: "Configuring trim sizes, margins, page numbers, running heads, and PDF specifications for high-quality paperbacks." },
        { name: "Bespoke Cover Design Briefs", desc: "Designing eye-catching, trend-aligned front and full-wrap print cover files that capture reader attention." }
      ]
    },
    {
      title: "3. KDP & Global Retail Distribution Setup",
      description: "Handling the technical configuration to index your title on major retail platforms while you keep 100% royalties:",
      items: [
        { name: "Amazon KDP & IngramSpark Setup", desc: "Configuring author dashboards, tax details, pricing structures, and distribution (KDP Select vs. Wide)." },
        { name: "Metadata & Keyword Optimization", desc: "Researching high-traffic search keywords and BISAC/Thema categories to index your book on search algorithms." },
        { name: "ISBN & Copyright Management", desc: "Registering ISBN identifiers, publishing imprint details, and copyright filings." }
      ]
    },
    {
      title: "4. Full-Scale Marketing Services",
      description: "Driving discoverability and conversion rates for books, digital products, and brands:",
      items: [
        { name: "Book Launch & ARC Campaigns", desc: "Setting up preorders, running reviewer campaigns (NetGalley), and orchestrating launch-week promos." },
        { name: "Search Engine Optimization (SEO)", desc: "Engineering on-page keywords, backlinks, load speed improvements, and sitemaps to rank your site on Google." },
        { name: "Social Media Marketing (SMM)", desc: "Building targeted ad campaigns (Meta, TikTok) and managing community brand channels to grow organic reach." }
      ]
    }
  ];

  const technologies = [
    "Amazon KDP",
    "IngramSpark",
    "Draft2Digital",
    "Bowker ISBN",
    "Ahrefs (SEO)",
    "SEMrush (SEO)",
    "Meta Ads Manager",
    "Google Analytics 4",
    "Figma",
    "Adobe Creative Suite"
  ];

  return (
    <>
      <SchemaMarkup
        type="Service"
        data={{
          name: "eBook Publishing, KDP & Marketing Services",
          description: "Manuscript editing, EPUB formatting, cover design, Amazon KDP distribution, and full SEO & SMM marketing.",
          provider: {
            "@type": "Organization",
            name: "TecWrites"
          },
          serviceType: "Publishing & Marketing Solutions"
        }}
      />
      <Header />
      <main className="flex-grow pt-32 pb-24 relative z-10 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        {/* Header Section */}
        <header className="text-center mb-24 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-tertiary-fixed to-surface-container-lowest rounded-full shadow-[30px_30px_50px_rgba(0,0,0,0.05)] opacity-30 -z-10 mix-blend-multiply blur-[80px]"></div>
          <p className="font-label-caps text-label-caps text-tertiary tracking-widest uppercase mb-4 opacity-80">SERVICE DEEP DIVE</p>
          <h1 className="font-headline-xl text-headline-xl text-on-surface mb-6 mx-auto max-w-4xl leading-tight text-balance">
            eBook Publishing, KDP &amp; Marketing
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto text-lg">
            Complete manuscript editing, professional eBook formatting, cover design, and full marketing campaigns (SEO, SMM) to launch your book or product successfully.
          </p>
        </header>

        {/* Services List */}
        <div className="space-y-12 max-w-4xl mx-auto">
          {sections.map((section, idx) => (
            <article key={idx} className="bg-surface rounded-[2rem] p-8 md:p-12 shadow-clay relative group transition-transform duration-300 hover:-translate-y-1">
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">{section.title}</h2>
              <p className="text-on-surface-variant font-body-md text-lg mb-8">{section.description}</p>
              
              <ul className="space-y-6">
                {section.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-[#7A643F] mt-1 text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                      check_circle
                    </span>
                    <div>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface mb-1">{item.name}</h3>
                      <p className="font-body-md text-on-surface-variant">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* Technologies Grid */}
        <section className="mt-24 max-w-4xl mx-auto">
          <h2 className="font-headline-lg text-headline-lg text-on-surface text-center mb-12">Technologies We Use</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, idx) => (
              <span key={idx} className="px-6 py-3 bg-surface rounded-full shadow-clay-sm text-on-surface font-label-caps text-label-caps border border-white/50">
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="mt-24 text-center">
          <Link href="/contact" className="inline-flex items-center justify-center px-10 py-5 rounded-full bg-tertiary text-on-tertiary font-label-caps text-label-caps tracking-widest uppercase shadow-clay hover:scale-105 active:scale-95 transition-all duration-300 gap-3">
            Launch Your Publishing Project
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
