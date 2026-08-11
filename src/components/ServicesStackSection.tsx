export default function ServicesStackSection() {
  return (
    <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-24 relative">
      {/* Background Depth Blobs */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-primary-container/10 to-transparent rounded-[60%_40%_30%_70%/60%_30%_70%_40%] filter blur-[80px] -z-10 animate-[float_25s_ease-in-out_infinite_alternate]"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-secondary-container/10 to-transparent rounded-[40%_60%_70%_30%/40%_50%_60%_50%] filter blur-[60px] -z-10 animate-[float_20s_ease-in-out_infinite_alternate-reverse]"></div>

      <section className="mb-24 text-center relative z-10">
        <h1 className="font-headline-xl text-headline-xl text-primary mb-6">Our Services</h1>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">Expertise crafted for the modern digital landscape. We build, automate, and publish with precision.</p>
      </section>
      
      <section className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
        {/* Card 1: AI & Automation */}
        <div className="relative group">
          <article className="clay-card clay-surface-indigo p-10 flex flex-col gap-6 h-full relative z-10">
            <div className="clay-icon-badge w-16 h-16 text-primary">
              <span className="material-symbols-outlined" style={{ fontSize: "32px" }}>smart_toy</span>
            </div>
            <div>
              <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface mb-3">AI &amp; Automation</h2>
              <p className="font-body-md text-body-md text-[#6B7280]">Streamline your workflows with intelligent agents and automated systems that work around the clock to scale your operations effortlessly.</p>
            </div>
            <div className="flex flex-wrap gap-2 mt-auto pt-4">
              <span className="clay-pill font-label-caps text-label-caps text-on-surface-variant cursor-pointer transition-colors">Chatbots</span>
              <span className="clay-pill font-label-caps text-label-caps text-on-surface-variant cursor-pointer transition-colors">Automation</span>
              <span className="clay-pill font-label-caps text-label-caps text-on-surface-variant cursor-pointer transition-colors">LLMs</span>
            </div>
          </article>
        </div>

        {/* Card 2: Bespoke Web Design */}
        <div className="relative group">
          <article className="clay-card clay-surface-cyan p-10 flex flex-col gap-6 h-full relative z-10">
            <div className="clay-icon-badge w-16 h-16 text-secondary">
              <span className="material-symbols-outlined" style={{ fontSize: "32px" }}>web</span>
            </div>
            <div>
              <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface mb-3">Bespoke Web Design</h2>
              <p className="font-body-md text-body-md text-[#6B7280]">Crafting unique, high-performance digital experiences tailored to your brand's identity, ensuring you stand out in a crowded market.</p>
            </div>
            <div className="flex flex-wrap gap-2 mt-auto pt-4">
              <span className="clay-pill font-label-caps text-label-caps text-on-surface-variant cursor-pointer transition-colors">UI/UX</span>
              <span className="clay-pill font-label-caps text-label-caps text-on-surface-variant cursor-pointer transition-colors">Frontend</span>
              <span className="clay-pill font-label-caps text-label-caps text-on-surface-variant cursor-pointer transition-colors">Design Systems</span>
            </div>
          </article>
        </div>

        {/* Card 3: Self Publishing */}
        <div className="relative group">
          <article className="clay-card clay-surface-sand p-10 flex flex-col gap-6 h-full relative z-10">
            <div className="clay-icon-badge w-16 h-16 text-tertiary">
              <span className="material-symbols-outlined" style={{ fontSize: "32px" }}>menu_book</span>
            </div>
            <div>
              <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface mb-3">Self Publishing</h2>
              <p className="font-body-md text-body-md text-[#6B7280]">Bring your ideas to life with comprehensive self-publishing support, from manuscript formatting to digital distribution strategies.</p>
            </div>
            <div className="flex flex-wrap gap-2 mt-auto pt-4">
              <span className="clay-pill font-label-caps text-label-caps text-on-surface-variant cursor-pointer transition-colors">Ebooks</span>
              <span className="clay-pill font-label-caps text-label-caps text-on-surface-variant cursor-pointer transition-colors">Formatting</span>
              <span className="clay-pill font-label-caps text-label-caps text-on-surface-variant cursor-pointer transition-colors">Distribution</span>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}

