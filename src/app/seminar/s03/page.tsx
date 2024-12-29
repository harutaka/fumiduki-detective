import type { NextPage } from "next"
import SeminarPage from "@/components/SeminarPage"

const S03: NextPage = () => {
  return (
    <SeminarPage title="探偵入門セミナー（終了）" postDate="2021年8月11日" openDate="2021年9月11日" isFinished={true} />
  )
}

export default S03
