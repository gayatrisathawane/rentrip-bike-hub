import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Home from './view/Home/Home';
import About from './view/About/About';
import Blog from './view/Blog/Blog'
import Support from './view/Support/Support';
import Login from './view/Login/Login';
import Contact from './view/Contact/Contact';
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
        path: "/about",
        element:<About />,
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
        path: "/support",
        element: <Support/>,
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


