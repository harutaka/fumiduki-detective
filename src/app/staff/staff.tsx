import type { NextPage } from "next"
import Breadcrumb from "@/components/Breadcrumb"
import CtaBlock from "@/components/CtaBlock"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import PageHeader from "@/components/PageHeader"
import StaffMember from "@/components/StaffMember"

import hideImg from "@/../public/img/hide01.jpg"
import yusukeImg from "@/../public/img/yusuke01.jpg"
import rinaImg from "@/../public/img/rina05.jpg"

const Staff: NextPage = () => {
  return (
    <div className="min-h-screen text-lg tracking-wider bg-gray-100">

      <Header current="/staff" />
      <PageHeader title="スタッフ紹介" />
      <Breadcrumb breadcrumb={[{ href: "", title: "スタッフ紹介" }]} />

      <main className="relative py-4 px-4 md:px-14">
        {/* site-container */}
        <div className="relative px-4 pt-16 mx-auto w-full max-w-6xl">
          <div className="">当事務所のスタッフを紹介します。</div>
          <StaffMember name="横嶋 秀典" src={hideImg} role="所長" />
          <StaffMember name="竹光 雄介" src={yusukeImg} role="探偵" />
          <StaffMember name="市河 梨奈" src={rinaImg} role="探偵" />
          <CtaBlock />
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Staff
