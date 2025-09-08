type CoverImageProps = {
  className: string
}
const CoverImage = ({ className }: CoverImageProps) => {
  return (
    <div className={`md:my-16 md:mx-[calc(51%-50vw)] md:min-h-[300px] md:bg-fixed bg-white bg-cover opacity-50 ${className}`}></div>
  )
}

export default CoverImage
