import Header from "../../islands/Header.tsx"
import Breadcrumb from "../../components/Breadcrumb.tsx"
import CtaBlock from "../../components/CtaBlock.tsx"
import Footer from "../../components/Footer.tsx"
import PageHeader from "../../components/PageHeader.tsx"

import topicInformation from "../../shared/topicInformation.ts"

const targetTopic = topicInformation[1]

const I01 = () => {
  return (
    <div class="min-h-screen text-lg tracking-wider bg-gray-100">
      <Header current="/information/xxx" />
      <PageHeader title="インフォメーション" />
      <Breadcrumb breadcrumb={[{ href: "", title: targetTopic.title }]} />

      <main class="relative py-4 px-4 md:px-14">
        {/* site-container */}
        <div class="relative px-4 pt-12 mx-auto w-full max-w-6xl">
          <div class="mb-2 text-3xl font-bold">{targetTopic.title}</div>
          <div class="flex items-center text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="mr-2 w-4 h-4"
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

          <p class="my-8">{targetTopic.detail}</p>

          <CtaBlock />
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default I01
