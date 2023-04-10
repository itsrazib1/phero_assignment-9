import React, { useState, useEffect } from "react";
import "./Jobtitle.css";

const Jobtitle = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("Jobtitle.json")
      .then((response) => response.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div >
      <div>
        <h2 className="text-5xl font-bold text-center mt-20">
          Job Category Lists
        </h2>
        <p className="text-center mt-5">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className=" flex  gap-20  px-32  mb-20  mt-10 " >
        {jobs.map((job) => (
          <div className="rounded-xl ps-5  pe-20 h-48 w-72 border-4 bg-slate-200" key={job.id}>
            <img
              className="h-20 w-20 mt-5 mb-5"
              src={job.picture}
              alt=""
            />
            <p className="text-xs font-bold">{job.index}</p>
            <p className="text-sm text-slate-600">{job.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jobtitle;
