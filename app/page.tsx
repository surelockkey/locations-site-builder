import { DynamicPage } from "@/components/pages/DynamicPage";
import {
  getPageConfig,
  getSiteConfig,
  getAllServices,
} from "@/lib/config-loader";
import { notFound } from "next/navigation";

export default async function HomePage() {
  try {
    // API test - JSONPlaceholder API для тестування швидкості
    const apiTestStart = Date.now();
    const apiResponse = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const apiData = await apiResponse.json();
    const apiTestEnd = Date.now();
    console.log('API Test Speed:', apiTestEnd - apiTestStart, 'ms');
    console.log('API Response:', apiData);

    const [siteConfig, pageConfig, services] = await Promise.all([
      getSiteConfig(),
      getPageConfig("home"),
      getAllServices(),
    ]);

    const servicesData = services.map((service) => ({
      id: service.slug,
      title: service.title || "",
      description: service.hero?.description || service.subtitle || "",
      image: service.hero?.image,
      link: `/services/${service.slug}`,
    }));

    const modifiedPageConfig = {
      ...pageConfig,
      sections: pageConfig.sections.map((section) => {
        if (section.component === "services") {
          return {
            ...section,
            data: {
              title: section.data?.title || "",
              description: section.data?.description || "",
              services: servicesData,
            },
          };
        }
        if (section.component === "areasAndHours") {
          return {
            ...section,
            data: {
              ...section.data,
              ...siteConfig.contact.areasAndHours,
            },
          };
        }
        return section;
      }),
    };

    return <DynamicPage config={modifiedPageConfig} siteConfig={siteConfig} />;
  } catch (error) {
    notFound();
  }
}

export async function generateMetadata() {
  try {
    const [pageConfig, siteConfig] = await Promise.all([
      getPageConfig("home"),
      getSiteConfig(),
    ]);

    const canonicalUrl = `https://${siteConfig.domain}/`;

    return {
      title: pageConfig.seo.title,
      description: pageConfig.seo.description,
      keywords: pageConfig.seo.keywords,
      robots: {
        index: true,
        follow: true,
        'max-snippet': -1,
        'max-video-preview': -1,
        'max-image-preview': 'large',
      },
      alternates: {
        canonical: canonicalUrl,
      },
      openGraph: {
        title: pageConfig.seo.title,
        description: pageConfig.seo.description,
        type: "website",
        url: canonicalUrl,
      },
    };
  } catch (error) {
    return {
      title: "Locksmith Services",
      description: "Professional locksmith services",
    };
  }
}
