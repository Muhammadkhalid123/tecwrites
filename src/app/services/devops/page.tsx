import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import SchemaMarkup from "@/components/SchemaMarkup";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cloud & DevOps Services: AWS, GCP, Terraform",
  description: "Cloud infrastructure and DevOps services: AWS and GCP automation, Terraform, secure CI/CD, Docker, and cloud cost audits. Request a quote from TecWrites.",
  keywords: [
    "Cloud Infrastructure and DevOps Services",
    "AWS DevOps services",
    "GCP automation",
    "Terraform infrastructure as code",
    "CI/CD pipeline setup",
    "Docker container orchestration",
    "cloud cost optimization",
    "cloud cost audit",
    "DevOps consulting services"
  ],
  alternates: {
    canonical: "https://www.tecwrites.com/services/devops"
  },
  openGraph: {
    title: "Cloud & DevOps Services: AWS, GCP, Terraform | TecWrites",
    description: "Cloud infrastructure and DevOps services: AWS and GCP automation, Terraform, secure CI/CD, Docker, and cloud cost audits. Request a quote from TecWrites.",
    url: "https://www.tecwrites.com/services/devops",
    type: "website",
    images: [
      {
        url: "/services/DevOps & Scaling (Cloud Infrastructure).png",
        width: 1200,
        height: 630,
        alt: "Cloud Infrastructure and DevOps Services by TecWrites",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cloud & DevOps Services: AWS, GCP, Terraform | TecWrites",
    description: "Cloud infrastructure and DevOps services: AWS and GCP automation, Terraform, secure CI/CD, Docker, and cloud cost audits.",
    images: ["/services/DevOps & Scaling (Cloud Infrastructure).png"],
  }
};

export default function DevOpsServicesPage() {
  const serviceIncludes = [
    {
      title: "AWS & GCP Automation",
      description: "Repeatable, scripted cloud environments instead of manual server configurations that drift, break, and create security holes over time."
    },
    {
      title: "Infrastructure as Code with Terraform",
      description: "Your entire infrastructure defined in modular, version-controlled code so environments can be recreated in minutes, reviewed in PRs, and deployed safely."
    },
    {
      title: "Secure CI/CD Pipelines",
      description: "Automated GitHub Actions and GitLab CI workflows with integrated unit testing, dependency scanning, and zero-downtime deployment stages."
    },
    {
      title: "Docker & Container Orchestration",
      description: "Containerized applications using Docker and Kubernetes (K8s) that run identically across local development, staging, and production environments."
    },
    {
      title: "Cloud Cost Optimization Audits",
      description: "A comprehensive line-by-line review of your running cloud resources, database sizing, and network usage to eliminate waste and reduce host bills."
    },
    {
      title: "Standalone Cloud Audits",
      description: "If you only need an assessment, we can review your current cloud setup and deliver an actionable engineering blueprint without requiring a long-term engagement."
    }
  ];

  const whyChoosePoints = [
    {
      title: "Automation That Saves Real Time",
      description: "We eliminate repetitive manual steps from release workflows, server provisioning, and database migrations so your developers ship faster."
    },
    {
      title: "Cost Awareness from Day One",
      description: "Every architectural decision considers long-term running costs, auto-scaling thresholds, and idle resource shutoff, not just whether code runs."
    },
    {
      title: "Security Built Into Delivery",
      description: "Secrets management, strict IAM permissions, automated vulnerability scans, and Web Application Firewalls (WAF) are configured from the start."
    },
    {
      title: "Engineers Who Also Build Products",
      description: "We understand real application runtime needs, making our infrastructure decisions practical and developer-friendly.",
      linkText: "Read: DevOps as Your Highest-Margin Dev Decision",
      href: "/blog/devops-cloud-scaling-cost-optimization"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Alignment",
      description: "We audit your current server architecture, deployment bottlenecks, security configurations, and cloud hosting spend."
    },
    {
      step: "02",
      title: "Strategy & Architecture",
      description: "We design the target cloud topology, Terraform IaC templates, CI/CD pipeline stages, and auto-scaling rules."
    },
    {
      step: "03",
      title: "Creation & Engineering",
      description: "We script automation pipelines, build container clusters, configure alerts, and thoroughly document every system."
    },
    {
      step: "04",
      title: "Launch & Growth",
      description: "We execute zero-downtime cutovers, establish 24/7 telemetry monitoring, and optimize resource sizing based on real traffic loads."
    }
  ];

  const targetAudience = [
    {
      title: "Startups Needing Solid Foundations",
      desc: "Get enterprise-grade, scalable cloud infrastructure without the overhead of hiring a full in-house DevOps team."
    },
    {
      title: "Growing Companies",
      desc: "Bring runaway AWS or GCP monthly hosting bills back under control with dedicated cost audits and rightsizing."
    },
    {
      title: "Product Teams",
      desc: "Accelerate shipping velocity with automated test and deployment pipelines that remove human error from releases."
    },
    {
      title: "High-Traffic Applications",
      desc: "Ensure apps, AI models, and games scale automatically under sudden viral spikes with 99.9% uptime guarantees."
    }
  ];

  const faqs = [
    {
      question: "What are DevOps services?",
      answer: "DevOps services combine modern software development practices with IT operations, such as cloud automation, CI/CD pipelines, containerization, and monitoring, to help engineering teams deploy software faster, more reliably, and securely."
    },
    {
      question: "What is Terraform and why use it?",
      answer: "Terraform is the industry standard Infrastructure as Code (IaC) tool. It allows you to define cloud servers, networks, DNS, and databases in declarative code files, making your infrastructure repeatable, auditable, and version-controlled via Git."
    },
    {
      question: "How can you reduce my cloud costs?",
      answer: "We perform a deep audit of your AWS or GCP account to identify over-provisioned instances, unattached storage disks, unindexed databases, and unoptimized transfer routes, typically cutting 20% to 50% from monthly hosting costs."
    },
    {
      question: "Do you work with both AWS and Google Cloud?",
      answer: "Yes. We automate, architect, and manage cloud infrastructure across both Amazon Web Services (AWS) and Google Cloud Platform (GCP)."
    },
    {
      question: "Can I get a one-time cloud audit?",
      answer: "Yes. You can engage our DevOps team for a standalone audit. We deliver a detailed report of vulnerabilities, performance bottlenecks, and exact cost savings with no obligation to continue."
    }
  ];

  const technologies = [
    "Terraform (IaC)",
    "AWS (Amazon Web Services)",
    "GCP (Google Cloud)",
    "Docker",
    "Kubernetes (K8s)",
    "GitHub Actions",
    "GitLab CI",
    "PostgreSQL",
    "Prometheus & Grafana",
    "Cloudflare WAF"
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
                    "name": "Cloud Infrastructure & DevOps",
                    "item": "https://www.tecwrites.com/services/devops"
                  }
                ]
              },
              {
                "@type": "Service",
                "name": "Cloud Infrastructure and DevOps Services",
                "serviceType": "DevOps & Cloud Engineering",
                "provider": {
                  "@type": "Organization",
                  "name": "TecWrites",
                  "url": "https://www.tecwrites.com"
                },
                "areaServed": "US",
                "description": "Cloud infrastructure and DevOps services: AWS and GCP automation, Terraform, secure CI/CD, Docker, and cloud cost audits."
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
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-slate-300 to-surface-container-lowest rounded-full shadow-[30px_30px_50px_rgba(0,0,0,0.05)] opacity-30 -z-10 mix-blend-multiply blur-[80px]"></div>
          <p className="font-label-caps text-label-caps text-[#3B4252] tracking-widest uppercase mb-4 opacity-80">
            INFRASTRUCTURE &amp; CLOUD ARCHITECTURE
          </p>
          <h1 className="font-headline-xl text-headline-xl text-on-surface mb-6 mx-auto max-w-4xl leading-tight text-balance">
            Cloud Infrastructure and DevOps Services That Scale Without Scaling Your Bill
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-3xl mx-auto text-lg leading-relaxed mb-4">
            Growth should not mean a server bill that surprises you every month or a release process that everyone dreads. TecWrites provides cloud infrastructure and DevOps services that automate your deployments, secure your pipelines, and bring your hosting costs under control across AWS and Google Cloud.
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto text-base">
            We build infrastructure the way we build products: carefully, with automation wherever it saves time and clear documentation so your team is never locked out of its own systems.
          </p>
        </header>

        {/* What Our Services Include */}
        <section className="mb-24 max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-label-caps text-label-caps text-[#3B4252] uppercase tracking-wider mb-2">FULL-STACK CLOUD CAPABILITIES</p>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">
              What Our Cloud and DevOps Services Include
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
                    <span className="material-symbols-outlined text-[#3B4252] text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>
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

        {/* IaC vs Manual Cloud Setup */}
        <section className="mb-24 max-w-5xl mx-auto">
          <div className="bg-surface-container rounded-3xl p-8 md:p-12 shadow-clay border border-white/60">
            <div className="max-w-3xl mx-auto">
              <p className="font-label-caps text-label-caps text-[#3B4252] uppercase tracking-wider mb-2 text-center">INFRASTRUCTURE COMPARISON</p>
              <h2 className="font-headline-lg text-headline-lg text-on-surface text-center mb-6">
                Infrastructure as Code vs Manual Cloud Setup
              </h2>
              <p className="text-on-surface-variant font-body-md text-lg leading-relaxed mb-6">
                Manually configured servers work until someone forgets a crucial setting, leaves the organization, or needs to rebuild environments after an outage. <strong>Infrastructure as Code (IaC)</strong> turns operational knowledge into clean, reviewable files you can track in Git, test before deployment, and recreate at will.
              </p>
              <p className="text-on-surface-variant font-body-md text-lg leading-relaxed">
                With Terraform, spinning up staging or disaster-recovery environments becomes a repeatable one-command process instead of a weeks-long risky project, and every modification leaves a clear, auditable history.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose TecWrites for DevOps */}
        <section className="mb-24 max-w-5xl mx-auto">
          <div className="bg-surface-container-lowest rounded-3xl p-8 md:p-12 shadow-clay border border-white/60">
            <div className="text-center mb-12">
              <p className="font-label-caps text-label-caps text-[#3B4252] uppercase tracking-wider mb-2">THE TECWRITES ADVANTAGE</p>
              <h2 className="font-headline-lg text-headline-lg text-on-surface">
                Why Choose TecWrites for DevOps and Cloud Infrastructure
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {whyChoosePoints.map((point, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-slate-200 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="material-symbols-outlined text-[#3B4252] text-[20px]">cloud</span>
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-lg font-bold text-on-surface mb-2">{point.title}</h3>
                    <p className="text-on-surface-variant font-body-md text-sm leading-relaxed mb-2">{point.description}</p>
                    {point.href && (
                      <Link href={point.href} className="text-[#3B4252] font-semibold text-sm inline-flex items-center gap-1 hover:underline">
                        {point.linkText} <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DevOps Process */}
        <section className="mb-24 max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="font-label-caps text-label-caps text-[#3B4252] uppercase tracking-wider mb-2">ENGINEERING TIMELINE</p>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">
              Our DevOps Process
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, idx) => (
              <div key={idx} className="bg-surface rounded-2xl p-6 shadow-clay relative flex flex-col justify-between">
                <div>
                  <span className="text-3xl font-black text-[#3B4252]/20 font-headline-xl block mb-3">{step.step}</span>
                  <h3 className="font-headline-sm text-lg font-bold text-on-surface mb-2">{step.title}</h3>
                  <p className="text-on-surface-variant font-body-md text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Who Our Cloud Services Are For */}
        <section className="mb-24 max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-label-caps text-label-caps text-[#3B4252] uppercase tracking-wider mb-2">TARGET AUDIENCE</p>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">
              Who Our Cloud Services Are For
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {targetAudience.map((item, idx) => (
              <div key={idx} className="bg-surface rounded-2xl p-6 shadow-clay flex items-start gap-4">
                <span className="material-symbols-outlined text-[#3B4252] text-[24px] mt-1">check</span>
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
            <p className="font-label-caps text-label-caps text-[#3B4252] uppercase tracking-wider mb-2">QUESTIONS &amp; ANSWERS</p>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">
              Frequently Asked Questions About Cloud and DevOps
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

        {/* Get Started / CTA */}
        <section className="max-w-4xl mx-auto text-center bg-surface-container-lowest rounded-3xl p-10 md:p-16 shadow-clay border border-white/60">
          <p className="font-label-caps text-label-caps text-[#3B4252] uppercase tracking-widest mb-3">GET STARTED</p>
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">
            Get Started with Cloud Infrastructure and DevOps Services Today
          </h2>
          <p className="text-on-surface-variant font-body-md text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            If your deployments feel risky or your cloud bill keeps climbing, a structured review is the fastest way to find out why. Tell us about your setup and we will show you where to begin.
          </p>

          <p className="font-medium text-on-surface text-xl mb-6">Ready to ship faster and pay less for infrastructure?</p>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-10 py-5 rounded-full bg-primary text-on-primary font-label-caps text-label-caps tracking-widest uppercase shadow-clay hover:scale-105 active:scale-95 transition-all duration-300 gap-3"
          >
            Request a Cloud Audit
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </Link>

          <div className="mt-10 pt-8 border-t border-outline-variant/30 flex flex-wrap justify-center items-center gap-3 text-xs font-label-caps text-on-surface-variant uppercase">
            <span>Related Services:</span>
            <Link href="/services/app" className="text-primary hover:underline">End-to-End App Dev</Link>
            <span>•</span>
            <Link href="/services/ai" className="text-primary hover:underline">AI-Integrated Products</Link>
            <span>•</span>
            <Link href="/services/game" className="text-primary hover:underline">Game Development</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
