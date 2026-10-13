import Link from "next/link";
import { Home } from "lucide-react";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center pt-16">
      <div className="text-center px-4">
        <p className="text-6xl font-bold text-accent mb-4">404</p>
        <h1 className="text-2xl font-semibold text-text-primary mb-2">
          Page Not Found
        </h1>
        <p className="text-text-secondary mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link href="/">
          <Button variant="primary" size="md">
            <Home className="h-4 w-4" />
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
