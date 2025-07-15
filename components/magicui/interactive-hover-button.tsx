import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ children, className, disabled, ...props }, ref) => {
  return (
    <button
      ref={ref}
      disabled={disabled}
      className={cn(
        "group relative w-auto overflow-hidden rounded-full border p-2 px-6 text-center font-semibold transition-colors",
        "text-white", // Default text color
        disabled 
          ? "cursor-not-allowed opacity-80"
          : "",
        className,
      )}
      {...props}
    >
      <div className="flex items-center justify-center gap-2">
        {!disabled && (
          <div className="h-2 w-2 rounded-full bg-red-700 opacity-70 transition-all duration-300 group-hover:scale-[100.8]"></div>
        )}
        <span className={cn(
          "inline-block transition-all duration-300",
          !disabled && "group-hover:translate-x-12 group-hover:opacity-0"
        )}>
          {children}
        </span>
      </div>
      {!disabled && (
        <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-white opacity-0 transition-all duration-300 group-hover:-translate-x-5 group-hover:opacity-100">
          <span>{children}</span>
          <ArrowRight className="h-4 w-4" />
        </div>
      )}
    </button>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";
