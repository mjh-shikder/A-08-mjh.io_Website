import React from 'react';
import AppCard from './AppCard';

const Trending = ({ trending }) => {
    
    
    
    return (
        <div>
            {
                trending.map(app=><AppCard app={app} key={app.id}></AppCard>)
           }
        </div>
    );
};

export default Trending;