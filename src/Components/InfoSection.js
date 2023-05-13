import React from 'react'

const achieve = [
  {
  title: "ITR Filled",
  src: "https://static.wixstatic.com/media/5ef7f2_a803f484c21f4d61855cc6abe10f6c5b~mv2.png/v1/fill/w_34,h_25,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Vector%20(9).png",
  desc: "Users from 2600 towns trust TaxBuddy",
  count: "800,000+"
}, {
  title: "Tax Saved",
  src: "https://static.wixstatic.com/media/5ef7f2_e8bffd0e18c143d28746b796f2fa5579~mv2.png/v1/fill/w_34,h_34,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Vector%20(10).png",
  desc: "That’s  1st time users save tax with Fin Portal",
  count: "1 Cr+"
}, {
  title: "Founded",
  src : "https://static.wixstatic.com/media/5ef7f2_d8c518837e6248869ecc6dd4fd539e9f~mv2.png/v1/fill/w_20,h_34,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Vector%20(11).png", 
  desc : "Founded and led by the team of expert CA'S  & CFA'S", 
  count : "201"
}]
export default function InfoSection() {
  return (
    <div className='info-section'>

      <div className="info-row">

         {
          achieve.map((e)=>{
            return  <div className='info-row-item'> 
                <div className="title">
                  {e.title}
                </div>
                <div className="row">
                  <img src={e.src} alt="" />
                  <div className="count">{e.count}</div>
                </div>
                <div className="desc">
                  {e.desc}
                </div>
            </div>
          })
         }
        
      </div>
    </div>
  )
}
