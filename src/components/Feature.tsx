import Image, { StaticImageData } from "next/image"

type FeatureProps = {
  title: string
  src: StaticImageData
  reverse: boolean
  detail: string
}
const Feature = ({ title, src, reverse, detail }: FeatureProps) => {
  return (
    <div className={`md:flex mb-8 ${reverse ? "flex-row-reverse" : ""}`}>
      <div className="pr-8 pb-4 md:pb-0 md:w-1/2">
        <Image src={src} alt="" width={800} height={600} />
      </div>

      <div className="pr-8 leading-8 md:w-1/2">
        <h3 className="pb-4 text-3xl font-bold text-blue-900">{title}</h3>
        <p>{detail}</p>
      </div>
    </div>
  )
}

export default Feature
