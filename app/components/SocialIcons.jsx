'use client';
import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp, FaXTwitter } from "react-icons/fa6";

function SocialIcons() {
  return (
    <div className=' text-2xl'>
    <ul className='flex gap-2'>
    <li><FaWhatsapp className='cursor-pointer box-content px-2 py-2 text-white hover:bg-gray-400 > hover:rounded-full hover:text-white'/></li>
     <li><FaFacebook className='cursor-pointer box-content px-2 py-2 text-white hover:bg-gray-400 > hover:rounded-full hover:text-white'/></li>
     <li><FaInstagram className='cursor-pointer box-content px-2 py-2 text-white hover:bg-gray-400 > hover:rounded-full hover:text-white'/></li>
     <li><FaLinkedin className='cursor-pointer box-content px-2 py-2 text-white hover:bg-gray-400 > hover:rounded-full hover:text-white'/></li>
     <li><FaXTwitter className='cursor-pointer box-content px-2 py-2 text-white hover:bg-gray-400 > hover:rounded-full hover:text-white'/></li>
     </ul>
    </div>

    )
}
export default SocialIcons