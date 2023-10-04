import React from 'react'
import './ReviewTask.css'

const ReviewTask=({id,title,description, name, profession, emoji})=>{
  return (
    <> 
    <div className='review-main-container shadow'>
       {/* <p>{id}</p> */}
       <p >{title}</p>
       <p>{description}</p>
       <p>{name}</p>
       <p>{profession}</p>
       <p>{emoji}</p> 
    </div>


    </>
  )
}
export default ReviewTask