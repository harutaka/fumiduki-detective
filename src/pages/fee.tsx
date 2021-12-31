import type { NextPage } from "next"
import Head from "next/head"
import Breadcrumb from "@/components/Breadcrumb"
import CheckListItem from "@/components/CheckListItem"
import CtaBlock from "@/components/CtaBlock"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import PageHeader from "@/components/PageHeader"
import FeeItem from "@/components/feeItem"

const Fee: NextPage = () => {
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
        <title>料金 - 文月探偵事務所</title>
        <meta name="description" content="当当事務所取扱い業務の料金です。" />
        <meta property="og:title" content="料金" />
        <meta property="og:description" content="当当事務所取扱い業務の料金です。" />
        <meta name="twitter:card" content="summary" />
        <link rel="icon" href="/logo-32x32.png" sizes="32x32" />
        <link rel="icon" href="/logo-192x192.png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/logo-180x180.png" />
      </Head>

      <Header current="/fee" />
      <PageHeader title="料金" />
      <Breadcrumb breadcrumb={[{ href: "", title: "料金" }]} />

      <main className="relative py-4 px-4 md:px-14">
        {/* site-container */}
        <div className="relative px-4 pt-16 mx-auto mb-20 w-full max-w-6xl">
          <ul>
            {serviceArr.map((item, i) => (
              <CheckListItem key={i} name={item.title} />
            ))}
          </ul>

          <p className="my-8">当事務所取扱い業務の料金です。</p>

          {serviceArr.map((item, i) => (
            <FeeItem key={i} title={item.title} />
          ))}

          <CtaBlock />
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Fee
