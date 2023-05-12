import React from 'react'
import Typewriter from "typewriter-effect";
import src from './animate/headVid.gif'
import OneLineForm from './OneLineForm'
let review = "https://static.wixstatic.com/media/5ef7f2_0888b44f18254276a52a2929984b806f~mv2.png/v1/fill/w_373,h_76,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/4_9%20ratings.png";
const HeadSection = (props) => {
  return (
    <div className='head-section'>

      <div className="left-head head-item ">
        <div className="head">
          Assisted Tax Filing <br /> Platform For
        </div>
        <div className='typing'>
          <Typewriter
            options={{
              strings: [
                "Capital Gain Texation",
                "Share Traders",
                "Future & Option Traders",
                "Salaried Taxpayers"
              ],
              autoStart: true,
              loop: true,
            }}
          /></div>
        <div className='review'>

          4.9 ★ Google rating from 10,000+ reviews
        </div>
        <div>
          <img src={review} className='review-img' alt="" />
          <OneLineForm></OneLineForm>
        </div>
      </div>
      <div className="right-head head-item ">
       <img src={src} alt="" />
          </div>

      </div>
      )
}

      export default HeadSection
