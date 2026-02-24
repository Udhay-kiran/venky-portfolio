"use client";

import type { ReactNode } from "react";
import { Icon } from "@/components/ui/Icon";
import { ExternalLink, Github, Linkedin, Mail } from "@/lib/icons";

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
];

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

function IconLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("mailto:") ? undefined : "_blank"}
      rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
      aria-label={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-zinc-300 backdrop-blur-md transition hover:border-teal-400/40 hover:text-teal-200"
    >
      {children}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="mt-16 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
      <div className="grid gap-8 px-6 py-8 md:grid-cols-4">
        <div data-reveal="up">
          <h3 className="text-base font-semibold text-zinc-100">
            Venkat Pabbathi
          </h3>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-zinc-400">
            Building calm, responsive interfaces with a focus on clarity,
            usability, and maintainable frontend systems.
          </p>
          <a
            href="#"
            className="mt-4 inline-flex items-center gap-2 text-sm text-teal-200/90 transition hover:text-teal-100"
          >
            <Icon icon={ExternalLink} size={16} className="text-teal-200/90" />
            External Profile
          </a>
        </div>

        <div data-reveal="up" data-reveal-delay="60">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
            Quick Links
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(event) => {
                    event.preventDefault();
                    scrollToHash(link.href);
                  }}
                  className="text-zinc-300 transition hover:text-teal-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div data-reveal="up" data-reveal-delay="120">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
            Connect
          </p>
          <div className="mt-4 flex items-center gap-2">
            <IconLink href="#" label="GitHub">
              <Icon icon={Github} size={16} className="text-current" />
            </IconLink>
            <IconLink href="#" label="LinkedIn">
              <Icon icon={Linkedin} size={16} className="text-current" />
            </IconLink>
            <IconLink href="mailto:your.email@example.com" label="Email">
              <Icon icon={Mail} size={16} className="text-current" />
            </IconLink>
            <IconLink href="#" label="External Link">
              <Icon icon={ExternalLink} size={16} className="text-current" />
            </IconLink>
          </div>
        </div>

        <div data-reveal="up" data-reveal-delay="180">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
            Location
          </p>
          <div className="mt-4 space-y-2 text-sm text-zinc-300">
            <p>Germany (CET)</p>
            <p className="text-zinc-400">Open to opportunities</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 border-t border-white/10 px-6 py-4 text-xs text-zinc-500 md:flex-row md:items-center md:justify-between">
        <span>&copy; 2026 Venkat Pabbathi. All rights reserved.</span>
        <span>Built with Next.js &amp; Tailwind CSS</span>
      </div>
    </footer>
  );
}
