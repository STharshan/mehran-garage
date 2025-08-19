import React from 'react'
import DiagnosticsHeader from '../components/Diagnostics/DiagnosticsHeader'
import DiagnosticsWhyChooseUs from '../components/Diagnostics/DiagnosticsWhyChoose'
import DiagnosticsAbout from '../components/Diagnostics/DiagnosticsAbout'
import DiagnosticsServices from '../components/Diagnostics/DiagnosticsService'
import DiagnosticsEnd from '../components/Diagnostics/DiagnosticsEnd'

const Diagnostics = () => {
  return (
    <div>
      <DiagnosticsHeader />
      <DiagnosticsWhyChooseUs />
      <DiagnosticsAbout />
      <DiagnosticsServices />
      <DiagnosticsEnd />
    </div>
  )
}

export default Diagnostics
