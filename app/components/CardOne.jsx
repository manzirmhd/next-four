'use client'
import React from 'react'
import Image from  'next/image'
import Rating from './Rating'


const CardOne = ({image, heading}) => {
  return (
    <div className=' '>
        <div className='h-full w-80'>
            <div className='float-right'>
                <div className='bg-slate-300 rounded-full'>
                    <Image 
                    src={image} 
                    alt='burger' 
                    width={80} 
                    height={80}
                    className='-mt-7 px-1 py-1'
                    />
                </div>
            </div>
            <div className='bg-slate-200 rounded-xl px-4 py-5 w-72 mt-5'>
                <h1 className='text-xl font-bold text-yellow-500 pb-2'>{heading}</h1>
                <p className='font-bold'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                <div className='flex justify-between items-center py-4'>
                    <Rating/>
                    <p className='text-xl text-yellow-500 font-bold'>1800 PKR</p>
                </div>
                <button className='btn px-10 rounded-3xl bg-yellow-500 border-none text-white hover:text-black'>Add to Cart</button>
            </div>
            
        </div>
    </div>
  )
}

export default CardOne