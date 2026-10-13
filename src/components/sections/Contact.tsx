"use client";

import { useState } from "react";
import { personalInfo } from "@/data/personal";
import SectionWrapper from "@/components/layout/SectionWrapper";
import {
  Copy,
  Check,
  Send,
  ArrowDown,
  ExternalLink,
  Mail,
  Loader2,
  CheckCircle2,
  RotateCcw,
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

  const hasEmail =
    personalInfo.email && personalInfo.email !== "your.email@example.com";
  const hasGithub = !!personalInfo.githubUrl;
  const hasLinkedin = !!personalInfo.linkedinUrl;
  const hasResume = !!personalInfo.resumeFileName;

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

    // If a Web3Forms access key is configured, send silently in the background
    if (personalInfo.web3FormsAccessKey) {
      setStatus("loading");
      setErrorMessage("");
      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: personalInfo.web3FormsAccessKey,
            name: name,
            email: email,
            message: body,
            subject: `Portfolio Inquiry from ${name}`,
            from_name: `${name} (Soban Portfolio)`,
          }),
        });

        const result = await response.json();
        if (result.success) {
          setStatus("success");
          return;
        } else {
          setErrorMessage(result.message || "Service could not deliver email.");
          setStatus("fallback");
        }
      } catch {
        setErrorMessage("Network issue connecting to email service.");
        setStatus("fallback");
      }
    } else {
      // Key not yet configured: immediately provide webmail dispatch fallback
      setStatus("fallback");
    }
  };

  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    personalInfo.email
  )}&su=${encodeURIComponent(`Portfolio Inquiry from ${formData.name}`)}&body=${encodeURIComponent(
    `From: ${formData.name} (${formData.email})\n\n${formData.body}`
  )}`;

  const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
    `Portfolio Inquiry from ${formData.name}`
  )}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.body}`)}`;

  return (
    <SectionWrapper id="contact" hasBorder={false}>
      {/* Section Kicker */}
      <div className="flex items-center gap-3 mb-10">
        <span className="text-xs font-mono text-primary font-semibold">05 //</span>
        <h2 className="text-xs font-mono tracking-widest text-on-surface-variant uppercase font-semibold">
          GET IN TOUCH
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column: Direct Links & Info */}
        <div className="lg:col-span-7">
          <h3 className="font-editorial text-3xl md:text-4xl text-on-surface tracking-tight mb-4 font-normal leading-snug">
            Let&apos;s discuss data roles and internships.
          </h3>
          <p className="text-base text-on-surface-variant mb-6 leading-relaxed">
            I am actively seeking internship opportunities and entry-level roles in Data Science, Data Analytics, or Applied AI/ML. Open to conversations with engineering teams and collaborative student projects.
          </p>

          {/* Primary Inbox Card */}
          <div className="p-6 bg-surface-container-lowest border border-outline-variant/60 rounded space-y-4 max-w-xl shadow-xs">
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <div>
                <span className="text-[11px] font-mono text-outline uppercase block tracking-wider">
                  PRIMARY INBOX
                </span>
                <span className="text-sm sm:text-base font-semibold text-on-surface">
                  {personalInfo.email}
                </span>
              </div>

              {hasEmail ? (
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 bg-surface border border-outline-variant hover:border-outline text-on-surface rounded text-xs font-mono transition-all flex items-center gap-1.5 shadow-xs active:scale-95"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5 text-outline" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              ) : (
                <span className="text-xs font-mono text-outline italic">
                  (Configure in personal.ts)
                </span>
              )}
            </div>

            {/* Social Links Row */}
            <div className="pt-3.5 border-t border-outline-variant/30 flex flex-wrap gap-5 text-xs font-mono">
              {hasLinkedin && (
                <a
                  href={personalInfo.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline flex items-center gap-1.5 font-medium transition-colors"
                >
                  <LinkedinIcon className="h-3.5 w-3.5" />
                  <span>LinkedIn</span>
                  <ExternalLink className="h-3 w-3 text-outline" />
                </a>
              )}

              {hasGithub && (
                <a
                  href={personalInfo.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline flex items-center gap-1.5 font-medium transition-colors"
                >
                  <GithubIcon className="h-3.5 w-3.5" />
                  <span>GitHub</span>
                  <ExternalLink className="h-3 w-3 text-outline" />
                </a>
              )}

              {hasEmail && (
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
                    personalInfo.email
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline flex items-center gap-1.5 font-medium transition-colors"
                  title="Open new email in Gmail"
                >
                  <Mail className="h-3.5 w-3.5" />
                  <span>Send Mail (Gmail)</span>
                  <ExternalLink className="h-3 w-3 text-outline" />
                </a>
              )}
            </div>
          </div>

          {/* Resume Download Card if available */}
          {hasResume && (
            <div className="mt-6 p-5 bg-surface-container-lowest border border-outline-variant/60 rounded max-w-xl shadow-xs flex items-center justify-between gap-4">
              <div>
                <h4 className="text-sm font-semibold text-on-surface">Curriculum Vitae</h4>
                <p className="text-xs text-on-surface-variant">Download latest resume PDF</p>
              </div>
              <a
                href={`/${personalInfo.resumeFileName}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-on-primary hover:bg-primary-container px-4 py-2 rounded text-xs font-mono transition-colors flex items-center gap-1.5 shadow-xs"
              >
                <span>Download Resume</span>
                <ArrowDown className="h-3.5 w-3.5" />
              </a>
            </div>
          )}
        </div>

        {/* Right Column: Direct Message Form */}
        <div className="lg:col-span-5">
          <div className="bg-surface-container-lowest border border-outline-variant/60 rounded p-6 shadow-xs">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h4 className="text-base font-semibold text-on-surface">Direct Inquiry</h4>
                <p className="text-xs text-on-surface-variant mt-0.5">
                  Send a note directly to my inbox.
                </p>
              </div>
              <Mail className="h-5 w-5 text-outline" />
            </div>

            {status === "success" && (
              <div className="p-6 bg-emerald-50 border border-emerald-200 rounded text-center space-y-3">
                <div className="w-10 h-10 mx-auto rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <h5 className="text-sm font-semibold text-emerald-900">Message Sent Successfully!</h5>
                <p className="text-xs text-emerald-800 leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>. Your note has been delivered directly to my inbox. I will reply to <strong>{formData.email}</strong> shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-2 px-3.5 py-1.5 bg-surface-container-lowest border border-emerald-300 hover:border-emerald-500 text-xs font-mono text-emerald-800 rounded transition-colors flex items-center gap-1.5 mx-auto"
                >
                  <RotateCcw className="h-3 w-3" />
                  <span>Send Another Note</span>
                </button>
              </div>
            )}

            {status === "fallback" && (
              <div className="p-5 bg-surface-container-low border border-outline-variant/60 rounded space-y-4 text-xs font-sans">
                <div className="flex items-center gap-2 text-primary font-mono font-semibold">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Ready to Dispatch</span>
                </div>

                {errorMessage ? (
                  <p className="text-[11px] text-amber-700 bg-amber-50 p-2 rounded border border-amber-200">
                    Note: {errorMessage}. You can send directly via webmail below.
                  </p>
                ) : (
                  <p className="text-on-surface-variant leading-relaxed">
                    Choose your preferred delivery channel to send your note to <strong>{personalInfo.email}</strong>:
                  </p>
                )}

                <div className="flex flex-col gap-2 pt-1 font-mono">
                  <a
                    href={gmailComposeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-primary text-on-primary hover:bg-primary-container py-2.5 rounded flex items-center justify-center gap-2 transition-colors font-medium shadow-xs"
                  >
                    <Mail className="h-3.5 w-3.5" />
                    <span>Open in Gmail (Web)</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>

                  <a
                    href={mailtoUrl}
                    className="w-full bg-surface-container-lowest hover:bg-surface border border-outline-variant/60 text-on-surface py-2 rounded flex items-center justify-center gap-2 transition-colors"
                  >
                    <span>Default Mail Client</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleCopyFormattedMessage}
                    className="w-full bg-surface-container-lowest hover:bg-surface border border-outline-variant/60 text-on-surface py-2 rounded flex items-center justify-center gap-2 transition-colors"
                  >
                    {copiedMessage ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-emerald-600" />
                        <span className="text-emerald-700 font-semibold">Message Copied to Clipboard</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5 text-outline" />
                        <span>Copy Message Text</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="pt-2 border-t border-outline-variant/30 flex justify-between items-center text-[11px] font-mono text-outline">
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="text-primary hover:underline"
                  >
                    ← Edit note
                  </button>
                  <span>100% Reliable Delivery</span>
                </div>
              </div>
            )}

            {(status === "idle" || status === "loading") && (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="sender_name"
                    className="block text-[11px] font-mono text-on-surface-variant mb-1 font-medium uppercase"
                  >
                    Your Name
                  </label>
                  <input
                    id="sender_name"
                    name="name"
                    type="text"
                    required
                    defaultValue={formData.name}
                    placeholder="Recruiter / Engineer Name"
                    className="w-full text-xs font-sans bg-surface-container-low border border-outline-variant/60 rounded px-3 py-2 text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="sender_email"
                    className="block text-[11px] font-mono text-on-surface-variant mb-1 font-medium uppercase"
                  >
                    Email Address
                  </label>
                  <input
                    id="sender_email"
                    name="email"
                    type="email"
                    required
                    defaultValue={formData.email}
                    placeholder="name@company.com"
                    className="w-full text-xs font-sans bg-surface-container-low border border-outline-variant/60 rounded px-3 py-2 text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="sender_message"
                    className="block text-[11px] font-mono text-on-surface-variant mb-1 font-medium uppercase"
                  >
                    Opportunity / Note
                  </label>
                  <textarea
                    id="sender_message"
                    name="body"
                    rows={3}
                    required
                    defaultValue={formData.body}
                    placeholder="Role details, timeline, or project inquiry..."
                    className="w-full text-xs font-sans bg-surface-container-low border border-outline-variant/60 rounded px-3 py-2 text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-on-surface text-surface-container-lowest py-2.5 rounded text-xs font-medium hover:bg-primary transition-all flex items-center justify-center gap-2 shadow-xs group disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="h-3.5 w-3.5 animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
