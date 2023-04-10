import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("Featured.json")
      .then((response) => response.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div>
      <h1 className="text-5xl font-bold text-center">Featured Jobs</h1>
      <p className="text-center mt-3">
        Explore thousands of job opportunities with all the information you
        need. It's your future.
      </p>

      <div className="grid grid-cols-2 grid-rows-2 gap-4 mx-40 mt-4 mb-5">
        {jobs.map((job) => (
          <div className="ps-10 border-2 rounded-lg col-span-1 row-span-2" key={job._id}>
            <img
              className="h-20 w-52"
              src={job.picture}
              alt=""
            />
            <h3 className="font-bold text-2xl">
               {job.title}
            </h3>
            <p>{job.company}</p>
            <div className="flex mt-4 mb-5">
              <button className="me-5 border border-blue-500 text-blue-500 rounded-md px-4 py-2 transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white">
                Remote
              </button>
              <button className="border border-blue-500 text-blue-500 rounded-md px-4 py-2 transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white">
                Full Time
              </button>
            </div>
            <div className="mb-5">
              <FontAwesomeIcon icon={faLocationDot} /> Dhaka, Bangladesh
              <FontAwesomeIcon icon={faDollarSign} /> Salary: 100K - 150K
            </div>
            <button className="mb-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedJobs;
