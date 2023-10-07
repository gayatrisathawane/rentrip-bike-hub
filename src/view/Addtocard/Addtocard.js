import React from 'react'
import "./Addtocard.css"
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Bikedatacard from '../../component/Bikedatacard/Bikedatacard'
import bikedata from "./../../bikes/bike-data.json"
import Navbar from '../../component/Navbar/Navbar'
import Review from '../Review/Review'
import ReviewTask from '../../component/ReviewTask/ReviewTask'



function Addtocard() {
  const { id } = useParams()

  const [post, setpost] = useState({})

  useEffect(() => {
    bikedata.forEach((postObj) => {
      if (postObj.id == id) {
        setpost(postObj)
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
             <span className='mx-5'> Full Name:</span>       <input type='text' className='input-box-3 mx-5'></input><br/><br/>
           
            <span className='mx-5'>Email Address </span>  <input type='email' className='input-box-3 mx-4'></input><br/><br/>
           
            <span className='mx-5'> Mobile Number:</span>   <input type='email' className='input-box-3 mx-2'></input><br/><br/>
         
             <span className='mx-5 '>VIP Membership: </span> <span className=' p-2 rounded-1 fs-6 bg-primary'>Not Available</span><br/>
                                                          
          </div>
            <h3 className='m-4 mx-4'> Location</h3>
          <div>
          <span className='mx-5'> Address </span> <input type='city' placeholder='Enter Your City' className='input-box-3 mx-5'></input><br/><br/>

          Country<input type='city' className='m-5' placeholder='india'></input>
          </div>
       
        </div>
      </div>
    </div>
  )
}

export default Addtocard
