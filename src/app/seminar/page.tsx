import type { NextPage } from "next"
import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import Breadcrumb from "@/components/Breadcrumb"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import PageHeader from "@/components/PageHeader"

import seminar01Img from "@/../public/img/hide02.jpg"
import seminar02Img from "@/../public/img/rina06.jpg"
import seminar03Img from "@/../public/img/yusuke02.jpg"


type SeminarItemProps = {
  title: string
  date: string
  src: StaticImageData
  href: string
}
const SeminarItem = ({ title, date, src, href }: SeminarItemProps) => {
  return (
    <div className="py-8 space-x-8 border-b border-gray-200 md:flex">
      <div className="md:w-1/3">
        <div className="leading-[0px] border-2 border-gray-200">
          <Image src={src} alt={title} width={800} height={600} />
        </div>
      </div>
      <div className="relative md:w-2/3">
        <h5 className="py-2 text-xl font-bold border-b border-gray-200">
          <Link href={href}>
            <a>{title}</a>
          </Link>
        </h5>

        <div className="text-xs">{date}</div>

        <p className="py-4 text-gray-700 md:mb-12">
          この文章はダミーテキストです。吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。
        </p>

        <Link href={href}>
          <a>
            <button className="right-0 bottom-0 py-2 px-8 text-white bg-blue-900 rounded md:absolute">
              続きを読む
            </button>
          </a>
        </Link>
      </div>
    </div>
  )
}

const Seminar: NextPage = () => {
  return (
    <div className="min-h-screen text-lg tracking-wider bg-gray-100">

      <Header current="/seminar" />
      <PageHeader title="セミナー情報" />
      <Breadcrumb breadcrumb={[{ href: "", title: "セミナー情報" }]} />

      <main className="relative py-4 px-4 md:px-14">
        {/* site-container */}
        <div className="relative px-4 pt-12 mx-auto w-full max-w-6xl">
          <div className="border-b border-gray-200"></div>
          <SeminarItem title="浮気の予防セミナー" date="2021年10月27日" href="/seminar/s01" src={seminar01Img} />
          <SeminarItem title="個人でできる防犯対策" date="2021年9月19日" href="/seminar/s02" src={seminar02Img} />
          <SeminarItem
            title="探偵入門セミナー（終了）"
            date="2021年8月11日"
            href="/seminar/s03"
            src={seminar03Img}
          />
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Seminar
