import Image from "next/image"
import Link from "next/link"

type FeatureProps = {
  title: string
  src: string
  reverse: boolean
}
const Feature = ({ title, src, reverse }: FeatureProps) => {
  return (
    <div className={`md:flex mb-8 ${reverse ? "flex-row-reverse" : ""}`}>
      <div className="pr-8 pb-4 md:pb-0 md:w-1/2">
        <Image src={src} alt="" width={800} height={600} />
      </div>

      <div className="pr-8 leading-8 md:w-1/2">
        <h3 className="pb-4 text-3xl font-bold text-blue-900">{title}</h3>
        <p>
          この文章はダミーテキストです。吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。吾輩はここで始めて人間というものを見た。
          <br />
          <br />
          この文章はダミーテキストです。
          吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。吾輩はここで始めて人間というものを見た。
          この文章はダミーテキストです。この文章はダミーテキストです。
        </p>
      </div>
    </div>
  )
}

export default Feature
