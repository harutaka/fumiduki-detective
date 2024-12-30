import type { NextPage } from "next"
import CoverImage from "@/components/CoverImage"
import CtaBlock from "@/components/CtaBlock"
import Feature from "@/components/Feature"
import Footer from "@/components/Footer"
import H2title from "@/components/H2title"
import Header from "@/components/Header"
import InformationLink from "@/components/InformationLink"
import Office from "@/components/Office"
import QaItem from "@/components/QaItem"
import SearchItem from "@/components/SearchItem"
import Slider from "@/components/Slider"

import availableServices from "@/shared/availableServices"
import topicInformation from "@/shared/topicInformation"

import areaImg from "@/../public/img/area.jpg"
import kaikeiImg from "@/../public/img/kaikei.jpg"
import akusyuImg from "@/../public/img/akusyu.jpg"

const Home: NextPage = () => {
  return (
    <div className="min-h-screen text-lg tracking-wider bg-gray-100">
      <Header current="/" />
      <Slider />

      <main className="relative py-4 px-4 md:px-14">
        {/* site-container */}
        <div className="relative px-4 mx-auto w-full max-w-6xl">
          <section className="mt-8 mb-16 md:my-16">
            <p className="mb-4">
              当事務所は20年以上に渡り、浮気調査や素行調査などの調査サービスを提供し、信頼と実績を積み重ねてきました。問題やトラブルの解決に向け、全力でサポートいたします。
            </p>
          </section>

          <section className="my-16">
            <Feature
              title="地域密着・経験豊富な調査員"
              src={areaImg}
              reverse={false}
              detail="大阪を中心に20年以上の実績を持つ文月探偵事務所。
              地域の特性を熟知した経験豊富な調査員が、あなたの問題解決をサポートします。
              地元ならではの人脈と情報網を活かし、迅速かつ正確な調査を実現。
              プライバシーに配慮しながら、地域に根ざした信頼性の高いサービスを提供いたします。
              どんな些細な悩みでも、まずはお気軽にご相談ください。"
            />
            <Feature
              title="明瞭な見積り料金"
              src={kaikeiImg}
              reverse={true}
              detail="お客様の不安を解消するため、料金体系を明確にしています。
              初回相談は無料で、調査内容に応じた詳細な見積りを提示いたします。
              追加料金や隠れた費用はありません。
              また、お客様のご予算に合わせたプランのご提案も可能です。
              安心して依頼できる透明性の高い料金システムで、あなたの問題解決をサポートいたします。"
            />
            <Feature
              title="手厚いアフターフォローサービス"
              src={akusyuImg}
              reverse={false}
              detail="調査終了後も、お客様に寄り添い続けます。
              調査結果の詳細な説明はもちろん、今後の対応策についても丁寧にアドバイスいたします。
              必要に応じて、弁護士やカウンセラーなどの専門家もご紹介可能。
              また、定期的なフォローアップで、お客様の状況変化にも柔軟に対応。
              問題が完全に解決するまで、末永くサポートいたします。"
            />
          </section>

          <section className="my-16">
            <H2title title="インフォメーション" />
            {[...topicInformation].reverse().map((item, i) => (
              <InformationLink key={i} href={item.href} title={item.title} />
            ))}
          </section>

          <CoverImage className="bg-img-intermiddle01" />

          <section className="my-16">
            <H2title title="調査内容" />
            <div className="grid-cols-2 gap-8 md:grid">
              {availableServices.map((item, i) => (
                <SearchItem key={i} title={item.title} src={item.src} detail={item.detail} />
              ))}
            </div>
          </section>

          <CoverImage className="bg-img-intermiddle02" />

          <section className="my-16">
            <H2title title="よくあるご質問" />
            <QaItem
              title="相談は無料ですか？"
              detail="はい、初回相談は完全無料です。お客様の状況をじっくりお伺いし、最適な調査プランをご提案いたします。相談後の依頼は自由ですので、お気軽にご相談ください。"
            />
            <QaItem
              title="匿名での相談はできますか？"
              detail="はい、匿名でのご相談も可能です。お客様のプライバシー保護を最優先に考えております。ただし、実際の調査依頼の際には本人確認が必要となりますので、ご了承ください。"
            />
            <QaItem
              title="依頼する時に必要なものはありますか？"
              detail="調査対象者の写真や基本情報（氏名、年齢、住所など）をご用意ください。また、調査の目的や背景情報もお聞かせいただけると、より効果的な調査が可能です。必要書類は依頼内容によって異なりますので、詳細は個別にご案内いたします。"
            />
            <QaItem
              title="調査はどれぐらいの期間で終わりますか？"
              detail="調査期間は案件によって異なりますが、通常1週間から1ヶ月程度です。浮気調査の場合は2週間前後、素行調査は1ヶ月程度が一般的です。お客様のご要望や状況に応じて、柔軟に対応いたします。"
            />
            <QaItem
              title="報告はどのように行われますか？"
              detail="調査終了後、詳細な報告書を作成し、直接お渡しいたします。写真や動画などの証拠資料も含め、分かりやすく丁寧にご説明いたします。必要に応じて、今後の対応策についてもアドバイスさせていただきます。"
            />
          </section>

          <section className="my-16">
            <H2title title="事務所ご紹介" />
            <Office />
          </section>

          <CtaBlock />
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Home
