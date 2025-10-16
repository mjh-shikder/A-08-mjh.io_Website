import React from 'react';
import Banner from '../components/Banner';
import Trending from '../components/Trending';
import { useLoaderData } from 'react-router';



const Home = () => {
    const trending = useLoaderData()
    
    
    return (
        <div className='bg-[#f5f5f5]'>
            <Banner></Banner>
            <Trending trending={trending}></Trending>
            
        </div>
    );
};

export default Home;