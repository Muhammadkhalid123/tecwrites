import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function CapabilitiesPage() {
  return (
    <>
      <Header />
      <main className="flex-grow pt-32 pb-24 relative z-10 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        {/* Header Section */}
        <header className="text-center mb-24 md:mb-32 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-primary-fixed to-surface-container-lowest rounded-[40%_60%_70%_30%/40%_50%_60%_50%] shadow-[30px_30px_50px_rgba(0,0,0,0.05),inset_5px_5px_10px_rgba(255,255,255,0.8),inset_-5px_-5px_10px_rgba(0,0,0,0.03)] opacity-40 -z-10 mix-blend-multiply animate-[morph_8s_ease-in-out_infinite_alternate]"></div>
          <p className="font-label-caps text-label-caps text-primary tracking-widest uppercase mb-4 opacity-80">OUR CAPABILITIES</p>
          <h1 className="font-headline-xl text-headline-xl text-on-surface mb-6 mx-auto max-w-3xl leading-tight text-balance">Services &amp; Pricing Tiers</h1>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto text-lg">
            Crafting digital experiences with soft precision. Explore our specialized services tailored for modern creators and tech-forward enterprises.
          </p>
        </header>

        {/* Detailed Blocks */}
        <section className="mb-32 space-y-24">
          {/* Block 1: AI & Automation */}
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
            <div className="w-full md:w-1/2 relative">
              <div className="w-full aspect-square bg-surface-container-lowest shadow-[20px_20px_40px_rgba(0,0,0,0.05),inset_2px_2px_4px_rgba(255,255,255,1),inset_-4px_-4px_8px_rgba(0,0,0,0.03)] rounded-lg p-8 flex items-center justify-center relative overflow-hidden group hover:scale-[1.02] transition-transform duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-fixed/20 to-transparent"></div>
                <div className="w-48 h-48 bg-primary-container rounded-full blur-3xl absolute top-10 -right-10 opacity-30 mix-blend-multiply"></div>
                <img
                  className="relative z-10 w-full h-full object-contain drop-shadow-xl"
                  src="/ai.png"
                  alt="AI & Automation"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-surface-container-lowest shadow-[inset_4px_4px_10px_rgba(0,0,0,0.05),inset_-4px_-4px_10px_rgba(255,255,255,1)] rounded-full font-label-caps text-label-caps text-primary uppercase">
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>smart_toy</span>
                Intelligence
              </span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface">AI &amp; Automation</h2>
              <p className="text-on-surface-variant text-lg">Streamline your workflows with bespoke AI integrations. We build intelligent systems that feel natural to use, hiding complexity behind a soft, approachable interface.</p>
              <ul className="space-y-4 pt-4">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary mt-1" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  <span>Custom LLM Integrations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary mt-1" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  <span>Automated Workflow Pipelines</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary mt-1" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  <span>Predictive Data Analysis</span>
                </li>
              </ul>
              <div className="pt-4">
                <Link href="/services/ai" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-surface-container text-on-surface font-label-caps text-label-caps hover:bg-primary hover:text-on-primary transition-colors duration-300 shadow-clay-sm">
                  View Full AI Services <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Block 2: Bespoke Web Design */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-24">
            <div className="w-full md:w-1/2 relative">
              <div className="w-full aspect-square bg-surface-container-lowest shadow-[20px_20px_40px_rgba(0,0,0,0.05),inset_2px_2px_4px_rgba(255,255,255,1),inset_-4px_-4px_8px_rgba(0,0,0,0.03)] rounded-lg p-8 flex items-center justify-center relative overflow-hidden group hover:scale-[1.02] transition-transform duration-500">
                <div className="absolute inset-0 bg-gradient-to-bl from-secondary-container/20 to-transparent"></div>
                <img
                  className="relative z-10 w-full h-full object-contain drop-shadow-xl"
                  src="/web.png"
                  alt="Web Design"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-surface-container-lowest shadow-[inset_4px_4px_10px_rgba(0,0,0,0.05),inset_-4px_-4px_10px_rgba(255,255,255,1)] rounded-full font-label-caps text-label-caps text-secondary uppercase">
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>palette</span>
                Design
              </span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface">Bespoke Web Design</h2>
              <p className="text-on-surface-variant text-lg">We engineer digital spaces that feel intuitive and alive. By blending cutting-edge aesthetics with robust performance, we create seamless web experiences that elevate your brand's presence.</p>
              <ul className="space-y-4 pt-4">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary mt-1" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  <span>Stunning Modern Interfaces</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary mt-1" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  <span>Performance-Optimized Architecture</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary mt-1" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  <span>Dynamic &amp; Engaging Interactions</span>
                </li>
              </ul>
              <div className="pt-4">
                <Link href="/services/web" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-surface-container text-on-surface font-label-caps text-label-caps hover:bg-secondary hover:text-on-secondary transition-colors duration-300 shadow-clay-sm">
                  View Full Web Services <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Block 3: Self-Publishing */}
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
            <div className="w-full md:w-1/2 relative">
              <div className="w-full aspect-square bg-surface-container-lowest shadow-[20px_20px_40px_rgba(0,0,0,0.05),inset_2px_2px_4px_rgba(255,255,255,1),inset_-4px_-4px_8px_rgba(0,0,0,0.03)] rounded-lg p-8 flex items-center justify-center relative overflow-hidden group hover:scale-[1.02] transition-transform duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-tertiary-fixed/20 to-transparent"></div>
                <div className="w-48 h-48 bg-tertiary-container rounded-full blur-3xl absolute top-10 -right-10 opacity-30 mix-blend-multiply"></div>
                <img
                  className="relative z-10 w-full h-full object-cover rounded-xl drop-shadow-xl"
                  src="/publishing.png"
                  alt="Self-Publishing"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-surface-container-lowest shadow-[inset_4px_4px_10px_rgba(0,0,0,0.05),inset_-4px_-4px_10px_rgba(255,255,255,1)] rounded-full font-label-caps text-label-caps text-tertiary uppercase">
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>auto_stories</span>
                Publishing
              </span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface">Self-Publishing Consulting</h2>
              <p className="text-on-surface-variant text-lg">We act as a strategic guide, project manager, and technical advisor for independent authors. Navigate the ecosystem while keeping 100% of your royalties and rights.</p>
              <ul className="space-y-4 pt-4">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-tertiary mt-1" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  <span>End-to-End Project Management</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-tertiary mt-1" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  <span>Cover &amp; Interior Design</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-tertiary mt-1" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  <span>Distribution &amp; Marketing</span>
                </li>
              </ul>
              <div className="pt-4">
                <Link href="/services/publishing" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-surface-container text-on-surface font-label-caps text-label-caps hover:bg-tertiary hover:text-on-tertiary transition-colors duration-300 shadow-clay-sm">
                  View Full Publishing Services <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Pricing Tiers</h2>
            <p className="text-on-surface-variant max-w-xl mx-auto">Transparent investments for premium digital craftsmanship.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8 items-center max-w-5xl mx-auto">
            {/* Tier 1 */}
            <div className="bg-surface-container-lowest shadow-[20px_20px_40px_rgba(0,0,0,0.05),inset_2px_2px_4px_rgba(255,255,255,1),inset_-4px_-4px_8px_rgba(0,0,0,0.03)] rounded-lg p-8 md:p-6 lg:p-10 flex flex-col h-full hover:translate-y-[-4px] transition-transform duration-300">
              <div className="mb-8">
                <span className="font-label-caps text-label-caps text-outline uppercase tracking-wider">Essential</span>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="font-headline-lg text-headline-lg">$2k</span>
                  <span className="text-on-surface-variant">/mo</span>
                </div>
                <p className="mt-4 text-sm text-on-surface-variant">For growing creators needing solid foundations.</p>
              </div>
              <div className="flex-grow space-y-4 mb-8">
                <div className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-sm">done</span> <span className="text-sm">Standard UI Kit</span></div>
                <div className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-sm">done</span> <span className="text-sm">Basic SEO Setup</span></div>
                <div className="flex items-center gap-3 text-outline"><span className="material-symbols-outlined text-sm">remove</span> <span className="text-sm">Custom Animations</span></div>
              </div>
              <Link href="/contact" className="w-full py-4 bg-surface-container-lowest text-primary shadow-[10px_10px_20px_rgba(0,0,0,0.05),inset_2px_2px_4px_rgba(255,255,255,1),inset_-2px_-2px_4px_rgba(0,0,0,0.03)] rounded-full font-label-caps text-label-caps uppercase hover:bg-surface-variant transition-all duration-200 inline-block text-center">Get Started</Link>
            </div>
            
            {/* Tier 2 (Elevated) */}
            <div className="bg-surface-container-lowest shadow-[30px_30px_50px_rgba(0,0,0,0.08),inset_2px_2px_4px_rgba(255,255,255,1),inset_-4px_-4px_8px_rgba(0,0,0,0.03)] rounded-[3rem] p-10 md:p-8 lg:p-12 flex flex-col h-full relative z-10 md:scale-105 border-2 border-primary/10 hover:-translate-y-1 transition-transform duration-300">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <span className="bg-primary text-on-primary px-4 py-1 rounded-full text-[10px] font-label-caps uppercase tracking-widest shadow-lg">Recommended</span>
              </div>
              <div className="mb-8">
                <span className="font-label-caps text-label-caps text-primary uppercase tracking-wider">Professional</span>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="font-headline-xl text-headline-xl text-primary">$5k</span>
                  <span className="text-on-surface-variant">/mo</span>
                </div>
                <p className="mt-4 text-sm text-on-surface-variant">Full claymorphic experience with bespoke assets.</p>
              </div>
              <div className="flex-grow space-y-4 mb-8">
                <div className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-sm">done</span> <span className="text-sm">Bespoke Clay UI</span></div>
                <div className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-sm">done</span> <span className="text-sm">Advanced Interactions</span></div>
                <div className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-sm">done</span> <span className="text-sm">Priority Support</span></div>
              </div>
              <Link href="/contact" className="w-full py-4 bg-primary text-on-primary shadow-[10px_10px_20px_rgba(0,27,181,0.2),inset_2px_2px_4px_rgba(255,255,255,0.3),inset_-2px_-2px_4px_rgba(0,0,0,0.2)] active:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.2),inset_-4px_-4px_8px_rgba(255,255,255,0.2)] rounded-full font-label-caps text-label-caps uppercase hover:brightness-110 active:scale-95 transition-all duration-200 inline-block text-center">Get a Custom Quote</Link>
            </div>
            
            {/* Tier 3 */}
            <div className="bg-surface-container-lowest shadow-[20px_20px_40px_rgba(0,0,0,0.05),inset_2px_2px_4px_rgba(255,255,255,1),inset_-4px_-4px_8px_rgba(0,0,0,0.03)] rounded-lg p-8 md:p-6 lg:p-10 flex flex-col h-full hover:translate-y-[-4px] transition-transform duration-300">
              <div className="mb-8">
                <span className="font-label-caps text-label-caps text-outline uppercase tracking-wider">Enterprise</span>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="font-headline-lg text-headline-lg">Custom</span>
                </div>
                <p className="mt-4 text-sm text-on-surface-variant">Full-scale digital transformation and AI integration.</p>
              </div>
              <div className="flex-grow space-y-4 mb-8">
                <div className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-sm">done</span> <span className="text-sm">Unlimited Requests</span></div>
                <div className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-sm">done</span> <span className="text-sm">Custom AI Models</span></div>
                <div className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-sm">done</span> <span className="text-sm">Dedicated Team</span></div>
              </div>
              <Link href="/contact" className="w-full py-4 bg-surface-container-lowest text-primary shadow-[10px_10px_20px_rgba(0,0,0,0.05),inset_2px_2px_4px_rgba(255,255,255,1),inset_-2px_-2px_4px_rgba(0,0,0,0.03)] rounded-full font-label-caps text-label-caps uppercase hover:bg-surface-variant transition-all duration-200 inline-block text-center">Contact Us</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

