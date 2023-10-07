import React from 'react'
import { Link } from 'react-router-dom';
import "./Bikedatacard.css"


function Bikedatacard({ id, offer, left, ImageUrl, title, rating, price, pickup, dealertiming, deposite, terms, viewdetails, addtocard, paymentform }) {
    return (
        <div className='bike'>
            <div className='bike-container'>
                <div className='container-items-bike' ><br />
                    <span className=' bike-offer' >{offer}</span>
                    <span className='bike-left'>{left}</span>

                    <div className='bike-i'> <img src={ImageUrl} className='bike-img1' height='50px' /></div>

                    <h5 className='text-center'>{title}</h5>
                    <span className=' extra-margine'>{rating}</span><br />
                    <span className='price'>{price}</span><br />
                    <span className='pickup'>{pickup}</span>

                    <span className='delear'>{dealertiming}</span>
                    <div className='deposite-bike'>
                        <span>{deposite}</span>
                        <span>{terms}</span><br />
                      
                    </div><hr/>

                    <div className='details-bike'>
                        <Link to={`/bookbike/readbikedata/${id}`} className='view-details'>View-Details </Link>
                        <Link to={`/bookbike/addtocard/${id}` }className='addtocard'>Add To Card</Link>
                     
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bikedatacard

