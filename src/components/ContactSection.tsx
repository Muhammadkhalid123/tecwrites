"use client";

import { useState } from "react";
import confetti from "canvas-confetti";
import { Send, Mail, MapPin, Phone, CheckCircle2, Loader2, Sparkles } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    service: "AI & Automation",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitted(true);
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.8 },
          colors: ["#1F2E8C", "#1E8FBF", "#12D6C4", "#5CF2E0"],
        });
      } else {
        const data = await res.json();
        setErrorMsg(data.error || "Failed to send message. Please try again.");
      }
    } catch {
      setErrorMsg("An unexpected error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative w-full bg-[#0A0E1A] text-white py-28 px-6 md:px-12 overflow-hidden border-t border-[#12D6C4]/20 select-none">
      
      {/* Background Motif Image */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none transform-gpu">
        <img
          src="/BG/ChatGPT Image Aug 1, 2026, 10_44_38 AM.png"
          alt=""
          decoding="async"
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-30 brightness-90 transform-gpu translate-z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0E1A]/95 via-[#0A0E1A]/85 to-[#0A0E1A]/95 backdrop-blur-[2px]" />
      </div>

      {/* Soft Ambient Radial Spotlight */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-[0.14] pointer-events-none z-[1]"
        style={{
          background: "radial-gradient(circle, #12D6C4 0%, #1E8FBF 50%, #1F2E8C 100%)",
          filter: "blur(90px)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-[#12D6C4]/30 text-xs font-mono text-[#12D6C4] font-semibold uppercase tracking-widest backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 animate-pulse text-[#12D6C4]" />
            <span>START A CONVERSATION</span>
          </div>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Direct Studio Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md space-y-6 shadow-2xl">
              <h3 className="font-serif text-2xl text-white font-semibold">Studio Operations</h3>
              <p className="text-gray-400 font-light text-sm leading-relaxed">
                We partner with high-growth technology brands, publishers, and enterprise leaders worldwide.
              </p>

              <div className="space-y-5 pt-2 text-sm font-sans text-gray-200">
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-[#12D6C4]/15 border border-[#12D6C4]/30 flex items-center justify-center text-[#12D6C4] group-hover:scale-110 transition-transform">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono text-gray-400 uppercase">DIRECT EMAIL</span>
                    <a href="mailto:writestec@gmail.com" className="text-white font-medium hover:text-[#12D6C4] transition-colors">
                      writestec@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-[#12D6C4]/15 border border-[#12D6C4]/30 flex items-center justify-center text-[#12D6C4] group-hover:scale-110 transition-transform">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono text-gray-400 uppercase">LOCATION</span>
                    <span className="text-white font-medium">Los Angeles, CA &amp; Global Remote</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-[#12D6C4]/15 border border-[#12D6C4]/30 flex items-center justify-center text-[#12D6C4] group-hover:scale-110 transition-transform">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono text-gray-400 uppercase">INQUIRIES</span>
                    <span className="text-white font-medium">+1 (800) TEC-WRITES</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7 bg-[#0D1322] p-8 md:p-10 rounded-3xl border border-[#12D6C4]/35 shadow-2xl relative">
            {submitted ? (
              <div className="p-10 rounded-2xl bg-[#12D6C4]/10 border border-[#12D6C4]/30 text-center space-y-4 animate-in fade-in duration-500">
                <CheckCircle2 className="w-12 h-12 text-[#12D6C4] mx-auto animate-bounce" />
                <h4 className="font-syne font-bold text-2xl text-white">Inquiry Received</h4>
                <p className="text-sm text-gray-300 max-w-md mx-auto">
                  Thank you for reaching out. Our leads will review your inquiry and contact you at <span className="text-[#12D6C4] font-mono">{formData.email}</span> within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono uppercase text-gray-200 font-semibold mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      placeholder="Jane"
                      className="w-full px-4 py-3 rounded-xl bg-[#161F33] border border-gray-600 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#12D6C4] focus:ring-1 focus:ring-[#12D6C4] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-gray-200 font-semibold mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      placeholder="Doe"
                      className="w-full px-4 py-3 rounded-xl bg-[#161F33] border border-gray-600 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#12D6C4] focus:ring-1 focus:ring-[#12D6C4] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono uppercase text-gray-200 font-semibold mb-2">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#161F33] border border-gray-600 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#12D6C4] focus:ring-1 focus:ring-[#12D6C4] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-gray-200 font-semibold mb-2">
                      Service Pillar
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#161F33] border border-gray-600 text-sm text-white focus:outline-none focus:border-[#12D6C4] focus:ring-1 focus:ring-[#12D6C4] transition-colors"
                    >
                      <option value="AI & Automation" className="bg-[#161F33] text-white">AI &amp; Automation</option>
                      <option value="Bespoke Web Design" className="bg-[#161F33] text-white">Bespoke Web Design</option>
                      <option value="Publishing & Ebooks" className="bg-[#161F33] text-white">Publishing &amp; Ebooks</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-gray-200 font-semibold mb-2">
                    Project Message *
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly describe your goals, scope, and target launch timeline..."
                    className="w-full px-4 py-3 rounded-xl bg-[#161F33] border border-gray-600 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#12D6C4] focus:ring-1 focus:ring-[#12D6C4] transition-colors resize-none"
                  />
                </div>

                {errorMsg && <p className="text-xs text-red-400 font-mono">{errorMsg}</p>}

                <button
                  type="submit"
                  disabled={loading}
                  className="liquid-cta-btn w-full py-4 rounded-xl font-syne text-xs uppercase tracking-widest font-bold text-white flex items-center justify-center gap-2 shadow-lg shadow-[#1F2E8C]/30 hover:shadow-[#12D6C4]/50"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-white" />
                      <span className="text-white">Transmitting Inquiry...</span>
                    </>
                  ) : (
                    <>
                      <span className="text-white">Transmit Request</span>
                      <Send className="w-4 h-4 relative z-10 text-white" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
