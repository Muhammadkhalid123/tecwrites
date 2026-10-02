import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import SchemaMarkup from "@/components/SchemaMarkup";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Integration Services: Chatbots, LLMs & RAG | TecWrites",
  description: "Custom AI integration services in the USA: chatbots, LLM fine-tuning, RAG databases, and recommendation features built into products people enjoy using. Request a quote.",
  keywords: [
    "AI Integration Services",
    "custom AI development services",
    "AI chatbot development",
    "LLM fine-tuning services",
    "RAG development services",
    "AI-integrated products",
    "enterprise AI assistants",
    "recommendation engine development",
    "natural language interface for business data"
  ],
  alternates: {
    canonical: "https://www.tecwrites.com/services/ai"
  },
  openGraph: {
    title: "AI Integration Services: Chatbots, LLMs & RAG | TecWrites",
    description: "Custom AI integration services in the USA: chatbots, LLM fine-tuning, RAG databases, and recommendation features built into products people enjoy using.",
    url: "https://www.tecwrites.com/services/ai",
    type: "website",
    images: [
      {
        url: "/services/AI & Intelligence.png",
        width: 1200,
        height: 630,
        alt: "AI Integration Services by TecWrites",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Integration Services: Chatbots, LLMs & RAG | TecWrites",
    description: "Custom AI integration services in the USA: chatbots, LLM fine-tuning, RAG databases, and recommendation features.",
    images: ["/services/AI & Intelligence.png"],
  }
};

export default function AIServicesPage() {
  const serviceIncludes = [
    {
      title: "AI Chatbot & Assistant Development",
      description: "Conversational assistants for support, onboarding, sales, or internal teams, purposefully designed to answer directly from your own proprietary content."
    },
    {
      title: "Custom LLM Fine-Tuning",
      description: "Adapting foundational large language models to your specific business domain, tone, formatting requirements, and workflows so outputs fit your brand."
    },
    {
      title: "RAG (Retrieval-Augmented Generation) Databases",
      description: "Connecting a language model to your internal documents and knowledge bases so answers are grounded in verifiable facts rather than hallucinations."
    },
    {
      title: "Intelligent Recommendation Features",
      description: "Personalized suggestions for content, products, or next actions engineered directly into your web or mobile user journey."
    },
    {
      title: "Custom AI APIs",
      description: "Clean, well-documented API endpoints so intelligent AI capabilities plug smoothly into your existing application stack, CRM, or automated workflow."
    },
    {
      title: "Natural Language Interfaces Over Business Data",
      description: "Allowing team members and stakeholders to query complex data in plain English instead of digging through rigid dashboards and legacy silos."
    }
  ];

  const whyChoosePoints = [
    {
      title: "AI Built Into the Product, Not Bolted On",
      description: "We design the intelligence, user interface, and cloud backend together so AI feels like an intuitive, natural extension of your product."
    },
    {
      title: "Grounded in Your Proprietary Data",
      description: "We build advanced semantic retrieval and evaluation pipelines so responses stay strictly tied to your verified information. We test thoroughly before launch and establish continuous feedback loops."
    },
    {
      title: "Interfaces That Make AI Usable",
      description: "A powerful model is wasted behind a confusing screen. We design tactile, fluid, and responsive interfaces around every AI interaction."
    },
    {
      title: "Production-Ready Engineering",
      description: "APIs, vector database hosting, and high-availability deployments are handled alongside model engineering, supported by our dedicated cloud infrastructure and DevOps team.",
      linkText: "Read: Transforming Web Dev with AI",
      href: "/blog/ai-solutions-transforming-web-development"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Alignment",
      description: "We identify the specific use case where AI creates tangible business value and define precise metrics for measuring success."
    },
    {
      step: "02",
      title: "Strategy & Architecture",
      description: "We plan data pipelines, model approach, vector retrieval systems, API boundaries, and the UI wrapper around the feature."
    },
    {
      step: "03",
      title: "Creation & Engineering",
      description: "We build, evaluate, and benchmark the AI system against realistic production queries and complex edge cases."
    },
    {
      step: "04",
      title: "Launch & Growth",
      description: "We deploy to production, monitor query accuracy and latency, and continuously refine embeddings as your data evolves."
    }
  ];

  const useCases = [
    {
      title: "Customer Support Assistants",
      desc: "Resolve routine customer inquiries 24/7 with accurate, instant answers drawn directly from your knowledge base."
    },
    {
      title: "Internal Knowledge Assistants",
      desc: "Empower employees to search through company documentation, handbooks, and wiki archives in seconds."
    },
    {
      title: "Plain-Language Analytics",
      desc: "Transform SQL databases and spreadsheet silos into interactive chat interfaces that answer questions on demand."
    },
    {
      title: "Personalized Recommendations",
      desc: "Deliver personalized user recommendations in e-commerce, content publishing, and SaaS applications."
    }
  ];

  const faqs = [
    {
      question: "What is RAG and why does it matter?",
      answer: "RAG stands for Retrieval-Augmented Generation. It allows an AI model to retrieve relevant chunks of information from your company documents before generating a response. This keeps outputs accurate, grounded in your real content, and eliminates hallucinations."
    },
    {
      question: "Can you add AI to my existing website or app?",
      answer: "In most cases, yes. We typically connect AI features to existing platforms via secure, custom REST/GraphQL APIs after reviewing your architecture."
    },
    {
      question: "How do you keep AI answers accurate?",
      answer: "We ground answers in your verified data using semantic search and vector databases, test rigorously against real user queries before launch, and implement guardrails and evaluation metrics."
    },
    {
      question: "Do you build custom chatbots?",
      answer: "Yes. We build purpose-driven chat assistants for customer support, sales qualification, user onboarding, and internal team operations."
    },
    {
      question: "How much do AI integration services cost?",
      answer: "Cost depends on the use case, data volume, model complexity, and integration requirements. Share your goals with us and we will scope a transparent plan and quote."
    }
  ];

  const technologies = [
    "OpenAI API",
    "Anthropic Claude",
    "LangChain",
    "LlamaIndex",
    "Python",
    "FastAPI",
    "Pinecone",
    "pgvector",
    "n8n Automation",
    "Next.js"
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://www.tecwrites.com"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Services",
                    "item": "https://www.tecwrites.com/services"
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "AI Services",
                    "item": "https://www.tecwrites.com/services/ai"
                  }
                ]
              },
              {
                "@type": "Service",
                "name": "AI Integration Services",
                "serviceType": "AI Solutions",
                "provider": {
                  "@type": "Organization",
                  "name": "TecWrites",
                  "url": "https://www.tecwrites.com"
                },
                "areaServed": "US",
                "description": "Custom AI integration services: chatbots, LLM fine-tuning, RAG databases, and recommendation features built into products people enjoy using."
              },
              {
                "@type": "FAQPage",
                "mainEntity": faqs.map((faq) => ({
                  "@type": "Question",
                  "name": faq.question,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.answer
                  }
                }))
              }
            ]
          })
        }}
      />
      <Header />
      <main className="flex-grow pt-32 pb-24 relative z-10 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        {/* Header Section */}
        <header className="text-center mb-20 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-secondary-fixed to-surface-container-lowest rounded-full shadow-[30px_30px_50px_rgba(0,0,0,0.05)] opacity-30 -z-10 mix-blend-multiply blur-[80px]"></div>
          <p className="font-label-caps text-label-caps text-[#006B5B] tracking-widest uppercase mb-4 opacity-80">
            INTELLIGENCE &amp; AUTOMATION
          </p>
          <h1 className="font-headline-xl text-headline-xl text-on-surface mb-6 mx-auto max-w-4xl leading-tight text-balance">
            AI Integration Services That Turn Your Data Into Intelligent Products
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-3xl mx-auto text-lg leading-relaxed mb-4">
            AI is easy to demo and hard to ship. Plenty of teams build a clever prototype that never becomes a dependable feature. TecWrites provides AI integration services for businesses that want real capabilities, not experiments: chat assistants that answer from your own data, custom LLM fine-tuning, RAG databases, and recommendation features that fit naturally inside your product.
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto text-base">
            We build AI-integrated products the way we build everything else: with strong engineering underneath and an interface people actually want to use.
          </p>
        </header>

        {/* What Our Services Include */}
        <section className="mb-24 max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-label-caps text-label-caps text-[#006B5B] uppercase tracking-wider mb-2">INTELLIGENT CAPABILITIES</p>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">
              What Our AI Integration Services Include
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {serviceIncludes.map((item, idx) => (
              <div
                key={idx}
                className="bg-surface rounded-2xl p-8 shadow-clay hover:-translate-y-1 transition-transform duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="material-symbols-outlined text-[#006B5B] text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                      check_circle
                    </span>
                    <h3 className="font-headline-sm text-xl font-bold text-on-surface">{item.title}</h3>
                  </div>
                  <p className="text-on-surface-variant font-body-md leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Fine-Tuning vs RAG Section */}
        <section className="mb-24 max-w-5xl mx-auto">
          <div className="bg-surface-container rounded-3xl p-8 md:p-12 shadow-clay border border-white/60">
            <div className="max-w-3xl mx-auto">
              <p className="font-label-caps text-label-caps text-[#006B5B] uppercase tracking-wider mb-2 text-center">ARCHITECTURE COMPARISON</p>
              <h2 className="font-headline-lg text-headline-lg text-on-surface text-center mb-6">
                Fine-Tuning vs RAG: Which Does Your Business Need?
              </h2>
              <p className="text-on-surface-variant font-body-md text-lg leading-relaxed mb-6">
                These two approaches solve different problems, and many high-performing projects use both. <strong>Fine-tuning</strong> changes how a model behaves, shaping its style, format, and domain knowledge. <strong>RAG (Retrieval-Augmented Generation)</strong> changes what a model knows at the exact moment it answers, by retrieving relevant information from your verified documents first.
              </p>
              <p className="text-on-surface-variant font-body-md text-lg leading-relaxed">
                If your company content changes frequently or accuracy against source material is paramount, RAG is almost always the right starting point. If you need a distinct brand voice or consistent task behavior, fine-tuning adds significant value. We help you choose the ideal balance during our discovery call.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose TecWrites for AI */}
        <section className="mb-24 max-w-5xl mx-auto">
          <div className="bg-surface-container-lowest rounded-3xl p-8 md:p-12 shadow-clay border border-white/60">
            <div className="text-center mb-12">
              <p className="font-label-caps text-label-caps text-[#006B5B] uppercase tracking-wider mb-2">THE TECWRITES ADVANTAGE</p>
              <h2 className="font-headline-lg text-headline-lg text-on-surface">
                Why Choose TecWrites for AI-Integrated Products
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {whyChoosePoints.map((point, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-[#006B5B]/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="material-symbols-outlined text-[#006B5B] text-[20px]">smart_toy</span>
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-lg font-bold text-on-surface mb-2">{point.title}</h3>
                    <p className="text-on-surface-variant font-body-md text-sm leading-relaxed mb-2">{point.description}</p>
                    {point.href && (
                      <Link href={point.href} className="text-[#006B5B] font-semibold text-sm inline-flex items-center gap-1 hover:underline">
                        {point.linkText} <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Process */}
        <section className="mb-24 max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="font-label-caps text-label-caps text-[#006B5B] uppercase tracking-wider mb-2">ENGINEERING TIMELINE</p>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">
              Our AI Development Process
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, idx) => (
              <div key={idx} className="bg-surface rounded-2xl p-6 shadow-clay relative flex flex-col justify-between">
                <div>
                  <span className="text-3xl font-black text-[#006B5B]/20 font-headline-xl block mb-3">{step.step}</span>
                  <h3 className="font-headline-sm text-lg font-bold text-on-surface mb-2">{step.title}</h3>
                  <p className="text-on-surface-variant font-body-md text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Common Use Cases */}
        <section className="mb-24 max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-label-caps text-label-caps text-[#006B5B] uppercase tracking-wider mb-2">REAL-WORLD APPLICATIONS</p>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">
              Common Use Cases for AI Integration
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {useCases.map((item, idx) => (
              <div key={idx} className="bg-surface rounded-2xl p-6 shadow-clay flex items-start gap-4">
                <span className="material-symbols-outlined text-[#006B5B] text-[24px] mt-1">check</span>
                <div>
                  <h3 className="font-headline-sm text-lg font-bold text-on-surface mb-1">{item.title}</h3>
                  <p className="text-on-surface-variant font-body-md text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technologies Grid */}
        <section className="mb-24 max-w-4xl mx-auto text-center">
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-8">Technologies We Use</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, idx) => (
              <span key={idx} className="px-5 py-2.5 bg-surface rounded-full shadow-clay-sm text-on-surface font-label-caps text-label-caps border border-white/50">
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section className="mb-24 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-label-caps text-label-caps text-[#006B5B] uppercase tracking-wider mb-2">QUESTIONS &amp; ANSWERS</p>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">
              Frequently Asked Questions About AI Integration
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-surface rounded-2xl p-6 shadow-clay-sm">
                <h3 className="font-headline-sm text-lg font-bold text-on-surface mb-2">{faq.question}</h3>
                <p className="text-on-surface-variant font-body-md leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Start Your AI Project / CTA */}
        <section className="max-w-4xl mx-auto text-center bg-surface-container-lowest rounded-3xl p-10 md:p-16 shadow-clay border border-white/60">
          <p className="font-label-caps text-label-caps text-[#006B5B] uppercase tracking-widest mb-3">GET STARTED</p>
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">
            Start Your AI Integration Project
          </h2>
          <p className="text-on-surface-variant font-body-md text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            The best AI projects begin with a specific problem, not a technology. Tell us what you want AI to do for your business, and we will show you what is realistic and how to build it well.
          </p>

          <p className="font-medium text-on-surface text-xl mb-6">Ready to add real AI to your product?</p>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-10 py-5 rounded-full bg-primary text-on-primary font-label-caps text-label-caps tracking-widest uppercase shadow-clay hover:scale-105 active:scale-95 transition-all duration-300 gap-3"
          >
            Talk to Our AI Team
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </Link>

          <div className="mt-10 pt-8 border-t border-outline-variant/30 flex flex-wrap justify-center items-center gap-3 text-xs font-label-caps text-on-surface-variant uppercase">
            <span>Related Services:</span>
            <Link href="/services/app" className="text-primary hover:underline">End-to-End App Dev</Link>
            <span>•</span>
            <Link href="/services/web-design" className="text-primary hover:underline">Web Design &amp; Development</Link>
            <span>•</span>
            <Link href="/services/devops" className="text-primary hover:underline">Cloud &amp; DevOps</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
