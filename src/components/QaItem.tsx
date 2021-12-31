type QaItemProps = {
  title: string
}
const QaItem = ({ title }: QaItemProps) => {
  return (
    <>
      <div className="relative py-4 pr-4 pl-12 mt-8 font-bold border-b border-gray-200">
        <p
          className="before:absolute before:top-3.5 before:left-0 before:w-8 before:h-8 before:text-xl before:text-center
       before:text-white before:content-['Q'] before:bg-red-600"
        >
          {title}
        </p>
      </div>
      <div className="relative pt-4 pr-4 pb-12 pl-12 border-b border-gray-300">
        <p
          className="before:absolute before:top-5 before:left-0 before:w-8 before:h-8 before:text-xl before:text-center
       before:text-white before:content-['A'] before:bg-blue-600 text-gray-600"
        >
          この文章はダミーテキストです。吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。吾輩はここで始めて人間というものを見た。
        </p>
      </div>
    </>
  )
}

export default QaItem
