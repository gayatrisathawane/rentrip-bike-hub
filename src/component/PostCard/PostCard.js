import React from "react";
import "./PostCard.css";
import { Link } from "react-router-dom";
import "./../../view/Blog/Blog.css";
// import Blogdata from "./../../component/Blog/Blog.json"
function PostCard( {id,img,title,description,date,effect,effectinfo,Convenient,Convenientinfo,parking,parkinginfo}) {
    return (
        <div className='content '>
            <img src={img} className='image-blog mt-2' />
            <h2>{title}</h2><br />
            <p>{description}</p>
            <p cl>{date}</p>
            <h1>{effect}</h1>
            <p>{effectinfo}</p>
            <h2>{Convenient}</h2>
            <h3>{Convenientinfo}</h3>
            <h2>{parking}</h2>
            <h3>{parkinginfo}</h3>
           
             <Link to={`read/${id}`} className='blog-button px-3 text-light'>Read More</Link>
        </div>
    )
}
export default PostCard