import Breadcrumb from "../components/Breadcrumb.tsx"
import CheckListItem from "../components/CheckListItem.tsx"
import CtaBlock from "../components/CtaBlock.tsx"
import FeeItem from "../components/FeeItem.tsx"
import Footer from "../components/Footer.tsx"
import PageHeader from "../components/PageHeader.tsx"
import Header from "../islands/Header.tsx"

import availableServices from "../shared/availableServices.ts"

const Fee = () => {
  return (
    <div class="min-h-screen text-lg tracking-wider bg-gray-100">
      <Header current="/fee" />
      <PageHeader title="料金" />
      <Breadcrumb breadcrumb={[{ href: "", title: "料金" }]} />

      <main class="relative py-4 px-4 md:px-14">
        {/* site-container */}
        <div class="relative px-4 pt-16 mx-auto mb-20 w-full max-w-6xl">
          <ul>
            {availableServices.map((item, i) => <CheckListItem key={i} name={item.title} />)}
          </ul>

          <p class="my-8">当事務所取扱い業務の料金です。</p>

          {availableServices.map((item, i) => <FeeItem key={i} title={item.title} fee={item.fee} />)}

          <p class="font-bold">共通事項</p>
          <ul class="list-disc list-inside">
            <li>初回相談は無料</li>
            <li>交通費・宿泊費が必要な場合は実費請求</li>
            <li>機材使用料は別途</li>
            <li>調査内容により料金が変動する場合があります</li>
            <li>お見積りは無料で行います</li>
          </ul>

          <p class="mt-8">
            ※ 上記は標準的な料金です。具体的な料金は、調査の難易度や期間によって変動する場合があります。
            詳細は個別にご相談ください。
          </p>

          <CtaBlock />
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Fee
