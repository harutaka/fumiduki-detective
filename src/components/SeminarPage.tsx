import CtaBlock from "./CtaBlock"
import Breadcrumb from "@/components/Breadcrumb"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import PageHeader from "@/components/PageHeader"

type SeminarTableProps = {
  openDate: string
}
const SeminarTable = ({ openDate }: SeminarTableProps) => {
  const tdAttrClass = "py-3 px-4 font-bold"
  const tdDescClass = "py-3 px-4"

  return (
    <table className="w-full text-base text-left border border-gray-300 table-auto md:text-lg">
      <tr className="bg-gray-200">
        <td className={tdAttrClass}>会場名</td>
        <td className={tdDescClass}>〇〇ビル3F 〇〇会議室</td>
      </tr>
      <tr className="">
        <td className={tdAttrClass}>開催場所</td>
        <td className={tdDescClass}>
          〒000-0000
          <br />
          大阪府大阪市〇〇〇〇1-1-1
        </td>
      </tr>
      <tr className="bg-gray-200">
        <td className={tdAttrClass}>開催日時</td>
        <td className={tdDescClass}>{openDate} 18:00-20:00</td>
      </tr>
      <tr className="">
        <td className={tdAttrClass}>受講料</td>
        <td className={tdDescClass}>無料</td>
      </tr>
      <tr className="bg-gray-200">
        <td className={tdAttrClass}>お申し込み番号</td>
        <td className={tdDescClass}>000-000-0000</td>
      </tr>
      <tr className="">
        <td className={tdAttrClass}>海上アクセス</td>
        <td className={tdDescClass}>〇〇線〇〇駅より徒歩8分</td>
      </tr>
      <tr className="bg-gray-200">
        <td className={tdAttrClass}>駐車場</td>
        <td className={tdDescClass}>10台まで駐車可</td>
      </tr>
    </table>
  )
}

type SeminarPageProps = {
  title: string
  postDate: string
  openDate: string
  isFinished: boolean
}
const SeminarPage = ({ title, postDate, openDate, isFinished }: SeminarPageProps) => {
  return (
    <div className="min-h-screen text-lg tracking-wider bg-gray-100">
      <Header current="/seminar/xxx" />
      <PageHeader title="セミナー情報" />
      <Breadcrumb
        breadcrumb={[
          { href: "/seminar", title: "セミナー情報" },
          { href: "", title: title },
        ]}
      />

      <main className="relative py-4 px-4 md:px-14">
        {/* site-container */}
        <div className="relative px-4 pt-12 mx-auto w-full max-w-6xl">
          <div className="mb-2 text-3xl font-bold">{title}</div>
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
            {postDate}
          </div>

          {isFinished ? (
            <div className="py-2 my-8 text-center text-red-500">
              <p className="font-bold">このセミナーは終了しました。</p>
              <p>{openDate}開催</p>
            </div>
          ) : (
            ""
          )}

          <p className="my-8">
            この文章はダミーテキストです。吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。
          </p>

          {isFinished ? "" : <SeminarTable openDate={openDate} />}

          <CtaBlock />
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default SeminarPage
