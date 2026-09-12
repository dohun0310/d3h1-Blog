import Link from "next/link";
import { buttonClassName } from "@/components/ui/button";

export interface CategoryOption {
  slug: string;
  label: string;
}

export default function CategoryButton({
  option,
  selected,
}: {
  option: CategoryOption;
  selected: boolean;
}) {
  return (
    <Link
      href={option.slug ? `/category/${option.slug}` : "/"}
      className={buttonClassName({
        size: "medium",
        variant: selected ? "filled" : "linear",
      })}
    >
      {option.label}
    </Link>
  );
}