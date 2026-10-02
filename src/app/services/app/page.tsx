import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import SchemaMarkup from "@/components/SchemaMarkup";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobile App Development Services USA | iOS & Android",
  description: "Custom mobile app development services in the USA. iOS and Android apps, backend servers, and APIs engineered from idea to App Store. Request a quote.",
  keywords: [
    "Mobile App Development Services USA",
    "custom app development company",
    "iOS and Android app development",
    "cross-platform app development",
    "full-stack app development",
    "backend development services",
    "API development and integration",
    "MVP development for startups",
    "app development from idea to App Store"
  ],
  alternates: {
    canonical: "https://www.tecwrites.com/services/app"
  },
  openGraph: {
    title: "Mobile App Development Services USA | iOS & Android",
    description: "Custom mobile app development services in the USA. iOS and Android apps, backend servers, and APIs engineered from idea to App Store.",
    url: "https://www.tecwrites.com/services/app",
    type: "website",
    images: [
      {
        url: "/services/Full Product Builds.png",
        width: 1200,
        height: 630,
        alt: "Mobile App Development Services USA by TecWrites",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile App Development Services USA | iOS & Android",
    description: "Custom mobile app development services in the USA. iOS and Android apps, backend servers, and APIs engineered from idea to App Store.",
    images: ["/services/Full Product Builds.png"],
  }
};

export default function AppServicesPage() {
  const serviceIncludes = [
    {
      title: "Cross-Platform iOS & Android App Development",
      description: "One product that feels right on both platforms, built efficiently so you reach more users sooner without maintaining two separate codebases."
    },
    {
      title: "Full-Stack App Development",
      description: "Interfaces, business logic, and databases engineered together as a single cohesive system tailored for performance and scale."
    },
    {
      title: "Backend Server Development",
      description: "Secure, scalable servers that handle user accounts, realtime data syncing, payments, and push notifications as your user base grows."
    },
    {
      title: "API Development & Integration",
      description: "Custom REST and GraphQL APIs for your own product, plus seamless integrations with the third-party platforms and services your app depends on."
    },
    {
      title: "MVP Development for Startups",
      description: "A focused first version you can put in front of real users, gather actionable feedback, and iterate on without wasting development cycles."
    },
    {
      title: "Web Products & Dashboards",
      description: "Companion web apps, customer portals, and internal admin panels that share the exact same backend and database as your mobile app."
    },
    {
      title: "App Store & Google Play Release Support",
      description: "Submission, compliance checks, guideline auditing, and launch management handled through our dedicated App Store publishing and ASO service."
    }
  ];

  const whyChoosePoints = [
    {
      title: "One Team from Design to Launch",
      description: "Design, engineering, and publishing happen under one roof, which means zero fragmented handoffs and significantly faster progress."
    },
    {
      title: "Built for the Store, Not Just the Code",
      description: "Store compliance and App Store Optimization are planned from the very start. Read our guide, From Idea to App Store, to learn the crucial phase most startups skip.",
      linkText: "Read: From Idea to App Store",
      href: "/blog/idea-to-app-store-startup-guide"
    },
    {
      title: "Interfaces People Enjoy Using",
      description: "We design tactile, intuitive interfaces with micro-interactions so your app feels refined and native instead of assembled from generic templates."
    },
    {
      title: "Proven Delivery",
      description: "With 150+ projects delivered across mobile apps, web, AI, and publishing, we know exactly what separates a launch that succeeds from one that stalls."
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Alignment",
      description: "We learn your users, business goals, and technical constraints, and clearly define what version one must do to succeed."
    },
    {
      step: "02",
      title: "Strategy & Architecture",
      description: "We map user flows, interactive Figma screens, backend structure, and external integrations before writing production code."
    },
    {
      step: "03",
      title: "Creation & Engineering",
      description: "We design and build in focused sprint iterations, rigorously testing on real iOS and Android devices as we progress."
    },
    {
      step: "04",
      title: "Launch & Growth",
      description: "We manage App Store and Google Play submissions, coordinate the release, and keep refining based on real analytics and user feedback."
    }
  ];

  const targetAudience = [
    {
      title: "Startups Validating an Idea",
      desc: "Get to market rapidly with a polished, high-retention MVP designed to secure early traction and investor backing."
    },
    {
      title: "Established Businesses",
      desc: "Move operations, sales, or customer service onto modern mobile apps that integrate with your existing enterprise systems."
    },
    {
      title: "Ed-Tech & Learning Platforms",
      desc: "Build engaging, gamified learning applications crafted in partnership with our specialized game development team.",
      link: "/services/game"
    },
    {
      title: "Publishers & Creators",
      desc: "Build proprietary reading, audio, or multimedia content apps integrated with digital distribution networks.",
      link: "/services/publishing"
    }
  ];

  const faqs = [
    {
      question: "How much do mobile app development services cost?",
      answer: "Cost depends on features, platforms, backend complexity, and integrations. A focused MVP costs far less than a full multi-sided platform. Share your idea with us and we will scope it out and provide a clear, transparent quote."
    },
    {
      question: "Do you build both iOS and Android apps?",
      answer: "Yes. We build cross-platform apps using React Native and modern frameworks that run natively on both iOS and Android, so you reach both audiences without paying to build and maintain two completely separate codebases."
    },
    {
      question: "Do you build the backend and APIs too?",
      answer: "Yes. We deliver the complete product, including secure cloud backend servers, relational/NoSQL databases, authentication systems, and documented APIs."
    },
    {
      question: "Can you help publish my app to the App Store and Google Play?",
      answer: "Yes. Our publishing team manages the entire release process, store compliance guidelines, screenshot graphics, and metadata optimization so your app passes review without rejections."
    },
    {
      question: "How long does app development take?",
      answer: "It depends on scope. A lean MVP moves much faster than a feature-rich enterprise platform. We confirm a realistic, milestones-based schedule during our discovery call before any development begins."
    }
  ];

  const technologies = [
    "React Native",
    "iOS (Swift)",
    "Android (Kotlin)",
    "Next.js",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "GraphQL",
    "TailwindCSS",
    "Figma"
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
                    "name": "Services",
                    "item": "https://www.tecwrites.com/services"
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "App Development",
                    "item": "https://www.tecwrites.com/services/app"
                  }
                ]
              },
              {
                "@type": "Service",
                "name": "Mobile App Development Services",
                "serviceType": "Mobile app development",
                "provider": {
                  "@type": "Organization",
                  "name": "TecWrites",
                  "url": "https://www.tecwrites.com"
                },
                "areaServed": "US",
                "description": "Custom mobile app development services in the USA. iOS and Android apps, backend servers, and APIs engineered from idea to App Store."
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
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-primary-fixed to-surface-container-lowest rounded-full shadow-[30px_30px_50px_rgba(0,0,0,0.05)] opacity-30 -z-10 mix-blend-multiply blur-[80px]"></div>
          <p className="font-label-caps text-label-caps text-primary tracking-widest uppercase mb-4 opacity-80">
            ENGINEERING &amp; PRODUCT BUILDS
          </p>
          <h1 className="font-headline-xl text-headline-xl text-on-surface mb-6 mx-auto max-w-4xl leading-tight text-balance">
            Mobile App Development Services in the USA, Built From Idea to App Store
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-3xl mx-auto text-lg leading-relaxed mb-4">
            Most app ideas do not fail because the idea was weak. They fail because the build stalled, the backend could not keep up, or the app reached the store with no plan for being found. TecWrites provides mobile app development services USA founders and businesses can rely on from the first sketch to the store launch: cross-platform iOS and Android apps, the backend servers behind them, and the APIs that connect everything together.
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto text-base">
            Based in Lake St. Louis, Missouri, our studio pairs high-performance engineering with refined design, so your app works reliably and feels exceptional to use.
          </p>
        </header>

        {/* What Our Services Include Section */}
        <section className="mb-24 max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-label-caps text-label-caps text-primary uppercase tracking-wider mb-2">FULL-PRODUCT SCOPE</p>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">
              What Our Mobile App Development Services Include
            </h2>
            <p className="text-on-surface-variant font-body-md max-w-2xl mx-auto mt-3">
              A successful app is more than screens and code. As a custom app development company, we cover the whole product so nothing gets lost between design, development, and launch.
            </p>
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
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Businesses Choose TecWrites */}
        <section className="mb-24 max-w-5xl mx-auto">
          <div className="bg-surface-container-lowest rounded-3xl p-8 md:p-12 shadow-clay border border-white/60">
            <div className="text-center mb-12">
              <p className="font-label-caps text-label-caps text-primary uppercase tracking-wider mb-2">THE TECWRITES ADVANTAGE</p>
              <h2 className="font-headline-lg text-headline-lg text-on-surface">
                Why Businesses Choose TecWrites for Custom App Development
              </h2>
              <p className="text-on-surface-variant font-body-md max-w-2xl mx-auto mt-2">
                Plenty of agencies can build an app. Fewer can take it all the way to a store listing that people actually find.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {whyChoosePoints.map((point, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="material-symbols-outlined text-primary text-[20px]">star</span>
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

        {/* App Development Process */}
        <section className="mb-24 max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="font-label-caps text-label-caps text-primary uppercase tracking-wider mb-2">STRUCTURED EXECUTION</p>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">
              Our App Development Process
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

        {/* Who Our App Development Services Are For */}
        <section className="mb-24 max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-label-caps text-label-caps text-primary uppercase tracking-wider mb-2">TARGET AUDIENCE</p>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">
              Who Our App Development Services Are For
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {targetAudience.map((item, idx) => (
              <div key={idx} className="bg-surface rounded-2xl p-6 shadow-clay flex items-start gap-4">
                <span className="material-symbols-outlined text-primary text-[24px] mt-1">check</span>
                <div>
                  <h3 className="font-headline-sm text-lg font-bold text-on-surface mb-1">{item.title}</h3>
                  <p className="text-on-surface-variant font-body-md text-sm">{item.desc}</p>
                  {item.link && (
                    <Link href={item.link} className="text-primary text-xs uppercase font-bold tracking-wider inline-flex items-center gap-1 mt-2 hover:underline">
                      Explore Service <span className="material-symbols-outlined text-[12px]">arrow_forward</span>
                    </Link>
                  )}
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
              Frequently Asked Questions About App Development
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
            Get Started with Mobile App Development Services in the USA
          </h2>
          <p className="text-on-surface-variant font-body-md text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Your app deserves more than working code. It deserves a clear strategy, a polished experience, and a launch plan. Tell us what you want to build, and we will map the path from idea to App Store.
          </p>

          <p className="font-medium text-on-surface text-xl mb-6">Ready to turn your app idea into a live product?</p>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-10 py-5 rounded-full bg-primary text-on-primary font-label-caps text-label-caps tracking-widest uppercase shadow-clay hover:scale-105 active:scale-95 transition-all duration-300 gap-3"
          >
            Start Your App Project
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </Link>

          <div className="mt-10 pt-8 border-t border-outline-variant/30 flex flex-wrap justify-center items-center gap-3 text-xs font-label-caps text-on-surface-variant uppercase">
            <span>Related Services:</span>
            <Link href="/services/ai" className="text-primary hover:underline">AI-Integrated Products</Link>
            <span>•</span>
            <Link href="/services/devops" className="text-primary hover:underline">Cloud &amp; DevOps</Link>
            <span>•</span>
            <Link href="/services/branding" className="text-primary hover:underline">Branding &amp; Animation</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
