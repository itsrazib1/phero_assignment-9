import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import App from './App';
import Statistics from './Statistics/Statistics';
// import Jobtitle from './Jobtitle/Jobtitle';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/Statistics",
    element:  <Statistics/> ,
  },
  {
    path: "/AppliedJobs",
    element: <h2>This Is AppliedJobs</h2>,
  },
  {
    path: "/Blog",
    element: <h2>This Is Blog</h2>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
