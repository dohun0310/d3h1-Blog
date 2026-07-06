import CategoryButton, { type CategoryOption } from "@/components/CategoryButton";

export default function CategoryFilter({
  options,
  selectedCategory,
}: {
  options: CategoryOption[];
  selectedCategory: string;
}) {
  return (
    <div className="w-full select-none flex flex-wrap gap-2">
      {options.map((option) => (
        <CategoryButton
          key={option.slug}
          option={option}
          selected={selectedCategory === option.label}
        />
      ))}
    </div>
  );
}