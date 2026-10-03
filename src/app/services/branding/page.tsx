import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import SchemaMarkup from "@/components/SchemaMarkup";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Branding & Animation Services: Logos, Motion, Video",
  description: "Branding and animation services: logo design, illustration, explainer videos, motion graphics, and app store assets designed to drop straight into your code. Request a quote.",
  keywords: [
    "Branding and Animation Services",
    "logo design services",
    "brand identity design",
    "explainer video animation",
    "motion graphics design",
    "animated logo design",
    "illustration services",
    "app store asset design",
    "website animation"
  ],
  alternates: {
    canonical: "https://www.tecwrites.com/services/branding"
  },
  openGraph: {
    title: "Branding & Animation Services: Logos, Motion, Video | TecWrites",
    description: "Branding and animation services: logo design, illustration, explainer videos, motion graphics, and app store assets designed to drop straight into your code.",
    url: "https://www.tecwrites.com/services/branding",
    type: "website",
    images: [
      {
        url: "/services/Visual Identity (Branding, Animation & Design).png",
        width: 1200,
        height: 630,
        alt: "Branding and Animation Services by TecWrites",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Branding & Animation Services: Logos, Motion, Video | TecWrites",
    description: "Branding and animation services: logo design, illustration, explainer videos, motion graphics, and app store assets.",
    images: ["/services/Visual Identity (Branding, Animation & Design).png"],
  }
};

export default function BrandingServicesPage() {
  const serviceIncludes = [
    {
      title: "Logo Design & Brand Identity",
      description: "Distinctive logo marks, color systems, typography pairings, and comprehensive style rules that keep every brand touchpoint cohesive."
    },
    {
      title: "Visual Style Systems",
      description: "Reusable design foundations, UI component guidelines, and scalable vector kits for your website, mobile app, and marketing collateral."
    },
    {
      title: "Illustration Services",
      description: "Bespoke vector illustrations and icon libraries that give your product an instantly recognizable, premium visual personality."
    },
    {
      title: "Explainer Video Animation",
      description: "Short, high-converting 2D kinetic videos that explain complex software, workflows, or services faster and more persuasively than blocks of text."
    },
    {
      title: "Motion Graphics & Animated Logos",
      description: "Dynamic visual movement and responsive logo animations that add personality, energy, and polish to hero sections and presentations."
    },
    {
      title: "Website & UI Animation",
      description: "Purposeful motion engineered directly into modern web interfaces.",
      links: [
        { text: "Web Design & Development", href: "/services/web-design" },
        { text: "Website Animation Services Guide", href: "/blog/website-animation-services-usa" }
      ]
    },
    {
      title: "App Store Assets",
      description: "Eye-catching app icons, promotional banners, and screenshot mockups designed in tandem with our publishing specialists.",
      links: [
        { text: "App Store Publishing & ASO", href: "/services/publishing" }
      ]
    }
  ];

  const whyChoosePoints = [
    {
      title: "Design That Ships",
      description: "Assets are created specifically to drop directly into production codebases (SVG, Lottie, WebGL), eliminating the usual gap between design files and the live site."
    },
    {
      title: "One Consistent System",
      description: "Logo, iconography, kinetic motion, and interface components follow the exact same visual guidelines, ensuring your brand feels unified everywhere."
    },
    {
      title: "Motion with Performance in Mind",
      description: "We utilize lightweight vector formats and hardware-accelerated CSS/Lottie techniques so animation enhances the user journey without slowing down page load times."
    },
    {
      title: "Strategy First",
      description: "We ground every design choice in your target demographic, competitive landscape, and business objectives so visuals perform as well as they look."
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Alignment",
      description: "We explore your brand positioning, core audience, competitors, and specific visual objectives."
    },
    {
      step: "02",
      title: "Strategy & Architecture",
      description: "We define the visual direction, moodboards, style systems, and identify where motion delivers the highest ROI."
    },
    {
      step: "03",
      title: "Creation & Engineering",
      description: "We design the identity marks, vector illustrations, and motion storyboards, producing production-ready code assets."
    },
    {
      step: "04",
      title: "Launch & Growth",
      description: "We roll out the brand across your web app, mobile stores, and marketing channels, continuously refining as your business scales."
    }
  ];

  const targetAudience = [
    {
      title: "New Businesses",
      desc: "Establish an unforgettable visual footprint with a complete brand identity, logo, typography, and website kit."
    },
    {
      title: "Growing Brands",
      desc: "Elevate your visual aesthetic when your legacy look no longer reflects the high quality of your evolving product."
    },
    {
      title: "App & Software Companies",
      desc: "Get high-converting App Store screenshots, icons, and kinetic explainer videos to boost download conversion rates."
    },
    {
      title: "Web Teams",
      desc: "Plan brand aesthetics and interactive micro-animations together from inception for a seamless digital launch."
    }
  ];

  const faqs = [
    {
      question: "What is included in brand identity design?",
      answer: "Typically an iconic logo mark, responsive variations, full color palette, typography hierarchy, and brand guidelines, plus custom vector icons, social templates, and illustrations depending on your scope."
    },
    {
      question: "What is explainer video animation?",
      answer: "An explainer video is a short, highly engaging animated video (usually 60–90 seconds) that explains your software, service, or value proposition visually. It is ideal for landing page hero sections, pitch decks, and ad campaigns."
    },
    {
      question: "Will animation slow down my website?",
      answer: "Not when built properly. We use lightweight vector formats (Lottie, SVG), CSS keyframes, lazy-loading, and performance auditing so motion enhances conversions without hurting Core Web Vitals or SEO."
    },
    {
      question: "Can you design app store icons and screenshots?",
      answer: "Yes. We design high-converting App Store Connect and Google Play promotional graphics, device mockups, and keyword-optimized screenshot layouts."
    },
    {
      question: "How much do branding and animation services cost?",
      answer: "Pricing depends on the number of brand deliverables, complexity of 2D/3D motion, and scope of video production. Contact us with your requirements for a clear, fixed quote."
    }
  ];

  const technologies = [
    "Figma",
    "Adobe Illustrator",
    "Adobe After Effects",
    "Lottie Animation",
    "Spline (3D Web Design)",
    "Blender (3D Assets)",
    "GreenSock (GSAP)",
    "Adobe Premiere Pro"
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
                    "name": "Branding & Animation",
                    "item": "https://www.tecwrites.com/services/branding"
                  }
                ]
              },
              {
                "@type": "Service",
                "name": "Branding and Animation Services",
                "serviceType": "Branding & Animation Design",
                "provider": {
                  "@type": "Organization",
                  "name": "TecWrites",
                  "url": "https://www.tecwrites.com"
                },
                "areaServed": "US",
                "description": "Branding and animation services: logo design, illustration, explainer videos, motion graphics, and app store assets designed to drop straight into your code."
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
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-amber-200 to-surface-container-lowest rounded-full shadow-[30px_30px_50px_rgba(0,0,0,0.05)] opacity-30 -z-10 mix-blend-multiply blur-[80px]"></div>
          <p className="font-label-caps text-label-caps text-[#B25E00] tracking-widest uppercase mb-4 opacity-80">
            VISUAL IDENTITY &amp; MOTION
          </p>
          <h1 className="font-headline-xl text-headline-xl text-on-surface mb-6 mx-auto max-w-4xl leading-tight text-balance">
            Branding and Animation Services That Bring Your Brand to Life
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-3xl mx-auto text-lg leading-relaxed mb-4">
            Customers form an opinion about your brand in seconds, and most of that opinion comes from how it looks and moves. TecWrites provides branding and animation services that give your business a cohesive identity: logo marks, visual styles, illustrations, app store assets, and premium explainer videos, all designed to feed directly into your codebase instead of living in a folder of disconnected files.
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto text-base">
            Because design and engineering share one studio, what we create is ready to be built, animated, and shipped.
          </p>
        </header>

        {/* What Our Services Include */}
        <section className="mb-24 max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-label-caps text-label-caps text-[#B25E00] uppercase tracking-wider mb-2">FULL CREATIVE SPECTRUM</p>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">
              What Our Branding and Animation Services Include
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
                    <span className="material-symbols-outlined text-[#B25E00] text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                      check_circle
                    </span>
                    <h3 className="font-headline-sm text-xl font-bold text-on-surface">{item.title}</h3>
                  </div>
                  <p className="text-on-surface-variant font-body-md leading-relaxed">{item.description}</p>
                  {item.links && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {item.links.map((link, lIdx) => (
                        <Link key={lIdx} href={link.href} className="text-[#B25E00] text-xs uppercase font-bold tracking-wider inline-flex items-center gap-1 hover:underline">
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

        {/* Motion Graphics vs Website Animation */}
        <section className="mb-24 max-w-5xl mx-auto">
          <div className="bg-surface-container rounded-3xl p-8 md:p-12 shadow-clay border border-white/60">
            <div className="max-w-3xl mx-auto">
              <p className="font-label-caps text-label-caps text-[#B25E00] uppercase tracking-wider mb-2 text-center">CREATIVE COMPARISON</p>
              <h2 className="font-headline-lg text-headline-lg text-on-surface text-center mb-6">
                Motion Graphics vs Website Animation
              </h2>
              <p className="text-on-surface-variant font-body-md text-lg leading-relaxed mb-6">
                The two often work together, but they serve distinct purposes. <strong>Motion graphics</strong> are standalone assets, such as a kinetic explainer video, brand commercial, or animated logo mark. <strong>Website animation</strong> is motion built directly into the web interface itself—reacting fluidly to scrolling, hovering, clicking, and page transitions.
              </p>
              <p className="text-on-surface-variant font-body-md text-lg leading-relaxed">
                We create both, and we ensure they share the exact same visual language and color physics so your brand feels seamless, deliberate, and memorable everywhere.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose TecWrites for Branding */}
        <section className="mb-24 max-w-5xl mx-auto">
          <div className="bg-surface-container-lowest rounded-3xl p-8 md:p-12 shadow-clay border border-white/60">
            <div className="text-center mb-12">
              <p className="font-label-caps text-label-caps text-[#B25E00] uppercase tracking-wider mb-2">THE TECWRITES ADVANTAGE</p>
              <h2 className="font-headline-lg text-headline-lg text-on-surface">
                Why Choose TecWrites for Branding and Animation
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {whyChoosePoints.map((point, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="material-symbols-outlined text-[#B25E00] text-[20px]">palette</span>
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-lg font-bold text-on-surface mb-2">{point.title}</h3>
                    <p className="text-on-surface-variant font-body-md text-sm leading-relaxed">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Branding Process */}
        <section className="mb-24 max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="font-label-caps text-label-caps text-[#B25E00] uppercase tracking-wider mb-2">CREATIVE TIMELINE</p>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">
              Our Branding Process
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, idx) => (
              <div key={idx} className="bg-surface rounded-2xl p-6 shadow-clay relative flex flex-col justify-between">
                <div>
                  <span className="text-3xl font-black text-[#B25E00]/20 font-headline-xl block mb-3">{step.step}</span>
                  <h3 className="font-headline-sm text-lg font-bold text-on-surface mb-2">{step.title}</h3>
                  <p className="text-on-surface-variant font-body-md text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Who Our Branding Services Are For */}
        <section className="mb-24 max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-label-caps text-label-caps text-[#B25E00] uppercase tracking-wider mb-2">TARGET AUDIENCE</p>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">
              Who Our Branding Services Are For
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {targetAudience.map((item, idx) => (
              <div key={idx} className="bg-surface rounded-2xl p-6 shadow-clay flex items-start gap-4">
                <span className="material-symbols-outlined text-[#B25E00] text-[24px] mt-1">check</span>
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
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-8">Technologies &amp; Tools We Use</h2>
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
            <p className="font-label-caps text-label-caps text-[#B25E00] uppercase tracking-wider mb-2">QUESTIONS &amp; ANSWERS</p>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">
              Frequently Asked Questions About Branding and Animation
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

        {/* Start Your Branding Project / CTA */}
        <section className="max-w-4xl mx-auto text-center bg-surface-container-lowest rounded-3xl p-10 md:p-16 shadow-clay border border-white/60">
          <p className="font-label-caps text-label-caps text-[#B25E00] uppercase tracking-widest mb-3">GET STARTED</p>
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">
            Start Your Branding and Animation Project
          </h2>
          <p className="text-on-surface-variant font-body-md text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            A strong brand is consistent, memorable, and ready to use everywhere your customers find you. Tell us about your business and we will design something that looks right and moves right.
          </p>

          <p className="font-medium text-on-surface text-xl mb-6">Ready to give your brand a look and a motion of its own?</p>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-10 py-5 rounded-full bg-primary text-on-primary font-label-caps text-label-caps tracking-widest uppercase shadow-clay hover:scale-105 active:scale-95 transition-all duration-300 gap-3"
          >
            Start Your Branding Project
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </Link>

          <div className="mt-10 pt-8 border-t border-outline-variant/30 flex flex-wrap justify-center items-center gap-3 text-xs font-label-caps text-on-surface-variant uppercase">
            <span>Related Services:</span>
            <Link href="/services/web-design" className="text-primary hover:underline">Web Design &amp; Development</Link>
            <span>•</span>
            <Link href="/services/game" className="text-primary hover:underline">Game Development</Link>
            <span>•</span>
            <Link href="/services/publishing" className="text-primary hover:underline">App Store Publishing &amp; ASO</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
