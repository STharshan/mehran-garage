import React from 'react'
import HeroSection from '../components/Home/HeroSection'
import AboutUs from '../components/Home/About'
import ServicesCarousel from '../components/Home/Service'
import Testimonials from '../components/Home/testimonial'
import WhyChooseUs from '../components/Home/WhyChoose'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutUs />
      <ServicesCarousel />
      <Testimonials />
      <WhyChooseUs />
    </div>
  )
}

export default Home