import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "@/components/header";
import Search from "@/components/search/dialog";
import Footer from "@/components/footer";
import JsonLd from "@/components/json-ld";
import { SearchProvider } from "@/lib/contexts/search";
import { siteConfig, authorName } from "@/lib/data/site";
import { buildSiteJsonLd } from "@/lib/utils/jsonLd";
import "./globals.css";

const pretendard = localFont({
  src: "../node_modules/pretendard/dist/web/variable/woff2/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
})

export const metadata: Metadata = {
  title: {
    template: `%s | ${siteConfig.name}`,
    default: siteConfig.name,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  authors: [{ name: authorName, url: siteConfig.url }],
  creator: authorName,
  publisher: authorName,
  verification: {
    google: "2GLfCTpT-ZqA7-HaWh-vUI51vF_IkhCRKWlDr14S4kI",
    other: {
      "naver-site-verification": "a46278a9d938469465e63605c156aca24db599d8",
    },
  },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    title: {
      template: `%s | ${siteConfig.name}`,
      default: siteConfig.name,
    },
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [{
      url: "/opengraph.png",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: siteConfig.url,
    title: {
      template: `%s | ${siteConfig.name}`,
      default: siteConfig.name,
    },
    description: siteConfig.description,
    images: [{
      url: "/opengraph.png",
    }],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className={pretendard.variable}>
      <head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title={siteConfig.name}
          href="/feed.xml"
        />
      </head>
      <body>
        <JsonLd data={buildSiteJsonLd()} />
        <SearchProvider>
          <Header />
          <Search />
          <div className="mx-auto my-24 px-4 max-w-331.25
            flex flex-col
            md:grid grid-cols-[1fr_240px] gap-x-12"
          >
            {children}
            <Footer />
          </div>
        </SearchProvider>
      </body>
    </html>
  )
}