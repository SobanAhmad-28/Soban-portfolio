"use client";

import { useState } from "react";
import { personalInfo } from "@/data/personal";
import SectionWrapper from "@/components/layout/SectionWrapper";
import {
  Copy,
  Check,
  Send,
  ExternalLink,
  Mail,
  Loader2,
  CheckCircle2,
  RotateCcw,
  Sparkles,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [copiedMessage, setCopiedMessage] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "fallback">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    body: "",
  });

  const hasEmail = personalInfo.email && personalInfo.email !== "your.email@example.com";
  const hasGithub = !!personalInfo.githubUrl;
  const hasLinkedin = !!personalInfo.linkedinUrl;

  const handleCopyEmail = () => {
    if (personalInfo.email) {
      navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleCopyFormattedMessage = () => {
    const text = `From: ${formData.name} (${formData.email})\nTo: ${personalInfo.email}\nSubject: Portfolio Inquiry from ${formData.name}\n\n${formData.body}`;
    navigator.clipboard.writeText(text);
    setCopiedMessage(true);
    setTimeout(() => setCopiedMessage(false), 2000);
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement)?.value.trim() || "";
    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value.trim() || "";
    const body = (form.elements.namedItem("body") as HTMLTextAreaElement)?.value.trim() || "";

    const payload = { name, email, body };
    setFormData(payload);

    if (!name || !email || !body) return;

    setStatus("loading");
    setErrorMessage("");

    try {
      const accessKey = personalInfo.web3FormsAccessKey || "c20ce5b0-75d5-452f-b44c-20a221f5be67";
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name,
          email,
          message: body,
          subject: `Portfolio Inquiry from ${name}`,
          from_name: "Soban Ahmad Portfolio",
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus("success");
      } else {
        setErrorMessage(result.message || "Failed to deliver directly. Use instant Gmail compose below.");
        setStatus("fallback");
      }
    } catch {
      setErrorMessage("Network issue occurred. You can still email directly via Gmail.");
      setStatus("fallback");
    }
  };

  const gmailComposeUrl = personalInfo.email
    ? `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
        personalInfo.email
      )}&su=${encodeURIComponent(
        formData.name ? `Inquiry from ${formData.name}` : "Portfolio Inquiry — Soban Ahmad"
      )}&body=${encodeURIComponent(
        formData.body || "Hi Soban,\n\nI came across your portfolio and would like to discuss..."
      )}`
    : "";

  return (
    <SectionWrapper id="contact" className="pb-24">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-8">
        <span className="text-xs font-mono text-primary font-semibold">05 //</span>
        <h2 className="text-xs font-mono tracking-widest text-on-surface-variant uppercase font-semibold">
          GET IN TOUCH
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Outreach & Channels (5 cols) */}
        <div className="lg:col-span-5 bg-surface-container-lowest/90 backdrop-blur-sm border border-outline-variant/60 rounded-2xl p-6 sm:p-8 shadow-xs">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 border border-emerald-200 rounded-full text-xs font-mono text-emerald-800 font-medium mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
            <span>Available for Internships &amp; Entry AI/DS Roles</span>
          </div>

          <h3 className="font-editorial text-2xl sm:text-3xl text-on-surface font-normal leading-snug mb-3">
            Let&apos;s discuss internships, data analysis &amp; applied AI projects.
          </h3>

          <p className="text-sm text-on-surface-variant leading-relaxed mb-6">
            I am always eager to talk with engineering mentors, tech recruiters, and fellow student developers working on impactful data solutions.
          </p>

          {/* Quick Copy Email Box */}
          {hasEmail && (
            <div className="p-3.5 bg-surface-container-low/80 border border-outline-variant/50 rounded-xl flex items-center justify-between gap-3 mb-6">
              <div className="flex items-center gap-2.5 overflow-hidden">
                <Mail className="h-4 w-4 text-primary shrink-0" />
                <span className="text-xs font-mono text-on-surface truncate font-medium">
                  {personalInfo.email}
                </span>
              </div>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container-lowest hover:bg-primary hover:text-surface-container-lowest text-on-surface border border-outline-variant/60 text-xs font-mono transition-all shrink-0 shadow-2xs"
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-emerald-600" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          )}

          {/* Social Profiles */}
          <div className="space-y-2.5 pt-4 border-t border-outline-variant/30">
            {hasLinkedin && (
              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between p-3 rounded-lg bg-surface-container-low/50 hover:bg-primary hover:text-surface-container-lowest transition-all text-xs font-mono text-on-surface border border-outline-variant/30 group"
              >
                <div className="flex items-center gap-2.5">
                  <LinkedinIcon className="h-4 w-4 text-outline group-hover:text-surface-container-lowest transition-colors" />
                  <span>Connect on LinkedIn</span>
                </div>
                <ExternalLink className="h-3.5 w-3.5 text-outline group-hover:text-surface-container-lowest" />
              </a>
            )}

            {hasGithub && (
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between p-3 rounded-lg bg-surface-container-low/50 hover:bg-primary hover:text-surface-container-lowest transition-all text-xs font-mono text-on-surface border border-outline-variant/30 group"
              >
                <div className="flex items-center gap-2.5">
                  <GithubIcon className="h-4 w-4 text-outline group-hover:text-surface-container-lowest transition-colors" />
                  <span>Browse GitHub Work</span>
                </div>
                <ExternalLink className="h-3.5 w-3.5 text-outline group-hover:text-surface-container-lowest" />
              </a>
            )}
          </div>
        </div>

        {/* Right Column: Sleek Direct Message Form (7 cols) */}
        <div className="lg:col-span-7 bg-surface-container-lowest/90 backdrop-blur-sm border border-outline-variant/60 rounded-2xl p-6 sm:p-8 shadow-xs">
          <div className="flex items-center justify-between pb-3 border-b border-outline-variant/30 mb-6">
            <h4 className="text-sm font-semibold text-on-surface font-mono flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-primary" />
              Direct Inquiry Form
            </h4>
            <span className="text-[11px] font-mono text-outline">
              Replies within 24h
            </span>
          </div>

          {status === "success" ? (
            <div className="p-6 bg-emerald-50/80 border border-emerald-200 rounded-xl text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h5 className="font-semibold text-emerald-950 text-base">Inquiry Dispatched Successfully!</h5>
                <p className="text-xs text-emerald-800 mt-1 max-w-sm mx-auto">
                  Thank you for reaching out. Your note has been delivered to Soban Ahmad&apos;s inbox.
                </p>
              </div>
              <button
                onClick={() => setStatus("idle")}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg text-xs font-mono transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Send Another Message</span>
              </button>
            </div>
          ) : status === "fallback" ? (
            <div className="p-5 bg-amber-50/80 border border-amber-200 rounded-xl space-y-4">
              <div>
                <h5 className="font-semibold text-amber-950 text-sm">Direct Webmail Option</h5>
                <p className="text-xs text-amber-900 mt-1">
                  {errorMessage || "You can launch Gmail directly with your message pre-filled."}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                <a
                  href={gmailComposeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-primary hover:bg-accent-hover text-surface-container-lowest rounded-lg text-xs font-mono font-medium transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Open in Gmail Compose</span>
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>

                <button
                  type="button"
                  onClick={handleCopyFormattedMessage}
                  className="inline-flex items-center gap-1.5 px-3 py-2 bg-surface-container-lowest border border-outline-variant/60 text-on-surface rounded-lg text-xs font-mono transition-colors"
                >
                  {copiedMessage ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedMessage ? "Copied!" : "Copy Full Note"}</span>
                </button>

                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="inline-flex items-center gap-1 px-3 py-2 text-outline hover:text-on-surface text-xs font-mono"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Retry Form</span>
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-on-surface-variant font-medium mb-1.5">
                    Your Name <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="e.g. Alex Kumar"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-outline-variant/60 bg-surface-container-low/40 focus:bg-surface-container-lowest focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-xs text-on-surface font-sans"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-on-surface-variant font-medium mb-1.5">
                    Your Email <span className="text-primary">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="alex@example.com"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-outline-variant/60 bg-surface-container-low/40 focus:bg-surface-container-lowest focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-xs text-on-surface font-sans"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-on-surface-variant font-medium mb-1.5">
                  Message / Role Details <span className="text-primary">*</span>
                </label>
                <textarea
                  name="body"
                  required
                  rows={4}
                  placeholder="Share details about the role, internship project, or collaboration..."
                  className="w-full px-3.5 py-2.5 rounded-lg border border-outline-variant/60 bg-surface-container-low/40 focus:bg-surface-container-lowest focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-xs text-on-surface font-sans leading-relaxed"
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <span className="text-[11px] font-mono text-outline">
                  Zero spam guaranteed.
                </span>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-on-surface hover:bg-primary text-surface-container-lowest rounded-lg text-xs font-medium font-mono transition-all shadow-xs hover:shadow hover:-translate-y-0.5 disabled:opacity-60"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      <span>Transmitting...</span>
                    </>
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </SectionWrapper>
  );
}
