import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/Header"
import Slider from "@/components/Slider"

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>文月探偵事務所 - 浮気調査や素行調査等</title>
        <meta name="description" content="浮気調査や素行調査等" />
        <meta property="og:title" content="文月探偵事務所" />
        <meta property="og:description" content="浮気調査や素行調査等" />
        <meta name="twitter:card" content="summary" />
        <link rel="icon" href="/logo-32x32.png" sizes="32x32" />
        <link rel="icon" href="/logo-192x192.png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/logo-180x180.png" />
      </Head>
      <Header current="/" />
      <Slider />
      1<br />
      2<br />
      3<br />
      4<br />
      5<br />
      <div className="h-[1500px]"></div>
    </div>
  )
}

export default Home
