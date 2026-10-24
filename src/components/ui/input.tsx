import * as React from "react";
import { cn } from "@/lib/utils";

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, type, ...props }, ref) => (
    <input
      type={type}
      className={cn(
        "flex h-12 w-full rounded-xl border border-[#dfddd8] bg-white px-4 py-3 text-sm text-[#172e38] placeholder:text-[#8b9290] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d17b3f] disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      ref={ref}
      {...props}
    />
  ),
);
Input.displayName = "Input";

export const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...props }, ref) => (
    <textarea
      className={cn(
        "flex min-h-32 w-full resize-y rounded-xl border border-[#dfddd8] bg-white px-4 py-3 text-sm text-[#172e38] placeholder:text-[#8b9290] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d17b3f] disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      ref={ref}
      {...props}
    />
  ),
);
Textarea.displayName = "Textarea";
