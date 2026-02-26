"use client";

import { useEffect, useMemo, useState } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Technical Expertise", href: "#skills" },
  { label: "Education", href: "#education" },
];
const sectionIds = ["about", "work", "experience", "skills", "education"] as const;

const GITHUB_URL = "https://github.com/Udhay-kiran";
const LINKEDIN_URL = "https://www.linkedin.com/in/venkat-pabbathi-822857209/";
const CV_PATH = "/cv.pdf";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<(typeof sectionIds)[number] | "">("");

  const sectionLinkSet = useMemo(() => new Set(sectionIds), []);

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries.length > 0) {
          setActiveSection(visibleEntries[0].target.id as (typeof sectionIds)[number]);
        }
      },
      {
        rootMargin: "-40% 0px -55% 0px",
        threshold: [0, 0.15, 0.3, 0.6, 1],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  function scrollToHash(href: string) {
    const id = href.replace(/^#/, "");
    const el = document.getElementById(id);
    if (!el) return;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    el.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "start",
    });
    setActiveSection(id as (typeof sectionIds)[number]);
    window.history.pushState(null, "", `#${id}`);
  }

  function navLinkClass(isActive: boolean) {
    return [
      "relative inline-flex items-center py-1 transition-colors",
      isActive ? "text-zinc-100" : "text-zinc-300",
      "hover:text-teal-200",
      "after:absolute after:left-0 after:right-0 after:-bottom-0.5 after:h-[2px] after:origin-left after:rounded-full after:bg-gradient-to-r after:from-teal-300/70 after:to-indigo-300/60 after:transition-transform after:duration-200",
      isActive ? "after:scale-x-100" : "after:scale-x-0 hover:after:scale-x-100",
    ].join(" ");
  }

  return (
    <header className="sticky top-0 z-30 border-b border-zinc-800 bg-zinc-950/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <div className="text-sm font-semibold tracking-wide text-zinc-100">
          Venkat Pabbathi
        </div>

        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(event) => {
                if (!sectionLinkSet.has(link.href.replace(/^#/, "") as (typeof sectionIds)[number])) return;
                event.preventDefault();
                scrollToHash(link.href);
              }}
              aria-current={
                activeSection === link.href.replace(/^#/, "") ? "page" : undefined
              }
              className={navLinkClass(activeSection === link.href.replace(/^#/, ""))}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-3 text-sm text-zinc-300 md:flex">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-teal-300"
            >
              GitHub
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-teal-300"
            >
              LinkedIn
            </a>
            <a
              href={CV_PATH}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-zinc-800 px-3 py-1.5 text-zinc-200 transition hover:border-teal-500 hover:text-teal-200"
            >
              CV
            </a>
          </div>
          <button
            type="button"
            className="rounded-lg border border-zinc-800 px-3 py-2 text-sm text-zinc-200 transition hover:border-teal-500 hover:text-teal-200 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Toggle menu"
          >
            Menu
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-zinc-800 bg-zinc-950/90 px-6 py-3 text-sm text-zinc-200 md:hidden">
          <div className="flex flex-col gap-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={navLinkClass(activeSection === link.href.replace(/^#/, ""))}
                onClick={(event) => {
                  event.preventDefault();
                  scrollToHash(link.href);
                  setOpen(false);
                }}
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2 flex gap-3 text-sm text-zinc-300">
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-teal-300"
              >
                GitHub
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-teal-300"
              >
                LinkedIn
              </a>
              <a
                href={CV_PATH}
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-teal-300"
              >
                CV
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
