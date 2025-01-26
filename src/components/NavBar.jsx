import React from 'react'
import logo from '../assets/codepenLogo.png'


function Navbar() {
    function onSignIn(){
        
    }
    return (
        <div className="main bg-[#2f3640] py-4 px-6">
            <div className="lg:flex md:flex justify-between items-center">
                <div className="left mb-4 lg:mb-0">
                    <div className="logo font-bold text-2xl text-white text-center">
                        <img className="w-44 mx-auto" src={logo} alt="Logo" />
                    </div>
                </div>
                <div className="right flex justify-center lg:justify-end">
                    <button onClick={onSignIn} className="text-gray-100 cursor-pointer bg-gray-800 hover:bg-gray-700 font-semibold py-2 px-6 rounded-lg transition duration-300">
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
