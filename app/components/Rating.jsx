'use client'
import React from 'react'
import { FaStar } from 'react-icons/fa'

const Rating = () => {
  
  return (
    <div className='flex gap-1'>
      
      {[...Array(5)].map( star => {
        return (
            <FaStar 
            key={star}
            className="cursor-pointer text-yellow-500 flex justify-center items-center"
            size={20}
            />
        );
      })}
      
    </div>
  );
}

export default Rating;