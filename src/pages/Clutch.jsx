import React from 'react'
import ClutchHeader from '../components/Clutch/ClutchHeader'
import ClutchWhyChooseUs from '../components/Clutch/ClutchWhyChoose'
import ClutchAbout from '../components/Clutch/ClutchAbout'
import ClutchServices from '../components/Clutch/ClutchService'
import ClutchEnd from '../components/Clutch/ClutchEnd'

const Clutch = () => {
  return (
    <div>
      <ClutchHeader />
      <ClutchWhyChooseUs />
      <ClutchAbout />
      <ClutchServices />
      <ClutchEnd />
    </div>
  )
}

export default Clutch
