import Safety from '../../component/Safety/Safety'
import Navbar from './../../component/Navbar/Navbar'
import './Home.css'
import City from './../../component/City/City'

import noriding from './noridingimg.png'
import helmet from './helmet.png'
import payment from './secure-payment.png'
import hour24 from './24-hours.png'
import person from './person.png'
import cash from './cash.png'
//cityimages
import city1 from './Ahmedabad.jpg'
import city2 from './Bangalore.jpg'
import city3 from './Chandigarh.jpg'
import city4 from './Chennai.jpg'
import city5 from './coimbatore.jpg'
import city6 from './goa.jpg'
import city7 from './guwahati.jpg'
import city8 from './indore.jpg'
import city9 from './kolkata.jpg'
import city10 from './jaipur.jpg'
import city11 from './pune.jpg'
import city12 from './mumbai.jpg'



const Home = () => {
   return (
      <div>
         <Navbar />

         <div className='home-bg'>
            <div className='descdiv'>
               <h1 className='heading-home'>RENTALS, REDEFINED</h1>
               <p className='decs-head'>Rent from India's Largest Fleet of Vehicles, Trusted by millions</p>
            </div>

         </div>


         <div className='d-flex justify-content-evenly flex-wrap ms-5  mt-5'>
            <div> <Safety safetyheading="No Riding Limits" saftdec="Odometer Won't Scare You Anymore." safetylogo={noriding} /></div>
            <div> <Safety safetyheading="Freebies" saftdec="Helmets Always, Sometimes More." safetylogo={helmet} /></div>
            <div> <Safety safetyheading="Secure Payments" saftdec="Our Payment Partners are Industry Leaders." safetylogo={payment} /></div>
            <div> <Safety safetyheading="No Bullshit" saftdec="A Day Rent is simply for 24 hrs, We mean it." safetylogo={hour24} /></div>
            <div> <Safety safetyheading="Verified Dealers" saftdec="Every Single Dealer is Committed to Quality Service." safetylogo={person} /></div>
            <div> <Safety safetyheading="100% Moneyback" saftdec="Not Happy With Service, Take Your Money Back." safetylogo={cash} /></div>
         </div>

         <h1 className='text-center fs-1 fw-lighter m-5'>----------- Bike Rental Services in Top Cities----------</h1>

         <div className='city-main-container'>
            <div className='d-flex justify-content-evenly flex-wrap m-3'>

               <div>
                  <City cityimg={city1} cityname="Ahmedabad" />

               </div>
               <div>
                  <City cityimg={city2} cityname="Bangalore" />

               </div>
               <div>
                  <City cityimg={city3} cityname="chandigarh" />

               </div>
               <div>
                  <City cityimg={city4} cityname="Chennai" />

               </div>
               <div>
                  <City cityimg={city5} cityname="coimbatore" />

               </div>
               <div>
                  <City cityimg={city6} cityname="goa" />

               </div>
            </div>
            <div className='d-flex justify-content-evenly flex-wrap m-3 mt-5'>
               <div >
                  <City cityimg={city7} cityname="guwahati" />

               </div>
               <div >
                  <City cityimg={city8} cityname="indore" />

               </div>
               <div >
                  <City cityimg={city9} cityname="kolkata" />

               </div>
               <div >
                  <City cityimg={city10} cityname="jaipur" />

               </div>
               <div >
                  <City cityimg={city11} cityname="pune" />

               </div>
               <div>
                  <City cityimg={city12} cityname="mumbai" />

               </div>


            </div>
         </div>


























      </div>

   )

}
export default Home;