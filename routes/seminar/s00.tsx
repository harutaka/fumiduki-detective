import SeminarPage from "../../components/SeminarPage.tsx"

import seminarInformation from "../../shared/seminarInformation.ts"

const targetSeminar = seminarInformation[0]

const S00 = () => {
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
