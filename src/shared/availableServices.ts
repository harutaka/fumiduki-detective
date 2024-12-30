import uwakiImg from "@/../public/img/uwaki.jpg"
import weddingImg from "@/../public/img/wedding.jpg"
import sokoImg from "@/../public/img/soko.jpg"
import ijimeImg from "@/../public/img/ijime.jpg"
import sutokaImg from "@/../public/img/sutoka.jpg"
import pettoImg from "@/../public/img/petto.jpg"

const availableServices = [
  {
    title: "浮気調査",
    src: uwakiImg,
    fee: [
      { attr: "基本料金", value: "50,000円（調査員1名、3時間）" },
      { attr: "追加料金", value: "10,000円/時間(1名あたり)" },
      { attr: "成功報酬", value: "証拠取得時 100,000円" },
    ],
    detail:
      "パートナーの不審な行動が気になりませんか？経験豊富な調査員が、証拠収集から今後の対策まで丁寧にサポート。真実を明らかにし、あなたの心の平穏を取り戻すお手伝いをいたします。",
  },
  {
    title: "結婚調査",
    src: weddingImg,
    fee: [
      { attr: "基本料金", value: "150,000円（基本背景調査） " },
      { attr: "詳細な経歴調査", value: "+50,000円" },
      { attr: "資産調査", value: "+100,000円" },
      { attr: "家族関係調査", value: "+80,000円" },
    ],
    detail:
      "大切な人生の決断の前に、お相手の素性を確認しませんか？職歴、家族構成、資産状況など、多角的な調査で隠された事実を明らかに。安心して結婚の決断ができるよう、サポートいたします。",
  },
  {
    title: "素行調査",
    src: sokoImg,
    fee: [
      { attr: "基本料金", value: "40,000円/日（8時間） " },
      { attr: "長期プラン", value: "200,000円/週" },
      { attr: "報告書作成", value: "30,000円" },
    ],
    detail:
      "家族や従業員の行動が心配ですか？日常生活や勤務状況を細やかに調査し、問題行動の有無を確認。適切な対応策を提案し、健全な関係づくりをお手伝いいたします。",
  },
  {
    title: "いじめ調査",
    src: ijimeImg,
    fee: [
      { attr: "基本料金", value: "100,000円（1週間の基本調査） " },
      { attr: "証拠収集", value: "+50,000円" },
      { attr: "カウンセリングサポート", value: "10,000円/回" },
    ],
    detail:
      "お子様の様子がおかしいと感じたら、すぐにご相談ください。学校内外の状況を慎重に調査し、いじめの実態を明らかに。解決に向けた具体的な対策をご提案いたします。",
  },
  {
    title: "ストーカー調査",
    src: sutokaImg,
    fee: [
      { attr: "基本料金", value: "80,000円（3日間の基本調査）" },
      { attr: "証拠収集", value: "+30,000円/日" },
      { attr: "緊急対応サービス", value: "+50,000円" },
    ],
    detail:
      "不安や恐怖を感じる日々から、あなたを守ります。ストーカー行為の証拠収集や加害者の特定を行い、警察への相談や法的措置のサポートまで、トータルで対応いたします。",
  },
  {
    title: "ペット捜索",
    src: pettoImg,
    fee: [
      { attr: "基本料金", value: "30,000円/日" },
      { attr: "ポスター作成・掲示", value: "20,000円" },
      { attr: "SNS拡散サービス", value: "10,000円/週" },
    ],
    detail:
      "大切な家族であるペットが行方不明に。地域の特性を熟知した調査員が、綿密な捜索活動を展開。SNSやポスター掲示など、効果的な手段を駆使してペット発見をサポートします。",
  },
]

export default availableServices