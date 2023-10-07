import React from "react";
import "./Model.css"
import Mobile from "./mobile.png";
export default function Model() {
    return (
        <>
 <div className=" container model-flex shadow ">
                <div>
                    <img src={Mobile} className="mobile-img" />

                </div>

                <div>
                    <h2 className="text-dark mt-5">Get Your Bike & Car On The Go</h2><br />
                    <h4 className="text-dark">Book a Ride, Wherever You Are
                    </h4><br />
                    <p className="fs-4 text-dark">Download our Apps and book your car & bike at anywhere, anytime.<br />
                        And Start your journey with Us
                    </p>

                    <div className="d-flex model-button my-5">
                        <div>
                            <button type="button" className="btn btn bg-dark text-light px-5 button-google"> Google Pay</button>
                        </div>
                        <div>
                            <button type="button " className="btn btn text-light px-5 mx-3 button-app" > App Store</button>
                        </div>
                    </div>
                </div>

            </div>
           </>
    )
}