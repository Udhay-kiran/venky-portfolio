import { Icon } from "@/components/ui/Icon";
import type { LucideIcon } from "@/lib/icons";
import { Code2, PenTool, Search, User, Workflow } from "@/lib/icons";
import SectionHeading from "../SectionHeading";
import SectionReveal from "../SectionReveal";

type Highlight = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const highlights: Highlight[] = [
  {
    title: "User Research & Evaluation",
    description:
      "Personas, task analysis, requirements interviews and usability testing to find out what people actually need before and after something is built.",
    icon: Search,
  },
  {
    title: "Interface & Interaction Design",
    description:
      "Wireframes, prototypes and design systems in Figma, built with WCAG accessibility guidelines in mind.",
    icon: PenTool,
  },
  {
    title: "Code-Aware Design",
    description:
      "Reading the code behind the product to understand what it can deliver, where it is uncertain and where it breaks, then designing the interface for that, not just for the ideal flow.",
    icon: Workflow,
  },
  {
    title: "Full-Stack Development",
    description:
      "Building and deploying web applications with React, Next.js, Node.js, MongoDB and REST APIs, on AWS and Vercel.",
    icon: Code2,
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="pt-6 pb-14 md:pt-6 md:pb-[4.5rem]">
      <SectionReveal className="mx-auto max-w-5xl">
        <SectionHeading
          title="About"
          icon={
            <Icon
              icon={User}
              size={28}
              className="text-teal-400 md:h-[30px] md:w-[30px]"
            />
          }
        />
        <p className="mt-4 leading-relaxed text-zinc-300 md:text-[1.02rem] md:leading-8">
          I&apos;m Venkat, a UI/UX designer with a background in full-stack
          development (React, Next.js, Node.js, MongoDB). I&apos;m currently
          designing the UI for an AI-based data-mapping tool and dashboards for
          an energy-optimisation research project at the August-Wilhelm Scheer
          Institut. In parallel, I&apos;m designing and developing a web-based
          decision-support interface and running a controlled user study for my
          Master&apos;s thesis at Fraunhofer IPA. I&apos;m an MSc student in
          Mathematics and Computer Science at Saarland University, focusing on
          human-computer interaction. My design work starts from how the
          product actually runs: the code behind it, the data it depends on,
          and the cases where it fails. I&apos;m looking for roles that
          combine UI/UX design with frontend development.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {highlights.map((item, index) => {
            const Glyph = item.icon;
            return (
              <article
                key={item.title}
                className="glaze-hover rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md transition hover:bg-white/[0.07]"
                data-reveal={index % 2 === 0 ? "left" : "right"}
                data-reveal-delay={80 + index * 60}
              >
                <div className="flex items-start gap-3">
                  <span className="icon-chip mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-xl border border-teal-300/20 bg-teal-300/5 text-teal-200">
                    <Icon icon={Glyph} size={18} strokeWidth={2} className="text-teal-300/90" />
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-zinc-100 md:text-base">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-zinc-300/90">
                      {item.description}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </SectionReveal>
    </section>
  );
}
