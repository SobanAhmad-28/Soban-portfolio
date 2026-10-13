import { milestones } from "@/data/journey";
import SectionWrapper from "@/components/layout/SectionWrapper";
import { Calendar, Sparkles } from "lucide-react";

export default function Journey() {
  if (milestones.length === 0) {
    return null;
  }

  return (
    <SectionWrapper id="journey">
      {/* Section Kicker */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-mono text-primary font-semibold">04 //</span>
            <h2 className="text-xs font-mono tracking-widest text-on-surface-variant uppercase font-semibold">
              ACADEMIC TIMELINE &amp; LEARNING JOURNEY
            </h2>
          </div>
          <p className="text-sm md:text-base text-on-surface-variant">
            Documenting authentic progress from foundational CS coursework to data analytics and applied machine learning.
          </p>
        </div>
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-low border border-outline-variant/60 rounded-full text-xs font-mono text-primary font-medium">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Active Academic Progress</span>
        </div>
      </div>

      {/* Modern Editorial Timeline */}
      <div className="relative border-l-2 border-primary/30 ml-4 md:ml-8 pl-8 md:pl-10 space-y-8">
        {milestones.map((milestone, index) => (
          <div key={index} className="relative group">
            {/* Pulsing Dot on line */}
            <div className="absolute -left-[41px] md:-left-[49px] top-1.5 w-5 h-5 bg-surface-container-lowest rounded-full border-2 border-primary flex items-center justify-center group-hover:scale-110 group-hover:border-primary-container transition-all shadow-xs">
              <div className="w-2 h-2 bg-primary rounded-full group-hover:bg-primary-container" />
            </div>

            {/* Content Card */}
            <div className="bg-surface-container-lowest/90 backdrop-blur-sm border border-outline-variant/60 hover:border-primary/40 rounded-xl p-5 sm:p-6 shadow-xs hover:shadow-md transition-all duration-300">
              {/* Date Tag */}
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-primary/10 border border-primary/20 rounded-full text-xs font-mono text-primary font-semibold">
                  <Calendar className="w-3 h-3" />
                  {milestone.date}
                </span>
                <span className="text-[11px] font-mono text-outline">
                  {`Milestone 0${index + 1}`}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-base sm:text-lg font-semibold text-on-surface mb-2 group-hover:text-primary transition-colors">
                {milestone.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-on-surface-variant leading-relaxed">
                {milestone.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
