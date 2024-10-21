import React from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Header from '../../pages/Shared/Header';
import Navbar from '../../pages/Shared/Navbar';
import LeftSideNav from '../../pages/Shared/LeftSideNav';
import RightSideNav from './../../pages/Shared/RightSideNav';
import BreakingNews from '../Marquee/BreakingNews';
import NewsCard from './NewsCard';

const Home = () => {

    const news = useLoaderData()
    console.log(news);

    return (
        <div>
            <Header />
            <BreakingNews />
            <Navbar />
            <div className='grid grid-cols-1 md:grid-cols-4 gap-7'>
                <div>
                    <LeftSideNav />
                </div>
                <div className='md:col-span-2'>
                    {
                        news.map(singleNews => <NewsCard
                            key={singleNews._id}
                            news={singleNews}
                        ></NewsCard>)
                    }
                </div>
                <div>
                    <RightSideNav />
                </div>
            </div>
        </div>
    );
};

export default Home;