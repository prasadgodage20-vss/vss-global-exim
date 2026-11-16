import { useState } from 'react'
import { products } from './data/site'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Products } from './components/Products'
import { About, Applications, CtaBand, Process } from './components/Sections'
import { Enquiry } from './components/Enquiry'
import { Footer } from './components/Footer'

export default function App() {
  const [enquiryProduct, setEnquiryProduct] = useState(products[0].name)
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Products onEnquire={setEnquiryProduct} />
        <Applications />
        <Process />
        <CtaBand />
        <Enquiry product={enquiryProduct} onProductChange={setEnquiryProduct} />
      </main>
      <Footer />
    </>
  )
}
