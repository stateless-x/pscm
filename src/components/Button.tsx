import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none min-h-[44px] px-5",
  {
    variants: {
      variant: {
        primary:
          "bg-amber text-ink hover:bg-amber-strong active:translate-y-px",
        secondary:
          "bg-surface text-text-invert hover:bg-surface-2 active:translate-y-px",
        outline:
          "border border-line bg-transparent text-text hover:bg-paper-2 active:translate-y-px",
        outlineInvert:
          "border border-line-dark bg-transparent text-text-invert hover:bg-surface-2 active:translate-y-px",
        ghost: "bg-transparent text-text hover:bg-paper-2",
        line: "bg-[#06C755] text-white hover:bg-[#05a648] active:translate-y-px",
      },
      size: {
        md: "text-sm h-11",
        lg: "text-base h-12 px-6",
        sm: "text-sm h-10 px-4 min-h-[40px]",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

export function Button({
  className,
  variant,
  size,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}
