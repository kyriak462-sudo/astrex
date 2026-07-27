import * as React from "react";
import { cn } from "@/lib/utils";

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          "h-11 w-full rounded-lg border border-black/15 bg-black/[0.02] px-3.5 text-sm text-neutral-900 placeholder:text-neutral-400 outline-none transition-colors focus:border-black/30 focus:bg-black/[0.04] dark:border-white/10 dark:bg-white/[0.03] dark:text-white dark:placeholder:text-white/30 dark:focus:border-white/30 dark:focus:bg-white/[0.05]",
          className
        )}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export const Label = React.forwardRef<HTMLLabelElement, React.LabelHTMLAttributes<HTMLLabelElement>>(
  ({ className, ...props }, ref) => (
    <label
      ref={ref}
      className={cn("mb-1.5 block text-xs font-medium text-neutral-500 dark:text-white/50", className)}
      {...props}
    />
  )
);
Label.displayName = "Label";
