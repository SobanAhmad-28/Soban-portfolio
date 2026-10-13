import { personalInfo } from "@/data/personal";
import SectionWrapper from "@/components/layout/SectionWrapper";

export default function About() {
  return (
    <SectionWrapper id="about">
      {/* Section Kicker */}
      <div className="flex items-center gap-3 mb-8">
        <span className="text-xs font-mono text-primary font-semibold">01 //</span>
        <h2 className="text-xs font-mono tracking-widest text-on-surface-variant uppercase font-semibold">
          ABOUT
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left: Narrative Copy */}
        <div className="lg:col-span-7 space-y-4 text-on-surface-variant leading-relaxed text-sm md:text-base">
          <h3 className="font-editorial text-2xl md:text-3xl text-on-surface font-normal leading-snug">
            Engineering rigor, reproducibility, and disciplined problem-solving over black-box abstractions.
          </h3>

          {personalInfo.bio.map((paragraph, i) => (
            <p key={i} className="text-on-surface-variant">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Right: Current Focus Areas Card */}
        <div className="lg:col-span-5">
          <div className="bg-surface-container-lowest border border-outline-variant/60 rounded p-6 shadow-xs">
            <div className="flex items-center justify-between pb-3.5 border-b border-outline-variant/30 mb-5">
              <span className="text-xs font-mono text-on-surface font-semibold">
                Current Focus Areas
              </span>
              <span className="text-[11px] font-mono text-primary px-2 py-0.5 bg-primary-light rounded font-medium">
                Active Study
              </span>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-xs font-mono text-primary font-semibold mt-0.5">01</span>
                <div>
                  <h4 className="text-sm font-semibold text-on-surface">Exploratory Data Analysis</h4>
                  <p className="text-xs text-on-surface-variant mt-0.5 leading-normal">
                    Hypothesis formulation, frequency distributions, outlier observation, and summary statistics.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-xs font-mono text-primary font-semibold mt-0.5">02</span>
                <div>
                  <h4 className="text-sm font-semibold text-on-surface">Data Sanitation with Pandas</h4>
                  <p className="text-xs text-on-surface-variant mt-0.5 leading-normal">
                    Handling missing values, data type coercion, vector operations, and robust data cleaning.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-xs font-mono text-primary font-semibold mt-0.5">03</span>
                <div>
                  <h4 className="text-sm font-semibold text-on-surface">Relational Databases &amp; SQL</h4>
                  <p className="text-xs text-on-surface-variant mt-0.5 leading-normal">
                    Structuring schemas, basic aggregation queries, filtering, and table joins.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-xs font-mono text-primary font-semibold mt-0.5">04</span>
                <div>
                  <h4 className="text-sm font-semibold text-on-surface">Foundations in Machine Learning</h4>
                  <p className="text-xs text-on-surface-variant mt-0.5 leading-normal">
                    Studying core algorithms, evaluation metrics, and model pipelines with Scikit-learn.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
