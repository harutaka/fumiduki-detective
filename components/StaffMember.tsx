type StaffMemberProps = {
  name: string
  src: string
  role: string
  detail: string
}
const StaffMember = ({ name, src, role, detail }: StaffMemberProps) => {
  return (
    <div className="my-8 md:flex md:space-x-12">
      <div className="md:w-1/3">
        <div className="leading-[0px] border-4 border-gray-200">
          <img src={src} alt={name} width="600" height="600" />
        </div>
      </div>

      <div className="md:w-2/3">
        <h3 className="pt-4 font-serif text-3xl font-bold text-blue-800 md:pt-0 md:text-5xl">{name}</h3>
        <p className="my-2 text-sm">{role}</p>

        <hr className="my-4 border-gray-300" />

        <p className="">{detail}</p>
      </div>
    </div>
  )
}

export default StaffMember
