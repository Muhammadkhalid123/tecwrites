"use client";

import { useState } from "react";

export default function ContactSection() {
  const [activeService, setActiveService] = useState("UX Writing");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const services = ["UX Writing", "Documentation", "Content Strategy", "Other"];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    
    setStatus("loading");
    
    const nameParts = name.trim().split(" ");
    const firstName = nameParts[0] || "";
    const lastName = nameParts.length > 1 ? nameParts.slice(1).join(" ") : "-";

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          service: activeService,
          message
        })
      });

      if (res.ok) {
        setStatus("success");
        setName("");
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
    <div className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
        {/* Left: Hero Text & Info */}
        <div className="lg:col-span-5 space-y-8 pr-0 lg:pr-8">
          <div>
            <h1 className="text-headline-xl font-headline-xl text-primary mb-4">Let's craft <br/>something <br/>together.</h1>
            <p className="text-body-md font-body-md text-on-surface-variant max-w-md">
              Whether you need technical documentation, UX writing, or a complete content overhaul, our studio is ready to mold your ideas into reality.
            </p>
          </div>
          <div className="space-y-6 pt-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-primary shadow-[4px_4px_8px_rgba(0,0,0,0.05),inset_1px_1px_2px_rgba(255,255,255,0.8),inset_-1px_-1px_2px_rgba(0,0,0,0.02)]">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>mail</span>
              </div>
              <div>
                <h3 className="text-label-caps font-label-caps text-on-surface-variant mb-1">EMAIL US</h3>
                <p className="text-body-md font-body-md text-on-surface font-medium">info@tecwrites.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-primary shadow-[4px_4px_8px_rgba(0,0,0,0.05),inset_1px_1px_2px_rgba(255,255,255,0.8),inset_-1px_-1px_2px_rgba(0,0,0,0.02)]">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
              </div>
              <div>
                <h3 className="text-label-caps font-label-caps text-on-surface-variant mb-1">VISIT THE LAB</h3>
                <p className="text-body-md font-body-md text-on-surface font-medium">31 Gourdon Ct<br/>Lake St. Louis, MO 63367</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-primary shadow-[4px_4px_8px_rgba(0,0,0,0.05),inset_1px_1px_2px_rgba(255,255,255,0.8),inset_-1px_-1px_2px_rgba(0,0,0,0.02)]">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
              </div>
              <div>
                <h3 className="text-label-caps font-label-caps text-on-surface-variant mb-1">CALL US</h3>
                <p className="text-body-md font-body-md text-on-surface font-medium">+1(888) 921 3331</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Contact Form Panel */}
        <div className="lg:col-span-7 mt-12 lg:mt-0">
          <div className="bg-surface-container rounded-[2.5rem] p-8 md:p-12 shadow-[20px_20px_40px_rgba(0,0,0,0.05),inset_2px_2px_4px_rgba(255,255,255,0.5),inset_-2px_-2px_4px_rgba(0,0,0,0.02)]">
            <form className="space-y-8" onSubmit={handleSubmit}>
              {/* Name & Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2 flex flex-col">
                  <label className="text-label-caps font-label-caps text-on-surface-variant ml-4" htmlFor="name">YOUR NAME</label>
                  <input required value={name} onChange={(e) => setName(e.target.value)} className="w-full h-14 rounded-full px-6 text-body-md font-body-md text-on-surface placeholder:text-outline border-none bg-surface shadow-[inset_4px_4px_8px_rgba(0,0,0,0.06),inset_-4px_-4px_8px_rgba(255,255,255,0.8)] focus:outline-none focus:ring-0 focus:shadow-[inset_6px_6px_10px_rgba(0,0,0,0.08),inset_-6px_-6px_10px_rgba(255,255,255,0.9)]" id="name" placeholder="Jane Doe" type="text"/>
                </div>
                <div className="space-y-2 flex flex-col">
                  <label className="text-label-caps font-label-caps text-on-surface-variant ml-4" htmlFor="email">EMAIL ADDRESS</label>
                  <input required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full h-14 rounded-full px-6 text-body-md font-body-md text-on-surface placeholder:text-outline border-none bg-surface shadow-[inset_4px_4px_8px_rgba(0,0,0,0.06),inset_-4px_-4px_8px_rgba(255,255,255,0.8)] focus:outline-none focus:ring-0 focus:shadow-[inset_6px_6px_10px_rgba(0,0,0,0.08),inset_-6px_-6px_10px_rgba(255,255,255,0.9)]" id="email" placeholder="jane@company.com" type="email"/>
                </div>
              </div>
              
              {/* Service Selector */}
              <div className="space-y-4">
                <label className="text-label-caps font-label-caps text-on-surface-variant ml-4">WHAT DO YOU NEED HELP WITH?</label>
                <div className="flex flex-wrap gap-4">
                  {services.map((service) => (
                    <button
                      key={service}
                      type="button"
                      onClick={() => setActiveService(service)}
                      className={`px-6 py-3 rounded-full text-label-caps font-label-caps transition-all duration-200 ${
                        activeService === service
                          ? "bg-primary text-on-primary shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1),inset_-4px_-4px_8px_rgba(255,255,255,0.5)]"
                          : "bg-surface text-on-surface-variant shadow-[4px_4px_8px_rgba(0,0,0,0.05),inset_1px_1px_2px_rgba(255,255,255,0.8),inset_-1px_-1px_2px_rgba(0,0,0,0.02)] hover:text-primary"
                      }`}
                    >
                      {service}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Message Area */}
              <div className="space-y-2 flex flex-col">
                <label className="text-label-caps font-label-caps text-on-surface-variant ml-4" htmlFor="message">YOUR MESSAGE</label>
                <textarea required value={message} onChange={(e) => setMessage(e.target.value)} className="w-full rounded-[2rem] p-6 text-body-md font-body-md text-on-surface placeholder:text-outline border-none bg-surface shadow-[inset_4px_4px_8px_rgba(0,0,0,0.06),inset_-4px_-4px_8px_rgba(255,255,255,0.8)] focus:outline-none focus:ring-0 focus:shadow-[inset_6px_6px_10px_rgba(0,0,0,0.08),inset_-6px_-6px_10px_rgba(255,255,255,0.9)] resize-none" id="message" placeholder="Tell us about your project..." rows={4}></textarea>
              </div>
              
              {/* Feedback Message */}
              {status === "success" && (
                <div className="text-green-600 font-body-md px-4">Your message has been sent successfully!</div>
              )}
              {status === "error" && (
                <div className="text-red-500 font-body-md px-4">There was an error sending your message. Please try again later.</div>
              )}

              {/* Submit Button */}
              <div className="pt-4 flex justify-end">
                <button disabled={status === "loading"} className="bg-primary text-on-primary px-10 py-4 rounded-full text-label-caps font-label-caps flex items-center gap-2 shadow-[8px_8px_16px_rgba(0,0,0,0.1),inset_2px_2px_4px_rgba(255,255,255,0.3),inset_-2px_-2px_4px_rgba(0,0,0,0.1)] hover:shadow-[12px_12px_20px_rgba(0,0,0,0.15),inset_2px_2px_4px_rgba(255,255,255,0.4),inset_-2px_-2px_4px_rgba(0,0,0,0.15)] hover:-translate-y-0.5 active:shadow-[4px_4px_8px_rgba(0,0,0,0.05),inset_4px_4px_8px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.2)] active:translate-y-0.5 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed" type="submit">
                  {status === "loading" ? "Sending..." : "Send Message"}
                  <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>send</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

