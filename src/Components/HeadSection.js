import React from 'react'
import src from './animate/headVid.gif'
import OneLineForm from './OneLineForm'
let capitalGain = "https://img.freepik.com/free-vector/economic-growth_24877-49247.jpg?size=626&ext=jpg&uid=R62141179&ga=GA1.2.1280401813.1672154300&semt=ais";
let shareTrader = "https://img.freepik.com/premium-vector/business-graph-green-up-arrow-shape-white-background-profit-loss-trading-trader_34103-661.jpg?size=626&ext=jpg&uid=R62141179&ga=GA1.2.1280401813.1672154300&semt=ais";
const HeadSection = (props) => {
  return (
    <div className='head-section'>

      <div className="left-head head-item ">
        <div className="head">

         <span>Save</span> Money  <span>Save</span> Time
         <p>File your ITR with expert assistance</p>
        </div>
        <ul className='typing'>
          <li>  Capital Gain Texation</li>
          <li>  Share Traders</li>
          <li>  Future & Option Traders</li>
          <li>  Salaried Taxpayers</li>
    </ul>
        <div>
          {/* <OneLineForm></OneLineForm> */}
        </div>
      </div>
      <div className="right-head head-item ">
       <img src={src} alt="" />
          </div>
      </div>
      )
}

      export default HeadSection
