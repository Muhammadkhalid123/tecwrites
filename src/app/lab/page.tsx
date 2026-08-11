import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function LabPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto space-y-32 relative z-10">
        {/* Background Blobs */}
        <div className="fixed top-20 left-[-5%] w-[40vw] h-[40vw] bg-primary-fixed/30 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] blur-[80px] -z-10 animate-[blob-bounce_10s_infinite_alternate]"></div>
        <div className="fixed bottom-[-10%] right-[-5%] w-[50vw] h-[50vw] bg-secondary-fixed/20 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] blur-[100px] -z-10" style={{ animation: "blob-bounce 10s infinite alternate-reverse", animationDelay: "-5s" }}></div>

        {/* Header Section */}
        <section className="text-center space-y-8 flex flex-col items-center">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-surface-container shadow-clay-inset text-label-caps font-label-caps text-on-surface-variant">
            SELECTED WORK
          </div>
          <h1 className="font-headline-xl text-headline-lg-mobile md:text-headline-xl text-primary max-w-3xl leading-tight">
            Case Studies &amp; Craft in Action
          </h1>
          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <button className="px-6 py-2 rounded-full bg-primary text-on-primary text-label-caps font-label-caps shadow-clay hover:scale-105 active:scale-95 transition-all duration-300">
              All
            </button>
            <button className="px-6 py-2 rounded-full bg-surface-container text-on-surface text-label-caps font-label-caps shadow-clay hover:scale-105 active:scale-95 transition-all duration-300">
              AI &amp; Automation
            </button>
            <button className="px-6 py-2 rounded-full bg-surface-container text-on-surface text-label-caps font-label-caps shadow-clay hover:scale-105 active:scale-95 transition-all duration-300">
              Web Design
            </button>
            <button className="px-6 py-2 rounded-full bg-surface-container text-on-surface text-label-caps font-label-caps shadow-clay hover:scale-105 active:scale-95 transition-all duration-300">
              Publishing
            </button>
          </div>
        </section>

        {/* Case Study Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Card 1 */}
          <article className="bg-surface rounded-xl p-8 shadow-clay flex flex-col gap-6 hover:shadow-clay-active hover:-translate-y-2 transition-all duration-500 group">
            <div className="relative w-full aspect-[4/3] rounded-[60%_40%_30%_70%/60%_30%_70%_40%] overflow-hidden shadow-clay-inset">
              <img
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYcwuccMwSun1inHV98AJsmZlPpnea7uHptVSbqCJQMSb1iH4QFFnsrBrYwd8yhmhgxlRZW0MYPohh7ee2flZGJHgiHkH5r3UdGqpV5pg8-GsWCDNMBNMP-_Ikffn0ev1uaFUC7dt8ofOatGmjPZT18qVQIGQc4pnBTHkhUbJvgiw0eStQzjhhEAZpGY00SLM0VJWTOiaeeU4IMGzMckB45L__HPfCr8g-RRGzvC5hnt1G5LA5OZJg"
                alt="Case Study 1"
              />
            </div>
            <div className="flex flex-col gap-4">
              <div className="inline-flex px-3 py-1 rounded-full bg-primary-container text-on-primary-container text-label-caps font-label-caps shadow-clay-sm self-start">
                AI &amp; Automation
              </div>
              <h3 className="font-headline-lg text-headline-lg-mobile text-on-surface">Neural Interface Logic</h3>
              <p className="font-body-md text-on-surface-variant line-clamp-2">
                Redesigning the cognitive workflow for enterprise AI agents, resulting in a 40% reduction in processing friction.
              </p>
            </div>
          </article>

          {/* Card 2 */}
          <article className="bg-surface rounded-xl p-8 shadow-clay flex flex-col gap-6 hover:shadow-clay-active hover:-translate-y-2 transition-all duration-500 group mt-0 md:mt-12">
            <div className="relative w-full aspect-[4/3] rounded-[40%_60%_70%_30%/40%_50%_60%_50%] overflow-hidden shadow-clay-inset">
              <img
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDU_-TZz22lEsbeaVgMLXlGk_AxEqmdq_Hf74tv3HSFp3kdT7kylZAlX9_87Mhp9XA3_Z29o9MFZoeQ0-T2OTV90qQfE9ze_DB4g8BulxrnSiMbuxOMkuq9jlrAcHLgIjVz4BhhIouaZSRIoe9lxvN8AuOc2qNh_2Dl8_Ce_DrV3jNH5yTplIl7w3TORFydilqtuOgOlo_UhyG8xZE0piE5xy13Xolwso8AZGUqHRb7AyMo7v5R43-e"
                alt="Case Study 2"
              />
            </div>
            <div className="flex flex-col gap-4">
              <div className="inline-flex px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-label-caps font-label-caps shadow-clay-sm self-start">
                Web Design
              </div>
              <h3 className="font-headline-lg text-headline-lg-mobile text-on-surface">Fluid Architecture</h3>
              <p className="font-body-md text-on-surface-variant line-clamp-2">
                A headless commerce experience built on composable principles, elevating conversion rates by rethinking interaction models.
              </p>
            </div>
          </article>

          {/* Card 3 */}
          <article className="bg-surface rounded-xl p-8 shadow-clay flex flex-col gap-6 hover:shadow-clay-active hover:-translate-y-2 transition-all duration-500 group">
            <div className="relative w-full aspect-[4/3] rounded-t-[4rem] rounded-b-[2rem] overflow-hidden shadow-clay-inset">
              <img
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4KNbuuJTvRYftltkrRNztwMf9ej7S0fdwuMxmUZ52knRObWUUIwZfm2_gRKaPVzT8Bl1oikjaaT4K1Ammq1SQFmUFH50xoBqr-ibEnidBN7heJTkXC-HahzTLUI2AHa92jtx39O1Cesa88GUKxxBQ7PT5E-bxG6dLDbaUyYb7hxcU9StRrGUXz5TLPuXsYDOG2PU3oIf3q5tEA5HyhcJJkHaq_Y_0BaxvPHEDrxWdiwBvHqzWgaRP"
                alt="Case Study 3"
              />
            </div>
            <div className="flex flex-col gap-4">
              <div className="inline-flex px-3 py-1 rounded-full bg-tertiary-container text-on-tertiary-container text-label-caps font-label-caps shadow-clay-sm self-start">
                Publishing
              </div>
              <h3 className="font-headline-lg text-headline-lg-mobile text-on-surface">Modern Editorial Print</h3>
              <p className="font-body-md text-on-surface-variant line-clamp-2">
                Bridging tactile print typography with dynamic digital grids for a premier literary journal's digital rebirth.
              </p>
            </div>
          </article>

          {/* Card 4 */}
          <article className="bg-surface rounded-xl p-8 shadow-clay flex flex-col gap-6 hover:shadow-clay-active hover:-translate-y-2 transition-all duration-500 group mt-0 md:mt-12">
            <div className="relative w-full aspect-[4/3] rounded-[3rem] overflow-hidden shadow-clay-inset">
              <img
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8vjpJ1gNR0LX7v9_ALjRnUmI4_NVnnLtYKf4oEtdLeilrni9pESEW5Rr5NmvSEU1GwXTUzv0MDH9FudVjoCv1VyAYapBgflMYowBbPiruWtnxD6-W8xPRlPgCFLE04XUmggxUx2b6U_LpDgnW1j6UaqM31zQzSAlu4gqbhqW1lv3d6kCMg11Su6yETr4gkd3QIqC2IzxA4oqyXkSHuVizcv-XXqSUX0XkAMttZgkMwewXWXGOp4az"
                alt="Case Study 4"
              />
            </div>
            <div className="flex flex-col gap-4">
              <div className="inline-flex px-3 py-1 rounded-full bg-surface-variant text-on-surface-variant text-label-caps font-label-caps shadow-clay-sm self-start">
                AI &amp; Automation
              </div>
              <h3 className="font-headline-lg text-headline-lg-mobile text-on-surface">Predictive Logic Systems</h3>
              <p className="font-body-md text-on-surface-variant line-clamp-2">
                Implementing a natural language interface over legacy data silos to create an intuitive analytics dashboard.
              </p>
            </div>
          </article>
        </section>

        {/* Featured Spotlight */}
        <section className="bg-surface rounded-xl p-8 md:p-16 shadow-clay-active flex flex-col lg:flex-row gap-12 items-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-fixed/40 rounded-full blur-[60px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
          <div className="flex-1 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container shadow-clay-inset text-label-caps font-label-caps text-primary">
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              FEATURED SPOTLIGHT
            </div>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">
              Project Nexus: Reimagining Global Collaboration
            </h2>
            <div className="space-y-6">
              <div className="space-y-2">
                <h4 className="font-label-caps text-label-caps text-on-surface-variant uppercase">The Challenge</h4>
                <p className="font-body-md text-on-surface">Unifying disjointed communication channels across 15 international offices without disrupting active workflows.</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-label-caps text-label-caps text-on-surface-variant uppercase">The Solution</h4>
                <p className="font-body-md text-on-surface">A claymorphic, tactile dashboard that centralized async tasks into 'soft' interactive spaces, reducing cognitive load.</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex flex-col items-center justify-center p-4 rounded-[1.5rem] bg-surface shadow-clay-sm min-w-[120px]">
                <span className="font-headline-lg text-headline-lg-mobile text-primary">2.4x</span>
                <span className="font-label-caps text-label-caps text-on-surface-variant mt-1">Engagement</span>
              </div>
              <div className="flex flex-col items-center justify-center p-4 rounded-[1.5rem] bg-surface shadow-clay-sm min-w-[120px]">
                <span className="font-headline-lg text-headline-lg-mobile text-secondary">18%</span>
                <span className="font-label-caps text-label-caps text-on-surface-variant mt-1">Less Churn</span>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full relative">
            <div className="aspect-square md:aspect-[4/5] rounded-[60%_40%_30%_70%/60%_30%_70%_40%] bg-surface-container-high shadow-clay-inset overflow-hidden p-4">
              <img
                className="w-full h-full object-cover rounded-[2rem] shadow-clay"
                src="/project_nexus_dashboard.png"
                alt="Project Nexus"
              />
            </div>
          </div>
        </section>

        {/* CTA Panel */}
        <section className="bg-primary/5 rounded-[3rem] p-12 md:p-24 shadow-clay flex flex-col items-center text-center gap-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-surface/50 to-transparent -z-10"></div>
          <h2 className="font-headline-xl text-headline-lg-mobile md:text-headline-xl text-primary max-w-2xl">
            Ready to mold your next big idea?
          </h2>
          <p className="font-body-md text-on-surface-variant max-w-lg">
            Let's collaborate to build digital experiences that are as tactile and engaging as they are powerful.
          </p>
          <a href="/contact" className="px-8 py-4 mt-4 rounded-full bg-primary text-on-primary font-label-caps text-label-caps shadow-clay hover:shadow-clay-active hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2">
            Start a Conversation
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}

