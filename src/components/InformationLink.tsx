import Link from "next/link"

type InfomationLinkProps = {
  href: string
  title: string
}
const InfomationLink = ({ href, title }: InfomationLinkProps) => {
  return (
    <div className="py-4 w-full border-b border-gray-300">
      <Link href={href} className="hover:underline">
        {title}
      </Link>
    </div>
  )
}

export default InfomationLink
