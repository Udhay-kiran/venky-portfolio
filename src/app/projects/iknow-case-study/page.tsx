import type { Metadata } from "next";
import Link from "next/link";
import ImageCarousel from "@/components/ui/ImageCarousel";

export const metadata: Metadata = {
  title: "IKnow Study App UX Case Study | Pabbathi.dev",
  description:
    "UX case study for the IKnow Study App covering research, usability testing, design process, and outcomes.",
};

const sections = [
  {
    title: "Overview",
    content: [
      "IKnow is a study productivity application designed to help students organize learning material and structure their study sessions.",
      "The goal of the project was to reduce cognitive overload and make it easier for students to start and maintain focused study sessions.",
    ],
  },
  {
    title: "Problem",
    content: [
      "Many students struggle with organizing study material and structuring study sessions.",
      "Common issues include:",
      "The project explored how a simple workflow and structured dashboard could support better study habits.",
    ],
    bullets: [
      "Too many steps before starting a session",
      "Lack of clear progress feedback",
      "Difficulty organizing materials across subjects",
    ],
  },
  {
    title: "Research",
    content: ["A qualitative usability study was conducted to evaluate the prototype.", "Research questions included:"],
    bullets: [
      "How easy is the interface to navigate?",
      "Do users encounter errors while completing tasks?",
      "Are dashboard insights helpful for understanding study progress?",
      "Does the study plan adapt well to user needs?",
    ],
  },
  {
    title: "Study Setup",
    content: [
      "Participants: 4 university students",
      "Session duration: ~15 minutes each",
      "Method:",
      "Participants interacted with the prototype and completed predefined tasks.",
    ],
    bullets: [
      "Task-based usability testing",
      "Direct observation during interaction",
      "Post-study questionnaire",
    ],
  },
  {
    title: "Tasks",
    content: ["Users were asked to perform tasks such as:"],
    bullets: [
      "Uploading and organizing study materials",
      "Navigating the dashboard",
      "Interpreting study insights",
      "Interacting with study planning features",
    ],
  },
  {
    title: "Insights",
    content: ["The study revealed several key observations:"],
    bullets: [
      "Users prefer minimal setup before starting study sessions",
      "Clear progress indicators improve motivation",
      "Structured material organization reduces confusion",
    ],
  },
  {
    title: "Outcome",
    content: [
      "The final prototype simplified the study workflow and improved clarity of task organization.",
      "The redesigned dashboard allowed users to quickly start sessions, track progress, and manage study materials with fewer steps.",
    ],
  },
];

const wireframeImages = [
  {
    src: "/wireframe-bookshelf.png",
    alt: "Wireframe showing a digital bookshelf concept for study materials",
    caption: "Digital Bookshelf concept for organizing learning materials",
  },
  {
    src: "/wireframe-planning.png",
    alt: "Wireframe showing a self reflection and study planning concept",
    caption: "Self Reflection concept for setting goals and planning study sessions",
  },
];

const prototypeImages = [
  {
    src: "/prototype-alpha.png",
    alt: "Alpha prototype showing content management and AI study tools",
    caption: "Alpha prototype exploring content management and AI study tools",
  },
  {
    src: "/prototype-beta.png",
    alt: "Beta prototype showing a left-side navigation layout",
    caption: "Beta prototype with left-side navigation chosen for better clarity and workflow",
  },
];

