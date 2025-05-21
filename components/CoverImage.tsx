import { JSX } from "preact"

const CoverImage = (props: JSX.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div class={`md:my-16 md:mx-[calc(51%-50vw)] md:min-h-[300px] md:bg-fixed bg-white bg-cover opacity-50 ${props.class}`}></div>
  )
}

export default CoverImage