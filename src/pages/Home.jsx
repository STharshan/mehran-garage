import React from 'react'
import HeroSection from '../components/Home/HeroSection'
import AboutUs from '../components/Home/About'
import ServicesCarousel from '../components/Home/Service'
import Testimonials from '../components/Home/testimonial'
import WhyChooseUs from '../components/Home/WhyChoose'
import FindUs from '../components/Findus'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutUs />
      <ServicesCarousel />
      <Testimonials />
      <WhyChooseUs />
      <FindUs />
    </div>
  )
}

export default Home