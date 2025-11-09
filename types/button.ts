import type { IconName } from "@/types/icon";

export default interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  size?: "tiny" | "small" | "medium" | "big";
  variant?: "filled" | "linear" | "transparent";
  iconName?: IconName;
  iconOnly?: boolean;
}