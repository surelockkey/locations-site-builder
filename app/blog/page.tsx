import type { Metadata } from "next";
import { getSiteConfig, getSiteId } from "@/lib/config-loader";
import { notFound } from "next/navigation";
import { BlogSection, BlogPost } from "@/components/sections/blog";
import { getBlogPosts, getCompanyIdForSite } from "@/lib/blog-api";

export async function generateMetadata(): Promise<Metadata> {
  const siteId = getSiteId();
  console.log(siteId);

  // Only show blog for utah-surelockkey
  if (siteId !== "utah-surelockkey") {
    // if (true) {
    return {
      title: "Not Found",
    };
  }

  const siteConfig = await getSiteConfig();
  const canonicalUrl = `https://${siteConfig.domain}/blog`;

  return {
    title: "See What's New in Our Blog | Sure Lock & Key in Utah",
    description:
      "Explore expert locksmith tips, security guides, and smart lock advice from Sure Lock & Key in Utah. Learn how to protect your home, car, and business.",
    keywords:
      "locksmith blog, security tips, lock maintenance, car key advice, home security",
    robots: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-video-preview": -1,
      "max-image-preview": "large",
    },
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: "See What's New in Our Blog | Sure Lock & Key in Utah",
      description:
        "Explore expert locksmith tips, security guides, and smart lock advice from Sure Lock & Key in Utah. Learn how to protect your home, car, and business.",
      url: canonicalUrl,
    },
  };
}

export default async function BlogPage() {
  const siteId = getSiteId();

  // Only show blog for utah-surelockkey
  if (siteId !== "utah-surelockkey") {
    // if (true) {
    notFound();
  }

  // Get company ID for the current site
  const companyId = getCompanyIdForSite(siteId);

  // Fetch blog posts from API
  let posts: BlogPost[] = [];

  if (companyId) {
    posts = await getBlogPosts(companyId);
  }

  // Fallback to sample posts if no data from API

  return (
    <main className="min-h-screen">
      {/* Hero section */}
      <section className="py-16 bg-background text-center">
        <div className="container mx-auto px-4">
          <h1
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: "var(--color-text)" }}
          >
            See What’s New in Our Blog
          </h1>
          <p
            className="text-lg md:text-xl max-w-3xl mx-auto"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Explore expert locksmith tips, security guides, and smart lock
            advice from Sure Lock & Key in Utah. Learn how to protect your home,
            car, and business.
          </p>
        </div>
      </section>

      {/* Blog listing */}
      <BlogSection
        posts={posts}
        title="Latest Articles"
        description="Expert tips and advice from our locksmith professionals"
      />
    </main>
  );
}
