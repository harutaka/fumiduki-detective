import H2title from "@/components/H2title"

type FeeItemProps = {
  title: string
}
const FeeItem = ({ title }: FeeItemProps) => {
  const tdAttrClass = "py-3 px-4 font-bold"
  const tdDescClass = "py-3 px-4 text-sm"

  return (
    <div className="my-16">
      <H2title title={title} />

      <table className="w-full text-left border border-gray-300 table-auto">
        <tr className="bg-gray-200">
          <td className={tdAttrClass}>項目名</td>
          <td className={tdDescClass}>これはダミーテキストです。</td>
        </tr>
        <tr className="">
          <td className={tdAttrClass}>項目名</td>
          <td className={tdDescClass}>これはダミーテキストです。</td>
        </tr>
        <tr className="bg-gray-200">
          <td className={tdAttrClass}>項目名</td>
          <td className={tdDescClass}>これはダミーテキストです。</td>
        </tr>
        <tr className="">
          <td className={tdAttrClass}>項目名</td>
          <td className={tdDescClass}>これはダミーテキストです。</td>
        </tr>
      </table>
    </div>
  )
}

export default FeeItem
