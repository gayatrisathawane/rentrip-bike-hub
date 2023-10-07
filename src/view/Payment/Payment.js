import React from 'react'
import "./Payment"
import { useParams } from 'react-router-dom'
import bikedata from "./../../bikes/bike-data.json"
import { useState,useEffect } from 'react'

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
       this id payment page
    </div>
  )
}

export default Payment

