import Image from "next/image"
import H2title from "@/components/H2title"

type ServiceItemProps = {
  title: string
  src: string
}
const ServiceItem = ({ title, src }: ServiceItemProps) => {
  return (
    <>
      <H2title title={title} />
      <div className="my-4 text-center">
        <Image src={src} alt={title} width={800} height={600} />
      </div>

      <p className="mb-16">
        この文章はダミーテキストです。吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。吾輩はここで始めて人間というものを見た。
        <br />
        <br />
        この文章はダミーテキストです。
        吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。吾輩はここで始めて人間というものを見た。
        <br />
        <br />
        この文章はダミーテキストです。この文章はダミーテキストです。
        この文章はダミーテキストです。吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。吾輩はここで始めて人間というものを見た。
      </p>
    </>
  )
}

export default ServiceItem
