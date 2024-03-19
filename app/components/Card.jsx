'use client'
import React from 'react'
import Image from 'next/image'


import { FaHeart } from 'react-icons/fa6'
import { PiNumberOneBold } from "react-icons/pi";
import { FaStar } from 'react-icons/fa'
import { HiMinusSm, HiPlusSm } from "react-icons/hi";

const Card = ({image}) => {
  return (
    <div className=''>
        <div className='w-72 h-full'>
          <div className='flex justify-center items-center -mb-14 py-3'>
         <Image src={image}
          alt='customer' 
          width={180} 
          height={180} 
          className='rounded-full ' />
          </div>

                <div className='py-10 px-4 pt-14 bg-zinc-200 rounded-3xl'>
                 <div className='flex justify-between items-center pb-2'>
                    <div><FaHeart size={25} className='text-yellow-500 cursor-pointer'/></div>
                    <div className='flex items-center gap-1'>
                        <p className='text-lg font-extrabold'>5.0</p>
                        <FaStar size={25} className='text-yellow-500 cursor-pointer'/>
                        </div>
                    </div> 
                 <h1 className='text-xl font-bold  py-2'>Food Name</h1>
                 <p className=''> Beef Biriyani| Pulao | Burger | Pizza</p>
                 
                 <div className='flex justify-between items-center py-3'>
                    <div className='flex'>
                        <HiMinusSm size={25} className='bg-gray-400 rounded-full cursor-pointer'/>
                        <PiNumberOneBold size={25} className='text-yellow-500 font-black'/>
                        <HiPlusSm size={25} className='bg-gray-400 rounded-full cursor-pointer'/>
                    </div>
                    <div><p className='text-lg font-extrabold'>$ 40.00</p></div>
                 </div>
                </div>
                <div className=' flex justify-center items-center -mt-6'>
                <button className="btn bg-yellow-500 rounded-3xl text-white px-14 hover:text-yellow-600 border-none">Order Now</button>
                </div>
        </div>
    </div>
  )
}

export default Card
/** <div><{icon} size={30} className='cursor-pointer text-yellow-500 rounded-full hover:shadow-lg hover:shadow-slate-700 border-none -mr-8'/></div> */