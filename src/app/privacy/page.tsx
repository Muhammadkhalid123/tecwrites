import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-24 px-margin-mobile md:px-margin-desktop max-w-4xl mx-auto space-y-12 relative z-10">
        <section className="text-center space-y-4">
          <h1 className="font-headline-xl text-headline-xl text-on-surface">Privacy Policy</h1>
          <p className="font-body-md text-on-surface-variant">Last Updated: August 2026</p>
        </section>
        <section className="bg-surface-container-lowest shadow-[20px_20px_40px_rgba(0,0,0,0.05),inset_2px_2px_4px_rgba(255,255,255,1),inset_-4px_-4px_8px_rgba(0,0,0,0.03)] rounded-xl p-8 md:p-12 space-y-6">
          <h2 className="font-headline-lg text-headline-lg-mobile text-on-surface">1. Introduction</h2>
          <p className="font-body-md text-on-surface-variant leading-relaxed">
            Welcome to TecWrites. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights.
          </p>
          <h2 className="font-headline-lg text-headline-lg-mobile text-on-surface">2. Data We Collect</h2>
          <p className="font-body-md text-on-surface-variant leading-relaxed">
            We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows: Identity Data, Contact Data, Technical Data, Usage Data.
          </p>
          <h2 className="font-headline-lg text-headline-lg-mobile text-on-surface">3. How We Use Your Data</h2>
          <p className="font-body-md text-on-surface-variant leading-relaxed">
            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances: Where we need to perform the contract we are about to enter into or have entered into with you; Where it is necessary for our legitimate interests.
          </p>
          <h2 className="font-headline-lg text-headline-lg-mobile text-on-surface">4. Data Security</h2>
          <p className="font-body-md text-on-surface-variant leading-relaxed">
            We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}

