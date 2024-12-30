"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

const menuIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  )
}

const closeIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}

type HeaderProps = {
  current: string
}
const Header = ({ current }: HeaderProps) => {
  // ページ最上部判定。最上部ならtrue、少しでもスクロールすればfalse
  const [scroll, setScroll] = useState(false)
  const [open, setOpen] = useState(false)
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
    // スクロールしたらnavを最上部固定する。ただしモバイルの場合は固定しない。
    <header id="top" className={`z-10 w-full ${!open && scroll ? "fixed top-0 left-0 bg-white" : ""}`}>
      {/* site-header-container */}
      <div className="px-4 mx-auto w-full max-w-6xl md:flex">
        <h1 className={`text-2xl whitespace-nowrap md:my-4 md:mr-8 md:w-full md:text-left ${scroll ? "hidden" : ""}`}>
          <div className="max-h-16 flex justify-center">
            <Link href="/">
              <Image src="/img/tanteilogo.png" alt="文月探偵事務所" width={250} height={60} />
            </Link>
          </div>
        </h1>

        <nav
          className={`hidden sticky top-0 justify-end items-center md:flex md:w-min ${
            scroll ? "md:block md:mx-auto" : ""
          }`}
        >
          <ul className={`flex relative mx-auto tracking-wider ${scroll ? "justify-center" : ""}`}>
            {menuArr.map((item, i) => (
              <li key={i} className="relative text-sm text-center">
                <div
                  className={`before:absolute before:bottom-0 before:left-0 before:w-0 hover:before:w-full before:border-b before:border-black before:transition-all before:duration-500 ${
                    current === item.href ? "before:w-full" : ""
                  }`}
                >
                  <Link
                    href={item.href}
                    className="flex overflow-hidden relative flex-wrap justify-center items-center p-4 text-center md:py-3.5 md:px-2 lg:px-6"
                  >
                    <strong className="block w-full text-sm whitespace-nowrap">{item.title}</strong>
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {/* 右下にtopに戻るボタン */}
      <Link
        href="#top"
        className={`${
          scroll ? "opacity-100" : "opacity-0"
        } transition-opacity fixed right-[2%] bottom-[3%] z-50 w-10 h-10 bg-gray-700 text-gray-300 ring-1 ring-offset-1 ring-gray-700 flex justify-center items-center`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </Link>
      {/* モバイルの場合は左上にメニューアイコン固定 */}
      <button
        onClick={() => setOpen((open) => !open)}
        className="flex fixed top-1.5 left-1.5 z-20 justify-center items-center w-9 h-9 bg-white border border-black md:hidden"
      >
        {open ? closeIcon() : menuIcon()}
      </button>
      {/* メニュー */}
      <div
        className={`fixed bg-white z-10 w-full h-full py-12 px-2.5 transition-all duration-500 ${
          open ? "top-0" : "top-[-2000px]"
        }`}
      >
        <nav className="mb-1.5">
          <ul className="text-sm border-t border-gray-300">
            {menuArr.map((item, i) => (
              <li key={i} className="">
                <Link href={item.href} className="block py-3 px-2 w-full border-b border-gray-300">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
