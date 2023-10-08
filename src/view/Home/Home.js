import Safety from "../../component/Safety/Safety";
import Navbar from "../../component/Navbar/Navbar";
import Footer from "../../component/Footer/Footer";
import UseTo from "./../../component/UseTo/UseTo";
import "./Home.css";

import City from "../../component/City/City";

import noriding from "./assets/noridingimg.png";
import helmet from "./assets/helmet.png";
import payment from "./assets/secure-payment.png";
import hour24 from "./assets/24-hours.png";
import person from "./assets/person.png";
import cash from "./assets/cash.png";
//cityimages
import city1 from "./assets/Ahmedabad.jpg";
import city2 from "./assets/Bangalore.jpg";
import city3 from "./assets/Chandigarh.jpg";
import city4 from "./assets/Chennai.jpg";
import city5 from "./assets/coimbatore.jpg";
import city6 from "./assets/goa.jpg";
import city7 from "./assets/guwahati.jpg";
import city8 from "./assets/indore.jpg";
import city9 from "./assets/kolkata.jpg";
import city10 from "./assets/jaipur.jpg";
import city11 from "./assets/pune.jpg";
import city12 from "./assets/mumbai.jpg";

import use1 from "./assets/key.png";
import use2 from "./assets/select-to-cart.png";
import use3 from "./assets/pick-up.png";
import use4 from "./assets/ride-your-bike.png";
import { useState } from "react";
import { Link } from "react-router-dom";

import Model from './../../component/Model/Model'

