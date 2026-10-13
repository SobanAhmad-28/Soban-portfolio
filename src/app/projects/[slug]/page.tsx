import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { projects } from "@/data/projects";
import {
  ArrowLeft,
  ExternalLink,
  Table,
  CheckCircle2,
  Info,
  Clock,
  AlertCircle,
} from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} — Project Case Study`,
    description: project.shortDescription,
    alternates: {
      canonical: `/projects/${slug}`,
    },
    openGraph: {
      title: project.title,
      description: project.shortDescription,
      type: "article",
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const isPending = project.status === "in-progress";

  return (
    <div className="pt-24 pb-20">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        {/* SUB-NAV / BREADCRUMB BAR */}
        <div className="mb-8 flex items-center justify-between border-b border-outline-variant/30 pb-4">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-xs font-mono text-on-surface-variant hover:text-primary transition-colors group"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
            <span>Back to Project Index</span>
          </Link>

          <div className="flex items-center gap-2 text-xs font-mono text-on-surface-variant">
            <span>STATUS:</span>
            {isPending ? (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-600 animate-pulse" />
                In Progress
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                Completed
              </span>
            )}
          </div>
        </div>

        {/* SECTION: HERO & SPECIFICATION HEADER */}
        <section className="mb-12">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 mb-4 rounded bg-primary-light border border-indigo-100 text-primary text-[11px] font-mono">
              <span>STUDENT EXPLORATORY PROJECT</span>
              <span>•</span>
              <span>DATA CLEANING &amp; ANALYSIS</span>
            </div>

            <h1 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal text-on-surface tracking-tight mb-4 leading-tight">
              {project.title}
            </h1>

            <p className="text-base sm:text-lg text-on-surface-variant leading-relaxed max-w-3xl mb-8">
              {project.shortDescription}
            </p>
          </div>

          {/* RECRUITER SPEC / METADATA MATRIX */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-outline-variant/50 border border-outline-variant/50 rounded overflow-hidden shadow-xs">
            <div className="bg-surface-container-lowest p-5 flex flex-col justify-between">
              <span className="text-[10px] font-mono uppercase text-outline tracking-wider">
                Role
              </span>
              <div className="mt-2">
                <p className="text-sm font-semibold text-on-surface">Student Developer &amp; Analyst</p>
                <p className="text-[11px] font-mono text-on-surface-variant mt-0.5">
                  Independent Exploratory Project
                </p>
              </div>
            </div>

            <div className="bg-surface-container-lowest p-5 flex flex-col justify-between">
              <span className="text-[10px] font-mono uppercase text-outline tracking-wider">
                Timeline &amp; Status
              </span>
              <div className="mt-2">
                <p className="text-sm font-semibold text-on-surface">
                  {project.completedDate}
                </p>
                <p className="text-[11px] font-mono text-on-surface-variant mt-0.5">
                  Active Learning &amp; Verification
                </p>
              </div>
            </div>

            <div className="bg-surface-container-lowest p-5 flex flex-col justify-between">
              <span className="text-[10px] font-mono uppercase text-outline tracking-wider">
                Primary Toolchain
              </span>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-surface-container-low border border-outline-variant/50 text-on-surface-variant text-[11px] font-mono px-1.5 py-0.5 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-surface-container-lowest p-5 flex flex-col justify-between">
              <span className="text-[10px] font-mono uppercase text-outline tracking-wider">
                Artifacts &amp; Repository
              </span>
              <div className="mt-2 space-y-1">
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-primary hover:underline text-xs font-mono font-medium truncate"
                  >
                    <GithubIcon className="h-3.5 w-3.5" />
                    <span>View GitHub Repo</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                ) : (
                  <span className="text-xs font-mono text-outline italic">
                    Repository in preparation
                  </span>
                )}
                <p className="text-[11px] font-mono text-on-surface-variant">
                  Jupyter Notebook (.ipynb)
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* EDITORIAL 12-COLUMN MAIN BODY */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* LEFT 8-COLUMN COLUMN: RESEARCH ESSAY & WORKFLOW */}
          <div className="lg:col-span-8 space-y-12">
            {/* SECTION 01 // OVERVIEW & PROBLEM STATEMENT */}
            <section id="problem-statement" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-mono text-primary font-semibold">SECTION 01</span>
                <span className="h-px w-8 bg-outline-variant/60" />
                <h2 className="text-xl font-semibold text-on-surface">Problem Statement &amp; Scope</h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-on-surface-variant leading-relaxed">
                <p>{project.overview}</p>
                <p>{project.problem}</p>
                <div className="p-3.5 bg-surface-container-low border border-outline-variant/40 rounded font-mono text-xs text-on-surface">
                  Exploratory Target: Order Intake → Fulfillment → In-Transit → Terminal Status (Delivered / Cancelled)
                </div>
                <p className="text-xs sm:text-sm text-outline">
                  As a computer science engineering student learning AI/ML and data science, this project is undertaken as hands-on practice to develop disciplined data cleaning routines, inspect structural categorical distributions, and document analytical observations transparently.
                </p>
              </div>
            </section>

            {/* SECTION 02 // DATASET & SCHEMA OVERVIEW */}
            <section id="dataset-schema" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-mono text-primary font-semibold">SECTION 02</span>
                <span className="h-px w-8 bg-outline-variant/60" />
                <h2 className="text-xl font-semibold text-on-surface">Dataset &amp; Schema [Pending Ingestion]</h2>
              </div>

              <p className="text-sm text-on-surface-variant leading-relaxed mb-4">
                The analysis focuses on exploring transactional order records, particularly the distribution of status values across order lifecycles.
              </p>

              {/* Pending Workspace Notice Callout */}
              <div className="p-3.5 mb-6 bg-surface-container-low border border-outline-variant/40 rounded flex items-start gap-2.5 text-xs font-mono text-on-surface-variant">
                <AlertCircle className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-on-surface">Verification Status:</span> No local dataset or notebook file is checked directly into this repository at present. The schema below represents the target analytical schema under exploratory review, pending verified dataset ingestion.
                </div>
              </div>

              {/* Monospace Schema Table */}
              <div className="bg-surface-container-lowest border border-outline-variant/40 rounded overflow-hidden shadow-xs">
                <div className="bg-surface-container-low px-4 py-2.5 border-b border-outline-variant/30 flex justify-between items-center text-xs font-mono">
                  <span className="text-on-surface font-semibold flex items-center gap-1.5">
                    <Table className="h-4 w-4 text-primary" />
                    Target Schema Structure
                  </span>
                  <span className="text-outline text-[11px]">Pending Active Data</span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-xs font-mono">
                    <thead>
                      <tr className="border-b border-outline-variant/30 text-outline bg-surface/50">
                        <th className="py-2.5 px-4 font-medium">Field Identifier</th>
                        <th className="py-2.5 px-4 font-medium">Target Type</th>
                        <th className="py-2.5 px-4 font-medium">Analytical Purpose</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-outline-variant/20 text-on-surface">
                      <tr>
                        <td className="py-2.5 px-4 font-semibold text-primary">order_id</td>
                        <td className="py-2.5 px-4 text-on-surface-variant">string / identifier</td>
                        <td className="py-2.5 px-4 text-on-surface-variant">Primary transaction key; checked for uniqueness</td>
                      </tr>
                      <tr className="bg-surface/30">
                        <td className="py-2.5 px-4 font-semibold text-primary">order_status</td>
                        <td className="py-2.5 px-4 text-on-surface-variant">category / string</td>
                        <td className="py-2.5 px-4 text-on-surface-variant">Target variable for frequency and distribution analysis</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-4 font-semibold text-primary">timestamp_fields</td>
                        <td className="py-2.5 px-4 text-on-surface-variant">datetime (UTC)</td>
                        <td className="py-2.5 px-4 text-on-surface-variant">Lifecycle milestones (purchase, approval, fulfillment)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 03 // DATA SANITATION & METHODOLOGY */}
            <section id="methodology" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-mono text-primary font-semibold">SECTION 03</span>
                <span className="h-px w-8 bg-outline-variant/60" />
                <h2 className="text-xl font-semibold text-on-surface">Data Inspection &amp; Cleaning Methodology</h2>
              </div>

              <p className="text-sm text-on-surface-variant leading-relaxed mb-6">
                {project.approach}
              </p>

              {/* 4-Step Engineering Protocol */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="p-4 bg-surface-container-lowest border border-outline-variant/40 rounded">
                  <span className="text-xs font-mono text-primary font-semibold">01 / MISSING VALUE INSPECTION</span>
                  <p className="text-xs text-on-surface-variant mt-1.5 leading-normal">
                    Evaluating missing records across fields and determining if missing milestones correspond to valid intermediate or cancelled statuses.
                  </p>
                </div>

                <div className="p-4 bg-surface-container-lowest border border-outline-variant/40 rounded">
                  <span className="text-xs font-mono text-primary font-semibold">02 / DATETIME TYPE CONVERSION</span>
                  <p className="text-xs text-on-surface-variant mt-1.5 leading-normal">
                    Practising parsing string representations of dates into proper Pandas datetime types for consistent temporal queries.
                  </p>
                </div>

                <div className="p-4 bg-surface-container-lowest border border-outline-variant/40 rounded">
                  <span className="text-xs font-mono text-primary font-semibold">03 / CATEGORICAL VALUE COUNTS</span>
                  <p className="text-xs text-on-surface-variant mt-1.5 leading-normal">
                    Computing frequency counts and normalized percentages across discrete values in the order_status column.
                  </p>
                </div>

                <div className="p-4 bg-surface-container-lowest border border-outline-variant/40 rounded">
                  <span className="text-xs font-mono text-primary font-semibold">04 / WORKFLOW REPRODUCIBILITY</span>
                  <p className="text-xs text-on-surface-variant mt-1.5 leading-normal">
                    Structuring exploratory cells in Jupyter notebooks with clean markdown explanations and reproducible step sequences.
                  </p>
                </div>
              </div>

              {/* Code Snippet Box */}
              <div className="bg-[#0b1320] rounded border border-outline-variant/40 overflow-hidden text-slate-100 shadow-xs">
                <div className="flex items-center justify-between px-4 py-2 border-b border-slate-800 bg-slate-950/70 text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                    <span>workflow_pattern.py (Illustrative Practice Snippet)</span>
                  </div>
                  <span>Python 3 • Pandas</span>
                </div>
                <div className="px-4 py-2 bg-slate-900/50 border-b border-slate-800/80 text-[11px] font-mono text-slate-400">
                  Note: Illustrative exploratory workflow pattern for data cleaning and order_status exploration.
                </div>
                <pre className="p-4 text-xs font-mono leading-relaxed overflow-x-auto text-slate-200">
                  <code>{`# Planned exploratory workflow pattern using Python & Pandas
