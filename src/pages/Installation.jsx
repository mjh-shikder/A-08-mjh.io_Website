import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getStoredApp, removeFromStoredDb } from "../Utility/addToDb";
import InstallCard from "../components/InstallCard";
import { toast} from 'react-toastify';

const Installation = () => {
  const allData = useLoaderData();

  let [installedList, setIsInsTalledList] = useState([]);

  const [sortOption, setSortOptions] = useState("High-Low");

  useEffect(() => {
    const storedBookData = getStoredApp();
    const convertedToString = storedBookData.map((id) => parseInt(id));

    const installedList = allData.filter((app) =>
      convertedToString.includes(app.id)
    );

    setIsInsTalledList(installedList);
  }, [allData]);

  const handleSortChange = (e) => {
    const newSortOption = e.target.value;
    setSortOptions(newSortOption);
    const sortedList = [...installedList].sort((a, b) => {
      if (sortOption === "High-Low") {
        return b.downloads - a.downloads;
      } else {
        return a.downloads - b.downloads;
      }
    });
    setIsInsTalledList(sortedList);
  };

  // Unistall button
  const handleUninstall = (appId) => {
    toast.warn('App Unistalled')
    removeFromStoredDb(appId);
    const updatedList = installedList.filter((app) => app.id !== appId);
    setIsInsTalledList(updatedList);

    
  };

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
            ({installedList.length})Apps Found
          </h1>

          <select
            value={sortOption}
            onChange={handleSortChange}
            className="border border-gray-300 rounded-md px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="High-Low">Downloads: High to Low</option>
            <option value="Low-High">Downloads: Low to High</option>
          </select>
        </div>
        {/* installed cards */}

        <div className="flex flex-col gap-2.5 pt-5 pb-10 min-h-[500px] ">
          {installedList.map((app) => (
            <InstallCard
              handleUninstall={() => handleUninstall(app.id)}
              app={app}
              key={app.id}
              ></InstallCard>
            ))}
        </div>
      </div>
           
    </div>
  );
};

export default Installation;
