import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function StudioPage() {
  return (
    <>
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
            We are a digital laboratory specializing in claymorphic design and human-centered AI. We mold ideas into tactile, approachable, and highly engineered digital realities.
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
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYR-8PcR9L573tt8SAjfLGrWvfQ0PQr60zWI7--O2DYebcO-tmeOpBqD5v-21x0pBZXD2ukc_ZDqXDCS_Xa4FiBJhU371usr_ef5DWFKFqkUknA3usiq4c-c8c-ojkNEPqNu0mbupZZsT9wXUSlESHHx6kUlHhUKSqqe0MhbrTVPVRa6Wd3TkusV-fQ_mNojwc7pJPePg_kRn6ZvZOaJBhpqCbUJhB8aibBQWm3wcEKPov5EUzV6Ug"
                  alt="Studio"
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg-mobile md:font-headline-lg mb-6 text-on-surface">Molded from vision, <br/>Est. 2021</h2>
              <p className="text-body-md font-body-md text-on-surface-variant mb-6">
                TecWrites began as an experiment in tactile digital environments. We recognized that enterprise software had become cold and overly flat. Our mission was to reintroduce volume, depth, and a sense of physical comfort into digital interfaces.
              </p>
              <p className="text-body-md font-body-md text-on-surface-variant">
                Today, we partner with forward-thinking creators and tech innovators to build products that don't just function perfectly, but feel inherently good to use. Like a well-crafted object in the palm of your hand.
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
              <p className="text-body-md font-body-md text-on-surface-variant text-sm">Every curve and shadow is mathematically calculated for optimal visual depth.</p>
            </div>
            {/* Value 2 */}
            <div className="clay-card flex flex-col items-center text-center p-8">
              <div className="bg-primary-fixed shadow-[4px_4px_10px_rgba(175,180,200,0.3),-4px_-4px_10px_rgba(255,255,255,1),inset_2px_2px_3px_rgba(255,255,255,0.6),inset_-2px_-2px_4px_rgba(0,0,0,0.05)] w-16 h-16 rounded-full flex items-center justify-center mb-6 text-primary">
                <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>edit_document</span>
              </div>
              <h3 className="text-body-md font-body-md font-bold text-on-surface mb-3">Editorial Rigor</h3>
              <p className="text-body-md font-body-md text-on-surface-variant text-sm">Content and design are treated as a singular, cohesive narrative experience.</p>
            </div>
            {/* Value 3 */}
            <div className="clay-card flex flex-col items-center text-center p-8">
              <div className="bg-primary-fixed shadow-[4px_4px_10px_rgba(175,180,200,0.3),-4px_-4px_10px_rgba(255,255,255,1),inset_2px_2px_3px_rgba(255,255,255,0.6),inset_-2px_-2px_4px_rgba(0,0,0,0.05)] w-16 h-16 rounded-full flex items-center justify-center mb-6 text-primary">
                <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>psychology</span>
              </div>
              <h3 className="text-body-md font-body-md font-bold text-on-surface mb-3">Human-Centered AI</h3>
              <p className="text-body-md font-body-md text-on-surface-variant text-sm">Deploying intelligence not to replace, but to amplify human creativity.</p>
            </div>
            {/* Value 4 */}
            <div className="clay-card flex flex-col items-center text-center p-8">
              <div className="bg-primary-fixed shadow-[4px_4px_10px_rgba(175,180,200,0.3),-4px_-4px_10px_rgba(255,255,255,1),inset_2px_2px_3px_rgba(255,255,255,0.6),inset_-2px_-2px_4px_rgba(0,0,0,0.05)] w-16 h-16 rounded-full flex items-center justify-center mb-6 text-primary">
                <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>public</span>
              </div>
              <h3 className="text-body-md font-body-md font-bold text-on-surface mb-3">Global Craftsmanship</h3>
              <p className="text-body-md font-body-md text-on-surface-variant text-sm">Drawing inspiration and talent from a borderless design community.</p>
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
                <p className="text-body-md font-body-md text-sm text-on-surface-variant">Gathering raw materials and understanding the core need.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="clay-card p-0 w-20 h-20 rounded-full flex items-center justify-center mb-6 text-primary font-headline-lg text-xl font-bold border-4 border-surface-container-low">2</div>
                <h4 className="text-body-md font-body-md font-bold mb-2">Strategy</h4>
                <p className="text-body-md font-body-md text-sm text-on-surface-variant">Creating the blueprint for structural integrity and flow.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="clay-card p-0 w-20 h-20 rounded-full flex items-center justify-center mb-6 text-primary font-headline-lg text-xl font-bold border-4 border-surface-container-low">3</div>
                <h4 className="text-body-md font-body-md font-bold mb-2">Creation</h4>
                <p className="text-body-md font-body-md text-sm text-on-surface-variant">Molding the visual and technical components into shape.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="clay-card p-0 w-20 h-20 rounded-full flex items-center justify-center mb-6 text-primary font-headline-lg text-xl font-bold border-4 border-surface-container-low">4</div>
                <h4 className="text-body-md font-body-md font-bold mb-2">Launch</h4>
                <p className="text-body-md font-body-md text-sm text-on-surface-variant">Polishing the final product and releasing it into the wild.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Team */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-24 relative">
          <div className="text-center mb-16">
            <h2 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg-mobile md:font-headline-lg text-on-surface">The Artisans</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {/* Team Member 1 */}
            <div className="clay-card flex flex-col items-center text-center p-6">
              <div className="w-40 h-40 mb-6 bg-surface-container-low rounded-full shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1),inset_-4px_-4px_8px_rgba(255,255,255,0.8)] p-2">
                <img
                  className="w-full h-full object-cover rounded-[50%_50%_30%_70%/60%_40%_70%_40%]"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9onj7ma8vJ_pS-HQ7QaDAMNZ-Y-YCtXCISW6M_vn1KTf6Das9DNxDisnR0ow5oWxitigkHSBk5EsOAQoUKjFIATs7PSGYNbHzmKMGQmjEkfh2sD9rgqzwIIs3r3-GPXGVn3MFZHuGk_jy3olqr-P2MAxDYjNjYPGugDupnY3rPa9SfLBVQKugLVFNXXwpg4zZFv3hoMI-IyafVDQ8eM4ddxcFXW69wXn6mv90o42ATRr6gATds71b"
                  alt="Elena Rostova"
                />
              </div>
              <h3 className="text-body-md font-body-md font-bold text-on-surface">Elena Rostova</h3>
              <p className="text-label-caps font-label-caps text-primary mt-2">Design Director</p>
            </div>
            {/* Team Member 2 */}
            <div className="clay-card flex flex-col items-center text-center p-6">
              <div className="w-40 h-40 mb-6 bg-surface-container-low rounded-full shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1),inset_-4px_-4px_8px_rgba(255,255,255,0.8)] p-2">
                <img
                  className="w-full h-full object-cover rounded-[30%_70%_50%_50%/50%_30%_70%_50%]"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVDoCAiDUJXsY50fsz0HgysJSfcZK6QSBcSX2ZEtrHQrRf-r2weH2Z4gHQN9ras_ndB2oZ0xIhzFdsnj2CKilCWpOOnjNaZlzWfWL_k9E1IQ_eua6fmXojyg1Bfa50V90nRbyjguQzpKxGUB4yJQac4NcqWvC8xejUsE7UN8lWlJ0Ya_1SNzlA47ICiWqiNqWuzOO9VEvgUt-AW4wzs4Im04j1BFzLY_wOPBTm9xLd51FbLDRwDCv4"
                  alt="Marcus Chen"
                />
              </div>
              <h3 className="text-body-md font-body-md font-bold text-on-surface">Marcus Chen</h3>
              <p className="text-label-caps font-label-caps text-primary mt-2">Technical Lead</p>
            </div>
            {/* Team Member 3 */}
            <div className="clay-card flex flex-col items-center text-center p-6">
              <div className="w-40 h-40 mb-6 bg-surface-container-low rounded-full shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1),inset_-4px_-4px_8px_rgba(255,255,255,0.8)] p-2">
                <img
                  className="w-full h-full object-cover rounded-[40%_60%_70%_30%/40%_50%_60%_50%]"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-15KGWiPnArSYkXhSQsuPbcAEmGeCENYEgEQ_emLeU5WrjvAdhEpVBmgd9EerefEl_qpmaFMM-LMeupBHREx8S0hYfwfX3Qibjd2R5qskOLJdQXu3OdsqwcNf1CoTDFeL_0ELE8aVRwxrkc_SjiGrKOSRdtjVTfoIqY0IGfAzgxua9OAIUE72T96QKd0rfqENXrVyMKTKTZW43Lo4QiG9TWAQKAEJn7aKNpj1S9h4DBidCLr1mKD5"
                  alt="Sam Taylor"
                />
              </div>
              <h3 className="text-body-md font-body-md font-bold text-on-surface">Sam Taylor</h3>
              <p className="text-label-caps font-label-caps text-primary mt-2">Product Strategist</p>
            </div>
          </div>
        </section>

        {/* Section 6: Stats */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-16">
          <div className="flex flex-wrap justify-center gap-6">
            <div className="clay-card px-8 py-4 rounded-full flex items-center gap-4">
              <span className="text-headline-lg-mobile font-headline-lg-mobile text-primary">120+</span>
              <span className="text-label-caps font-label-caps text-on-surface-variant">Projects Delivered</span>
            </div>
            <div className="clay-card px-8 py-4 rounded-full flex items-center gap-4">
              <span className="text-headline-lg-mobile font-headline-lg-mobile text-primary">15</span>
              <span className="text-label-caps font-label-caps text-on-surface-variant">Global Awards</span>
            </div>
            <div className="clay-card px-8 py-4 rounded-full flex items-center gap-4">
              <span className="text-headline-lg-mobile font-headline-lg-mobile text-primary">4</span>
              <span className="text-label-caps font-label-caps text-on-surface-variant">Open Source Libs</span>
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

