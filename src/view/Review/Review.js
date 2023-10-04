import { useState } from "react";
import Navbar from "./../../component/Navbar/Navbar";
import CustomerCard from "../../component/CustomerCard/CustomerCard";
import ReviewTask from "../../component/ReviewTask/ReviewTask";
import "./Review.css";
import "./../../component/Footer/Footer";
import Footer from "./../../component/Footer/Footer";

const Review = () => {
  const [taskList, setTaskList] = useState([
    {
      title: "Trip to ASSAM and MEGHALAYA!",
      description: "We had booked two bikes (Pulsar 180 & 150) for my ASSAM and MEGHALAYA trip from Rentrip Guwahati. The bikes were very well maintained and perfectly clean when they handed the key. So no trouble with the bike at any place .",
      name: "Jeetu Dongre`",
      profession: "Senior Teacher, Bhopal",
      emoji: "❤❤❤❤❤",
    },
    {
      title: "Trip to ASSAM and MEGHALAYA!",
      description: "We had booked two bikes (Pulsar 180 & 150) for my ASSAM and MEGHALAYA trip from Rentrip Guwahati. The bikes were very well maintained and perfectly clean when they handed the key. So no trouble with the bike at any place .",
      name: "Know Startup",
      profession: "News",
      emoji: "❤❤❤❤❤",
    },
    {
      title: "Trip to ASSAM and MEGHALAYA!",
      description: "We had booked two bikes (Pulsar 180 & 150) for my ASSAM and MEGHALAYA trip from Rentrip Guwahati. The bikes were very well maintained and perfectly clean when they handed the key. So no trouble with the bike at any place .",
      name: "Mandy Varshaney",
      profession: "TripAdvisor",
      emoji: "❤❤❤❤❤",
    },
  ]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [profession, setProfession] = useState("");
  const [emoji, setEmoji] = useState("");

  const addReviseToList = () => {
    const randomId = Math.floor(Math.random() * 1000);

    const obj = {
      title: title,
      description: description,
      name: name,
      profession: profession,
      emoji: emoji,
    };

    setTaskList([...taskList, obj]);
  };

  return (
    <>
      <Navbar />
      <CustomerCard />

      <div className="container">
      <h1 className='text-center mt-5 title-main'>CUSTOMER EXPERIENCES</h1>

      <div>

            <form>
              <input
                type="text"
                value={title}
                placeholder="Enter Revise Title Here"
                className="mt-5 px-3 input-box"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
      
              <input
                type="text"
                value={description}
                placeholder="Enter Revise Description Here"
                className="mt-5 px-3 input-box"
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />

              <input
                type="text"
                value={name}
                placeholder="Enter Name Here"
                className="mt-5 px-3 input-box"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <input
                type="text"
                value={profession}
                placeholder="Enter Profession Here"
                className="mt-5 px-3 input-box"
                onChange={(e) => {
                  setProfession(e.target.value);
                }}
              />
              <input
                type="text"
                value={emoji}
                placeholder="Add Emoji Here"
                className="mt-5 px-3 input-box"
                onChange={(e) => {
                  setEmoji(e.target.value);
                }}
              />

              <button type="button" onClick={addReviseToList}>
                Add{" "}
              </button>
            </form>
          </div>


        {/* <h1 className="text-center mt-5">Add Your Review Here</h1> */}

        <div className="d-flex justify-content-evenly mt-5 flex-wrap">
            {/* <h1>Show Review</h1> */}
            {taskList.map((taskItem, index) => {
              const { id, title, description, name, profession, emoji } =
                taskItem;

              return (
                
                <ReviewTask
                  id={id}
                  title={title}
                  description={description}
                  name={name}
                  profession={profession}
                  emoji={emoji}
                 className=""/>
              );
            })}
         
          
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Review;
