import type { NextPage } from "next"
import Breadcrumb from "@/components/Breadcrumb"
import CheckListItem from "@/components/CheckListItem"
import CtaBlock from "@/components/CtaBlock"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import PageHeader from "@/components/PageHeader"
import ServiceItem from "@/components/ServiceItem"

import availableService from "@/shared/availableService"

const Service: NextPage = () => {
  return (
    <div className="min-h-screen text-lg tracking-wider bg-gray-100">

      <Header current="/service" />
      <PageHeader title="業務内容" />
      <Breadcrumb breadcrumb={[{ href: "", title: "業務内容" }]} />

      <main className="relative py-4 px-4 md:px-14">
        {/* site-container */}
        <div className="relative px-4 pt-16 mx-auto w-full max-w-6xl">
          <ul>
            {availableService.map((item, i) => (
              <CheckListItem key={i} name={item.title} />
            ))}
          </ul>

          <p className="my-8">当事務所の主な取り扱い調査内容です。</p>

          {availableService.map((item, i) => (
            <ServiceItem key={i} title={item.title} src={item.src} />
          ))}
          <CtaBlock />
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Service
