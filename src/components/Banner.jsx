import React from "react";
import playstore from "./../assets/playstore.png";
import appStore from "./../assets/appsote.png";
import bannerImage from "./../assets/hero.png";

const Banner = () => {
  return (
    <div className="">
      <div className="md:w-11/12 mx-auto ">
        <h1 className="md:text-6xl text-4xl font-bold text-center mt-24 text-gray-700 mb-8">
          We Build
          <br />
          <span className="font-extrabold text-[#8150e9] ">Productive</span>
          Apps
        </h1>
        <p className="md:text-xl text-gray-500 text-center ">
          At MJH.IO , we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. <br /> Our goal is to turn your
          ideas into digital experiences that truly make an impact.
        </p>

        <div className="flex items-center justify-center gap-3 mt-12">
          <div className="flex items-center border border-gray-300 rounded-md px-2.5 py-1 ">
            <img src={playstore} alt="" />
            <h2 className="font-semibold ">Google Play</h2>
          </div>
          <div className="flex items-center border border-gray-300 rounded-md px-2.5 py-1 ">
            <img src={appStore} alt="" />
            <h2 className="font-semibold ">App Store</h2>
          </div>
        </div>
      </div>

      <div className="mt-12 flex justify-center px-3 md:px-0">
        <img src={bannerImage} alt="" />
      </div>
          
          <div className="bg-gradient-to-br from-[#632ee3] to-[#9f62f2] ">
              <div className="w-10/12 mx-auto">
                  
              
                  <h1 className="pt-20 text-center text-4xl font-bold text-white ">Trusted by Millions, Built for You</h1>
                  
                  <div className="text-white flex md:flex-row flex-col justify-between mt-10 ">
                      
                 <div className="pb-20 text-center">
                  <p className="font-light text-gray-200 ">Total Downloads</p>
                  <h1 className="text-5xl font-bold my-5">29.6M</h1>
                  <p className="font-light text-gray-200">21% More Than Last Month</p>
                </div> 
                 <div className="pb-20 text-center">
                  <p className="font-light text-gray-200 ">Total Reviews</p>
                  <h1 className="text-5xl font-bold my-5">906K</h1>
                  <p className="font-light text-gray-200">46% More Than Last Month</p>
                </div> 
                 <div className="pb-20 text-center">
                  <p className="font-light text-gray-200 ">Active Apps</p>
                  <h1 className="text-5xl font-bold my-5">132+</h1>
                  <p className="font-light text-gray-200">31 More will Launch</p>
                </div> 
                      
                </div>
              
              
            </div>
        </div>

    </div>
  );
};

export default Banner;
