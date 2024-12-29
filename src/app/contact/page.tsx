import type { NextPage } from "next"
import Breadcrumb from "@/components/Breadcrumb"
import Footer from "@/components/Footer"
import H2title from "@/components/H2title"
import Header from "@/components/Header"
import PageHeader from "@/components/PageHeader"

const Contact: NextPage = () => {
  return (
    <div className="min-h-screen text-lg tracking-wider bg-gray-100">

      <Header current="/contact" />
      <PageHeader title="お問い合わせ" />
      <Breadcrumb breadcrumb={[{ href: "", title: "お問い合わせ" }]} />

      <main className="relative py-4 px-4 md:px-14">
        {/* site-container */}
        <div className="relative px-4 pt-12 mx-auto w-full max-w-6xl">
          <p className="mb-16">お問い合わせはお電話、またはこちらのメールフォームにてお願いします。</p>
          <H2title title="お電話" />
          <p className="my-4">TEL：000-000-0000</p>
          <p className="my-4">受付時間：9:00-20:00（土・日・祝日除く）</p>

          <H2title title="メールフォーム" />
          <div className="mx-auto">
            <form>
              <div className="mb-8">
                <label htmlFor="name" className="">
                  氏名
                </label>
                <input id="name" type="text" className="py-2 px-4 mt-1 w-full rounded border border-gray-300" />
              </div>

              <div className="mb-8">
                <label htmlFor="email" className="">
                  メールアドレス
                </label>
                <input id="email" type="email" className="py-2 px-4 mt-1 w-full rounded border border-gray-300" />
              </div>

              <div className="mb-8">
                <label htmlFor="title" className="">
                  題名
                </label>
                <input id="title" type="text" className="py-2 px-4 mt-1 w-full rounded border border-gray-300" />
              </div>

              <div className="mb-8">
                <label htmlFor="title" className="">
                  メッセージ本文 (任意)
                </label>
                <textarea
                  id="message"
                  className="py-2 px-4 mt-1 w-full rounded border border-gray-300"
                  rows={5}
                ></textarea>
              </div>

              <button className="block py-2 px-8 text-white bg-blue-900 rounded">送信</button>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Contact
