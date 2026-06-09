import { cn } from "@/lib/cn";
import { Container } from "./Container";

export function Section({
  eyebrow,
  title,
  subtitle,
  children,
  className,
  containerClassName,
  variant = "light",
  id,
}: {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  variant?: "light" | "alt" | "dark";
  id?: string;
}) {
  const bg =
    variant === "alt"
      ? "bg-paper-2"
      : variant === "dark"
      ? "bg-bg text-text-invert"
      : "bg-paper";

  return (
    <section id={id} className={cn("py-16 md:py-24", bg, className)}>
      <Container className={containerClassName}>
        {eyebrow && (
          <p
            className={cn(
              "eyebrow",
              variant === "dark" ? "text-text-invert-muted" : "text-text-muted",
            )}
          >
            {eyebrow}
          </p>
        )}
        {title && (
          <h2
            className={cn(
              "mt-3 text-[clamp(1.5rem,3vw,2.25rem)] font-semibold leading-tight",
              variant === "dark" ? "text-text-invert" : "text-text",
            )}
          >
            {title}
          </h2>
        )}
        {subtitle && (
          <p
            className={cn(
              "mt-4 max-w-2xl text-base md:text-lg leading-relaxed",
              variant === "dark"
                ? "text-text-invert/80"
                : "text-text-muted",
            )}
          >
            {subtitle}
          </p>
        )}
        {children && <div className={cn(title ? "mt-10 md:mt-12" : "")}>{children}</div>}
      </Container>
    </section>
  );
}
