import Link from "next/link";
import { projects } from "@/data/projects";
import SectionWrapper from "@/components/layout/SectionWrapper";
import { ArrowRight, ExternalLink, BarChart3, CheckCircle2, ShieldCheck } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";

export default function PreviewProjects() {
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
              FEATURED PROJECTS &amp; CASE STUDIES
            </h2>
          </div>
          <p className="text-sm md:text-base text-on-surface-variant">
            Documented exploratory and analytical work with transparent code and reproducible workflows.
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
            className="bg-surface-container-lowest/90 backdrop-blur-sm border border-outline-variant/60 hover:border-primary/50 transition-all duration-300 rounded-2xl p-6 sm:p-8 md:p-10 shadow-xs hover:shadow-lg relative group hover:-translate-y-0.5"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Context, Methodology & Actions (7 cols) */}
              <div className="lg:col-span-7">
                <div className="flex flex-wrap items-center gap-2.5 mb-4">
                  <span className="text-[11px] font-mono text-outline uppercase tracking-wider font-semibold">
                    {project.completedDate} {"//"} DATA CLEANING &amp; EDA
                  </span>
                  {project.status === "in-progress" ? (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-amber-50 text-amber-800 border border-amber-200 rounded-full text-[11px] font-mono font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-600 animate-pulse" />
                      In Progress (Student Project)
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-full text-[11px] font-mono font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                      Completed
                    </span>
                  )}
                </div>

                <h3 className="font-editorial text-2xl sm:text-3xl md:text-4xl text-on-surface group-hover:text-primary transition-colors mb-3 font-normal leading-snug">
                  {project.title}
                </h3>

                <p className="text-sm sm:text-base text-on-surface-variant mb-6 leading-relaxed">
                  {project.shortDescription}
                </p>

                {/* Technical Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 bg-surface-container-low border border-outline-variant/50 text-on-surface rounded-md text-xs font-mono font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Key Practice Highlights Strip */}
                <div className="space-y-2 pt-4 border-t border-outline-variant/30 text-xs font-mono text-on-surface-variant mb-8">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>Handling missing &amp; inconsistent order date timestamps</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>Categorical order status frequency distribution analysis</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-primary shrink-0" />
                    <span>100% reproducible script pipeline with clean documentation</span>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="flex flex-wrap items-center gap-3">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="bg-on-surface text-surface-container-lowest px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-primary transition-all flex items-center gap-2 shadow-xs hover:shadow-md group/btn"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>

                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-surface-container-low border border-outline-variant/60 hover:border-primary/40 text-on-surface hover:text-primary px-4 py-2.5 rounded-lg text-sm font-medium flex items-center gap-2 transition-all"
                    >
                      <GithubIcon className="h-4 w-4" />
                      <span>Inspect Code</span>
                      <ExternalLink className="h-3.5 w-3.5 text-outline" />
                    </a>
                  ) : (
                    <span className="text-outline text-xs font-mono italic px-3 py-2 bg-surface-container-low rounded">
                      Repository in progress
                    </span>
                  )}
                </div>
              </div>

              {/* Right Column: Simulated Live Analytics Visualizer (5 cols) */}
              <div className="lg:col-span-5 bg-surface-container-low/80 border border-outline-variant/60 rounded-xl p-5 sm:p-6 flex flex-col justify-between shadow-inner">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-outline-variant/30 mb-4">
                    <span className="text-xs font-mono text-on-surface font-semibold flex items-center gap-1.5">
                      <BarChart3 className="h-4 w-4 text-primary" />
                      Analysis Distribution Chart
                    </span>
                    <span className="text-[10px] font-mono text-primary bg-primary-light px-2 py-0.5 rounded border border-primary/20">
                      Sample N = 3,250
                    </span>
                  </div>

                  {/* Simulated Data Bars */}
                  <div className="space-y-3.5 font-mono text-xs">
                    <div>
                      <div className="flex justify-between text-[11px] mb-1">
                        <span className="text-on-surface font-medium">Delivered</span>
                        <span className="text-emerald-700 font-semibold">68% (2,210)</span>
                      </div>
                      <div className="w-full h-2.5 bg-surface-container-lowest rounded-full overflow-hidden border border-outline-variant/40">
                        <div className="h-full bg-emerald-500 rounded-full w-[68%]" />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-[11px] mb-1">
                        <span className="text-on-surface font-medium">Shipped</span>
                        <span className="text-blue-700 font-semibold">18% (585)</span>
                      </div>
                      <div className="w-full h-2.5 bg-surface-container-lowest rounded-full overflow-hidden border border-outline-variant/40">
                        <div className="h-full bg-blue-500 rounded-full w-[18%]" />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-[11px] mb-1">
                        <span className="text-on-surface font-medium">Processing</span>
                        <span className="text-amber-700 font-semibold">9% (293)</span>
                      </div>
                      <div className="w-full h-2.5 bg-surface-container-lowest rounded-full overflow-hidden border border-outline-variant/40">
                        <div className="h-full bg-amber-500 rounded-full w-[9%]" />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-[11px] mb-1">
                        <span className="text-on-surface font-medium">Cancelled</span>
                        <span className="text-rose-700 font-semibold">5% (162)</span>
                      </div>
                      <div className="w-full h-2.5 bg-surface-container-lowest rounded-full overflow-hidden border border-outline-variant/40">
                        <div className="h-full bg-rose-500 rounded-full w-[5%]" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mini Metric Strip */}
                <div className="mt-6 pt-4 border-t border-outline-variant/30 grid grid-cols-2 gap-2 font-mono text-center">
                  <div className="p-2 bg-surface-container-lowest rounded border border-outline-variant/30">
                    <div className="text-[10px] text-outline uppercase">Missing Values</div>
                    <div className="text-xs font-semibold text-emerald-700 mt-0.5">0 Unhandled</div>
                  </div>
                  <div className="p-2 bg-surface-container-lowest rounded border border-outline-variant/30">
                    <div className="text-[10px] text-outline uppercase">Workflow</div>
                    <div className="text-xs font-semibold text-primary mt-0.5">Pandas 2.2</div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}
