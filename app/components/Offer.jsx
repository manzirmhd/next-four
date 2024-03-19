'use client'
import React from 'react'
import Card from './Card'
import img1 from '/public/n2.png'

const Offer = () => {
  return (
    <div className='px-10'>
      <div className='pb-10'>
      <h1 className='text-2xl text-center font-extrabold pb-5'>Our Special Offers</h1>
      <div className='flex flex-wrap justify-center items-center gap-20'>
       <Card
       image={img1}/>
       <Card
       image={img1}/>
       <Card
       image={img1}/>
      </div>
      </div>
      
      <div className='pb-10'>
      <h1 className='text-2xl text-center font-extrabold pb-5'>Our Popular Dishes</h1>
      <div className='flex flex-wrap justify-center items-center gap-20'>
       <Card
       image={img1}/>
       <Card
       image={img1}/>
       <Card
       image={img1}/>
      </div>
      </div>
    </div>
  )
}

export default Offer