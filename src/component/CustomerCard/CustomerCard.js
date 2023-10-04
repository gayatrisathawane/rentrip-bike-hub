import React, { useState } from "react";
import "./CustomerCard.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const CustomerCard = () => {
    // const [taskList, setTaskList] = useState([]);
    return (
        <>
            <div className="container main-container">
                <div className="container bg-light card-customer shadow mt-5 d-flex justify-content-evenly pt-4">
                    <div className="top-content">
                        <p className="content-head">Overall Customer Satisfaction</p>
                        <p className="ranking">
                            4.1<span className="small-head">/5</span>
                        </p>
                        <p className="bottom-head">based On 2003 reviews</p>
                    </div>

                    <div className="middle-content">
                        <p className="verified-content">
                            100% Verified Feedback & Reviews From Customers
                        </p>
                    </div>

                    <div className="content-head mt-4">
                        <li>
                            <FontAwesomeIcon icon={faStar} className="font" />
                            <FontAwesomeIcon icon={faStar} className="font" />
                            <FontAwesomeIcon icon={faStar} className="font" />
                            <FontAwesomeIcon icon={faStar} className="font" />
                            <FontAwesomeIcon icon={faStar} className="font" /> 1326 review(s)
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faStar} className="font" />
                            <FontAwesomeIcon icon={faStar} className="font" />
                            <FontAwesomeIcon icon={faStar} className="font" />
                            <FontAwesomeIcon icon={faStar} className="font" />
                            <FontAwesomeIcon icon={faStar} /> 221 review(s)
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faStar} className="font" />
                            <FontAwesomeIcon icon={faStar} className="font" />
                            <FontAwesomeIcon icon={faStar} className="font" />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} /> 116 review(s)</li>


                        <li>
                        <FontAwesomeIcon icon={faStar} className="font" />
                        <FontAwesomeIcon icon={faStar} className="font" />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar}  />
                        <FontAwesomeIcon icon={faStar} /> 73 review(s)</li>
                        <li>
                            <FontAwesomeIcon icon={faStar} className="font"/>
                            <FontAwesomeIcon icon={faStar} /> 
                            <FontAwesomeIcon icon={faStar} /> 
                            <FontAwesomeIcon icon={faStar} /> 
                            <FontAwesomeIcon icon={faStar} /> 267 review(s)
                        </li>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CustomerCard;
