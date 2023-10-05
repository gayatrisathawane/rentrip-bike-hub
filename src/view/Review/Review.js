import { useState } from "react";
import Navbar from "./../../component/Navbar/Navbar";
import CustomerCard from "../../component/CustomerCard/CustomerCard";
import ReviewTask from "../../component/ReviewTask/ReviewTask";
import showToast from "crunchy-toast";
import "./Review.css";
import "./../../component/Footer/Footer";
import Footer from "./../../component/Footer/Footer";

const Review = () => {
  const [taskList, setTaskList] = useState([
    {
      title: "RenTrip Gonna be My First Choice Forever",
      description:
        "It has been an awesome experience for me when I got to roam places like Dipor Bil, Kamakhya Temple, Umanadna temple and many more places. Before I started the journey I wasn't sure I would get chance to visit and these all beautiful places.",
      profession: "Senior Teacher, Bhopal",
      emoji: "⭐⭐⭐⭐⭐",
    },
    {
      title: "Trip to ASSAM and MEGHALAYA!",
      description:
        "We had booked two bikes (Pulsar 180 & 150) for my ASSAM and MEGHALAYA trip from Rentrip Guwahati. The bikes were very well maintained and perfectly clean when they handed the key. So no trouble with the bike at any place .",
      name: "Know Startup",
      profession: "News",
      emoji: "⭐⭐⭐⭐⭐",
    },
    {
      title: "Leading motorbike rental service providers!",
      description:
        "We had booked two bikes (Pulsar 180 & 150) for my ASSAM and MEGHALAYA trip from Rentrip Guwahati. The bikes were very well maintained and perfectly clean when they handed the key. So no trouble with the bike at any place .",
      name: "Mandy Varshaney",
      profession: "TripAdvisor",
      emoji: "⭐⭐⭐⭐⭐",
    },
  ]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [profession, setProfession] = useState("");
  const [emoji, setEmoji] = useState("");

  const addReviseToList = () => {
    if (!title) {
      showToast("Title is Required.", "alert", 3000);
      return;
    }
    if (!description) {
      showToast("Description is Required.", "alert", 3000);
      return;
    }
    if (!name) {
      showToast("Name is Required.", "alert", 3000);
      return;
    }
    if (!profession) {
      showToast("Profession is Required.", "alert", 3000);
      return;
    }
    if (!emoji) {
      showToast("Stars are Required.", "alert", 3000);
      return;
    }

    const clearInputFields = () => {
      setTitle("");
      setDescription("");
      setName("");
      setProfession("");
      setEmoji("");
    };

    const savetolocalstorage = () =>{

    };

    // const randomId = Math.floor(Math.random() * 1000);

    const obj = {
      title: title,
      description: description,
      name: name,
      profession: profession,
      emoji: emoji,
    };

    setTaskList([...taskList, obj]);

    clearInputFields();

    showToast("Review added successfully!", "success", 3000);
  };

  return (
    <>
      <Navbar />
      <CustomerCard />

      <div className="container">
        <h1 className="text-center mt-5 title-main">CUSTOMER EXPERIENCES</h1>

        <div className="input-container mt-5 shadow">
          <form>
            <div className="first-input-grp">
              <input
                type="text"
                value={title}
                placeholder="Enter Revise Title "
                className="mt-5 px-3 input-box shadow"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />

              <input
                type="text"
                value={description}
                placeholder="Enter Revise Description "
                className="mt-5 px-3 input-box shadow"
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />

              <input
                type="text"
                value={name}
                placeholder="Enter Customer Name "
                className="mt-5 px-3 input-box shadow"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>

            <div className="first-input-grp">
              <input
                type="text"
                value={profession}
                placeholder="Enter Profession "
                className="mt-5 px-3 input-box shadow"
                onChange={(e) => {
                  setProfession(e.target.value);
                }}
              />
              <input
                type="text"
                value={emoji}
                placeholder="Add Stars "
                className="mt-5 px-3 input-box shadow"
                onChange={(e) => {
                  setEmoji(e.target.value);
                }}
              />

              <button
                type="button"
                className="add-button mx-5 px-5 shadow"
                onClick={addReviseToList}>
                Add Your Review
              </button>
            </div>
          </form>
        </div>


        <div className="d-flex justify-content-evenly mt-5 flex-wrap">
         
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
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Review;
