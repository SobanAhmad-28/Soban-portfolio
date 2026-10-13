import { skillsData } from "@/data/skills";
import SectionWrapper from "@/components/layout/SectionWrapper";
import { CheckCircle2, Clock, Info, LineChart } from "lucide-react";

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      {/* Section Kicker */}
      <div className="flex items-center gap-3 mb-8">
        <span className="text-xs font-mono text-primary font-semibold">02 //</span>
        <h2 className="text-xs font-mono tracking-widest text-on-surface-variant uppercase font-semibold">
          TECHNICAL SKILLS
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Group 1: Hands-on Practice */}
        <div className="bg-surface-container-lowest border border-outline-variant/60 hover:border-outline-variant transition-all rounded p-6 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-outline-variant/30 mb-6">
              <div>
                <h3 className="text-base font-semibold text-on-surface flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  Hands-on Practice
                </h3>
                <p className="text-xs text-on-surface-variant mt-0.5">
                  Applied regularly in project repositories &amp; data analysis workflows
                </p>
              </div>
              <span className="px-2.5 py-1 bg-surface-container-low text-on-surface-variant border border-outline-variant/40 rounded text-[11px] font-mono font-medium">
                Active Code
              </span>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {skillsData.practising.map((skill) => (
                <span
                  key={skill.name}
                  className="inline-flex items-center gap-1.5 px-3 py-1 bg-surface-container-low border border-outline-variant/60 text-on-surface rounded text-xs font-mono hover:border-primary/50 transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {skill.name}
                </span>
              ))}
            </div>
          </div>

          <div className="p-3.5 bg-surface-container-low/70 border border-outline-variant/40 rounded text-xs text-on-surface-variant flex items-start gap-2.5">
            <Info className="h-4 w-4 text-primary shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-on-surface">Proficiency Transparency:</span> Writing
              modular functions, optimizing vector executions with Pandas &amp; NumPy, and articulating analytical findings cleanly.
            </div>
          </div>
        </div>

        {/* Group 2: Currently Learning */}
        <div className="bg-surface-container-lowest border border-outline-variant/60 hover:border-outline-variant transition-all rounded p-6 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-outline-variant/30 mb-6">
              <div>
                <h3 className="text-base font-semibold text-on-surface flex items-center gap-2">
                  <Clock className="h-5 w-5 text-amber-600" />
                  Currently Learning
                </h3>
                <p className="text-xs text-on-surface-variant mt-0.5">
                  Expanding theoretical rigor &amp; algorithmic depth through coursework
                </p>
              </div>
              <span className="px-2.5 py-1 bg-amber-50 text-amber-800 border border-amber-200 rounded text-[11px] font-mono flex items-center gap-1.5 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-600 animate-pulse" />
                Active Study
              </span>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {skillsData.learning.map((skill) => (
                <span
                  key={skill.name}
                  className="inline-flex items-center gap-1.5 px-3 py-1 bg-surface-container-low border border-outline-variant/60 text-on-surface rounded text-xs font-mono hover:border-amber-600/50 transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                  {skill.name}
                </span>
              ))}
            </div>
          </div>

          <div className="p-3.5 bg-surface-container-low/70 border border-outline-variant/40 rounded text-xs text-on-surface-variant flex items-start gap-2.5">
            <LineChart className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-on-surface">Proficiency Transparency:</span> Practicing
              SQL joins, aggregations, database schemas, and mathematical foundations for ML modeling.
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