import pandas as pd

def inspect_and_analyze_order_status(df: pd.DataFrame) -> pd.DataFrame:
    # 1. Inspect dataset structure & completeness
    # df.info()
    # df.isnull().sum()

    # 2. Check for unique record identifiers
    # is_unique = df['order_id'].is_unique

    # 3. Explore categorical frequency distributions
    status_counts = df['order_status'].value_counts()
    status_proportions = df['order_status'].value_counts(normalize=True) * 100

    summary = pd.DataFrame({
        'count': status_counts,
        'percentage': status_proportions.round(2)
    })
    return summary`}</code>
                </pre>
              </div>
            </section>

            {/* SECTION 04 // ORDER STATUS FREQUENCY ANALYSIS */}
            <section id="frequency-analysis" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-mono text-primary font-semibold">SECTION 04</span>
                <span className="h-px w-8 bg-outline-variant/60" />
                <h2 className="text-xl font-semibold text-on-surface">Order Status Frequency Analysis</h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-on-surface-variant leading-relaxed">
                <p>
                  The primary focus of this project is understanding the distribution and behavior of the <code className="text-xs font-mono px-1.5 py-0.5 bg-surface-container-low rounded text-on-surface">order_status</code> categorical column.
                </p>
                <p>
                  In e-commerce operations, order status frequency provides direct insight into operational throughput:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                  <div className="p-3.5 bg-surface-container-lowest border border-outline-variant/40 rounded">
                    <span className="text-primary font-semibold block mb-1">Terminal Fulfillment Ratio</span>
                    <span className="text-on-surface-variant">The proportion of total transactions that successfully conclude in a delivered state versus intermediate states.</span>
                  </div>
                  <div className="p-3.5 bg-surface-container-lowest border border-outline-variant/40 rounded">
                    <span className="text-primary font-semibold block mb-1">Exception &amp; Cancellation Rates</span>
                    <span className="text-on-surface-variant">Observing non-delivered statuses (cancelled, unavailable, returned) to identify potential stages of friction.</span>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 05 // VERIFIED FINDINGS */}
            <section id="findings" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-mono text-primary font-semibold">SECTION 05</span>
                <span className="h-px w-8 bg-outline-variant/60" />
                <h2 className="text-xl font-semibold text-on-surface">Empirical Findings [Pending Verification]</h2>
              </div>

              <div className="p-4 bg-surface-container-lowest border border-outline-variant/40 rounded space-y-3">
                <div className="flex items-start gap-2.5 text-xs font-mono text-on-surface-variant">
                  <Clock className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-on-surface">Analysis In Progress:</span> Specific numerical metrics, record counts, and percentage breakdowns are withheld until the active dataset is ingested and verified in a notebook.
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                  To maintain strict engineering integrity, no numerical conclusions or business impact figures are assumed in advance. Verified frequency counts and distributions will be documented here upon completion of the exploratory notebook.
                </p>
              </div>
            </section>

            {/* SECTION 06 // KEY LEARNINGS */}
            {project.keyLearnings.length > 0 && (
              <section id="key-learnings" className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-mono text-primary font-semibold">SECTION 06</span>
                  <span className="h-px w-8 bg-outline-variant/60" />
                  <h2 className="text-xl font-semibold text-on-surface">Key Practical Learnings</h2>
                </div>

                <div className="space-y-3">
                  {project.keyLearnings.map((learning, idx) => (
                    <div
                      key={idx}
                      className="p-4 bg-surface-container-lowest border border-outline-variant/40 rounded flex items-start gap-3"
                    >
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                        {learning}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* SECTION 07 // LIMITATIONS & NEXT STEPS */}
            <section id="limitations-next-steps" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-mono text-primary font-semibold">SECTION 07</span>
                <span className="h-px w-8 bg-outline-variant/60" />
                <h2 className="text-xl font-semibold text-on-surface">Limitations &amp; Planned Next Steps</h2>
              </div>

              <div className="p-4 bg-surface-container-lowest border border-outline-variant/40 rounded space-y-2.5 text-xs sm:text-sm text-on-surface-variant">
                <p className="flex items-start gap-2">
                  <span className="text-primary font-mono font-semibold">→</span>
                  <span><strong>Workspace Ingestion:</strong> Check in the raw dataset and publish the documented Jupyter Notebook (.ipynb).</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-primary font-mono font-semibold">→</span>
                  <span><strong>Visual Distributions:</strong> Generate Seaborn and Matplotlib bar charts for status frequencies.</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-primary font-mono font-semibold">→</span>
                  <span><strong>SQL Cross-Validation:</strong> Practice translating Pandas value_counts queries into standard SQL aggregations.</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-primary font-mono font-semibold">→</span>
                  <span><strong>Lifecycle Flow Validation:</strong> Verify that timestamp sequences follow expected chronological transitions.</span>
                </p>
              </div>
            </section>
          </div>

          {/* RIGHT 4-COLUMN COLUMN: STICKY CONTEXT SIDEBAR */}
          <aside className="lg:col-span-4 space-y-6">
            {/* Outline Card */}
            <div className="p-5 bg-surface-container-lowest border border-outline-variant/40 rounded sticky top-24 shadow-xs">
              <span className="text-[11px] font-mono uppercase text-outline tracking-wider block mb-3 font-semibold">
                Case Study Outline
              </span>
              <nav className="space-y-2 text-xs font-mono">
                <a
                  href="#problem-statement"
                  className="block text-on-surface-variant hover:text-primary transition-colors py-1 pl-2 border-l border-outline-variant/40 hover:border-primary"
                >
                  01 // Problem Statement
                </a>
                <a
                  href="#dataset-schema"
                  className="block text-on-surface-variant hover:text-primary transition-colors py-1 pl-2 border-l border-outline-variant/40 hover:border-primary"
                >
                  02 // Dataset &amp; Schema [Pending]
                </a>
                <a
                  href="#methodology"
                  className="block text-on-surface-variant hover:text-primary transition-colors py-1 pl-2 border-l border-outline-variant/40 hover:border-primary"
                >
                  03 // Data Cleaning
                </a>
                <a
                  href="#frequency-analysis"
                  className="block text-on-surface-variant hover:text-primary transition-colors py-1 pl-2 border-l border-outline-variant/40 hover:border-primary"
                >
                  04 // Frequency Analysis
                </a>
                <a
                  href="#findings"
                  className="block text-on-surface-variant hover:text-primary transition-colors py-1 pl-2 border-l border-outline-variant/40 hover:border-primary"
                >
                  05 // Verified Findings [Pending]
                </a>
                {project.keyLearnings.length > 0 && (
                  <a
                    href="#key-learnings"
                    className="block text-on-surface-variant hover:text-primary transition-colors py-1 pl-2 border-l border-outline-variant/40 hover:border-primary"
                  >
                    06 // Practical Learnings
                  </a>
                )}
                <a
                  href="#limitations-next-steps"
                  className="block text-on-surface-variant hover:text-primary transition-colors py-1 pl-2 border-l border-outline-variant/40 hover:border-primary"
                >
                  07 // Limitations &amp; Next Steps
                </a>
              </nav>

              <hr className="my-5 border-outline-variant/30" />

              {/* Environment Stack */}
              <div>
                <span className="text-[11px] font-mono uppercase text-outline tracking-wider block mb-2 font-semibold">
                  Actual Tools Used
                </span>
                <div className="flex flex-wrap gap-1.5">
                  <span className="bg-surface-container-low px-2 py-0.5 rounded text-[11px] font-mono text-on-surface">
                    Python
                  </span>
                  <span className="bg-surface-container-low px-2 py-0.5 rounded text-[11px] font-mono text-on-surface">
                    Pandas
                  </span>
                  <span className="bg-surface-container-low px-2 py-0.5 rounded text-[11px] font-mono text-on-surface">
                    Jupyter Lab
                  </span>
                </div>
              </div>

              <hr className="my-5 border-outline-variant/30" />

              {/* Verification Status */}
              <div className="p-3 bg-surface-container-low rounded border border-outline-variant/30 text-xs font-mono text-on-surface-variant flex items-start gap-2">
                <Info className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <span>
                  Student exploratory project focused on Python and Pandas data cleaning practice. Unverified findings remain pending.
                </span>
              </div>
            </div>
          </aside>
        </div>

        {/* Back Link */}
        <div className="mt-16 pt-8 border-t border-outline-variant/30">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-xs font-mono font-medium text-primary hover:underline transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Return to All Projects</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
