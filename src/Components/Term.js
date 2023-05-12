import React from 'react'
import OneLineForm from './OneLineForm'
import src from './animate/hiddencharg.gif'
export default function Term(props) {
 return (
  <div className='term-cont row flex-2'>
   <div className="left-term ">
    <p className='text'>We are the true meaning of assisted tax compliance</p>
    <div className="head-2">
     No Hidden Charges
    </div>
    <p className='desc'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat, molestiae, voluptatum aperiam illo voluptates facere </p>
    <OneLineForm />
   </div>

   <div className="right-term ">
    <img src={src} alt="" />
   </div>
  </div>
 )
}
