export type Project = {
  slug: string;
  title: string;
  shortDescription: string;
  impact?: string;
  thumbnail?: string;
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
      "Full-stack anime tracking platform with authentication, personal lists, and dynamic search.",
    impact:
      "Built secure JWT-based authentication, protected routes, and REST APIs with cloud deployment.",
    thumbnail: "/images/projects/anilog.png",
    tags: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "JWT Auth",
      "REST APIs",
      "Tailwind CSS",
      "Vercel",
    ],
    links: {
      live: "https://anilog-tracker.vercel.app/",
      github: "https://github.com/Udhay-kiran/anime-tracker.git",
    },
    status: "featured",
  },
  {
    slug: "recipe-cards",
    title: "Recipe Cards",
    shortDescription: "Responsive recipe cards website with clean UI.",
    impact:
      "Focused on responsive layout behavior, clean component structure, and deployment-ready frontend delivery.",
    thumbnail: "/images/projects/recipe.png",
    tags: ["React", "Next.js", "CSS/Tailwind", "Vercel"],
    links: {
      live: "https://recipe-cards-eight.vercel.app/",
      github: "https://github.com/Udhay-kiran/recipe-cards.git",
    },
    status: "featured",
  },
  {
    slug: "iknow",
    title: "IKnow Study App (Figma)",
    shortDescription:
      "HCI project: personas, prototypes, usability testing, inclusive UX.",
    impact:
      "Produced research-backed UX artifacts and interactive prototypes to validate flows and usability decisions.",
    thumbnail: "/images/projects/iknow.png",
    tags: ["Figma", "Usability Testing", "UX Research", "Interaction Design", "Personas"],
    links: {
      figma: "https://www.figma.com/proto/VJZyW0kONOLBN3xjz25xjc/IKnow?t=vQidjR2lWxFKggql-1",
    },
    status: "featured",
  },
  {
    slug: "clinic-management",
    title: "Clinic Management Website (Bachelor's Project)",
    shortDescription:
      "Client-based academic project for an Ayurvedic clinic. Code unavailable; report available.",
    impact:
      "Delivered a workflow-oriented web solution documented through the final report, focusing on practical UI and data handling.",
    thumbnail: "/images/projects/placeholder.png",
    tags: ["PHP", "MySQL", "Bootstrap"],
    links: {
      report: "/docs/clinic-project-report.pdf",
    },
    status: "academic",
  },
];
