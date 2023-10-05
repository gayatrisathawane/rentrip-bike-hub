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
<<<<<<< HEAD
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
    path: "/bookbike",
    element: <BookBike />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  // {
  //   path: "*",
  //   element: "404 Not Found",
  // },
]);
=======
import Readbike from './view/Readbike/Readbike';
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Addtocard from './view/Addtocard/Addtocard';
const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    
      {
        path: "/contact",
        element:<Contact />,
      },
      {
        path: "/blog",
        element: <Blog/>,
      },
      {
        path: "/faq",
        element: <Faq/>,
      },
      {
        path: "/review",
        element: <Review/>,
      },
      {
        path: "/bookbike",
        element: <BookBike/>,
      },
      {
        path: "/bookbike/readbikedata/:id",
        element: <Readbike />,
      },
      {
        path: "/addtocard",
        element: <Addtocard />,
      },
      {
        path: "/login",
        element: <Login/>,
      },
  ]);
>>>>>>> 32a73219e8a57bbad62e93cb2fe973a049b698f9
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <RouterProvider router={router} />
  </>
);


