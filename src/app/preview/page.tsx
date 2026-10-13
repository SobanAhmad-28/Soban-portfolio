import Link from "next/link";
import { ArrowLeft, Sparkles, CheckCircle2 } from "lucide-react";
import PreviewHero from "@/components/preview/PreviewHero";
import PreviewAbout from "@/components/preview/PreviewAbout";
import PreviewSkills from "@/components/preview/PreviewSkills";
import PreviewProjects from "@/components/preview/PreviewProjects";
import PreviewJourney from "@/components/preview/PreviewJourney";
import PreviewContact from "@/components/preview/PreviewContact";

export const metadata = {
  title: "Polished Preview | Soban Ahmad Portfolio",
  description: "Preview of refined design and visual polish before applying to the main portfolio.",
};

export default function PreviewPage() {
  return (
    <>
      {/* Top Polish Preview Notice Banner */}
      <div className="mt-16 sticky top-16 z-40 bg-slate-900/95 backdrop-blur-md text-slate-100 px-4 py-3 border-b border-slate-700 shadow-md">
        <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs md:text-sm">
          <div className="flex items-center gap-2.5">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="font-semibold text-emerald-300 flex items-center gap-1.5 font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              DUMMY / PREVIEW MODE
            </span>
            <span className="text-slate-300 hidden md:inline">
              | Yeh naya polished design hai. Original website abhi bhi safe hai.
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-600 font-medium transition-colors text-xs"
            >
              <ArrowLeft className="w-3 h-3" />
              <span>Back to Original (Home)</span>
            </Link>
            <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded border border-emerald-800/80 flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" />
              Ready for Review
            </span>
          </div>
        </div>
      </div>

      {/* Polished Preview Components */}
      <PreviewHero />
      <PreviewAbout />
      <PreviewSkills />
      <PreviewProjects />
      <PreviewJourney />
      <PreviewContact />
    </>
  );
}
