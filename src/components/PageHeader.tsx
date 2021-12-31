type PageHeaderProps = {
  title: string
}
const PageHeader = ({ title }: PageHeaderProps) => {
  return (
    <div className="flex items-center px-8 w-full min-h-[7rem] text-3xl font-bold text-white bg-blue-900 md:min-h-[8rem]">
      <h1 className="w-full tracking-widest text-center">{title}</h1>
    </div>
  )
}

export default PageHeader
