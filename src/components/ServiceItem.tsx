import Image, { StaticImageData } from "next/image"
import H2title from "@/components/H2title"

type ServiceItemProps = {
  title: string
  src: StaticImageData
  detail: string
}
const ServiceItem = ({ title, src, detail }: ServiceItemProps) => {
  return (
    <>
      <H2title title={title} />
      <div className="my-4 flex justify-center">
        <Image src={src} alt={title} width={800} height={600} />
      </div>

      <p className="mb-16">{detail}</p>
    </>
  )
}

export default ServiceItem
