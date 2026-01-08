import { SiteConfig } from "@/types/config.types";
import ServiceInfoVariant1 from "./ServiceInfoVariant1";
import ServiceInfoVariant2 from "./ServiceInfoVariant2";
import ServiceInfoVariant3 from "./ServiceInfoVariant3";
import ServiceInfoVariant4 from "./ServiceInfoVariant4";

interface ServiceInfoProps {
  siteConfig?: SiteConfig;
  variant?: string;
  data: any;
}

export default function ServiceInfo({
  variant = "variant1",
  data,
  siteConfig,
}: ServiceInfoProps) {
  switch (variant) {
    case "variant2":
      return <ServiceInfoVariant2 data={data} siteConfig={siteConfig} />;
    case "variant3":
      return <ServiceInfoVariant3 data={data} siteConfig={siteConfig} />;
    case "variant4":
      return <ServiceInfoVariant4 data={data} siteConfig={siteConfig} />;
    case "variant1":
    default:
      return <ServiceInfoVariant1 data={data} siteConfig={siteConfig} />;
  }
}
