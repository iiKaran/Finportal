import React from 'react'
import Navbar from '../Components/Navbar'
import OneLineForm from '../Components/OneLineForm'
import Pricing from '../Components/Pricing'
import src from '../Components/animate/service.gif'
export default function Services() {
  return (
    <>
    <header>

    <Navbar></Navbar>
    </header>
    <div className="service-cont">
    <div className='service'>
      <div className="service-item">
       <span className="head">
        File ITR in <span>30 Minutes</span>
        </span>
        <ul>
          <li>
              <img src="https://assets1.cleartax-cdn.com/cleartax/images/1655968254_group2630.svg" alt="" />
              No manual data entry
          </li>
          <li>
        
          <img src="https://assets1.cleartax-cdn.com/cleartax/images/1655968254_group2630.svg" alt="" />
          100% pre-fill in a click

          </li>
          <li>
          <img src="https://assets1.cleartax-cdn.com/cleartax/images/1655968254_group2630.svg" alt="" />
          Maximum tax savings
          </li>
        </ul>
        
     <div className="service-form">
       <OneLineForm></OneLineForm>
      </div>   
      </div>
      <div className="service-item">
        <img src={src} alt="loading" className='gif'/>
      </div>
    </div>
     <Pricing>

     </Pricing>
    </div>
    </>
  )
}
