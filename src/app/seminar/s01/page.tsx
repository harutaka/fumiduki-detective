import type { NextPage } from "next"
import SeminarPage from "@/components/SeminarPage"

const S01: NextPage = () => {
  return (
    <SeminarPage title="浮気の予防セミナー" postDate="2021年10月27日" openDate="2021年11月27日" isFinished={false} />
  )
}

export default S01
