import Image from "next/image";
import type { Post } from "@/lib/utils/post";
import { formatDate } from "@/lib/utils/date";
import { siteConfig } from "@/lib/config/site";

export interface MeCardProps {
  date: Post["date"];
  category: Post["category"];
}

export default function MeCard({
  date,
  category
}: MeCardProps) {
  return (
    <div className="flex items-center gap-3
      lg:flex-col lg:items-start lg:gap-2"
    >
      <Image
        src="/profile.png"
        alt="d3h1 Profile Image"
        width={128}
        height={128}
        className="w-12 h-12 lg:w-25 lg:h-25
          rounded-full object-cover"
      />
      <p className="text-sm lg:text-base font-bold">
        {siteConfig.author.lastName} {siteConfig.author.firstName}
      </p>
      <time className="text-xs lg:text-sm text-gray-500 dark:text-gray-400 break-keep" dateTime={date}>
        {formatDate(date)}
      </time>
      <p className="text-xs lg:text-sm text-gray-500 dark:text-gray-400 break-keep">
        {category}
      </p>
    </div>
  );
}