import React from "react"
import "./About.css";
import Prajkta from "./pm.png"

const About = () => {
    return (
        <>
            <div className="background-image-about  d-flex">
                <div>
                    <h1 className="text-light text-center ms-2 mt-5">What People Are Saying<br/> About Us</h1><br/>
                    <h3 className="text-light fs-4 ms-2">We provide our bast service our client always and <br/>try to achieve our client trust....!</h3>
                </div>

            <div className="card m-3 shadow" >
            <img src={Prajkta} className="about-img card-img-top shadow "/>
  <div>
    <h5 className="card-title text-center">Gayatri Sathawne</h5>
    
   
  </div>
</div>
<div className="card m-3">
            <img src={Prajkta} className="about-img card-img-top shadow"/>
  <div >
    <h5 className="card-title text-center">Yogita Shete</h5>
    
   
  </div>
</div>
<div  className="card m-3">
            <img src={Prajkta} className="about-img card-img-top p-3 shadow"/>
  <div >
    <h5 className="card-title text-center">Prajkta Mhase</h5>
  </div>
</div>
<div  className="card m-3">
            <img src={Prajkta} className="about-img card-img-top shadow"/>
  <div >
    <h5 className="card-title text-center">Vivek Shejul</h5>
    
  </div>
</div>


</div>


        </>
    )

}

export default About;