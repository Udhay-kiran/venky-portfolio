import type { ComponentPropsWithoutRef } from "react";
import type { LucideIcon } from "@/lib/icons";

type IconProps = Omit<
  ComponentPropsWithoutRef<"svg">,
  "children" | "width" | "height"
> & {
  icon: LucideIcon;
  size?: number;
  strokeWidth?: number;
  "aria-label"?: string;
};

export function Icon({
  icon: Lucide,
  className,
  size = 20,
  strokeWidth = 2,
  "aria-label": ariaLabel,
  ...props
}: IconProps) {
  return (
    <Lucide
      size={size}
      strokeWidth={strokeWidth}
      className={["shrink-0", className].filter(Boolean).join(" ")}
      aria-label={ariaLabel}
      aria-hidden={ariaLabel ? undefined : true}
      {...props}
    />
  );
}
