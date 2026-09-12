import Link from "next/link";
import { buttonClass } from "@/components/Button";

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
      className={buttonClass({
        size: "medium",
        variant: selected ? "filled" : "linear",
      })}
    >
      {option.label}
    </Link>
  );
}