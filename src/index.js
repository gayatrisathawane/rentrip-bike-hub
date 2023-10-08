import React from 'react';
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import Home from './view/Home/Home'
import Faq from './view/Faq/Faq'
import Blog from './view/Blog/Blog'
import Review from './view/Review/Review'
import Login from './view/Login/Login'
import Contact from './view/Contact/Contact'
import PostCard  from './component/PostCard/PostCard';
import ReadPost from "./component/ReadPost/ReadPost"
import BookBike from './view/BookBike/BookBike'
import Readbike from './view/Readbike/Readbike';
import Register from "./view/Register/Register";
import Addtocard from "./view/Addtocard/Addtocard";
import Payment from "./view/Payment/Payment"




import { createBrowserRouter, RouterProvider, } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/addtocart",
    element: <Addtocard />,
  },
  {
    path: "blog/read/:id",
    element: <ReadPost />,
  },
  {
    path: "/post",
    element: <PostCard />,
  },
  {
    path: "/faq",
    element: <Faq />,
  },
  {
    path: "/review",
    element: <Review />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/bookbike",
    element: <BookBike />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/bookbike/readbikedata/:id",
    element: <Readbike />,
  },
  {
    path: "/bookbike/addtocard/:id",
    element: <Addtocard />,
  },
  {
    path: "/addtocard/paymentform/:id",
    element: <Payment />,
  },
  {
    path: "*",
    element: "404 Not Found",
    
  },
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <RouterProvider router={router} />
  </>
);


