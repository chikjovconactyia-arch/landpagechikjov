import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const ctaVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-brand text-primary-foreground shadow-orange hover:-translate-y-0.5 hover:brightness-105",
        orange:
          "bg-accent text-accent-foreground shadow-orange hover:-translate-y-0.5 hover:brightness-105",
        lilac:
          "bg-primary text-primary-foreground shadow-soft hover:-translate-y-0.5 hover:brightness-110",
        outline:
          "border border-primary/30 bg-background/40 text-primary backdrop-blur-sm hover:bg-primary hover:text-primary-foreground",
        light:
          "border border-primary-foreground/40 bg-primary-foreground/10 text-primary-foreground backdrop-blur-sm hover:bg-primary-foreground hover:text-primary",
        ghost: "text-primary hover:bg-secondary",
      },
      size: {
        sm: "px-5 py-2.5 text-sm",
        md: "px-7 py-3.5 text-sm",
        lg: "px-9 py-4 text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export interface CTAButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof ctaVariants> {}

export function CTAButton({ className, variant, size, ...props }: CTAButtonProps) {
  return <a className={cn(ctaVariants({ variant, size }), className)} {...props} />;
}
