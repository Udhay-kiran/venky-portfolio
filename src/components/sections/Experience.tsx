import { Icon } from "@/components/ui/Icon";
import { Briefcase } from "@/lib/icons";
import { Calendar, MapPin } from "lucide-react";
import SectionHeading from "../SectionHeading";
import SectionReveal from "../SectionReveal";

export default function Experience() {
  const experiences = [
    {
      company: "Amagi Media Labs",
      title: "Full Stack Developer",
      dates: "08/2022 \u2014 03/2023",
      location: "Bengaluru, India",
      bullets: [
        "Designed and implemented full-stack features using React.js, Node.js, MongoDB, and MySQL.",
        "Built reusable UI components and internal dashboards for structured media data workflows.",
        "Developed and integrated REST APIs for media asset management and content delivery.",
        "Worked with AWS services (S3, EC2) for deployment and cloud-based storage.",
        "Debugged and maintained production systems to ensure reliability and performance.",
      ],
    },
    {
      company: "Scalefull Technologies",
      title: "Full-Stack Development Intern",
      dates: "12/2021 \u2014 05/2022",
      location: "Pune, India",
      bullets: [
        "Contributed to full-stack web application development using React, Node.js, Python, MongoDB, and MySQL.",
        "Implemented frontend components and backend endpoints for feature enhancements and bug resolution.",
        "Worked with structured data models and supported API integration and testing.",
        "Assisted in debugging, refactoring, and improving application performance under senior mentorship.",
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
          {experiences.map((role) => (
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
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-zinc-300/85 md:text-sm">
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="h-4 w-4 text-zinc-300/70" />
                        {role.location}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar className="h-4 w-4 text-zinc-300/70" />
                        {role.dates}
                      </span>
                    </div>
                  </div>
                </div>
                <ul className="mt-4 space-y-3 text-[14px] leading-relaxed text-zinc-200/90 md:text-[15px]">
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
