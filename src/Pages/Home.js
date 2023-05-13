import React from 'react'
import Navbar from '../Components/Navbar'
import HeadSection from '../Components/HeadSection'
import InfoSection from '../Components/InfoSection'
import FeatureSection from '../Components/FeatureSection'
import Facility from '../Components/Facility'
import Action from '../Components/Action'
import {Contact} from '../Components/Contact'
import Term from '../Components/Term'
import Trust from '../Components/Trust'


const Home = () => {
  return (
    <div>
      <header>
        <Navbar ></Navbar>
      </header>
        <HeadSection ></HeadSection>
        <div className="feature-cont">
        <FeatureSection></FeatureSection>
        </div>
      <Trust></Trust>
      <Facility></Facility>
      <Action></Action>

       <div className="term">
        <Term  />
      </div>
      <div className="green-bg">
        <InfoSection></InfoSection>
      </div>
       <Contact />
    </div>
  )
}

export default Home;
