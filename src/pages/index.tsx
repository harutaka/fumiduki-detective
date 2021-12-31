import type { NextPage } from "next"
import Head from "next/head"
import CoverImage from "@/components/CoverImage"
import CtaBlock from "@/components/CtaBlock"
import Feature from "@/components/Feature"
import Footer from "@/components/Footer"
import H2title from "@/components/H2title"
import Header from "@/components/Header"
import InfomationLink from "@/components/InfomationLink"
import Office from "@/components/Office"
import QaItem from "@/components/QaItem"
import SearchItem from "@/components/SearchItem"
import Slider from "@/components/Slider"

const Home: NextPage = () => {
  const serviceArr = [
    { title: "浮気調査", src: "/img/uwaki.jpg" },
    { title: "結婚調査", src: "/img/wedding.jpg" },
    { title: "素行調査", src: "/img/soko.jpg" },
    { title: "いじめ調査", src: "/img/ijime.jpg" },
    { title: "ストーカー調査", src: "/img/sutoka.jpg" },
    { title: "ペット調査", src: "/img/petto.jpg" },
  ]

  return (
    <div className="min-h-screen text-lg tracking-wider bg-gray-100">
      <Head>
        <title>文月探偵事務所 - 浮気調査や素行調査等</title>
        <meta name="description" content="浮気調査や素行調査等" />
        <meta property="og:title" content="文月探偵事務所" />
        <meta property="og:description" content="浮気調査や素行調査等" />
        <meta name="twitter:card" content="summary" />
        <link rel="icon" href="/logo-32x32.png" sizes="32x32" />
        <link rel="icon" href="/logo-192x192.png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/logo-180x180.png" />
      </Head>

      <Header current="/" />
      <Slider />

      <main className="relative py-4 px-4 md:px-14">
        {/* site-container */}
        <div className="relative px-4 mx-auto w-full max-w-6xl">
          <section className="mt-8 mb-16 md:my-16">
            <div className="my-8 mx-auto w-full text-xl text-center border-2 border-gray-400 md:my-16">
              <div className="pt-4 w-full">〒000-0000 大阪府大阪市〇〇〇〇1-1-1</div>
              <div className="py-4 w-full font-bold text-amber-600">TEL: 000-000-0000</div>
            </div>

            <p className="mb-4">
              当事務所は30年以上に渡り、浮気調査や素行調査などの調査サービスを提供し、信頼と実績を積み重ねてきました。問題やトラブルの解決に向け、全力でサポートいたします。
            </p>
            <p>
              事務所説明でした。ここから先はダミーテキストです。これはダミーテキストです。これはダミーテキストです。これはダミーテキストです。
            </p>
          </section>

          <section className="my-16">
            <Feature title="地域密着・経験豊富な調査員" src="/img/area.jpg" reverse={false} />
            <Feature title="明瞭な見積り料金" src="/img/kaikei.jpg" reverse={true} />
            <Feature title="手厚いアフターフォローサービス" src="/img/akusyu.jpg" reverse={false} />
          </section>

          <section className="my-16">
            <H2title title="インフォメーション" />
            <InfomationLink href="#" title="「浮気の予防セミナー」実施のお知らせ" />
            <InfomationLink href="#" title="当事務所が新聞で紹介されました" />
            <InfomationLink href="#" title="夏季休業のお知らせ" />
          </section>

          <CoverImage className="bg-img-intermiddle01" />

          <section className="my-16">
            <H2title title="調査内容" />
            <div className="grid-cols-2 gap-8 md:grid">
              {serviceArr.map((item, i) => <SearchItem key={i} title={item.title} src={item.src} />)}
            </div>
          </section>

          <CoverImage className="bg-img-intermiddle02" />

          <section className="my-16">
            <H2title title="よくあるご質問" />
            <QaItem title="相談は無料ですか？" />
            <QaItem title="匿名での相談はできますか？" />
            <QaItem title="依頼する時に必要なものはありますか？" />
            <QaItem title="調査はどれぐらいの期間で終わりますか？" />
            <QaItem title="報告はどのように行われますか？" />
          </section>

          <section className="my-16">
            <H2title title="事務所ご紹介" />
            <Office />
          </section>

          <CtaBlock />
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Home
