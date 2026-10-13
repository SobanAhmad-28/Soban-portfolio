"use client";

import { useState } from "react";
import SectionWrapper from "@/components/layout/SectionWrapper";
import { skillsData } from "@/data/skills";
import { CheckCircle2, Clock, Terminal, Code2, Database, FileSpreadsheet, Cpu, Sparkles, BarChart2 } from "lucide-react";

export default function Skills() {
  const [activeTab, setActiveTab] = useState<"all" | "practising" | "learning">("all");

  const getSkillIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case "python":
        return Code2;
      case "pandas":
        return FileSpreadsheet;
      case "sql":
        return Database;
      case "numpy":
        return Cpu;
      case "machine learning":
        return Sparkles;
      case "data visualization":
        return BarChart2;
      default:
        return Code2;
    }
  };

  const allSkills = [
    ...skillsData.practising.map((s) => ({
      ...s,
      type: "practising" as const,
      statusLabel: "Hands-on Practice",
      subtext: "Applied in data cleaning & analysis project workflows.",
    })),
    ...skillsData.learning.map((s) => ({
      ...s,
      type: "learning" as const,
      statusLabel: "Currently Learning",
      subtext: "Studying concepts and building foundational understanding.",
    })),
  ];

  const filteredSkills = allSkills.filter((s) => {
    if (activeTab === "all") return true;
    return s.type === activeTab;
  });

  return (
    <SectionWrapper id="skills">
      {/* Section Kicker */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-mono text-primary font-semibold">02 //</span>
            <h2 className="text-xs font-mono tracking-widest text-on-surface-variant uppercase font-semibold">
              TECHNICAL TOOLCHAIN &amp; STUDY
            </h2>
          </div>
          <p className="text-sm md:text-base text-on-surface-variant">
            Authentic division between technologies actively used in code versus those currently under study.
          </p>
        </div>

        {/* Interactive Filter Pills */}
        <div className="flex items-center gap-1.5 p-1 bg-surface-container-low rounded-lg border border-outline-variant/60 font-mono text-xs">
          <button
            type="button"
            onClick={() => setActiveTab("all")}
            className={`px-3 py-1.5 rounded-md transition-all ${
              activeTab === "all"
                ? "bg-surface-container-lowest text-primary font-semibold shadow-xs"
                : "text-on-surface-variant hover:text-on-surface"
            }`}
          >
            All ({allSkills.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("practising")}
            className={`px-3 py-1.5 rounded-md transition-all flex items-center gap-1 ${
              activeTab === "practising"
                ? "bg-surface-container-lowest text-primary font-semibold shadow-xs"
                : "text-on-surface-variant hover:text-on-surface"
            }`}
          >
            <CheckCircle2 className="w-3 h-3 text-emerald-600" />
            Active Code ({skillsData.practising.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("learning")}
            className={`px-3 py-1.5 rounded-md transition-all flex items-center gap-1 ${
              activeTab === "learning"
                ? "bg-surface-container-lowest text-amber-700 font-semibold shadow-xs"
                : "text-on-surface-variant hover:text-on-surface"
            }`}
          >
            <Clock className="w-3 h-3 text-amber-600" />
            In Study ({skillsData.learning.length})
          </button>
        </div>
      </div>

      {/* Grid of Dynamic Skill Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
        {filteredSkills.map((skill) => {
          const IconComp = getSkillIcon(skill.name);
          const isPractising = skill.type === "practising";
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
                    className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium border ${
                      isPractising
                        ? "bg-emerald-50 text-emerald-800 border-emerald-200"
                        : "bg-amber-50 text-amber-800 border-amber-200"
                    }`}
                  >
                    {isPractising ? (
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                    ) : (
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-600 animate-pulse" />
                    )}
                    {skill.statusLabel}
                  </span>
                </div>

                <h3 className="text-base font-semibold text-on-surface mb-1.5 group-hover:text-primary transition-colors">
                  {skill.name}
                </h3>

                <p className="text-xs text-on-surface-variant leading-relaxed mb-3">
                  {skill.subtext}
                </p>
              </div>

              <div className="pt-3 border-t border-outline-variant/30 flex items-center justify-between text-[11px] font-mono text-outline">
                <span className="capitalize">Category: {skill.category}</span>
                <span className={isPractising ? "text-emerald-700 font-medium" : "text-amber-700 font-medium"}>
                  {isPractising ? "Active Practice" : "Coursework"}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Tooling Environment Bar */}
      <div className="bg-surface-container-lowest/90 backdrop-blur-sm border border-outline-variant/60 rounded-xl p-5 shadow-xs flex flex-col lg:flex-row lg:items-center justify-between gap-4 font-mono text-xs">
        <div className="flex items-center gap-2.5 text-on-surface font-semibold">
          <Terminal className="h-4 w-4 text-primary shrink-0" />
          <span>Active Learning &amp; Dev Setup:</span>
        </div>

        <div className="flex flex-wrap items-center gap-2 text-on-surface-variant">
          <span className="px-2.5 py-1 bg-surface-container-low border border-outline-variant/40 rounded">
            VS Code &amp; Jupyter Lab
          </span>
          <span className="px-2.5 py-1 bg-surface-container-low border border-outline-variant/40 rounded">
            Git &amp; GitHub
          </span>
          <span className="px-2.5 py-1 bg-surface-container-low border border-outline-variant/40 rounded">
            Python 3.11+
          </span>
          <span className="px-2.5 py-1 bg-surface-container-low border border-outline-variant/40 rounded">
            PowerShell &amp; CLI
          </span>
        </div>
      </div>
    </SectionWrapper>
  );
}
