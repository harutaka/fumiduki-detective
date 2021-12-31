import type { NextPage } from "next"
import Head from "next/head"
import Breadcrumb from "@/components/Breadcrumb"
import CtaBlock from "@/components/CtaBlock"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import PageHeader from "@/components/PageHeader"
import StaffMember from "@/components/StaffMember"

const Staff: NextPage = () => {
  return (
    <div className="min-h-screen text-lg tracking-wider bg-gray-100">
      <Head>
        <title>スタッフ紹介 - 文月探偵事務所</title>
        <meta name="description" content="当事務所のスタッフを紹介します。" />
        <meta property="og:title" content="スタッフ紹介" />
        <meta property="og:description" content="当事務所のスタッフを紹介します。" />
        <meta name="twitter:card" content="summary" />
        <link rel="icon" href="/logo-32x32.png" sizes="32x32" />
        <link rel="icon" href="/logo-192x192.png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/logo-180x180.png" />
      </Head>

      <Header current="/staff" />
      <PageHeader title="スタッフ紹介" />
      <Breadcrumb breadcrumb={[{ href: "", title: "スタッフ紹介" }]} />

      <main className="relative py-4 px-4 md:px-14">
        {/* site-container */}
        <div className="relative px-4 pt-16 mx-auto w-full max-w-6xl">
          <div className="">当事務所のスタッフを紹介します。</div>
          <StaffMember name="横嶋 秀典" src="/img/hide01.jpg" role="所長" />
          <StaffMember name="竹光 雄介" src="/img/yusuke01.jpg" role="探偵" />
          <StaffMember name="市河 梨奈" src="/img/rina05.jpg" role="探偵" />
          <CtaBlock />
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Staff
