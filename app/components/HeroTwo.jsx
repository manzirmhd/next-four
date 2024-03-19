'use client'
import React from 'react'
import { LuBadgePercent } from "react-icons/lu";

const HeroTwo = () => {
  return (
    <div className='px-5 py-10 pt-20'>
      <div className='flex flex-wrap justify-evenly items-center gap-8'>
      <div className='h-full w-72'>
            <div className='flex justify-between items-center gap-2'>
                <div className='bg-yellow-500 rounded-full px-1 py-1'>
                <LuBadgePercent 
                size={60} 
                className='text-white'
                />
                </div>
                <div>
                    <h1 className='text-xl font-bold'>Discount Voucher</h1>
                    <p className='font-bold text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                </div>
            </div>
        </div>

        <div className='h-full w-72'>
            <div className='flex justify-between items-center gap-2'>
                <div className='bg-yellow-500 rounded-full px-1 py-1'>
                <LuBadgePercent 
                size={60} 
                className='text-white'
                />
                </div>
                <div>
                    <h1 className='text-xl font-bold'>Fast Serve On Table</h1>
                    <p className='font-bold text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                </div>
            </div>
        </div>

        <div className='h-full w-72'>
            <div className='flex justify-between items-center gap-2'>
                <div className='bg-yellow-500 rounded-full px-1 py-1'>
                <LuBadgePercent 
                size={60} 
                className='text-white'
                />
                </div>
                <div>
                    <h1 className='text-xl font-bold'>Fresh Food</h1>
                    <p className='font-bold text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                </div>
            </div>
        </div>
      </div>
        
    </div>
  )
}

export default HeroTwo