import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SiteLayout } from "@/components/layout/SiteLayout";
import {
  getSiteConfig,
  getNavigationConfig,
  getAllServices,
  getFooterConfig,
} from "@/lib/config-loader";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  try {
    const siteConfig = await getSiteConfig();
    return {
      title: siteConfig.branding.companyName,
      description: siteConfig.branding.tagline,
      icons: {
        icon: siteConfig.branding.favicon || "/icon.svg",
      },
    };
  } catch (error) {
    return {
      title: "Locksmith Services",
      description: "Professional locksmith services",
    };
  }
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteConfig = await getSiteConfig();
  const navigation = await getNavigationConfig();
  const allServices = await getAllServices();
  const footerConfig = await getFooterConfig();

  const layoutConfig = {
    branding: siteConfig.branding,
    contact: siteConfig.contact,
    navigation: navigation.main,
    services: allServices.map((s) => ({ title: s.title, slug: s.slug })),
    theme: siteConfig.themeConfig,
    variants: siteConfig.variants,
    footerConfig: footerConfig,
  };

  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const colors = ${JSON.stringify(siteConfig.themeConfig.colors)};
                const root = document.documentElement;
                root.style.setProperty('--color-primary', colors.primary);
                root.style.setProperty('--color-secondary', colors.secondary);
                root.style.setProperty('--color-accent', colors.accent);
                root.style.setProperty('--color-neutral', colors.neutral);
                root.style.setProperty('--color-background', colors.background);
                root.style.setProperty('--color-text', colors.text);
                root.style.setProperty('--color-text-muted', colors.textMuted || colors.neutral);
                root.style.setProperty('--color-footer-bg', colors.footerBackground || colors.secondary);
                root.style.setProperty('--color-divider', colors.divider || '#e2e8f0');
                root.style.setProperty('--color-icon-emergency', colors.iconEmergency || '#dc2626');
                root.style.setProperty('--color-icon-residential', colors.iconResidential || colors.primary);
                root.style.setProperty('--color-icon-commercial', colors.iconCommercial || '#6366f1');
                root.style.setProperty('--color-icon-automotive', colors.iconAutomotive || '#eab308');
                root.style.setProperty('--color-section-bg-emergency', colors.sectionBgEmergency || '#ffffff');
                root.style.setProperty('--color-section-border-emergency', colors.sectionBorderEmergency || '#f1f5f9');
                root.style.setProperty('--color-list-bg-emergency', colors.listBgEmergency || '#f9fafb');
                root.style.setProperty('--color-list-bg-commercial', colors.listBgCommercial || '#eef2ff');
                root.style.setProperty('--color-list-border-commercial', colors.listBorderCommercial || '#e0e7ff');
                root.style.setProperty('--color-section-bg-automotive', colors.sectionBgAutomotive || '#1f2937');
                root.style.setProperty('--color-card-bg-automotive', colors.cardBgAutomotive || '#374151');
                root.style.setProperty('--color-card-border-automotive', colors.cardBorderAutomotive || '#4b5563');
              })();
            `,
          }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        <SiteLayout config={layoutConfig}>{children}</SiteLayout>
        <Analytics />
      </body>
    </html>
  );
}
