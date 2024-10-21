import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { to } from './../../../node_modules/moment/src/lib/moment/to';

import image1 from '../../assets/1.png'
import image2 from '../../assets/2.png'
import image3 from '../../assets/3.png'

const LeftSideNav = () => {
    const [categories,setCategories]=useState([])

    useEffect(() => {
        fetch('categories.json')
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])

    return (
        <div>
            <h2 className='mb-3 text-3xl'>All Category</h2>
            <div>
                {
                    categories.map(category => <li key={category.id}
                        className='list-none text-xl px-3'
                    >
                        <Link to={`/category/${category.id}`}>{category.name}</Link>
                    </li>)
                }
         </div>
            
            <div className='mt-6 space-y-3 mb-4'>
                <div >
                    <img src={image1} alt="image" />
                    <h2>Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
                    <p className='flex justify-between'>Sports <span>Jan 4, 2022</span></p>
                </div>
                <div >
                    <img src={image2} alt="image" />
                    <h2>Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
                    <p className='flex justify-between'>Sports <span>Jan 4, 2022</span></p>
                </div>
                <div >
                    <img src={image3} alt="image" />
                    <h2>Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
                    <p className='flex justify-between'>Sports <span>Jan 4, 2022</span></p>
                </div>

            </div>
        </div>
    );
};

export default LeftSideNav;