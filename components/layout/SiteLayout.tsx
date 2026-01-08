import type React from "react";
import { Header } from "./headers";
import { Footer } from "./footers";
import { ThemeProvider } from "@/lib/theme-provider";
import type { FooterConfig } from "@/types/config.types";

interface SiteLayoutProps {
  children: React.ReactNode;
  config: {
    branding: any;
    contact: any;
    navigation: any;
    services: any;
    theme: {
      colors: {
        primary: string;
        secondary: string;
        accent: string;
        neutral: string;
        background: string;
        text: string;
      };
    };
    variants: {
      header?: string;
      footer?: string;
    };
    footerConfig: FooterConfig;
  };
}

export function SiteLayout({ children, config }: SiteLayoutProps) {
  return (
    <ThemeProvider colors={config.theme.colors}>
      <div className="flex min-h-screen flex-col">
        <Header
          variant={config.variants.header}
          branding={config.branding}
          contact={config.contact}
          navigation={config.navigation}
          services={config.services}
        />
        <main className="flex-1">{children}</main>
        <Footer
          variant={config.variants.footer}
          branding={config.branding}
          contact={config.contact}
          services={config.services}
          footerConfig={config.footerConfig}
        />
      </div>
    </ThemeProvider>
  );
}

export default SiteLayout;
