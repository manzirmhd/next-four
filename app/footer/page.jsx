'use client';

import React from 'react'
import Image from 'next/image'
import logo from '/public/logo1.png'
import SocialIcons from '../components/SocialIcons';


const Footer = () => {
  return (
    <footer className="bg-yellow-600  lg:h-full sm:h-full">
            <div className="md:flex container mx-auto">
                <div className="justify-between items-center w-full ">
                    <div className="flex flex-wrap justify-between items-center py-5 px-10">
                        <div><Image src={logo} alt='logo' width={90} height={30}/></div>
                        <div><SocialIcons/></div>
                    </div>
                   
                    <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:px-8 px-10 lg:px-5 py-5 border-t-2 border-b-2 text-white">
                    <div className="grid ">
                        <ul className='space-y-2 lg:space-y-3 lg:space-x-0'>
                        <li><h3 className="text-xl font-bold pb-4">Contact Us</h3></li>
                        <li><a href="/" className="hover:text-gray-600 ">Food Express</a></li>
                        <li><a href="/" className="hover:text-gray-600">Karachi, Pakistan</a></li>
                        <li><a href="/" className="hover:text-gray-600">www.example.com</a></li>
                        </ul>
                    </div>
                    
                    <div className="grid ">
                    <ul className='space-y-2 lg:space-y-3 lg:space-x-0'>
                        <li><h3 className="text-xl font-bold pb-4">Explore</h3></li>
                        <li><a href="/" className="hover:text-gray-600">Menu</a></li>
                        <li><a href="/" className="hover:text-gray-600">Food</a></li>
                        <li><a href="/" className="hover:text-gray-600">Blog</a></li>
                    </ul>    
                    </div>

                    <div className="grid ">
                    <ul className='space-y-2 lg:space-y-3 lg:space-x-0'>
                        <li><h3 className="text-xl font-bold pb-4">Quick Links</h3></li>
                        <li><a href="/" className="hover:text-gray-600">Home</a></li>
                        <li><a href="/" className="hover:text-gray-600">Menu</a></li>
                        <li><a href="/" className="hover:text-gray-600">About Us</a></li>
                    </ul>    
                    </div>

                    <div className="grid ">
                    <ul className='space-y-2 lg:space-y-3 lg:space-x-0'>
                        <li><h3 className="text-xl font-bold pb-4">Resources</h3></li>
                        <li><a href="/" className="hover:text-gray-600">Privacy & Policy</a></li>
                        <li><a href="/" className="hover:text-gray-600">Help Center</a></li>
                        <li><a href="/" className="hover:text-gray-600">Support</a></li>
                    </ul>    
                    </div>
                   </div>
                   
                    <div className=" flex justify-center items-center ">
                    <p className=" px-5 py-5 text-black font-semibold">&copy;Copyright - Food corner. All Rights Reserved</p>
                    </div>

                </div>
            </div>
        </footer>

  )
}

export default Footer