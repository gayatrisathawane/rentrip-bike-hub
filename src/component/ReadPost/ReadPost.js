import React from "react";
import "./ReadPost.css";
import { useParams } from "react-router-dom";
import Blog from "./../../component/Blog/Blog.json"
import { useState } from "react";
import { useEffect } from "react";

function ReadPost(){
    const {id}=useParams()
    const [post,setPost]=useState({})
   useEffect(()=>{
    Blog.forEach((postObj)=>{
        if (post.id==id){
            setPost(postObj)
        }
    })
   },[id])

    return (<>
        </>
        
    );
}
export default ReadPost