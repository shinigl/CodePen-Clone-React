import React, { useEffect, useState } from 'react';
import logo from '../assets/codepenLogo.png';
import { useNavigate, useLocation } from 'react-router-dom'; 
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Navbar() {
    const [isLogin, setLogin] = useState(false);
    const userName = localStorage.getItem('name');
    const userPhoto = localStorage.getItem('photo'); 

    useEffect(() => {
        if (userName) {
            setLogin(true);
        }
    }, [userName]);

    const navigate = useNavigate();
    const location = useLocation();  // Use location hook to check the current route

    function onSignIn() {
        navigate('/login');
    }

    function onLogout() {
        localStorage.removeItem('name');
        localStorage.removeItem('photo'); 
        setLogin(false);
        toast.success('You have logged out successfully!', {
            autoClose: 1500 
        });
        setTimeout(()=>{
        navigate('/')
        },2000)
    }

    function onLogoClick(){
        navigate('/')
    }

    function onAskAI() {
        navigate('/ask-ai');
    }

    // Hide "Ask AI" button if on the /ask-ai route
    const isAskAIPage = location.pathname === '/ask-ai';

    return (
        <div className="main bg-[#2f3640] py-4 px-6">
            <div className="lg:flex md:flex justify-between items-center">
                <div className="left mb-4 lg:mb-0">
                    <div className="logo font-bold text-2xl text-white text-center">
                        <img onClick={onLogoClick} className=" w-44 mx-auto cursor-pointer" src={logo} alt="Logo" />
                    </div>
                </div>
                <div className="right flex justify-center lg:justify-end items-center">
                    {!isLogin ? (
                        <button
                            onClick={onSignIn}
                            className="text-gray-100 cursor-pointer bg-gray-800 hover:bg-gray-700 font-semibold py-2 px-6 rounded-lg transition duration-300"
                        >
                            Sign Up
                        </button>
                    ) : (
                        <div className="logoutContainer flex items-center space-x-4">
                            {/* Displaying the profile picture and username */}
                            <img
                                src={userPhoto}
                                alt="Profile"
                                className="w-10 h-10 rounded-full border-2 border-white"
                            />
                            <p className="text-white text-lg font-semibold">Hey, {userName}!</p>
                            <button
                                onClick={onLogout}
                                className="text-white cursor-pointer bg-red-600 hover:bg-red-500 font-semibold py-2 px-4 rounded-lg transition duration-300"
                            >
                                Logout
                            </button>
                        </div>
                    )}

                    {/* Conditionally render "Ask AI" button */}
                    {!isAskAIPage && (
                        <button
                            onClick={onAskAI}
                            className="text-gray-100 cursor-pointer bg-blue-600 hover:bg-blue-500 font-semibold py-2 px-6 ml-4 rounded-lg transition duration-300"
                        >
                            Ask AI
                        </button>
                    )}
                </div>
            </div>

            {/* ToastContainer to render toast notifications */}
            <ToastContainer
                position="top-right"
                hideProgressBar={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
}

export default Navbar;
