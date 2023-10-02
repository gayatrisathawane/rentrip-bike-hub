import Safety from '../../component/Safety/Safety'
import Navbar from './../../component/Navbar/Navbar'
import './Home.css'

import noriding from './noridingimg.png'
import helmet from './helmet.png'
import payment from './secure-payment.png'
import hour24 from './24-hours.png'
import person from './person.png'
import cash from './cash.png'


const Home = () =>{
    return(
    <div>
       <Navbar/>
       
     <div className='home-bg'>
        <div className='descdiv'>
        <h1 className='heading-home'>RENTALS, REDEFINED</h1>
        <p className='decs-head'>Rent from India's Largest Fleet of Vehicles, Trusted by millions</p>
     </div>

    </div>
     
     
     <div className='d-flex justify-content-evenly flex-wrap ms-5 m-1'>
        <div> <Safety safetyheading="No Riding Limits" saftdec="Odometer Won't Scare You Anymore." safetylogo={noriding}/></div>
         <div> <Safety safetyheading="Freebies" saftdec="Helmets Always, Sometimes More." safetylogo={helmet}/></div>
         <div> <Safety safetyheading="Secure Payments" saftdec="Our Payment Partners are Industry Leaders.
" safetylogo={payment}/></div>
         <div> <Safety safetyheading="No Bullshit" saftdec="A Day Rent is simply for 24 hrs, We mean it." safetylogo={hour24}/></div>
         <div> <Safety safetyheading="Verified Dealers" saftdec="Every Single Dealer is Committed to Quality Service." safetylogo={person}/></div>
         <div> <Safety safetyheading="100% Moneyback" saftdec="Not Happy With Service, Take Your Money Back." safetylogo={cash}/></div>
     </div>
    
    

     














     

    
     
   
    
    
    
     </div>
    
    )

}
export default Home;