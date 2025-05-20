const Slider = () => {
  const slideImgArr = [
    { src: "/img/slide01.jpg", class: "", message: "徹底した情報管理と秘密厳守", message2: "" },
    { src: "/img/slide02.jpg", class: "opacity-40", message: "地域に密着、地域と共に歩む", message2: "" },
    {
      src: "/img/slide03.jpg",
      class: "opacity-40",
      message: "問題やトラブルの解決に向け",
      message2: "全力でサポートいたします。",
    },
  ]

  return (
    <div class="carousel w-full h-80 bg-gray-800">
      {slideImgArr.map((item, i) => (
        <div id={`slide${i}`} class="carousel-item relative w-full">
          <img src={item.src} class={`w-full object-cover ${item.class}`} />
          <div class="flex absolute top-0 bottom-0 justify-center items-center w-full text-lg font-bold tracking-widest leading-normal text-white md:text-3xl">
            {item.message}
            <br />
            {item.message2}
          </div>
          <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href={`#slide${i === 0 ? 2 : i - 1}`} class="btn btn-circle">❮</a>
            <a href={`#slide${i === 2 ? 0 : i + 1}`} class="btn btn-circle">❯</a>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Slider