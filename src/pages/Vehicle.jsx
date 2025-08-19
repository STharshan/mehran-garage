import React from 'react'
import VehicleHeader from '../components/Vehicle/VehicleHeader'
import VehicleWhyChooseUs from '../components/Vehicle/VehicleWhyChoose'
import VehicleAbout from '../components/Vehicle/VehicleAbout'
import VehicleServices from '../components/Vehicle/VehicleService'
import VehicleEnd from '../components/Vehicle/VehicleEnd'

const Vehicle = () => {
  return (
    <div>
      <VehicleHeader />
      <VehicleWhyChooseUs />
      <VehicleAbout />
      <VehicleServices />
      <VehicleEnd />
    </div>
  )
}

export default Vehicle
