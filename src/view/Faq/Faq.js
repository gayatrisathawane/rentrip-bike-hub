import './Faq.css'
import FaqC from './../../component/FaqC/FaqC'
import Navbar from './../../component/Navbar/Navbar'
import Footer from './../../component/Footer/Footer'

const Faq = () =>{
   
    return(
       
                  
           
         <div className='faq-main-container'>
           <Navbar/>  
           <h1 className='faq-heading text-center '>Frequently Asked Questions</h1>
           <div className='mt-5 mb-3'>
         <FaqC que="Is fuel cost included in the booking amount?" ans="No, the fuel cost is not included in the vehicle booking amount. Fuel cost has to be borne by the customer."/>
         <FaqC que="Will I get a complimentary helmet?" ans="One complimentary helmet will be provided to the customer at no extra cost. If the customer is accompanied by a pillion rider, we suggest the customer bring their own helmets."/>
         <FaqC que="What's the max distance (Kms per day) beyond which I should not travel in booked duration?" ans="The Kms limit is different for each vehicle and can be seen below all vehicles listed on the vehicle selection page. If you ride the bike beyond that KM limit, additional charges of ₹3 / KM will be charged."/>
         <FaqC que="How much is the refundable deposit?" ans="Refundable security deposit amount may vary based on the model of the vehicle. For any vehicle you select, the security deposit amount will be shown to you at the booking summary page."/>
         <FaqC que="Are the bikes being shown owned or operated by Rapido?" ans="The bikes are neither operated or owned by Rapido. Rapido Rentals lists the bikes that are made available by our select vendor partners who own these bikes. All the bikes are owned and operated by these vendor partners."/>
         <FaqC que="Are the bikes being shown owned or operated by Rapido?" ans="The bikes are neither operated or owned by Rapido. Rapido Rentals lists the bikes that are made available by our select vendor partners who own these bikes. All the bikes are owned and operated by these vendor partners."/>
         
         </div>

         <Footer/>
         
         </div>
    )

}
export default Faq;