import { Icon } from "@/components/ui/Icon";
import type { LucideIcon } from "@/lib/icons";
import { Code2, LayoutGrid, Layers, User, Wrench } from "@/lib/icons";
import SectionHeading from "../SectionHeading";
import SectionReveal from "../SectionReveal";

type Highlight = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const highlights: Highlight[] = [
  {
    title: "Full-Stack Web Development",
    description:
      "Building web applications using React, Next.js, Node.js, and MongoDB to turn product ideas into working tools across the frontend and backend.",
    icon: Code2,
  },
  {
    title: "Clean & Scalable Architecture",
    description:
      "Designing structured APIs, modular components, and maintainable codebases to keep products easier to extend and support.",
    icon: LayoutGrid,
  },
  {
    title: "UX-Driven Implementation",
    description:
      "Translating research, interaction flows, and design systems into responsive interfaces to support clearer and more usable product experiences.",
    icon: Layers,
  },
  {
    title: "Deployment & Production Experience",
    description:
      "Deploying and maintaining applications using AWS, Vercel, and secure API workflows to support reliable day-to-day usage.",
    icon: Wrench,
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
        <p className="mt-4 max-w-4xl leading-relaxed text-zinc-300 md:text-[1.02rem] md:leading-8">
          I&apos;m Venkat, a Full-Stack Developer and UI/UX Designer currently
          studying Computer Science at Saarland University. I build web
          applications using React, Next.js, Node.js, MongoDB, and REST APIs to
          create responsive interfaces and practical digital tools with a strong
          focus on usability.
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
