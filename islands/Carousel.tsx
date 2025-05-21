import { useSignal } from "@preact/signals";
import { useEffect, useRef } from "preact/hooks";
import { ChevronLeftIcon, ChevronRightIcon } from "../components/Icons.tsx";

const SLIDE_DATA = [
  {
    text: "徹底した情報管理と秘密厳守",
    text2: "",
    image: "/img/slide01.jpg",
    class: "",
  },
  {
    text: "地域に密着、地域と共に歩む",
    text2: "",
    image: "/img/slide02.jpg",
    class: "opacity-40",
  },
  {
    text: "問題やトラブルの解決に向け",
    text2: "全力でサポートいたします。",
    image: "/img/slide03.jpg",
    class: "opacity-40",
  },
];

type SlideProps = {
  class?: string;
  key?: number;
  data: {
    text: string;
    text2: string;
    image: string;
    class: string;
  };
};

const Slide = (props: SlideProps) => {
  const { key, data } = props;
  const { text, text2, image } = data;
  if (props.class === undefined) props.class = "";
  return (
    <div
      key={key}
      class={`${props.class} lg:h-80 w-full text-center bg-gray-800`}
    >
      <img src={image} class={data.class} />
      <div class="flex absolute top-0 bottom-0 justify-center items-center w-full text-lg font-bold tracking-widest leading-normal text-white md:text-3xl">
        {text}
        <br />
        {text2}
      </div>
    </div>
  );
};

type CarouselProps = {
  showNavigation?: boolean;
  interval?: number;
  currentSlide?: number;
  automatic?: boolean;
  class?: string;
};

const Carousel = (props: CarouselProps) => {
  const NAVIGATION_COLOR = `hover:text-gray-300 text-white`;
  const CHEVRON_STYLE =
    `absolute z-30 w-10 h-10 ${NAVIGATION_COLOR} cursor-pointer`;
  const SHOW_NAVIGATION = props.showNavigation === false ? false : true;
  const SLIDE_INTERVAL = props.interval ? props.interval : 3500;
  const currentSlide = useSignal(props.currentSlide ? props.currentSlide : 0);
  const automatic = useSignal(props.automatic === false ? false : true);
  const slideshowRef = useRef<HTMLDivElement>(null);

  const slideClasses = (idx = 0) => {
    let outgoingSlide = currentSlide.value - 1;
    let incomingSlide = currentSlide.value + 1;
    if (outgoingSlide === -1) outgoingSlide = SLIDE_DATA.length - 1;
    if (incomingSlide === SLIDE_DATA.length) incomingSlide = 0;
    const TRANSITION_CLASS = () => {
      if (currentSlide.value === idx) return "translate-x-0 z-20";
      if (incomingSlide === idx) return "translate-x-full z-10";
      if (outgoingSlide === idx) return "-translate-x-full z-10";
      return "translate-x-full";
    };
    return `slide absolute top-0 left-0 transition-all ease-in-out duration-700 transform ${TRANSITION_CLASS()}`;
  };

  const nextSlide = () => {
    if (SLIDE_DATA.length === currentSlide.value + 1) {
      currentSlide.value = 0;
    } else {
      currentSlide.value++;
    }
  };

  const previousSlide = () => {
    if (currentSlide.value === 0) {
      currentSlide.value = SLIDE_DATA.length - 1;
    } else {
      currentSlide.value--;
    }
  };

  const chevronClick = (doCallback = () => {}) => {
    if (automatic.value) automatic.value = false;
    return doCallback();
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (automatic.value) nextSlide();
    }, SLIDE_INTERVAL);
    return () => clearInterval(interval);
  }, []);

  const ArrowKeyNavigation = () => {
    const keydownHandler = (event: KeyboardEvent) => {
      if (automatic.value) automatic.value = false;
      switch (event.code) {
        case "ArrowLeft":
          event.preventDefault();
          previousSlide();
          break;
        case "ArrowRight":
          event.preventDefault();
          nextSlide();
          break;
        default:
          break;
      }
    };
    slideshowRef.current?.addEventListener("keydown", keydownHandler);
    return () =>
      slideshowRef.current?.removeEventListener("keydown", keydownHandler);
  };
  useEffect(ArrowKeyNavigation, []);

  const goToSlide = (slide_index = 0) => {
    if (automatic.value) automatic.value = false;
    currentSlide.value = slide_index;
  };

  const DotsNavigation = () => (
    <div class="slide_nav z-30 w-full absolute bottom-0 flex justify-center">
      {SLIDE_DATA.map((_item, idx) => {
        return (
          <button
            type="button"
            class={`px-1 ${NAVIGATION_COLOR}`}
            onClick={() => {
              goToSlide(idx);
            }}
            key={idx}
          >
            <span class="sr-only">Go to slide {idx}</span>
            {idx === currentSlide.value
              ? <span class="not-sr-only">●</span>
              : <span class="not-sr-only">○</span>}
          </button>
        );
      })}
    </div>
  );

  return (
    <div
      ref={slideshowRef}
      class={`slideshow relative flex-1 flex-end p-0 overflow-hidden ${
        props.class !== undefined ? props.class : ""
      }`}
      tabIndex={0}
    >
      <button
        type="button"
        class={`left-0 ${CHEVRON_STYLE}`}
        style="top: calc(50% - 20px)"
        onClick={() => chevronClick(previousSlide)}
      >
        <ChevronLeftIcon class="w-10 h-10" aria-hidden="true" />
        <span class="sr-only">Previous slide</span>
      </button>
      <button
        type="button"
        class={`right-0 ${CHEVRON_STYLE}`}
        style="top: calc(50% - 20px)"
        onClick={() => chevronClick(nextSlide)}
      >
        <ChevronRightIcon class="w-10 h-10" aria-hidden="true" />
        <span class="sr-only">Next slide</span>
      </button>
      {SLIDE_DATA.map((item, idx) => (
        <Slide
          data={item}
          key={idx}
          class={slideClasses(idx)}
        />
      ))}
      {SHOW_NAVIGATION &&
        <DotsNavigation />}
      <Slide
        data={SLIDE_DATA[0]}
        class="opacity-0 pointer-events-none"
      />
    </div>
  );
};

export default Carousel;