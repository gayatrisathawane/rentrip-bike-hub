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
                <h2 className='p-2'> hjhgh </h2>
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

            <div className='text-bike'>

                <br />
                RenTrip is the largest provider of <span className='bold'>bike rental</span> services in Pune.  Get any rental bike on hourly, daily, weekly or monthly rental plan. Rent a wide range<br /> of bikes on an hourly, daily, weekly or monthly basis. Unlike others, we offer you the bike for a full 24 hours on our daily bike rental plans, <br />where you can keep our rental motorcycles for 24 hrs if rented for a day.<br /><br />

                Why pay higher when you can rent a bike at really cheap prices. We also have added range of bikes to rent like KTM Duke 200, Royal Enfield Classic 350, Harley <br />Davidson, Apache 310, Royal Enfield Himalayan, Honda CBR 150R, Honda Shine, Aprilia SR 150, Pulsar NS 150, Activa 4G, Suzuki Intruder 150,  Bajaj Dominar and many <br />more  in our fleet to give you choice to pick your favourite bike.<br /><br />

                <b className='bold'>Bikes are Better On Commute </b><br />
                Renting a bike is very popular in locations like Wakad,<b>Hadpsar</b> , Chinchwad, Hinjewadi and  road. <b>Kharadi</b> The average rental price for a scooter starts from <br />Rs 400 per day, whereas if you take a bike on long-term rent, the rent typically starts from Rs 3000 per month. Bikes in Pune can be hired on hourly, daily,<br /> weekly and monthly pricing. The longer-term renting format is such that the customer gets a bike on a cheaper deal on longer-term renting.<br /><br />

                If you are looking for a bike rental nearby, just allow us to know your location on your web browser and we shall calculate the distance from your location <br />to each bike. Once your booking is confirmed, your rental gets secured. You shall get the exact address with google location on your phone and E-mail. <br />Visit the rental location with your original ID and driving license, and take off with the bike you have booked.<br /><br />

                With a self-drive bike rental service, you can explore the city as well as outstation locations like Lonavala and Mahabaleswar at your own time.<br /><br />

                So if you just need a bike for one day or on subscription in the long term, just rent it online on RenTrip. We ensure you always get the lowest price deal <br />every time you rent.<br /><br /><br /><br /><br /><br /><br /><br />

                Now it is easy to get a two-wheeler for rent in Pune with RenTrip Bike Rentals. We do provide monthly bike rental as <br />well as bike rentals on hourly, daily, and weekly in Pune city. We are regarded as one of the best, bike rentals in <br />Pune due to our commitment and personalized service.<br /><br />

                We not only provide cheap bike rental in Pune, but we also maintain the highest degree of professionalism and quality. <br />We offer purely time-based bike rentals, hence you always save on fuel cost as others earn on a per km basis <br />whereas RenTrip offers a cost-effective solution to your mobility needs.<br /><br />

                Be it a motorbike or Scooter rental in Pune, our top priority is to provide bike on rent near me (you).<br /><br />

                RenTrip also enables you to rent a bike that is near to you. Since we have multiple locations in a city, so if you want <br />to find a nearby bike, just search for a bike rental near me on search engines or your map application. You can <br />also find a map link on the RenTrip website just below each bike listing and calculate the distance from your location.<br /><br />

                RenTrip also solves your problem of trust with motorcycle renters. With our 100% Moneyback Guarantee, you can always <br />hire a good-condition motorcycle for rent in Pune. To rent a bike in Pune with confidence, just book with RenTrip, go <br />to the location, and take a test drive. If there are any glitches with the bike, and we are unable to fix them, your <br />booking amount is immediately refunded. No questions asked.<br /><br />

                Now enjoy hassle-free bike booking that is just at your fingertips. Our website is quite user-friendly to rent bikes in <br />Pune. You can book your favourite bike, be it a Scooty or a Bullet, just in 5 minutes.<br /><br />

                RenTrip offers bike rental services + motorcycle package tours in 50+ cities and tourist destinations of India and is <br />trusted by 1+ million customers around the globe. You can rent a bike with confidence when there is RenTrip with you. We<br /> think that every rental has a story and with us, our customers have created beautiful stories.<br /><br />

                We are also coming up with a lot of new amazing services apart from bike hire in Pune to make your trip even more <br />memorable and exciting. Be it a bike rental, Bicycle touring, or a Trek, in the last, what matters is the Trip and we <br />are specialized to create awesome trips for you.<br /><br /><br /><br /><br />

                Frequently Asked Questions<br />
                <b>1. How can I rent a bike?</b><br />
                Renting a bike of your choice is simple. Just select the bike which you want to rent and book it. On the next step, you <br />shall need to visit the location to pick the bike up.<br /><br />

                <b> 2.What documents are required for renting a bike?</b><br />
                You need to submit an ID in original and the copy of Driving License.<br /><br />

                 <b>3.Is fuel included with the rental?</b><br />
                No. Fuel is not included with rental amount.<br /><br />

                 <b>4.How much security deposit I need to pay?</b><br />
                There is a varying security deposit for renting a bike depending of the location and type of bike. This is given with <br />the bike listing.<br /><br />

                 <b>5.When shall I get the security deposit back?</b><br />
                You shall be getting the security deposit immediately after returning the bike.<br /><br />

                 <b> 6.Are long term bike rentals cheaper?</b><br />
                Yes. You can avail upto 70% discount on monthly bike rentals.<br /><br />

               <b>7.What are the various bike rental formats?</b><br />
                You can rent a bike on hourly, daily, weekly and monthly. Longer the duration, cheaper the rent.<br /><br />

                Mail
            </div>
           <Footer/>
        </div>

    )
}
export default BookBike;
// id, offer, left, ImageUrl, title, rating, price, pickup, dealertiming, deposite, terms, viewdetails, addtocard 