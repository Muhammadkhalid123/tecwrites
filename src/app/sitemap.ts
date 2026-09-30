import type { MetadataRoute } from 'next'
import { getAllPosts } from '@/data/posts'

// Use ONE canonical host everywhere. It must match your canonical tags,
// metadataBase, og:url and your Google Search Console property.
// (Your server currently redirects non-www to www, so www is used here.)
const baseUrl = 'https://www.tecwrites.com'

// Only list pages that return 200 and are meant to be indexed.
const staticPaths = [
    '', // homepage
    '/capabilities',
    '/lab',
    '/studio',
    '/contact',
    '/services/app',
    '/services/ai',
    '/services/game',
    '/services/devops',
    '/services/branding',
    '/services/publishing',

    // Add these back ONLY after the pages exist and return 200:
    // '/about',      // returned 404 when checked
    // '/portfolio',  // returned 404 when checked
    // '/services',   // returned non-HTML content when checked, so verify it
]

export default function sitemap(): MetadataRoute.Sitemap {
    const posts = getAllPosts()

    // Static pages: no lastModified, because an inaccurate date is worse than none.
    // If you want one, use the real date the page content last changed.
    const staticEntries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
        url: `${baseUrl}${path}`,
    }))

    // Blog posts: real publish dates.
    // If your posts have an updatedDate field, use it: post.updatedDate ?? post.publishDate
    const blogEntries: MetadataRoute.Sitemap = posts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.publishDate),
    }))

    // Blog index changes whenever a new post is published.
    const latestPostDate = posts.length
        ? new Date(Math.max(...posts.map((p) => new Date(p.publishDate).getTime())))
        : undefined

    const blogIndex: MetadataRoute.Sitemap = [
        {
            url: `${baseUrl}/blog`,
            ...(latestPostDate && { lastModified: latestPostDate }),
        },
    ]

    return [...staticEntries, ...blogIndex, ...blogEntries]
}