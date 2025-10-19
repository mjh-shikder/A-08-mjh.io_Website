import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router";
import downloadIcon from "./../assets/icon-downloads.png";
import avgRatingIcon from "./../assets/icon-ratings.png";
import totalReviewIcon from "./../assets/icon-review.png";
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { ToastContainer, toast } from 'react-toastify';

const AppDetails = () => {
    const [isInsTalled, setIsInsTalled] = useState(false);

    const handleInstall = () => {

        setIsInsTalled(true);

       

        toast.success('App Successfully Installed!', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });
    }

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

  const ratingsRevers = [...ratings].reverse();

  const data = ratingsRevers;

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
          <button onClick={handleInstall}  className={`btn bg-[#00cf8d] text-white px-6 ${isInsTalled ? 'opacity-70 cursor-not-allowed ' : ''} `}>
            {isInsTalled ? 'Installed' : `Install Now (${size}MB)`}
                  </button>
                  <ToastContainer />
              </div>
              
      </div>
      {/* Border */}
      <div className="border-t border-gray-300 py-5 w-10/12 mx-auto "></div>
      {/* Border */}

      <div className="  w-10/12 mx-auto pb-12">
        <h2 className="font-semibold text-gray-700 mb-4">Ratings</h2>

        {/* Rechart */}
        <div className="w-[full] h-[250px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} layout="vertical" width={500} height={500}>
              <XAxis type="number" dataKey={"count"}></XAxis>
              <YAxis dataKey={"name"} type="category"></YAxis>
              <Bar dataKey="count" fill="#b284fd" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Border */}
        <div className="border-t border-gray-300 my-14  mx-auto "></div>
        {/* Border */}

        <h2 className="font-semibold text-gray-700 mb-4">Description</h2>
        
        <p className="text-gray-500 md:hidden ">
          {description}
          This focus app takes the proven Pomodoro technique and makes it even
          more practical for modern lifestyles. 
          <br />
          <br />        Users can create custom
          work and break intervals, track how many sessions they complete each
          day, and review detailed statistics about their focus habits over
                  time.
                  <br />
          <br />   The design is minimal and calming, reducing cognitive load so
          you can focus entirely on the task at hand. 
         
        </p>
        <p className="text-gray-500 hidden md:block">
          {description}
          This focus app takes the proven Pomodoro technique and makes it even
          more practical for modern lifestyles. Instead of just setting a timer,
          it builds a complete environment for deep work, minimizing
          distractions and maximizing concentration. Users can create custom
          work and break intervals, track how many sessions they complete each
          day, and review detailed statistics about their focus habits over
          time. The design is minimal and calming, reducing cognitive load so
          you can focus entirely on the task at hand. Notifications gently let
          <br />
          <br />
          you know when to pause and when to resume, helping you maintain a
          healthy rhythm between work and rest. A unique feature of this app is
          the integration of task lists with timers. You can assign each task to
          a specific Pomodoro session, making your schedule more structured. The
          built-in analytics show not only how much time you’ve worked but also
          which tasks consumed the most energy. This allows you to reflect on
          your efficiency and adjust your workflow accordingly.
          <br />
          <br />
          The app also includes optional background sounds such as white noise,
          nature sounds, or instrumental music to create a distraction-free
          atmosphere. For people who struggle with procrastination, the app
          provides motivational streaks and achievements. Completing multiple
          Pomodoro sessions unlocks milestones, giving a sense of
          accomplishment.
          <br />
          <br />
        </p>
      </div>
    </div>
  );
};

export default AppDetails;
