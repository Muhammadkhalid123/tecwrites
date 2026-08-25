import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import SchemaMarkup from "@/components/SchemaMarkup";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "End-to-End Mobile & Web App Development | TecWrites",
  description: "TecWrites builds full-product mobile and web applications from idea to App Store. In-house UI/UX design, Next.js, React Native, and cloud architecture.",
  alternates: {
    canonical: 'https://tecwrites.com/services/app'
  }
};

export default function AppServicesPage() {
  const sections = [
    {
      title: "1. Product Strategy & UX Journey Design",
      description: "We map product architecture and design user journeys before writing a single line of code:",
      items: [
        { name: "Figma Interactive Prototypes", desc: "Building high-fidelity interactive screens and screen flow visual maps so you can test user flows before building." },
        { name: "UX Journey Optimization", desc: "Analyzing user friction points to minimize onboarding time, user fatigue, and mobile cart churn." },
        { name: "Technology Stack Consulting", desc: "Selecting optimal databases, cloud host servers, and language ecosystems for your performance and scaling goals." }
      ]
    },
    {
      title: "2. Full-Stack Web & Backend Engineering",
      description: "Engineering robust, high-performance web systems and secure server logic:",
      items: [
        { name: "Next.js & React Frontend", desc: "Building fast, responsive web systems optimized for search engines (SEO) and conversions." },
        { name: "Custom API Integration", desc: "Connecting databases, CRMs, and payment gateways using clean, securely documented API endpoints." },
        { name: "Headless CMS Deployments", desc: "Deploying setups (Strapi, Sanity) so your non-technical team can update marketing copy instantly." }
      ]
    },
    {
      title: "3. Cross-Platform Mobile Development",
      description: "Building native-feeling iOS & Android applications from a singular, clean codebase:",
      items: [
        { name: "React Native Architecture", desc: "Writing modular, scalable cross-platform mobile apps for rapid App Store releases." },
        { name: "Tactile Micro-Animations", desc: "Integrating layout animations and tap/swipe visual physics to make your app look and feel premium." },
        { name: "Offline-First Caching", desc: "Implementing local SQLite/WatermelonDB database caching so the app stays functional without internet connections." }
      ]
    },
    {
      title: "4. Store Submission & Optimization",
      description: "Managing the deployment pipeline and optimizing store listings to guarantee discoverability:",
      items: [
        { name: "Store Console Setup", desc: "Configuring App Store Connect and Google Play Console credentials under your business identifiers." },
        { name: "Review Guidelines Audit", desc: "Evaluating apps against strict Apple and Google guidelines to ensure first-time review approvals." },
        { name: "ASO Asset Engineering", desc: "Optimizing App Store keywords, metadata copywriting, and screenshots for higher organic search rankings." }
      ]
    }
  ];

  return (
    <>
      <SchemaMarkup
        type="Service"
        data={{
          name: "End-to-End App Development Services",
          description: "Full-product mobile and web applications from idea to App Store. UI/UX design, Next.js, React Native, and cloud setups.",
          provider: {
            "@type": "Organization",
            name: "TecWrites"
          },
          serviceType: "Full-Stack Development"
        }}
      />
      <Header />
      <main className="flex-grow pt-32 pb-24 relative z-10 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        {/* Header Section */}
        <header className="text-center mb-24 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-primary-fixed to-surface-container-lowest rounded-full shadow-[30px_30px_50px_rgba(0,0,0,0.05)] opacity-30 -z-10 mix-blend-multiply blur-[80px]"></div>
          <p className="font-label-caps text-label-caps text-primary tracking-widest uppercase mb-4 opacity-80">SERVICE DEEP DIVE</p>
          <h1 className="font-headline-xl text-headline-xl text-on-surface mb-6 mx-auto max-w-4xl leading-tight text-balance">
            End-to-End App Development
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto text-lg">
            We handle everything from your initial product blueprint and UX layout to writing full-stack code and deploying live to App Stores.
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
                    <span className="material-symbols-outlined text-primary mt-1 text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>
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
            {[
              "React",
              "Next.js",
              "React Native",
              "TailwindCSS",
              "Node.js",
              "Python",
              "PostgreSQL",
              "GraphQL",
              "Figma"
            ].map((tech, idx) => (
              <span key={idx} className="px-6 py-3 bg-surface rounded-full shadow-clay-sm text-on-surface font-label-caps text-label-caps border border-white/50">
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="mt-24 text-center">
          <Link href="/contact" className="inline-flex items-center justify-center px-10 py-5 rounded-full bg-primary text-on-primary font-label-caps text-label-caps tracking-widest uppercase shadow-clay hover:scale-105 active:scale-95 transition-all duration-300 gap-3">
            Build Your App Product
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
