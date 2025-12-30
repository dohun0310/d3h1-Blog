import { cn } from "@/utils/cn";
import ButtonProps from "@/types/button";

export default function Button({
  size = "medium",
  variant = "filled",
  iconOnly = false,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        iconOnly 
          ? size === "tiny"
              ? "p-2"
            : size === "small"
              ? "p-2.5"
            : size === "medium"
              ? "p-3.5"
            : size === "big"
              ? "p-4.5"
            : ""
          : size === "tiny"
            ? "py-1 px-1 text-2xs lg:text-xs"
          : size === "small"
            ? "py-2 px-4 text-2xs lg:text-xs"
          : size === "medium"
            ? "py-3 px-5 text-xs lg:text-sm"
          : size === "big"
            ? "py-4 px-6 text-sm lg:text-base"
          : "",
        variant === "filled"
          ? `bg-foreground text-background
          border border-foreground
          hover:bg-foreground/90 hover:text-background/90
          disabled:bg-gray-200 dark:disabled:bg-gray-800
          disabled:text-gray-400 dark:disabled:text-gray-600`
        : variant === "linear"
          ? `bg-background text-foreground
          border border-gray-100 dark:border-gray-800
          hover:bg-foreground/5 disabled:text-gray-400 dark:disabled:text-gray-600`
        : variant === "transparent"
          ? `bg-transparent text-foreground
          hover:bg-foreground/5 disabled:text-gray-400 dark:disabled:text-gray-600`
        : "",
        `inline-flex justify-center items-center
        gap-1.5 rounded-full
        cursor-pointer select-none
        disabled:cursor-not-allowed
        transition-colors duration-300`,
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
