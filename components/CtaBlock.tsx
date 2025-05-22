const CtaBlock = () => {
  return (
    <div class="p-5 mt-20 mb-8 w-full bg-white rounded border shadow-md">
      <div class="md:flex">
        <div class="md:w-1/2">
          <img src="/img/otoiawase.jpg" alt="" width={800} height={600} />
        </div>

        <div class="md:w-1/2">
          <div class="mt-4 text-3xl font-bold">お気軽にお問い合わせください</div>

          <div class="my-8">
            <p>TEL: 000-000-0000</p>
            <p>受付時間: 9:00-20:00（土・日・祝日除く）</p>
          </div>

          <a href="/contact">
            <button type="button" class="block py-3 w-full text-center text-white bg-amber-600 rounded cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="inline-block mr-2 w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              お問い合わせはこちら
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default CtaBlock
