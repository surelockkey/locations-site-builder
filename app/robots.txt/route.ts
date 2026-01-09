import { getSiteConfig } from "@/lib/config-loader";

export async function GET() {
  const siteConfig = await getSiteConfig();
  const baseUrl = `https://${siteConfig.domain}`;

  const robotsTxt = `User-agent: *
Allow: /
Disallow: /api/
Disallow: /_next/

# SEO Directives
Follow: all
Index: all
Max-snippet: -1
Max-video-preview: -1
Max-image-preview: large

Sitemap: ${baseUrl}/sitemap.xml`;

  return new Response(robotsTxt, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
