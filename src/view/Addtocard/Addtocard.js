import React from 'react'
import "./Addtocard.css"
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Bikedatacard from '../../component/Bikedatacard/Bikedatacard'
import bikeData from "./../../bikes/bike-data.json"
import Navbar from '../../component/Navbar/Navbar'
import Review from '../Review/Review'
import ReviewTask from '../../component/ReviewTask/ReviewTask'
import Footer from '../../component/Footer/Footer'



function Addtocard() {
  const { id } = useParams()

  const [post, setpost] = useState({})
  const [DataStore, setDataStore] = useState(bikeData)
  const [findform, setFindform] = useState("")
  console.log(findform)


  useEffect(() => {
    bikeData.forEach((postObj) => {
      if (postObj.id == id) {
        setpost(postObj)
      }
    })
  }, [id])


  useEffect(() => {
    const list = JSON.parse(localStorage.getItem('currentUser'));

    //    if(list && list.length>0){
    setFindform(list)
    //    }

  }, [])
  
  return (
    <>
      <Navbar />

      <div className='d-flex justify-content-center  '>
        <div className='addtocard-main-container shadow '>
          <div className=' d-flex p-2 color'>
            Cart Item(s)
          </div>

          <div className='d-flex shadow  '>

            <span className=' shadow img-add'> <img src={post.ImageUrl} className='img-add-1'/><br/><span className='p-3 fs-5'>{post.title}</span></span>

            <span className='fs-5 p-3 mt-3 '>
              <br /> <span className='fs-6'>Pick</span> <br />{findform.pickupdate} {findform.pickuptime}</span>

            <span className='fs-5 mt-5 p-2 pt-3'><span className='fs-6'>Drop</span> <br /> {findform.dropdate} {findform.droptime} </span>

            <span className='fs-5 mt-5 p-2 pt-3'> <span className='fs-6'>price</span> <br />{findform.price}</span>

            <span className='total-price fs-3 px-2'><span className='mx-5 px-4 fs-4'>.Total </span> <br /> {post.price} </span>


          </div><br />
          <h4 className='mx-5'>Additional Item(s)</h4><br />

          <div className=' addtocard-additional p-3 position-relative color  '>
            {/* <span className=' px-3 fs-6'>Sub Total:</span> <span className='position-absolute end-0 px-2' >{post.price}</span>
            <br /><br />
            <span className='px-3 fs-4'> Net total: </span> <span className='position-absolute fs-4 end-0 px-2' >{post.price}</span>
            */}

          </div>

          <div className='position-relative'>
            {/* <button type='button'>remove data</button> */}
            {/* <Link to={`/addtocard/paymentform/${id}`} className='readbike-addtocard p-2 ' >Add To Card</Link> */}
            {/* <button className='p-1   rounded addtocard-btn fs-4 w-25 position-absolute end-0 mx-4 shadow '>Checkout</button> */}
            <Link to={`/addtocard/paymentform/${id}` }className=' p-2 text-decoration-none px-5   rounded addtocard-btn fs-4 w-25 position-absolute end-0  shadow'>checkout</Link>
          </div>
        </div>
        
      </div>






      {/* <h1> Rent  A Bike at {findform.city}</h1>
                  <button className='datasearch'> your search :</button>
                   <span className='ms-3 fs-5'>{findform.pickupdate}  </span>
                   <span className='fw-bold fs-5'>{findform.pickuptime} </span> - 
                  <span className='ms-2 fs-5'>{findform.dropdate} </span>
                  <span className='fw-bold fs-5'>{findform.droptime} </span>
                 
                  <h2 className='mx-5'>{post.title} </h2>
                  <h6 className='mx-5'>{post.price}</h6>
                  */}
                  
          <br/><br/>
         <Footer/>
    </>
   
  )
}

export default Addtocard
