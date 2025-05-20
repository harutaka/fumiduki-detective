import { JSX } from "preact"

type IconProps = JSX.HTMLAttributes<SVGSVGElement>

export const MenuIcon = (props: IconProps) => {
  const combinedClass = `w-6 h-6 ${props.class}`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" class={combinedClass} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  )
}

export const CloseIcon = (props: IconProps) => {
  const combinedClass = `w-6 h-6 ${props.class}`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" class={combinedClass} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}
