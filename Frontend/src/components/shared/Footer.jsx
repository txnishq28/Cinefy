import React from 'react'
import { FaFacebookF, FaInstagram,  FaLinkedinIn,  FaPinterestP, FaTwitter, FaYoutube } from 'react-icons/fa'
import mainLogo from '../../assets/cinefy_white.png';

const Footer = () => {
  return (
    <footer className='bg-black text-gray-500 text-sm'>
        <div className='border-t border-gray-700 w-full'/>
            <div className='flex flex-col items-center py-6'>
            {/* */}
                <img src={mainLogo} alt='Cinefy' className='w-28 mb-4'/>
            

            {/* */}
            <div className='flex space-x-4 mb-4'>
                <FaFacebookF className=' w-8 h-8 p-2 rounded-full bg-gray-600 text-white'/>
                <FaTwitter className=' w-8 h-8 p-2 rounded-full bg-gray-600 text-white'/>
                <FaInstagram className=' w-8 h-8 p-2 rounded-full bg-gray-600 text-white'/>
                <FaYoutube className=' w-8 h-8 p-2 rounded-full bg-gray-600 text-white'/>
                <FaPinterestP className=' w-8 h-8 p-2 rounded-full bg-gray-600 text-white'/>
                <FaLinkedinIn className=' w-8 h-8 p-2 rounded-full bg-gray-600 text-white'/>
            </div>

            {/* */}
            <p className="text-center text-xs px-4 max-w-4xl">
                Copyright 2026 © Cinefy Pvt. Ltd. All Rights Reserved.
                <br />
            </p>
            </div>
    </footer>
  )
}

export default Footer