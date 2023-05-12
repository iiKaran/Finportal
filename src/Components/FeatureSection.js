import React from 'react'
import src from './animate/reduceliab.gif'
import OneLineForm from './OneLineForm'
let feature = [{
 code: " &#10003",
 text: "On-demand tax support"
}, {
 code: " &#10003",
 text: "Your personal tax expert"
}, {
 code: " &#10003",
 text: "Guaranteed accuracy"
}]
export default function FeatureSection(props) {
 return (
  <div className='features row '>

   <div className="feature-item flex-2">
    <img src={src} alt="" />
   </div>
   <div className="feature-item flex-2">
    <div className="head">
     Reduce your
     <br />
     tax  liability up
     <br />
     to 26%
    </div>
    <div className="row">
     {
      feature.map((e) => {
       return <span className=''>
              <span className='tick'>
              &#10004;
              </span>
 {`  ${e.text}`}
       </span>
      })
     }
    </div>
    <OneLineForm></OneLineForm>
   </div>

  </div>
 )
}
