"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackgroundMotionSystem from "@/components/BackgroundMotionSystem";
import LenisProvider from "@/components/LenisProvider";
import {
  Sparkles,
  Mail,
  MapPin,
  Phone,
  Send,
  CheckCircle2,
  Clock,
  ChevronDown,
  ShieldCheck,
  Zap,
  Globe,
  Lock,
  MessageSquare
} from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How fast can we kick off a new project?",
    answer: "We typically evaluate inquiries within 24 hours and schedule a 30-minute technical scope call. Once the proposal and blueprint are approved, sprint 1 begins within 3 to 5 business days."
  },
  {
    question: "Do you sign mutual NDAs prior to discovery calls?",
    answer: "Absolutely. We respect client confidentiality and IP. We are happy to execute a standard mutual NDA before discussing proprietary workflows, manuscripts, or system architecture."
  },
  {
    question: "What is your primary engineering and publishing stack?",
    answer: "We build WebGL & Web platforms using Next.js 16, TypeScript, Three.js, GSAP, and TailwindCSS. Our AI pipelines run on Python (OpenAI GPT-4, Claude, LangChain, vector DBs). Our publishing division uses Kandle Media formatting for EPUB3, Amazon KDP, and hardcover print."
  },
  {
    question: "How are payment milestones structured?",
    answer: "Most custom engineering projects are billed in milestone phases (e.g., 30% blueprint & kickoff, 40% interactive staging demo, 30% final deployment & handoff). Retainers are billed monthly."
  },
  {
    question: "Will I have direct access to lead engineers?",
    answer: "Yes. Every client receives a dedicated Slack or Teams channel with direct access to lead engineers and project directors—no layers of account managers."
  }
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "AI & Automation",
    budget: "$10k - $25k",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", service: "AI & Automation", budget: "$10k - $25k", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <LenisProvider>
      <div className="page-accent-top" />
      <BackgroundMotionSystem />
      <Header />

      <main className="relative z-10 min-h-screen pt-36 pb-24 px-6 md:px-12 text-white">
        <div className="max-w-7xl mx-auto space-y-24">
          
          {/* ── 1. PAGE HERO HEADER ── */}
          <div className="flex flex-col space-y-6 max-w-4xl">
            <div className="page-enter inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#161F33] border border-[#12D6C4]/40 w-fit text-xs font-mono text-[#12D6C4] font-semibold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              <span>START A CONVERSATION</span>
            </div>

            <h1 className="page-enter page-enter-delay-1 font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95] text-white">
              <span className="block text-white">LET’S BUILD SOMETHING</span>
              <span className="block italic shimmer-text">EXTRAORDINARY.</span>
            </h1>

            <p className="page-enter page-enter-delay-2 text-gray-200 text-lg md:text-xl font-light leading-relaxed max-w-3xl">
              Have a project in mind, an AI automation goal, or a manuscript ready for self publishing? Send us an inquiry and our lead studio team will evaluate your scope within 24 hours.
            </p>
          </div>

          {/* ── 2. TWO-COLUMN CONTACT & FORM SECTION ── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-8 border-t border-gray-800">
            
            {/* COLUMN 1: DIRECT DETAILS & LOCATION */}
            <div className="lg:col-span-5 space-y-8">
              <div className="p-8 rounded-3xl bg-[#0D1322] border border-[#12D6C4]/35 space-y-6 shadow-2xl">
                <h2 className="font-serif text-2xl text-white font-semibold">Studio Direct Details</h2>

                <div className="space-y-5 text-sm font-sans font-light text-gray-200">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-[#12D6C4] shrink-0 mt-1" />
                    <div>
                      <span className="block text-white font-semibold mb-0.5">Los Angeles HQ</span>
                      <span>10880 Wilshire Blvd, Suite 1100<br />Los Angeles, CA 90024</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <Mail className="w-5 h-5 text-[#12D6C4] shrink-0" />
                    <div>
                      <span className="block text-white font-semibold mb-0.5">Email Inquiries</span>
                      <a href="mailto:writestec@gmail.com" className="hover:text-[#12D6C4] transition-colors font-medium text-white">
                        writestec@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <Phone className="w-5 h-5 text-[#12D6C4] shrink-0" />
                    <div>
                      <span className="block text-white font-semibold mb-0.5">Phone Hotline</span>
                      <span className="font-mono text-white">+1 (800) TEC-WRITES</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <Clock className="w-5 h-5 text-[#12D6C4] shrink-0" />
                    <div>
                      <span className="block text-white font-semibold mb-0.5">Response Time SLA</span>
                      <span>Within 24 business hours</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* TRUST BADGES & SECURITY PILLARS */}
              <div className="p-8 rounded-3xl bg-[#0D1322] border border-white/15 space-y-4 shadow-xl">
                <span className="text-xs font-mono text-[#12D6C4] uppercase tracking-widest font-bold">
                  STUDIO COMMITMENTS
                </span>
                <div className="space-y-3 text-xs font-mono text-gray-200">
                  <div className="flex items-center gap-2.5">
                    <Lock className="w-4 h-4 text-[#12D6C4]" />
                    <span>100% IP &amp; Source Code Ownership</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-[#12D6C4]" />
                    <span>Mutual NDA Standard on Request</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Zap className="w-4 h-4 text-[#12D6C4]" />
                    <span>Sub-100ms Page Load Guarantee</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <MessageSquare className="w-4 h-4 text-[#12D6C4]" />
                    <span>Direct Slack Channel Access</span>
                  </div>
                </div>
              </div>
            </div>

            {/* COLUMN 2: INTERACTIVE INQUIRY FORM */}
            <div className="lg:col-span-7">
              <div className="p-8 md:p-12 rounded-3xl bg-[#0D1322] border border-[#12D6C4]/35 shadow-2xl relative">
                {status === "success" ? (
                  <div className="py-16 text-center space-y-4">
                    <CheckCircle2 className="w-16 h-16 text-[#12D6C4] mx-auto animate-bounce" />
                    <h3 className="font-serif text-3xl text-white">Inquiry Received!</h3>
                    <p className="text-gray-300 max-w-md mx-auto font-light text-sm">
                      Thank you for reaching out. Our leads have received your scope details and will respond to <span className="text-[#12D6C4] font-mono">{formData.email}</span> within 24 hours.
                    </p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="mt-4 px-6 py-2.5 rounded-full bg-[#161F33] border border-[#12D6C4]/40 text-xs font-mono text-[#12D6C4] font-semibold"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <h2 className="font-serif text-2xl text-white font-semibold mb-6">Project Estimator &amp; Inquiry</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-mono text-gray-200 uppercase tracking-wider font-semibold mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Jane Doe"
                          className="w-full px-4 py-3 rounded-xl bg-[#161F33] border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-[#12D6C4] focus:ring-1 focus:ring-[#12D6C4] transition-colors text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono text-gray-200 uppercase tracking-wider font-semibold mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="jane@company.com"
                          className="w-full px-4 py-3 rounded-xl bg-[#161F33] border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-[#12D6C4] focus:ring-1 focus:ring-[#12D6C4] transition-colors text-sm"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-mono text-gray-200 uppercase tracking-wider font-semibold mb-2">
                          Primary Division
                        </label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#161F33] border border-gray-600 text-white focus:outline-none focus:border-[#12D6C4] focus:ring-1 focus:ring-[#12D6C4] transition-colors text-sm"
                        >
                          <option value="AI & Automation" className="bg-[#161F33] text-white">AI &amp; Automation</option>
                          <option value="Bespoke Web Engineering" className="bg-[#161F33] text-white">Bespoke Web Engineering</option>
                          <option value="Self Publishing Services" className="bg-[#161F33] text-white">Self Publishing Services</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-mono text-gray-200 uppercase tracking-wider font-semibold mb-2">
                          Estimated Budget
                        </label>
                        <select
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#161F33] border border-gray-600 text-white focus:outline-none focus:border-[#12D6C4] focus:ring-1 focus:ring-[#12D6C4] transition-colors text-sm"
                        >
                          <option value="Under $10k" className="bg-[#161F33] text-white">Under $10k</option>
                          <option value="$10k - $25k" className="bg-[#161F33] text-white">$10k - $25k</option>
                          <option value="$25k - $50k" className="bg-[#161F33] text-white">$25k - $50k</option>
                          <option value="$50k+" className="bg-[#161F33] text-white">$50k+</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-gray-200 uppercase tracking-wider font-semibold mb-2">
                        Project Overview &amp; Requirements *
                      </label>
                      <textarea
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Briefly outline your goals, target launch timeline, and core requirements..."
                        className="w-full px-4 py-3 rounded-xl bg-[#161F33] border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-[#12D6C4] focus:ring-1 focus:ring-[#12D6C4] transition-colors text-sm resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="liquid-cta-btn w-full py-4 rounded-xl font-syne text-xs uppercase tracking-widest font-bold text-white flex items-center justify-center gap-3 shadow-xl"
                    >
                      <span>{status === "submitting" ? "Transmitting Scope..." : "Transmit Scope Inquiry"}</span>
                      <Send className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>

          {/* ── 3. ENGAGEMENT WORKFLOW STEPS SECTION ── */}
          <div className="space-y-12 pt-12 border-t border-gray-800">
            <div className="flex flex-col space-y-3 text-center md:text-left">
              <span className="text-xs font-mono tracking-widest text-[#12D6C4] uppercase font-bold">CLIENT ONBOARDING WORKFLOW</span>
              <h2 className="font-serif text-3xl md:text-5xl text-white font-normal">Four Simple Steps From Inquiry To Kickoff</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: "01", title: "Direct Scope Inquiry", desc: "Submit your details using our form or email writestec@gmail.com directly with project notes." },
                { step: "02", title: "30-Min Scope Call", desc: "We review your requirements and align on architecture, technical feasibility, and goals." },
                { step: "03", title: "Fixed Proposal & NDA", desc: "You receive a comprehensive blueprint document with fixed milestone pricing and signed NDA." },
                { step: "04", title: "Sprint 1 Kickoff", desc: "Engineering starts within 3-5 days. You gain direct access to our Slack channel and weekly staging builds." },
              ].map((w, idx) => (
                <div key={idx} className="p-8 rounded-2xl bg-[#0D1322] border border-gray-700 space-y-4 shadow-xl relative group hover:border-[#12D6C4]/40 transition-all duration-300">
                  <span className="font-mono text-3xl font-bold text-[#12D6C4]">{w.step}</span>
                  <h3 className="font-serif text-xl text-white font-semibold">{w.title}</h3>
                  <p className="text-gray-300 text-xs font-light leading-relaxed">{w.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── 4. GLOBAL STUDIO HUBS SECTION ── */}
          <div className="space-y-12 pt-12 border-t border-gray-800">
            <div className="flex flex-col space-y-3 text-center md:text-left">
              <span className="text-xs font-mono tracking-widest text-[#12D6C4] uppercase font-bold">GLOBAL PRESENCE</span>
              <h2 className="font-serif text-4xl md:text-5xl text-white font-normal">Studio Locations &amp; Timezone Support</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-3xl bg-[#0D1322] border border-white/15 space-y-5 shadow-2xl">
                <div className="w-12 h-12 rounded-xl bg-[#161F33] border border-[#12D6C4]/30 flex items-center justify-center text-[#12D6C4]">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl text-white font-semibold">Los Angeles HQ</h3>
                <p className="text-gray-300 text-xs leading-relaxed font-light">
                  10880 Wilshire Blvd, Suite 1100<br />Los Angeles, CA 90024
                </p>
                <div className="pt-2 text-xs font-mono text-[#12D6C4] font-semibold">TIMEZONE :: PST (UTC-8)</div>
              </div>

              <div className="p-8 rounded-3xl bg-[#0D1322] border border-white/15 space-y-5 shadow-2xl">
                <div className="w-12 h-12 rounded-xl bg-[#161F33] border border-[#1E8FBF]/40 flex items-center justify-center text-[#1E8FBF]">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl text-white font-semibold">London Studio</h3>
                <p className="text-gray-300 text-xs leading-relaxed font-light">
                  10 York Rd, Waterloo<br />London SE1 7ND, UK
                </p>
                <div className="pt-2 text-xs font-mono text-[#1E8FBF] font-semibold">TIMEZONE :: GMT (UTC+0)</div>
              </div>

              <div className="p-8 rounded-3xl bg-[#0D1322] border border-white/15 space-y-5 shadow-2xl">
                <div className="w-12 h-12 rounded-xl bg-[#161F33] border border-[#12D6C4]/30 flex items-center justify-center text-[#12D6C4]">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl text-white font-semibold">Global Remote Operations</h3>
                <p className="text-gray-300 text-xs leading-relaxed font-light">
                  Distributed engineering team operating across US, EU, and APAC timezones for 24/7 client response.
                </p>
                <div className="pt-2 text-xs font-mono text-[#12D6C4] font-semibold">AVAILABILITY :: 24/7 SLA</div>
              </div>
            </div>
          </div>

          {/* ── 5. INTERACTIVE FAQ ACCORDION SECTION ── */}
          <div className="space-y-12 pt-12 border-t border-gray-800">
            <div className="flex flex-col space-y-3 text-center md:text-left">
              <span className="text-xs font-mono tracking-widest text-[#12D6C4] uppercase font-bold">FREQUENTLY ASKED QUESTIONS</span>
              <h2 className="font-serif text-4xl md:text-5xl text-white font-normal">Common Inquiry Clarifications</h2>
            </div>

            <div className="space-y-4 max-w-4xl mx-auto">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;

                return (
                  <div
                    key={idx}
                    className="rounded-2xl bg-[#0D1322] border border-gray-700 overflow-hidden shadow-xl transition-colors duration-300"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full px-6 py-5 flex items-center justify-between text-left font-serif text-lg text-white font-medium hover:text-[#12D6C4] transition-colors"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-[#12D6C4] transition-transform duration-300 shrink-0 ml-4 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-6 pt-2 text-gray-300 text-sm font-light leading-relaxed border-t border-gray-800/80">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </LenisProvider>
  );
}
