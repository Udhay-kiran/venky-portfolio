import { Icon } from "@/components/ui/Icon";
import { Briefcase, Calendar, MapPin } from "@/lib/icons";
import SectionHeading from "../SectionHeading";
import SectionReveal from "../SectionReveal";

export default function Experience() {
  const roles = [
    {
      company: "Amagi Media Labs",
      title: "Full Stack Developer",
      dates: "2022 - Present",
      location: "Remote / India",
      bullets: [
        "Placeholder bullet about leading feature delivery across frontend and backend.",
        "Placeholder bullet about collaborating with design for calm, premium UX.",
        "Placeholder bullet on performance and reliability improvements.",
      ],
    },
    {
      company: "Scalefull Technologies",
      title: "Full-Stack Intern",
      dates: "2021",
      location: "India",
      bullets: [
        "Placeholder bullet about building internal tools and dashboards.",
        "Placeholder bullet about writing clean, maintainable TypeScript code.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-16">
      <SectionReveal>
        <div className="flex flex-col gap-3">
          <SectionHeading
            title="Experience"
            icon={
              <Icon icon={Briefcase} size={28} className="text-teal-400 md:h-[30px] md:w-[30px]" />
            }
          />
        </div>

        <div className="mt-8 space-y-6">
          {roles.map((role) => (
            <article
              key={role.company}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_14px_40px_-24px_rgba(0,0,0,0.65)]"
              data-reveal="left"
            >
              <div className="absolute left-4 top-6 h-3 w-3 rounded-full bg-teal-400" />
              <div className="ml-6 border-l border-white/10 pl-5">
                <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold text-zinc-100">
                      {role.company}
                    </h3>
                    <p className="text-sm text-zinc-200/95 md:text-base">
                      {role.title}
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-zinc-300/85 md:text-sm">
                    <span className="inline-flex items-center gap-1.5">
                      <Icon icon={Calendar} size={14} className="text-teal-300/85" />
                      {role.dates}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Icon icon={MapPin} size={14} className="text-teal-300/85" />
                      {role.location}
                    </span>
                  </div>
                </div>
                <ul className="mt-4 space-y-3 text-base leading-relaxed text-zinc-200/95 md:text-[1.075rem]">
                  {role.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-zinc-400/60" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </SectionReveal>
    </section>
  );
}
