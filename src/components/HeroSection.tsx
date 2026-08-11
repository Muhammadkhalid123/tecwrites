import Link from "next/link";

export default function HeroSection() {
  return (
    <>
      {/* Ambient Background Blobs */}
      <div className="blob-bg-1"></div>
      <div className="blob-bg-2"></div>
      
      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen px-margin-mobile md:px-margin-desktop pt-32 pb-24 text-center max-w-container-max mx-auto">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Headline */}
          <h1 className="font-headline-xl text-headline-lg-mobile md:text-headline-xl text-on-background tracking-tight leading-tight">
            WHERE <span className="clay-blob-highlight"><span className="text-primary">CODE</span></span> MEETS CRAFT
          </h1>
          
          {/* Subheadline */}
          <p className="font-body-md text-body-md md:text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Hybrid Creative Technology &amp; Publishing Studio — we merge high-performance AI &amp; Web Engineering with refined Editorial Publishing.
          </p>
          
          {/* CTA */}
          <div className="flex justify-center pt-4">
            <Link 
              href="/lab"
              className="clay-btn inline-flex items-center justify-center px-10 py-5 text-on-primary font-label-caps text-label-caps tracking-widest uppercase"
            >
              Explore Our Craft
            </Link>
          </div>
          
          {/* Stats Chips */}
          <div className="flex flex-wrap justify-center gap-4 pt-16">
            <div className="clay-chip px-6 py-3 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary-container text-sm">rocket_launch</span>
              <span className="font-label-caps text-label-caps text-on-surface-variant">Projects Delivered: 150+</span>
            </div>
            <div className="clay-chip px-6 py-3 flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary-container text-sm">auto_stories</span>
              <span className="font-label-caps text-label-caps text-on-surface-variant">Books Published: 40+</span>
            </div>
            <div className="clay-chip px-6 py-3 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary-container text-sm">groups</span>
              <span className="font-label-caps text-label-caps text-on-surface-variant">Active Clients: 25</span>
            </div>
            <div className="clay-chip px-6 py-3 flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary-container text-sm">schedule</span>
              <span className="font-label-caps text-label-caps text-on-surface-variant">Years Experience: 3</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

