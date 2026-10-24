import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d17b3f] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-[#d17b3f] text-white hover:bg-[#bb6832]",
        secondary: "bg-white text-[#142a35] hover:bg-[#f1eee9]",
        outline: "border border-[#d9d6d0] bg-transparent text-[#142a35] hover:border-[#142a35] hover:bg-white",
        ghost: "text-[#142a35] hover:bg-[#f1eee9]",
      },
      size: {
        default: "h-12 px-6",
        sm: "h-10 px-4 text-xs",
        lg: "h-14 px-7 text-base",
        icon: "size-10 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return <button className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}

export { buttonVariants };
