import BlogVariant1 from "./BlogVariant1";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image?: string;
  date: string;
  slug: string;
  category?: string;
}

interface BlogListProps {
  posts: BlogPost[];
  title?: string;
  description?: string;
  variant?: string;
}

export default function BlogList({
  posts,
  title,
  description,
  variant = "1",
}: BlogListProps) {
  // In future, can add more variants
  switch (variant) {
    case "1":
    default:
      return <BlogVariant1 posts={posts} title={title} description={description} />;
  }
}

export { BlogList as BlogSection };
export type { BlogPost };
