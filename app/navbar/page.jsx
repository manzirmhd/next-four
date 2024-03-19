'use client';
import React ,{useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '/public/logo1.png'
import {FaTimes, FaRegHeart  } from 'react-icons/fa';
import { FaUserLarge } from "react-icons/fa6";
import { CiMenuBurger } from "react-icons/ci";
import { BsCart2 } from "react-icons/bs";


function Navbar() {
    const[click, setClick] = useState(false);
    const handleClick = () =>   setClick(!click);
  
    const content = 
    <div className='lg:hidden block absolute top-16 w-full left-0 right-0 bg-yellow-500 transition'>
        <ul className='text-center text-xl p-20 text-gray-600'>
          <Link href="/" className='no-underline'><li className='my-4 py-2 hover:bg-gray-500 hover:rounded-3xl hover:text-gray-300'>Home</li></Link>
          <Link href="/" className='no-underline'><li className='my-4 py-2 hover:bg-gray-500 hover:rounded-3xl hover:text-gray-300'>Food</li></Link>
          <Link href="/" className='no-underline'><li className='my-4 py-2 hover:bg-gray-500 hover:rounded-3xl hover:text-gray-300'>Menu</li></Link>
          <Link href="/" className='no-underline'><li className='my-4 py-2 hover:bg-gray-500 hover:rounded-3xl hover:text-gray-300'>Reservation</li></Link>
          <Link href="/" className='no-underline'><li className='my-4 py-2 hover:bg-gray-500 hover:rounded-3xl hover:text-gray-300'>Contact</li></Link>
          </ul>
      </div>
        
    
    return (
      <div className='bg-transparent sticky lg:px-5 sm:px-5 '>
        <div className='h-10vh flex justify-between items-center z-50 text-gray-600 lg:py-5 px-10 py-4'>
          <div className='flex-1'>
            <Image src={logo} alt='logo' width={90} height={30}/>
          </div>
  
          <div className='lg:flex md:flex lg:flex-1 font-normal hidden'>
            <div className=' bg-white rounded-3xl px-6'>
              <ul className='flex gap-1 text-sm font-semibold '>
              <Link href="/" className='no-underline'><li className='my-1 py-2 px-3 hover:bg-gray-500 hover:rounded-3xl hover:text-gray-300 cursor-pointer'>Home</li></Link>
              <Link href="/" className='no-underline'><li className='my-1 py-2 px-3 hover:bg-gray-500 hover:rounded-3xl hover:text-gray-300 cursor-pointer'>Food</li></Link>
              <Link href="/" className='no-underline'><li className='my-1 py-2 px-3 hover:bg-gray-500 hover:rounded-3xl hover:text-gray-300 cursor-pointer'>Menu</li></Link>
              <Link href="/" className='no-underline'><li className='my-1 py-2 px-3 hover:bg-gray-500 hover:rounded-3xl hover:text-gray-300 cursor-pointer'>Reservation</li></Link>
              <Link href="/" className='no-underline'><li className='my-1 py-2 px-3 hover:bg-gray-500 hover:rounded-3xl hover:text-gray-300 cursor-pointer'>Contact</li></Link>
              </ul>
            </div>
          </div> 

          <div className='flex px-10'>
                <ul className='lg:flex gap-2 text-base hidden'>
                    <Link href="/"><li className='text-lg py-3 px-3 hover:bg-gray-500 hover:rounded-full hover:text-gray-300 cursor-pointer bg-white rounded-full'><FaRegHeart /></li></Link>
                    <Link href="/"><li className='text-lg py-3 px-3 hover:bg-gray-500 hover:rounded-full hover:text-gray-300 cursor-pointer bg-white rounded-full'><BsCart2 /></li></Link>
                    <Link href="/"><li className='text-lg py-3 px-3 hover:bg-gray-500 hover:rounded-full hover:text-gray-300 cursor-pointer bg-white rounded-full'><FaUserLarge /></li></Link>
                </ul>
            </div>
          
          <div>
           {click && content}
          </div>
          <button className='block sm:hidden transition' onClick={handleClick}>{ click ? <FaTimes className='text-2xl font-extrabold'/> : <CiMenuBurger className='text-2xl font-extrabold'/>}</button>
  
        </div>
      </div>
    )
  }
  
  export default Navbar