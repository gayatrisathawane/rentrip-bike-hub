import React from 'react'
import "./Payment.css"
import { useParams } from 'react-router-dom'
import bikedata from "./../../bikes/bike-data.json"
import { useState,useEffect } from 'react'
import Navbar from '../../component/Navbar/Navbar'
import Footer from '../../component/Footer/Footer'


function Payment() {
    const { id } = useParams()

    const [posts, setposts] = useState({})
  
    useEffect(() => {
      bikedata.forEach((postsObj) => {
        if (postsObj.id == id) {
          setposts(postsObj)
        }
      })
    }, [id])
  return (
    <div>

      <Navbar />
      <h2 className='text-center my-5    '>  Complete Your Booking</h2>
      <div className='d-flex justify-content-center'>

        <div className=' card addtocard-container shadow'>
          <div className='addtocard-under-container rounded-1 '>
            <span className='fs-4'>NEED HELP?</span> <br />
            <span className='text-addtocontact'>  If you need help,contact us and let us help you.</span><br />
            <a href='+91 88007 79391' className='text-decoration-none fs-5  '> +91 88007 79391</a>
          </div>

          <h5 className='p-3'>CUSTOMER INFORMATION</h5>

          <div className='position-relative d-block'>
            <span className='mx-5'> Full Name:</span> <input type='text' className='input-box-3  p-2  mx-5'></input><br /><br />

            <span className='mx-5'>Email Address </span>  <input type='email' className='input-box-3  p-2  mx-4'></input><br /><br />

            <span className='mx-5'> Mobile Number:</span>   <input type='tel' className='input-box-3  p-2  mx-2'></input><br /><br />

            <span className='mx-5 '>VIP Membership: </span> <span className=' p-2 rounded-1 fs-6 bg-primary'>Not Available</span><br />

          </div>
          <h3 className='m-4 mx-4'> Location</h3>
          <div>
            <span className='mx-5'> Address </span> <input type='city' placeholder='Enter Your City' className='input-box-3 mx-5 p-2'></input><br /><br />
            <div className=' '>
              <div className='d-flex justify-content-around my-5'>
                Country<input type='city' className='px-2' placeholder='Enter Your Country'></input>
                Pincode<input type='city' className='px-2' placeholder='Enter Your Pincode'></input>
              </div>
              <div className='d-flex justify-content-around my-5'>
             <span className='mx-2'>  City</span> <input type='city' className=' px-2' placeholder='Enter Your City'></input>
              State<input type='city' className='px-2' placeholder='Enter Your State'></input>
              </div>
            </div>
            <div>
             <span className='mx-5'><input type='checkbox' ></input>  Yes, I have GST Number</span>

             <span className='mx-5'><button type='button' className='w-75 mx-5 my-5 rounded-1 p-2  bg-warning'>Continue</button></span>
            </div>
          </div>

        </div>
      </div>
      <Footer/>
    </div>

  )
}

export default Payment

