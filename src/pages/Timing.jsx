import React from 'react'
import TimingHeader from '../components/Timing/TimingHeader'
import TimingWhyChooseUs from '../components/Timing/TimingWhyChoose'
import TimingAbout from '../components/Timing/TimingAbout'
import TimingServices from '../components/Timing/TimingService'
import TimingEnd from '../components/Timing/TimingEnd'

const Timing = () => {
  return (
    <div>
      <TimingHeader />
      <TimingWhyChooseUs />
      <TimingAbout />
      <TimingServices />
      <TimingEnd />
    </div>
  )
}

export default Timing
