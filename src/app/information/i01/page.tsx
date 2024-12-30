import type { NextPage } from "next"
import Header from "@/components/Header"
import PageHeader from "@/components/PageHeader"
import Breadcrumb from "@/components/Breadcrumb"
import Footer from "@/components/Footer"
import CtaBlock from "@/components/CtaBlock"

import topicInformation from "@/shared/topicInformation"

const targetTopic = topicInformation[1]

const I01: NextPage = () => {
  return (
    <div className="min-h-screen text-lg tracking-wider bg-gray-100">
      <Header current="/information/xxx" />
      <PageHeader title="インフォメーション" />
      <Breadcrumb breadcrumb={[{ href: "", title: targetTopic.title }]} />

      <main className="relative py-4 px-4 md:px-14">
        {/* site-container */}
        <div className="relative px-4 pt-12 mx-auto w-full max-w-6xl">
          <div className="mb-2 text-3xl font-bold">{targetTopic.title}</div>
          <div className="flex items-center text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            {targetTopic.postDate}
          </div>

          <p className="my-8">{targetTopic.detail}</p>

          <CtaBlock />
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default I01
