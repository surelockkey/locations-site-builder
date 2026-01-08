import {
  Award,
  DollarSign,
  Briefcase,
  MapPin,
  Clock,
  Key,
  ClipboardCheck,
  CloudSun,
  Truck,
  Settings,
  Shield,
  type LucideIcon,
} from "lucide-react";

export const iconMap: Record<string, LucideIcon> = {
  award: Award,
  "dollar-sign": DollarSign,
  briefcase: Briefcase,
  "map-pin": MapPin,
  clock: Clock,
  key: Key,
  "clipboard-check": ClipboardCheck,
  "cloud-sun": CloudSun,
  truck: Truck,
  settings: Settings,
  shield: Shield,
};

export function getServiceIcon(iconName?: string): LucideIcon {
  if (!iconName) return Award;
  return iconMap[iconName] || Award;
}
