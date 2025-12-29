import { cn } from "@/utils/cn";
import svgPath from "./icons.json";
import IconProps from "@/types/icon";

export default function Icon({
  name,
  size = 24,
  color = "var(--theme-text-primary)",
  className,
  ...props
}: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={cn(
        "inline-block align-middle",
        className
      )}
      {...props}
    >
      {/* SVG path 데이터 적용, stroke는 color 사용 */}
      <path d={svgPath[name].path} fill={color} fillRule="evenodd" clipRule="evenodd" />
    </svg>
  );
}