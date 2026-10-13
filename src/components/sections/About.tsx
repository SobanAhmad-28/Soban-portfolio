import { personalInfo } from "@/data/personal";
import SectionWrapper from "@/components/layout/SectionWrapper";
import { Sparkles, Terminal, Database, LineChart, Code2, CheckCircle2, BookOpen } from "lucide-react";

export default function About() {
  const focusAreas = [
    {
      num: "01",
      title: "Exploratory Data Analysis (EDA)",
      desc: "Hypothesis generation, frequency distributions, observing missing patterns, and calculating statistical summaries with Pandas.",
      tag: "Pandas & Stats",
      icon: LineChart,
      accent: "text-blue-600 bg-blue-50 border-blue-200",
    },
    {
      num: "02",
      title: "Data Sanitation & Wrangling",
      desc: "Handling inconsistent schemas, null imputation strategies, type coercion, and vector calculations on tabular datasets.",
      tag: "Sanitation & Wrangling",
      icon: Code2,
      accent: "text-emerald-600 bg-emerald-50 border-emerald-200",
    },
    {
      num: "03",
      title: "Relational Databases & SQL",
      desc: "Writing structured queries, filtering, inner/outer joins, and group-by aggregations for database exploration.",
      tag: "SQL & Relational",
      icon: Database,
      accent: "text-amber-600 bg-amber-50 border-amber-200",
    },
    {
      num: "04",
      title: "Foundations in Machine Learning",
      desc: "Studying core algorithmic principles, evaluation metrics (precision, recall, F1), and model pipelines with Scikit-learn.",
      tag: "ML & Statistics",
      icon: Sparkles,
      accent: "text-purple-600 bg-purple-50 border-purple-200",
    },
  ];

  return (
    <SectionWrapper id="about">
      {/* Section Kicker */}
      <div className="flex items-center gap-3 mb-8">
        <span className="text-xs font-mono text-primary font-semibold">01 //</span>
        <h2 className="text-xs font-mono tracking-widest text-on-surface-variant uppercase font-semibold">
          ABOUT &amp; DIRECTION
        </h2>
      </div>

      {/* Modern Bento Grid Layout */}
      <div className="space-y-6">
        {/* Top Bento Row: Philosophy (7 cols) + Quick Academic Profile (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Narrative Card */}
          <div className="lg:col-span-7 bg-surface-container-lowest/90 backdrop-blur-sm border border-outline-variant/60 rounded-xl p-6 sm:p-8 shadow-xs hover:border-primary/40 transition-all duration-300">
            <div className="pl-4 border-l-2 border-primary/60 bg-primary/5 py-3 pr-4 rounded-r mb-6">
              <h3 className="font-editorial text-2xl sm:text-3xl text-on-surface font-normal leading-snug">
                Engineering rigor, reproducibility, and disciplined problem-solving over black-box abstractions.
              </h3>
            </div>

            <div className="space-y-4 text-on-surface-variant leading-relaxed text-sm sm:text-base mb-6">
              {personalInfo.bio.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            <div className="p-3.5 bg-surface-container-low/80 border border-outline-variant/50 rounded-lg flex items-center gap-3 text-xs font-mono text-on-surface">
              <Terminal className="h-4 w-4 text-primary shrink-0" />
              <span>
                <span className="text-primary font-semibold">Commitment:</span> Consistent daily coding practice, transparent Git history, and authentic project documentation.
              </span>
            </div>
          </div>

          {/* Academic & Professional Trajectory Card */}
          <div className="lg:col-span-5 bg-surface-container-lowest/90 backdrop-blur-sm border border-outline-variant/60 rounded-xl p-6 sm:p-8 shadow-xs hover:border-primary/40 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-outline-variant/30 mb-6">
                <span className="text-xs font-mono text-on-surface font-semibold flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-primary" />
                  Academic Profile
                </span>
                <span className="text-[11px] font-mono text-primary px-2.5 py-0.5 bg-primary-light rounded-full font-medium border border-primary/20">
                  {personalInfo.graduationYear}
                </span>
              </div>

              <div className="space-y-4 font-mono text-xs">
                <div className="flex justify-between items-center py-2 border-b border-outline-variant/30">
                  <span className="text-outline uppercase text-[10px] tracking-wider">Institution</span>
                  <span className="text-on-surface font-semibold text-right capitalize">{personalInfo.university}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-outline-variant/30">
                  <span className="text-outline uppercase text-[10px] tracking-wider">Degree Track</span>
                  <span className="text-on-surface font-semibold text-right">{personalInfo.degree}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-outline-variant/30">
                  <span className="text-outline uppercase text-[10px] tracking-wider">Location</span>
                  <span className="text-on-surface font-semibold text-right">{personalInfo.location}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-outline uppercase text-[10px] tracking-wider">Primary Track</span>
                  <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 font-semibold text-right">
                    AI/ML &amp; Data Science
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-outline-variant/30">
              <div className="flex items-center gap-2 text-xs text-on-surface-variant font-mono">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>Open for collaborative student projects &amp; internship roles.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bento Row: 4 Focus Area Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {focusAreas.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.num}
                className="bg-surface-container-lowest/90 backdrop-blur-sm border border-outline-variant/60 hover:border-primary/50 transition-all duration-300 rounded-xl p-5 shadow-xs hover:shadow-md hover:-translate-y-1 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-9 h-9 rounded-lg bg-surface-container-low flex items-center justify-center text-primary border border-outline-variant/40 group-hover:bg-primary group-hover:text-surface-container-lowest transition-colors">
                      <IconComponent className="h-4 w-4" />
                    </div>
                    <span className="text-[10px] font-mono text-outline font-semibold">
                      {`${item.num} //`}
                    </span>
                  </div>

                  <h4 className="text-sm font-semibold text-on-surface mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h4>

                  <p className="text-xs text-on-surface-variant leading-relaxed mb-4">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-outline-variant/30">
                  <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-mono font-medium border ${item.accent}`}>
                    {item.tag}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
