import React from 'react'
import Home from './Home'
import FeatureSection from './FeatureSection'
import ActionSection from './ActionSection'
import TestimonialSection from './TestimonialSection'

const HomePage = () => {
  return (
    <div className='py-20' >
       <Home/>
       <FeatureSection/>
      <ActionSection/>
      <TestimonialSection/>

    </div>
  )
}

export default HomePage