import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { getAllPosts } from "@/data/posts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | TecWrites",
  description: "Read the latest insights on UI/UX, Web App Development, AI, and eBook Publishing from the TecWrites team.",
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <>
      <Header />
      <main className="flex-grow pt-32 pb-24 relative z-10 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <header className="text-center mb-16 relative">
          <p className="font-label-caps text-label-caps text-primary tracking-widest uppercase mb-4 opacity-80">INSIGHTS & NEWS</p>
          <h1 className="font-headline-xl text-headline-xl text-on-surface mb-6 mx-auto max-w-4xl leading-tight">
            TecWrites Blog
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto text-lg">
            Thoughts, strategies, and tutorials on building better digital experiences.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group h-full">
              <article className="bg-surface-container-lowest rounded-2xl p-6 h-full shadow-clay flex flex-col group-hover:-translate-y-2 group-hover:shadow-[20px_20px_40px_rgba(0,0,0,0.1)] transition-all duration-300">
                <div className="w-full h-48 rounded-xl bg-surface-container-high mb-6 overflow-hidden relative">
                  <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className="absolute top-4 left-4 bg-primary text-on-primary px-3 py-1 rounded-full text-xs font-label-caps uppercase shadow-lg">
                    {post.category}
                  </span>
                </div>
                <h2 className="font-headline-sm text-headline-sm text-on-surface mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-on-surface-variant font-body-md text-sm mb-6 line-clamp-3 flex-grow">
                  {post.metaDescription}
                </p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-outline-variant/30">
                  <span className="text-xs font-label-caps text-on-surface-variant uppercase">{post.publishDate}</span>
                  <span className="text-xs font-label-caps text-primary uppercase flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read More <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
