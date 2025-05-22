import CtaBlock from "./CtaBlock.tsx"
import Breadcrumb from "../components/Breadcrumb.tsx"
import Footer from "../components/Footer.tsx"
import Header from "../islands/Header.tsx"
import PageHeader from "../components/PageHeader.tsx"

type SeminarTableProps = {
  openDate: string
}
const SeminarTable = ({ openDate }: SeminarTableProps) => {
  const tdAttrClass = "py-3 px-4 font-bold"
  const tdDescClass = "py-3 px-4"

  return (
    <table class="w-full text-base text-left border border-gray-300 table-auto md:text-lg">
      <tbody>
        <tr class="bg-gray-200">
          <td class={tdAttrClass}>会場名</td>
          <td class={tdDescClass}>〇〇ビル3F 〇〇会議室</td>
        </tr>
        <tr class="">
          <td class={tdAttrClass}>開催場所</td>
          <td class={tdDescClass}>
            〒000-0000
            <br />
            大阪府大阪市〇〇〇〇1-1-1
          </td>
        </tr>
        <tr class="bg-gray-200">
          <td class={tdAttrClass}>開催日時</td>
          <td class={tdDescClass}>{openDate} 18:00-20:00</td>
        </tr>
        <tr class="">
          <td class={tdAttrClass}>受講料</td>
          <td class={tdDescClass}>無料</td>
        </tr>
        <tr class="bg-gray-200">
          <td class={tdAttrClass}>お申し込み番号</td>
          <td class={tdDescClass}>000-000-0000</td>
        </tr>
        <tr class="">
          <td class={tdAttrClass}>アクセス</td>
          <td class={tdDescClass}>〇〇線〇〇駅より徒歩8分</td>
        </tr>
        <tr class="bg-gray-200">
          <td class={tdAttrClass}>駐車場</td>
          <td class={tdDescClass}>10台まで駐車可</td>
        </tr>
      </tbody>
    </table>
  )
}

type SeminarPageProps = {
  title: string
  postDate: string
  openDate: string
  isFinished: boolean
  detail: string
}
const SeminarPage = ({ title, postDate, openDate, isFinished, detail }: SeminarPageProps) => {
  return (
    <div class="min-h-screen text-lg tracking-wider bg-gray-100">
      <Header current="/seminar/xxx" />
      <PageHeader title="セミナー情報" />
      <Breadcrumb
        breadcrumb={[
          { href: "/seminar", title: "セミナー情報" },
          { href: "", title: title },
        ]}
      />

      <main class="relative py-4 px-4 md:px-14">
        {/* site-container */}
        <div class="relative px-4 pt-12 mx-auto w-full max-w-6xl">
          <div class="mb-2 text-3xl font-bold">{title}</div>
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
            {postDate}
          </div>

          {isFinished
            ? (
              <div class="py-2 my-8 text-center text-red-500">
                <p class="font-bold">このセミナーは終了しました。</p>
                <p>{openDate}開催</p>
              </div>
            )
            : (
              ""
            )}

          <p class="my-8">{detail}</p>

          {isFinished ? "" : <SeminarTable openDate={openDate} />}

          <CtaBlock />
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default SeminarPage
