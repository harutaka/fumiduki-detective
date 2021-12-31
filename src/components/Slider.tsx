import Image from "next/image"
import { Navigation, Pagination, A11y } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

const Slider = () => {
  const slideImgArr = [
    { src: "/img/slide01.jpg", className: "", message: "徹底した情報管理と秘密厳守", message2: "" },
    { src: "/img/slide02.jpg", className: "opacity-40", message: "地域に密着、地域と共に歩む", message2: "" },
    {
      src: "/img/slide03.jpg",
      className: "opacity-40",
      message: "問題やトラブルの解決に向け",
      message2: "全力でサポートいたします。",
    },
  ]

  return (
    <>
      {/* スライダー本体 */}
      <Swiper
        id="swiper"
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {slideImgArr.map((item, i) => {
          return (
            <SwiperSlide key={i}>
              <div className="relative text-[0px] tracking-[0px] leading-[0px] bg-gray-800">
                <Image src={item.src} alt="" width={1900} height={600} className={item.className} />
                <div className="flex absolute top-0 bottom-0 justify-center items-center w-full text-lg font-bold tracking-widest leading-normal text-white md:text-3xl">
                  {`${item.message}`}
                  <br />
                  {`${item.message2}`}
                </div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </>
  )
}

export default Slider
