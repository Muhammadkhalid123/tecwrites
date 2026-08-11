export interface BlogPost {
  title: string;
  slug: string;
  metaDescription: string;
  keywords: string[];
  publishDate: string;
  author: string;
  coverImage: string;
  category: string;
  content: string;
}

export const posts: BlogPost[] = [
  {
    title: "How AI Solutions Are Transforming the Web Development Landscape",
    slug: "ai-solutions-transforming-web-development",
    metaDescription: "Discover how AI solutions and automated workflows are helping agencies and businesses scale operations, reduce costs, and build intelligent digital experiences.",
    keywords: ["AI solutions", "automated workflows", "AI integrations", "web development automation", "TecWrites AI"],
    publishDate: "2026-08-11",
    author: "TecWrites Team",
    coverImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAZLL7o1oaXLXDfD10gtRoSW1tBaGXcvS3MGWz2VLgoWu0oKq7fgnhCDC6EGPHK53uhM7lyS4DrlXSNgVerYNKyk065To8sC0y48VSd-oj9x9WiCvkmbMiuGz3P2M1sSqc-wkK8LHlSI5LUi23arBiL03zw2I-Hh_mxMgefxt7oc12_g6Frq7doYYv7n29vCypiqfYD0g4IlRlY4dvW27vUjBTTaS3tYldT3FhsFkDPBez1RNFEAVCV",
    category: "AI & Automation",
    content: `
      <h2>The Rise of Intelligent Workflows</h2>
      <p>The digital landscape is shifting rapidly. For agencies and enterprises, integrating <strong>AI solutions</strong> is no longer just an experiment—it's a necessity for maintaining a competitive edge. From predictive analytics to automated customer support, AI tools are fundamentally changing how we design, build, and scale web applications.</p>
      
      <h2>Streamlining Operations with Automation</h2>
      <p>At TecWrites, we specialize in building intelligent systems that take the heavy lifting off your team. Imagine having automated workflow pipelines that process customer data, generate reports, and trigger personalized marketing campaigns without human intervention.</p>
      
      <h3>Custom LLM Integrations</h3>
      <p>By leveraging custom Large Language Models (LLMs), businesses can create hyper-personalized experiences for their users. Whether it's a dynamic chatbot that understands nuanced customer inquiries or an internal tool that drafts documentation, the possibilities are vast.</p>

      <h2>How We Can Help</h2>
      <p>If you're looking to elevate your digital presence and streamline your operations, our <a href="/services/ai" class="text-primary underline hover:text-primary/80 transition-colors">AI & Automation services</a> are tailored to meet your unique needs. We handle the complexity so you can focus on growth.</p>
      
      <p>Ready to transform your business?</p>
      <div class="mt-8">
        <a href="/contact" class="inline-block bg-primary text-on-primary px-6 py-3 rounded-full font-label-caps uppercase hover:scale-105 transition-transform duration-300">Get a Free Consultation</a>
      </div>
    `
  },
  {
    title: "The Ultimate Guide to Independent eBook Publishing in 2026",
    slug: "ultimate-guide-ebook-publishing-2026",
    metaDescription: "Learn the secrets to successful eBook publishing, from manuscript formatting and cover design to global distribution and marketing strategies.",
    keywords: ["eBook publishing", "self-publishing services", "book formatting", "KDP distribution", "author marketing"],
    publishDate: "2026-08-10",
    author: "TecWrites Team",
    coverImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuB4KNbuuJTvRYftltkrRNztwMf9ej7S0fdwuMxmUZ52knRObWUUIwZfm2_gRKaPVzT8Bl1oikjaaT4K1Ammq1SQFmUFH50xoBqr-ibEnidBN7heJTkXC-HahzTLUI2AHa92jtx39O1Cesa88GUKxxBQ7PT5E-bxG6dLDbaUyYb7hxcU9StRrGUXz5TLPuXsYDOG2PU3oIf3q5tEA5HyhcJJkHaq_Y_0BaxvPHEDrxWdiwBvHqzWgaRP",
    category: "Publishing",
    content: `
      <h2>Taking Control of Your Author Journey</h2>
      <p>The traditional publishing route is no longer the only path to success. Independent <strong>eBook publishing</strong> has empowered authors to retain 100% of their rights and royalties while reaching a global audience.</p>

      <h2>Key Steps to Publishing Success</h2>
      <p>Successfully launching a book requires more than just great writing. It demands meticulous formatting, an eye-catching cover design, and a strategic approach to distribution.</p>

      <h3>1. Professional Formatting</h3>
      <p>Whether your readers use a Kindle, iPad, or Kobo device, your eBook needs to render flawlessly. Reflowable EPUB formatting ensures your typography and layout adapt beautifully to any screen size.</p>

      <h3>2. Metadata and SEO for Books</h3>
      <p>Just like websites, books need SEO. Choosing the right BISAC categories and optimizing your Amazon keywords are critical steps to ensure readers can actually find your book in a crowded marketplace.</p>

      <h2>Partner with Publishing Experts</h2>
      <p>At TecWrites, we offer end-to-end <a href="/services/publishing" class="text-tertiary underline hover:text-tertiary/80 transition-colors">eBook publishing services</a>. We act as your project manager, technical advisor, and design team all rolled into one.</p>
      
      <p>Let's bring your manuscript to life.</p>
      <div class="mt-8">
        <a href="/contact" class="inline-block bg-tertiary text-on-tertiary px-6 py-3 rounded-full font-label-caps uppercase hover:scale-105 transition-transform duration-300">Start Your Publishing Journey</a>
      </div>
    `
  }
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getAllPosts(): BlogPost[] {
  return posts.sort((a, b) => (new Date(a.publishDate) > new Date(b.publishDate) ? -1 : 1));
}
