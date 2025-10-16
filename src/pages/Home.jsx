import React from 'react';
import Banner from '../components/Banner';
import Trending from '../components/Trending';
import { useLoaderData } from 'react-router';



const Home = () => {
    const trending = useLoaderData()
    
    
    return (
        <div>
            <Banner></Banner>
            <Trending trending={trending}></Trending>
            
        </div>
    );
};

export default Home;