function CaseStudySection({
  title,
  content,
  bullets,
}: {
  title: string;
  content: string[];
  bullets?: string[];
}) {
  return (
    <section className="mt-16">
      <div className="max-w-3xl">
        <h2 className="text-xl font-semibold tracking-tight text-zinc-50 md:text-2xl">{title}</h2>
        <div className="mt-5 space-y-4 text-base leading-8 text-zinc-300">
          {content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {bullets ? (
            <ul className="space-y-3 pl-5 text-zinc-200">
              {bullets.map((item) => (
                <li key={item} className="list-disc marker:text-teal-300">
                  {item}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export default function IKnowCaseStudyPage() {
  return (
    <main className="min-h-screen text-zinc-100">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="max-w-3xl">
          <nav aria-label="Breadcrumb" className="text-sm text-zinc-400">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/#work" className="transition hover:text-teal-200">
                  Projects
                </Link>
              </li>
              <li aria-hidden="true" className="text-zinc-600">/</li>
              <li className="text-zinc-200">IKnow Case Study</li>
            </ol>
          </nav>

          <section className="mt-10 rounded-3xl border border-white/10 bg-zinc-900/60 p-8 shadow-[0_20px_80px_-40px_rgba(45,212,191,0.18)] backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-[0.26em] text-teal-300/80">
              UX Case Study
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-50 md:text-5xl">
              IKnow Study App &mdash; UX Case Study
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-300">
              Designing a study productivity application through user research and interaction design.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://www.figma.com/proto/VJZyW0kONOLBN3xjz25xjc/IKnow?t=vQidjR2lWxFKggql-1"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm font-semibold text-zinc-100 transition hover:border-teal-400/40 hover:text-teal-200 hover:shadow-[0_0_24px_-16px_rgba(45,212,191,0.65)]"
              >
                View Prototype
              </a>
              <Link
                href="/#work"
                className="inline-flex items-center rounded-xl border border-white/10 bg-transparent px-4 py-2.5 text-sm font-semibold text-zinc-300 transition hover:border-zinc-600 hover:text-zinc-100"
              >
                Back to Projects
              </Link>
            </div>
          </section>
        </div>

        {sections.slice(0, 6).map((section) => (
          <CaseStudySection
            key={section.title}
            title={section.title}
            content={section.content}
            bullets={section.bullets}
          />
        ))}

        <section className="mt-16">
          <div className="max-w-3xl">
            <h2 className="text-xl font-semibold tracking-tight text-zinc-50 md:text-2xl">
              Design Process
            </h2>
            <div className="mt-5 space-y-4 text-base leading-8 text-zinc-300">
              <p>The design process included:</p>
              <ul className="space-y-3 pl-5 text-zinc-200">
                <li className="list-disc marker:text-teal-300">Creating user personas</li>
                <li className="list-disc marker:text-teal-300">Designing wireframes in Figma</li>
                <li className="list-disc marker:text-teal-300">
                  Building interaction flows for study sessions
                </li>
                <li className="list-disc marker:text-teal-300">
                  Iterating the interface based on usability feedback
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 max-w-5xl">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
              <div className="min-w-0">
                <h3 className="text-xl font-semibold tracking-tight text-zinc-50">Wireframes</h3>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-300 sm:text-base">
                  Early conceptual sketches exploring interaction metaphors for organizing
                  learning material and planning study sessions.
                </p>
                <div className="mt-6">
                  <ImageCarousel items={wireframeImages} label="wireframes carousel" />
                </div>
              </div>

              <div className="min-w-0">
                <h3 className="text-xl font-semibold tracking-tight text-zinc-50">
                  Prototype Screens
                </h3>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-300 sm:text-base">
                  Low-fidelity interface prototypes used to compare layouts and refine
                  navigation structure.
                </p>
                <div className="mt-6">
                  <ImageCarousel items={prototypeImages} label="prototype screens carousel" />
                </div>
              </div>
            </div>

            <div className="mt-14 max-w-3xl">
              <h3 className="text-xl font-semibold tracking-tight text-zinc-50">
                Testing &amp; Iteration
              </h3>
              <p className="mt-4 text-base leading-8 text-zinc-300">
                The prototype was evaluated through peer feedback and usability
                discussions. Key improvements included simplifying study plan
                creation, showing only one flashcard at a time to reduce distraction,
                clarifying tab headings, and adding back navigation to make movement
                through the interface smoother.
              </p>
            </div>
          </div>
        </section>

        <CaseStudySection
          title={sections[6].title}
          content={sections[6].content}
          bullets={sections[6].bullets}
        />
      </div>
    </main>
  );
}
