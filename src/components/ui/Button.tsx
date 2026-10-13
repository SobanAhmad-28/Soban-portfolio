import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  href?: string;
  external?: boolean;
  children: React.ReactNode;
}

export default function Button({
  variant = "primary",
  size = "md",
  loading = false,
  href,
  external = false,
  children,
  className,
  disabled,
  ...props
}: ButtonProps) {
  const baseClasses = cn(
    "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:opacity-50 disabled:cursor-not-allowed",
    size === "sm" && "px-3 py-1.5 text-sm",
    size === "md" && "px-5 py-2.5 text-sm",
    size === "lg" && "px-6 py-3 text-base",
    variant === "primary" && "bg-accent text-white hover:bg-accent-hover",
    variant === "secondary" && "border border-border text-text-primary hover:bg-bg-secondary hover:border-border-hover",
    variant === "ghost" && "text-text-secondary hover:text-text-primary hover:bg-bg-secondary",
    className
  );

  if (href) {
    return (
      <a
        href={href}
        className={baseClasses}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={baseClasses} disabled={disabled || loading} {...props}>
      {loading && <Loader2 className="h-4 w-4 animate-spin" />}
      {children}
    </button>
  );
}
