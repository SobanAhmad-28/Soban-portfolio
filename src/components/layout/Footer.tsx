import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { personalInfo } from "@/data/personal";

export default function Footer() {
  const currentYear = 2026;
  const hasGithub = !!personalInfo.githubUrl;
  const hasLinkedin = !!personalInfo.linkedinUrl;

  return (
    <footer className="bg-surface border-t border-outline-variant/30 w-full mt-16 md:mt-24">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 w-full max-w-[1200px] mx-auto px-4 sm:px-6 py-10">
        {/* Copyright & Typeset */}
        <div className="text-xs font-mono text-on-surface-variant text-center md:text-left">
          © {currentYear} {personalInfo.firstName} {personalInfo.lastName}. Typeset in Newsreader &amp; Inter.
        </div>

        {/* Links */}
        <div className="flex items-center gap-6 text-xs font-mono">
          {hasGithub && (
            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-on-surface-variant hover:text-primary transition-colors"
            >
              GitHub
            </a>
          )}
          {hasLinkedin && (
            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-on-surface-variant hover:text-primary transition-colors"
            >
              LinkedIn
            </a>
          )}
          <Link
            href="/#contact"
            className="text-on-surface-variant hover:text-primary transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* Back to Top */}
        <div>
          <Link
            href="/#hero"
            className="text-xs font-mono text-outline hover:text-primary flex items-center gap-1 transition-colors"
          >
            <span>Top</span>
            <ArrowUp className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
