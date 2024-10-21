import React from 'react';
import Header from '../Shared/Header';

import RightSideNav from '../Shared/RightSideNav';
import Navbar from '../Shared/Navbar';

const NewsDetails = () => {
    return (
        <div>
            <Header />
            <Navbar />
            <div className='grid grid-cols-1 md:grid-cols-4 mt-4'>
                <div className='md:col-span-3'>
                    <h2>News Details here</h2>
                </div>
                <div className=''>
                    <RightSideNav />
                </div>
            </div>

        </div>
    );
};

export default NewsDetails;