import React, { useEffect, useState } from 'react'
import "./Readbike.css"
import { useParams } from 'react-router-dom'
import Bikedatacard from '../../component/Bikedatacard/Bikedatacard'
import bikedata from "./../../bikes/bike-data.json"
import Navbar from '../../component/Navbar/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faMotorcycle, faRoad, } from '@fortawesome/free-solid-svg-icons'

import { Link } from 'react-router-dom'
function Readbike() {
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

      <div className='main-readbike-container shadow'>
        <div className='read-bikedata'>
          <div className='bike-img1'>
            <img src={post.ImageUrl} className='imgreadbike' />
          </div>
          <div className='readbikedata-content'>
            <h4> <FontAwesomeIcon icon={faRoad} />  Under 15,000 Km,</h4><br />
            <h4><FontAwesomeIcon icon={faGear} />  Self Start</h4><br />
            <h4> <FontAwesomeIcon icon={faGear} />  110cc</h4><br />
            <h4><FontAwesomeIcon icon={faMotorcycle} />  2019</h4>

            <span>Share details with friends</span>
            <div className='d-flex'>

              c

            </div>

          </div>

        </div><br /><br />

        <span className='readbike-bikeprice'>Bike price</span>
        <div className='container box-readbikedata  h-10 w-100 my-2 p-4 ' >
          <h2 className='mx-5'>{post.title} </h2>
          <h6 className='mx-5'>{post.price}</h6>
          <Link to={`/bookbike/addtocard/${id}`} className='readbike-addtocard' >Add To Card</Link>
        </div>

        <h3 className='description'>Description</h3>
        <div className='mx-5 '>
          Dealer Timings: 09:00 AM - 09:00 PM<br /><br />

          <b>{post.title}</b>  comes with an engine capacity of 109.51cc which has a new fuel injection that produces power of 7.79PS at 8000rpm and 8.79Nm at 5250rpm.<br /> <br />

          Deposit Terms<br />
          No deposit amount<br /><br />

          One Helmet will be given with the bike. Another will be available on request.<br />
          No security amount but an original aadhar card/pan for submission plus a copy of a valid driving license would be submitted.<br />
          THE MINIMUM RENTAL REQUIRED IS FOR 2 DAYS.<br />
        </div>
      </div>
    </div>
  )
}

export default Readbike

