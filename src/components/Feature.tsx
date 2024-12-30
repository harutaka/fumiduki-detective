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
      <div className="pr-0 pb-4 md:pr-8 md:pb-0 md:w-1/2">
        <Image src={src} alt="" width={800} height={600} />
      </div>

      <div className="pr-0 leading-8 md:pr-8 md:w-1/2">
        <h3 className="pb-4 text-3xl font-bold text-blue-900">{title}</h3>
        <p>{detail}</p>
      </div>
    </div>
  )
}

export default Feature
