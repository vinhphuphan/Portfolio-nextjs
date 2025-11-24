import * as React from "react";
import { cn } from "@/lib/utils";

// Directly use React.InputHTMLAttributes<HTMLInputElement> in the forwardRef function
const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-7 sm:h-8 md:h-9 w-full bg-transparent px-2 md:px-3 py-2 md:py-3 text-[10px] sm:text-xs md:text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
