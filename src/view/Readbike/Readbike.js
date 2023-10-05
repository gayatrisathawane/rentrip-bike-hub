import React, { useEffect, useState } from 'react'
import "./Readbike.css"
import { useParams } from 'react-router-dom'
import Bikedatacard from '../../component/Bikedatacard/Bikedatacard'
import bikedata from "./../../bikes/bike-data.json"
import Navbar from '../../component/Navbar/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGear } from '@fortawesome/free-solid-svg-icons'
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
    <Navbar/>

    <div className='main-readbike-container shadow'>
      <div className='read-bikedata'>
        <div className='bike-img1'>
          <img src={post.ImageUrl} className='imgreadbike' />
        </div>
        <div className='readbikedata-content'>
          <h4> Under 0 Km</h4><br />
          <h4> Self Start</h4><br />
          <h4> <FontAwesomeIcon icon= {faGear} />110cc</h4><br />
          <h4> 2019</h4>
          <span></span>
          <span>Share details with friends</span>

        </div>
        
      </div><br/><br/>

         <span className='readbike-bikeprice'>Bike price</span>
         <div className='container bg-info h-25 w-100 my-2 p-4 ' >
              <h2 className='mx-5'>{post.title} </h2>
              <h6 className='mx-5'>{post.price}</h6>
              <Link to={`/bookbike/addtocard/${id}` }className='readbike-addtocard' >Add To Card</Link>
         </div>
         <div>
        <h4>  Description</h4>
         </div>
    </div>
    </div>
  )
}

export default Readbike

