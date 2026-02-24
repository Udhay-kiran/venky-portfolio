"use client";

import { Icon } from "@/components/ui/Icon";
import useInViewOnce from "@/hooks/useInViewOnce";
import { Languages } from "@/lib/icons";

const LEVEL_TO_PERCENT: Record<string, number> = {
  A1: 20,
  A2: 35,
  B1: 55,
  B2: 70,
  C1: 85,
  C2: 100,
};

const languages = [
  { name: "English", level: "C1" },
  { name: "German", level: "B1" },
  { name: "Hindi", level: "C2" },
  { name: "Telugu", level: "C2" },
  { name: "Kannada", level: "C2" },
];

function clampPercent(value: number) {
  return Math.max(0, Math.min(100, value));
}

export default function EducationLanguagesCard() {
  const { ref, isVisible } = useInViewOnce<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`section-reveal md:col-span-1 ${isVisible ? "is-visible" : ""}`.trim()}
    >
      <aside className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
        <div className="flex items-center gap-3 text-zinc-50">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-teal-300/20 bg-teal-300/5 text-teal-400">
            <Icon icon={Languages} size={27} className="text-teal-400" />
          </span>
          <h3 className="text-lg font-semibold tracking-tight">Languages</h3>
        </div>

        <div className="mt-6 space-y-6">
          {languages.map((language, index) => {
            const pctRaw = LEVEL_TO_PERCENT[language.level] ?? 0;
            const pct = clampPercent(pctRaw);

            return (
              <div key={language.name}>
                <div className="flex items-center justify-between gap-3">
                  <span className="font-medium text-zinc-100">{language.name}</span>
                  <span className="text-sm text-zinc-400">{language.level}</span>
                </div>
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-1.5 rounded-full bg-gradient-to-r from-teal-300 via-cyan-300 to-indigo-300 transition-[width] duration-[900ms] ease-out motion-reduce:transition-none"
                    style={{
                      width: `${isVisible ? pct : 0}%`,
                      transitionDelay: `${index * 100}ms`,
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </aside>
    </div>
  );
}
