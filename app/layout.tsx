import { Noto_Sans_KR } from "next/font/google";

import { Header } from "@/components";
import { ThemeProvider } from "@/theme";

const noto_sans_kr = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
})

export const metadata = {
  title: "d3h1 Blog",
  description: "새로운 것을 즐기고, 변화를 만들고",
  openGraph: {
    type: "website",
    url: "https://blog.d3h1.com",
    title: "d3h1 Blog",
    description: "새로운 것을 즐기고, 변화를 만들고",
    siteName: "d3h1 Blog",
    images: [{
      url: "/opengraph.png",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://blog.d3h1.com",
    title: "d3h1 Blog",
    description: "새로운 것을 즐기고, 변화를 만들고",
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
    <html lang="ko">
      <ThemeProvider>
        <body className={noto_sans_kr.className}>
          <Header />
          {children}
        </body>
      </ThemeProvider>
    </html>
  )
}
