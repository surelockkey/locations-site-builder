import { SiteConfig } from "@/types/config.types";
import AreasAndHoursVariant1 from "./AreasAndHoursVariant1";
import AreasAndHoursVariant2 from "./AreasAndHoursVariant2";
import AreasAndHoursVariant3 from "./AreasAndHoursVariant3";
import AreasAndHoursVariant4 from "./AreasAndHoursVariant4";

interface WorkingDay {
  day: string;
  hours: string;
}

interface AreasAndHoursSectionProps {
  variant?: "1" | "2" | "3" | "4";
  title?: string;
  description?: string;
  mapImage?: string;
  mapEmbedUrl?: string;
  areas?: string[];
  centerLocation?: string;
  schedule: WorkingDay[];
  workingHoursTitle?: string;
  siteConfig?: SiteConfig;
}

export default function AreasAndHoursSection({
  variant = "1",
  ...props
}: AreasAndHoursSectionProps) {
  switch (variant) {
    case "1":
      return <AreasAndHoursVariant1 {...props} />;
    case "2":
      return <AreasAndHoursVariant2 {...props} />;
    case "3":
      return <AreasAndHoursVariant3 {...props} />;
    case "4":
      return <AreasAndHoursVariant4 {...props} />;
    default:
      return <AreasAndHoursVariant1 {...props} />;
  }
}

export { AreasAndHoursSection };
