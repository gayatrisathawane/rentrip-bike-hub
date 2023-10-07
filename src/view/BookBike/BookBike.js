import './BookBike.css'
import bikeData from "./../../bikes/bike-data.json"
import Navbar from '../../component/Navbar/Navbar';
import Footer from '../../component/Footer/Footer';



import Bikedatacard from '../../component/Bikedatacard/Bikedatacard';
const BookBike = () => {
    return (
        <div className='main-container-bike'>
            <Navbar />

            <div className='bikepage-container shadow'  >
                <h2 className='p-2'>    Rent A Bike In Pune </h2>
                <span className=''>Dealer Timings: 01:00 AM - 12:00 AM</span>
            </div>

            <div className='bikefound shadow'>
                Found 46 bikes

            </div>

            <div className='bookbike'>
                {
                    bikeData.map((bookbike, index) => {
                        return <Bikedatacard key={index} id={bookbike.id} offer={bookbike.offer} left={bookbike.left} ImageUrl={bookbike.ImageUrl} title={bookbike.title} rating={bookbike.rating} price={bookbike.price} pickup={bookbike.pickup} dealertiming={bookbike.dealertiming} deposite={bookbike.deposite} terms={bookbike.terms} viewdetails={bookbike.viewdetails} addtocard={bookbike.addtocard} />

                    })
                }
            </div>
  <br/>
           
           <Footer/>
        </div>

    )
}
export default BookBike;
// id, offer, left, ImageUrl, title, rating, price, pickup, dealertiming, deposite, terms, viewdetails, addtocard 