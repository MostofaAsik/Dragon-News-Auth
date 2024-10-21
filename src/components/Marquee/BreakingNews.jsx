import React from 'react';
import Marquee from 'react-fast-marquee';

const BreakingNews = () => {
    return (
        <div className='flex '>
            <button className="btn btn-secondary">Breaking News</button>
            <Marquee className='text-3xl' pauseOnHover={true} speed={100}>
                I can be a React component, multiple React components, or just some text.
            </Marquee>
        </div>
    );
};

export default BreakingNews;