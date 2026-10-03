import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import SchemaMarkup from "@/components/SchemaMarkup";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Game Development Services: WebGL, 3D & Mobile",
  description: "Game development services for 2D and 3D browser games, WebGL worlds, mobile games, and gamified ed-tech apps built for engagement. Start your project today.",
  keywords: [
    "Game Development Services",
    "WebGL game development",
    "Three.js development services",
    "3D browser game development",
    "2D game development",
    "mobile game development company",
    "gamified learning apps",
    "ed-tech game development",
    "branded mini-games for marketing"
  ],
  alternates: {
    canonical: "https://www.tecwrites.com/services/game"
  },
  openGraph: {
    title: "Game Development Services: WebGL, 3D & Mobile | TecWrites",
    description: "Game development services for 2D and 3D browser games, WebGL worlds, mobile games, and gamified ed-tech apps built for engagement. Start your project today.",
    url: "https://www.tecwrites.com/services/game",
    type: "website",
    images: [
      {
        url: "/services/Interactive Games.png",
        width: 1200,
        height: 630,
        alt: "Game Development Services by TecWrites",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Game Development Services: WebGL, 3D & Mobile | TecWrites",
    description: "Game development services for 2D and 3D browser games, WebGL worlds, mobile games, and gamified ed-tech apps.",
    images: ["/services/Interactive Games.png"],
  }
};

export default function GameServicesPage() {
  const serviceIncludes = [
    {
      title: "2D & 3D Browser Game Development",
      description: "Instant-play games that run directly inside the browser with zero downloads or plugins, ideal for maximum reach, viral sharing, and frictionless onboarding."
    },
    {
      title: "WebGL & Three.js Development",
      description: "Hardware-accelerated 3D worlds, interactive web experiences, and virtual product showcases that run at buttery-smooth 60+ FPS on modern mobile and desktop browsers."
    },
    {
      title: "Mobile Game Development",
      description: "Custom games specifically designed for responsive touch physics, short gameplay sessions, and optimal performance across iOS and Android devices."
    },
    {
      title: "Gamified Ed-Tech Learning Applications",
      description: "Transform complex educational curricula, quizzes, and skill practices into rewarding, addictive experiences learners genuinely enjoy completing."
    },
    {
      title: "Branded Mini-Games for Marketing",
      description: "Interactive marketing campaigns and playable ad modules that hold audience attention up to 10x longer than static ads or standard landing pages."
    },
    {
      title: "Game Art, UI & Animation",
      description: "Original character design, immersive environment illustrations, tactile game UI, and fluid animations crafted directly by our branding and animation team.",
      link: "/services/branding"
    },
    {
      title: "Game Backends & Multiplayer Infrastructure",
      description: "Realtime matchmaking, secure player accounts, progress syncing, and competitive global leaderboards engineered with our app development engineers.",
      link: "/services/app"
    }
  ];

  const whyChoosePoints = [
    {
      title: "Engagement-First Design",
      description: "We engineer around core psychological gameplay loops that keep players returning, not just superficial visual tricks."
    },
    {
      title: "Performance You Can Feel",
      description: "Smooth frame rates (60+ FPS), minimal bundle sizes, and rapid load times are planned from day one, especially for WebGL and 3D canvas rendering."
    },
    {
      title: "Art & Code in One Studio",
      description: "A rare in-house Unity/WebGL developer + animation director combo means zero friction between visual artistry and technical performance."
    },
    {
      title: "Built for Growth",
      description: "Games are proving to be the highest-margin growth lever for marketing and education. Read our deep-dive on modern game development.",
      linkText: "Read: Game Dev as a Growth Lever",
      href: "/blog/game-development-growth-lever-edtech-marketing"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Alignment",
      description: "We define the target audience, core mechanics loop, monetization/retention goals, and success benchmarks."
    },
    {
      step: "02",
      title: "Strategy & Architecture",
      description: "We architect the game mechanics, tech stack (WebGL, Unity, Three.js), progression tiers, and reward structures."
    },
    {
      step: "03",
      title: "Creation & Engineering",
      description: "We produce playable alpha builds early, iterating rapidly with rigorous device playtesting and animation tuning."
    },
    {
      step: "04",
      title: "Launch & Growth",
      description: "We deploy to the web or mobile stores, track user engagement metrics, and deploy live-ops updates and level expansions."
    }
  ];

  const targetAudience = [
    {
      title: "Ed-Tech Companies & Educators",
      desc: "Transform traditional learning exercises into interactive challenges where students learn through play and instant feedback loops."
    },
    {
      title: "Brands & Marketers",
      desc: "Launch interactive playable campaigns and branded minigames that generate massive organic buzz and high engagement."
    },
    {
      title: "Startups & Indie Founders",
      desc: "Prototype and validate game concepts quickly with a lightweight, high-performance web MVP before scaling."
    },
    {
      title: "Product Teams",
      desc: "Integrate gamification features, badges, streak loops, and interactive rewards directly into existing apps."
    }
  ];

  const faqs = [
    {
      question: "What is WebGL game development?",
      answer: "WebGL allows 2D and 3D games and interactive environments to render directly in standard web browsers using the device's graphics hardware (GPU). Players enjoy rich, console-quality graphics with zero app downloads or third-party plugins."
    },
    {
      question: "Can you build educational and gamified learning apps?",
      answer: "Yes. Gamified ed-tech is one of our flagship specializations. We build interactive lessons, quizzes, badge systems, spaced repetition games, and student progress tracking dashboards."
    },
    {
      question: "Do you handle game art and animation?",
      answer: "Yes. Our in-house design team produces original characters, 3D models, vector environments, user interfaces, particle effects, and kinetic motion."
    },
    {
      question: "Do you build both browser and mobile games?",
      answer: "Yes. We build responsive 2D/3D browser games (instant-play) and native mobile games for iOS and Android, and can start with a web MVP and port to mobile stores."
    },
    {
      question: "How much does game development cost?",
      answer: "Cost varies based on scope, 2D vs. 3D art fidelity, platform targets, physics complexity, and multiplayer backend needs. Share your concept and we will provide a detailed scope and fixed quote."
    }
  ];

  const technologies = [
    "WebGL",
    "Three.js",
    "Unity",
    "C#",
    "Blender (3D Modeling)",
    "Pixi.js",
    "WebXR",
    "GreenSock (GSAP)",
    "Howler.js Audio",
    "TypeScript"
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
                    "name": "Game Development",
                    "item": "https://www.tecwrites.com/services/game"
                  }
                ]
              },
              {
                "@type": "Service",
                "name": "Game Development Services",
                "serviceType": "Game Development",
                "provider": {
                  "@type": "Organization",
                  "name": "TecWrites",
                  "url": "https://www.tecwrites.com"
                },
                "areaServed": "US",
                "description": "Game development services for 2D and 3D browser games, WebGL worlds, mobile games, and gamified ed-tech apps built for engagement."
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
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-rose-200 to-surface-container-lowest rounded-full shadow-[30px_30px_50px_rgba(0,0,0,0.05)] opacity-30 -z-10 mix-blend-multiply blur-[80px]"></div>
          <p className="font-label-caps text-label-caps text-[#9E003A] tracking-widest uppercase mb-4 opacity-80">
            INTERACTIVE WORLDS &amp; GAMEPLAY
          </p>
          <h1 className="font-headline-xl text-headline-xl text-on-surface mb-6 mx-auto max-w-4xl leading-tight text-balance">
            Game Development Services for Browser, Mobile, and Ed-Tech
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-3xl mx-auto text-lg leading-relaxed mb-4">
            A great game does something most software cannot: it makes people want to come back. TecWrites provides game development services for brands, educators, and founders who want that kind of engagement, from addictive 2D and 3D browser games to hardware-accelerated WebGL worlds and gamified learning applications.
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto text-base">
            Our team combines game engineering, art, and animation in one studio, so the experience feels cohesive from the first load screen to the final level.
          </p>
        </header>

        {/* What Our Services Include */}
        <section className="mb-24 max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-label-caps text-label-caps text-[#9E003A] uppercase tracking-wider mb-2">FULL CAPABILITIES</p>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">
              What Our Game Development Services Include
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
                    <span className="material-symbols-outlined text-[#9E003A] text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                      check_circle
                    </span>
                    <h3 className="font-headline-sm text-xl font-bold text-on-surface">{item.title}</h3>
                  </div>
                  <p className="text-on-surface-variant font-body-md leading-relaxed">{item.description}</p>
                  {item.link && (
                    <Link href={item.link} className="text-[#9E003A] text-xs uppercase font-bold tracking-wider inline-flex items-center gap-1 mt-3 hover:underline">
                      Learn More <span className="material-symbols-outlined text-[12px]">arrow_forward</span>
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Browser Games vs Mobile Games */}
        <section className="mb-24 max-w-5xl mx-auto">
          <div className="bg-surface-container rounded-3xl p-8 md:p-12 shadow-clay border border-white/60">
            <div className="max-w-3xl mx-auto">
              <p className="font-label-caps text-label-caps text-[#9E003A] uppercase tracking-wider mb-2 text-center">PLATFORM STRATEGY</p>
              <h2 className="font-headline-lg text-headline-lg text-on-surface text-center mb-6">
                Browser Games vs Mobile Games: Which Is Right for You?
              </h2>
              <p className="text-on-surface-variant font-body-md text-lg leading-relaxed mb-6">
                <strong>Browser games</strong> reach people instantly. There is nothing to install, links are frictionless to share via social media or messaging, and they work exceptionally well for viral campaigns, educational portals, and quick micro-experiences.
              </p>
              <p className="text-on-surface-variant font-body-md text-lg leading-relaxed">
                <strong>Mobile games</strong> suit products that require deeper long-term retention, push notifications, offline play, and a permanent place on the user’s home screen. Many of our clients begin with a lightweight browser game to validate mechanics before expanding into native App Store builds.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose TecWrites for Game Dev */}
        <section className="mb-24 max-w-5xl mx-auto">
          <div className="bg-surface-container-lowest rounded-3xl p-8 md:p-12 shadow-clay border border-white/60">
            <div className="text-center mb-12">
              <p className="font-label-caps text-label-caps text-[#9E003A] uppercase tracking-wider mb-2">THE TECWRITES ADVANTAGE</p>
              <h2 className="font-headline-lg text-headline-lg text-on-surface">
                Why Choose TecWrites for Game Development
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {whyChoosePoints.map((point, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-rose-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="material-symbols-outlined text-[#9E003A] text-[20px]">sports_esports</span>
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-lg font-bold text-on-surface mb-2">{point.title}</h3>
                    <p className="text-on-surface-variant font-body-md text-sm leading-relaxed mb-2">{point.description}</p>
                    {point.href && (
                      <Link href={point.href} className="text-[#9E003A] font-semibold text-sm inline-flex items-center gap-1 hover:underline">
                        {point.linkText} <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Game Process */}
        <section className="mb-24 max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="font-label-caps text-label-caps text-[#9E003A] uppercase tracking-wider mb-2">DEVELOPMENT TIMELINE</p>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">
              Our Game Development Process
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, idx) => (
              <div key={idx} className="bg-surface rounded-2xl p-6 shadow-clay relative flex flex-col justify-between">
                <div>
                  <span className="text-3xl font-black text-[#9E003A]/20 font-headline-xl block mb-3">{step.step}</span>
                  <h3 className="font-headline-sm text-lg font-bold text-on-surface mb-2">{step.title}</h3>
                  <p className="text-on-surface-variant font-body-md text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Who We Build Games For */}
        <section className="mb-24 max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-label-caps text-label-caps text-[#9E003A] uppercase tracking-wider mb-2">TARGET AUDIENCE</p>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">
              Who We Build Games For
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {targetAudience.map((item, idx) => (
              <div key={idx} className="bg-surface rounded-2xl p-6 shadow-clay flex items-start gap-4">
                <span className="material-symbols-outlined text-[#9E003A] text-[24px] mt-1">check</span>
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
            <p className="font-label-caps text-label-caps text-[#9E003A] uppercase tracking-wider mb-2">QUESTIONS &amp; ANSWERS</p>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">
              Frequently Asked Questions About Game Development
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

        {/* Start Your Game Project / CTA */}
        <section className="max-w-4xl mx-auto text-center bg-surface-container-lowest rounded-3xl p-10 md:p-16 shadow-clay border border-white/60">
          <p className="font-label-caps text-label-caps text-[#9E003A] uppercase tracking-widest mb-3">GET STARTED</p>
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">
            Start Your Game Development Project
          </h2>
          <p className="text-on-surface-variant font-body-md text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Whether you are building a learning game, a branded experience, or your own original idea, we will help you turn it into something people enjoy playing.
          </p>

          <p className="font-medium text-on-surface text-xl mb-6">Ready to build a game people keep coming back to?</p>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-10 py-5 rounded-full bg-primary text-on-primary font-label-caps text-label-caps tracking-widest uppercase shadow-clay hover:scale-105 active:scale-95 transition-all duration-300 gap-3"
          >
            Start Your Game Project
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </Link>

          <div className="mt-10 pt-8 border-t border-outline-variant/30 flex flex-wrap justify-center items-center gap-3 text-xs font-label-caps text-on-surface-variant uppercase">
            <span>Related Services:</span>
            <Link href="/services/branding" className="text-primary hover:underline">Branding &amp; Animation</Link>
            <span>•</span>
            <Link href="/services/web-design" className="text-primary hover:underline">Web Design &amp; Development</Link>
            <span>•</span>
            <Link href="/services/app" className="text-primary hover:underline">End-to-End App Dev</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
