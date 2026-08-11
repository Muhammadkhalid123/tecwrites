import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-24 px-margin-mobile md:px-margin-desktop max-w-4xl mx-auto space-y-12 relative z-10">
        <section className="text-center space-y-4">
          <h1 className="font-headline-xl text-headline-xl text-on-surface">Terms of Service</h1>
          <p className="font-body-md text-on-surface-variant">Last Updated: August 2026</p>
        </section>
        <section className="bg-surface-container-lowest shadow-[20px_20px_40px_rgba(0,0,0,0.05),inset_2px_2px_4px_rgba(255,255,255,1),inset_-4px_-4px_8px_rgba(0,0,0,0.03)] rounded-xl p-8 md:p-12 space-y-6">
          <h2 className="font-headline-lg text-headline-lg-mobile text-on-surface">1. Terms</h2>
          <p className="font-body-md text-on-surface-variant leading-relaxed">
            By accessing this Website, accessible from tecwrites.com, you are agreeing to be bound by these Website Terms and Conditions of Use and agree that you are responsible for the agreement with any applicable local laws.
          </p>
          <h2 className="font-headline-lg text-headline-lg-mobile text-on-surface">2. Use License</h2>
          <p className="font-body-md text-on-surface-variant leading-relaxed">
            Permission is granted to temporarily download one copy of the materials on TecWrites's Website for personal, non-commercial transitory viewing only.
          </p>
          <h2 className="font-headline-lg text-headline-lg-mobile text-on-surface">3. Disclaimer</h2>
          <p className="font-body-md text-on-surface-variant leading-relaxed">
            All the materials on TecWrites's Website are provided "as is". TecWrites makes no warranties, may it be expressed or implied, therefore negates all other warranties.
          </p>
          <h2 className="font-headline-lg text-headline-lg-mobile text-on-surface">4. Limitations</h2>
          <p className="font-body-md text-on-surface-variant leading-relaxed">
            TecWrites or its suppliers will not be hold accountable for any damages that will arise with the use or inability to use the materials on TecWrites's Website.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}

