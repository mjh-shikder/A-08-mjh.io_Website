import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getStoredApp } from "../Utility/addToDb";
import InstallCard from "../components/InstallCard";

const Installation = () => {

    const [installedList, setIsInsTalledList] = useState([])
  const allData = useLoaderData();

  useEffect(() => {
    const storedBookData = getStoredApp();
    const convertedToString = storedBookData.map((id) => parseInt(id));

    const installedList = allData.filter((app) =>
      convertedToString.includes(app.id)
    );

    setIsInsTalledList(installedList);
  }, []);

  return (
    <div className="bg-[#f5f5f5]">

    
    <div className="w-10/12 mx-auto  ">
      <h1 className="text-5xl font-bold text-gray-700 text-center pt-24 mb-6">
        Your Installed Apps
      </h1>
      <p className="text-center text-gray-600 mb-10 md:px-0 px-3">
        Explore All Trending Apps on the Market Develeoped by us
      </p>

      <div className="flex items-center justify-between gap-5 ">
        <h1 className="text-xl font-semibold text-gray-700 ">
          ({``})Apps Found
        </h1>

        <select
          value={``}
          onChange={``}
          className="border border-gray-300 rounded-md px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="High-Low">Downloads: High to Low</option>
          <option value="Low-High">Downloads: Low to High</option>
        </select>
      </div>
      {/* installed cards */}

          <div className="flex flex-col gap-2.5 pt-5 pb-10 min-h-[500px] ">
              {
                  installedList.map(app=><InstallCard app={app} key={app.id}></InstallCard>)
              }
      </div>
      </div>
      
      </div>
  );
};

export default Installation;
