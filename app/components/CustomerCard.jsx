'use client'
import React from 'react'
import Image from 'next/image'
import menImg from '/public/customer.png'
import Rating from './Rating'

const CustomerCard = () => {
  return (
    <div className=''>
        <div className='w-72 h-80'>
          <div className='flex justify-center items-center -mb-14 py-3'>
         <Image src={menImg}
          alt='customer' 
          width={140} 
          height={120} 
          className='rounded-full' />
          </div>

                <div className='py-10 px-4 pt-14 bg-zinc-200 rounded-3xl'>
                 <div className='flex justify-center items-center pb-1'><Rating/></div> 
                 <h1 className='text-xl font-bold text-center pb-1'>John Doe</h1>
                 <p className='text-center'> Lorem ispum doller ammet Lorem ispum doller amme Lorem ispum doller amme lorem</p>
                </div>
        </div>
    </div>
  )
}

export default CustomerCard