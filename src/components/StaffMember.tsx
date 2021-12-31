import Image from "next/image"
import Link from "next/link"

type StaffMemberProps = {
  name: string
  src: string
  role: string
}
const StaffMember = ({ name, src, role }: StaffMemberProps) => {
  return (
    <div className="flex my-8 space-x-12">
      <div className="w-1/3">
        <div className="border-4 border-gray-200">
          <Image src={src} alt={name} width={600} height={600} />
        </div>
      </div>

      <div className="w-2/3">
        <h3 className="font-serif text-3xl font-bold text-blue-800 md:text-5xl">{name}</h3>
        <p className="my-2 text-sm">{role}</p>

        <hr className="my-4 border-gray-300" />

        <p className="">
          この文章はダミーテキストです。吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。吾輩はここで始めて人間というものを見た。
        </p>
      </div>
    </div>
  )
}

export default StaffMember
