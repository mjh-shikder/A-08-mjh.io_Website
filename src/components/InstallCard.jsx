import { Download, Star } from "lucide-react";
import React from "react";
import { toast, ToastContainer } from "react-toastify";

const InstallCard = ({ app, handleUninstall }) => {

  const { image, title, size, downloads, ratingAvg } = app;
  const firstDownloadDigit = downloads.toString()[0];

  const showingToastify = () => {toast.warn('App Unistalled')}


  return (
    <div className="bg-white rounded-md  ">
      <div className="flex items-center justify-between ">
        <div className="flex items-center gap-2.5 ">

          <div className="w-20  p-2" >
          <img className="bg-[#f5f5f5] rounded-md p-2 " src={image} alt="" />
          </div>
          <div>
            <h1 className="text-lg font-semibold text-gray-600 ">{title} </h1>
            <div className="flex items-center gap-3.5">
              <div className="flex items-center">
                <Download color="#10d697" size={18}></Download>
                <p className="text-[#10d697] font-medium ">{firstDownloadDigit}M</p>
              </div>
              <div className="flex items-center">
                <Star color="#ffa500" size={18}></Star>
                <p className="text-[#ffa500] font-medium ">{ratingAvg}</p>
              </div>
              <div>
                <p className="text-gray-500 font-medium">{size} MB </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <button onClick={() => { handleUninstall(); showingToastify()}}  className="btn mr-3 bg-[#00d390] text-white ">Unistall</button>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default InstallCard;
