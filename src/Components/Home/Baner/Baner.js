import React from "react";
import { Link } from "react-router-dom";
import "./Baner.css";

const Baner = () => {
  return (
    <div className="w-full tt-baner">
      <div className="lg:mt-14 h-2/3 lg:h-full w-full flex justify-center p-4 ">
        <div className="w-full lg:h-1/2 lg:w-1/2 lg:ml-24 sm:mt-32 lg:mt-52 tt-baner-color text-center lg:text-center">
          {/* <div className="absolute sm:w-1/2 h-1/2 my-auto lg:w-1/2 lg:ml-24 sm:mt-32 lg:mt-48 text-white text-right"> */}
          <h1 className="text-neutral-900 text-4xl lg:text-6xl font-bold mb-6">
            Best Ride Sharing App!
          </h1>
          <p className=" text-neutral-900 sm:text-2xl lg:text-3xl mb-6">
            Ride Smoothly Earn Smoothly!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Baner;
