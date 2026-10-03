import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SchemaMarkup from "@/components/SchemaMarkup";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About the Studio | Craft & Philosophy",
  description: "Learn about TecWrites: our story, methodology, and philosophy of pairing high-performance software engineering with tactile design and editorial publishing.",
  keywords: [
    "About TecWrites",
    "creative technology studio",
    "software engineering philosophy",
    "claymorphic design agency",
    "digital laboratory"
  ],
  alternates: {
    canonical: "https://www.tecwrites.com/studio",
  },
  openGraph: {
    title: "About the Studio | Craft & Philosophy | TecWrites",
    description: "Learn about TecWrites: our story, methodology, and philosophy of pairing high-performance engineering with refined design.",
    url: "https://www.tecwrites.com/studio",
    type: "website",
    images: [
      {
        url: "/tecwrites-og-banner.png",
        width: 1200,
        height: 630,
        alt: "TecWrites Studio Craft & Methodology",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About the Studio | Craft & Philosophy | TecWrites",
    description: "Learn about TecWrites: our story, methodology, and philosophy of pairing high-performance engineering with refined design.",
    images: ["/tecwrites-og-banner.png"],
  },
};

export default function StudioPage() {
  return (
    <>
      <SchemaMarkup
        type="AboutPage"
        data={{
          name: "About TecWrites Studio",
          description: "TecWrites is a digital laboratory specializing in claymorphic design, full-stack software engineering, and publishing.",
          url: "https://www.tecwrites.com/studio",
          mainEntity: {
            "@type": "Organization",
            name: "TecWrites",
            url: "https://www.tecwrites.com"
          }
        }}
      />
      <Header />
      <main className="relative pt-32 pb-24">
        {/* Ambient Background Blobs */}
        <div className="absolute filter blur-[80px] opacity-50 -z-10 rounded-full bg-primary-fixed-dim w-96 h-96 top-0 left-[-10%]"></div>
        <div className="absolute filter blur-[80px] opacity-30 -z-10 rounded-full bg-secondary-container w-[500px] h-[500px] top-[20%] right-[-15%]"></div>
        
        {/* Section 1: Header */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center py-16 md:py-24 relative z-10">
          <span className="text-label-caps font-label-caps text-primary tracking-widest uppercase mb-6 block">ABOUT THE STUDIO</span>
          <h1 className="text-headline-lg-mobile md:text-headline-xl font-headline-lg-mobile md:font-headline-xl text-on-surface mb-8 max-w-4xl mx-auto leading-tight">
            About Our Craft &amp; Methodology
          </h1>
          <p className="text-body-md font-body-md text-on-surface-variant max-w-2xl mx-auto text-lg">
            We are a digital studio specializing in bespoke web design, custom animation, mobile applications, and human-centered AI systems.
          </p>
        </section>
        
        {/* Section 2: Studio Story */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-16">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 relative">
              {/* Soft Clay Masked Image */}
              <div className="bg-surface-container-lowest shadow-[16px_16px_32px_rgba(175,180,200,0.25),-16px_-16px_32px_rgba(255,255,255,0.9),inset_2px_2px_4px_rgba(255,255,255,0.8),inset_-2px_-2px_6px_rgba(175,180,200,0.15)] border border-white/60 p-4 aspect-square max-w-md mx-auto rounded-[3rem]">
                <img
                  className="w-full h-full object-cover rounded-[40%_60%_70%_30%/40%_50%_60%_50%]"
                  src="/tecwrites-og-banner.png"
                  alt="TecWrites Studio Design and Craft"
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg-mobile md:font-headline-lg mb-6 text-on-surface">Molded from vision, <br/>Est. 2021</h2>
              <p className="text-body-md font-body-md text-on-surface-variant mb-6">
                TecWrites began as an experiment in tactile digital environments. We recognized that modern software had become cold and overly flat. Our mission was to reintroduce volume, depth, and a sense of physical comfort into digital interfaces.
              </p>
              <p className="text-body-md font-body-md text-on-surface-variant">
                Today, we partner with forward-thinking creators and tech innovators worldwide to build products that don&apos;t just function reliably, but feel inherently intuitive to use.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Values */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-24 relative">
          <div className="absolute filter blur-[80px] opacity-20 -z-10 rounded-full bg-tertiary-fixed w-80 h-80 bottom-0 left-[20%]"></div>
          <div className="text-center mb-16">
            <h2 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg-mobile md:font-headline-lg text-on-surface">The Principles of Our Craft</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {/* Value 1 */}
            <div className="clay-card flex flex-col items-center text-center p-8">
              <div className="bg-primary-fixed shadow-[4px_4px_10px_rgba(175,180,200,0.3),-4px_-4px_10px_rgba(255,255,255,1),inset_2px_2px_3px_rgba(255,255,255,0.6),inset_-2px_-2px_4px_rgba(0,0,0,0.05)] w-16 h-16 rounded-full flex items-center justify-center mb-6 text-primary">
                <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>precision_manufacturing</span>
              </div>
              <h3 className="text-body-md font-body-md font-bold text-on-surface mb-3">Precision Engineering</h3>
              <p className="text-body-md font-body-md text-on-surface-variant text-sm">Every curve and component is engineered for optimal performance and visual depth.</p>
            </div>
            {/* Value 2 */}
            <div className="clay-card flex flex-col items-center text-center p-8">
              <div className="bg-primary-fixed shadow-[4px_4px_10px_rgba(175,180,200,0.3),-4px_-4px_10px_rgba(255,255,255,1),inset_2px_2px_3px_rgba(255,255,255,0.6),inset_-2px_-2px_4px_rgba(0,0,0,0.05)] w-16 h-16 rounded-full flex items-center justify-center mb-6 text-primary">
                <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>edit_document</span>
              </div>
              <h3 className="text-body-md font-body-md font-bold text-on-surface mb-3">Editorial Rigor</h3>
              <p className="text-body-md font-body-md text-on-surface-variant text-sm">Content, structure, and design are treated as a singular, cohesive narrative experience.</p>
            </div>
            {/* Value 3 */}
            <div className="clay-card flex flex-col items-center text-center p-8">
              <div className="bg-primary-fixed shadow-[4px_4px_10px_rgba(175,180,200,0.3),-4px_-4px_10px_rgba(255,255,255,1),inset_2px_2px_3px_rgba(255,255,255,0.6),inset_-2px_-2px_4px_rgba(0,0,0,0.05)] w-16 h-16 rounded-full flex items-center justify-center mb-6 text-primary">
                <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>psychology</span>
              </div>
              <h3 className="text-body-md font-body-md font-bold text-on-surface mb-3">Human-Centered AI</h3>
              <p className="text-body-md font-body-md text-on-surface-variant text-sm">Deploying intelligence not to replace, but to amplify human creativity and workflow clarity.</p>
            </div>
            {/* Value 4 */}
            <div className="clay-card flex flex-col items-center text-center p-8">
              <div className="bg-primary-fixed shadow-[4px_4px_10px_rgba(175,180,200,0.3),-4px_-4px_10px_rgba(255,255,255,1),inset_2px_2px_3px_rgba(255,255,255,0.6),inset_-2px_-2px_4px_rgba(0,0,0,0.05)] w-16 h-16 rounded-full flex items-center justify-center mb-6 text-primary">
                <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>public</span>
              </div>
              <h3 className="text-body-md font-body-md font-bold text-on-surface mb-3">Global Craftsmanship</h3>
              <p className="text-body-md font-body-md text-on-surface-variant text-sm">Drawing inspiration and expertise to build digital experiences across borders.</p>
            </div>
          </div>
        </section>

        {/* Section 4: Methodology Recap */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-24">
          <h2 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg-mobile md:font-headline-lg text-on-surface text-center mb-20">The Molding Process</h2>
          <div className="relative">
            {/* Track Line */}
            <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-4 shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1),inset_-4px_-4px_8px_rgba(255,255,255,0.8)] rounded-full -translate-y-1/2 bg-surface-container-highest z-0"></div>
            <div className="grid md:grid-cols-4 gap-12 relative z-10">
              <div className="flex flex-col items-center text-center">
                <div className="clay-card p-0 w-20 h-20 rounded-full flex items-center justify-center mb-6 text-primary font-headline-lg text-xl font-bold border-4 border-surface-container-low">1</div>
                <h4 className="text-body-md font-body-md font-bold mb-2">Discovery</h4>
                <p className="text-body-md font-body-md text-sm text-on-surface-variant">Gathering requirements and understanding core project goals.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="clay-card p-0 w-20 h-20 rounded-full flex items-center justify-center mb-6 text-primary font-headline-lg text-xl font-bold border-4 border-surface-container-low">2</div>
                <h4 className="text-body-md font-body-md font-bold mb-2">Strategy</h4>
                <p className="text-body-md font-body-md text-sm text-on-surface-variant">Creating the architecture blueprint for performance and scale.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="clay-card p-0 w-20 h-20 rounded-full flex items-center justify-center mb-6 text-primary font-headline-lg text-xl font-bold border-4 border-surface-container-low">3</div>
                <h4 className="text-body-md font-body-md font-bold mb-2">Creation</h4>
                <p className="text-body-md font-body-md text-sm text-on-surface-variant">Engineering the visual, motion, and technical codebase as one.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="clay-card p-0 w-20 h-20 rounded-full flex items-center justify-center mb-6 text-primary font-headline-lg text-xl font-bold border-4 border-surface-container-low">4</div>
                <h4 className="text-body-md font-body-md font-bold mb-2">Launch</h4>
                <p className="text-body-md font-body-md text-sm text-on-surface-variant">Deploying to production CDNs, testing, and continuous refinement.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Studio Disciplines */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-24 relative">
          <div className="text-center mb-16">
            <h2 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg-mobile md:font-headline-lg text-on-surface">Integrated Disciplines</h2>
            <p className="text-body-md font-body-md text-on-surface-variant max-w-xl mx-auto mt-4">Designers, engineers, and publishing specialists collaborating under one roof.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="clay-card p-8 rounded-2xl flex flex-col gap-4 text-center items-center">
              <div className="w-16 h-16 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center shadow-clay-sm">
                <span className="material-symbols-outlined text-3xl">code</span>
              </div>
              <h3 className="font-headline-sm text-lg font-bold text-on-surface">Software &amp; Web Engineering</h3>
              <p className="text-body-md font-body-md text-sm text-on-surface-variant">Full-stack React, Next.js, React Native, and cloud automation built for speed, security, and maintainability.</p>
            </div>
            <div className="clay-card p-8 rounded-2xl flex flex-col gap-4 text-center items-center">
              <div className="w-16 h-16 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center shadow-clay-sm">
                <span className="material-symbols-outlined text-3xl">palette</span>
              </div>
              <h3 className="font-headline-sm text-lg font-bold text-on-surface">Interface &amp; Motion Design</h3>
              <p className="text-body-md font-body-md text-sm text-on-surface-variant">Tactile micro-interactions, custom 3D WebGL scenes, and responsive UI systems that guide user attention.</p>
            </div>
            <div className="clay-card p-8 rounded-2xl flex flex-col gap-4 text-center items-center">
              <div className="w-16 h-16 rounded-full bg-tertiary-container text-on-tertiary-container flex items-center justify-center shadow-clay-sm">
                <span className="material-symbols-outlined text-3xl">auto_stories</span>
              </div>
              <h3 className="font-headline-sm text-lg font-bold text-on-surface">Publishing &amp; Distribution</h3>
              <p className="text-body-md font-body-md text-sm text-on-surface-variant">End-to-end App Store compliance, ASO keyword strategy, and professional digital book distribution.</p>
            </div>
          </div>
        </section>

        {/* Section 6: Stats */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-16">
          <div className="flex flex-wrap justify-center gap-6">
            <div className="clay-card px-8 py-4 rounded-full flex items-center gap-4">
              <span className="text-headline-lg-mobile font-headline-lg-mobile text-primary">150+</span>
              <span className="text-label-caps font-label-caps text-on-surface-variant">Projects Delivered</span>
            </div>
            <div className="clay-card px-8 py-4 rounded-full flex items-center gap-4">
              <span className="text-headline-lg-mobile font-headline-lg-mobile text-primary">40+</span>
              <span className="text-label-caps font-label-caps text-on-surface-variant">Books Published</span>
            </div>
            <div className="clay-card px-8 py-4 rounded-full flex items-center gap-4">
              <span className="text-headline-lg-mobile font-headline-lg-mobile text-primary">5+</span>
              <span className="text-label-caps font-label-caps text-on-surface-variant">Years Experience</span>
            </div>
            <div className="clay-card px-8 py-4 rounded-full flex items-center gap-4">
              <span className="text-headline-lg-mobile font-headline-lg-mobile text-primary">25+</span>
              <span className="text-label-caps font-label-caps text-on-surface-variant">Active Partnerships</span>
            </div>
          </div>
        </section>

        {/* Section 7: CTA */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-24">
          <div className="clay-card p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/5 opacity-50 shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1),inset_-4px_-4px_8px_rgba(255,255,255,0.8)] pointer-events-none rounded-[3rem]"></div>
            <div className="relative z-10">
              <h2 className="text-headline-lg-mobile md:text-headline-xl font-headline-lg-mobile md:font-headline-xl text-on-surface mb-6">Ready to shape something new?</h2>
              <p className="text-body-md font-body-md text-on-surface-variant max-w-xl mx-auto mb-10">
                Let's mold your next big idea into a tactile digital reality. Our studio is currently accepting new partnerships.
              </p>
              <a className="inline-flex items-center justify-center px-10 py-4 clay-btn text-label-caps font-label-caps tracking-wide text-lg" href="/contact">
                Contact The Studio
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

