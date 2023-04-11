import React from "react";
import "./Home.css";
import Jobtitle from "../Jobtitle/Jobtitle";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import Footer from "../Footer/Footer";


const Home = () => {
  
  
  // const Tshart = Tshart;
  return (
    <>
      <div>
        <div class="flex justify-between   items-center mx-48 mt-10">
          <div class="w-1/2">
            <h2 class="text-7xl font-bold mb-6">
              One Step <br /> <span className="text-7xl mt-4">Closer To Your</span>
              <br />
              <span className="TextX">Dream Job</span>
            </h2>
            <p class="text-gray-700 mb-6 text-1xl">
              Explore thousands of job opportunities with all the <br />{" "}
              information you need. Its your future. Come find it. Manage all{" "}
              <br /> your job application from start to finish.
            </p>

            <button class="btnx hover:bg-blue-700  text-white font-bold py-2 px-4 rounded">
              Get Started
            </button>
          </div>
          <div class="  w-1/2">
            <img src="./img2.png" alt="Image" class="rounded imgX" />
          </div>
        </div>
      </div>
      <Jobtitle/>
      <FeaturedJobs/>
      <Footer></Footer>
    </>
  );
};

export default Home;
