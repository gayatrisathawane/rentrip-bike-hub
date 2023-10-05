import React from "react";
import "./PostCard.css";
import { Link } from "react-router-dom";
import "./../../view/Blog/Blog.css";
import Blogdata from "./../../component/Blog/Blog.json"
function PostCard( {id,img,title,description,date}) {
    return (
        <div className='content '>
            <img src={img} className='image-blog' />
            <h2>{title}</h2><br />
            <p>{description}</p>
            <p>{date}</p>
            <Link to={`read/${id}`} className='blog-button px-3 text-li'>Read More</Link>
        </div>
    )
}
export default PostCard