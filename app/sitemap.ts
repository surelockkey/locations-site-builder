import { MetadataRoute } from "next";
import {
  getSiteConfig,
  getAllServices,
  getAllLocations,
  getSiteId,
} from "@/lib/config-loader";
import { getBlogPosts, getCompanyIdForSite } from "@/lib/blog-api";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteConfig = await getSiteConfig();
  const siteId = getSiteId();
  const baseUrl = `https://${siteConfig.domain}`;

  // Get all services
  const services = await getAllServices();

  // Get all locations
  const locations = await getAllLocations();

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
    },
    {
      url: `${baseUrl}/locations`,
    },
    {
      url: `${baseUrl}/gallery`,
    },
    {
      url: `${baseUrl}/contact-us`,
    },
    {
      url: `${baseUrl}/terms-and-conditions`,
    },
    {
      url: `${baseUrl}/privacy-policy`,
    },
  ];

  // Add blog page only for utah-surelockkey
  // if (siteId === "utah-surelockkey") {
  //   staticPages.push({
  //     url: `${baseUrl}/blog`,
  //   });
  // }

  // Service pages
  const servicePages = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
  }));

  // Location pages
  const locationPages = locations.map((location) => ({
    url: `${baseUrl}/locations/${location.slug}`,
  }));

  // Blog posts pages (only for utah-surelockkey)
  // let blogPages: MetadataRoute.Sitemap = [];
  // if (siteId === "utah-surelockkey") {
  //   try {
  //     const companyId = getCompanyIdForSite(siteId);
  //     if (companyId) {
  //       const blogPosts = await getBlogPosts(companyId);
  //       blogPages = blogPosts.map((post) => ({
  //         url: `${baseUrl}/blog/${post.slug}`,

  //       }));
  //     }
  //   } catch (error) {
  //     console.error("[Sitemap] Error fetching blog posts:", error);
  //   }
  // }

  return [...staticPages, ...servicePages, ...locationPages];
  // return [...staticPages, ...servicePages, ...locationPages, ...blogPages];
}
