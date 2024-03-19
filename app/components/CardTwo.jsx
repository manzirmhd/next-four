'use client'
import React from 'react'
import { LuBadgePercent } from "react-icons/lu";

const CardTwo = () => {
  return (
    <div className='px-5 py-5'>
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

    </div>
  )
}

export default CardTwo