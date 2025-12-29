export default interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  size?: "tiny" | "small" | "medium" | "big";
  variant?: "filled" | "linear" | "transparent";
  iconOnly?: boolean;
}