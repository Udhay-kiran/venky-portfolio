"use client";

import AppIcon from "@/components/ui/AppIcon";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const roles = [
  "Full-Stack Developer (UI/UX focus)",
  "UI/UX Engineer",
  "Frontend Developer",
  "Software Developer",
];

const CONTACT_EMAIL = "your.email@example.com";
const LINKEDIN_URL = "#";
const GITHUB_URL = "#";
const CV_PATH = "#";

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const copyResetRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const openContactBtnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setFadeIn(false);
      timeoutRef.current = setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setFadeIn(true);
      }, 250);
    }, 3000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  useEffect(() => {
    if (!isContactOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    modalRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsContactOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      openContactBtnRef.current?.focus();
    };
  }, [isContactOpen]);

  useEffect(() => {
    return () => {
      if (copyResetRef.current) clearTimeout(copyResetRef.current);
    };
  }, []);

  async function handleCopyEmail() {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopiedEmail(true);
      if (copyResetRef.current) clearTimeout(copyResetRef.current);
      copyResetRef.current = setTimeout(() => setCopiedEmail(false), 1200);
    } catch {
      setCopiedEmail(false);
    }
  }

  function scrollToId(id: string) {
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
    <>
      <section id="top" className="min-h-[calc(100vh-72px)]">
        <div className="flex min-h-[calc(100vh-72px)] items-center justify-center">
          <div className="mx-auto flex w-full max-w-3xl flex-col items-center justify-center space-y-8 py-12 text-center">
            <h1
              className="text-4xl font-bold tracking-tight text-zinc-50 md:text-6xl lg:text-7xl"
              data-reveal="up"
              style={{ transitionDelay: "0ms" }}
            >
              Venkat Pabbathi
            </h1>

            <div data-reveal="up" style={{ transitionDelay: "90ms" }}>
              <p
                className={`
                  relative
                  inline-flex
                  items-center
                  overflow-hidden
                  text-lg
                  font-semibold
                  tracking-tight
                  text-teal-400
                  transition-opacity
                  duration-500
                  md:text-2xl
                  ${fadeIn ? "opacity-100" : "opacity-0"}
                `}
              >
                <span
                  key={roleIndex}
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-y-[-14px] left-[-60%] w-[220%] bg-gradient-to-r from-transparent via-teal-200/30 to-transparent opacity-70 blur-md mix-blend-screen animate-sheen motion-reduce:animate-none"
                />
                <span className="mr-2 font-mono opacity-80">&gt;</span>
                <span className="font-mono">{roles[roleIndex]}</span>
                <span
                  aria-hidden="true"
                  className="ml-1 inline-block font-mono text-teal-300/80 animate-cursor motion-reduce:animate-none"
                >
                  _
                </span>
              </p>
            </div>

            <p
              className="max-w-2xl text-base leading-relaxed text-zinc-300 md:text-lg md:leading-8"
              data-reveal="up"
              style={{ transitionDelay: "180ms" }}
            >
              I like turning ideas into clean, responsive interfaces — and improving UX through research and iteration.
            </p>

            <p
              className="mt-4 text-center text-sm tracking-wide text-zinc-500 opacity-80"
              data-reveal="up"
              style={{ transitionDelay: "250ms" }}
            >
              MSc Mathematics &amp; Computer Science &middot; Saarland
              University &middot; Germany (CET)
            </p>

            <div
              className="flex flex-wrap items-center justify-center gap-4"
              data-reveal="up"
              style={{ transitionDelay: "330ms" }}
            >
              <Link
                href="#work"
                onClick={(event) => {
                  event.preventDefault();
                  scrollToId("work");
                }}
                className="inline-flex items-center justify-center rounded-xl bg-teal-500 px-6 py-3 text-sm font-semibold text-zinc-950 shadow-[0_0_0_rgba(20,184,166,0)] transition duration-200 hover:-translate-y-0.5 hover:bg-teal-600 hover:shadow-[0_8px_24px_-12px_rgba(20,184,166,0.65)] active:translate-y-0 active:scale-[0.985] motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:hover:shadow-none motion-reduce:active:scale-100"
              >
                View Work
              </Link>
              <button
                ref={openContactBtnRef}
                type="button"
                onClick={() => setIsContactOpen(true)}
                className="inline-flex items-center justify-center rounded-xl border border-zinc-700 bg-transparent px-6 py-3 text-sm font-semibold text-zinc-100 shadow-[0_0_0_rgba(20,184,166,0)] transition duration-200 hover:-translate-y-0.5 hover:border-zinc-500 hover:bg-zinc-900/40 hover:shadow-[0_10px_28px_-18px_rgba(148,163,184,0.45)] active:translate-y-0 active:scale-[0.985] motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:hover:shadow-none motion-reduce:active:scale-100"
              >
                Get in touch
              </button>
            </div>

            <div
              className="flex flex-col items-center"
              data-reveal="up"
              style={{ transitionDelay: "410ms" }}
            >
              <a
                href={CV_PATH}
                className="text-sm text-zinc-500 transition hover:text-white"
              >
                Download CV (PDF)
              </a>

              <a
                href="#about"
                aria-label="Scroll to about section"
                onClick={(event) => {
                  event.preventDefault();
                  scrollToId("about");
                }}
                className="mt-6 flex flex-col items-center justify-center opacity-60 transition hover:opacity-100"
              >
                <span className="text-xs tracking-[0.16em] text-zinc-500">
                  Scroll for more
                </span>
                <span className="mt-2 text-2xl text-zinc-400 motion-reduce:animate-none animate-floatSlow">
                  &darr;
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {isContactOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/75 px-4 backdrop-blur-[2px]"
          onClick={() => setIsContactOpen(false)}
        >
          <div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-dialog-title"
            aria-describedby="contact-dialog-description"
            tabIndex={-1}
            onClick={(event) => event.stopPropagation()}
            className="w-full max-w-md rounded-2xl border border-zinc-800 bg-zinc-950/95 p-5 shadow-2xl outline-none"
          >
            <div className="mb-4 flex items-start justify-between gap-4">
              <div>
                <h2
                  id="contact-dialog-title"
                  className="text-lg font-semibold text-zinc-50"
                >
                  Get in touch
                </h2>
                <p
                  id="contact-dialog-description"
                  className="mt-1 text-sm text-zinc-400"
                >
                  Venkat Pabbathi
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsContactOpen(false)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800 text-zinc-300 transition hover:border-zinc-700 hover:text-zinc-100"
                aria-label="Close dialog"
              >
                <AppIcon name="x" size={16} className="text-current" />
              </button>
            </div>

            <div className="space-y-3 text-sm">
              <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 px-4 py-3">
                <div className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                  Email
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-700 bg-zinc-900/60 text-teal-300/80">
                    <AppIcon name="mail" size={16} className="text-current" />
                  </span>
                  <input
                    type="text"
                    readOnly
                    value={CONTACT_EMAIL}
                    onFocus={(event) => event.currentTarget.select()}
                    className="min-w-0 flex-1 rounded-lg border border-zinc-700 bg-zinc-900/60 px-3 py-2 text-zinc-100 outline-none ring-0 selection:bg-teal-400/30"
                    aria-label="Email address"
                  />
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 px-3 py-2 text-zinc-200 transition hover:border-zinc-600 hover:text-zinc-50"
                  >
                    <AppIcon name="copy" size={15} className="text-current" />
                    <span>{copiedEmail ? "Copied \u2713" : "Copy"}</span>
                  </button>
                </div>
              </div>

              <div className="grid gap-2 sm:grid-cols-2">
                <a
                  href={LINKEDIN_URL}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900/40 px-4 py-2.5 font-medium text-zinc-100 transition hover:border-teal-500/60 hover:text-teal-200"
                >
                  <AppIcon name="linkedin" size={16} className="text-current" />
                  LinkedIn
                </a>
                <a
                  href={GITHUB_URL}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900/40 px-4 py-2.5 font-medium text-zinc-100 transition hover:border-teal-500/60 hover:text-teal-200"
                >
                  <AppIcon name="github" size={16} className="text-current" />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}




