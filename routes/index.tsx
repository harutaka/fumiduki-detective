import Header from "../islands/Header.tsx"
import Slider from "../components/Slider.tsx"

// import areaImg from "@/../public/img/area.jpg"
// import kaikeiImg from "@/../public/img/kaikei.jpg"
// import akusyuImg from "@/../public/img/akusyu.jpg"

const Index = () => {
  return (
    <div class="min-h-screen text-lg tracking-wider bg-gray-100">
      <Header current="/" />
      <Slider />
    </div>
  )
}

export default Index
