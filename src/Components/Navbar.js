import React from 'react'
import { useNavigate, Link } from 'react-router-dom';

const src = "https://finportalin.com/assets/frontEnd/images/logo.png";


export default function Navbar(props) {
  const navigate = useNavigate();
  function serviceNavigator()
{
   navigate("/services")
}
  return (
    <nav className='row border'>
      <div className="logo navlink row">
        <img src={src} className='' alt="loading" />
      </div>
      <div className="nav-menu row">
        {/* <a href="#action"></a> */}
        <div className="nav-item " onClick={serviceNavigator}>Pricing</div>
        <div className="nav-item " onClick={serviceNavigator} >ITR-Filling</div>
        <div className="nav-item "  onClick={()=>{
          navigate("/contact-form")
        }}>Contact Us</div>
        {/* <a className="nav-item " href=" #contact-form"> become an Affilate</a>
        <a className="nav-item " href=" #contact-form" >partners</a> */}
      </div>
    </nav>
  )
}
