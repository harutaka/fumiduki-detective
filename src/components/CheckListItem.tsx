import Image from "next/image"
import Link from "next/link"

type CheckListItemProps = {
  name: string
}
const CheckListItem = ({ name }: CheckListItemProps) => {
  return (
    <li className="flex items-center my-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="inline-block mr-2 w-5 h-5 text-orange-500"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
          clipRule="evenodd"
        />
      </svg>
      {name}
    </li>
  )
}

export default CheckListItem
