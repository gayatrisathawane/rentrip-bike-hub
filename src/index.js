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
import BookBike from './view/BookBike/BookBike'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
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
        path: "/login",
        element: <Login/>,
      },
  ]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <RouterProvider router={router} />
    </>
);


