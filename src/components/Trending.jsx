import React from 'react';
import AppCard from './AppCard';
import { Link } from 'react-router';

const Trending = ({ trending }) => {
    
    
    
    return (
        <>
            <h1 className='text-5xl font-bold text-gray-800 text-center pt-24 mb-6'>Trending Apps</h1>
            <p className='text-center text-gray-600 px-3.5 md:px-0'>Explore All Trending Apps on the Market Developed by Us</p>


        <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 w-10/12 mx-auto gap-4 py-7 md:py-16'>
            
            {
                trending.map(app=><AppCard app={app} key={app.id}></AppCard>)
           }
            </div>

            <Link to={'/apps'} className='flex justify-center pb-16 '>
                <button className='bg-gradient-to-br from-[#632ee3] to-[#9f62f2] px-7 py-3 rounded-md
                 text-white 

                
                '>
                    Show All</button></Link>
         </>
    );
};

export default Trending;