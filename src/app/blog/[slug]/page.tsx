import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SchemaMarkup from "@/components/SchemaMarkup";
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
  const imageUrl = post.coverImage.startsWith('http') 
    ? post.coverImage 
    : `https://www.tecwrites.com${post.coverImage}`;

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
      images: [
        {
          url: imageUrl,
          alt: post.title,
        },
      ],
      url: `https://www.tecwrites.com/blog/${post.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.metaDescription,
      images: [imageUrl],
    },
    alternates: {
      canonical: `https://www.tecwrites.com/blog/${post.slug}`,
    }
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const imageUrl = post.coverImage.startsWith('http') 
    ? post.coverImage 
    : `https://www.tecwrites.com${post.coverImage}`;

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
                    "name": "Blog",
                    "item": "https://www.tecwrites.com/blog"
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": post.title,
                    "item": `https://www.tecwrites.com/blog/${post.slug}`
                  }
                ]
              },
              {
                "@type": "Article",
                "@id": `https://www.tecwrites.com/blog/${post.slug}#article`,
                "headline": post.title,
                "description": post.metaDescription,
                "image": [imageUrl],
                "datePublished": post.publishDate,
                "dateModified": post.publishDate,
                "author": {
                  "@type": "Organization",
                  "name": post.author,
                  "url": "https://www.tecwrites.com"
                },
                "publisher": {
                  "@type": "Organization",
                  "name": "TecWrites",
                  "url": "https://www.tecwrites.com",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://www.tecwrites.com/TecWrites-Logo_Facicon.png"
                  }
                },
                "mainEntityOfPage": {
                  "@type": "WebPage",
                  "@id": `https://www.tecwrites.com/blog/${post.slug}`
                }
              }
            ]
          })
        }}
      />
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
