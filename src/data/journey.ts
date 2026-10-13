// ============================================================
// LEARNING JOURNEY — Add your real milestones chronologically
// ============================================================

export interface Milestone {
  date: string; // e.g. "2024-08"
  title: string;
  description: string;
  icon: "graduation-cap" | "code" | "book-open" | "award" | "briefcase" | "rocket";
  type: "education" | "achievement" | "certification" | "project" | "experience";
}

export const milestones: Milestone[] = [
  // TODO: Replace the date and university with your real details
  {
    date: "2025-08",
    title: "Started B.Tech in Computer Science Engineering",
    description: "Began studying Computer Science Engineering, building foundations in programming and mathematics.",
    icon: "graduation-cap",
    type: "education",
  },
  {
    date: "2026-06",
    title: "Started Learning Python",
    description: "Began learning Python programming and exploring its applications in data science and automation.",
    icon: "code",
    type: "achievement",
  },
  {
    date: "2026-09",
    title: "First Data Analysis Project",
    description: "Started the E-commerce Order Status Analysis project, practising data cleaning and exploration with Pandas.",
    icon: "rocket",
    type: "project",
  },
  // TODO: Add more milestones as you progress in your learning journey
  // Examples: completing a course, finishing a project, learning a new tool, etc.
];
