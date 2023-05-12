import React from 'react'
let src = "https://static.wixstatic.com/media/5ef7f2_f505b41bc54f47ebbf387a32486dbc2b~mv2.webp"
export default function Testi(props) {

 return (
  <div className='test'>
   <div className="row">
    <img src={props.src} alt="" />
    <div className="name">
     <span className='name-bold'>  {props.name}</span>
     <br />
     <span>{props.stamp} </span>
    </div>
   </div>
   <div className="desc-text">
    {props.desc}
   </div>
   <div className="row">
    <span>
    <img src={src}  className='google' alt="" />
    </span>
<span>
  <span className='google-text'> Google Review</span>
   <br />
   <span className="row">
    <span className='star'>{props.starCount + ".0"}</span>
    <span className='star row'>
    
    </span>
   </span>
</span>
   </div>
  </div>
 )
}
