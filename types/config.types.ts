// Type definitions for configuration files

export interface BrandingConfig {
  companyName: string;
  shortName: string;
  tagline: string;
  logo: string;
  logoAlt: string;
  favicon: string;
}

export interface AreasAndHours {
  display: string;
  mapEmbedUrl?: string;
  schedule: Array<{
    day: string;
    hours: string;
  }>;
}

export interface ContactConfig {
  phone: string;
  phoneDisplay: string;
  email: string;
  address: string;
  areasAndHours: AreasAndHours;
  socialMedia: {
    facebook?: string;
    instagram?: string;
    yelp?: string;
    twitter?: string;
    pinterest?: string;
    tiktok?: string;
    medium?: string;
    youtube?: string;
    linkedin?: string;
    map?: string;
  };
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterNavSection {
  title?: string;
  links: FooterLink[];
  limit?: number;
}

export interface FooterConfig {
  description: string;
  tagline: string;
  availability: string;
  emergencyTitle: string;
  emergencySubtitle: string;
  emergencyButtonText: string;
  callButtonText: string;
  socialMedia: {
    instagram?: string;
    pinterest?: string;
    twitter?: string;
    tiktok?: string;
    medium?: string;
    youtube?: string;
    facebook?: string;
    linkedin?: string;
    map?: string;
  };
  navigation: {
    services: {
      title: string;
      limit: number;
    };
    quickLinks: FooterNavSection;
    company: FooterNavSection;
    legal: {
      links: FooterLink[];
    };
  };
  copyright: string;
}

export interface ThemeConfig {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    neutral: string;
    background: string;
    text: string;
  };
  fonts: {
    heading: string;
    body: string;
  };
}

export interface ComponentVariants {
  header: string;
  footer: string;
  hero: string;
  services: string;
  whyChoose: string;
  locations: string;
  serviceList: string;
  gallery: string;
  photoGallery: string;
  brands: string;
  brandsWeServe: string;
  contact: string;
  contactInfo: string;
  contactFormSection: string;
  contact_us_page: string;
  cta: string;
  faq: string;
  contentBlock: string;
  coverageMap: string;
  areasAndHours: string;
  locationList: string;
  serviceInfo: string;
  termsContent: string;
  locationPageContent: string;
}

export interface SiteIndexConfig {
  siteId: string;
  domain: string;
  theme: string;
}

export interface ServiceHero {
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  address?: string;
  ctaPrimary?: {
    text: string;
    link: string;
  };
  ctaSecondary?: {
    text: string;
    link: string;
  };
  cta?: {
    text: string;
    link: string;
  };
}

export interface ServiceSection {
  type:
    | "contentBlock"
    | "serviceList"
    | "whyChoose"
    | "brands"
    | "faq"
    | "cta"
    | "gallery";
  title?: string;
  description?: string;
  content?: string;
  image?: string;
  services?: any[];
  features?: any[];
  brands?: string[];
  faqs?: any[];
  [key: string]: any;
}

export interface ServiceSEO {
  title: string;
  description: string;
  h1: string;
  keywords: string[];
}

export interface ServicePageConfig {
  slug: string;
  title: string;
  subtitle: string;
  seo: ServiceSEO;
  hero: ServiceHero;
  sections: ServiceSection[];
}

export interface PageSection {
  id: string;
  component: string;
  enabled: boolean;
  data: any;
}

export interface PageSEO {
  title: string;
  description: string;
  h1: string;
  keywords: string[];
}

export interface PageConfig {
  path: string;
  seo: PageSEO;
  hero?: {
    title: string;
    subtitle?: string;
    description?: string;
    image?: string;
    ctaPrimary?: {
      text: string;
      link: string;
      type?: string;
    };
    ctaSecondary?: {
      text: string;
      link: string;
      type?: string;
    };
    imageAlt?: string;
  };
  sections: PageSection[];
}

export interface SiteConfig {
  siteId: string;
  domain: string;
  theme: string;
  branding: BrandingConfig;
  contact: ContactConfig;
  themeConfig: ThemeConfig;
  variants: ComponentVariants;
}
