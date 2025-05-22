import Breadcrumb from "../components/Breadcrumb.tsx"
import Footer from "../components/Footer.tsx"
import PageHeader from "../components/PageHeader.tsx"
import Header from "../islands/Header.tsx"

import seminarInformation from "../shared/seminarInformation.ts"

type SeminarItemProps = {
  title: string
  date: string
  src: string
  href: string
  detail: string
}
const SeminarItem = ({ title, date, src, href, detail }: SeminarItemProps) => {
  return (
    <div class="py-8 space-x-8 border-b border-gray-200 md:flex">
      <div class="md:w-1/3">
        <div class="leading-[0px] border-2 border-gray-200">
          <img src={src} alt={title} width="800" height="600" />
        </div>
      </div>
      <div class="relative md:w-2/3">
        <h5 class="py-2 text-xl font-bold border-b border-gray-200">
          <a href={href}>{title}</a>
        </h5>

        <div class="text-xs">{date}</div>

        <p class="py-4 text-gray-700 md:mb-12">{detail}</p>

        <a href={href}>
          <button
            type="button"
            class="right-0 bottom-0 py-2 px-8 text-white bg-blue-900 rounded md:absolute cursor-pointer"
          >
            続きを読む
          </button>
        </a>
      </div>
    </div>
  )
}

const Seminar = () => {
  return (
    <div class="min-h-screen text-lg tracking-wider bg-gray-100">
      <Header current="/seminar" />
      <PageHeader title="セミナー情報" />
      <Breadcrumb breadcrumb={[{ href: "", title: "セミナー情報" }]} />

      <main class="relative py-4 px-4 md:px-14">
        {/* site-container */}
        <div class="relative px-4 pt-12 mx-auto w-full max-w-6xl">
          <div class="border-b border-gray-200"></div>
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
