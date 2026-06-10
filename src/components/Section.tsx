import { cn } from "@/lib/cn";
import { Container } from "./Container";

export function Section({
  number,
  eyebrow,
  title,
  subtitle,
  children,
  className,
  containerClassName,
  variant = "light",
  id,
}: {
  /** Numbered prefix shown before eyebrow, e.g. "01". Renders as "§ 01, …". */
  number?: string;
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

  const muted =
    variant === "dark" ? "text-text-invert-muted" : "text-text-muted";
  const main = variant === "dark" ? "text-text-invert" : "text-text";

  return (
    <section
      id={id}
      className={cn("py-20 md:py-28 lg:py-32", bg, className)}
    >
      <Container className={containerClassName}>
        {(number || eyebrow) && (
          <div
            className={cn(
              "flex items-center gap-3",
              variant === "dark" ? "text-amber/90" : "text-amber-strong",
            )}
          >
            {number && (
              <span className="section-no">§ {number}</span>
            )}
            {number && eyebrow && (
              <span className={cn("h-px w-8", muted, "bg-current opacity-40")} />
            )}
            {eyebrow && (
              <span
                className={cn(
                  "label-th text-xs font-semibold tracking-[0.08em]",
                  muted,
                )}
              >
                {eyebrow}
              </span>
            )}
          </div>
        )}
        {title && (
          <h2 className={cn("display-h2 mt-5", main)}>{title}</h2>
        )}
        {subtitle && (
          <p
            className={cn(
              "mt-5 max-w-2xl text-base md:text-lg leading-relaxed",
              variant === "dark" ? "text-text-invert/80" : muted,
            )}
          >
            {subtitle}
          </p>
        )}
        {children && (
          <div className={cn(title || eyebrow ? "mt-12 md:mt-16" : "")}>
            {children}
          </div>
        )}
      </Container>
    </section>
  );
}
