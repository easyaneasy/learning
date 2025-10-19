import React from 'react'
import HeroSection from '../components/HeroSection'
import FeatureSection from '../components/FeatureSection'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className='flex flex-col justify-center items-center'>
        <HeroSection></HeroSection>
        <FeatureSection></FeatureSection>
        <Footer></Footer>
    </div>
  )
}
