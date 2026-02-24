import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { Briefcase } from "@/lib/icons";
import SectionHeading from "../SectionHeading";
import SectionReveal from "../SectionReveal";
import { projects } from "../../content/projects/projects";

type ProjectLinks = {
  live?: string;
  github?: string;
  figma?: string;
  report?: string;
};

type Project = {
  slug: string;
  title: string;
  shortDescription: string;
  tags: string[];
  links: ProjectLinks;
  status?: string;
};

function LinkPill({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 rounded-full border border-teal-500/40 px-3 py-1 text-xs font-semibold text-teal-200 transition hover:border-teal-300 hover:text-teal-100"
    >
      {label}
      <span aria-hidden="true" className="translate-y-[1px] text-teal-200/80">
        {"\u2192"}
      </span>
    </Link>
  );
}

function TagList({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1 text-xs font-semibold text-zinc-200"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

function LinksRow({ links }: { links: ProjectLinks }) {
  return (
    <div className="flex flex-wrap gap-3 text-sm">
      {links.live && <LinkPill href={links.live} label="Live" />}
      {links.github && <LinkPill href={links.github} label="GitHub" />}
      {links.figma && <LinkPill href={links.figma} label="Figma" />}
      {links.report && <LinkPill href={links.report} label="Report" />}
    </div>
  );
}

function SpotlightCard({ project }: { project: Project }) {
  return (
    <article className="glaze-hover-diagonal grid gap-6 rounded-2xl border border-zinc-800 bg-zinc-900/70 p-6 shadow-lg transition hover:-translate-y-1 hover:border-teal-500/60 hover:shadow-teal-500/10 md:grid-cols-2 md:items-center">
      <div className="h-full">
        <div className="flex aspect-video items-center justify-center rounded-xl border border-zinc-700 bg-zinc-800/60 text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
          Thumbnail
        </div>
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <h3 className="text-2xl font-semibold text-zinc-50">{project.title}</h3>
          <p className="text-sm leading-relaxed text-zinc-200/90 md:text-[1.05rem]">
            {project.shortDescription}
          </p>
        </div>
        <TagList tags={project.tags} />
        <LinksRow links={project.links} />
      </div>
    </article>
  );
}

function SmallCard({ project }: { project: Project }) {
  return (
    <article className="glaze-hover-diagonal flex h-full flex-col gap-4 rounded-2xl border border-zinc-800 bg-zinc-900/70 p-5 shadow-lg transition hover:-translate-y-1 hover:border-teal-500/60 hover:shadow-teal-500/10">
      <div className="flex h-40 items-center justify-center rounded-xl border border-zinc-700 bg-zinc-800/60 text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
        Thumbnail
      </div>
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-zinc-50">{project.title}</h3>
        <p className="text-sm leading-relaxed text-zinc-200/90 md:text-[1.02rem]">
          {project.shortDescription}
        </p>
        <TagList tags={project.tags} />
      </div>
      <LinksRow links={project.links} />
    </article>
  );
}

export default function Projects() {
  const featured = projects.filter((p) => p.status === "featured");
  const spotlight = featured[0];
  const secondary = featured.slice(1, 3);

  return (
    <section id="work" className="py-16">
      <SectionReveal>
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionHeading
              title="Selected Work"
              icon={
                <Icon icon={Briefcase} size={28} className="text-teal-400 md:h-[30px] md:w-[30px]" />
              }
            />
          </div>
          <Link
            href="#top"
            className="text-sm font-semibold text-teal-300 transition hover:text-teal-200"
          >
            Back to top
          </Link>
        </div>

        <div className="mt-8 space-y-8">
          {spotlight && (
            <div data-reveal="up">
              <SpotlightCard project={spotlight as Project} />
            </div>
          )}

          {secondary.length > 0 && (
            <div className="grid gap-6 md:grid-cols-2">
              {secondary.map((p) => (
                <div key={p.slug} data-reveal="right">
                  <SmallCard project={p as Project} />
                </div>
              ))}
            </div>
          )}
        </div>
      </SectionReveal>
    </section>
  );
}
