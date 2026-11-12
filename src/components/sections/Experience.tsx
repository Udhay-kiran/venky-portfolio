import { Icon } from "@/components/ui/Icon";
import { Briefcase } from "@/lib/icons";
import { Calendar, MapPin } from "lucide-react";
import SectionHeading from "../SectionHeading";
import SectionReveal from "../SectionReveal";

export default function Experience() {
  const experiences = [
    {
      company: "August-Wilhelm Scheer Institut \u2013 Smart Energy Lab",
      title: "Junior Researcher (Werkstudent), UI/UX Design",
      dates: "07/2026 \u2014 Present",
      location: "Saarbr\u00fccken, Germany",
      bullets: [
        "Created and iteratively refined Figma wireframes and prototypes for AutoMap.AI, an AI-based data-mapping tool (5-step flow, dashboard, format library).",
        "Bridged interface and backend: reviewed backend code and tested the running app to learn what the backend can deliver, shaping confidence levels, review/retry flows and error states.",
        "Built and documented a design system (components, type scale, spacing), applied WCAG accessibility guidelines, and adjusted layouts after frontend feedback; parts are implemented by developers.",
        "Turning requirements and mapped data flows into role-specific dashboards for EnOptI, an energy-optimisation research project.",
      ],
    },
    {
      company: "Fraunhofer IPA",
      title: "Master\u2019s Thesis (external) \u2013 Working title: Interface Design for Pairwise Comparison in a Multi-Criteria Decision-Support Tool",
      dates: "07/2026 \u2014 Present",
      location: "Stuttgart, Germany",
      bullets: [
        "Designing and developing a web-based interface to replace an Excel-based workflow in a multi-criteria decision-support tool.",
        "Analysed the existing Excel/Python pipeline (utility curves, AHP pairwise-comparison weighting, Monte Carlo simulation) to define requirements for the interface.",
        "Planning and conducting requirements interviews and think-aloud usability evaluation with Fraunhofer researchers.",
        "Designing a controlled user study comparing three ways of displaying value information during pairwise comparison.",
      ],
    },
    {
      company: "Amagi Media Labs",
      title: "Full-Stack Developer",
      dates: "08/2022 \u2014 03/2023",
      location: "Bengaluru, India",
      bullets: [
        "Developed full-stack product features using React.js, Node.js, MongoDB, and MySQL to support internal media content workflows.",
        "Built reusable React dashboard components for internal tools to help teams monitor and manage media assets more clearly.",
        "Implemented REST APIs in Node.js for media asset retrieval and workflow actions to enable structured integration across internal systems.",
        "Integrated AWS services such as S3 and EC2 into media management tools to support cloud-based storage and deployment.",
        "Debugged and maintained production applications across the stack to improve reliability and keep internal platforms running smoothly.",
      ],
    },
    {
      company: "Scalefull Technologies",
      title: "Full-Stack Development Intern",
      dates: "12/2021 \u2014 05/2022",
      location: "Pune, India",
      bullets: [
        "Contributed to full-stack web application features using React, Node.js, Python, MongoDB, and MySQL to support scalable product functionality.",
        "Built responsive frontend components in React to improve usability and consistency across the application interface.",
        "Implemented backend endpoints and database interactions using Node.js, Python, MongoDB, and MySQL to enable reliable communication between frontend and server systems.",
        "Worked with REST APIs and structured data models to support feature integration and application workflows.",
        "Collaborated with senior engineers in an Agile development environment to improve code quality and application maintainability.",
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
