import { cn } from "@/lib/utils/cn";

export type ButtonSize = "tiny" | "small" | "medium" | "big";
export type ButtonVariant = "filled" | "linear" | "transparent";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
  variant?: ButtonVariant;
  iconOnly?: boolean;
}

const iconOnlySizeStyles: Record<ButtonSize, string> = {
  tiny: "p-2",
  small: "p-2.5",
  medium: "p-3.5",
  big: "p-4.5",
};

const sizeStyles: Record<ButtonSize, string> = {
  tiny: "py-1 px-1 text-2xs lg:text-xs",
  small: "py-2 px-4 text-2xs lg:text-xs",
  medium: "py-3 px-5 text-xs lg:text-sm",
  big: "py-4 px-6 text-sm lg:text-base",
};

const variantStyles: Record<ButtonVariant, string> = {
  filled: `bg-foreground text-background
    border border-foreground
    hover:bg-foreground/90 hover:text-background/90
    disabled:bg-gray-200 dark:disabled:bg-gray-800
    disabled:text-gray-400 dark:disabled:text-gray-600`,
  linear: `bg-background text-foreground
    border border-gray-100 dark:border-gray-800
    hover:bg-foreground/5 disabled:text-gray-400 dark:disabled:text-gray-600`,
  transparent: `bg-transparent text-foreground
    hover:bg-foreground/5 disabled:text-gray-400 dark:disabled:text-gray-600`,
};

const baseStyles = `inline-flex justify-center items-center
  gap-1.5 rounded-full
  cursor-pointer select-none
  disabled:cursor-not-allowed
  transition-colors duration-300`;

export function buttonClass({
  size = "medium",
  variant = "filled",
  iconOnly = false,
}: {
  size?: ButtonSize;
  variant?: ButtonVariant;
  iconOnly?: boolean;
} = {}): string {
  return cn(
    iconOnly ? iconOnlySizeStyles[size] : sizeStyles[size],
    variantStyles[variant],
    baseStyles,
  );
}

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
      className={cn(buttonClass({ size, variant, iconOnly }), className)}
      {...props}
    >
      {children}
    </button>
  );
}
