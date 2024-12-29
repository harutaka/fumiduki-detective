import Link from "next/link"

type BreadcrumbItem = {
  title: string
  href: string
}
type BreadcrumbProps = {
  breadcrumb: BreadcrumbItem[]
}
const Breadcrumb = ({ breadcrumb }: BreadcrumbProps) => {
  const breadcrumbArr = [{ title: "トップ", href: "/" }, ...breadcrumb]
  return (
    <div className={`text-xs border-b border-gray-300`}>
      <div className="flex items-center px-4 mx-auto w-full max-w-6xl">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="inline-block mr-2 w-4 h-4 text-gray-700"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
        </svg>
        <ul className="inline-block py-1.5">
          {breadcrumbArr.map((item, i) => (
            <li key={i} className={`inline`}>
              {item.href ? (
                <Link href={item.href}>
                  <a className="after:mx-2 after:content-['/']">{item.title}</a>
                </Link>
              ) : (
                <span>{item.title}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Breadcrumb