const Home = () => {
  const [city, setcity] = useState("");
  const [bookDay, setBook] = useState("");
  const [pickupdate, setpickupDate] = useState("");
  const [dropdate, setdropDate] = useState("");
  const [pickuptime, setpickupTime] = useState("");
  const [droptime, setdropTime] = useState("");
 

  // const saveFormData = () => {
  //    // Parse existing data from local storage or create an empty array
  //    const formdatasave = JSON.parse(localStorage.getItem('formUser')) || [];

  //    // Create a new form data object
  //    const dataForm = {
  //      city,
  //      bookDay,
  //      pickupdate,
  //      pickuptime,
  //      dropdate,
  //      droptime,
  //    };

  //    // Add the new form data object to the array
  //    formdatasave.push(dataForm);

  //    // Store the entire array in local storage
  //    localStorage.setItem('formUser', JSON.stringify(formdatasave));
  //  };

  const saveFormData = () => {
    const dataForm = {
      city,
      bookDay,
      pickupdate,
      pickuptime,
      dropdate,
      droptime,
    };
    localStorage.setItem("currentUser", JSON.stringify(dataForm));
  };

  return (
    <div>
      <Navbar />

      <div className="home-bg">
        <div className="container-grp">
          <h1 className="main-heading">RENTALS, REDEFINED</h1>
          <p className="sub-head mt-4">
            Rent from India's Largest Fleet of Vehicles, Trusted by millions
          </p>{" "}
          {city}
          <form className="form-container-bg">
            <div className="d-flex justify-content-center text-white p-5 form-content-design">
              <div>
                <div>
                  <h4 className="text-center"> City </h4>
                </div>
                <div>
                  <select
                    onChange={(e) => {
                      setcity(e.target.value);
                    }}
                    className="select-bar">
                    {" "}
                    <br /> <br />
                    <option value="pune">Pune</option>
                    <option value="bengluru">Bengluru</option>
                    <option value="chandigadh">Chandigadh</option>
                    <option value="chennai">Chennai</option>
                    <option value="Ahmdabad">Ahmdabad</option>
                    <option value="Indore">Indore</option>
                    <option value="Goa">Goa</option>
                    <option value="jaipur">Jaipur</option>
                    <option value="Kolkata">Kolkatta</option>
                    <option value="Mumbai">Mumbai</option>
                  </select>
                </div>
              </div>

                     <p>Book At</p><br/>
                     <select onChange={(e)=>{
                        setBook(e.target.value)

                     }}>
                        <option>Daily</option>
                        <option>Weekly</option>
                        <option>Monthly</option>
                     </select>

                    

                        <p>pick up date</p>
                     <input type="time" onChange={(e)=>{
                        setpickupTime(e.target.value)
                     }} />
                     <input type="date" onChange={(e)=>{
                        setpickupDate(e.target.value)
                     }}  className='ms-3'/>

                     <p >drop  up date</p>
                     <input type="time" onChange={(e)=>{
                        setdropTime(e.target.value)
                     }} />
                     <input type="date"  onChange={(e)=>{
                        setdropDate(e.target.value)
                     }} className='ms-3'/>
                  </div>
                  <Link to="/bookbike">
                  <button onClick={saveFormData} >find bike</button>
                 </Link>

                <input
                  type="time"
                  onChange={(e) => {
                    setdropTime(e.target.value);
                  }}
                  className="select-bar"
                />

                <input
                  type="date"
                  onChange={(e) => {
                    setdropDate(e.target.value);
                  }}
                  className="ms-3 select-bar"
                />
                <div></div>
              </div>

            </div>
            <Link to="/bookbike">
              <button onClick={saveFormData} className="find-button px-5 d-block bold text-decoration-none mx-auto">
                Find Bike Here
              </button>
            </Link>
          </form>
        </div>
      </div>

      <div className="d-flex justify-content-evenly flex-wrap ms-5  mt-5">
        <div>
          {" "}
          <Safety
            safetyheading="No Riding Limits"
            saftdec="Odometer Won't Scare You Anymore."
            safetylogo={noriding}
          />
        </div>
        <div>
          {" "}
          <Safety
            safetyheading="Freebies"
            saftdec="Helmets Always, Sometimes More."
            safetylogo={helmet}
          />
        </div>
        <div>
          {" "}
          <Safety
            safetyheading="Secure Payments"
            saftdec="Our Payment Partners are Industry Leaders."
            safetylogo={payment}
          />
        </div>
        <div>
          {" "}
          <Safety
            safetyheading="No Bullshit"
            saftdec="A Day Rent is simply for 24 hrs, We mean it."
            safetylogo={hour24}
          />
        </div>
        <div>
          {" "}
          <Safety
            safetyheading="Verified Dealers"
            saftdec="Every Single Dealer is Committed to Quality Service."
            safetylogo={person}
          />
        </div>
        <div>
          {" "}
          <Safety
            safetyheading="100% Moneyback"
            saftdec="Not Happy With Service, Take Your Money Back."
            safetylogo={cash}
          />
        </div>
      </div>

      {/* how to use */}

      <h1 className="text-center fw-bold useheading ">How To Use {city}</h1>

      <div className="how-to-use">
        <div className="d-flex justify-content-evenly flex-wrap mt-5 ">
          <div className="ms-3">
            <UseTo
              useimg={use1}
              useheading="Select Rental Product"
              usedes="You can search & select product from our wide range."
            />
          </div>

          <div className="ms-3">
            <UseTo
              useimg={use2}
              useheading="Add to cart"
              usedes="Easily add multiple product in your cart or direct book from Book Now button"
            />
          </div>

          <div className="ms-3">
            <UseTo
              useimg={use3}
              useheading="Select Rental Product"
              usedes="You can search & select product from our wide range."
            />
          </div>

          <div className="ms-3">
            <UseTo
              useimg={use4}
              useheading="Select Rental Product"
              usedes="You can search & select product from our wide range."
            />
          </div>
        </div>
      </div>

      <h1 className="text-center fs-1  m-5 cityheading">
        Bike Rental Services in Top Cities
      </h1>

      <div className=" container city-main-container my-3">
        <div className="d-flex justify-content-evenly flex-wrap m-3">
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
        <div className="d-flex justify-content-evenly flex-wrap m-3 mt-5">
          <div>
            <City cityimg={city7} cityname="guwahati" />
          </div>
          <div>
            <City cityimg={city8} cityname="indore" />
          </div>
          <div>
            <City cityimg={city9} cityname="kolkata" />
          </div>
          <div>
            <City cityimg={city10} cityname="jaipur" />
          </div>
          <div>
            <City cityimg={city11} cityname="pune" />
          </div>
          <div>
            <City cityimg={city12} cityname="mumbai" />
          </div>
        </div>
      </div>

<Model/>
      <div>
        <Footer />
      </div>
    </div>
  );
};
export default Home;
