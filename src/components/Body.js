import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './Login';
import Browse from "./Browse"
import { useDispatch } from 'react-redux';

const Body = () => {
  const appRouter = createBrowserRouter([
    {path:"/",
      element:<Login/>
    },{path:"/login",
      element:<Login/>
    },{path:"/browse",
      element:<Browse/>
    },
  ])

 

  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body;
