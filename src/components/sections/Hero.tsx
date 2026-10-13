"use client";

import { ArrowDown, MapPin, GraduationCap, Code2, ExternalLink, Terminal, Mail, Sparkles, Building2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import AntigravityCanvas from "@/components/ui/AntigravityCanvas";
import { personalInfo } from "@/data/personal";

export default function Hero() {
  return (
    <section id="hero" className="relative pt-24 pb-16 md:pt-32 md:pb-24 border-b border-outline-variant/40 overflow-hidden">
      {/* Editorial Ambient Background Glow, Dot Grid & Antigravity Particle Field */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-10 left-1/4 w-[500px] h-[400px] bg-gradient-to-tr from-primary/15 via-indigo-500/10 to-teal-400/5 blur-3xl rounded-full opacity-70" />
        <div className="absolute top-40 right-10 w-[450px] h-[350px] bg-gradient-to-bl from-blue-500/10 via-purple-500/5 to-transparent blur-3xl rounded-full opacity-60" />
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-35 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_35%,#000_75%,transparent_100%)]" />
        <AntigravityCanvas />
      </div>

      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-14">
          {/* Left Column: Headline, Bio & CTAs */}
          <div className="lg:col-span-7">
            {/* Status Indicator Pill */}
            {personalInfo.showAvailabilityBadge && (
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-surface-container-lowest/90 backdrop-blur-md border border-emerald-500/30 rounded-full mb-6 shadow-xs hover:border-emerald-500/60 transition-all">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" />
                </span>
                <span className="text-xs font-mono text-emerald-900 font-medium tracking-tight">
                  Available for Internships &amp; Entry AI/DS Roles
                </span>
              </div>
            )}

            {/* Editorial Pre-Kicker */}
            <div className="flex items-center gap-2 text-xs font-mono text-primary font-semibold tracking-wider uppercase mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              <span>COMPUTER SCIENCE STUDENT // AI/ML &amp; DATA SCIENCE</span>
            </div>

            {/* Main Title */}
            <h1 className="font-editorial text-on-surface tracking-tight text-5xl sm:text-6xl md:text-7xl font-normal leading-[1.06] mb-3">
              {personalInfo.firstName} {personalInfo.lastName}
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-on-surface mb-5 font-normal tracking-tight leading-snug">
              {personalInfo.tagline}
            </p>

            {/* Authentic Bio */}
            <p className="text-base md:text-lg text-on-surface-variant max-w-xl mb-8 leading-relaxed">
              Currently building foundational strength in exploratory data analysis, data cleaning, and statistical thinking. Focusing on reproducible workflows with Python, Pandas, and SQL.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="bg-on-surface text-surface-container-lowest hover:bg-primary transition-all duration-200 px-5 py-2.5 rounded text-sm font-medium flex items-center gap-2 shadow-xs hover:shadow-md hover:-translate-y-0.5 group"
              >
                <span>View Featured Projects</span>
                <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              </a>

              {personalInfo.githubUrl && (
                <a
                  href={personalInfo.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-surface-container-lowest/90 backdrop-blur-sm border border-outline-variant hover:border-primary text-on-surface hover:text-primary px-4 py-2.5 rounded text-sm font-medium transition-all duration-200 flex items-center gap-2 shadow-xs hover:-translate-y-0.5 group"
                >
                  <GithubIcon className="h-4 w-4 text-outline group-hover:text-primary transition-colors" />
                  <span>GitHub</span>
                  <ExternalLink className="h-3.5 w-3.5 text-outline group-hover:text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              )}

              {personalInfo.linkedinUrl && (
                <a
                  href={personalInfo.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-surface-container-lowest/90 backdrop-blur-sm border border-outline-variant hover:border-primary text-on-surface hover:text-primary px-4 py-2.5 rounded text-sm font-medium transition-all duration-200 flex items-center gap-2 shadow-xs hover:-translate-y-0.5 group"
                >
                  <LinkedinIcon className="h-4 w-4 text-outline group-hover:text-primary transition-colors" />
                  <span>LinkedIn</span>
                  <ExternalLink className="h-3.5 w-3.5 text-outline group-hover:text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              )}

              <a
                href="#contact"
                className="bg-surface-container-low border border-outline-variant/60 hover:border-primary/40 text-primary px-4 py-2.5 rounded text-sm font-medium transition-all duration-200 flex items-center gap-1.5 shadow-xs hover:-translate-y-0.5"
              >
                <Mail className="h-4 w-4" />
                <span>Contact</span>
              </a>
            </div>
          </div>

          {/* Right Column: Authentic Data Science Notebook Card (Zero fake numbers) */}
          <div className="lg:col-span-5">
            <div className="bg-slate-950 text-slate-100 rounded-xl border border-slate-800 shadow-2xl overflow-hidden hover:border-slate-700 transition-all duration-300">
              {/* Window Chrome Header */}
              <div className="px-4 py-3 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 font-mono text-[11px] text-slate-400">
                    analysis_workflow.py
                  </span>
                </div>
                <div className="flex items-center gap-1.5 font-mono text-[10px] text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/60">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Python Environment Active
                </div>
              </div>

              {/* Code Snippet Box */}
              <div className="p-4 font-mono text-xs space-y-1.5 leading-relaxed bg-slate-950/95 overflow-x-auto">
                <div className="text-slate-500 text-[11px] mb-2 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                  # Authentic exploratory data analysis workflow
                </div>
                <div>
                  <span className="text-purple-400">import</span>{" "}
                  <span className="text-slate-200">pandas</span>{" "}
                  <span className="text-purple-400">as</span>{" "}
                  <span className="text-yellow-300">pd</span>
                </div>
                <div className="pt-1">
                  <span className="text-purple-400">def</span>{" "}
                  <span className="text-blue-300">analyze_order_statuses</span>(
                  <span className="text-slate-200">df</span>):
                </div>
                <div className="pl-4">
                  <span className="text-slate-500"># Handle missing values &amp; count frequencies</span>
                </div>
                <div className="pl-4">
                  <span className="text-slate-200">cleaned</span> ={" "}
                  <span className="text-slate-200">df</span>.
                  <span className="text-blue-300">dropna</span>(
                  <span className="text-orange-300">subset</span>=[
                  <span className="text-emerald-300">&quot;order_status&quot;</span>])
                </div>
                <div className="pl-4">
                  <span className="text-purple-400">return</span>{" "}
                  <span className="text-slate-200">cleaned</span>[
                  <span className="text-emerald-300">&quot;order_status&quot;</span>].
                  <span className="text-blue-300">value_counts</span>()
                </div>

                {/* Practical Learning Status (Zero fake metrics) */}
                <div className="mt-4 pt-3 border-t border-slate-800/80 bg-slate-900/60 p-3 rounded text-[11px] text-slate-300 space-y-1">
                  <div className="text-indigo-400 font-semibold flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Learning Focus:</span>
                  </div>
                  <div className="text-slate-300 pl-5">
                    &bull; Exploratory data analysis &amp; distribution checks
                  </div>
                  <div className="text-slate-300 pl-5">
                    &bull; Data cleaning and handling missing values with Pandas
                  </div>
                  <div className="text-emerald-400 pl-5">
                    &bull; Documented workflows &amp; reproducible student projects
                  </div>
                </div>
              </div>

              {/* Bottom Quick Stack Pills */}
              <div className="px-4 py-2.5 bg-slate-900/80 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1">
                  <Code2 className="w-3 h-3 text-indigo-400" />
                  Python
                </span>
                <span className="flex items-center gap-1">
                  <Code2 className="w-3 h-3 text-teal-400" />
                  Pandas
                </span>
                <span className="flex items-center gap-1 text-emerald-400">
                  <Sparkles className="w-3 h-3" />
                  Hands-on Projects
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Recruiter Glance 4-Card Bento Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          <div className="p-4 bg-surface-container-lowest/90 backdrop-blur-md border border-outline-variant/60 rounded-lg shadow-xs hover:border-primary/40 transition-all flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center text-primary border border-outline-variant/40 shrink-0">
              <MapPin className="h-4 w-4" />
            </div>
            <div>
              <div className="text-outline uppercase text-[10px] font-mono tracking-wider font-semibold">Location</div>
              <div className="text-on-surface font-semibold text-xs mt-0.5">{personalInfo.location}</div>
            </div>
          </div>

          <div className="p-4 bg-surface-container-lowest/90 backdrop-blur-md border border-outline-variant/60 rounded-lg shadow-xs hover:border-primary/40 transition-all flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center text-primary border border-outline-variant/40 shrink-0">
              <Building2 className="h-4 w-4" />
            </div>
            <div>
              <div className="text-outline uppercase text-[10px] font-mono tracking-wider font-semibold">University</div>
              <div className="text-on-surface font-semibold text-xs mt-0.5 capitalize">{personalInfo.university}</div>
            </div>
          </div>

          <div className="p-4 bg-surface-container-lowest/90 backdrop-blur-md border border-outline-variant/60 rounded-lg shadow-xs hover:border-primary/40 transition-all flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center text-primary border border-outline-variant/40 shrink-0">
              <GraduationCap className="h-4 w-4" />
            </div>
            <div>
              <div className="text-outline uppercase text-[10px] font-mono tracking-wider font-semibold">Degree &amp; Year</div>
              <div className="text-on-surface font-semibold text-xs mt-0.5">
                {personalInfo.degree} ({personalInfo.graduationYear})
              </div>
            </div>
          </div>

          <div className="p-4 bg-surface-container-lowest/90 backdrop-blur-md border border-outline-variant/60 rounded-lg shadow-xs hover:border-primary/40 transition-all flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center text-primary border border-outline-variant/40 shrink-0">
              <Code2 className="h-4 w-4" />
            </div>
            <div>
              <div className="text-outline uppercase text-[10px] font-mono tracking-wider font-semibold">Active Code Stack</div>
              <div className="text-on-surface font-semibold text-xs mt-0.5">Python, Pandas, SQL</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
