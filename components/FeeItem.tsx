import H2title from "../components/H2title.tsx"

type FeeItemProps = {
  title: string
  fee: {
    attr: string
    value: string
  }[]
}
const FeeItem = ({ title, fee }: FeeItemProps) => {
  const tdAttrClass = "py-3 px-4 font-bold"
  const tdDescClass = "py-3 px-4 text-sm"

  return (
    <div class="my-16">
      <H2title title={title} />

      <table class="w-full text-left border border-gray-300 table-fixed">
        <tbody>
          {fee.map((item, i) => (
            <tr key={i} class={i % 2 === 0 ? "bg-gray-200" : ""}>
              <td class={tdAttrClass}>{item.attr}</td>
              <td class={tdDescClass}>{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default FeeItem
