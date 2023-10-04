import { useState } from "react";
import Navbar from "./../../component/Navbar/Navbar";
import CustomerCard from '../../component/CustomerCard/CustomerCard';
import ReviewTask from "../../component/ReviewTask/ReviewTask";
import "./Review.css";
import './../../component/Footer/Footer'
import Footer from "./../../component/Footer/Footer";

const Review = () => {
 

    const [taskList, setTaskList] = useState([
      {
        title:'1st Review',
        description:'1st review description',
        name : 'abc',
        profession : 'Senior Engineer',
        emoji : '❤❤❤❤❤'
      }
    ])

       const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [name, setName] = useState('');

    const addReviseToList = () =>{
      const randomId = Math.floor(Math.random() * 1000);

      const obj = {
      
        title : title,
        description : description,
        name : name,
        profession : profession,
        emoji : emoji
      }

      setTaskList([...taskList, obj])
    }

  return (
    <>
      <Navbar />
      <CustomerCard/>

      <div className="container">
        <h1 className="text-center mt-5">Add Your Review Here</h1>

<div className="d-flex justify-content-evenly mt-5">
    <div>
        <h1>Show Review</h1>
       {
        taskList.map((taskItem, index)=>{
          const {id, title, description, name, profession, emoji} = taskItem;

          return <ReviewTask id={id} title={title} description={description} name={name} profession={profession} emoji={emoji}/>
        })
        
        }  

    </div>
    <div>
        <h1>Add Review</h1>
        
        <form>
          <input type="text"  value={title} placeholder="Enter Revise Title Here" className="mt-5" onChange={(e)=>{
            setTitle(e.target.value)
          }}/><br/>

         <input type="text" value={description} placeholder="Enter Revise Description Here"  className="mt-5" onChange={(e)=>{
                      setDescription(e.target.value)
         }}/>

         <input type="text" value={name} placeholder="Enter Name Here"  className="mt-5" onChange={(e)=>{
                      setName(e.target.value)
         }}/>


          <br/><br/>
          <button type="button" onClick={addReviseToList}>Add </button> 
        </form>

    </div>


</div>
      </div>
      <Footer/>
    </>
  );
};
export default Review;
