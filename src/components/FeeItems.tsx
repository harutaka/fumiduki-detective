import H2title from "@/components/H2title"

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
    <div className="my-16">
      <H2title title={title} />

      <table className="w-full text-left border border-gray-300 table-fixed">
        <tbody>
          {fee.map((item, i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-gray-200" : ""}>
              <td className={tdAttrClass}>{item.attr}</td>
              <td className={tdDescClass}>{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default FeeItem
