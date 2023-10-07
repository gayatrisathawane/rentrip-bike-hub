import './Footer.css';
import { Link } from 'react-router-dom';
import facebook from "./facebook - Copy.png";
import insta from "./insta.png";
import twitter from "./twitter.png"
import In from "./in.png";
const Footer = () => {
    return (
        <>
        <div className=' footer-image '>
                <div className='row d-flex'>
                    <div className='col-md-3 text-light fs-5 mt-5  position-footer' >
                        <h1 className='fs-2 text-center text-light fs-2 bike-text '>BikeBlitz </h1><br />
                        <p>Self Drive Byke Rental in Ahmedabad</p>
                        <p>Self Drive Byke Rental in Bangalore</p>
                        <p>Self Drive Byke Rental in Chandigarh</p>
                        <p>Self Drive Byke Rental in Chennai</p>
                        <p>Self Drive Byke Rental in Goa</p>
                    </div>
                    <div className='col-md-3 text-light fs-5 text-center  mt-5 '>
                        <h2 className='fs-2'>Quick Links</h2>
                        <Link to="/" className='footer-link p-4'>Home</Link><br />
                        <Link to="/blog" className='footer-link p-4'>Blog</Link><br />
                        <Link to="/contact" className='footer-link'>Contact</Link><br />
                        <Link to="/about" className='footer-link'>About</Link><br />
                        <Link to="/login" className='footer-link'>Login</Link><br />
                    </div>
                    <div className='col-md-3 text-light fs-5   text-center  mt-5 '>
                        <h2 className='fs-2  mb-4'>
                            Get In Touch
                        </h2>
                        <p>15, Sri Kumaran Street,<br />
                            Peelamedu, Ram Lakshman Nagar,<br />
                            Coimbatore, Tamil Nadu 641004</p>
                        <Link to="mailto=onroadzrentals@gmail.com" className='footer-link '>onroadzrentals@gmail.com</Link><br />
                        <Link to="mobile=099760 38888" className='footer-link m-3'>099760 38888</Link><br />
                        <img src={facebook} className='m-1 p-1 mt-2' />
                        <img src={insta} className='m-1 p-3 mt-2' />
                        <img src={twitter} className='m-2 p-1 mt-2' />
                        <img src={In} className='m-1 p-1 mt-2' />
                    </div >
                    <div className='col-md-3 text-light fs-5  mt-5   text-center'>
                        <h1 className='fs-2   mb-4'>Bike Rental Cities</h1>
                        <p className='mt-2'>Rent a Bike in Coimbatore</p>
                        <p className='mt-2'>Rent a Bike in Bangalore</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer