import React from 'react'
import Navbar from '../Components/Navbar'
import HeadSection from '../Components/HeadSection'
import DarkSection from '../Components/DarkSection'
import InfoSection from '../Components/InfoSection'
import FeatureSection from '../Components/FeatureSection'
import Facility from '../Components/Facility'
import Testimonial from '../Components/Testimonial'
import Action from '../Components/Action'
import {Contact} from '../Components/Contact'
import Term from '../Components/Term'
// src of media used in the home page 




const Home = () => {
  return (
    <div>
      <header>
        <Navbar ></Navbar>
      </header>
        <HeadSection ></HeadSection>
      <DarkSection> </DarkSection>
      <div className="green-bg">
        <InfoSection></InfoSection>
        <FeatureSection></FeatureSection>
      </div>
      <Facility></Facility>
      <div className="term">
        <Term  />
      </div>
      <Action></Action>
      <div className="testi">
        <Testimonial></Testimonial>
      </div>
       <Contact />
    </div>
  )
}

export default Home;
