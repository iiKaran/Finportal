import React from 'react'
import OneLineForm from './OneLineForm'
let src= "https://img.freepik.com/free-vector/landing-page-website-cute-style_23-2147774385.jpg?size=626&ext=jpg&uid=R62141179&ga=GA1.2.1280401813.1672154300&semt=ais"
let feature = [{
       code: " &#9733;",
       text: "4.9 Rating"
}, {
       code: "&#9733;",
       text: "8 lakh+ Users"
}, {
       code: " &#9733;",
       text: "2000+ Tax experts"
}]
export default function Action(props) {
       return (
              <div className='features row action' id="action">

                     <div className="feature-item flex-2">
                            <img src={src} alt="" />
                     </div>
                     <div className="feature-item flex-2 right-action">
                            <div className="head-2  ">
                                   Start filing with  <br /> tax expert today
                            </div>
                            <div className="row">
                                   {
                                          feature.map((e) => {
                                                 return <span className=''>

                                                        &#9733;  {`${e.text}`}
                                                 </span>
                                          })
                                   }
                            </div>
                            <OneLineForm></OneLineForm>
                     </div>

              </div>
       )
}
