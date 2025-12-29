export type IconName =
  | "search"
  | "instagram"
  | "facebook"
  | "github"
  | "x"

export default interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName;
  size?: number;
  color?: string;
  className?: string;
}
