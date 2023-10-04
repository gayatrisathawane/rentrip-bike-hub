import { useState } from "react";
import Navbar from "./../../component/Navbar/Navbar";
import CustomerCard from '../../component/CustomerCard/CustomerCard';
import ReviewTask from "../../component/ReviewTask/ReviewTask";
import "./Review.css";

const Review = ({}) => {
    const [taskList, setTaskList] = useState("");
    const [id, setId] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

  return (
    <>
      <Navbar />
      <CustomerCard/>

      <div className="container">
        <h1 className="text-center mt-5">Add Your Review Here</h1>

<div className="d-flex justify-content-evenly mt-5">
    <div>
        <h1>Show Review</h1>
        {/* {
            taskList.map((taskItem,index)=>{

                const {id, title, description} = taskItem;

                return(<ReviewTask id={id} title={title} description={description}/>)
                

            })
        }  */}

    </div>
    <div>
        <h1>Add Review</h1>

    </div>


</div>
      </div>
    </>
  );
};
export default Review;
