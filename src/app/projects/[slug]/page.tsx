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
  Database,
  TrendingUp,
  Award,
  Star,
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
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
              Completed
            </span>
          </div>
        </div>

        {/* SECTION: HERO & SPECIFICATION HEADER */}
        <section className="mb-12">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 mb-4 rounded bg-primary-light border border-indigo-100 text-primary text-[11px] font-mono">
              <span>COMPLETED SQL PROJECT</span>
              <span>•</span>
              <span>{project.category ?? "SQL & RELATIONAL ANALYTICS"}</span>
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
                  Relational Database Analysis
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
                  Verified Query Results
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
                    <span>View on GitHub</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                ) : (
                  <span className="text-xs font-mono text-outline italic">
                    Repository in preparation
                  </span>
                )}
                <p className="text-[11px] font-mono text-on-surface-variant">
                  SQL Scripts (.sql) • MySQL Workbench
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
                  Analytical Scope: Brazilian Olist E-Commerce Dataset → Orders, Items, Products, Sellers, Customer Reviews
                </div>
                <p className="text-xs sm:text-sm text-outline">
                  Conducted using MySQL and MySQL Workbench to practice complex relational joins, data aggregation, time-series sales trend analysis, and business intelligence querying on real-world e-commerce transactional data.
                </p>
              </div>
            </section>

            {/* SECTION 02 // DATASET & RELATIONAL SCHEMA */}
            <section id="dataset-schema" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-mono text-primary font-semibold">SECTION 02</span>
                <span className="h-px w-8 bg-outline-variant/60" />
                <h2 className="text-xl font-semibold text-on-surface">Relational Dataset &amp; Schema Overview</h2>
              </div>

              <p className="text-sm text-on-surface-variant leading-relaxed mb-4">
                The project analyzes five core relational tables from the Brazilian Olist E-Commerce database, connecting customer order lifecycles with purchased items, product metadata, merchant identifiers, and satisfaction reviews.
              </p>

              {/* Monospace Schema Table */}
              <div className="bg-surface-container-lowest border border-outline-variant/40 rounded overflow-hidden shadow-xs">
                <div className="bg-surface-container-low px-4 py-2.5 border-b border-outline-variant/30 flex justify-between items-center text-xs font-mono">
                  <span className="text-on-surface font-semibold flex items-center gap-1.5">
                    <Table className="h-4 w-4 text-primary" />
                    Relational Tables Analyzed
                  </span>
                  <span className="text-emerald-700 text-[11px] font-medium flex items-center gap-1">
                    <CheckCircle2 className="h-3 w-3" />
                    Relational Joins Verified
                  </span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-xs font-mono">
                    <thead>
                      <tr className="border-b border-outline-variant/30 text-outline bg-surface/50">
                        <th className="py-2.5 px-4 font-medium">Table Name</th>
                        <th className="py-2.5 px-4 font-medium">Key Identifiers</th>
                        <th className="py-2.5 px-4 font-medium">Analytical Purpose</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-outline-variant/20 text-on-surface">
                      <tr>
                        <td className="py-2.5 px-4 font-semibold text-primary">orders</td>
                        <td className="py-2.5 px-4 text-on-surface-variant">order_id (PK), customer_id</td>
                        <td className="py-2.5 px-4 text-on-surface-variant">Order status filtering (delivered) &amp; timestamp milestones</td>
                      </tr>
                      <tr className="bg-surface/30">
                        <td className="py-2.5 px-4 font-semibold text-primary">order_items</td>
                        <td className="py-2.5 px-4 text-on-surface-variant">order_id (FK), product_id, seller_id</td>
                        <td className="py-2.5 px-4 text-on-surface-variant">Item sales pricing, freight values &amp; order-level line metrics</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-4 font-semibold text-primary">products</td>
                        <td className="py-2.5 px-4 text-on-surface-variant">product_id (PK)</td>
                        <td className="py-2.5 px-4 text-on-surface-variant">Product category classifications &amp; category sales rankings</td>
                      </tr>
                      <tr className="bg-surface/30">
                        <td className="py-2.5 px-4 font-semibold text-primary">sellers</td>
                        <td className="py-2.5 px-4 text-on-surface-variant">seller_id (PK), seller_city, seller_state</td>
                        <td className="py-2.5 px-4 text-on-surface-variant">Individual seller revenue analysis &amp; merchant concentration</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-4 font-semibold text-primary">order_reviews</td>
                        <td className="py-2.5 px-4 text-on-surface-variant">review_id (PK), order_id (FK)</td>
                        <td className="py-2.5 px-4 text-on-surface-variant">Customer satisfaction ratings (1-5 review score distributions)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 03 // SQL QUERYING & METHODOLOGY */}
            <section id="methodology" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-mono text-primary font-semibold">SECTION 03</span>
                <span className="h-px w-8 bg-outline-variant/60" />
                <h2 className="text-xl font-semibold text-on-surface">SQL Querying &amp; Analytical Methodology</h2>
              </div>

              <p className="text-sm text-on-surface-variant leading-relaxed mb-6">
                {project.approach}
              </p>

              {/* 4-Step Engineering Protocol */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="p-4 bg-surface-container-lowest border border-outline-variant/40 rounded">
                  <span className="text-xs font-mono text-primary font-semibold">01 / DELIVERED ORDER ISOLATION</span>
                  <p className="text-xs text-on-surface-variant mt-1.5 leading-normal">
                    Restricting sales metrics strictly to records with <code className="text-primary font-mono font-semibold">order_status = &apos;delivered&apos;</code> to evaluate confirmed transactions rather than cancelled or pending orders.
                  </p>
                </div>

                <div className="p-4 bg-surface-container-lowest border border-outline-variant/40 rounded">
                  <span className="text-xs font-mono text-primary font-semibold">02 / MULTI-TABLE RELATIONAL JOINS</span>
                  <p className="text-xs text-on-surface-variant mt-1.5 leading-normal">
                    Formulating clean multi-table joins across orders, order items, products, sellers, and customer reviews to aggregate multidimensional commercial attributes.
                  </p>
                </div>

                <div className="p-4 bg-surface-container-lowest border border-outline-variant/40 rounded">
                  <span className="text-xs font-mono text-primary font-semibold">03 / TEMPORAL SALES AGGREGATION</span>
                  <p className="text-xs text-on-surface-variant mt-1.5 leading-normal">
                    Using <code className="text-primary font-mono font-semibold">DATE_FORMAT()</code> and <code className="text-primary font-mono font-semibold">SUM(price)</code> grouped by year and month to uncover chronological revenue peaks and seasonal surges.
                  </p>
                </div>

                <div className="p-4 bg-surface-container-lowest border border-outline-variant/40 rounded">
                  <span className="text-xs font-mono text-primary font-semibold">04 / CATEGORY &amp; SELLER RANKINGS</span>
                  <p className="text-xs text-on-surface-variant mt-1.5 leading-normal">
                    Applying <code className="text-primary font-mono font-semibold">ORDER BY DESC</code>, <code className="text-primary font-mono font-semibold">LIMIT</code>, and <code className="text-primary font-mono font-semibold">AVG()</code> to isolate top product verticals, individual seller volumes, and review averages.
                  </p>
                </div>
              </div>

              {/* Code Snippet Box */}
              <div className="bg-[#0b1320] rounded border border-outline-variant/40 overflow-hidden text-slate-100 shadow-xs">
                <div className="flex items-center justify-between px-4 py-2 border-b border-slate-800 bg-slate-950/70 text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                    <span>monthly_sales_and_categories.sql</span>
                  </div>
                  <span>MySQL • MySQL Workbench</span>
                </div>
                <div className="px-4 py-2 bg-slate-900/50 border-b border-slate-800/80 text-[11px] font-mono text-slate-400">
                  Representative SQL query patterns executed for monthly sales trends and category performance.
                </div>
                <pre className="p-4 text-xs font-mono leading-relaxed overflow-x-auto text-slate-200">
                  <code>{`-- 1. Monthly Delivered-Order Product Sales Analysis
SELECT 
    DATE_FORMAT(o.order_delivered_customer_date, '%Y-%m') AS sales_month,
    ROUND(SUM(oi.price), 2) AS total_product_sales,
    COUNT(DISTINCT o.order_id) AS total_delivered_orders
FROM orders o
JOIN order_items oi ON o.order_id = oi.order_id
WHERE o.order_status = 'delivered'
  AND o.order_delivered_customer_date IS NOT NULL
GROUP BY sales_month
ORDER BY total_product_sales DESC;

-- 2. Top-Performing Product Categories by Revenue
SELECT 
    p.product_category_name,
    ROUND(SUM(oi.price), 2) AS total_category_sales,
    COUNT(oi.order_item_id) AS items_sold
FROM order_items oi
JOIN products p ON oi.product_id = p.product_id
JOIN orders o ON oi.order_id = o.order_id
WHERE o.order_status = 'delivered'
GROUP BY p.product_category_name
ORDER BY total_category_sales DESC
LIMIT 10;`}</code>
                </pre>
              </div>
            </section>

            {/* SECTION 04 // CORE ANALYSIS FOCUS AREAS */}
            <section id="analysis-areas" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-mono text-primary font-semibold">SECTION 04</span>
                <span className="h-px w-8 bg-outline-variant/60" />
                <h2 className="text-xl font-semibold text-on-surface">Core Analytical Focus Areas</h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-on-surface-variant leading-relaxed">
                <p>
                  The SQL analysis targeted four distinct business dimensions to gain a comprehensive understanding of operational metrics across the marketplace:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                  <div className="p-3.5 bg-surface-container-lowest border border-outline-variant/40 rounded">
                    <span className="text-primary font-semibold block mb-1">Delivered Sales Trajectories</span>
                    <span className="text-on-surface-variant">Time-series tracking of monthly order sales to identify seasonal spikes, operational growth, and peak order months.</span>
                  </div>
                  <div className="p-3.5 bg-surface-container-lowest border border-outline-variant/40 rounded">
                    <span className="text-primary font-semibold block mb-1">Product Category Revenue</span>
                    <span className="text-on-surface-variant">Identifying highest revenue-generating product verticals and evaluating demand distribution across diverse categories.</span>
                  </div>
                  <div className="p-3.5 bg-surface-container-lowest border border-outline-variant/40 rounded">
                    <span className="text-primary font-semibold block mb-1">Merchant Performance</span>
                    <span className="text-on-surface-variant">Evaluating sales volumes achieved by individual marketplace merchants and checking for revenue concentration.</span>
                  </div>
                  <div className="p-3.5 bg-surface-container-lowest border border-outline-variant/40 rounded">
                    <span className="text-primary font-semibold block mb-1">Customer Review Ratings</span>
                    <span className="text-on-surface-variant">Computing average customer review ratings across completed orders to gauge customer satisfaction across delivered orders.</span>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 05 // VERIFIED KEY FINDINGS */}
            <section id="findings" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-mono text-primary font-semibold">SECTION 05</span>
                <span className="h-px w-8 bg-outline-variant/60" />
                <h2 className="text-xl font-semibold text-on-surface">Verified Key Findings</h2>
              </div>

              <p className="text-sm text-on-surface-variant leading-relaxed mb-6">
                Key analytical metrics obtained from executing structured queries against the delivered orders dataset:
              </p>

              {/* 4 Stat Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="p-5 bg-surface-container-lowest border border-outline-variant/50 rounded-xl shadow-xs flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-mono uppercase text-outline tracking-wider font-semibold">
                      Peak Monthly Sales
                    </span>
                    <TrendingUp className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-mono font-bold text-primary">
                      987,765.37
                    </div>
                    <div className="text-xs font-mono text-on-surface mt-1">
                      November 2017
                    </div>
                    <p className="text-xs text-on-surface-variant mt-2 leading-relaxed">
                      Highest monthly product sales recorded, driven by seasonal Black Friday promotional activity.
                    </p>
                  </div>
                </div>

                <div className="p-5 bg-surface-container-lowest border border-outline-variant/50 rounded-xl shadow-xs flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-mono uppercase text-outline tracking-wider font-semibold">
                      Leading Product Category
                    </span>
                    <Award className="h-4 w-4 text-emerald-600" />
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-mono font-bold text-emerald-700">
                      1,233,131.72
                    </div>
                    <div className="text-xs font-mono text-on-surface mt-1">
                      Health &amp; Beauty
                    </div>
                    <p className="text-xs text-on-surface-variant mt-2 leading-relaxed">
                      Top-performing product category by total sales volume across all catalog categories.
                    </p>
                  </div>
                </div>

                <div className="p-5 bg-surface-container-lowest border border-outline-variant/50 rounded-xl shadow-xs flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-mono uppercase text-outline tracking-wider font-semibold">
                      Top Seller Product Sales
                    </span>
                    <Database className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-mono font-bold text-on-surface">
                      226,987.93
                    </div>
                    <div className="text-xs font-mono text-on-surface-variant mt-1">
                      Individual Merchant Peak
                    </div>
                    <p className="text-xs text-on-surface-variant mt-2 leading-relaxed">
                      Highest individual merchant product sales volume recorded across all active sellers.
                    </p>
                  </div>
                </div>

                <div className="p-5 bg-surface-container-lowest border border-outline-variant/50 rounded-xl shadow-xs flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-mono uppercase text-outline tracking-wider font-semibold">
                      Average Review Score
                    </span>
                    <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-mono font-bold text-amber-600">
                      ~4.09 / 5
                    </div>
                    <div className="text-xs font-mono text-on-surface-variant mt-1">
                      Customer Satisfaction Average
                    </div>
                    <p className="text-xs text-on-surface-variant mt-2 leading-relaxed">
                      Average customer review rating across delivered customer orders.
                    </p>
                  </div>
                </div>
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

            {/* SECTION 07 // REPOSITORY & QUERY SCRIPTS */}
            <section id="repository" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-mono text-primary font-semibold">SECTION 07</span>
                <span className="h-px w-8 bg-outline-variant/60" />
                <h2 className="text-xl font-semibold text-on-surface">Repository &amp; Query Scripts</h2>
              </div>

              <div className="p-5 bg-surface-container-lowest border border-outline-variant/40 rounded-xl space-y-4">
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  All SQL scripts, table creation routines, and analytical queries are documented and maintained in the project&apos;s public GitHub repository.
                </p>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-on-surface text-surface-container-lowest hover:bg-primary px-5 py-2.5 rounded-lg text-sm font-medium transition-all flex items-center gap-2 shadow-xs hover:shadow-md"
                  >
                    <GithubIcon className="h-4 w-4" />
                    <span>View on GitHub</span>
                    <ExternalLink className="h-3.5 w-3.5 text-outline" />
                  </a>
                </div>
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
                  02 // Relational Schema
                </a>
                <a
                  href="#methodology"
                  className="block text-on-surface-variant hover:text-primary transition-colors py-1 pl-2 border-l border-outline-variant/40 hover:border-primary"
                >
                  03 // SQL Methodology
                </a>
                <a
                  href="#analysis-areas"
                  className="block text-on-surface-variant hover:text-primary transition-colors py-1 pl-2 border-l border-outline-variant/40 hover:border-primary"
                >
                  04 // Analysis Focus
                </a>
                <a
                  href="#findings"
                  className="block text-on-surface-variant hover:text-primary transition-colors py-1 pl-2 border-l border-outline-variant/40 hover:border-primary"
                >
                  05 // Verified Findings
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
                  href="#repository"
                  className="block text-on-surface-variant hover:text-primary transition-colors py-1 pl-2 border-l border-outline-variant/40 hover:border-primary"
                >
                  07 // SQL Repository
                </a>
              </nav>

              <hr className="my-5 border-outline-variant/30" />

              {/* Environment Stack */}
              <div>
                <span className="text-[11px] font-mono uppercase text-outline tracking-wider block mb-2 font-semibold">
                  Actual Tools Used
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-surface-container-low px-2 py-0.5 rounded text-[11px] font-mono text-on-surface"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <hr className="my-5 border-outline-variant/30" />

              {/* Verification Status */}
              <div className="p-3 bg-surface-container-low rounded border border-outline-variant/30 text-xs font-mono text-on-surface-variant flex items-start gap-2">
                <Info className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <span>
                  Completed SQL project. Verified queries and key findings documented in GitHub repository.
                </span>
              </div>

              {project.githubUrl && (
                <div className="mt-4 pt-4 border-t border-outline-variant/30">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-surface-container-lowest border border-outline-variant/60 hover:border-primary/50 text-on-surface hover:text-primary py-2 px-3 rounded-lg text-xs font-mono font-medium flex items-center justify-center gap-2 transition-all shadow-2xs"
                  >
                    <GithubIcon className="h-3.5 w-3.5" />
                    <span>View on GitHub</span>
                    <ExternalLink className="h-3 w-3 text-outline" />
                  </a>
                </div>
              )}
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
