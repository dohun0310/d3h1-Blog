import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "@/components/Header";
import Search from "@/components/Search";
import Footer from "@/components/Footer";
import { SearchProvider } from "@/lib/contexts/SearchContext";
import { siteConfig } from "@/lib/config/site";
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
      <body>
        <SearchProvider>
          <Header />
          <Search />
          <Footer>
            {children}
          </Footer>
        </SearchProvider>
      </body>
    </html>
  )
}