import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Activelink from "../Activelink/Activelink";


const Header = () => {
  return (
    <div>
      <nav class=" mt-8">
        <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div class="relative flex items-center justify-between h-16">
            {/* <!-- Navigation menu items --> */}
            <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              {/* <!-- Logo or site name --> */}
              <div class="flex-shrink-0 ms-20 border p-2 rounded-xl hover:bg-red-500">
                <a href="#" class=" text-black font-bold text-3xl">
                  IT'S JOB HUB
                </a>
              </div>
              {/* <!-- Navigation items --> */}
              <div class="hidden sm:block sm:ml-6">
                <div class="flex gap-5 ps-40 pt-1 ">
                  <Activelink
                    to="/"
                    className="btnColor hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Home
                  </Activelink>
                  <Activelink
                    to="/Statistics"
                    class="btnColor hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Statistics
                  </Activelink>
                  <Activelink
                    to="/AppliedJobs"
                    class="btnColor hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Applied Jobs
                  </Activelink>
                  <Activelink
                    to="/Blog"
                    class="btnColor hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Blog
                  </Activelink>
                </div>
              </div>
            </div>
            {/* <!-- Start Applying button --> */}
            <div class="  py-3 right-0 flex-shrink-0 mr-2 BtnA  me-20">
              <a href="#" class="  text-sm font-medium ms-7 pt-7 BtnAText  ">
                Start Applying
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
