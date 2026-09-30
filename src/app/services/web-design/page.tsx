import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import SchemaMarkup from "@/components/SchemaMarkup";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Design & Development Services USA | TecWrites",
  description: "Custom web design and development services in the USA: animated websites, 3D web design, headless commerce, and fast SEO-ready builds. Request a quote.",
  keywords: [
    "Web Design and Development Services USA",
    "custom web design company",
    "animated website design",
    "website animation services",
    "3D web design services",
    "bespoke web design",
    "website redesign services",
    "headless commerce development",
    "SEO-friendly web development"
  ],
  alternates: {
    canonical: "/services/web-design"
  },
  openGraph: {
    title: "Web Design & Development Services USA | TecWrites",
    description: "Custom web design and development services in the USA: animated websites, 3D web design, headless commerce, and fast SEO-ready builds. Request a quote.",
    url: "/services/web-design",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design & Development Services USA | TecWrites",
    description: "Custom web design and development services in the USA: animated websites, 3D web design, headless commerce, and fast SEO-ready builds."
  }
};

export default function WebDesignServicesPage() {
  const serviceIncludes = [
    {
      title: "Bespoke Web Design",
      description: "Custom UI layouts, bespoke typography, and tailor-made visual systems built entirely around your brand identity, never borrowed from generic templates."
    },
    {
      title: "Animated Website Design",
      description: "Tactile interface motion, scroll-triggered reveals, and micro-animations that guide visitor attention and explain your value proposition effortlessly.",
      links: [
        { text: "Read Website Animation Guide", href: "/blog/website-animation-services-usa" }
      ]
    },
    {
      title: "3D Web Design Services",
      description: "Interactive WebGL, Three.js, and Spline 3D experiences for immersive hero centerpieces, virtual product showrooms, and spatial interactive canvases."
    },
    {
      title: "Full-Stack Web Development",
      description: "Modern, high-performance web systems built with React and Next.js (SSR, SSG, Turbopack) engineered for 99+ Google Lighthouse performance scores."
    },
    {
      title: "Headless Commerce Development",
      description: "Flexible, ultra-fast storefronts built on composable architectures (Shopify Storefront API, Stripe) designed to maximize checkout conversion rates."
    },
    {
      title: "Website Redesign Services",
      description: "A complete aesthetic and structural overhaul for businesses that have outgrown their legacy WordPress setup or outdated visual footprint."
    },
    {
      title: "SEO-Friendly Web Development",
      description: "Sub-second load times, clean HTML5 semantic markup, mobile-first responsive design, and structured JSON-LD schema built directly into every page."
    }
  ];

  const whyChoosePoints = [
    {
      title: "Design, Code & Motion Together",
      description: "Animation and visuals are planned into the design and engineered into the codebase as one, not added as a sluggish afterthought."
    },
    {
      title: "Performance & SEO from Day One",
      description: "We protect Core Web Vitals, sub-second load times, and crawlable SSR content so your website is primed to rank and convert."
    },
    {
      title: "Accessible by Design",
      description: "We support reduced-motion browser preferences, high-contrast typography, and keyboard-navigable UI architectures."
    },
    {
      title: "Everything in One Studio",
      description: "Branding, AI features, cloud hosting, and publishing are handled seamlessly under one roof as your digital requirements expand.",
      linkText: "Explore Branding & Animation",
      href: "/services/branding"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Alignment",
      description: "We clarify your target audience, conversion goals, brand narrative, and what visitors must understand in their first 5 seconds."
    },
    {
      step: "02",
      title: "Strategy & Architecture",
      description: "We map site structure, content hierarchy, SEO keyword foundations, and pinpoint where interactive motion delivers the greatest impact."
    },
    {
      step: "03",
      title: "Creation & Engineering",
      description: "We design high-fidelity Figma layouts, develop production React/Next.js code, and rigorously test across real mobile and desktop screens."
    },
    {
      step: "04",
      title: "Launch & Growth",
      description: "We deploy to high-speed global edge CDNs, monitor Search Console indexing and Core Web Vitals, and refine based on real user analytics."
    }
  ];

  const targetAudience = [
    {
      title: "Startups & Emerging Brands",
      desc: "Launch a world-class first digital impression that commands authority, wows investors, and turns early traffic into qualified leads."
    },
    {
      title: "Established Brands",
      desc: "Modernize a dated website with responsive claymorphic aesthetics, fluid animation, and sub-second page load times."
    },
    {
      title: "E-Commerce & DTC Stores",
      desc: "Upgrade to a lightning-fast headless storefront with custom 3D product configurators and streamlined checkout funnels."
    },
    {
      title: "Complex Tech & B2B Products",
      desc: "Explain complex software and technical workflows clearly using interactive kinetic diagrams and visual demonstrations."
    }
  ];

  const faqs = [
    {
      question: "How much do web design and development services cost?",
      answer: "Pricing depends on the number of pages, custom motion/3D requirements, CMS integrations, and headless e-commerce features. Share your goals with us and we will scope the project with a clear, transparent quote."
    },
    {
      question: "Does website animation hurt SEO?",
      answer: "Not when built properly. We use lightweight formats (SVG, CSS, Lottie), lazy-loading, and real server-rendered HTML text so animated sites remain fast, accessible, and highly favored by Google’s Core Web Vitals."
    },
    {
      question: "Can you redesign my existing website?",
      answer: "Yes. We conduct a full audit of your current site, then redesign and rebuild it with a modern structure, clean code, faster page speeds, and hardened SEO foundations."
    },
    {
      question: "Do you build 3D and interactive websites?",
      answer: "Yes. We build hardware-accelerated 3D and interactive experiences using WebGL, Three.js, and Spline, advising on performance trade-offs so the experience stays lightning-fast."
    },
    {
      question: "How long does it take to build a website?",
      answer: "Timelines depend on site complexity. A focused 5-page animated brand site moves much faster than a large headless commerce platform. We confirm a milestone-driven schedule during our discovery call."
    }
  ];

  const technologies = [
    "Next.js (App Router)",
    "React",
    "TypeScript",
    "TailwindCSS",
    "Three.js & WebGL",
    "Spline 3D",
    "GreenSock (GSAP)",
    "Figma",
    "Vercel Edge Network",
    "Headless CMS (Sanity / Strapi)"
  ];

  return (
    <>
      <SchemaMarkup
        type="Service"
        data={{
          name: "Web Design and Development Services USA",
          serviceType: "Web Design & Full-Stack Development",
          provider: {
            "@type": "Organization",
            name: "TecWrites",
            url: "https://www.tecwrites.com"
          },
          areaServed: "US",
          description: "Custom web design and development services in the USA: animated websites, 3D web design, headless commerce, and fast SEO-ready builds."
        }}
      />
      <Header />
      <main className="flex-grow pt-32 pb-24 relative z-10 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        {/* Header Section */}
        <header className="text-center mb-20 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-primary-fixed to-surface-container-lowest rounded-full shadow-[30px_30px_50px_rgba(0,0,0,0.05)] opacity-30 -z-10 mix-blend-multiply blur-[80px]"></div>
          <p className="font-label-caps text-label-caps text-primary tracking-widest uppercase mb-4 opacity-80">
            BESPOKE WEB ENGINEERING
          </p>
          <h1 className="font-headline-xl text-headline-xl text-on-surface mb-6 mx-auto max-w-4xl leading-tight text-balance">
            Web Design and Development Services in the USA for Brands That Want to Stand Out
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-3xl mx-auto text-lg leading-relaxed mb-4">
            Most websites look alike: the same template, the same stock images, the same scroll. TecWrites provides web design and development services USA businesses use to break from that pattern. We build bespoke, animated, performance-focused websites where design, code, and motion are planned together, so your site looks distinctive, loads fast, and is ready to rank.
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto text-base">
            Our studio in Lake St. Louis, Missouri merges high-performance web engineering with refined design and editorial craft.
          </p>
        </header>

        {/* What Our Services Include */}
        <section className="mb-24 max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-label-caps text-label-caps text-primary uppercase tracking-wider mb-2">FULL SCOPE</p>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">
              What Our Web Design and Development Services Include
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
                    <span className="material-symbols-outlined text-primary text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                      check_circle
                    </span>
                    <h3 className="font-headline-sm text-xl font-bold text-on-surface">{item.title}</h3>
                  </div>
                  <p className="text-on-surface-variant font-body-md leading-relaxed">{item.description}</p>
                  {item.links && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {item.links.map((link, lIdx) => (
                        <Link key={lIdx} href={link.href} className="text-primary text-xs uppercase font-bold tracking-wider inline-flex items-center gap-1 hover:underline">
                          {link.text} <span className="material-symbols-outlined text-[12px]">arrow_forward</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Custom Web Design vs Templates */}
        <section className="mb-24 max-w-5xl mx-auto">
          <div className="bg-surface-container rounded-3xl p-8 md:p-12 shadow-clay border border-white/60">
            <div className="max-w-3xl mx-auto">
              <p className="font-label-caps text-label-caps text-primary uppercase tracking-wider mb-2 text-center">STRATEGIC VALUE</p>
              <h2 className="font-headline-lg text-headline-lg text-on-surface text-center mb-6">
                Custom Web Design vs Templates
              </h2>
              <p className="text-on-surface-variant font-body-md text-lg leading-relaxed mb-6">
                Templates are quick and inexpensive, which is their initial appeal. The trade-off is that they look identical to hundreds of competitor sites, carry bloated script dependencies you do not need, and are difficult to customize as your brand grows.
              </p>
              <p className="text-on-surface-variant font-body-md text-lg leading-relaxed">
                <strong>Custom web design</strong> costs more upfront but gives you a distinct visual identity, clean performance scores, and a structure engineered specifically around your sales and engagement goals. When first impressions determine whether visitors stay or bounce, bespoke engineering is the superior investment.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose TecWrites for Web Design */}
        <section className="mb-24 max-w-5xl mx-auto">
          <div className="bg-surface-container-lowest rounded-3xl p-8 md:p-12 shadow-clay border border-white/60">
            <div className="text-center mb-12">
              <p className="font-label-caps text-label-caps text-primary uppercase tracking-wider mb-2">THE TECWRITES ADVANTAGE</p>
              <h2 className="font-headline-lg text-headline-lg text-on-surface">
                Why Choose TecWrites for Website Design and Development
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {whyChoosePoints.map((point, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="material-symbols-outlined text-primary text-[20px]">web</span>
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-lg font-bold text-on-surface mb-2">{point.title}</h3>
                    <p className="text-on-surface-variant font-body-md text-sm leading-relaxed mb-2">{point.description}</p>
                    {point.href && (
                      <Link href={point.href} className="text-primary font-semibold text-sm inline-flex items-center gap-1 hover:underline">
                        {point.linkText} <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Web Design Process */}
        <section className="mb-24 max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="font-label-caps text-label-caps text-primary uppercase tracking-wider mb-2">DEVELOPMENT TIMELINE</p>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">
              Our Web Design Process
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, idx) => (
              <div key={idx} className="bg-surface rounded-2xl p-6 shadow-clay relative flex flex-col justify-between">
                <div>
                  <span className="text-3xl font-black text-primary/20 font-headline-xl block mb-3">{step.step}</span>
                  <h3 className="font-headline-sm text-lg font-bold text-on-surface mb-2">{step.title}</h3>
                  <p className="text-on-surface-variant font-body-md text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Who Our Web Design Services Are For */}
        <section className="mb-24 max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-label-caps text-label-caps text-primary uppercase tracking-wider mb-2">TARGET AUDIENCE</p>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">
              Who Our Web Design Services Are For
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {targetAudience.map((item, idx) => (
              <div key={idx} className="bg-surface rounded-2xl p-6 shadow-clay flex items-start gap-4">
                <span className="material-symbols-outlined text-primary text-[24px] mt-1">check</span>
                <div>
                  <h3 className="font-headline-sm text-lg font-bold text-on-surface mb-1">{item.title}</h3>
                  <p className="text-on-surface-variant font-body-md text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technologies Grid */}
        <section className="mb-24 max-w-4xl mx-auto text-center">
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-8">Technologies We Use</h2>
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
            <p className="font-label-caps text-label-caps text-primary uppercase tracking-wider mb-2">QUESTIONS &amp; ANSWERS</p>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">
              Frequently Asked Questions About Web Design and Development
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

        {/* Get Started / CTA */}
        <section className="max-w-4xl mx-auto text-center bg-surface-container-lowest rounded-3xl p-10 md:p-16 shadow-clay border border-white/60">
          <p className="font-label-caps text-label-caps text-primary uppercase tracking-widest mb-3">GET STARTED</p>
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">
            Get Started with Web Design and Development Services in the USA
          </h2>
          <p className="text-on-surface-variant font-body-md text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Your website is often the first thing a potential customer sees. Tell us about your business and we will design and build a site that earns attention and keeps it.
          </p>

          <p className="font-medium text-on-surface text-xl mb-6">Ready for a website that looks remarkable and ranks well?</p>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-10 py-5 rounded-full bg-primary text-on-primary font-label-caps text-label-caps tracking-widest uppercase shadow-clay hover:scale-105 active:scale-95 transition-all duration-300 gap-3"
          >
            Start Your Website Project
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </Link>

          <div className="mt-10 pt-8 border-t border-outline-variant/30 flex flex-wrap justify-center items-center gap-3 text-xs font-label-caps text-on-surface-variant uppercase">
            <span>Related Services:</span>
            <Link href="/services/branding" className="text-primary hover:underline">Branding &amp; Animation</Link>
            <span>•</span>
            <Link href="/services/ai" className="text-primary hover:underline">AI-Integrated Products</Link>
            <span>•</span>
            <Link href="/services/devops" className="text-primary hover:underline">Cloud &amp; DevOps</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
