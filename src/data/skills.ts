// ============================================================
// SKILLS — Update these lists as you learn new technologies
// ============================================================

export interface Skill {
  name: string;
  category: "language" | "framework" | "tool" | "concept";
}

export interface SkillsData {
  /** Technologies you have used in actual projects */
  practising: Skill[];
  /** Technologies you are currently studying or experimenting with */
  learning: Skill[];
}

export const skillsData: SkillsData = {
  practising: [
    { name: "Python", category: "language" },
    { name: "Pandas", category: "framework" },
    // TODO: Add more skills as you use them in projects
  ],

  learning: [
    { name: "SQL", category: "language" },
    { name: "NumPy", category: "framework" },
    { name: "Machine Learning", category: "concept" },
    { name: "Data Visualization", category: "concept" },
    // TODO: Add more skills as you start learning them
  ],
};
