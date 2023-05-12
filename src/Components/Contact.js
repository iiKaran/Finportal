import { React, useRef } from 'react'
import emailjs from '@emailjs/browser';
import src from './animate/contactus.gif'
// export default function Contact() {
//   return (

// }
export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log("email")
    emailjs.sendForm('service_etmfo9e', 'template_719st4k', form.current, '5i_tUnPCrT3lbCMn8')
      .then((result) => {
        console.log(result.text);
        window.location.reload();
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div className="contact-form">
      <div className="left-contact contact-item">
        <img src={src} alt="" />
      </div>
      <div className="right-contact contact-item">
        <h3>Ask Your Enquiry : </h3>
        <form ref={form} onSubmit={sendEmail} >
          <input type="text" name="from_name" placeholder='Enter Your Name' />
          <input type="email" name="from_email" placeholder='Enter Your Email :' />
          <textarea name="message" placeholder='Enter Your query :' />
          <input type="submit" className='submit' value="Submit Now" />
        </form>
      </div>
    </div>

    //   <form ref={form} onSubmit={sendEmail} className='contact-form' id='contact-form'>

    //   <div className="contact-item left-contact">
    //    <img src={src } alt="" />
    //   </div>
    //   <div className="contact-item right-contact">
    //    <h3>Post Your Enquiry</h3>
    //    <input type="text"   name="user_name" placeholder='Enter Your Name : ' />
    //    <input type="email" name="user_email" placeholder='Enter Your Email : ' />
    //    <input type="tel" placeholder='Enter Your Phone Number : ' />  
    //    <textarea name="message" id="query" cols="30" rows="10" placeholder='Enter Your Query : '></textarea>
    //    <div className="submit" type="submit" onClick={sendEmail}>Submit Now</div>
    //   </div>

    // </form>
  );
};