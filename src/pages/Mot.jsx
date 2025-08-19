import React from 'react'
import MotHeader from '../components/Mot/MotHeader'
import MotWhyChooseUs from '../components/Mot/MotWhyChoose'
import MotAbout from '../components/Mot/MotAbout'
import MOTServices from '../components/Mot/MotService'
import MotEnd from '../components/Mot/MotEnd'

const Mot = () => {
  return (
    <div>
      <MotHeader />
      <MotWhyChooseUs />
      <MotAbout />
      <MOTServices />
      <MotEnd />
    </div>
  )
}

export default Mot