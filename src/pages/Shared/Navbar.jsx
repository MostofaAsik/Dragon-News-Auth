import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import userImg from '../../assets/user.png'
import { AuthContext } from '../../providers/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)

    console.log(user);
    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success('User Successfully LogOut')
            })
            .catch(err => console.log(err.message))
    }

    const navLinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/carrer'>Carrer</NavLink></li>

    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navLinks}
                    </ul>
                </div>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end flex gap-3">

                <div className="w-10 rounded-full">

                    {
                        user ?
                            <img className="w-10 rounded-full" alt="Profile" src={user.photoURL} title={user.displayName} />
                            :
                            <img alt="Profile" src={userImg} />
                    }

                </div>
                {
                    user ?
                        <button onClick={handleLogOut} className='btn'>LogOut</button>
                        :
                        <Link to={'/signin'}>
                            <button className='btn'>logIn</button>
                        </Link>
                }

                <Toaster />

            </div>
        </div>
    );
};

export default Navbar;