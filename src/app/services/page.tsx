import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import SchemaMarkup from "@/components/SchemaMarkup";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Creative Technology & Engineering Services",
  description: "Explore TecWrites full suite of digital services: Bespoke Web Design, End-to-End App Dev, AI Integrations, Game Development, Branding & Motion, DevOps, and App Store Publishing.",
  keywords: [
    "creative technology services",
    "web design and development services USA",
    "mobile app development services",
    "AI integration services",
    "game development services",
    "branding and animation services",
    "cloud infrastructure and DevOps",
    "app store publishing and ASO"
  ],
  alternates: {
    canonical: "https://www.tecwrites.com/services",
  },
  openGraph: {
    title: "Creative Technology & Engineering Services | TecWrites",
    description: "Explore TecWrites full suite of digital services: Bespoke Web Design, App Dev, AI, Game Dev, Branding, DevOps, and Publishing.",
    url: "https://www.tecwrites.com/services",
    type: "website",
    images: [
      {
        url: "/tecwrites-og-banner.png",
        width: 1200,
        height: 630,
        alt: "TecWrites Services Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Creative Technology & Engineering Services | TecWrites",
    description: "Explore TecWrites full suite of digital services: Bespoke Web Design, App Dev, AI, Game Dev, Branding, DevOps, and Publishing.",
    images: ["/tecwrites-og-banner.png"],
  },
};

export default function ServicesHubPage() {
  const servicesList = [
    {
      title: "Web Design & Development",
      subtitle: "Bespoke Web Engineering",
      icon: "web",
      image: "/services/website-animation-services.png",
      colorClass: "text-primary",
      badgeBg: "bg-primary-container",
      description: "Bespoke, animated, performance-focused websites where design, code, and motion are planned together. Sub-second load speeds, 3D WebGL experiences, and SEO-first architectures.",
      points: ["Bespoke Web Design & UI Systems", "Animated Interfaces & 3D WebGL", "Full-Stack React & Next.js Builds"],
      link: "/services/web-design"
    },
    {
      title: "End-to-End App Development",
      subtitle: "Full Product Builds",
      icon: "devices",
      image: "/services/Full Product Builds.png",
      colorClass: "text-primary",
      badgeBg: "bg-primary-container",
      description: "We handle the entire journey from your raw product blueprint and UX layouts to writing full-stack code and deploying live to App Stores. No fragmented handoffs.",
      points: ["Figma Interactive Prototypes", "Next.js & React Frontend Engineering", "React Native iOS & Android Builds"],
      link: "/services/app"
    },
    {
      title: "AI-Integrated Products",
      subtitle: "AI & Intelligence",
      icon: "smart_toy",
      image: "/services/AI & Intelligence.png",
      colorClass: "text-secondary",
      badgeBg: "bg-secondary-container",
      description: "Embed high-value cognitive capabilities into your systems. We design chat assistants, recommendation systems, and automated pipelines behind tactile, approachable user interfaces.",
      points: ["Custom LLM Integrations", "Retrieval-Augmented Generation (RAG)", "Conversational Chat Assistants"],
      link: "/services/ai"
    },
    {
      title: "Game Development",
      subtitle: "Interactive Games",
      icon: "sports_esports",
      image: "/services/Interactive Games.png",
      colorClass: "text-[#9E003A]",
      badgeBg: "bg-rose-100",
      description: "A rare in-house game developer and animation director combo. We build 60+ FPS responsive WebGL browser games, native mobile games, and gamified ed-tech tools.",
      points: ["WebGL & Three.js Canvas Graphics", "Gamified Learning Applications", "Branded Marketing Mini-Games"],
      link: "/services/game"
    },
    {
      title: "Branding, Animation & Design",
      subtitle: "Visual Identity",
      icon: "palette",
      image: "/services/Visual Identity (Branding, Animation & Design).png",
      colorClass: "text-[#B25E00]",
      badgeBg: "bg-amber-100",
      description: "We create cohesive brand books, logos, vector asset kits, App Store visual creatives, and custom 2D/3D brand explainer animations that fit developer assets perfectly.",
      points: ["Brand Identity Books & Logos", "Bespoke Vector Illustration Kits", "2D/3D Kinetic Explainer Videos"],
      link: "/services/branding"
    },
    {
      title: "App Store Publishing & ASO",
      subtitle: "Store Optimization",
      icon: "storefront",
      image: "/services/Self Publishing & Formatting.png",
      colorClass: "text-tertiary",
      badgeBg: "bg-tertiary-container",
      description: "We optimize your storefront assets and release parameters so your app actually ranks. ASO audit strategy, description copywriting, and compliance evaluations.",
      points: ["App Store & Play Store Uploads", "ASO Keyword & Copywriting Audits", "eBook KDP & Distribution Setup"],
      link: "/services/publishing"
    },
    {
      title: "Cloud Infrastructure & DevOps",
      subtitle: "DevOps & Scaling",
      icon: "cloud",
      image: "/services/DevOps & Scaling (Cloud Infrastructure).png",
      colorClass: "text-[#3B4252]",
      badgeBg: "bg-slate-200",
      description: "Configure automated scaling and secure codebases. We offer cloud scaling audits, CI/CD automated test pipelines, and host bill reduction optimization.",
      points: ["AWS & GCP Cloud Configurations", "Terraform Infrastructure as Code", "Docker Container Scaling"],
      link: "/services/devops"
    }
  ];

  return (
    <>
      <SchemaMarkup
        type="CollectionPage"
        data={{
          name: "TecWrites Digital Services & Capabilities",
          description: "Full suite of creative technology and publishing services offered by TecWrites.",
          url: "https://www.tecwrites.com/services",
          mainEntity: {
            "@type": "ItemList",
            "itemListElement": servicesList.map((service, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "name": service.title,
              "url": `https://www.tecwrites.com${service.link}`,
              "description": service.description
            }))
          }
        }}
      />
      <Header />
      <main className="flex-grow pt-32 pb-24 relative z-10 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        {/* Header Section */}
        <header className="text-center mb-20 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-primary-fixed to-surface-container-lowest rounded-full opacity-30 -z-10 mix-blend-multiply blur-[80px]"></div>
          <p className="font-label-caps text-label-caps text-primary tracking-widest uppercase mb-4 opacity-80">
            OUR DISCIPLINES
          </p>
          <h1 className="font-headline-xl text-headline-xl text-on-surface mb-6 mx-auto max-w-4xl leading-tight text-balance">
            Digital Engineering &amp; Creative Studio Services
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-3xl mx-auto text-lg leading-relaxed">
            We unite software engineering, tactile motion design, artificial intelligence, and publishing into a single, cohesive discipline. Explore our specialized services below.
          </p>
        </header>

        {/* Services Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {servicesList.map((service, idx) => (
            <Link key={idx} href={service.link} className="group block h-full">
              <article className="bg-surface-container-lowest rounded-3xl p-8 shadow-clay hover:-translate-y-2 hover:shadow-[20px_20px_40px_rgba(0,0,0,0.1)] transition-all duration-300 flex flex-col h-full border border-white/60">
                <div className="w-16 h-16 rounded-2xl bg-surface-container shadow-clay-inset flex items-center justify-center mb-6" style={{ color: service.colorClass.startsWith('text-[') ? service.colorClass.slice(5, -1) : undefined }}>
                  <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                    {service.icon}
                  </span>
                </div>
                <span className="font-label-caps text-label-caps text-primary uppercase tracking-wider text-xs mb-2">
                  {service.subtitle}
                </span>
                <h2 className="font-headline-sm text-2xl font-bold text-on-surface mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h2>
                <p className="text-on-surface-variant font-body-md text-sm leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>
                <div className="space-y-2 pt-4 border-t border-outline-variant/20 mb-6">
                  {service.points.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-2 text-xs font-medium text-on-surface-variant">
                      <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-auto pt-2 flex items-center justify-between text-primary font-label-caps text-xs uppercase tracking-wider font-bold">
                  <span>Explore Service</span>
                  <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </div>
              </article>
            </Link>
          ))}
        </section>

        {/* Bottom CTA Banner */}
        <section className="bg-surface-container-lowest rounded-3xl p-10 md:p-16 shadow-clay border border-white/60 text-center max-w-4xl mx-auto">
          <p className="font-label-caps text-label-caps text-primary uppercase tracking-widest mb-3">COLLABORATE WITH US</p>
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">
            Have a project in mind?
          </h2>
          <p className="text-on-surface-variant font-body-md text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Whether starting from an early blueprint or looking to overhaul an existing platform, our studio is ready to build with you.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-10 py-5 rounded-full bg-primary text-on-primary font-label-caps text-label-caps tracking-widest uppercase shadow-clay hover:scale-105 active:scale-95 transition-all duration-300 gap-3"
          >
            Start Your Project
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
