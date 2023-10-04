import './Faq.css'
import faq from './../../data/fqq.json'
import Navbar from './../../component/Navbar/Navbar'
import { useState } from 'react'
const Faq = () =>{
    const [data,setData]=useState(faq)
    return(
        <div className='main-container-faq'>
            <div >
            <Navbar/>
            </div>
            <div >
                <h1 className='fw-bold text-center mt-5 question-main-heading'>Frequently Asked Questions</h1>
            </div>
              
              {  
              data.map((singledata,i)=>{
                return(
                   <div>
                    <div>
                        {singledata.question}
                    </div>
                    <div>
                        {singledata.ans}
                    </div>
                    </div>
                )

              })
                
              }
              </div>
    )

}
export default Faq;