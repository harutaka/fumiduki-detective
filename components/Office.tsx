const Office = () => {
  const tdAttrClass = "py-3 px-4 font-bold"
  const tdDescClass = "py-3 px-4 text-sm"
  return (
    <div class="w-full">
      <div class="my-16 w-full flex justify-center">
        <img src="/img/honsya.jpg" alt="" width={600} height={450} />
      </div>

      <div class="overflow-auto mx-auto w-full">
        <table class="w-full text-left table-auto">
          <tbody>
            <tr class="bg-gray-200">
              <td class={tdAttrClass}>事務所名</td>
              <td class={tdDescClass}>
                文月探偵事務所
                <br />
                Fumiduki Detective Agency
              </td>
            </tr>
            <tr class="">
              <td class={tdAttrClass}>住所</td>
              <td class={tdDescClass}>
                〒000-0000
                <br />
                大阪府大阪市〇〇〇〇1-1-1
              </td>
            </tr>
            <tr class="bg-gray-200">
              <td class={tdAttrClass}>TEL</td>
              <td class={tdDescClass}>000-000-0000</td>
            </tr>
            <tr class="">
              <td class={tdAttrClass}>FAX</td>
              <td class={tdDescClass}>000-000-0000</td>
            </tr>
            <tr class="bg-gray-200">
              <td class={tdAttrClass}>受付時間</td>
              <td class={tdDescClass}>09:00-20:00</td>
            </tr>
            <tr class="">
              <td class={tdAttrClass}>定休日</td>
              <td class={tdDescClass}>土曜・日曜・祝日</td>
            </tr>
            <tr class="bg-gray-200">
              <td class={tdAttrClass}>駐車場</td>
              <td class={tdDescClass}>4台まで駐車可</td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr class="my-8" />

      <ul class="m-8 list-disc">
        <li class="py-1">○○線○○駅より徒歩5分</li>
        <li class="py-1">○○○線○○○駅より徒歩8分</li>
      </ul>

      <div class="w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6561.836948848546!2d135.49883!3d34.682007!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x41606f98435e0ac!2z5pys55S66aeF!5e0!3m2!1sja!2sjp!4v1640934752318!5m2!1sja!2sjp"
          allowFullScreen
          title="Google Map of fumiduki detective agency"
          loading="lazy"
          class="w-full min-h-[450px]"
        ></iframe>
      </div>
    </div>
  )
}

export default Office
