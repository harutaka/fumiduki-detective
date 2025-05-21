type QaItemProps = {
  title: string
  detail: string
}
const QaItem = ({ title, detail }: QaItemProps) => {
  return (
    <>
      <div class="relative py-4 pr-4 pl-12 mt-8 font-bold border-b border-gray-200">
        <p class="before:absolute before:top-3.5 before:left-0 before:w-8 before:h-8 before:text-xl before:text-center
       before:text-white before:content-['Q'] before:bg-red-600">
          {title}
        </p>
      </div>
      <div class="relative pt-4 pr-4 pb-12 pl-12 border-b border-gray-300">
        <p class="before:absolute before:top-5 before:left-0 before:w-8 before:h-8 before:text-xl before:text-center
       before:text-white before:content-['A'] before:bg-blue-600 text-gray-600">
          {detail}
        </p>
      </div>
    </>
  )
}

export default QaItem
