"use client";

import { useState } from "react";
import SectionWrapper from "@/components/layout/SectionWrapper";
import { CheckCircle2, Clock, Terminal, Layers, Sparkles, Database, FileSpreadsheet, GitBranch, Cpu, Code2 } from "lucide-react";

export default function PreviewSkills() {
  const [activeTab, setActiveTab] = useState<"all" | "code" | "learning">("all");

  const skillCards = [
    {
      name: "Python",
      category: "code",
      level: "Hands-on Practice",
      desc: "Core scripting, data structures, list comprehensions, functional pipelines, and custom modules.",
      icon: Code2,
      accent: "from-blue-500/10 to-indigo-500/10 border-blue-500/30 text-blue-600",
      pill: "bg-blue-50 text-blue-700 border-blue-200",
    },
    {
      name: "Pandas",
      category: "code",
      level: "Hands-on Practice",
      desc: "DataFrames, exploratory data analysis, filtering, series manipulation, and vector operations.",
      icon: FileSpreadsheet,
      accent: "from-indigo-500/10 to-purple-500/10 border-indigo-500/30 text-indigo-600",
      pill: "bg-indigo-50 text-indigo-700 border-indigo-200",
    },
    {
      name: "SQL & Databases",
      category: "learning",
      level: "Currently Learning",
      desc: "Relational database modeling, SELECT queries, JOIN operations, GROUP BY aggregations, and filtering.",
      icon: Database,
      accent: "from-amber-500/10 to-orange-500/10 border-amber-500/30 text-amber-600",
      pill: "bg-amber-50 text-amber-700 border-amber-200",
    },
    {
      name: "NumPy",
      category: "learning",
      level: "Currently Learning",
      desc: "N-dimensional arrays, matrix transformations, linear algebra essentials, and numerical vectorization.",
      icon: Cpu,
      accent: "from-cyan-500/10 to-blue-500/10 border-cyan-500/30 text-cyan-600",
      pill: "bg-cyan-50 text-cyan-700 border-cyan-200",
    },
    {
      name: "Machine Learning Foundations",
      category: "learning",
      level: "Currently Learning",
      desc: "Supervised & unsupervised learning fundamentals, train-test validation splits, Scikit-learn pipelines.",
      icon: Sparkles,
      accent: "from-purple-500/10 to-pink-500/10 border-purple-500/30 text-purple-600",
      pill: "bg-purple-50 text-purple-700 border-purple-200",
    },
    {
      name: "Git & Version Control",
      category: "code",
      level: "Hands-on Practice",
      desc: "Commit cleanliness, feature branching, reproducible markdown documentation, and GitHub workflows.",
      icon: GitBranch,
      accent: "from-emerald-500/10 to-teal-500/10 border-emerald-500/30 text-emerald-600",
      pill: "bg-emerald-50 text-emerald-700 border-emerald-200",
    },
  ];

  const filteredSkills = skillCards.filter((s) => {
    if (activeTab === "all") return true;
    return s.category === activeTab;
  });

  return (
    <SectionWrapper id="skills">
      {/* Section Kicker */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-mono text-primary font-semibold">02 //</span>
            <h2 className="text-xs font-mono tracking-widest text-on-surface-variant uppercase font-semibold">
              TECHNICAL TOOLCHAIN &amp; METHODOLOGY
            </h2>
          </div>
          <p className="text-sm md:text-base text-on-surface-variant">
            Disciplined toolchain focused on clean data engineering, reproducible scripts, and verified learning.
          </p>
        </div>

        {/* Interactive Filter Pills */}
        <div className="flex items-center gap-1.5 p-1 bg-surface-container-low rounded-lg border border-outline-variant/60 font-mono text-xs">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-3 py-1.5 rounded-md transition-all ${
              activeTab === "all"
                ? "bg-surface-container-lowest text-primary font-semibold shadow-xs"
                : "text-on-surface-variant hover:text-on-surface"
            }`}
          >
            All ({skillCards.length})
          </button>
          <button
            onClick={() => setActiveTab("code")}
            className={`px-3 py-1.5 rounded-md transition-all flex items-center gap-1 ${
              activeTab === "code"
                ? "bg-surface-container-lowest text-primary font-semibold shadow-xs"
                : "text-on-surface-variant hover:text-on-surface"
            }`}
          >
            <CheckCircle2 className="w-3 h-3 text-emerald-600" />
            Active Code
          </button>
          <button
            onClick={() => setActiveTab("learning")}
            className={`px-3 py-1.5 rounded-md transition-all flex items-center gap-1 ${
              activeTab === "learning"
                ? "bg-surface-container-lowest text-amber-700 font-semibold shadow-xs"
                : "text-on-surface-variant hover:text-on-surface"
            }`}
          >
            <Clock className="w-3 h-3 text-amber-600" />
            In Study
          </button>
        </div>
      </div>

      {/* Grid of Elevated Skill Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
        {filteredSkills.map((skill) => {
          const IconComp = skill.icon;
          return (
            <div
              key={skill.name}
              className="bg-surface-container-lowest/90 backdrop-blur-sm border border-outline-variant/60 hover:border-primary/50 transition-all duration-300 rounded-xl p-5 shadow-xs hover:shadow-md hover:-translate-y-1 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center text-primary border border-outline-variant/40 group-hover:bg-primary group-hover:text-surface-container-lowest transition-colors">
                    <IconComp className="h-5 w-5" />
                  </div>
                  <span
                    className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium border ${skill.pill}`}
                  >
                    {skill.category === "code" ? (
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                    ) : (
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-600 animate-pulse" />
                    )}
                    {skill.level}
                  </span>
                </div>

                <h3 className="text-base font-semibold text-on-surface mb-2 group-hover:text-primary transition-colors">
                  {skill.name}
                </h3>

                <p className="text-xs text-on-surface-variant leading-relaxed">
                  {skill.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-outline-variant/30 flex items-center justify-between text-[11px] font-mono text-outline">
                <span>Verified in repo</span>
                <span className="text-primary font-semibold">Active &bull; 2024-2026</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Tooling Environment Bar */}
      <div className="bg-surface-container-lowest/90 backdrop-blur-sm border border-outline-variant/60 rounded-xl p-5 shadow-xs flex flex-col lg:flex-row lg:items-center justify-between gap-4 font-mono text-xs">
        <div className="flex items-center gap-2.5 text-on-surface font-semibold">
          <Terminal className="h-4 w-4 text-primary shrink-0" />
          <span>Active Development Environment:</span>
        </div>

        <div className="flex flex-wrap items-center gap-2 text-on-surface-variant">
          <span className="px-2.5 py-1 bg-surface-container-low border border-outline-variant/40 rounded">
            VS Code &amp; Jupyter Lab
          </span>
          <span className="px-2.5 py-1 bg-surface-container-low border border-outline-variant/40 rounded">
            Git &amp; GitHub
          </span>
          <span className="px-2.5 py-1 bg-surface-container-low border border-outline-variant/40 rounded">
            PowerShell &amp; Linux CLI
          </span>
          <span className="px-2.5 py-1 bg-surface-container-low border border-outline-variant/40 rounded">
            Python 3.11+
          </span>
        </div>
      </div>
    </SectionWrapper>
  );
}
