import Icon from "../Icon";
import { buttonClass } from "../Button";
import { cn } from "@/lib/utils/cn";
import { siteConfig } from "@/lib/config/site";

export default function Footer() {
  return (
    <footer className="w-full max-w-60 mx-auto pt-4 lg:pt-12
      flex flex-col items-center gap-8
      static md:sticky md:top-24 md:self-start"
    >
      <div className="w-full flex items-center justify-center gap-4 lg:justify-between">
        {siteConfig.socials.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.name}
            className={cn(buttonClass({ size: "small", variant: "linear" }), "p-2")}
          >
            <Icon
              name={link.name}
              size={20}
            />
          </a>
        ))}
      </div>
      <div className="w-full max-w-80 md:max-w-40
        bg-gray-400 dark:bg-gray-700 object-contain
        aspect-32/5 md:aspect-1/3.75
        [@media(min-width:674px)_and_(max-height:867px)_and_(min-height:401px)]:aspect-6/5
        [@media(min-width:674px)_and_(max-height:400px)_and_(min-height:318px)]:aspect-32/10
        [@media(min-width:674px)_and_(max-height:317px)]:aspect-32/5"
      />
      <p className="text-xs lg:text-sm text-gray-500 dark:text-gray-400">
        {siteConfig.copyright}
      </p>
    </footer>
  )
}