import React from 'react'
import Hero from './Hero'
import FeatureSection from './FeatureSection'
import EstimateSection from './EstimateSection'
import Portfolio from './Portfolio'
import Services from './Services'
import About from './About'
import Footer from './Footer'
import Gallery from './Gallery'

const Main = () => {
  return (
    <div>
      {/* <About/> */}
      <Hero/>
      <Services/>
      <Portfolio/>
      {/* <FeatureSection/> */}
      <About/>
      <Gallery/>
      <Footer/>
  
    </div>
  )
}

export default Main
