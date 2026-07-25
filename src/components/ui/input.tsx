import * as React from "react";
import { cn } from "@/lib/utils";

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          "h-11 w-full rounded-lg border border-white/10 bg-white/[0.03] px-3.5 text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-white/30 focus:bg-white/[0.05]",
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
      className={cn("mb-1.5 block text-xs font-medium text-white/50", className)}
      {...props}
    />
  )
);
Label.displayName = "Label";
