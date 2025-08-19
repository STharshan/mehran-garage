import React from 'react'
import TyreHeader from '../components/Tyre/TyreHeader'
import TyreWhyChooseUs from '../components/Tyre/TyreWhyChoose'
import TyreAbout from '../components/Tyre/TyreAbout'
import TyreServices from '../components/Tyre/TyreService'
import TyreEnd from '../components/Tyre/TyreEnd'

const Tyre = () => {
  return (
    <div>
      <TyreHeader />
      <TyreWhyChooseUs />
      <TyreAbout />
      <TyreServices />
      <TyreEnd />
    </div>
  )
}

export default Tyre
