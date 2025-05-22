type H2Props = {
  title: string
}
const H2title = ({ title }: H2Props) => {
  return (
    <h2 class="py-4 px-4 my-8 w-full text-xl font-bold text-white bg-blue-900 rounded md:py-6 md:px-8 md:text-3xl">
      {title}
    </h2>
  )
}

export default H2title
