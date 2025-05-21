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

export const ChevronRightIcon = (props: IconProps) => {
  const combinedClass = `size-6 ${props.class}`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class={combinedClass}>
      <path
        fill-rule="evenodd"
        d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
        clip-rule="evenodd"
      />
    </svg>
  )
}

export const ChevronLeftIcon = (props: IconProps) => {
  const combinedClass = `size-6 ${props.class}`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class={combinedClass}>
      <path
        fill-rule="evenodd"
        d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z"
        clip-rule="evenodd"
      />
    </svg>
  )
}
