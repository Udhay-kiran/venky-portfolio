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
    title: "Frontend-first mindset",
    description: "I enjoy turning rough ideas into clear, responsive interfaces.",
    icon: Code2,
  },
  {
    title: "Iteration over guesswork",
    description: "I prototype, collect feedback, then refine the small details.",
    icon: LayoutGrid,
  },
  {
    title: "Comfortable full-stack",
    description: "I can handle APIs, auth, and data flows when the project needs it.",
    icon: Layers,
  },
  {
    title: "Clean implementation",
    description: "I care about naming, structure, and maintainable UI patterns.",
    icon: Wrench,
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-14 md:py-[4.5rem]">
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
          I&apos;m Venkat, an MSc Mathematics &amp; Computer Science student at
          Saarland University. I enjoy building responsive products, polishing
          interaction details, and improving UX with research-driven iteration.
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
                  <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-xl border border-teal-300/20 bg-teal-300/5 text-teal-200">
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
