// ============================================================
// PROJECTS — Add your real projects here
// ============================================================

export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  thumbnailPath: string | null; // null = show placeholder
  tags: string[];
  githubUrl: string; // "" = not available
  liveDemoUrl: string; // "" = not available
  featured: boolean;
  overview: string;
  problem: string;
  approach: string;
  keyLearnings: string[];
  screenshots: string[];
  completedDate: string; // e.g. "2026-10" or "In Progress"
  status: "completed" | "in-progress";
}

export const projects: Project[] = [
  {
    slug: "ecommerce-order-status-analysis",
    title: "E-commerce Order Status Analysis",
    shortDescription:
      "Exploring order status frequency and practising data cleaning and analysis with Pandas.",
    thumbnailPath: null,
    tags: ["Python", "Pandas", "Data Analysis"],
    // TODO: Add your GitHub URL when the repo is public
    githubUrl: "",
    liveDemoUrl: "",
    featured: true,
    overview:
      "An exploratory data analysis project focused on understanding e-commerce order statuses. The project involves loading, cleaning, and analysing order data to identify frequency distributions of different order statuses.",
    // TODO: Replace with the specific problem you are investigating
    problem:
      "Understanding the distribution and patterns of order statuses in e-commerce data to practise real-world data analysis workflows.",
    approach:
      "Using Python and Pandas to load the dataset, clean the data by handling missing values and inconsistencies, and perform frequency analysis on order status columns.",
    keyLearnings: [
      "Data loading and initial exploration with Pandas",
      "Data cleaning techniques for handling missing and inconsistent data",
      "Frequency analysis and value counts for categorical data",
      // TODO: Add more learnings as you progress
    ],
    screenshots: [],
    completedDate: "In Progress",
    status: "in-progress",
  },
  // TODO: Add more projects as you complete them
  // Copy the object above and fill in the details for each new project
];
