import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import AppCard from "../components/AppCard";
import NoAppsFound from "./Error/NoAppsFound";

const Apps = () => {
  const allData = useLoaderData();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredApps, setFilteredApps] = useState(allData);

  const [sortOption, setSortOptions] = useState("High-Low")

  useEffect(() => {
    let filtered = allData.filter((app) => app.title.toLowerCase().includes(searchQuery.toLocaleLowerCase()));


    filtered = [...filtered].sort( (a, b) => {
      if (sortOption === "High-Low") {
        return b.downloads - a.downloads;
      }
      else {
        return a.downloads - b.downloads;
      }
    })


    setFilteredApps(filtered)

  }, [searchQuery, sortOption, allData]);

  // Handle search 
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
  

  // sort option
  const handleSortChange = e => {
    setSortOptions(e.target.value);



  }

  return (
    <div className="bg-[#f5f5f5]  ">
      <h1 className="text-5xl font-bold text-gray-800 text-center pt-24 mb-6">
        Our All Applications
      </h1>
      <p className="text-center text-gray-600 mb-10 md:px-0 px-3">
        Explore All Apps on the Market Developed by us. We code for Millions
      </p>

      <div className="flex justify-between w-10/12 mx-auto my-7 items-center ">
        <div className="flex items-center gap-5 ">

        
        <h1 className="text-xl font-semibold text-gray-700 ">({filteredApps.length})Apps Found</h1>

         <select
            value={sortOption}
            onChange={handleSortChange}
            className="border border-gray-300 rounded-md px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="High-Low">Downloads: High to Low</option>
            <option value="Low-High">Downloads: Low to High</option>
          </select>
</div>
        <label className="input rounded-md">
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
          <input type="search"
            required
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </label>
      </div>

      <div className={`${filteredApps.length > 0 ? "grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5"
        : ""
      } w-10/12 mx-auto pb-16`}>
        { filteredApps.length > 0 ? (filteredApps.map(app => <AppCard app={app} key={app.id}></AppCard>))  :
          (
            searchQuery && (
              <NoAppsFound></NoAppsFound>
            )
          )


        }
      </div>
    </div>
  );
};

export default Apps;
