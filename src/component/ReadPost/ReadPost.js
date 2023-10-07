import React from "react";
import "./ReadPost.css";
import { useParams } from "react-router-dom";
import Blog from "./../../component/Blog/Blog.json"
import { useState } from "react";
import { useEffect } from "react";

function ReadPost(){
    const {id} = useParams()
    const [post,setPost]=useState({})
   useEffect(()=>{

    Blog.forEach((postObj)=>{
        if (postObj.id==id){
            setPost(postObj)
        }
    })
   },[id])

    return (<>

              <div className='blog-image'>
             
                <b > <h1 className='blog-text'>Blog</h1></b>
            </div>
     
    <div className="read-text-blog">
     
    <img src={post.img} className="read-img mt-5 p-3"/><br/>
    <h1 className="text-center orange">{post.title}</h1><br/>
    <p className="text-center ms-5 me-5 fs-5">{post.description}</p><br/>
    <h3 className="ms-5 orange ">Date : {post.date} ;</h3><br/>
    <h2 className="ms-5 orange">1.{post.effect}</h2>
    <p className="text-center ms-5 me-5 fs-5">{post.effectinfo}</p><br/>
    <h2 className="ms-5 orange">2.{post.Convenient}</h2>
    <p className="text-center ms-5 me-5 fs-5">{post.Convenientinfo}</p><br/>
    <h2 className="ms-5 orange">3 : {post.parking}</h2>
    <p className="text-center ms-5 me-5 p-5 fs-5">{post.parkinginfo}</p><br/>

    </div>
        </>
         );
}
export default ReadPost