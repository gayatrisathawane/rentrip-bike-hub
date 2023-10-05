import React from 'react'
import { useParams } from 'react-router-dom'

function Readbike() {
  const {id}  =  useParams()
  return (
    <div>
      this view details page {id}
    </div>
  )
}

export default Readbike

