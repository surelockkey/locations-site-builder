import type {
  BrandingConfig,
  ContactConfig,
  ThemeConfig,
  ComponentVariants,
  PageConfig,
  ServicePageConfig,
  FooterConfig,
} from "@/types/config.types";
import { readFile, readdir } from "fs/promises";
import path from "path";

export interface SiteConfig {
  siteId: string;
  domain: string;
  theme: string;
  branding: BrandingConfig;
  contact: ContactConfig;
  themeConfig: ThemeConfig;
  variants: ComponentVariants;
}

/**
 * Get site ID from environment variable
 */
export function getSiteId(): string {
  return process.env.NEXT_PUBLIC_SITE_ID || "utah-surelockkey";
}

function getConfigPath(...parts: string[]): string {
  // In Next.js, we need to use absolute paths from project root
  const cwd = process.cwd();
  return path.join(cwd, "config", ...parts);
}

/**
 * Load all configuration files for a specific site
 */
export async function getSiteConfig(): Promise<SiteConfig> {
  const siteId = getSiteId();

  try {
    const [index, branding, contact, theme, variants] = await Promise.all([
      readFile(getConfigPath("sites", siteId, "index.json"), "utf-8").then(
        JSON.parse
      ),
      readFile(getConfigPath("sites", siteId, "branding.json"), "utf-8").then(
        JSON.parse
      ),
      readFile(getConfigPath("sites", siteId, "contact.json"), "utf-8").then(
        JSON.parse
      ),
      readFile(getConfigPath("sites", siteId, "theme.json"), "utf-8").then(
        JSON.parse
      ),
      readFile(getConfigPath("sites", siteId, "variants.json"), "utf-8").then(
        JSON.parse
      ),
    ]);

    return {
      ...index,
      branding,
      contact,
      themeConfig: theme,
      variants,
    };
  } catch (error) {
    console.error(`[v0] Failed to load site config for ${siteId}:`, error);
    throw error;
  }
}

export const loadSiteConfig = getSiteConfig;

/**
 * Load a specific service configuration
 */
export async function getServiceConfig(
  serviceSlug: string
): Promise<ServicePageConfig> {
  const siteId = getSiteId();

  try {
    const content = await readFile(
      getConfigPath("sites", siteId, "services", `${serviceSlug}.json`),
      "utf-8"
    );
    return JSON.parse(content);
  } catch (error) {
    console.error(`[v0] Failed to load service config ${serviceSlug}:`, error);
    throw error;
  }
}

export async function loadServiceConfig(
  siteId: string,
  serviceSlug: string
): Promise<ServicePageConfig> {
  // siteId is ignored since we use getSiteId() internally
  return getServiceConfig(serviceSlug);
}

/**
 * Load all available services for a site (dynamic discovery)
 */
export async function getAllServices(): Promise<ServicePageConfig[]> {
  const siteId = getSiteId();

  try {
    const servicesPath = getConfigPath("sites", siteId, "services");
    const files = await readdir(servicesPath);
    const serviceFiles = files.filter((f) => f.endsWith(".json"));

    const services = await Promise.all(
      serviceFiles.map(async (file) => {
        const slug = file.replace(".json", "");
        return getServiceConfig(slug);
      })
    );

    return services;
  } catch (error) {
    console.error(`[v0] Failed to load all services:`, error);
    return [];
  }
}

/**
 * Load a specific location configuration
 */
export async function getLocationConfig(
  locationSlug: string
): Promise<ServicePageConfig> {
  const siteId = getSiteId();

  try {
    const content = await readFile(
      getConfigPath("sites", siteId, "locations", `${locationSlug}.json`),
      "utf-8"
    );
    return JSON.parse(content);
  } catch (error) {
    console.error(
      `[v0] Failed to load location config ${locationSlug}:`,
      error
    );
    throw error;
  }
}

export async function loadLocationConfig(
  siteId: string,
  locationSlug: string
): Promise<ServicePageConfig> {
  // siteId is ignored since we use getSiteId() internally
  return getLocationConfig(locationSlug);
}

/**
 * Load all available locations for a site (dynamic discovery)
 */
export async function getAllLocations(): Promise<ServicePageConfig[]> {
  const siteId = getSiteId();

  try {
    const locationsPath = getConfigPath("sites", siteId, "locations");
    const files = await readdir(locationsPath);
    const locationFiles = files.filter((f) => f.endsWith(".json"));

    const locations = await Promise.all(
      locationFiles.map(async (file) => {
        const slug = file.replace(".json", "");
        return getLocationConfig(slug);
      })
    );

    return locations;
  } catch (error) {
    console.error(`[v0] Failed to load all locations:`, error);
    return [];
  }
}

/**
 * Load a specific page configuration
 */
export async function getPageConfig(pageName: string): Promise<PageConfig> {
  const siteId = getSiteId();

  try {
    const content = await readFile(
      getConfigPath("sites", siteId, "pages", `${pageName}.json`),
      "utf-8"
    );
    return JSON.parse(content);
  } catch (error) {
    console.error(`[v0] Failed to load page config ${pageName}:`, error);
    throw error;
  }
}

/**
 * Load navigation configuration
 */
export async function getNavigationConfig() {
  const siteId = getSiteId();

  try {
    const content = await readFile(
      getConfigPath("sites", siteId, "navigation.json"),
      "utf-8"
    );
    return JSON.parse(content);
  } catch (error) {
    console.error(`[v0] Failed to load navigation config:`, error);
    return { main: [] };
  }
}

/**
 * Load footer configuration
 */
export async function getFooterConfig(): Promise<FooterConfig> {
  const siteId = getSiteId();

  try {
    const content = await readFile(
      getConfigPath("sites", siteId, "footer.json"),
      "utf-8"
    );
    return JSON.parse(content);
  } catch (error) {
    console.error(`[v0] Failed to load footer config:`, error);
    throw error;
  }
}
