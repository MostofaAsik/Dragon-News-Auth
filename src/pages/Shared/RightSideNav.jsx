import React from 'react';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
 import Qzone1 from '../../assets/qZone1.png'
 import Qzone2 from '../../assets/qZone2.png'
 import Qzone3 from '../../assets/qZone3.png'

const RightSideNav = () => {
    return (
        <div className='flex flex-col gap-5 md:flex-col w-full px-10'>
            <div>
                <h2 className='text-2xl mb-3'>LogIn With</h2>
                <button className="btn btn-outline flex items-center">
                    <FaGoogle></FaGoogle>
                    LogIn With Google
                </button>
                <button className="btn btn-outline flex items-center mt-2">
                    <FaGithub></FaGithub>
                    LogIn With Github
                </button>
            </div>
            <div className=''>
                <h2 className='text-2xl mb-3 mt-3'>Find Us</h2>
                <a href="#" className='flex items-center gap-2 mb-2 mt-3 border rounded-t-lg px-4 py-2'>
                    <FaFacebook />
                    <span>Facebook</span>
                </a>
                <a href="#" className='flex items-center gap-2 mb-2 mt-3 border rounded-t-lg px-4 py-2'>
                    <FaInstagram />
                    <span>Instagram</span>
                </a>
                <a href="#" className='flex items-center gap-2 mb-2 mt-3 border rounded-t-lg px-4 py-2'>
                    <FaTwitter />
                    <span>Twitter</span>
                </a>
               
            </div>
            <div>
                <h2 className='text-2xl mt-4 mb-3'>Q Zone</h2>
               <img src={Qzone1} alt="" />
               <img src={Qzone2} alt="" />
               <img src={Qzone3} alt="" />
            </div>
        </div>
    );
};

export default RightSideNav;