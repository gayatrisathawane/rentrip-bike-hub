import './BookBike.css'
import bikeData from "./../../bikes/bike-data.json"
import Navbar from '../../component/Navbar/Navbar';


import Bikedatacard from '../../component/Bikedatacard/Bikedatacard';
const BookBike = () => {
    return (
        <div>
            <Navbar/>
            
            <div className='bookbike'>
                {
                    bikeData.map((bookbike, index) => {
                        return <Bikedatacard key={index} id={bookbike.id} offer={bookbike.offer} left={bookbike.left} ImageUrl={bookbike.ImageUrl} title={bookbike.title} rating={bookbike.rating} price={bookbike.price} pickup={bookbike.pickup} dealertiming={bookbike.dealertiming} deposite={bookbike.dealertiming} deposite={bookbike.deposite} terms={bookbike.terms} viewdetails={bookbike.viewdetails} addtocard={bookbike.addtocard} />

                    })
                }
            </div>
        </div>
    )
}
export default BookBike;
// id, offer, left, ImageUrl, title, rating, price, pickup, dealertiming, deposite, terms, viewdetails, addtocard 