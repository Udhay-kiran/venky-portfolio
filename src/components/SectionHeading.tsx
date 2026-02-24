import type { ReactNode } from "react";

type SectionHeadingProps = {
  title: string;
  icon?: ReactNode;
  eyebrow?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  title,
  icon,
  eyebrow,
  align = "left",
}: SectionHeadingProps) {
  const isCentered = align === "center";

  return (
    <div className={`group ${isCentered ? "text-center" : "text-left"}`}>
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal-200/75">
          {eyebrow}
        </p>
      )}

      <div
        className={`flex items-center gap-3 text-zinc-50 ${
          eyebrow ? "mt-2" : ""
        } ${isCentered ? "justify-center" : "justify-start"}`}
      >
        {icon}
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>
      </div>

      <div className={`mt-3 flex ${isCentered ? "justify-center" : "justify-start"}`}>
        <span className="relative block h-[2px] w-28 overflow-visible">
          <span className="underline-draw absolute inset-0 rounded-full bg-gradient-to-r from-teal-300/20 via-teal-300/80 to-indigo-300/25 opacity-85 transition-opacity group-hover:opacity-100" />
          <span className="underline-draw absolute inset-x-2 top-1/2 h-[8px] -translate-y-1/2 rounded-full bg-teal-300/20 blur-md opacity-70" />
        </span>
      </div>
    </div>
  );
}
