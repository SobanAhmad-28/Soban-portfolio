import { milestones } from "@/data/journey";
import SectionWrapper from "@/components/layout/SectionWrapper";

export default function Journey() {
  if (milestones.length === 0) {
    return null;
  }

  return (
    <SectionWrapper id="journey">
      {/* Section Kicker */}
      <div className="flex items-center gap-3 mb-10">
        <span className="text-xs font-mono text-primary font-semibold">04 //</span>
        <h2 className="text-xs font-mono tracking-widest text-on-surface-variant uppercase font-semibold">
          LEARNING JOURNEY
        </h2>
      </div>

      {/* Editorial Timeline */}
      <div className="relative border-l-2 border-primary/20 ml-4 md:ml-6 pl-8 space-y-10">
        {milestones.map((milestone, index) => (
          <div key={index} className="relative group">
            {/* Dot on line */}
            <div className="absolute -left-[39px] top-1.5 w-4 h-4 bg-primary rounded-full ring-4 ring-surface flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-surface-container-lowest rounded-full" />
            </div>

            {/* Date Tag */}
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 bg-primary/10 border border-primary/20 rounded text-xs font-mono text-primary font-semibold mb-2">
              <span>{milestone.date}</span>
            </div>

            {/* Title */}
            <h3 className="text-base sm:text-lg font-semibold text-on-surface mb-2">
              {milestone.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-on-surface-variant max-w-2xl leading-relaxed">
              {milestone.description}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
