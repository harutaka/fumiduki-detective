import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

type HeaderProps = {
  current: string
}
const Header = ({ current }: HeaderProps) => {
  // ページ最上部判定。最上部ならtrue、少しでもスクロールすればfalse
  const [scroll, setScroll] = useState(false)
  const menuArr = [
    { href: "/", title: "トップ" },
    { href: "/service", title: "業務内容" },
    { href: "/fee", title: "料金" },
    { href: "/staff", title: "スタッフ紹介" },
    { href: "/seminar", title: "セミナー情報" },
    { href: "/contact", title: "お問い合わせ" },
  ]

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 1)
    })
  }, [])

  return (
    <header className={`z-10 bg-gray-100 w-full ${scroll ? "fixed top-0 left-0 bg-white" : ""}`}>
      {/* site-header-container */}
      <div className="px-4 mx-auto w-full max-w-6xl lg:flex">
        <h1 className={`text-2xl whitespace-nowrap lg:my-4 lg:mr-8 lg:w-full lg:text-left ${scroll ? "hidden" : ""}`}>
          <Link href="/">
            <a>
              <div className="max-h-16">
                <Image src="/img/tanteilogo.png" alt="文月探偵事務所" width={250} height={60} />
              </div>
            </a>
          </Link>
        </h1>

        <nav
          className={`sticky top-0 justify-end items-center lg:flex lg:w-min ${scroll ? "md:block md:mx-auto" : ""}`}
        >
          <ul className={`flex relative mx-auto tracking-wider ${scroll ? "justify-center" : ""}`}>
            {menuArr.map((item, i) => (
              <li key={i} className="relative text-sm text-center">
                <div
                  className={`before:absolute before:bottom-0 before:left-0 before:w-0 hover:before:w-full before:border-b before:border-black before:transition-all before:duration-500 ${
                    current === item.href ? "before:w-full" : ""
                  }`}
                >
                  <Link href={item.href}>
                    <a className="flex overflow-hidden relative flex-wrap justify-center items-center p-4 text-center lg:py-3.5 lg:px-6">
                      <strong className="block w-full text-sm whitespace-nowrap">{item.title}</strong>
                    </a>
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
