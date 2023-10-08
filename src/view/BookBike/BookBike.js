import './BookBike.css'
import { useState, useEffect } from 'react';
import bikeData from "./../../bikes/bike-data.json"
import Navbar from '../../component/Navbar/Navbar';
import Footer from '../../component/Footer/Footer';
import Bikedatacard from '../../component/Bikedatacard/Bikedatacard';

const BookBike = () => {
    const [DataStore, setDataStore] = useState(bikeData)
    const [searchTerm, setSearchTerm] = useState('')
    const [findform, setFindform] = useState('')
    const [price,setprice] = useState("");
   

    const saveFormDatas =() =>{
        const dataForms = {
               price 
              };
       localStorage.setItem('currentUsers', JSON.stringify(dataForms))
        
     }

    useEffect(() => {
        console.log("Search term changed:", searchTerm);

        const filteredBike = bikeData.filter((bike) => {
            const title = bike?.title?.toLowerCase();
            const query = searchTerm?.toLowerCase();

            return title.includes(query);
        });

        setDataStore(filteredBike);
    }, [searchTerm]);

    useEffect(() => {
        const list = JSON.parse(localStorage.getItem('currentUser'));
      
  
        setFindform(list)
   
  
    }, [])



    return (
        <div className='main-container-bike'>
            <Navbar />
       


            <div className='bikepage-container shadow p-3'  >


                <h1> Rent  A Bike at {findform.city}</h1>
                <button className='datasearch'> your search :</button>
                <span className='ms-3 fs-5'>{findform.pickupdate}  </span>
                <span className='fw-bold fs-5'>{findform.pickuptime} </span> -
                <span className='ms-2 fs-5'>{findform.dropdate} </span>
                <span className='fw-bold fs-5'>{findform.droptime} </span>
            </div>

            <div className='bikefound shadow'>
                Found 46 bikes

            </div>
            <div className='d-flex justify-content-center'>
                <input type="text"
                    className='searchbar shadow '
                    placeholder=" Search any bike                                                 "
                    value={searchTerm}
                    onChange={(e) => {
                        setSearchTerm(e.target.value)
                    }}  /> 
            </div>

            <div className='bookbike'>
                {
                    DataStore.map((bookbike, index) => {
                        return <Bikedatacard key={index} id={bookbike.id} offer={bookbike.offer} left={bookbike.left} ImageUrl={bookbike.ImageUrl} title={bookbike.title} rating={bookbike.rating} price={bookbike.price} pickup={bookbike.pickup} dealertiming={bookbike.dealertiming} deposite={bookbike.deposite} terms={bookbike.terms} viewdetails={bookbike.viewdetails} addtocard={bookbike.addtocard} />
                    })
                }

            </div>
            {
            DataStore.length===0  ? <h2 className='text-center'>Bike not found</h2> : null 
             }

            <br />
           
            <Footer />


        </div>

    )
}
export default BookBike;
