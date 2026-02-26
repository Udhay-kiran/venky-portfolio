import { Icon } from "@/components/ui/Icon";
import { GraduationCap } from "@/lib/icons";
import { Calendar, MapPin } from "lucide-react";
import EducationLanguagesCard from "./EducationLanguagesCard";
import SectionHeading from "../SectionHeading";
import SectionReveal from "../SectionReveal";

export default function Education() {
  const educationItems = [
    {
      degree: "Master of Science \u2013 Computer Science",
      university: "Saarland University",
      location: "Saarbr\u00fccken, Germany",
      dates: "04/2023 \u2013 Present",
      bullets: [
        "Coursework spanning interactive systems, human\u2013computer interaction, and applied software development.",
        "Strong emphasis on implementation through project-based work and system design.",
        "Focus areas: Human-Computer Interaction, Interactive Systems, and Data-Driven Systems",
      ],
      finalProject: null,
    },
    {
      degree: "Bachelor of Science \u2013 Mathematics, Computer Science & Electronics",
      university: "St. Joseph College (Autonomous)",
      location: "Bengaluru, India",
      dates: "08/2019 \u2013 07/2022",
      bullets: [
        "Broad foundation across programming, math, and core electronics.",
        "Coursework included data structures/programming + applied electronics fundamentals.",
        "Final-year project: Clinic Management Website (web app + UI-focused implementation).",
      ],
      finalProject: {
        title: "Final-Year Project: Clinic Management System",
        description:
          "Web-based clinic management system for appointment scheduling and patient record tracking. Designed database schema, implemented CRUD workflows, and built responsive UI for administrative operations.",
        href: "https://drive.google.com/file/d/1cwg1truemlBGttf1z5XZ8ObLAAh5hlgE/view?usp=sharing",
      },
    },
  ];

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
            {educationItems.map((item) => (
              <article
                key={`${item.degree}-${item.university}`}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_14px_40px_-24px_rgba(0,0,0,0.65)]"
                data-reveal="right"
              >
                <div className="absolute left-4 top-6 h-3 w-3 rounded-full bg-teal-400" />
                <div className="ml-6 border-l border-white/10 pl-5">
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold text-zinc-100 md:text-xl">
                      {item.degree}
                    </h3>
                    <p className="text-sm text-zinc-200/95 md:text-base">
                      {item.university}
                    </p>
                    <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-zinc-300/85 md:text-sm">
                      <span className="inline-flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-zinc-300/70" />
                        {item.location}
                      </span>
                      <span className="inline-flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-zinc-300/70" />
                        {item.dates}
                      </span>
                    </div>
                  </div>

                  <ul className="mt-4 space-y-3 text-[14px] leading-relaxed text-zinc-200/90 md:text-[15px]">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-zinc-400/60" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {item.finalProject ? (
                    <div className="mt-4 rounded-xl border border-zinc-800 bg-zinc-950/40 p-4">
                      <h4 className="font-medium text-zinc-100 md:text-[15px]">
                        {item.finalProject.title}
                      </h4>
                      <p className="mt-2 text-sm leading-relaxed text-zinc-300/90">
                        {item.finalProject.description}
                      </p>
                      <a
                        href={item.finalProject.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex items-center justify-center rounded-lg border border-teal-500/60 px-4 py-2 text-sm font-semibold text-teal-200 transition hover:border-teal-300 hover:text-teal-100"
                      >
                        View Project Report (PDF)
                      </a>
                    </div>
                  ) : null}
                </div>
              </article>
            ))}
          </div>

          <EducationLanguagesCard />
        </div>
      </SectionReveal>
    </section>
  );
}
