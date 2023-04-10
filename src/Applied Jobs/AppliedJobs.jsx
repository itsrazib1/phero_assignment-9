import React, { useState } from "react";
import Header from "../Header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
const AppliedJobs = () => {
  const [showItems, setShowItems] = useState(false);
  return (
    <div>
      <div className=" bg-slate-100 -mt-10 pt-10 ">
        <Header />
      </div>
      <div className=" bg-slate-100 pt-20 pb-20 text-center font-bold text-4xl">
        Applied Jobs
      </div>
      <div className=" text-right flex flex-row-reverse space-x-4 space-x-reverse me-72 mt-4">
        <div className=" flex  flex-col justify-center ">
          <button
            className=" bg-slate-400  hover:bg-blue-700 text-white font-bold py-2 px-2 rounded"
            onClick={() => setShowItems(!showItems)}
          >
            Filter By <FontAwesomeIcon icon={faArrowDown} />
          </button>
          {showItems && (
            <div className="mt-2">
              <div className="bg-gray-200 px-4 py-2 mt-2  rounded">
                <p>Item 1</p>
              </div>
              <div className="bg-gray-200 px-4 py-2  mt-2 rounded">
                <p>Item 2</p>
              </div>
              <div className="bg-gray-200 px-4 py-2 mt-2  rounded">
                <p>Item 3</p>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* order section  */}
      <div className="flex border p-8 rounded-lg mx-36 mt-5 items-center  ">
        <div className="  h-40 w-40">
          {" "}
          <img className=" mt-7 border "
            src="https://play-lh.googleusercontent.com/1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA=w3840-h2160-rw"
            alt=""
          />{" "}
        </div>
        <div className="ms-10">
          <div className=" text-3xl font-semibold mb-1">Technical Database Engineer</div>
          <div className="mb-2">Google LLC</div>
          <div className="flex gap-4">
            <button class="border border-blue-500 text-blue-500 py-1 px-4 rounded-lg hover:bg-blue-500 hover:text-white">
              Remote
            </button>
            <button class="border border-blue-500 text-blue-500 py-1 px-4 rounded-lg hover:bg-blue-500 hover:text-white">
              Full Time
            </button>
          </div>
          <div className="mt-2">Dhaka, Bangladesh Salary : 70K - 90K</div>
        </div>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ms-96">
        View Details
</button>

      </div>
    </div>
  );
};

export default AppliedJobs;
