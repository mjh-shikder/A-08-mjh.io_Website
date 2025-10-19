import React from "react";
import noAppsFound from "./../../assets/App-Error.png";
import { Link } from "react-router";

const NoAppsFound = () => {
  return (
    <div className="flex flex-col items-center justify-center md:px-0 px-4 ">
      <img className="m-10 md:px-0 px-4 " src={noAppsFound} alt="" />
      <h1 className="text-3xl font-semibold text-gray-700 mt-7">
        Oops!! APP NOT FOUND
          </h1>
          <p className="text-gray-500 my-3.5">
        The App you are searching is not found on our system.
          </p>
      <Link to={"/"}>
        <button className="btn px-7 mt-7 bg-gradient-to-br text-white from-[#6630e4] to-[#bb8bff]">
          Go Back
        </button>
      </Link>
    </div>
  );
};

export default NoAppsFound;
