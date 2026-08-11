import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getPostBySlug, getAllPosts } from "@/data/posts";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) {
    return { title: 'Post Not Found' };
  }
  return {
    title: `${post.title} | TecWrites`,
    description: post.metaDescription,
    keywords: post.keywords.join(", "),
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      type: "article",
      publishedTime: post.publishDate,
      authors: [post.author],
      images: [{ url: post.coverImage }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.metaDescription,
      images: [post.coverImage],
    },
    alternates: {
      canonical: `https://tecwrites.com/blog/${post.slug}`,
    }
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="flex-grow pt-32 pb-24 relative z-10 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <article className="max-w-3xl mx-auto">
          <header className="mb-12 text-center">
            <div className="flex items-center justify-center gap-4 mb-6 text-sm font-label-caps text-on-surface-variant uppercase">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">{post.category}</span>
              <span>•</span>
              <span>{post.publishDate}</span>
              <span>•</span>
              <span>{post.author}</span>
            </div>
            <h1 className="font-headline-xl text-headline-xl text-on-surface mb-8 leading-tight">
              {post.title}
            </h1>
            <div className="w-full h-[400px] rounded-[2rem] overflow-hidden shadow-clay bg-surface-container-high">
              <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover" />
            </div>
          </header>

          <div 
            className="prose prose-lg prose-indigo max-w-none text-on-surface-variant"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </main>
      <Footer />
    </>
  );
}
