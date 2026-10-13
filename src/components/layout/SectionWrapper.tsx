import ScrollReveal from "@/components/ui/ScrollReveal";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  hasBorder?: boolean;
}

export default function SectionWrapper({
  id,
  children,
  className,
  hasBorder = true,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 md:py-20",
        hasBorder && "border-b border-outline-variant/30",
        className
      )}
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <ScrollReveal>{children}</ScrollReveal>
      </div>
    </section>
  );
}
