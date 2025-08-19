import React from 'react'
import AirConditonHeader from '../components/AirCondition/AirConditionHeader'
import AirConditonWhyChooseUs from '../components/AirCondition/AirConditionWhyChoose'
import AirConditonAbout from '../components/AirCondition/AirConditionAbout'
import AirConditonServices from '../components/AirCondition/AirConditionService'
import AirConditonEnd from '../components/AirCondition/AirConditionEnd'

const AirCondition = () => {
  return (
    <div>
      <AirConditonHeader />
      <AirConditonWhyChooseUs />
      <AirConditonAbout />
      <AirConditonServices />
      <AirConditonEnd />
    </div>
  )
}

export default AirCondition;