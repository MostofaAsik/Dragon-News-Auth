import React, { useContext } from "react";
import { FaUser, FaEnvelope, FaLock, } from "react-icons/fa";
import { Link } from "react-router-dom";
import SocialIcon from "../SocialIcon/SocialIcon";
import Navbar from "../Shared/Navbar";
import { IoMdPhotos } from "react-icons/io";
import { AuthContext } from "../../providers/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import { updateProfile } from "firebase/auth";


const SignUp = () => {
    const { createUser } = useContext(AuthContext)



    const handleSignUp = (e) => {
        e.preventDefault()
        const firstName = e.target.name.value
        const photoUrl = e.target.purl.value
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(firstName, photoUrl, email, password);
        createUser(email, password)
            .then(result => {
                console.log(result.user)
                toast.success(`You are Successfully Register on this website`)
                updateProfile(result.user, {
                    displayName: firstName, photoURL: photoUrl
                })
                e.target.reset()
            })
            .catch(err => {
                console.log(err.message);
                toast.error("Something went wrong.Please try again later!!")
            })

    }


    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gradient-to-r from-gray-200 to-blue-200 flex items-center justify-center p-4">
                <div className="bg-white shadow-xl rounded-lg p-6 max-w-md w-full">

                    <div id="signup">
                        <h1 className="text-2xl font-bold text-center mb-4">Register</h1>
                        <form onSubmit={handleSignUp}>
                            <div id="signUpMessage" className="hidden"></div>
                            <div className="relative mb-4">
                                <FaUser className="absolute left-2 top-3 text-gray-400" />
                                <input
                                    type="text"

                                    name="name"
                                    placeholder="Your Name"
                                    className="w-full border-b border-gray-400 focus:border-blue-500 focus:outline-none pl-8 py-2"
                                    required
                                />

                            </div>
                            <div className="relative mb-4">
                                <IoMdPhotos className="absolute left-2 top-3 text-gray-400" />
                                <input
                                    type="text"
                                    id="PUrl"
                                    name="purl"
                                    placeholder="Photo Url"
                                    className="w-full border-b border-gray-400 focus:border-blue-500 focus:outline-none pl-8 py-2"
                                    required
                                />

                            </div>
                            <div className="relative mb-4">
                                <FaEnvelope className="absolute left-2 top-3 text-gray-400" />
                                <input
                                    type="email"
                                    id="rEmail"
                                    name="email"
                                    placeholder="Email"
                                    className="w-full border-b border-gray-400 focus:border-blue-500 focus:outline-none pl-8 py-2"
                                    required
                                />

                            </div>
                            <div className="relative mb-4">
                                <FaLock className="absolute left-2 top-3 text-gray-400" />
                                <input
                                    type="password"
                                    id="rPassword"
                                    name="password"
                                    placeholder="Password"
                                    className="w-full border-b border-gray-400 focus:border-blue-500 focus:outline-none pl-8 py-2"
                                    required
                                />

                            </div>
                            <button
                                type="submit"
                                className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition duration-300"
                            >
                                Sign Up
                            </button>
                        </form>
                        <div className="text-center my-4">---------- or ---------</div>
                        <SocialIcon />
                        <div className="flex justify-between">
                            <p>Already have an account?</p>
                            <Link to='/signin'>
                                <button
                                    className="text-blue-500 hover:underline"
                                >
                                    Sign In
                                </button>
                            </Link>
                        </div>
                    </div>

                </div>
                <Toaster />
            </div>
        </>
    );
};

export default SignUp;
