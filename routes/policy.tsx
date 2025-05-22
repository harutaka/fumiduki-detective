import Breadcrumb from "../components/Breadcrumb.tsx"
import Footer from "../components/Footer.tsx"
import H2title from "../components/H2title.tsx"
import PageHeader from "../components/PageHeader.tsx"
import Header from "../islands/Header.tsx"

const Policy = () => {
  return (
    <div class="min-h-screen text-lg tracking-wider bg-gray-100">
      <Header current="/policy" />
      <PageHeader title="プライバシーポリシー" />
      <Breadcrumb breadcrumb={[{ href: "", title: "プライバシーポリシー" }]} />

      <main class="relative py-4 px-4 md:px-14">
        {/* site-container */}
        <div class="relative px-4 pt-12 mx-auto w-full max-w-6xl">
          <p class="mb-16">
            文月探偵事務所（以下、当事務所）では、お客さまに安心してご利用いただくために、
            「個人情報の保護に関する法律」および個人情報保護に関する関係諸法令を遵守すると共に、
            個人情報がどのような方針で収集・利用・管理されるかについて下記の通り定めます。
          </p>

          <H2title title="個人情報の定義" />
          <p class="mb-16">
            本プライバシーポリシーにおける個人情報とは、 個人情報の保護に関する法律に規定される個人情報を指します。
          </p>

          <H2title title="利用目的" />
          <p class="mb-4">当事務所は取得した個人情報を以下の目的で利用します。</p>
          <ul class="list-disc ml-4">
            <li>調査業務およびその付随業務</li>
            <li>当事務所サービスに関するお問い合わせなどへの対応</li>
          </ul>

          <H2title title="個人情報の提供" />
          <p class="mb-16">
            当事務所は、法令で定める場合を除き、本人の同意に基づき取得した個人情報を、
            本人の事前の同意なく第三者に提供することはありません。
            なお、本人の求めによる個人情報の開示、訂正、追加若しくは削除又は利用目的の通知については、
            法令に従いこれを行うとともに、ご意見、ご相談に関して適切に対応します。
          </p>

          <H2title title="個人情報の廃棄" />
          <p class="mb-16">
            当事務所は、個人情報の利用目的に照らしその必要性が失われたときは、
            個人情報を消去又は廃棄するものとし、当該消去及び廃棄は、外部流失等の危険を防止するために
            必要かつ適切な方法により、業務の遂行上必要な限りにおいて行います。
          </p>

          <H2title title="プライバシーポリシーの変更について" />
          <p class="mb-8">
            当事務所は、必要に応じて、本プライバシーポリシーを変更いたします。
            なお、本プライバシーポリシーを変更する場合は、その内容を当社のウェブサイト上で表示いたします。
          </p>

          <div class="text-right">
            <p class="font-bold">2021年7月27日</p>
            <p class="font-bold">制定責任者 横嶋秀典</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Policy
