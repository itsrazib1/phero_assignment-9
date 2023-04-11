import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
// import Statistics from "./Statistics/Statistics";
import AppliedJobs from "./Applied Jobs/AppliedJobs";
// import JobDetails from "./Job Details/JobDetails";
import Example from "./Statistics/Sdata";
import ErrorPage from "./error-page";
import JobDetails from "./Job Details/JobDetails";
import Featured from "../public/Featured.json";
import Blogs from "./Blogs/Blogs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
     
    ],
    errorElement: <ErrorPage />,
  },
  {
    path: "jobs/:dataID",
    element: <JobDetails key={Featured._id}></JobDetails>,
    loader:({params})=>fetch(`Featured.json/${params.dataID}`),
  },
  {
    path: "/Statistics",
    element: <Example />,
  },
  {
    path: "/AppliedJobs",
    element: <AppliedJobs />,
  },
  {
    path: "/Blog",
    element: <Blogs></Blogs>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
