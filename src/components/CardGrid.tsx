import { cn } from "@/lib/cn";

export function CardGrid({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-3",
        className,
      )}
    >
      {children}
    </div>
  );
}
