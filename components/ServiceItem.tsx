import H2title from "../components/H2title.tsx"

type ServiceItemProps = {
  title: string
  src: string
  detail: string
}
const ServiceItem = ({ title, src, detail }: ServiceItemProps) => {
  return (
    <>
      <H2title title={title} />
      <div class="my-4 flex justify-center">
        <img src={src} alt={title} width="800" height="600" />
      </div>

      <p class="mb-16">{detail}</p>
    </>
  )
}

export default ServiceItem
