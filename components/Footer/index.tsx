import Icon from "../Icon";
import { siteConfig } from "@/lib/config/site";

const socialLinkClass = `inline-flex justify-center items-center p-2
  gap-1.5 rounded-full cursor-pointer select-none
  bg-background text-foreground
  border border-gray-100 dark:border-gray-800
  hover:bg-foreground/5 transition-colors duration-300`;

export default function Footer({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className="mx-auto my-24 px-4 max-w-[1325px]
      flex flex-col
      lg:grid grid-cols-[1fr_240px] gap-x-12"
    >
      {children}
      <footer className="w-full max-w-60 mx-auto pt-4 lg:pt-12
        flex flex-col items-center gap-8
        static lg:fixed lg:right-[calc((100%-1325px)/2+16px)]"
      >
        <div className="w-full flex items-center justify-center gap-4 lg:justify-between">
          {siteConfig.socials.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className={socialLinkClass}
            >
              <Icon
                name={link.name}
                size={20}
              />
            </a>
          ))}
        </div>
        <div className="w-full max-w-80 lg:max-w-40
          bg-gray-400 dark:bg-gray-700 object-contain
          aspect-32/5 lg:aspect-[1/3.75]
          [@media(min-width:1325px)_and_(max-height:867px)_and_(min-height:401px)]:aspect-6/5
          [@media(min-width:1325px)_and_(max-height:400px)_and_(min-height:318px)]:aspect-32/10
          [@media(min-width:1325px)_and_(max-height:317px)]:aspect-32/5"
        />
        <p className="text-xs lg:text-sm text-gray-500 dark:text-gray-400">
          {siteConfig.copyright}
        </p>
      </footer>
    </div>
  )
}