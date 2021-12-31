type CoverImageProps = {
  className: string
}
const CoverImage = ({ className }: CoverImageProps) => {
  return (
    <div className={`my-16 mx-[calc(51%-50vw)] min-h-[300px] bg-fixed bg-white bg-cover opacity-50 ${className}`}></div>
  )
}

export default CoverImage
