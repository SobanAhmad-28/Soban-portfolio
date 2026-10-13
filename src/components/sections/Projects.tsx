import Link from "next/link";
import { projects } from "@/data/projects";
import SectionWrapper from "@/components/layout/SectionWrapper";
import { ArrowRight, ExternalLink, Database } from "lucide-react";

export default function Projects() {
  if (projects.length === 0) {
    return (
      <SectionWrapper id="projects">
        <div className="flex items-center gap-3 mb-8">
          <span className="text-xs font-mono text-primary font-semibold">03 //</span>
          <h2 className="text-xs font-mono tracking-widest text-on-surface-variant uppercase font-semibold">
            FEATURED PROJECTS
          </h2>
        </div>
        <p className="text-sm text-on-surface-variant italic">
          Projects will appear here as they are added.
        </p>
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper id="projects">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-mono text-primary font-semibold">03 //</span>
            <h2 className="text-xs font-mono tracking-widest text-on-surface-variant uppercase font-semibold">
              FEATURED PROJECTS
            </h2>
          </div>
          <p className="text-sm md:text-base text-on-surface-variant">
            Real exploratory and analytical work with documented code and transparent methodologies.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-primary" />
          <span className="text-xs font-mono text-outline">
            Showing {projects.length} selected {projects.length === 1 ? "study" : "studies"}
          </span>
        </div>
      </div>

      {/* Projects Stack */}
      <div className="space-y-8">
        {projects.map((project) => (
          <article
            key={project.slug}
            className="bg-surface-container-lowest border border-outline-variant/60 hover:border-primary/40 transition-all duration-150 rounded p-6 md:p-8 shadow-xs relative group"
          >
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8">
              {/* Left Column: Context & Overview */}
              <div className="lg:w-2/3">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="text-[11px] font-mono text-outline uppercase tracking-wider">
                    {project.completedDate} {"//"} DATA CLEANING &amp; ANALYSIS
                  </span>
                  {project.status === "in-progress" ? (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-amber-50 text-amber-800 border border-amber-200 rounded text-[11px] font-mono font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-600 animate-pulse" />
                      In Progress
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded text-[11px] font-mono font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                      Completed
                    </span>
                  )}
                </div>

                <h3 className="font-editorial text-2xl md:text-3xl text-on-surface group-hover:text-primary transition-colors mb-3 font-normal leading-snug">
                  {project.title}
                </h3>

                <p className="text-sm md:text-base text-on-surface-variant mb-6 leading-relaxed">
                  {project.shortDescription}
                </p>

                {/* Technical Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 bg-surface-container-low border border-outline-variant/50 text-on-surface rounded text-xs font-mono font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column: Scope & Pipeline Box */}
              <div className="lg:w-1/3 bg-surface-container-low/70 border border-outline-variant/40 rounded p-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Database className="h-4 w-4 text-primary" />
                    <span className="text-[11px] font-mono text-outline uppercase tracking-wider font-semibold">
                      Scope &amp; Data Pipeline
                    </span>
                  </div>

                  <p className="text-xs text-on-surface-variant mb-4 leading-normal">
                    Exploratory data analysis focused on order status frequencies, data sanitation, and reproducible analysis with Pandas.
                  </p>

                  <div className="space-y-2.5 border-t border-outline-variant/30 pt-3.5 font-mono text-xs">
                    <div className="flex justify-between items-center">
                      <span className="text-on-surface-variant text-[11px]">Status:</span>
                      <span className="text-on-surface font-semibold px-2 py-0.5 bg-surface-container-lowest border border-outline-variant/40 rounded text-[11px]">
                        In Progress
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-on-surface-variant text-[11px]">Methodology:</span>
                      <span className="text-on-surface font-semibold px-2 py-0.5 bg-surface-container-lowest border border-outline-variant/40 rounded text-[11px]">
                        Python &amp; Pandas
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="flex items-center gap-4 mt-6 pt-4 border-t border-outline-variant/30">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="bg-on-surface text-surface-container-lowest px-4 py-2 rounded text-xs font-medium hover:bg-primary transition-colors flex items-center gap-1.5 shadow-xs group/btn"
                  >
                    <span>Case Study</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                  </Link>

                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-on-surface-variant hover:text-primary text-xs font-medium flex items-center gap-1 transition-colors"
                    >
                      <span>Inspect Code</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  ) : (
                    <span className="text-outline text-xs italic">
                      Repo in progress
                    </span>
                  )}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}
