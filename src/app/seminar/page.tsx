import type { NextPage } from "next"
import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import Breadcrumb from "@/components/Breadcrumb"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import PageHeader from "@/components/PageHeader"

import seminarInformation from "@/shared/seminarInformation"

type SeminarItemProps = {
  title: string
  date: string
  src: StaticImageData
  href: string
  detail: string
}
const SeminarItem = ({ title, date, src, href, detail }: SeminarItemProps) => {
  return (
    <div className="py-8 space-x-8 border-b border-gray-200 md:flex">
      <div className="md:w-1/3">
        <div className="leading-[0px] border-2 border-gray-200">
          <Image src={src} alt={title} width={800} height={600} />
        </div>
      </div>
      <div className="relative md:w-2/3">
        <h5 className="py-2 text-xl font-bold border-b border-gray-200">
          <Link href={href}>{title}</Link>
        </h5>

        <div className="text-xs">{date}</div>

        <p className="py-4 text-gray-700 md:mb-12">{detail}</p>

        <Link href={href}>
          <button className="right-0 bottom-0 py-2 px-8 text-white bg-blue-900 rounded md:absolute">続きを読む</button>
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
          {[...seminarInformation].reverse().map((item, i) => (
            <SeminarItem
              key={i}
              title={item.title}
              date={item.postDate}
              src={item.src}
              href={item.href}
              detail={item.detail}
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Seminar
