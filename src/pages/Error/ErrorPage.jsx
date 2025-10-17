import React from "react";
import errorImg from "./../../assets/error-404.png";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center md:px-0 px-4 ">
      <img className="mt-44 md:px-0 px-4 " src={errorImg} alt="" />
      <h1 className="text-3xl font-semibold text-gray-700 mt-7">
        Oops, Page Not Found!
          </h1>
          
      <p className="text-gray-500 my-3.5">
        The Page You are Looking for is Not Available.
          </p>
       <Link to={'/'}>
      <a
        className="btn px-7 bg-gradient-to-br text-white from-[#6630e4] to-[#bb8bff]
                "
        href="https://github.com/mjh-shikder"
      >
        Go Back
          </a>
      </Link>       
    </div>
  );
};

export default ErrorPage;
