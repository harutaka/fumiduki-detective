
import seminarInformation from "../shared/seminarInformation.ts"

type SeminarItemProps = {
  href: string
  title: string
  postDate: string
}
const SeminarItem = ({ href, title, postDate }: SeminarItemProps) => {
  return (
    <div class="py-3 w-full text-sm border-b border-gray-200">
      <div class="mb-1 text-gray-600">
        {postDate}
        <span class="inline-block px-1 mx-2 text-[10px] text-white bg-gray-600">Information</span>
      </div>
      <p>
        <a href={href} class="hover:underline">
          {title}
        </a>
      </p>
    </div>
  )
}

const Footer = () => {
  return (
    <footer class="pb-8 mt-16">
      <hr class="mx-auto w-full border-black" />
      <div class="mx-auto w-full max-w-6xl md:px-14">
        <div class="w-full border-b border-gray-200">
          <a href="/policy">
            <div class="inline-block px-8 my-2 text-xs hover:underline border-r border-l border-gray-200">
              プライバシーポリシー
            </div>
          </a>
        </div>

        <div class="my-8 mx-auto md:flex md:justify-around">
          <div class="p-4 md:p-0 md:w-1/3">
            <img src="/img/tanteilogo.png" alt="文月探偵事務所" width="250" height="60" />
            <div class="my-4 text-sm">
              <p>郵便番号：〒000-0000</p>
              <p>住所：大阪府大阪市○○○○1-1-1</p>
              <p>TEL：000-000-0000</p>
              <p>定休日：土曜、日曜、祝日</p>
            </div>
          </div>

          <div class="p-4 md:p-0 md:w-1/3">
            <div class="-mt-4 w-full border-b border-gray-300">
              <h4 class="inline-block py-2 text-lg font-bold border-b border-black">セミナー情報</h4>
            </div>
            {[...seminarInformation].reverse().map((item, i) => (
              <SeminarItem key={i} href={item.href} title={item.title} postDate={item.postDate} />
            ))}
          </div>
        </div>

        <div class="pt-4 text-xs text-center">&copy; 2025 harutaka</div>
      </div>
    </footer>
  )
}

export default Footer
