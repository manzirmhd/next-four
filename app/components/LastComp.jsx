'use client'
import React from 'react'
import InputBox from './InputBox'

const LastComp = () => {
  return (
    <div className='h-1/2 w-full bg-no-repeat bg-cover bg-center' style={{backgroundImage: 'url(subs.jpg)'}}>
        <div className=''>
        <div className='flex-row justify-center items-center py-20'>
        <div className='text-3xl text-white font-extrabold text-center'>
            <h1 className='py-2'>Join Us To Get An Amazing </h1>
            <p>Discount On Your Next Order</p>
        </div>

        <div className='py-5'>
         <InputBox/>
        </div>
        </div>
        </div>
    </div>
  )
}

export default LastComp