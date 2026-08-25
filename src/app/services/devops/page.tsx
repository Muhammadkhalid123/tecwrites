import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import SchemaMarkup from "@/components/SchemaMarkup";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cloud Architecture & DevOps Services | TecWrites",
  description: "TecWrites builds secure, auto-scaling cloud architectures and CI/CD pipelines. Explore our AWS/GCP and Terraform engineering services.",
  alternates: {
    canonical: 'https://tecwrites.com/services/devops'
  }
};

export default function DevOpsServicesPage() {
  const sections = [
    {
      title: "1. Cloud Architecture & Strategy",
      description: "Designing resilient, scalable cloud architectures that grow with your user base:",
      items: [
        { name: "Cloud Migration", desc: "Seamlessly shifting physical databases or single VPS systems to major cloud providers (AWS/GCP)." },
        { name: "Architecture Blueprints", desc: "Designing secure virtual private clouds (VPC), subnet structures, and strict identity access management (IAM) rules." },
        { name: "Cost Optimization Audits", desc: "Auditing cloud resource usage to terminate idle servers and minimize monthly cloud hosting overheads." }
      ]
    },
    {
      title: "2. Infrastructure as Code (IaC)",
      description: "Automating cloud resource creation using clean code definitions to ensure repeatability and security:",
      items: [
        { name: "Terraform Templates", desc: "Writing declarative code to manage DNS, load balancers, databases, and virtual networks." },
        { name: "Multi-Environment Setups", desc: "Cloning production architectures into staging and development zones with single commands." },
        { name: "Version Controlled Infrastructure", desc: "Tracking all modifications to server layouts and security groups using Git history." }
      ]
    },
    {
      title: "3. Containerization & Orchestration",
      description: "Packaging applications to run identically across developers' laptops, staging, and production servers:",
      items: [
        { name: "Docker Containerization", desc: "Writing clean, secure Dockerfiles to bundle web nodes, cron jobs, and background workers." },
        { name: "Kubernetes & ECS Clustering", desc: "Deploying container clustering to automate node scaling, rolling updates, and self-healing system nodes." },
        { name: "Registry Management", desc: "Setting up private registries for fast deployment artifact retrieval." }
      ]
    },
    {
      title: "4. Continuous Integration & Delivery (CI/CD)",
      description: "Building automation pipelines that compile, test, and release code without human intervention:",
      items: [
        { name: "GitHub Actions & GitLab CI", desc: "Creating build pipelines that run automated testing suites on every Git commit." },
        { name: "Zero-Downtime Releases", desc: "Implementing blue-green or rolling release models to update apps with zero user disruptions." },
        { name: "Security Vulnerability Scans", desc: "Scanning code dependencies and container layers for leaks before deployment." }
      ]
    },
    {
      title: "5. Monitoring, Logging & Security",
      description: "Ensuring applications are secure, compliant, and performing at peak speeds:",
      items: [
        { name: "Real-Time Alerts", desc: "Integrating tools (Prometheus, Datadog) to alert engineers before outages or lag occur." },
        { name: "Centralized Log Aggregation", desc: "Structuring system logs to quickly troubleshoot and audit database or app behaviors." },
        { name: "SSL, WAF & CDN Setup", desc: "Installing Web Application Firewalls (Cloudflare) to defend against DDoS attacks and caching assets worldwide." }
      ]
    }
  ];

  return (
    <>
      <SchemaMarkup
        type="Service"
        data={{
          name: "Cloud & DevOps Services",
          description: "AWS/GCP cloud environments, Infrastructure as Code via Terraform, CI/CD pipelines, and auto-scaling setups.",
          provider: {
            "@type": "Organization",
            name: "TecWrites"
          },
          serviceType: "DevOps & Cloud Engineering"
        }}
      />
      <Header />
      <main className="flex-grow pt-32 pb-24 relative z-10 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        {/* Header Section */}
        <header className="text-center mb-24 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-slate-300 to-surface-container-lowest rounded-full shadow-[30px_30px_50px_rgba(0,0,0,0.05)] opacity-30 -z-10 mix-blend-multiply blur-[80px]"></div>
          <p className="font-label-caps text-label-caps text-[#3B4252] tracking-widest uppercase mb-4 opacity-80">SERVICE DEEP DIVE</p>
          <h1 className="font-headline-xl text-headline-xl text-on-surface mb-6 mx-auto max-w-4xl leading-tight text-balance">
            Cloud &amp; DevOps
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto text-lg">
            Deploy with confidence. We write infrastructure as code and build deployment automation that ensures high speed, safety, and 99.9% uptime.
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
                    <span className="material-symbols-outlined text-[#3B4252] mt-1 text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>
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

        {/* Technologies Grid */}
        <section className="mt-24 max-w-4xl mx-auto">
          <h2 className="font-headline-lg text-headline-lg text-on-surface text-center mb-12">Technologies We Use</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Terraform (IaC)",
              "AWS (Amazon Web Services)",
              "GCP (Google Cloud Platform)",
              "Docker",
              "Kubernetes (K8s)",
              "GitHub Actions",
              "GitLab CI",
              "Prometheus & Grafana",
              "Datadog"
            ].map((tech, idx) => (
              <span key={idx} className="px-6 py-3 bg-surface rounded-full shadow-clay-sm text-on-surface font-label-caps text-label-caps border border-white/50">
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="mt-24 text-center">
          <Link href="/contact" className="inline-flex items-center justify-center px-10 py-5 rounded-full bg-primary text-on-primary font-label-caps text-label-caps tracking-widest uppercase shadow-clay hover:scale-105 active:scale-95 transition-all duration-300 gap-3">
            Setup Your Infrastructure
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
