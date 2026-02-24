import { Icon } from "@/components/ui/Icon";
import type { LucideIcon } from "@/lib/icons";
import {
  Accessibility,
  Atom,
  BookOpen,
  Braces,
  Database,
  GitBranch,
  Globe,
  Layers,
  Monitor,
  PanelTop,
  PenTool,
  Route,
  Search,
  Server,
  ShieldCheck,
  Sparkles,
  SquareCode,
  TestTube,
  Wind,
  Workflow,
  Wrench,
} from "@/lib/icons";
import SectionHeading from "../SectionHeading";
import SectionReveal from "../SectionReveal";

type SkillIconComponent = LucideIcon;

const skillIconMap: Record<string, SkillIconComponent> = {
  "Next.js": PanelTop,
  React: Atom,
  TypeScript: Braces,
  JavaScript: SquareCode,
  "Tailwind CSS": Wind,
  Accessibility,
  "Design Systems": Layers,
  "Node.js": Server,
  Express: Route,
  "REST APIs": Globe,
  MongoDB: Database,
  PostgreSQL: Database,
  "Auth & Sessions": ShieldCheck,
  "Git & GitHub": GitBranch,
  Figma: PenTool,
  "Jest/Testing": TestTube,
  Storybook: BookOpen,
  "CI/CD": Workflow,
  "UX Research": Search,
};

type SkillGroup = {
  title: string;
  icon: SkillIconComponent;
  items: string[];
};

const skillGroups: SkillGroup[] = [
    {
      title: "Frontend",
      icon: Monitor,
      items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Accessibility", "Design Systems"],
    },
    {
      title: "Backend",
      icon: Server,
      items: ["Node.js", "Express", "REST APIs", "MongoDB", "PostgreSQL", "Auth & Sessions"],
    },
    {
      title: "Tools & UX",
      icon: Sparkles,
      items: ["Git & GitHub", "Figma", "Jest/Testing", "Storybook", "CI/CD", "UX Research"],
    },
  ];

export default function Skills() {
  return (
    <section id="skills" className="py-16">
      <SectionReveal>
        <div className="flex flex-col gap-3">
          <SectionHeading
            title="Skills"
            icon={<Icon icon={Wrench} size={28} className="text-teal-400 md:h-[30px] md:w-[30px]" />}
          />
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_14px_40px_-28px_rgba(0,0,0,0.6)]"
              data-reveal="up"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-teal-300/20 bg-teal-300/5 text-teal-200">
                  <Icon icon={group.icon} size={18} className="text-teal-300/90" />
                </span>
                <h3 className="text-lg font-semibold text-zinc-100">{group.title}</h3>
              </div>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {group.items.map((item) => {
                  const ItemIcon = skillIconMap[item] ?? Sparkles;
                  return (
                    <span
                      key={item}
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-3.5 py-1.5 text-sm font-medium text-zinc-200/95"
                    >
                      <span className="inline-flex h-5 w-5 items-center justify-center rounded-md border border-teal-300/15 bg-teal-300/5 text-teal-200/90">
                        <Icon icon={ItemIcon} size={18} className="text-teal-300/90" />
                      </span>
                      <span>{item}</span>
                    </span>
                  );
                })}
              </div>
            </article>
          ))}
        </div>
      </SectionReveal>
    </section>
  );
}
