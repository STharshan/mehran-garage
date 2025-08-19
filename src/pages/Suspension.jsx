import React from 'react'
import SuspensionHeader from '../components/Suspension/SuspensionHeader'
import SuspensionWhyChooseUs from '../components/Suspension/SuspensionWhyChoose'
import SuspensionAbout from '../components/Suspension/SuspensionAbout'
import SuspensionServices from '../components/Suspension/SuspensionService'
import SuspensionEnd from '../components/Suspension/SuspensionEnd'

const Suspension = () => {
  return (
    <div>
      <SuspensionHeader />
      <SuspensionWhyChooseUs />
      <SuspensionAbout />
      <SuspensionServices />
      <SuspensionEnd />
    </div>
  )
}

export default Suspension
