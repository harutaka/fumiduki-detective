import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "文月探偵事務所 - 浮気調査や素行調査等",
  description: "当事務所は浮気調査や素行調査などの調査サービスを提供します。",
  icons: "/logo-32x32.png",
  openGraph: {
    type: "website",
    title: "文月探偵事務所",
    url: "https://fumiduki-detective.vercel.app",
    description: "当事務所は浮気調査や素行調査などの調査サービスを提供します。",
    images: [{ url: "https://fumiduki-detective.vercel.app/img/detective_overview.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: { canonical: "https://fumiduki-detective.vercel.app" },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
