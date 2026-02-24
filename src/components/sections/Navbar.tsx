"use client";

import { useState } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
];

const GITHUB_URL = "https://github.com/yourname";
const LINKEDIN_URL = "https://linkedin.com/in/yourname";
const CV_PATH = "/cv.pdf";

export default function Navbar() {
  const [open, setOpen] = useState(false);

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
  }

  return (
    <header className="sticky top-0 z-30 border-b border-zinc-800 bg-zinc-950/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <div className="text-sm font-semibold tracking-wide text-zinc-100">
          Venkat Pabbathi
        </div>

        <nav className="hidden items-center gap-6 text-sm font-medium text-zinc-300 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(event) => {
                event.preventDefault();
                scrollToHash(link.href);
              }}
              className="transition hover:text-teal-300"
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
                className="transition hover:text-teal-300"
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
