import {
  Code2,
  Server,
  Cloud,
  PenTool,
  Cpu,
  ChevronDown,
  Wrench,
} from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import SectionHeading from "../SectionHeading";

const skillCards = [
  {
    title: "Frontend",
    icon: Code2,
    proof: "Clean, responsive UI with reusable components.",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "HTML/CSS",
      "Responsive UI",
      "Component Patterns",
      "Accessibility",
      "Design Systems",
    ],
  },
  {
    title: "Backend",
    icon: Server,
    proof: "APIs, auth, and data flows when needed.",
    items: [
      "Node.js",
      "REST APIs",
      "Auth & Sessions",
      "MongoDB",
      "MySQL",
      "Python (scripting)",
    ],
  },
  {
    title: "Deployment & Systems",
    icon: Cloud,
    proof: "Ship + maintain with simple, reliable tooling.",
    items: ["AWS (S3, EC2)", "Vercel", "Render", "Linux CLI", "Git & GitHub"],
  },
  {
    title: "UX & Interaction",
    icon: PenTool,
    proof: "Prototype → feedback → iteration on interaction details.",
    items: [
      "Figma",
      "UX Research",
      "Personas",
      "Usability Testing",
      "Interaction Flows",
    ],
  },
];

const embeddedItems = [
  "C/C++ (Arduino)",
  "Sensor Integration (MPU-6050, L3G4200D)",
  "Real-Time Data Acquisition",
  "Signal Threshold Processing",
  "Serial Data Logging",
];

type SkillChipProps = {
  label: string;
  small?: boolean;
};

function SkillChip({ label, small = false }: SkillChipProps) {
  return (
    <span className={small ? "skill-chip skill-chip--sm skills-chip" : "skill-chip skills-chip"}>
      {label}
    </span>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="skills-section py-16" data-reveal="up">
      <div className="flex flex-col gap-3" data-reveal="up">
        <SectionHeading
          title="Technical Expertise"
          icon={
            <Icon
              icon={Wrench}
              size={28}
              className="text-teal-400 md:h-[30px] md:w-[30px]"
            />
          }
        />
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {skillCards.map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.title}
              className="flex h-full flex-col rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 shadow-sm"
              data-reveal="up"
            >
              <div className="flex items-center gap-3">
                <span className="icon-chip grid h-10 w-10 place-items-center rounded-xl border border-zinc-800 bg-zinc-900/60">
                  <Icon className="h-5 w-5 text-teal-300/80" />
                </span>
                <h3 className="text-lg font-semibold text-zinc-50">{card.title}</h3>
              </div>

              <div className="mt-4 skill-chip-grid">
                {card.items.map((item) => (
                  <SkillChip key={item} label={item} />
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Keep secondary hardware skills collapsed so the primary grid stays scannable. */}
      <div className="mt-6" data-reveal="up">
        <details className="group rounded-2xl border border-zinc-800 bg-zinc-900/30 p-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="icon-chip grid h-10 w-10 place-items-center rounded-xl border border-zinc-800 bg-zinc-900/60">
                <Cpu className="h-5 w-5 text-teal-300/80" />
              </span>
              <div>
                <p className="text-sm font-semibold text-zinc-50">
                  Embedded & Real-Time Systems
                </p>
              </div>
            </div>

            <ChevronDown className="h-5 w-5 text-zinc-400 transition-transform duration-300 group-open:rotate-180" />
          </summary>

          <div className="mt-4 skill-chip-grid">
            {embeddedItems.map((item) => (
              <SkillChip key={item} label={item} small />
            ))}
          </div>
        </details>
      </div>
    </section>
  );
}
