import React from 'react';
import logo from '../../assets/logo.png'
import moment from 'moment';

const Header = () => {

    return (
        <div className='text-center'>
            <img className='mx-auto' src={logo} alt="logoPic" />
            <h2 className='text-xl'>Journalism Without Fear or Favour</h2>
            <p>{moment().format("dddd, MMMM D, YYYY ")}</p>
        </div>
    );
};

export default Header;