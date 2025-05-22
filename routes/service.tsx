import Breadcrumb from "../components/Breadcrumb.tsx"
import CheckListItem from "../components/CheckListItem.tsx"
import CtaBlock from "../components/CtaBlock.tsx"
import Footer from "../components/Footer.tsx"
import PageHeader from "../components/PageHeader.tsx"
import ServiceItem from "../components/ServiceItem.tsx"
import Header from "../islands/Header.tsx"

import availableServices from "../shared/availableServices.ts"

const Service = () => {
  return (
    <div class="min-h-screen text-lg tracking-wider bg-gray-100">
      <Header current="/service" />
      <PageHeader title="業務内容" />
      <Breadcrumb breadcrumb={[{ href: "", title: "業務内容" }]} />

      <main class="relative py-4 px-4 md:px-14">
        {/* site-container */}
        <div class="relative px-4 pt-16 mx-auto w-full max-w-6xl">
          <ul>
            {availableServices.map((item, i) => <CheckListItem key={i} name={item.title} />)}
          </ul>

          <p class="my-8">当事務所の主な取り扱い調査内容です。</p>

          {availableServices.map((item, i) => (
            <ServiceItem key={i} title={item.title} src={item.src} detail={item.detail} />
          ))}
          <CtaBlock />
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Service
