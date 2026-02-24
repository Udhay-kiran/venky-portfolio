"use client";

import type { ReactNode } from "react";
import useInViewOnce from "@/hooks/useInViewOnce";

export default function SectionReveal({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const { ref, isVisible } = useInViewOnce<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`section-reveal ${isVisible ? "is-visible" : ""} ${className}`.trim()}
    >
      {children}
    </div>
  );
}
