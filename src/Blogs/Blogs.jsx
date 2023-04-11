import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Blogs = () => {
  return (
    <div>
      <Header />
      <div className="border-4 border-red-700 mx-40 rounded-xl ">
        <div className="text-start m-5 border-2 mx-20 rounded-lg p-4">
             <h3 className="font-bold text-3xl">A. When should you use context API?</h3>
             <p className=""> The Context API in React should be used when there is a need to share data <br /> betweens components that are not directly related in the component tree. <br /> It allows for a more efficient and scalable way of passing data <br /> without the need for prop drilling or creating a complex hierarchy of components.</p>
        </div>
        <div className="m-5 border-2 mx-20 rounded-lg p-4">
             <h3 className="font-bold text-3xl">B. What is a custom hook?</h3>
             <p className="text-start">A custom hook in React is a reusable function that encapsulates a specific <br /> behavior or logic that can be shared between multiple components. <br /> It allows developers to extract common functionality and use it across <br /> different parts of their application, making code more modular and easier to maintain.</p>
        </div>
        <div className="m-5 border-2 mx-20 rounded-lg p-4">
             <h3 className="font-bold text-3xl">C. What is useRef?</h3>
             <p className="text-start">useRef is a React hook that allows you to create a mutable object <br /> that persists across renders, without triggering a re-render when its value changes. <br /> It is commonly used to store references to DOM elements or other <br /> values that need to be preserved between renders.</p>
        </div>
        <div className="m-5 border-2 mx-20 rounded-lg p-4">
             <h3 className="font-bold text-3xl">D. What is useMemo?</h3>
             <p className="text-start">useMemo is a React hook that allows you to memoize expensive <br />
             computations so that they only re-run when their dependencies change. <br /> It helps to optimize the performance of your React applications by <br /> reducing unnecessary re-renders.</p>
        </div>
        
        
        
      </div>
      <Footer />
    </div>
  );
};

export default Blogs;
