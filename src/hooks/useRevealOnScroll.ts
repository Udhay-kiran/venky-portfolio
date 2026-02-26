"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function useRevealOnScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );
    if (nodes.length === 0) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      nodes.forEach((node) => node.classList.add("is-inview"));
      return;
    }

    // Reset reveal state so sections animate again after route changes.
    nodes.forEach((node) => node.classList.remove("is-inview"));

    const isInViewport = (node: HTMLElement) => {
      const rect = node.getBoundingClientRect();
      const viewH = window.innerHeight || document.documentElement.clientHeight;
      const thresholdPx = viewH * 0.15;
      return rect.top <= viewH - thresholdPx && rect.bottom >= 0;
    };

    let observer: IntersectionObserver | null = null;
    let raf1 = 0;
    let raf2 = 0;

    const startObserver = () => {
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue;
            entry.target.classList.add("is-inview");
            observer?.unobserve(entry.target);
          }
        },
        {
          threshold: 0.15,
          rootMargin: "0px 0px -10% 0px",
        },
      );

      nodes.forEach((node) => {
        const delay = node.dataset.revealDelay;
        if (delay) {
          node.style.transitionDelay = `${delay}ms`;
        }

        if (isInViewport(node)) {
          node.classList.add("is-inview");
          return;
        }
        observer?.observe(node);
      });
    };

    // Wait two paint frames so layout and transition styles are fully applied.
    raf1 = window.requestAnimationFrame(() => {
      raf2 = window.requestAnimationFrame(() => {
        startObserver();
      });
    });

    return () => {
      window.cancelAnimationFrame(raf1);
      window.cancelAnimationFrame(raf2);
      observer?.disconnect();
    };
  }, [pathname]);
}
