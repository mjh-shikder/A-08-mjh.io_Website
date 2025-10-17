import React from "react";
import { useLoaderData, useParams } from "react-router";
import downloadIcon from "./../assets/icon-downloads.png";
import avgRatingIcon from "./../assets/icon-ratings.png";
import totalReviewIcon from "./../assets/icon-review.png";
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis } from "recharts";

const AppDetails = () => {
  
  const { id } = useParams();
  const appId = parseInt(id);
  const allData = useLoaderData();
  const singleData = allData.find((app) => app.id === appId);
  const {
    image,
    title,
    companyName,
    description,
    size,
    reviews,
    ratingAvg,
    downloads,
    ratings,
  } = singleData;

    // console.log(ratings.map(rating => console.log(rating.count)));
    
//     const ratingDataArry = ratings.map(rating => rating)
//     const ratingDataCount = ratingDataArry.map(rat=>rat.count)
//     const ragingDataName = ratingDataArry.map(rat=>rat.name)

//      console.log(ratingDataCount, ragingDataName);

//     const Data = ragingDataName.map((name, index) => ({
//         name: name,
//         count: ratingDataCount[index]
//     }))

// console.log(Data);

const ratingsRevers = [...ratings].reverse()


 const data = ratingsRevers
    

  const firstDownloadDigit = downloads.toString()[0];
  const firstTwoReviewDigits = reviews.toString().slice(0, -2);

  return (
    <div className="bg-[#f5f5f5] ">
      <div className="flex md:flex-row flex-col items-center gap-10 py-20 md:w-10/12 mx-auto ">
        <div className="md:w-3/12 w-5/12 bg-white rounded-xl shadow-md ">
          <img className="" src={image} alt="app-logo" />
        </div>
        <div>
          <h1 className="text-3xl font-semibold text-gray-800 my-2.5">
            {title}
          </h1>
          <p className="text-gray-500">
            Developed by{" "}
            <span className="text-indigo-600 font-semibold">
              {companyName}{" "}
            </span>{" "}
          </p>

          <div className="border-t border-gray-300 mt-5 md:w-[900px] "></div>

          <div className="flex gap-10 my-5">
            <div className="flex flex-col items-center ">
              <img
                className="w-[30px] mb-1.5"
                src={downloadIcon}
                alt="Download-icon"
              />
              <p className="text-xs text-gray-600">Downloads</p>
              <h1 className="text-3xl font-bold text-gray-800">
                {firstDownloadDigit}M
              </h1>
            </div>
            <div className="flex flex-col items-center ">
              <img
                className="w-[30px] mb-1.5"
                src={avgRatingIcon}
                alt="ratings-icon"
              />
              <p className="text-xs text-gray-600">Average Ratings</p>
              <h1 className="text-3xl font-bold text-gray-800">{ratingAvg}</h1>
            </div>
            <div className="flex flex-col items-center ">
              <img
                className="w-[30px] mb-1.5"
                src={totalReviewIcon}
                alt="reviw-icon"
              />
              <p className="text-xs text-gray-600">Total Reviews</p>
              <h1 className="text-3xl font-bold text-gray-800">
                {firstTwoReviewDigits}K
              </h1>
            </div>
          </div>
          <button className="btn bg-[#00cf8d] text-white px-6 ">
            Install Now ({size} MB)
          </button>
        </div>
          </div>
          {/* Rechart */}

          <div className="border-t border-gray-300 py-5  "></div>
          <h2 className="font-semibold text-gray-700 mb-4">Ratings</h2>
          
          
          <div className="  md:h-[600px] h-[550px]  ">
              
        <div className="w-[600px] h-[500px] ">
          <ResponsiveContainer width="100%" height="100%">
                  <BarChart  data={data} layout="vertical" width={500} height={500}>
                      <XAxis  type="number" dataKey={'count'}></XAxis>
                      <YAxis dataKey={'name'} type="category"  ></YAxis>
            <Bar dataKey="count" fill="#b284fd" />
          </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
