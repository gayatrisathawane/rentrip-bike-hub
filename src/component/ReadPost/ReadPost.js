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
    <img src={post.img}/>
    <h1>{post.title}</h1>
    <h1>{post.description}</h1>
    <h1>{post.date}</h1>
        </>
         );
}
export default ReadPost