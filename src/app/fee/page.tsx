import type { NextPage } from "next"
import Breadcrumb from "@/components/Breadcrumb"
import CheckListItem from "@/components/CheckListItem"
import CtaBlock from "@/components/CtaBlock"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import PageHeader from "@/components/PageHeader"
import FeeItem from "@/components/feeItem"

import availableService from "@/shared/availableService"

const Fee: NextPage = () => {
  return (
    <div className="min-h-screen text-lg tracking-wider bg-gray-100">
      <Header current="/fee" />
      <PageHeader title="料金" />
      <Breadcrumb breadcrumb={[{ href: "", title: "料金" }]} />

      <main className="relative py-4 px-4 md:px-14">
        {/* site-container */}
        <div className="relative px-4 pt-16 mx-auto mb-20 w-full max-w-6xl">
          <ul>
            {availableService.map((item, i) => (
              <CheckListItem key={i} name={item.title} />
            ))}
          </ul>

          <p className="my-8">当事務所取扱い業務の料金です。</p>

          {availableService.map((item, i) => (
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
