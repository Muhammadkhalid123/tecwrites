import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import SchemaMarkup from "@/components/SchemaMarkup";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Web App Development & Design | TecWrites",
  description: "TecWrites offers bespoke web design, custom web app development, and full-stack engineering to build scalable, high-performance digital experiences.",
  alternates: {
    canonical: 'https://tecwrites.com/services/web'
  }
};

export default function WebServicesPage() {
  const sections = [
    {
      title: "1. Strategy & Research",
      description: "Before writing code or designing pixels, we set the direction:",
      items: [
        { name: "Digital Strategy", desc: "Aligning business goals with website features, sales funnels, and brand positioning." },
        { name: "UX Research & Audits", desc: "Analyzing user behavior, mapping customer journeys, and discovering why visitors leave existing sites." },
        { name: "Information Architecture (IA)", desc: "Planning website navigation, sitemaps, and content structure." }
      ]
    },
    {
      title: "2. Design & User Experience (UX/UI)",
      description: "This focuses on how the digital product looks, feels, and functions:",
      items: [
        { name: "UI/UX Design", desc: "Designing wireframes, interactive prototypes, and high-fidelity page layouts." },
        { name: "Brand Identity", desc: "Creating logos, color palettes, typography, and brand guidelines for web use." },
        { name: "Design Systems", desc: "Building reusable design components so future website updates stay consistent." }
      ]
    },
    {
      title: "3. Web & Application Development",
      description: "This is the technical build and coding phase:",
      items: [
        { name: "Custom Web Development", desc: "Front-end (HTML/CSS, React, Next.js) and back-end development (Node.js, Python)." },
        { name: "CMS Development", desc: "Building on platforms like WordPress, Webflow, Craft CMS, or headless CMS setups (Strapi, Sanity)." },
        { name: "E-Commerce Solutions", desc: "Setting up online stores using Shopify, WooCommerce, Magento, or custom web apps." },
        { name: "Web Applications & SaaS", desc: "Building interactive tools, user portals, dashboard interfaces, and web-based software." },
        { name: "API & System Integrations", desc: "Connecting the site to CRMs (HubSpot, Salesforce), ERPs, payment gateways, and inventory systems." }
      ]
    },
    {
      title: "4. Content Creation & Digital Marketing",
      description: "Services that drive traffic and convert visitors into customers:",
      items: [
        { name: "Search Engine Optimization (SEO)", desc: "On-page, technical, and local SEO to help the site rank on search engines." },
        { name: "Copywriting & Content Strategy", desc: "Crafting website headlines, service descriptions, and blog posts optimized for conversions." },
        { name: "Conversion Rate Optimization (CRO)", desc: "A/B testing layouts, CTAs, and forms to increase sales/leads." },
        { name: "Digital Advertising (PPC)", desc: "Managing search ads, social media campaigns, and retargeting ads." }
      ]
    },
    {
      title: "5. Maintenance, Security & Hosting",
      description: "Ongoing support after the site goes live:",
      items: [
        { name: "Managed Web Hosting", desc: "Setting up cloud hosting (AWS, WP Engine, Cloudflare) with high uptime and speed optimizations." },
        { name: "Website Maintenance & Care Plans", desc: "Regular plugin updates, bug fixes, security patches, and daily backups." },
        { name: "Performance Optimization", desc: "Improving page load speeds and Core Web Vitals performance." }
      ]
    }
  ];

  return (
    <>
      <SchemaMarkup
        type="Service"
        data={{
          name: "Custom Web App Development & Design",
          description: "Full-stack web engineering, custom web applications, and dynamic website development services.",
          provider: {
            "@type": "Organization",
            name: "TecWrites"
          },
          serviceType: "Web Development"
        }}
      />
      <Header />
      <main className="flex-grow pt-32 pb-24 relative z-10 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        {/* Header Section */}
        <header className="text-center mb-24 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-secondary-fixed to-surface-container-lowest rounded-full shadow-[30px_30px_50px_rgba(0,0,0,0.05)] opacity-30 -z-10 mix-blend-multiply blur-[80px]"></div>
          <p className="font-label-caps text-label-caps text-secondary tracking-widest uppercase mb-4 opacity-80">SERVICE DEEP DIVE</p>
          <h1 className="font-headline-xl text-headline-xl text-on-surface mb-6 mx-auto max-w-4xl leading-tight text-balance">
            Custom Web App Development &amp; Design
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto text-lg">
            From strategic research to full-stack engineering and dynamic website development, we build scalable digital experiences that convert.
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
          <Link href="/contact" className="inline-flex items-center justify-center px-10 py-5 rounded-full bg-secondary text-on-secondary font-label-caps text-label-caps tracking-widest uppercase shadow-clay hover:scale-105 active:scale-95 transition-all duration-300 gap-3">
            Start Your Web Project
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
