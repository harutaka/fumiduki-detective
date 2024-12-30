import type { NextPage } from "next"
import SeminarPage from "@/components/SeminarPage"

import seminarInformation from "@/shared/seminarInformation"

const targetSeminar = seminarInformation[0]

const S00: NextPage = () => {
  return (
    <SeminarPage
      title={targetSeminar.title}
      postDate={targetSeminar.postDate}
      openDate={targetSeminar.openDate}
      isFinished={targetSeminar.isFinished}
      detail={targetSeminar.detail}
    />
  )
}

export default S00
