import type { LucideIcon } from "@/lib/icons";
import {
  Briefcase,
  Calendar,
  Code2,
  Copy,
  ExternalLink,
  Github,
  GraduationCap,
  Languages,
  Layers,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
  User,
  Wrench,
  X,
} from "@/lib/icons";

export const ICONS = {
  briefcase: Briefcase,
  calendar: Calendar,
  code: Code2,
  copy: Copy,
  externalLink: ExternalLink,
  github: Github,
  graduationCap: GraduationCap,
  languages: Languages,
  layers: Layers,
  linkedin: Linkedin,
  mail: Mail,
  mapPin: MapPin,
  sparkles: Sparkles,
  user: User,
  wrench: Wrench,
  x: X,
} satisfies Record<string, LucideIcon>;

export type AppIconName = keyof typeof ICONS;
