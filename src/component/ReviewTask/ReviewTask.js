import React from 'react'
import './ReviewTask.css'

const ReviewTask=({id,title,description, name, profession, emoji})=>{
  return (
    <> 
    <div className='review-main-container shadow'>
       {/* <p>{id}</p> */}
       <p className='text-center'>{title}</p>
       <p className='text-center'>{description}</p>
       <h5 className='text-center'>{name}</h5>
       <p className='text-center'>{profession}</p>
       <p className='text-center'>{emoji}</p> 
    </div>


    </>
  )
}
export default ReviewTask