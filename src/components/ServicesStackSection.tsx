import Link from "next/link";

export default function ServicesStackSection() {
  const services = [
    {
      title: "Web Design & Development",
      description: "Bespoke, animated, high-performance websites and 3D WebGL experiences engineered for sub-second speeds and SEO visibility.",
      icon: "web",
      link: "/services/web-design",
      iconColor: "#001BB5",
      bgClass: "clay-surface-indigo",
      pills: ["Next.js & React", "3D WebGL", "Animation", "SEO-First"]
    },
    {
      title: "End-to-End App Development",
      description: "Custom cross-platform iOS & Android mobile apps, backend servers, and web products engineered from idea to App Store.",
      icon: "devices",
      link: "/services/app",
      iconColor: "#003B95",
      bgClass: "clay-surface-indigo",
      pills: ["iOS & Android", "Full-Stack", "Backend", "API Setup"]
    },
    {
      title: "AI-Integrated Products",
      description: "Chat assistants, custom LLM fine-tuning, RAG databases, and intelligent recommendation features built with intuitive claymorphic UI.",
      icon: "smart_toy",
      link: "/services/ai",
      iconColor: "#007A87",
      bgClass: "clay-surface-cyan",
      pills: ["Chatbots", "RAG", "LLMs", "Custom APIs"]
    },
    {
      title: "Game Development",
      description: "Addictive 2D/3D browser games, hardware-accelerated WebGL worlds, and gamified ed-tech learning applications built for engagement.",
      icon: "sports_esports",
      link: "/services/game",
      iconColor: "#9E003A",
      bgClass: "bg-gradient-to-br from-[#fff0f5] to-[#ffe4e1]",
      pills: ["WebGL", "Three.js", "Mobile Games", "Ed-tech"]
    },
    {
      title: "Branding, Animation & Design",
      description: "Cohesive logo marks, visual styles, app store assets, and premium explainer videos designed to feed directly into codebases.",
      icon: "palette",
      link: "/services/branding",
      iconColor: "#B25E00",
      bgClass: "bg-gradient-to-br from-[#fffbeb] to-[#fef3c7]",
      pills: ["Logos", "Illustrations", "Explainer Videos", "Motion"]
    },
    {
      title: "App Store Publishing & ASO",
      description: "App store release management, metadata copywriting, and App Store Optimization (ASO) audits to help your app get discovered.",
      icon: "storefront",
      link: "/services/publishing",
      iconColor: "#7A643F",
      bgClass: "clay-surface-sand",
      pills: ["ASO Audits", "KDP Setup", "Metadata", "Optimization"]
    },
    {
      title: "Cloud Infrastructure & DevOps",
      description: "AWS/GCP automation using Terraform, secure CI/CD pipelines, container orchestration, and server bill scaling audits.",
      icon: "cloud",
      link: "/services/devops",
      iconColor: "#3B4252",
      bgClass: "bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0]",
      pills: ["AWS & GCP", "Terraform", "CI/CD", "Docker"]
    }
  ];

  return (
    <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-24 relative">
      {/* Background Depth Blobs */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-primary-container/10 to-transparent rounded-[60%_40%_30%_70%/60%_30%_70%_40%] filter blur-[80px] -z-10 animate-[float_25s_ease-in-out_infinite_alternate]"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-secondary-container/10 to-transparent rounded-[40%_60%_70%_30%/40%_50%_60%_50%] filter blur-[60px] -z-10 animate-[float_20s_ease-in-out_infinite_alternate-reverse]"></div>

      <section className="mb-24 text-center relative z-10">
        <h2 className="font-headline-xl text-headline-xl text-primary mb-6">Our Services</h2>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto text-lg">
          Expertise crafted for the modern digital landscape. We build, automate, and publish with absolute precision.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {services.map((service, index) => (
          <Link key={index} href={service.link} className="relative group block h-full">
            <article className={`clay-card ${service.bgClass} p-10 flex flex-col gap-6 h-full relative z-10 border border-white/40 hover:border-primary/20 transition-all duration-300`}>
              <div className="clay-icon-badge w-16 h-16" style={{ color: service.iconColor }}>
                <span className="material-symbols-outlined" style={{ fontSize: "32px" }}>
                  {service.icon}
                </span>
              </div>
              <div className="flex-grow">
                <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h2>
                <p className="font-body-md text-body-md text-[#5E6573] leading-relaxed">
                  {service.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-black/5">
                {service.pills.map((pill, pillIndex) => (
                  <span key={pillIndex} className="clay-pill font-label-caps text-label-caps text-on-surface-variant text-xs">
                    {pill}
                  </span>
                ))}
              </div>
            </article>
          </Link>
        ))}
      </section>
    </div>
  );
}


