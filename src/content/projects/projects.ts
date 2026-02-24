export type Project = {
  slug: string;
  title: string;
  shortDescription: string;
  tags: string[];
  links: {
    github?: string;
    live?: string;
    figma?: string;
    report?: string;
  };
  status?: "featured" | "academic";
};

export const projects: Project[] = [
  {
    slug: "anilog",
    title: "Anilog",
    shortDescription:
      "Full-stack anime tracker with authentication, personal lists, and responsive UI.",
    tags: ["Next.js", "React", "TypeScript", "MongoDB"],
    links: {
      live: "https://anilog-tracker.vercel.app/",
      github: "https://github.com/Udhay-kiran", // replace with exact repo later
    },
    status: "featured",
  },
  {
    slug: "recipe-cards",
    title: "Recipe Cards",
    shortDescription: "Responsive recipe cards website with clean UI.",
    tags: ["React", "Next.js", "CSS"],
    links: {
      live: "https://recipe-cards-git-master-udhay-kirans-projects.vercel.app/",
      github: "https://github.com/Udhay-kiran", // replace with exact repo later
    },
    status: "featured",
  },
  {
    slug: "iknow",
    title: "IKnow Study App (Figma)",
    shortDescription:
      "HCI project: personas, prototypes, usability testing, inclusive UX.",
    tags: ["Figma", "HCI", "UX Research"],
    links: {
      figma: "", // add later
    },
    status: "featured",
  },
  {
    slug: "clinic-management",
    title: "Clinic Management Website (Bachelor's Project)",
    shortDescription:
      "Client-based academic project for an Ayurvedic clinic. Code unavailable; report available.",
    tags: ["PHP", "MySQL", "Bootstrap"],
    links: {
      report: "/docs/clinic-project-report.pdf",
    },
    status: "academic",
  },
];
