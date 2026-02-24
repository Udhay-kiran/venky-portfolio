import type { ComponentPropsWithoutRef } from "react";
import { ICONS, type AppIconName } from "@/lib/iconMap";

type AppIconProps = Omit<ComponentPropsWithoutRef<"svg">, "children"> & {
  name: AppIconName;
  className?: string;
  size?: number;
  strokeWidth?: number;
  title?: string;
};

export default function AppIcon({
  name,
  className,
  size = 18,
  strokeWidth = 2,
  title,
  ...props
}: AppIconProps) {
  const Lucide = ICONS[name];
  if (!Lucide) return null;

  return (
    <Lucide
      size={size}
      strokeWidth={strokeWidth}
      className={["shrink-0", className].filter(Boolean).join(" ")}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      {...props}
    >
      {title ? <title>{title}</title> : null}
    </Lucide>
  );
}
