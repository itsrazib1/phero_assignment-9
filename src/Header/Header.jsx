import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav class=" mt-8">
        <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div class="relative flex items-center justify-between h-16">
            {/* <!-- Navigation menu items --> */}
            <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              {/* <!-- Logo or site name --> */}
              <div class="flex-shrink-0">
                <a href="#" class=" text-black font-bold text-3xl">
                  IT'S JOB HUB
                </a>
              </div>
              {/* <!-- Navigation items --> */}
              <div class="hidden sm:block sm:ml-6">
                <div class="flex px-64 ">
                  <Link
                    to="/"
                    class="btnColor hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Home
                  </Link>
                  <Link
                    to="/Statistics"
                    class="btnColor hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Statistics
                  </Link>
                  <Link
                    to="/AppliedJobs"
                    class="btnColor hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Applied Jobs
                  </Link>
                  <Link
                    to="/Blog"
                    class="btnColor hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Blog
                  </Link>
                </div>
              </div>
            </div>
            {/* <!-- Start Applying button --> */}
            <div class=" mt-4 py-5 right-0 flex-shrink-0 mr-2 BtnA">
              <a href="#" class="  text-sm font-medium p-7 BtnAText  ">
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
