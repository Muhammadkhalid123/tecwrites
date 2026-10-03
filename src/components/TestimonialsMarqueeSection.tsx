export default function TestimonialsMarqueeSection() {
  return (
    <div className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 flex flex-col gap-24">
      {/* Methodology Section */}
      <section className="flex flex-col gap-12">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <h2 className="font-headline-xl text-headline-xl text-primary mb-4">Our Methodology</h2>
          <p className="text-on-surface-variant font-body-md">A refined, four-step process designed to mold your ideas into tactile digital experiences.</p>
        </div>
        
        <div className="relative w-full py-16">
          {/* Soft Track (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-4 bg-surface-container-highest rounded-full -translate-y-1/2 shadow-[inset_-5px_-5px_10px_rgba(255,255,255,0.8),inset_5px_5px_10px_rgba(0,0,0,0.05)] z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {/* Step 1 */}
            <div className="flex flex-col items-center gap-6">
              <div className="w-20 h-20 rounded-full bg-surface shadow-[10px_10px_20px_rgba(0,0,0,0.05),-5px_-5px_10px_rgba(255,255,255,0.8),inset_-2px_-2px_5px_rgba(0,0,0,0.02),inset_2px_2px_5px_rgba(255,255,255,0.5)] flex items-center justify-center text-primary font-headline-lg text-headline-lg relative group">
                1
                {/* Mobile connecting line */}
                <div className="md:hidden absolute -bottom-8 left-1/2 w-1 h-8 bg-surface-container-highest -translate-x-1/2 shadow-[inset_-5px_-5px_10px_rgba(255,255,255,0.8),inset_5px_5px_10px_rgba(0,0,0,0.05)]"></div>
              </div>
              <div className="text-center p-6 rounded-xl clay-card w-full h-full flex flex-col items-center">
                <span className="material-symbols-outlined text-4xl text-primary mb-2" style={{ fontVariationSettings: "'FILL' 1" }}>explore</span>
                <h3 className="font-headline-lg-mobile text-headline-lg-mobile mb-2">Discovery &amp; Alignment</h3>
                <p className="text-on-surface-variant text-sm font-body-md">We dig deep to uncover the core needs, aligning vision with actionable insights.</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center gap-6">
              <div className="w-20 h-20 rounded-full bg-surface shadow-[10px_10px_20px_rgba(0,0,0,0.05),-5px_-5px_10px_rgba(255,255,255,0.8),inset_-2px_-2px_5px_rgba(0,0,0,0.02),inset_2px_2px_5px_rgba(255,255,255,0.5)] flex items-center justify-center text-primary font-headline-lg text-headline-lg relative">
                2
                {/* Mobile connecting line */}
                <div className="md:hidden absolute -bottom-8 left-1/2 w-1 h-8 bg-surface-container-highest -translate-x-1/2 shadow-[inset_-5px_-5px_10px_rgba(255,255,255,0.8),inset_5px_5px_10px_rgba(0,0,0,0.05)]"></div>
              </div>
              <div className="text-center p-6 rounded-xl clay-card w-full h-full flex flex-col items-center">
                <span className="material-symbols-outlined text-4xl text-primary mb-2" style={{ fontVariationSettings: "'FILL' 1" }}>architecture</span>
                <h3 className="font-headline-lg-mobile text-headline-lg-mobile mb-2">Strategy &amp; Architecture</h3>
                <p className="text-on-surface-variant text-sm font-body-md">Structuring the foundation. Blueprints that ensure scalability and user-centric flow.</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center gap-6">
              <div className="w-20 h-20 rounded-full bg-surface shadow-[10px_10px_20px_rgba(0,0,0,0.05),-5px_-5px_10px_rgba(255,255,255,0.8),inset_-2px_-2px_5px_rgba(0,0,0,0.02),inset_2px_2px_5px_rgba(255,255,255,0.5)] flex items-center justify-center text-primary font-headline-lg text-headline-lg relative">
                3
                {/* Mobile connecting line */}
                <div className="md:hidden absolute -bottom-8 left-1/2 w-1 h-8 bg-surface-container-highest -translate-x-1/2 shadow-[inset_-5px_-5px_10px_rgba(255,255,255,0.8),inset_5px_5px_10px_rgba(0,0,0,0.05)]"></div>
              </div>
              <div className="text-center p-6 rounded-xl clay-card w-full h-full flex flex-col items-center">
                <span className="material-symbols-outlined text-4xl text-primary mb-2" style={{ fontVariationSettings: "'FILL' 1" }}>code</span>
                <h3 className="font-headline-lg-mobile text-headline-lg-mobile mb-2">Creation &amp; Engineering</h3>
                <p className="text-on-surface-variant text-sm font-body-md">Molding the interface. Crafting robust, performant, and tactile digital assets.</p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col items-center gap-6">
              <div className="w-20 h-20 rounded-full bg-surface shadow-[10px_10px_20px_rgba(0,0,0,0.05),-5px_-5px_10px_rgba(255,255,255,0.8),inset_-2px_-2px_5px_rgba(0,0,0,0.02),inset_2px_2px_5px_rgba(255,255,255,0.5)] flex items-center justify-center text-primary font-headline-lg text-headline-lg">
                4
              </div>
              <div className="text-center p-6 rounded-xl clay-card w-full h-full flex flex-col items-center">
                <span className="material-symbols-outlined text-4xl text-primary mb-2" style={{ fontVariationSettings: "'FILL' 1" }}>rocket_launch</span>
                <h3 className="font-headline-lg-mobile text-headline-lg-mobile mb-2">Launch &amp; Growth</h3>
                <p className="text-on-surface-variant text-sm font-body-md">Deployment and continuous iteration to ensure long-term value and engagement.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Studio Commitments Section */}
      <section className="flex flex-col gap-12 pt-12 pb-24">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <h2 className="font-headline-xl text-headline-xl text-primary mb-4">The TecWrites Standard</h2>
          <p className="text-on-surface-variant font-body-md">Engineering integrity and design excellence built into every engagement.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="clay-card p-8 rounded-2xl flex flex-col gap-4">
            <div className="w-12 h-12 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center shadow-clay-sm">
              <span className="material-symbols-outlined text-2xl">verified_user</span>
            </div>
            <h3 className="font-headline-sm text-xl font-bold text-on-surface">End-to-End Engineering Ownership</h3>
            <p className="font-body-md text-on-surface-variant leading-relaxed">
              We design, write code, build animations, and manage cloud infrastructure together in-house. No fragmented handoffs or disjointed third-party contractors.
            </p>
          </div>
          <div className="clay-card p-8 rounded-2xl flex flex-col gap-4">
            <div className="w-12 h-12 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center shadow-clay-sm">
              <span className="material-symbols-outlined text-2xl">speed</span>
            </div>
            <h3 className="font-headline-sm text-xl font-bold text-on-surface">Performance &amp; Core Web Vitals</h3>
            <p className="font-body-md text-on-surface-variant leading-relaxed">
              Visual richness should never compromise page speed. We optimize assets, SSR pipelines, and layout stability from day one so your site converts effortlessly.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

