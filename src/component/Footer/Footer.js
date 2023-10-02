import './Footer.css';
import { Link } from 'react-router-dom';
import facebook from "./facebook - Copy.png";
import insta from "./insta.png";
import twitter from "./twitter.png"
const Footer = () =>{
    return(
        <>
        <div className='footer-container'>
            <div>
                <h1> Bike Btliz Rentals</h1>
                <h5>Bike Btliz Rentals is a brand new offering from Bike Btliz. <br/>Bike Btliz Rentals has selected a few of the trusted <br/>Bike Vendor Partners in Hyderabad who provide available bikes for rent.</h5>
                    
            </div>
            <div className='footer-link'>
            <h2>Quick Links and Policies</h2>
            <Link to="/Home" className='footer-link'>Home🏠</Link><br/>
            <Link to="/Blog" className='footer-link'>Blog</Link><br/>
            <Link to="/contact" className='footer-link'>Contact📞</Link><br/>
            <Link to="/about" className='footer-link'>About</Link><br/>
            <Link to="/login" className='footer-link'>Login🙎‍♀️</Link><br/>
            <Link to="/support" className='footer-link'>Support💁‍♀️</Link><br/>
            
            </div>

            <div>
                <h2>
                Get In Touch
                </h2>
                <Link to="mailto=prajktamhase8@gmail.com" className='footer-link m-3'>prajktamhase8@gmail.com</Link><br/>
                <Link to="mobile=8262945593" className='footer-link m-3'>8262945593</Link><br/>
               <img src={facebook} className='m-3'/>
               <img src={insta}/>
               <img src={twitter}/>
                  
            </div>
            <div>

                   
            </div>
            


        </div>
        </>
    )
}
export default Footer