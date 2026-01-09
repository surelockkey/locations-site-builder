interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image?: string;
  date: string;
  slug: string;
  category?: string;
}

interface BlogVariant1Props {
  posts: BlogPost[];
  title?: string;
  description?: string;
}

export default function BlogVariant1({
  posts,
  title = "Latest Articles",
  description = "Expert tips and advice from our locksmith professionals",
}: BlogVariant1Props) {
  console.log(posts && posts);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}

        {/* Blog Grid */}
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {posts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                {/* Image */}
                {post.image && (
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                    {post.category && (
                      <span className="absolute top-4 left-4 px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full">
                        {post.category}
                      </span>
                    )}
                  </div>
                )}

                {/* Content */}
                <div className="p-6">
                  {/* Date */}
                  <time className="text-sm text-gray-500 mb-2 block">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </time>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3 text-gray-900 line-clamp-2 hover:text-primary transition-colors">
                    <a href={`/blog/${post.slug}`}>{post.title}</a>
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Read More */}
                  <a
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-sm font-semibold hover:underline"
                    style={{ color: "var(--color-primary)" }}
                  >
                    Read More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No blog posts available yet.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
