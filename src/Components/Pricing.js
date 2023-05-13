import React from 'react'
const prices =[
 {src:"https://assets1.cleartax-cdn.com/cleartax/images/1630533080_group18140690.png",
 service :"Salary or House Rent Income", 
 salePrice : "1799",
 cuttedPrice:"2499",
 saved:"20%",
 covers:["Salary","House property","Donations","Withdrawal from PF and bank deposits"]
},
{src:"https://assets1.cleartax-cdn.com/cleartax/images/1629879436_group2823.png",
service :"Capital Gains Income", 
salePrice : "4599",
cuttedPrice:"5999",
saved:"23%",
covers:["Everything in Salary/House Rent Plan","Capital Gains from sale of stocks, mutual funds & property","Gains from Lottery, Gaming or Awards",]
},
{src:"https://assets1.cleartax-cdn.com/cleartax/images/1630533061_group3791.png",
service :"Foreign Income", 
salePrice : "1099",
cuttedPrice:"7999",
saved:"27%",
covers:["Everything in Capital Gains Income Plan","Income earned outside India","Income earned in India for NRE, NRO A/c","DTAA guidance"]
}
]
export default function Pricing() {
  return (
    <div className='pricing'>
      
      <div className="head-2 center">
      Let our experts manage your <br /> tax and business compliances
      </div>

      <div className="price-row">

      {
       prices.map((e)=>{
        return <div className='price-card'>
                <img src={e.src} alt="" />
                <span className='work'>{e.service}</span>
                <div className="prices">
                <span className="curr-price"> &#x20B9; {e.salePrice}</span>
                <span className="prev-price">{e.cuttedPrice}</span>
                <div className="label">{e.saved}</div>
                </div>
              
                <ul className="cover">
                 <span>Covers Income From : </span>
                 
               {
                e.covers.map((ee)=>{
                 return <li>{ee}</li>
            
                })
               }
               </ul>
        </div>
       })
      } 
       
      </div>
    </div>
  )
}
