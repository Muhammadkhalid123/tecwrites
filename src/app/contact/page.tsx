"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function ContactPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [activeService, setActiveService] = useState("Product Design");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName || !email || !message) return;
    
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName: lastName || "-",
          email,
          service: activeService,
          message
        })
      });

      if (res.ok) {
        setStatus("success");
        setFirstName("");
        setLastName("");
        setEmail("");
        setMessage("");
        
        // Trigger GA4 Conversion Event
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'generate_lead', {
            event_category: 'Contact',
            event_label: activeService
          });
        }
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };
  return (
    <>
      <Header />
      {/* Background Blobs */}
      <div className="fixed top-20 -left-20 w-96 h-96 bg-primary-fixed opacity-40 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] blur-2xl -z-10 mix-blend-multiply animate-[morph_8s_ease-in-out_infinite]"></div>
      <div className="fixed bottom-20 -right-20 w-[500px] h-[500px] bg-secondary-fixed opacity-30 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] blur-3xl -z-10 mix-blend-multiply animate-[morph2_10s_ease-in-out_infinite_alternate]"></div>
      
      <main className="flex-grow pt-40 pb-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full relative z-10">
        {/* Header Section */}
        <section className="text-center max-w-3xl mx-auto mb-20 md:mb-32 px-4">
          <span className="inline-block text-label-caps font-label-caps text-primary mb-4 tracking-widest uppercase bg-surface-container-lowest shadow-clay px-6 py-2 rounded-full">
            START A CONVERSATION
          </span>
          <h1 className="font-headline-xl text-headline-xl text-on-surface mb-8">Let's Build Something Exceptional</h1>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Whether you're looking to redefine your digital presence or engineer a groundbreaking platform, our studio is ready to translate your vision into reality. Reach out and let's craft the future.
          </p>
        </section>

        {/* Two-Column Layout */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-gutter mb-32">
          {/* Left: Studio Info */}
          <div className="lg:col-span-5 flex flex-col gap-12 order-2 lg:order-1">
            <div className="flex flex-col gap-6">
              <h3 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface mb-2">Connect Directly</h3>
              
              {/* Contact Chips */}
              <div className="bg-surface-container-lowest shadow-clay rounded-xl p-6 flex items-center gap-6 hover:shadow-clay-active hover:scale-[1.02] transition-all duration-300 cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-surface-container-lowest shadow-clay-inset flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>mail</span>
                </div>
                <div>
                  <p className="text-label-caps font-label-caps text-on-surface-variant mb-1">EMAIL</p>
                  <p className="font-body-md text-body-md font-semibold">info@tecwrites.com</p>
                </div>
              </div>
              
              <div className="bg-surface-container-lowest shadow-clay rounded-xl p-6 flex items-center gap-6 hover:shadow-clay-active hover:scale-[1.02] transition-all duration-300 cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-surface-container-lowest shadow-clay-inset flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
                </div>
                <div>
                  <p className="text-label-caps font-label-caps text-on-surface-variant mb-1">PHONE</p>
                  <p className="font-body-md text-body-md font-semibold">+1(888) 921 3331</p>
                </div>
              </div>
            </div>
            
            {/* Abstract Location Motif */}
            <div className="bg-surface-container-lowest shadow-clay rounded-[3rem] p-8 mt-4 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-surface-low to-surface opacity-50"></div>
              <div className="relative z-10">
                <h4 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface mb-6">Locations</h4>
                <div className="flex flex-col gap-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-surface-container-lowest shadow-clay-inset flex items-center justify-center text-primary mt-1 shrink-0">
                      <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                    </div>
                    <div>
                      <p className="font-body-md text-body-md font-bold mb-1">Lake St. Louis (HQ)</p>
                      <p className="font-body-md text-body-md text-sm text-on-surface-variant">31 Gourdon Ct<br/>Lake St. Louis, MO 63367</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-surface-container-lowest shadow-clay-inset flex items-center justify-center text-primary mt-1 shrink-0">
                      <span className="material-symbols-outlined text-sm">language</span>
                    </div>
                    <div>
                      <p className="font-body-md text-body-md font-bold mb-1">Global Remote</p>
                      <p className="font-body-md text-body-md text-sm text-on-surface-variant">Operating seamlessly across<br/>EST, GMT, and CET timezones.</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative blob inside card */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary-container opacity-40 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] blur-xl group-hover:scale-125 transition-transform duration-1000 animate-[morph_8s_ease-in-out_infinite]"></div>
            </div>
            
            {/* Socials */}
            <div className="flex items-center gap-6 pt-4">
              <p className="text-label-caps font-label-caps text-on-surface-variant">SOCIAL</p>
              <div className="h-px bg-outline-variant flex-grow opacity-50"></div>
              <a className="w-12 h-12 rounded-full bg-surface-container-lowest shadow-clay flex items-center justify-center text-primary hover:shadow-clay-active hover:scale-[1.02] transition-all duration-300" href="#">
                <span className="material-symbols-outlined">link</span>
              </a>
              <a className="w-12 h-12 rounded-full bg-surface-container-lowest shadow-clay flex items-center justify-center text-primary hover:shadow-clay-active hover:scale-[1.02] transition-all duration-300" href="#">
                <span className="material-symbols-outlined">design_services</span>
              </a>
            </div>
          </div>

          {/* Right: Contact Form Panel */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="bg-surface-container-lowest shadow-clay rounded-[3rem] p-8 md:p-12 h-full flex flex-col relative overflow-hidden">
              <h3 className="font-headline-lg text-headline-lg text-on-surface mb-8">Send a Message</h3>
              <form className="flex flex-col gap-8 flex-grow" onSubmit={handleSubmit}>
                {/* Name Inputs */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-3">
                    <label className="text-label-caps font-label-caps text-on-surface-variant ml-2" htmlFor="firstName">FIRST NAME</label>
                    <input required value={firstName} onChange={(e) => setFirstName(e.target.value)} className="bg-surface-container-lowest shadow-clay-inset rounded-xl border-none px-6 py-4 font-body-md text-body-md text-on-surface focus:ring-2 focus:ring-primary/20 placeholder:text-outline outline-none" id="firstName" placeholder="Jane" type="text"/>
                  </div>
                  <div className="flex flex-col gap-3">
                    <label className="text-label-caps font-label-caps text-on-surface-variant ml-2" htmlFor="lastName">LAST NAME</label>
                    <input value={lastName} onChange={(e) => setLastName(e.target.value)} className="bg-surface-container-lowest shadow-clay-inset rounded-xl border-none px-6 py-4 font-body-md text-body-md text-on-surface focus:ring-2 focus:ring-primary/20 placeholder:text-outline outline-none" id="lastName" placeholder="Doe" type="text"/>
                  </div>
                </div>
                {/* Email Input */}
                <div className="flex flex-col gap-3">
                  <label className="text-label-caps font-label-caps text-on-surface-variant ml-2" htmlFor="email">EMAIL ADDRESS</label>
                  <input required value={email} onChange={(e) => setEmail(e.target.value)} className="bg-surface-container-lowest shadow-clay-inset rounded-xl border-none px-6 py-4 font-body-md text-body-md text-on-surface focus:ring-2 focus:ring-primary/20 placeholder:text-outline outline-none" id="email" placeholder="jane@company.com" type="email"/>
                </div>
                
                {/* Service Selector (Radio Chips) */}
                <div className="flex flex-col gap-3 mt-2">
                  <label className="text-label-caps font-label-caps text-on-surface-variant ml-2 mb-2">HOW CAN WE HELP?</label>
                  <div className="flex flex-wrap gap-4">
                    <label className="cursor-pointer group">
                      <input className="peer sr-only" name="service" type="radio" checked={activeService === "Product Design"} onChange={() => setActiveService("Product Design")} />
                      <div className="bg-surface-container-lowest shadow-clay px-6 py-3 rounded-full font-body-md text-sm text-on-surface-variant peer-checked:shadow-clay-inset peer-checked:text-primary peer-checked:font-medium transition-all duration-300">
                        Product Design
                      </div>
                    </label>
                    <label className="cursor-pointer group">
                      <input className="peer sr-only" name="service" type="radio" checked={activeService === "Web Engineering"} onChange={() => setActiveService("Web Engineering")}/>
                      <div className="bg-surface-container-lowest shadow-clay px-6 py-3 rounded-full font-body-md text-sm text-on-surface-variant peer-checked:shadow-clay-inset peer-checked:text-primary peer-checked:font-medium transition-all duration-300">
                        Web Engineering
                      </div>
                    </label>
                    <label className="cursor-pointer group">
                      <input className="peer sr-only" name="service" type="radio" checked={activeService === "Brand Identity"} onChange={() => setActiveService("Brand Identity")}/>
                      <div className="bg-surface-container-lowest shadow-clay px-6 py-3 rounded-full font-body-md text-sm text-on-surface-variant peer-checked:shadow-clay-inset peer-checked:text-primary peer-checked:font-medium transition-all duration-300">
                        Brand Identity
                      </div>
                    </label>
                  </div>
                </div>
                
                {/* Message Area */}
                <div className="flex flex-col gap-3 flex-grow">
                  <label className="text-label-caps font-label-caps text-on-surface-variant ml-2" htmlFor="message">PROJECT DETAILS</label>
                  <textarea required value={message} onChange={(e) => setMessage(e.target.value)} className="bg-surface-container-lowest shadow-clay-inset rounded-2xl border-none px-6 py-4 font-body-md text-body-md text-on-surface focus:ring-2 focus:ring-primary/20 placeholder:text-outline outline-none resize-none flex-grow" id="message" placeholder="Tell us about your goals..." rows={4}></textarea>
                </div>
                
                {/* Feedback Message */}
                {status === "success" && (
                  <div className="text-green-600 font-body-md px-2">Your request has been transmitted successfully!</div>
                )}
                {status === "error" && (
                  <div className="text-red-500 font-body-md px-2">There was an error transmitting your request. Please try again later.</div>
                )}

                {/* Submit Button */}
                <div className="mt-4 flex justify-end">
                  <button disabled={status === "loading"} className="bg-primary text-on-primary font-label-caps text-label-caps px-10 py-5 rounded-full shadow-[15px_15px_30px_rgba(0,27,181,0.2),-5px_-5px_15px_rgba(255,255,255,0.5),inset_2px_2px_5px_rgba(255,255,255,0.3),inset_-2px_-2px_5px_rgba(0,0,0,0.1)] active:shadow-[inset_5px_5px_10px_rgba(0,0,0,0.2),inset_-5px_-5px_10px_rgba(255,255,255,0.1)] hover:scale-105 active:scale-98 transition-all duration-300 flex items-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed" type="submit">
                    {status === "loading" ? "Transmitting..." : "Transmit Request"}
                    <span className="material-symbols-outlined text-sm">send</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Trust / Testimonial */}
        <section className="max-w-4xl mx-auto py-16 border-t border-outline-variant/30 flex flex-col items-center text-center">
          <span className="material-symbols-outlined text-primary mb-6 text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
          <p className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface mb-8 italic text-opacity-80">
            "TecWrites didn't just build our platform; they molded a digital experience that feels entirely human."
          </p>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-surface-container-lowest shadow-clay-inset overflow-hidden">
              <img
                className="w-full h-full object-cover opacity-80 mix-blend-multiply"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwh4ups9242JGV2N4nc5ZWZD90HMjQ2HymLVU3YZKOJlryYpcOv5N7X13JJzF8eh8PDpN6JDEsRbX6st_kPYYyupWjIzDbe2prrJJ8CFfvdKlhDMki82Kr0e38Ew8HTScM_z4arl6WkfW_ECIt3maRWomypro-LkcaG8jhDVeu3Oq1AhFoDOVuuIvcFYdgSmXskgYCoteQHqxzeMx9WXhAouB13lQRE8EXfvvjvq1gNsOEhyGReCmD"
                alt="Alex Mercer"
              />
            </div>
            <div className="text-left">
              <p className="font-body-md text-body-md font-bold">Alex Mercer</p>
              <p className="text-label-caps font-label-caps text-on-surface-variant">CTO, Vertex Innovations</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

