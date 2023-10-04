import React from "react";
import "./PostCard.css";
import { Link } from "react-router-dom";
import "./../../view/Blog/Blog.css";

function PostCard( {id,img,title,description,date}) {
    return (
        <div className='content '>
            <p>{id}</p>
            <img src={img} className='image-blog' />
            <h2>{title}</h2><br />
            <p>{description}</p>
            <p>{date}</p>
            <Link to={`blog/post/${id}`} className='blog-button px-3 text-li'>Read More</Link>
            {/* <button type='button' value="Read More" className='blog-button px-3 text-li'> Read More</button> */}
        </div>
    )
}
export default PostCard