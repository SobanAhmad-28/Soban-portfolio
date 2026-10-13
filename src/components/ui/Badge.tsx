import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent" | "outline";
  className?: string;
}

export default function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-transform duration-150 hover:scale-105",
        variant === "default" && "bg-accent-light text-accent",
        variant === "accent" && "bg-accent text-white",
        variant === "outline" && "border border-border text-text-secondary",
        className
      )}
    >
      {children}
    </span>
  );
}
