import React from "react";
import Header from "../Header/Header";
import "./Ul.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDollar,
  faCalendar,
  faPhone,
  faMailBulk,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const JobDetails = () => {
  return (
    <div>
      <div className=" bg-slate-100 -mt-10 pt-10 pb-5">
        <Header></Header>
      </div>
      <div className="bg-slate-100 -mt-5 pt-10 pb-20 font-bold text-center text-4xl">
        Job Details
      </div>
      <div>
        <div className="flex mx-40 mt-10 gap-6">
          <div className="w-2/3">
            <div>
              {" "}
              <span className=" font-bold">Job Description:</span> A UI/UX (User
              Interface/User Experience) designer is responsible for designing
              and creating engaging and effective interfaces for software and
              web applications. This includes designing the layout, visual
              design, and interactivity of the user interface.
            </div>
            <br />
            <div>
              <span className="font-bold">Job Responsibility:</span>{" "}
              Collaborating with cross-functional teams: UI/UX designers often
              work closely with other teams, including product management,
              engineering, and marketing, to ensure that the user interface is
              aligned with business and technical requirements. You will need to
              be able to effectively communicate your design ideas and gather
              feedback from other team members.
            </div>
            <br />
            <div>
              <div className="font-bold">Educational Requirements:</div>
              <br />
              <div>
                Bachelor degree to complete any reputational university.
              </div>
              <br />
              <div className="font-bold">Experiences:</div>
              <br />
              <div>2-3 Years in this field.</div>
            </div>
          </div>
          {/* second part  */}
          <div className="w-1/3">
            <div className=" bg-slate-200 p-6 rounded-lg">
              <h2 className=" font-bold text-2xl ">Job Details</h2>
              <div className="underlinex mt-3 mb-3"> </div>
              <h2 className="mb-3">
                <span className="font-bold">
                  <FontAwesomeIcon icon={faDollar} /> Salary :
                </span>{" "}
                100K - 150K (Per Month)
              </h2>
              <h2 className="mb-3">
                <span className="font-bold">
                  <FontAwesomeIcon icon={faCalendar} /> Job Title :{" "}
                </span>{" "}
                Product Designer
              </h2>

              <h2 className="font-bold ">Contact Information</h2>
              <br />
              <div className="underlinex"></div>
              <div className="mb-2">
                <span className="font-bold">
                  <FontAwesomeIcon icon={faPhone} /> Phone :
                </span>{" "}
                01750-00 00 00
              </div>
              <div className="mb-2">
                <span className="font-bold">
                  <FontAwesomeIcon icon={faMailBulk} /> Email :
                </span>{" "}
                info@gmail.com
              </div>
              <div className="mb-2">
                <span className="font-bold">
                  <FontAwesomeIcon icon={faLocationDot} /> Address :
                </span>{" "}
                Dhanmondi 32, Sukrabad Dhaka, Bangladesh
              </div>
            </div>
            <div className="text-center">
              <button className="btn px-36 mt-5 rounded-lg py-3 text-white bg-teal-400">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
