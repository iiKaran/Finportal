import React from 'react'
import OneLineForm from './OneLineForm'
const facilities = [
 {
  src: "https://img.freepik.com/premium-vector/sales-growth-illustration-flat-style_203633-8608.jpg?size=626&ext=jpg&uid=R62141179&ga=GA1.2.1280401813.1672154300&semt=ais",
  text: "Share necessary \n information as guided by your expert"
 },
 {
  src: "https://img.freepik.com/free-vector/indian-rupee-investment-concept_23-2148007574.jpg?size=626&ext=jpg&uid=R62141179&ga=GA1.2.1280401813.1672154300&semt=sph",
  text: "Approve your summary and get ITR filed accurately within 24 hours"
 },
 {
  src: "https://img.freepik.com/free-vector/customer-support-flat-design-illustration_23-2148889374.jpg?size=626&ext=jpg&uid=R62141179&ga=GA1.2.1280401813.1672154300&semt=ais",
  text: "Connect with a tax expert through live chat"
 }
]
export default function Facility() {
 return (
  <div className='facilities'>
     
     <div className="left-facility facility-item border">
       
       <div className="head ">
       Crores saved in <br />
        taxes.
       </div>
       <p className=''>
       We are India's most trusted tax filing platform. Our team goes through in-depth training to help you plan and minimise your tax liability.
       </p>
       <OneLineForm></OneLineForm>
     </div>
     <div className="right-facility facility-item border col">
      {facilities.map((e)=>{
       return <div className="row facility-row">
         
          <img src={e.src} alt="" />
          <span className='facility'>
           {e.text}
          </span>
         </div>
      })}
      </div>

  </div>
 )
}
