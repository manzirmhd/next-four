'use client'
import React from 'react'
import { FaCircleArrowLeft } from "react-icons/fa6";
import { FaCircleArrowRight } from "react-icons/fa6";

const Pagination = () => {
  return (
    <div className='pb-10'>
    <div className='flex justify-center items-center gap-8'>
        <FaCircleArrowLeft size={30} className='cursor-pointer text-yellow-500 rounded-full hover:shadow-lg hover:shadow-slate-700'/>
        <FaCircleArrowRight size={30} className='cursor-pointer text-yellow-500 rounded-full hover:shadow-lg hover:shadow-slate-700'/>
    </div>
    </div>
  )
}

export default Pagination