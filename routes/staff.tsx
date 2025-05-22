import Breadcrumb from "../components/Breadcrumb.tsx"
import CtaBlock from "../components/CtaBlock.tsx"
import Footer from "../components/Footer.tsx"
import PageHeader from "../components/PageHeader.tsx"
import StaffMember from "../components/StaffMember.tsx"
import Header from "../islands/Header.tsx"

const Staff = () => {
  return (
    <div class="min-h-screen text-lg tracking-wider bg-gray-100">
      <Header current="/staff" />
      <PageHeader title="スタッフ紹介" />
      <Breadcrumb breadcrumb={[{ href: "", title: "スタッフ紹介" }]} />

      <main class="relative py-4 px-4 md:px-14">
        {/* site-container */}
        <div class="relative px-4 pt-16 mx-auto w-full max-w-6xl">
          <div class="">当事務所のスタッフを紹介します。</div>
          <StaffMember
            name="横嶋 秀典"
            src="/img/hide01.jpg"
            role="所長"
            detail="探偵歴25年、元警察官の経験を持つベテラン探偵。文月探偵事務所を設立し、地域に根ざした調査活動を展開。豊富な経験と卓越した洞察力で、複雑な案件も的確に解決に導きます。温厚な人柄で、お客様の悩みに寄り添う姿勢が評判です。趣味は盆栽と将棋。"
          />
          <StaffMember
            name="竹光 雄介"
            src="/img/yusuke01.jpg"
            role="探偵"
            detail="調査歴15年のベテラン探偵。元IT企業のエンジニアという異色の経歴の持ち主。テクノロジーを駆使した最新の調査手法に長け、デジタル関連の証拠収集が得意分野。冷静沈着な性格で、長期の潜入調査も得意としています。休日はドローン操縦の腕を磨いています。"
          />
          <StaffMember
            name="市河 梨奈"
            src="/img/rina05.jpg"
            role="探偵"
            detail="入社3年目ながら、その卓越した観察力と機転の利く対応で、ベテラン顔負けの実力を発揮。女性ならではの視点で、細やかな調査を行います。心理学を学んだ経験を活かし、カウンセリングマインドでお客様をサポート。趣味はヨガと料理で、ストレス解消法を日々研究中。"
          />
          <CtaBlock />
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Staff
