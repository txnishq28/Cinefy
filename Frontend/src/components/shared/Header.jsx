import React from 'react'
import mainLogo from '../../assets/cinefy_white.png';
import {FaSearch} from 'react-icons/fa';
import useLocation from '../../context/useLocation';
import map from '../../assets/pin.gif'

const Header = () => {

    const {location , loading , error} = useLocation();
  return (
    <div className='w-full text-sm bg-black'>
        {/* Top Navbar*/ }
        <div className='px-4 md:px-8'>
            <div className='max-w-screen-xl mx-auto flex justify-between items-center py-3'>
                {/* Left Navbar*/ }
                <div className='flex items-center space-x-4'>
                    <img src={mainLogo} alt='logo' className='h-10 object-contain cursor-pointer'/>
                    <div className='relative'>
                        <input type='text'
                            placeholder='Search for Movies , Events , Concerts , Sports and Activities'
                            className=' border-3 border-indigo-950 rounded px-4 py-1.5 w-[450px] text-sm outline-none text-gray-400 '
                        />
                        <FaSearch className='absolute right-2 top-2.5 text-gray-400'/>
                    </div>
                </div>
                {/* Right Navbar*/ }
                <div className='flex items-center space-x-6'>
                    <div className='text-sm font-medium text-gray-200 cursor-pointer'>
                        {location && <img src={map} alt='loading...' className='w-10 h-10'/>}
                        {location && <p>{location} &nbsp; ▼ </p>}
                    </div>
                    <button className='bg-[#5C2D91] cursor-pointer text-amber-50 font-bold px-4 py-1.5 rounded text-sm'>
                        Sign in
                    </button>
                </div>
            </div>
        </div>
        {/* Bottom Navbar*/ }
        <div className=' bg-gray-800 px-4 md:px-8 text-gray-300'>
            <div className=' max-w-screen-xl mx-auto flex justify-between items-center py-2 '>
                <div className='flex items-center space-x-6 font-medium'>
                <span className='cursor-pointer hover:text-purple-700'>Movies</span>
                <span className='cursor-pointer hover:text-purple-700'>Stream</span>
                <span className='cursor-pointer hover:text-purple-700'>Events</span>
                <span className='cursor-pointer hover:text-purple-700'>Plays</span>
                <span className='cursor-pointer hover:text-purple-700'>Sports</span>
                <span className='cursor-pointer hover:text-purple-700'>Activities</span>
            </div>
            <div className='flex items-center space-x-6 text-sm'>
                <span className='cursor-pointer hover:underline'>ListYourShow</span>
                <span className='cursor-pointer hover:underline'>Corporates</span>
                <span className='cursor-pointer hover:underline'>Offers</span>
                <span className='cursor-pointer hover:underline'>Gift Cards</span>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Header