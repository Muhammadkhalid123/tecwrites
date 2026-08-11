import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import SchemaMarkup from "@/components/SchemaMarkup";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Independent eBook Publishing Consultant | TecWrites",
  description: "TecWrites acts as your independent eBook publishing consultant, offering self-publishing formatting services, cover design, and KDP distribution strategies.",
  alternates: {
    canonical: 'https://tecwrites.com/services/publishing'
  }
};

export default function PublishingServicesPage() {
  const sections = [
    {
      title: "1. Strategy, Budgeting & Project Management",
      description: "Before spending money on production, we establish a roadmap tailored to your target audience and budget:",
      items: [
        { name: "Publishing Strategy", desc: "Choosing between exclusive distribution (e.g., Amazon KDP Select) vs. \"going wide\" (Draft2Digital, IngramSpark, Kobo, Apple)." },
        { name: "Budget Allocation & ROI Planning", desc: "Setting a realistic production budget for editing, cover design, and marketing to avoid overspending on unnecessary extras." },
        { name: "Project Management & Timelines", desc: "Creating production schedules, managing deadlines, and coordinating freelance teams (editors, illustrators, formatters)." },
        { name: "Business Setup", desc: "Advising on forming an author publishing imprint, setting up business accounts, tax forms, and payment profiles." }
      ]
    },
    {
      title: "2. Editorial Oversight & Quality Control",
      description: "We ensure your manuscript meets professional traditional-publishing standards before formatting:",
      items: [
        { name: "Editorial Audits & Manuscript Evaluations", desc: "Assessing the manuscript to determine whether it needs developmental editing, copyediting, or proofreading." },
        { name: "Hiring & Vetting Freelancers", desc: "Connecting you with vetted professional editors, indexers, or sensitivity readers who fit your specific genre." },
        { name: "Quality Assurance Review", desc: "Reviewing edited manuscripts to catch inconsistencies in formatting, tone, or layout before interior typesetting." }
      ]
    },
    {
      title: "3. Cover Design & Interior Formatting Direction",
      description: "A book is judged by its cover and interior usability; we guide the visual design:",
      items: [
        { name: "Cover Brief Creation", desc: "Translating genre market trends into creative briefs for custom cover designers." },
        { name: "Interior Layout Planning", desc: "Advising on trim sizes (e.g., 5.5x8.5, 6x9), paper types, margins, typography, and page count considerations to minimize print costs." },
        { name: "eBook & Print Formatting Quality Control", desc: "Ensuring reflowable EPUB files and print PDFs pass technical specs for all platforms without visual glitches." }
      ]
    },
    {
      title: "4. Technical Publishing Setup & Metadata Management",
      description: "Handling the technical configuration to make sure the book is discoverable on major retail algorithms:",
      items: [
        { name: "Metadata Optimization", desc: "Researching high-traffic Amazon search keywords, BISAC/Thema categories, and crafting compelling book descriptions optimized for conversion." },
        { name: "ISBN Acquisition & Imprint Registration", desc: "Guiding ISBN registration (Bowker, Nielsen) so you own your publisher identifiers." },
        { name: "Platform Upload & Configuration", desc: "Setting up and configuring author accounts across Amazon KDP, IngramSpark, Barnes & Noble Press, Draft2Digital, and Google Play." },
        { name: "Copyright & Legal Protection", desc: "Providing step-by-step guidance on registering copyright, obtaining Library of Congress Control Numbers (LCCN), and managing disclaimers." }
      ]
    },
    {
      title: "5. Printing & Distribution Architecture",
      description: "Setting up print systems that allow physical stores and online retailers to stock your book:",
      items: [
        { name: "Print-on-Demand (POD) Setup", desc: "Configuring KDP Print and IngramSpark print settings for trade paperbacks and hardcovers." },
        { name: "Bookstore & Library Wholesale Strategy", desc: "Setting wholesale discount rates and return policies on IngramSpark so brick-and-mortar bookstores and libraries can order your title." },
        { name: "Offset Printing & Bulk Orders", desc: "Advising on offshore or domestic offset printing runs for specialized books (e.g., hardcovers with dust jackets, illustrated children's books, custom edges) and managing warehouse fulfillment." }
      ]
    },
    {
      title: "6. Marketing, Launch Strategy & PR",
      description: "Making sure the book gets noticed in a crowded market:",
      items: [
        { name: "Launch Sequence Planning", desc: "Structuring preorder windows, price promos, and launch-week promotional calendars." },
        { name: "Advance Review Copy (ARC) Campaigns", desc: "Managing review campaigns via NetGalley, StoryOrigin, or Voracious Readers to gather social proof before launch." },
        { name: "Amazon & Social Ad Strategy", desc: "Advising on set up and management for Amazon Ads, Meta Ads, and newsletter swaps (e.g., Bargain Booksy, Freebooksy)." },
        { name: "Author Platform & Direct-to-Consumer Sales", desc: "Setting up author websites, email newsletter leads, and direct store integrations (via Shopify + Lulu Direct) to sell directly to readers." }
      ]
    },
    {
      title: "7. Format Expansion & Long-Term Management",
      description: "Maxing out the revenue potential of the intellectual property:",
      items: [
        { name: "Audiobook Production Guidance", desc: "Advising on narration options, ACX/Findaway Voices distribution setup, and mastering standards." },
        { name: "Translation & Foreign Rights", desc: "Exploring opportunities to license or produce translated versions in other languages." },
        { name: "Backlist Management", desc: "Re-optimizing old titles, updating covers, and testing new price points to revive sales over time." }
      ]
    }
  ];

  return (
    <>
      <SchemaMarkup
        type="Service"
        data={{
          name: "Independent eBook Publishing Consultant",
          description: "End-to-end eBook publishing consulting, KDP distribution, formatting, and author book marketing.",
          provider: {
            "@type": "Organization",
            name: "TecWrites"
          },
          serviceType: "Self Publishing Services"
        }}
      />
      <Header />
      <main className="flex-grow pt-32 pb-24 relative z-10 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        {/* Header Section */}
        <header className="text-center mb-24 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-tertiary-fixed to-surface-container-lowest rounded-full shadow-[30px_30px_50px_rgba(0,0,0,0.05)] opacity-30 -z-10 mix-blend-multiply blur-[80px]"></div>
          <p className="font-label-caps text-label-caps text-tertiary tracking-widest uppercase mb-4 opacity-80">SERVICE DEEP DIVE</p>
          <h1 className="font-headline-xl text-headline-xl text-on-surface mb-6 mx-auto max-w-4xl leading-tight text-balance">
            Independent eBook Publishing Consultant
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto text-lg">
            As your self-publishing consultant, we act as a strategic guide, project manager, and technical advisor for independent authors. We help you navigate EPUB formatting, design, and distribution while ensuring 100% of the copyright remains yours.
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
                    <span className="material-symbols-outlined text-[#006B5B] mt-1 text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>
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

        {/* CTA */}
        <div className="mt-24 text-center">
          <Link href="/contact" className="inline-flex items-center justify-center px-10 py-5 rounded-full bg-tertiary text-on-tertiary font-label-caps text-label-caps tracking-widest uppercase shadow-clay hover:scale-105 active:scale-95 transition-all duration-300 gap-3">
            Publish Your Book
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
