import type { Metadata } from "next";
import {
  loadSiteConfig,
  getPageConfig,
  getAllLocations,
} from "@/lib/config-loader";
import Hero from "@/components/sections/heroes";
import LocationList from "@/components/sections/location-list";

export async function generateMetadata(): Promise<Metadata> {
  try {
    const pageConfig = await getPageConfig("locations");

    return {
      title: pageConfig.seo.title,
      description: pageConfig.seo.description,
      keywords: pageConfig.seo.keywords,
    };
  } catch (error) {
    console.error("[v0] Locations metadata error:", error);
    return {
      title: "Our Locations",
      description: "Find locksmith services near you",
    };
  }
}

export default async function LocationsPage() {
  const [siteConfig, pageConfig, locations] = await Promise.all([
    loadSiteConfig(),
    getPageConfig("locations"),
    getAllLocations(),
  ]);

  const locationsData = locations.map((loc) => ({
    slug: loc.slug || "",
    title: loc.title || "",
    address: loc.hero?.address || "",
    phone: siteConfig.contact.phone,
    image: loc.hero?.image,
  }));

  console.log(locations);

  return (
    <div className="min-h-screen bg-white">
      {pageConfig.hero && (
        <Hero variant={siteConfig.variants.hero} data={pageConfig.hero} />
      )}

      <LocationList
        variant={siteConfig.variants.locationList || "1"}
        data={{ locations: locationsData }}
      />
    </div>
  );
}
