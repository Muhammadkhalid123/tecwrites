import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import SchemaMarkup from "@/components/SchemaMarkup";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Automation Services & Solutions | TecWrites",
  description: "TecWrites provides bespoke AI automation services, custom LLM integrations, and automated workflow pipelines to streamline your operations.",
  alternates: {
    canonical: 'https://tecwrites.com/services/ai'
  }
};

export default function AIServicesPage() {
  const sections = [
    {
      title: "1. AI Strategy & Consulting",
      description: "Before building models or automating systems, we help align AI initiatives with bottom-line business outcomes:",
      items: [
        { name: "AI Readiness Assessment", desc: "Auditing existing tech stacks, data pipelines, and team workflows to determine high-ROI AI opportunities." },
        { name: "Vendor & Tool Selection", desc: "Choosing the optimal stack (e.g., OpenAI, Anthropic, open-source models like Llama, or orchestration tools like n8n/LangChain) based on cost, latency, and privacy requirements." },
        { name: "Use Case Prioritization", desc: "Scoping projects to focus on quick wins (e.g., customer support automation) before scaling to enterprise-wide solutions." }
      ]
    },
    {
      title: "2. Autonomous AI Agents & Workflow Automation",
      description: "Building intelligent systems that can plan, execute multi-step tasks, and make contextual decisions without constant human intervention:",
      items: [
        { name: "Custom AI Agents", desc: "Developing autonomous agents for specific roles like lead qualification, IT support, or complex research." },
        { name: "Voice & Chat Conversational AI", desc: "Deploying natural voice agents (via ElevenLabs, Vapi) for inbound call centers and outbound scheduling, or building WhatsApp and web agents." },
        { name: "Agentic Workflows", desc: "Connecting tools like CRMs, databases, and APIs using orchestration platforms (n8n, Make) so AI can read, reason, and trigger real-world actions." }
      ]
    },
    {
      title: "3. Custom Model Development & Fine-Tuning",
      description: "When off-the-shelf AI models are insufficient or unsafe for confidential data:",
      items: [
        { name: "Fine-Tuning LLMs", desc: "Customizing open-source or proprietary models on company data so they adopt specific brand voices, terminology, and domain knowledge." },
        { name: "Retrieval-Augmented Generation (RAG)", desc: "Connecting LLMs to private knowledge bases, PDFs, and internal company wikis for accurate, grounded search and Q&A without hallucinations." },
        { name: "Custom Machine Learning Models", desc: "Building predictive models for demand forecasting, fraud detection, customer churn, or recommendation engines." }
      ]
    },
    {
      title: "4. AI-Driven Product & Software Development",
      description: "Embedding AI into custom applications and digital platforms:",
      items: [
        { name: "Full-Stack AI Software", desc: "Building web and mobile applications with native AI capabilities (e.g., AI co-pilots, automated content generators, intelligent dashboards)." },
        { name: "Computer Vision Systems", desc: "Implementing image and video processing models for quality control, facial recognition, inventory tracking, or document scanning." },
        { name: "API & Infrastructure Integration", desc: "Embedding model endpoints directly into legacy enterprise systems (ERP, CRM, custom databases)." }
      ]
    },
    {
      title: "5. Modern Digital Marketing & Generative Engine Optimization (GEO)",
      description: "Upgrading traditional marketing channels to succeed in an AI-first search and content landscape:",
      items: [
        { name: "Generative Engine Optimization (GEO)", desc: "Optimizing brand content so it is cited and recommended by AI answer engines (ChatGPT, Perplexity, Gemini, Google SGE)." },
        { name: "Automated Content Pipelines", desc: "Setting up human-in-the-loop content systems to generate hyper-personalized copy, images, and video assets at scale." },
        { name: "AI Personalization & Ad Optimization", desc: "Using AI to dynamically adjust ad creatives, email messaging, and web pages based on visitor behavior." }
      ]
    },
    {
      title: "6. AI Governance, Security & Maintenance",
      description: "Ensuring AI implementations are secure, compliant, and reliable over time:",
      items: [
        { name: "Guardrails & Alignment", desc: "Installing safety mechanisms to prevent AI hallucinations, prompt injection attacks, and leaking sensitive customer data." },
        { name: "Compliance & Ethics Audits", desc: "Ensuring systems adhere to regulations like the EU AI Act, HIPAA, SOC 2, and GDPR." },
        { name: "Model Monitoring & Retraining", desc: "Tracking drift, latency, token usage costs, and accuracy over time to keep production models performing reliably." }
      ]
    }
  ];

  return (
    <>
      <SchemaMarkup
        type="Service"
        data={{
          name: "AI Automation Services",
          description: "Custom AI integrations, LLM fine-tuning, and automated workflow pipelines.",
          provider: {
            "@type": "Organization",
            name: "TecWrites"
          },
          serviceType: "AI Solutions"
        }}
      />
      <Header />
      <main className="flex-grow pt-32 pb-24 relative z-10 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        {/* Header Section */}
        <header className="text-center mb-24 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-primary-fixed to-surface-container-lowest rounded-full shadow-[30px_30px_50px_rgba(0,0,0,0.05)] opacity-30 -z-10 mix-blend-multiply blur-[80px]"></div>
          <p className="font-label-caps text-label-caps text-primary tracking-widest uppercase mb-4 opacity-80">SERVICE DEEP DIVE</p>
          <h1 className="font-headline-xl text-headline-xl text-on-surface mb-6 mx-auto max-w-4xl leading-tight text-balance">
            AI Automation Services
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto text-lg">
            From strategic consulting to autonomous agents and fine-tuned models, we build intelligent systems that drive real business outcomes.
          </p>
        </header>

        {/* Services List */}
        <div className="space-y-12 max-w-4xl mx-auto">
          {sections.map((section, idx) => (
            <article key={idx} className="bg-surface rounded-[2rem] p-8 md:p-12 shadow-clay relative group transition-transform duration-300 hover:-translate-y-1">
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">{section.title}</h2>
              <p className="text-on-surface-variant font-body-md text-lg mb-8">{section.description}</p>
              
              <ul className="space-y-6">
                {section.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-[#006B5B] mt-1 text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                      check_circle
                    </span>
                    <div>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface mb-1">{item.name}</h3>
                      <p className="font-body-md text-on-surface-variant">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-24 text-center">
          <Link href="/contact" className="inline-flex items-center justify-center px-10 py-5 rounded-full bg-primary text-on-primary font-label-caps text-label-caps tracking-widest uppercase shadow-clay hover:scale-105 active:scale-95 transition-all duration-300 gap-3">
            Start Your AI Initiative
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
