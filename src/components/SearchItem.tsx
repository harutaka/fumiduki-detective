import Image, { StaticImageData } from "next/image"
import Link from "next/link"

type SearchItemProps = {
  title: string
  src: StaticImageData
  detail: string
}
const SearchItem = ({ title, src, detail }: SearchItemProps) => {
  return (
    <div className="w-full text-center">
      <Image src={src} alt="" width={800} height={600} />
      <h3 className="py-2 mt-8 w-full text-2xl font-bold text-center bg-gray-200">{title}</h3>
      <p className="my-4 text-left">{detail}</p>
      <Link href="/service">
        <button className="py-2 mb-8 w-2/3 text-amber-600 rounded border border-amber-600 hover:ring-2 hover:ring-blue-100">
          詳細はこちら
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="inline-block ml-2 w-6 h-6"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </Link>
    </div>
  )
}

export default SearchItem
