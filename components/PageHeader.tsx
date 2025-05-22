type PageHeaderProps = {
  title: string
}
const PageHeader = ({ title }: PageHeaderProps) => {
  return (
    <div class="flex items-center px-8 w-full min-h-28 text-3xl font-bold text-white bg-blue-900 md:min-h-32">
      <h1 class="w-full tracking-widest text-center">{title}</h1>
    </div>
  )
}

export default PageHeader
