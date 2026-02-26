import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { ExternalLink, Github, LayoutGrid } from "lucide-react";
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
  impact?: string;
  thumbnail?: string;
  tags: string[];
  links: ProjectLinks;
  status?: string;
};

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

function ThumbnailActions({ links }: { links: ProjectLinks }) {
  const openHref = links.live || links.figma || links.report;

  if (!links.github && !openHref) return null;

  return (
    <div className="pointer-events-none absolute inset-x-3 bottom-3 flex items-center justify-end gap-2 opacity-100 transition duration-200 md:opacity-0 md:group-hover:opacity-100 md:group-focus-within:opacity-100">
      {links.github && (
        <a
          href={links.github}
          target="_blank"
          rel="noreferrer"
          aria-label="Open GitHub repository"
          className="pointer-events-auto inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-zinc-950/70 text-zinc-100 backdrop-blur-sm transition hover:border-teal-400/50 hover:text-teal-200"
        >
          <Github className="h-4 w-4" />
        </a>
      )}
      {openHref && (
        <a
          href={openHref}
          target="_blank"
          rel="noreferrer"
          aria-label="Open project in new tab"
          className="pointer-events-auto inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-zinc-950/70 text-zinc-100 backdrop-blur-sm transition hover:border-teal-400/50 hover:text-teal-200"
        >
          <ExternalLink className="h-4 w-4" />
        </a>
      )}
    </div>
  );
}

function ProjectThumb({
  src,
  alt,
  variant,
  links,
}: {
  src?: string;
  alt: string;
  variant: "featured" | "grid";
  links: ProjectLinks;
}) {
  const aspectClass = variant === "featured" ? "aspect-[16/9]" : "aspect-[16/10]";
  const sizes =
    variant === "featured"
      ? "(min-width: 1024px) 42vw, (min-width: 768px) 48vw, 100vw"
      : "(min-width: 1024px) 31vw, (min-width: 768px) 46vw, 100vw";

  return (
    <div className={`relative ${aspectClass} overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]`}>
      {src ? (
        <>
          <Image
            src={src}
            alt={alt}
            fill
            sizes={sizes}
            className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
          />
          <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-black/25 via-transparent to-black/10" />
        </>
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-zinc-800/60 text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500 md:text-sm">
          Thumbnail
        </div>
      )}
      <ThumbnailActions links={links} />
    </div>
  );
}

function SpotlightCard({ project }: { project: Project }) {
  return (
    <article className="group glaze-hover-diagonal grid gap-6 rounded-2xl border border-zinc-800 bg-zinc-900/70 p-6 shadow-lg transition hover:-translate-y-1 hover:border-teal-500/60 hover:shadow-teal-500/10 md:grid-cols-2 md:items-center">
      <ProjectThumb
        src={project.thumbnail}
        alt={`${project.title} screenshot`}
        variant="featured"
        links={project.links}
      />
      <div className="space-y-4">
        <div className="space-y-2">
          <h3 className="text-2xl font-semibold text-zinc-50">{project.title}</h3>
          <p className="text-sm leading-relaxed text-zinc-200/90 md:text-[1.05rem]">
            {project.shortDescription}
          </p>
          {project.impact ? (
            <p className="mt-2 text-sm leading-relaxed text-zinc-200/90 md:text-[1.05rem]">
              {project.impact}
            </p>
          ) : null}
        </div>
        <TagList tags={project.tags} />
      </div>
    </article>
  );
}

function SmallCard({ project }: { project: Project }) {
  return (
    <article className="group glaze-hover-diagonal flex h-full flex-col gap-4 rounded-2xl border border-zinc-800 bg-zinc-900/70 p-5 shadow-lg transition hover:-translate-y-1 hover:border-teal-500/60 hover:shadow-teal-500/10">
      <ProjectThumb
        src={project.thumbnail}
        alt={`${project.title} screenshot`}
        variant="grid"
        links={project.links}
      />
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-zinc-50">{project.title}</h3>
        <p className="text-sm leading-relaxed text-zinc-200/90 md:text-[1.02rem]">
          {project.shortDescription}
        </p>
        {project.impact ? (
          <p className="mt-2 text-sm leading-relaxed text-zinc-200/90 md:text-[1.02rem]">
            {project.impact}
          </p>
        ) : null}
        <TagList tags={project.tags} />
      </div>
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
              title="Projects"
              icon={
                <Icon icon={LayoutGrid} size={28} className="text-teal-400 md:h-[30px] md:w-[30px]" />
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
