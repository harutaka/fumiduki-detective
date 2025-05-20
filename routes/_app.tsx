import { type PageProps } from "$fresh/server.ts"
export default function App({ Component }: PageProps) {
  return (
    <html lang="ja">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>文月探偵事務所 - 浮気調査や素行調査等</title>
        <link rel="stylesheet" href="/styles.css" />
        <link rel="icon" href="/logo-32x32.png" sizes="any"></link>

        <meta property="og:title" content="文月探偵事務所" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fumiduki-detective.vercel.app" />
        <meta property="og:image" content="https://fumiduki-detective.vercel.app/img/detective_overview.jpg" />
      </head>
      <body>
        <main id="top">
          <Component />
        </main>
      </body>
    </html>
  )
}
