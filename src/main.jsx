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
// import ErrorPage from "./error-page";

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
    element: <JobDetails></JobDetails>,
    // loader: () => fetch("Featured.json"),
    loader:({params})=>fetch(`Featured.json${params.dataID}`),
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
    element: <h2>This Is Blog</h2>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
