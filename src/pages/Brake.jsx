import React from 'react'
import BrakeHeader from '../components/Brake/BrakeHeader'
import BrakeWhyChooseUs from '../components/Brake/BrakeWhyChoose'
import BrakeAbout from '../components/Brake/BrakeAbout'
import BrakeServices from '../components/Brake/BrakeService'
import BrakeEnd from '../components/Brake/BrakeEnd'

const Brake = () => {
  return (
    <div>
      <BrakeHeader />
      <BrakeWhyChooseUs />
      <BrakeAbout />
      <BrakeServices />
      <BrakeEnd />
    </div>
  )
}

export default Brake