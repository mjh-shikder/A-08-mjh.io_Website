import React from 'react';
import { FaStar } from 'react-icons/fa';

const AppCard = ({ app }) => {

    const { title, id, ratingAvg, downloads, image } = app
    
    const firstDownloadDigit = downloads.toString()[0];
   
    return (
        <div className='bg-white p-3 rounded-xl hover:shadow-md hover:cursor-pointer'>
            <div className=''>
                <div className=' p-5  rounded-xl bg-gray-100'>
                <img src={image} alt="card-image" />
                </div>
                <h1 className='font-semibold text-gray-700 my-2.5'>{title}</h1>
                <div className='flex items-center justify-between mb-2'>
                    <div className='flex items-center bg-green-100 px-3 py-0.5 rounded-md border border-emerald-200 text-green-600 font-medium'><p>{firstDownloadDigit}M</p></div>
                    <div className='flex items-center  bg-amber-100 px-3 py-0.5 rounded-md border border-amber-200 text-amber-600 font-medium'><FaStar></FaStar><p>{ratingAvg}</p></div>
                </div>
           </div>
            
            
        </div>
    );
};

export default AppCard;