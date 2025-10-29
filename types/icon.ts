export type IconName =
  | "search"
  | "instagram"
  | "facebook"
  | "github"
  | "x"

export default interface IconProps {
  name: IconName;
  size?: number;
  color?: string;
  className?: string;
}
