// ============================================================
// PROJECTS — Add your real projects here
// ============================================================

export interface ProjectKeyFinding {
  label: string;
  value: string;
  context?: string;
}

export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  thumbnailPath: string | null; // null = show placeholder
  tags: string[];
  githubUrl: string; // "" = not available
  liveDemoUrl: string; // "" = not available
  featured: boolean;
  category?: string; // e.g. "SQL & RELATIONAL ANALYTICS" or "DATA CLEANING & EDA"
  overview: string;
  problem: string;
  approach: string;
  keyLearnings: string[];
  keyFindings?: ProjectKeyFinding[];
  screenshots: string[];
  completedDate: string; // e.g. "Completed" or "In Progress"
  status: "completed" | "in-progress";
}

export const projects: Project[] = [
  {
    slug: "olist-ecommerce-sql-analysis",
    title: "Olist E-commerce SQL Analysis",
    shortDescription:
      "Analyzed e-commerce order-item metrics, monthly delivered-order sales, top-performing product categories, seller performance, and customer review ratings using SQL.",
    thumbnailPath: null,
    tags: ["MySQL", "SQL", "MySQL Workbench"],
    githubUrl: "https://github.com/SobanAhmad-28/Olist-Ecommerce-Sql-Analysis",
    liveDemoUrl: "",
    featured: true,
    category: "SQL & RELATIONAL ANALYTICS",
    overview:
      "A relational database analysis of the Brazilian Olist E-commerce dataset using MySQL and MySQL Workbench. Evaluated transactional order-item metrics, monthly delivered-order sales trajectories, top-performing product categories, merchant volume distributions, and customer satisfaction review scores.",
    problem:
      "Investigating e-commerce sales cycles, revenue distribution across product verticals, individual seller performance variations, and customer review rating patterns through structured SQL queries and multi-table joins.",
    approach:
      "Formulated multi-table relational joins, aggregate functions, and temporal date filters in MySQL Workbench to query delivered orders, calculate monthly sales timelines, rank product category revenues, evaluate seller concentrations, and compute average review ratings.",
    keyLearnings: [
      "Multi-table relational joins across orders, order items, products, sellers, and customer reviews in MySQL",
      "Monthly time-series sales aggregation identifying peak sales volume (November 2017: 987,765.37)",
      "Category revenue ranking establishing Health & Beauty as the leading category (1,233,131.72)",
      "Merchant sales metrics analyzing top seller performance (226,987.93) and customer review rating distributions (~4.09/5)",
      "Writing structured, readable, and reproducible analytical SQL queries using MySQL Workbench",
    ],
    keyFindings: [
      {
        label: "Highest Monthly Sales",
        value: "987,765.37",
        context: "November 2017 (Delivered order sales peak during Black Friday)",
      },
      {
        label: "Leading Product Category",
        value: "1,233,131.72",
        context: "Health & Beauty (Top grossing category across all products)",
      },
      {
        label: "Top Seller Product Sales",
        value: "226,987.93",
        context: "Highest individual merchant product sales volume recorded",
      },
      {
        label: "Average Review Score",
        value: "4.09 / 5",
        context: "Overall customer review rating across delivered orders",
      },
    ],
    screenshots: [],
    completedDate: "Completed",
    status: "completed",
  },
];
