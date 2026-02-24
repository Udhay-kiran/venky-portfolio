import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { GraduationCap } from "@/lib/icons";
import EducationLanguagesCard from "./EducationLanguagesCard";
import SectionHeading from "../SectionHeading";
import SectionReveal from "../SectionReveal";

export default function Education() {
  return (
    <section id="education" className="py-16">
      <SectionReveal>
        <div className="flex flex-col gap-3">
          <SectionHeading
            title="Education"
            icon={
              <Icon icon={GraduationCap} size={28} className="text-teal-400 md:h-[30px] md:w-[30px]" />
            }
          />
        </div>

        <div className="mt-8 grid gap-8 md:grid-cols-3">
          <div className="space-y-6 md:col-span-2">
            {/* MSc */}
            <article
              className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6"
              data-reveal="right"
            >
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-zinc-50">
                    MSc Math &amp; CS
                  </h3>
                  <p className="text-sm text-zinc-300">Saarland University</p>
                </div>
                <span className="text-xs font-medium text-zinc-500">
                  Placeholder dates
                </span>
              </div>
            </article>

            {/* BSc with nested project */}
            <article
              className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6"
              data-reveal="right"
            >
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-zinc-50">
                    BSc Computer Science
                  </h3>
                  <p className="text-sm text-zinc-300">Placeholder University</p>
                </div>
                <span className="text-xs font-medium text-zinc-500">
                  Placeholder dates
                </span>
              </div>

              <div className="mt-5 rounded-xl border border-zinc-800 bg-zinc-950/50 p-5">
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <div className="space-y-1">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-200/80">
                      Final Year Project
                    </p>
                    <h4 className="text-base font-semibold text-zinc-50">
                      Clinic Management Website
                    </h4>
                    <p className="text-sm text-zinc-400">
                      Placeholder one-liner about the project and outcomes.
                    </p>
                  </div>
                  <Link
                    href="/docs/clinic-project-report.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-lg border border-teal-500/60 px-4 py-2 text-sm font-semibold text-teal-200 transition hover:border-teal-300 hover:text-teal-100"
                  >
                    View Report (PDF)
                  </Link>
                </div>
              </div>
            </article>
          </div>

          <EducationLanguagesCard />
        </div>
      </SectionReveal>
    </section>
  );
}
