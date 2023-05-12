import React from 'react'
import Testi from './Testi'
const testi = [{
 src: "https://static.wixstatic.com/media/5ef7f2_c91568657aa64a0aa04334bfb82558c3~mv2.png/v1/fill/w_62,h_62,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Frame%201171278761.png",
 name: "Niranjana Sharma",
 stamp: "Local Guide • 2 months ago",
 desc: `Team TaxBuddy came to the rescue in crunch time. They were prompt, courteous and professional. Superlative service a super competitive price. Couldn't be more satisfied. Strongly recommended for every taxpayer in India who wants accurate returns and peace of mind.
 `,
 starCount: "5",

},
{
 src: "https://static.wixstatic.com/media/5ef7f2_4858d0a720e3417a9cc1137c762b8c3b~mv2.png/v1/fill/w_56,h_56,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Frame%201171278761%20(2).png",
 name: "Niranjana Sharma",
 stamp: "Local Guide • 2 months ago",
 desc: `Positive : Professionalism, Responsiveness. Rajkumar was very responsive and prompt throughout the return filing process. Even though it was taking some time on the govt portal, I knew that the work`,
 starCount: "5",

}, {
 src: "https://static.wixstatic.com/media/5ef7f2_787c909ee97a4307bb1d12f683bf6e59~mv2.png/v1/fill/w_56,h_56,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Frame%201171278761%20(1).png",
 name: "Niranjana Sharma",
 stamp: "Local Guide • 2 months ago",
 desc: `Positive : Quality.

 Right from the start the process was very smooth. The tax buddy assigned (Mr Gaurishankar) was extremely helpful, proactive, patient and answered all questions. Not only did I avail the service, because of the great experience, made my spouse use the service as well. recommend highly and continue the services again. I talked with Nikita Chilveri and my overall experience with tax buddy was so wonderful, they are so professional and the way Nikita explained everything to me was really helpful.`,
 starCount: "3",

},
{
 src: "https://static.wixstatic.com/media/5ef7f2_787c909ee97a4307bb1d12f683bf6e59~mv2.png/v1/fill/w_56,h_56,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Frame%201171278761%20(1).png",
 name: "Niranjana Sharma",
 stamp: "Local Guide • 2 months ago",
 desc: "ax Buddy was a breeze to work with. It's a straightforward procedure that's easy to follow. All you have to do is fill out the form with the relevant information and submit necessary documents as requested by them",
 starCount: "5",

}, {
 src: "https://static.wixstatic.com/media/5ef7f2_787c909ee97a4307bb1d12f683bf6e59~mv2.png/v1/fill/w_56,h_56,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Frame%201171278761%20(1).png",
 name: "Karan Sehgal",
 stamp: "Local Guide • 2 months ago",
 desc:`ax Buddy was a breeze to work with. It's a straightforward procedure that's easy to follow. All you have to do is fill out the form with the relevant information and submit necessary documents as requested by them`,
 starCount: "4",

}]
export default function Testimonial() {
 return (
  <div className='testimonial'>
   <div className="test-cont">

   <div className="head test-head">
    Hear from our clients
   </div>
   <div className="row test-cont">
       {testi.map((e)=>{
        return <Testi src = {e.src} stamp = {e.stamp} desc = {e.desc} starCount = {e.starCount} name = {e.name}></Testi>
       })}
   </div>
       </div>
  </div>
 )
}
