import { getSiteConfig } from "@/lib/config-loader";

export async function GET() {
  const siteConfig = await getSiteConfig();
  const baseUrl = `https://${siteConfig.domain}`;

  const robotsTxt = `User-agent: *
Allow: /
Disallow: /api/
Disallow: /_next/


Sitemap: ${baseUrl}/sitemap.xml`;

  return new Response(robotsTxt, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
