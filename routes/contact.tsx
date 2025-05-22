import Breadcrumb from "../components/Breadcrumb.tsx"
import Footer from "../components/Footer.tsx"
import H2title from "../components/H2title.tsx"
import Header from "../islands/Header.tsx"
import PageHeader from "../components/PageHeader.tsx"

const Contact = () => {
  return (
    <div class="min-h-screen text-lg tracking-wider bg-gray-100">
      <Header current="/contact" />
      <PageHeader title="お問い合わせ" />
      <Breadcrumb breadcrumb={[{ href: "", title: "お問い合わせ" }]} />

      <main class="relative py-4 px-4 md:px-14">
        {/* site-container */}
        <div class="relative px-4 pt-12 mx-auto w-full max-w-6xl">
          <p class="mb-16">お問い合わせはお電話、またはこちらのメールフォームにてお願いします。</p>
          <H2title title="お電話" />
          <p class="my-4">TEL：000-000-0000</p>
          <p class="my-4">受付時間：9:00-20:00（土・日・祝日除く）</p>

          <H2title title="メールフォーム" />
          <div class="mx-auto">
            <form>
              <div class="mb-8">
                <label htmlFor="name" class="">
                  氏名
                </label>
                <input id="name" type="text" class="py-2 px-4 mt-1 w-full rounded border border-gray-300" />
              </div>

              <div class="mb-8">
                <label htmlFor="email" class="">
                  メールアドレス
                </label>
                <input id="email" type="email" class="py-2 px-4 mt-1 w-full rounded border border-gray-300" />
              </div>

              <div class="mb-8">
                <label htmlFor="title" class="">
                  題名
                </label>
                <input id="title" type="text" class="py-2 px-4 mt-1 w-full rounded border border-gray-300" />
              </div>

              <div class="mb-8">
                <label htmlFor="title" class="">
                  メッセージ本文 (任意)
                </label>
                <textarea
                  id="message"
                  class="py-2 px-4 mt-1 w-full rounded border border-gray-300"
                  rows={5}
                ></textarea>
              </div>

              <button type="button" class="block py-2 px-8 text-white bg-blue-900 rounded">送信</button>
              <p>※ このフォームはサンプルです。実際には送信されません。</p>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Contact
