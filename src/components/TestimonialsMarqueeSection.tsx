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

      {/* Testimonials Section */}
      <section className="flex flex-col gap-12 pt-12 pb-24">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <h2 className="font-headline-xl text-headline-xl text-primary mb-4">Client Echoes</h2>
          <p className="text-on-surface-variant font-body-md">Hear from those who have experienced the tactile difference of our craft.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Testimonial 1 */}
          <div className="clay-card p-8 rounded-xl flex flex-col justify-between min-h-[300px]">
            <span className="material-symbols-outlined text-4xl text-primary-fixed-dim mb-6" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
            <p className="font-body-md text-lg italic text-on-surface mb-8 flex-grow">
              "The level of depth and consideration TecWrites brought to our platform is unmatched. It feels less like software and more like a carefully crafted physical product."
            </p>
            <div className="flex items-center gap-4">
              <img alt="Sarah Jenkins" className="w-16 h-16 rounded-full object-cover shadow-[5px_5px_10px_rgba(0,0,0,0.1),-5px_-5px_10px_rgba(255,255,255,0.9)]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_tqL_t0G3Ad7N-qeOr_N2Sa1I1Rn0xxe_0i4TtJiUcQXDC8mzdbZbEZONOH6xd9COdjNKz6sLlfgLcm0S2Mn16sQ_u7ZhaBcDod5vtYNbQoiYR_dPhAUV1ucy12LNAf9uPkNge9Z7NoShvhIwX-m6thTaMavcSFEgcHnrj1yaK9OkzEJbVS6pai3dsJxWo2vKZgmM1Peac3ZeIXSLQoIA7esPNMJtKvQGWVTkOWE37IDnfE02H9zF"/>
              <div>
                <h4 className="font-headline-lg-mobile text-headline-lg-mobile text-primary">Sarah Jenkins</h4>
                <p className="font-label-caps text-label-caps text-on-surface-variant uppercase">VP of Product, Forma</p>
              </div>
            </div>
          </div>
          
          {/* Testimonial 2 */}
          <div className="clay-card p-8 rounded-xl flex flex-col justify-between min-h-[300px]">
            <span className="material-symbols-outlined text-4xl text-primary-fixed-dim mb-6" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
            <p className="font-body-md text-lg italic text-on-surface mb-8 flex-grow">
              "They don't just build websites; they engineer digital spaces that invite interaction. The claymorphic approach gave our brand exactly the soft, approachable feel we needed."
            </p>
            <div className="flex items-center gap-4">
              <img alt="Marcus Vance" className="w-16 h-16 rounded-full object-cover shadow-[5px_5px_10px_rgba(0,0,0,0.1),-5px_-5px_10px_rgba(255,255,255,0.9)]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3gUXcmthQsiSTxlIi7AIT9aZul6jSjdQiAhNGxldrawrLZK2V617ggDngvtSfLuuKxA7mFQjiRhjj3OdCC3w1pBehS-zEEgoEAmdpSd4XMTjfCEiRk2Rfgjj8DGr9R5WRe7_BjJ5uIIC7FlMx7P27TlcqVjHH1hDJFpXArxZ3bs-QKlmG_V_clWUQ3_JeC5rCgq66CX-siWVy85E8HWtg2RScCGhiyOECUlrFv17O2t9W9G97luAi"/>
              <div>
                <h4 className="font-headline-lg-mobile text-headline-lg-mobile text-primary">Marcus Vance</h4>
                <p className="font-label-caps text-label-caps text-on-surface-variant uppercase">Founder, Nexus Toys</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

