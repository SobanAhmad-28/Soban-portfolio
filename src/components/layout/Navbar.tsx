"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { cn } from "@/lib/utils";
import { personalInfo } from "@/data/personal";

const navLinks = [
  { label: "About", href: "/#about", id: "about" },
  { label: "Skills", href: "/#skills", id: "skills" },
  { label: "Projects", href: "/#projects", id: "projects" },
  { label: "Journey", href: "/#journey", id: "journey" },
  { label: "Contact", href: "/#contact", id: "contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.25, rootMargin: "-70px 0px -40% 0px" }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMobileMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-surface/90 backdrop-blur-md border-b border-outline-variant/60 shadow-xs"
          : "bg-surface/75 backdrop-blur-xs border-b border-outline-variant/30"
      )}
    >
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-4 sm:px-6 h-16">
        {/* Moniker / Brand Logo */}
        <Link href="/#hero" className="flex flex-col text-left group">
          <span className="text-sm sm:text-base font-semibold tracking-tight text-on-surface group-hover:text-primary transition-colors">
            {personalInfo.firstName} {personalInfo.lastName} — AI &amp; DS
          </span>
          <span className="text-[11px] font-mono text-outline font-medium tracking-tight">
            CS Eng • AI/ML &amp; Data Science
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <Link
                key={link.id}
                href={link.href}
                className={cn(
                  "text-xs font-mono transition-colors pb-1 border-b-2",
                  isActive
                    ? "text-primary font-semibold border-primary"
                    : "text-on-surface-variant hover:text-on-surface border-transparent"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Trailing Action Cluster (Only rendered when configured) */}
        <div className="hidden sm:flex items-center gap-2">
          {personalInfo.githubUrl ? (
            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-outline hover:text-primary transition-colors rounded border border-transparent hover:border-outline-variant"
              title="GitHub Profile"
            >
              <GithubIcon className="h-4 w-4" />
            </a>
          ) : null}

          {personalInfo.linkedinUrl ? (
            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-outline hover:text-primary transition-colors rounded border border-transparent hover:border-outline-variant"
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="h-4 w-4" />
            </a>
          ) : null}

          {personalInfo.resumeFileName ? (
            <a
              href={`/${personalInfo.resumeFileName}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-surface-container-lowest border border-outline-variant hover:border-outline text-on-surface hover:bg-surface px-3 py-1.5 rounded text-xs font-mono transition-colors flex items-center gap-1.5 shadow-xs"
            >
              <span>Resume.pdf</span>
              <ArrowDown className="h-3 w-3" />
            </a>
          ) : null}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 top-16 z-40 bg-black/20 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu Drawer */}
      <div
        className={cn(
          "fixed top-16 right-0 h-[calc(100vh-4rem)] w-64 bg-surface-container-lowest border-l border-outline-variant shadow-lg transform transition-transform duration-300 ease-in-out md:hidden z-50 flex flex-col justify-between p-4",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={cn(
                "px-3 py-2.5 text-xs font-mono rounded transition-colors",
                activeSection === link.id
                  ? "text-primary bg-primary-light font-semibold"
                  : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {(personalInfo.resumeFileName || personalInfo.githubUrl || personalInfo.linkedinUrl) && (
          <div className="pt-4 border-t border-outline-variant flex flex-col gap-2">
            {personalInfo.resumeFileName && (
              <a
                href={`/${personalInfo.resumeFileName}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-surface-container-lowest border border-outline-variant text-center py-2 text-xs font-mono rounded flex items-center justify-center gap-1.5"
              >
                <span>Resume.pdf</span>
                <ArrowDown className="h-3 w-3" />
              </a>
            )}
            {personalInfo.githubUrl && (
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-surface-container-lowest border border-outline-variant text-center py-2 text-xs font-mono rounded flex items-center justify-center gap-1.5 text-primary"
              >
                <GithubIcon className="h-3.5 w-3.5" />
                <span>GitHub Profile</span>
              </a>
            )}
            {personalInfo.linkedinUrl && (
              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-surface-container-lowest border border-outline-variant text-center py-2 text-xs font-mono rounded flex items-center justify-center gap-1.5 text-primary"
              >
                <LinkedinIcon className="h-3.5 w-3.5" />
                <span>LinkedIn Profile</span>
              </a>
            )}
          </div>
        )}
      </div>
    </header>
  );
}
