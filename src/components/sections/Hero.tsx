import { ArrowDown, MapPin, GraduationCap, Code2, ExternalLink } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { personalInfo } from "@/data/personal";

export default function Hero() {
  return (
    <section id="hero" className="pt-24 pb-16 md:pt-28 md:pb-20 border-b border-outline-variant/30">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="max-w-4xl">
          {/* Status Indicator Pill (Hidden unless explicitly enabled in personal.ts) */}
          {personalInfo.showAvailabilityBadge && (
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-surface-container-lowest border border-outline-variant/60 rounded-full mb-8 shadow-xs hover:border-primary/40 transition-colors">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-600 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
              </span>
              <span className="text-xs font-mono text-on-surface-variant font-medium tracking-tight">
                Available for Internships &amp; Entry AI/DS Roles
              </span>
            </div>
          )}

          {/* Name Headline with Editorial Serif */}
          <div className="flex flex-col mb-4">
            <span className="text-xs font-mono text-primary font-semibold tracking-wider uppercase mb-2">
              COMPUTER SCIENCE STUDENT | AI/ML &amp; DATA SCIENCE LEARNER
            </span>
            <h1 className="font-editorial text-on-surface tracking-tight text-5xl md:text-6xl font-normal leading-[1.1]">
              {personalInfo.firstName} {personalInfo.lastName}
            </h1>
          </div>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-on-surface mb-6 font-normal tracking-tight leading-snug">
            {personalInfo.tagline}
          </p>

          {/* Concise Intro */}
          <p className="text-base md:text-lg text-on-surface-variant max-w-2xl mb-8 leading-relaxed">
            Currently building foundational strength in exploratory data analysis, data cleaning, and statistical thinking. Focusing on reproducible workflows with Python, Pandas, and SQL.
          </p>

          {/* Action Cluster */}
          <div className="flex flex-wrap items-center gap-3.5 mb-12">
            <a
              href="#projects"
              className="bg-on-surface text-surface-container-lowest hover:bg-primary transition-all px-5 py-2.5 rounded text-sm font-medium flex items-center gap-2 shadow-xs group"
            >
              <span>View Projects</span>
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </a>

            {personalInfo.githubUrl && (
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-surface-container-lowest border border-outline-variant hover:border-outline text-on-surface px-5 py-2.5 rounded text-sm font-medium transition-all flex items-center gap-2 shadow-xs group"
              >
                <GithubIcon className="h-4 w-4 text-outline group-hover:text-primary transition-colors" />
                <span>GitHub Profile</span>
                <ExternalLink className="h-3.5 w-3.5 text-outline group-hover:text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            )}

            {personalInfo.linkedinUrl && (
              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-surface-container-lowest border border-outline-variant hover:border-outline text-on-surface px-5 py-2.5 rounded text-sm font-medium transition-all flex items-center gap-2 shadow-xs group"
              >
                <LinkedinIcon className="h-4 w-4 text-outline group-hover:text-primary transition-colors" />
                <span>LinkedIn Profile</span>
                <ExternalLink className="h-3.5 w-3.5 text-outline group-hover:text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            )}

            {personalInfo.resumeFileName && (
              <a
                href={`/${personalInfo.resumeFileName}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-surface-container-low border border-outline-variant/60 hover:border-primary/40 text-primary px-4 py-2.5 rounded text-sm font-medium transition-all flex items-center gap-1.5"
              >
                <span>Download Resume</span>
                <ArrowDown className="h-4 w-4" />
              </a>
            )}
          </div>

          {/* Quick Recruiter Glance Metadata Card */}
          <div className="p-5 bg-surface-container-lowest border border-outline-variant/50 rounded shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-5 font-mono text-xs">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-surface-container-low flex items-center justify-center text-primary border border-outline-variant/40 shrink-0">
                <MapPin className="h-4 w-4" />
              </div>
              <div>
                <div className="text-outline uppercase text-[10px] tracking-wider">Location</div>
                <div className="text-on-surface font-semibold text-xs">{personalInfo.location}</div>
              </div>
            </div>

            <div className="hidden md:block w-px h-8 bg-outline-variant/50"></div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-surface-container-low flex items-center justify-center text-primary border border-outline-variant/40 shrink-0">
                <GraduationCap className="h-4 w-4" />
              </div>
              <div>
                <div className="text-outline uppercase text-[10px] tracking-wider">Education</div>
                <div className="text-on-surface font-semibold text-xs">
                  {personalInfo.degree} ({personalInfo.graduationYear})
                </div>
              </div>
            </div>

            <div className="hidden md:block w-px h-8 bg-outline-variant/50"></div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-surface-container-low flex items-center justify-center text-primary border border-outline-variant/40 shrink-0">
                <Code2 className="h-4 w-4" />
              </div>
              <div>
                <div className="text-outline uppercase text-[10px] tracking-wider">Primary Stack</div>
                <div className="text-on-surface font-semibold text-xs">Python, Pandas, SQL</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
