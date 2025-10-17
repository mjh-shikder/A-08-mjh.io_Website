import React from "react";
import { useLoaderData } from "react-router";
import AppCard from "../components/AppCard";

const Apps = () => {
  const allData = useLoaderData();

  console.log(allData);

  return (
    <div className="bg-[#f5f5f5]  ">
      <h1 className="text-5xl font-bold text-gray-800 text-center pt-24 mb-6">
        Our All Applications
      </h1>
      <p className="text-center text-gray-600 mb-10 md:px-0 px-3">
        Explore All Apps on the Market Developed by us. We code for Millions
      </p>

      <div className="flex justify-between w-10/12 mx-auto my-7 items-center ">
        <h1 className="text-xl font-semibold text-gray-700 ">(28)Apps Found</h1>

        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" required placeholder="Search" />
        </label>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5 w-10/12 mx-auto pb-16">
        {allData.map((app) => (
          <AppCard app={app} key={app.id}></AppCard>
        ))}
      </div>
    </div>
  );
};

export default Apps;
