type InfomationLinkProps = {
  href: string
  title: string
}
const InfomationLink = ({ href, title }: InfomationLinkProps) => {
  return (
    <div class="py-4 w-full border-b border-gray-300">
      <a href={href} class="hover:underline">
        {title}
      </a>
    </div>
  )
}

export default InfomationLink