"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        gold: "bg-gold text-charcoal hover:bg-gold-light",
        outline:
          "border border-gold/40 text-foreground hover:border-gold hover:bg-gold/10",
        whatsapp: "bg-[#25D366] text-white hover:bg-[#1fb855]",
        ghost: "text-foreground hover:bg-gold/10",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-5 text-base",
        lg: "h-12 px-6 text-base",
      },
    },
    defaultVariants: {
      variant: "gold",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends Omit<HTMLMotionProps<"button">, "ref">,
    VariantProps<typeof buttonVariants> {}

export function Button({
  className,
  variant,
  size,
  children,
  ...props
}: ButtonProps) {
  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {children}
    </motion.button>
  );
}

export function ButtonLink({
  className,
  variant,
  size,
  href,
  children,
  ...props
}: Omit<ButtonProps, "href"> &
  React.ComponentPropsWithoutRef<"a"> & { href: string }) {
  return (
    <motion.a
      href={href}
      whileTap={{ scale: 0.98 }}
      className={cn(buttonVariants({ variant, size, className }))}
      {...(props as HTMLMotionProps<"a">)}
    >
      {children}
    </motion.a>
  );
}
