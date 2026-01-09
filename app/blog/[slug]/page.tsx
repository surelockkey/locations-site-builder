import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getSiteConfig, getSiteId } from "@/lib/config-loader";
import { getBlogPostBySlug } from "@/lib/blog-api";
import LandingBuilder, {
  IBlock,
} from "@/components/sections/blog/BlogPageTemplate";
// Переконайтеся, що шлях правильний до вашого файлу LandingBuilder
// import LandingBuilder, { IBlock } from "@/components/LandingBuilder";

// ЗМІНА 1: params тепер Promise у Next.js 15
interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// --- Генерація SEO (Metadata) ---
export async function generateMetadata(props: PageProps): Promise<Metadata> {
  // ЗМІНА 2: "Розпаковуємо" params через await
  const params = await props.params;
  const { slug } = params;

  const siteId = getSiteId();

  if (siteId !== "utah-surelockkey") {
    return {
      title: "Not Found",
    };
  }

  // Використовуємо вже отриманий slug
  const blog = await getBlogPostBySlug(slug);

  if (!blog) {
    return {
      title: "Article Not Found",
    };
  }

  const siteConfig = await getSiteConfig();
  const canonicalUrl = `https://${siteConfig.domain}/blog/${slug}`;
  const envPhotoUrl =
    process.env.NEXT_PUBLIC_S3_URL || "https://surelockkey.com/s3/";

  const ogImageId = blog.preview?.photo?.file?.id;
  const ogImageUrl = ogImageId ? `${envPhotoUrl}${ogImageId}` : undefined;

  return {
    title: blog.meta_info.meta_tag_title || blog.preview.headline,
    description:
      blog.meta_info.meta_tag_description || blog.preview.description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: blog.meta_info.meta_tag_title || blog.preview.headline,
      description:
        blog.meta_info.meta_tag_description || blog.preview.description,
      url: canonicalUrl,
      type: "article",
      publishedTime: new Date(blog.post_date * 1000).toISOString(),
      images: ogImageUrl ? [{ url: ogImageUrl }] : [],
    },
  };
}

// --- Основний компонент сторінки ---
export default async function BlogPostPage(props: PageProps) {
  // ЗМІНА 3: Тут теж чекаємо params
  const params = await props.params;
  const { slug } = params;

  const siteId = getSiteId();

  if (siteId !== "utah-surelockkey") {
    notFound();
  }

  const blog = await getBlogPostBySlug(slug);

  if (!blog) {
    notFound();
  }

  const envPhotoUrl =
    process.env.NEXT_PUBLIC_S3_URL || "https://surelockkey.com/s3/";

  const updatedDate = blog.last_content_update_unix || blog.post_date;

  // Мапінг даних для LandingBuilder
  const formattedBlocks: IBlock[] = (blog.blocks || []).map((block: any) => ({
    ...block,
    photo: block.photo
      ? {
          file_id: block.photo.file?.id || "",
          alt: block.photo.alt,
          title: block.photo.title,
        }
      : undefined,
  }));

  return (
    <main className="min-h-screen bg-background">
      <article>
        <LandingBuilder
          phone="8559094011"
          post_date={blog.post_date}
          updated_date={updatedDate}
          data={formattedBlocks}
          env_photo_url={envPhotoUrl}
        />
      </article>
    </main>
  );
}
