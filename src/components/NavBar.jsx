import React from 'react'
import logo from '../assets/codepenLogo.png'

function Navbar() {
    return (
        <div className='main lg:flex md:flex flex-wrap justify-between items-center px-4 bg-[#2f3640] py-4'>
            <div className="left">
                <div className="logo font-bold text-2xl text-white text-center">
                    <img className='w-44' src={logo} alt="" />
                </div>
            </div>
            <button className='text-white bg-blue-500 hover:bg-blue-700 font-semibold py-2 px-4 rounded transition duration-300'>
                Sign Up
            </button>
        </div>
    )
}

export default Navbar;
