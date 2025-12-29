import { cn } from "@/utils/cn";
import svgPath from "./icons.json";
import IconProps from "@/types/icon";

export default function Icon({
  name,
  size = 24,
  className,
  ...props
}: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={cn(
        "inline-block align-middle fill-current",
        className
      )}
      {...props}
    >
      <path
        d={svgPath[name].path}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
}