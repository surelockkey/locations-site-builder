import { graphqlFetch } from "./graphql-client";
import { BlogPost } from "@/components/sections/blog";

// --- Інтерфейси ---

// Тип для блоків контенту (з вашого JSON)
export interface Block {
  id: string;
  type_block: string;
  position_block: number;
  headline?: string;
  description?: string;
  description_secondary?: string;
  text_left?: string;
  text_right?: string;
  list?: string;
  first_list?: string;
  last_list?: string;
  styles?: string; // JSON string
  photo?: {
    file: {
      id: string;
      format: string;
    };
    alt?: string;
    title?: string;
  } | null;
}

// Інтерфейс сторінки з API
interface ConstructedPage {
  id: string;
  type: string;
  post_date: number;
  is_posted: boolean;
  // Поле last_content_update_unix може бути відсутнє в деяких відповідях, тому optional
  last_content_update_unix?: number;
  preview: {
    headline: string;
    description: string;
    photo: {
      file: {
        id: string;
        format: string;
      };
    } | null;
  };
  meta_info: {
    url: string;
    categoric: string | null;
    meta_tag_title?: string;
    meta_tag_description?: string;
  };
}

// Розширений інтерфейс для детальної сторінки (включає блоки)
export interface BlogPostDetail extends ConstructedPage {
  blocks: Block[];
}

interface GetConstructedPageByUrlResponse {
  getConstructedPageByUrl: BlogPostDetail;
}

interface GetConstructedPagesResponse {
  getConstructedPagesPaginated: ConstructedPage[];
}

// --- Запити ---

const GET_BLOG_POSTS_QUERY = `
  query GetBlogPosts($companyId: ID!, $isPosted: Boolean, $pagination: FindPaginationDto, $type: ConstructedPageType) {
    getConstructedPagesPaginated(
      constructed_page_company_id: $companyId
      is_posted: $isPosted
      pagination: $pagination
      type: $type
    ) {
      id
      type
      post_date
      is_posted
      preview {
        headline
        description
        photo {
          file {
            id
            format
          }
        }
      }
      meta_info {
        url
        categoric
        meta_tag_title
        meta_tag_description
      }
    }
  }
`;

const GET_BLOG_POST_BY_SLUG_QUERY = `
  query GetConstructedPageByUrl($url: String!) {
    getConstructedPageByUrl(url: $url) {
      id
      type
      post_date
      is_posted
      # Додаємо last_content_update_unix, якщо воно підтримується API
      # last_content_update_unix 
      meta_info {
        url
        categoric
        meta_tag_title
        meta_tag_description
      }
      preview {
        headline
        description
        photo {
          file {
            id
            format
          }
        }
      }
      blocks {
        id
        type_block
        position_block
        headline
        description
        description_secondary
        text_left
        text_right
        list
        first_list
        last_list
        styles
        photo {
          file {
            id
            format
          }
          alt
          title
        }
      }
    }
  }
`;

// --- Методи ---

// Отримання списку постів
export async function getBlogPosts(companyId: string): Promise<BlogPost[]> {
  try {
    const response = await graphqlFetch<GetConstructedPagesResponse>(
      GET_BLOG_POSTS_QUERY,
      {
        companyId,
        isPosted: true,
        pagination: {
          skip: 0,
          take: 50,
        },
        type: "BLOG",
      }
    );

    if (!response?.getConstructedPagesPaginated) {
      return [];
    }

    return response.getConstructedPagesPaginated.map((page) => {
      const date = new Date(page.post_date * 1000).toISOString();
      const fileId = page.preview?.photo?.file?.id;
      // Використовуємо ENV змінну або дефолтний шлях
      const baseUrl =
        process.env.NEXT_PUBLIC_S3_URL || "https://surelockkey.com/s3/";
      const imageUrl = fileId ? `${baseUrl}${fileId}` : undefined;

      const category =
        page.meta_info.categoric && page.meta_info.categoric !== ""
          ? page.meta_info.categoric
          : "Tips & Advice";

      return {
        id: page.id,
        title: page.preview.headline || "Untitled Post",
        excerpt: page.preview.description || "",
        image: imageUrl,
        date: date,
        slug: page.meta_info.url,
        category: category,
      };
    });
  } catch (error) {
    console.error("[Blog API] Error fetching blog posts:", error);
    return [];
  }
}

// Отримання одного поста по Slug
export async function getBlogPostBySlug(
  slug: string
): Promise<BlogPostDetail | null> {
  try {
    const response = await graphqlFetch<GetConstructedPageByUrlResponse>(
      GET_BLOG_POST_BY_SLUG_QUERY,
      {
        url: slug,
      }
    );

    if (!response?.getConstructedPageByUrl) {
      return null;
    }

    return response.getConstructedPageByUrl;
  } catch (error) {
    console.error(`[Blog API] Error fetching post by slug "${slug}":`, error);
    return null;
  }
}

// Отримання ID компанії
export function getCompanyIdForSite(siteId: string): string {
  const siteToCompanyMap: Record<string, string> = {
    "utah-surelockkey": "6883a696-5f7f-4a9d-a0fd-a3949ba45f1f",
  };

  return siteToCompanyMap[siteId] || "";
}
