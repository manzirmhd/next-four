'use client'
import React from 'react'
import { PiForkKnifeFill } from "react-icons/pi";
import { IoSearch } from "react-icons/io5";

const SearchBox = () => {
  return (
    
        <div>
     <div className='flex items-center'>
     <PiForkKnifeFill size={40} className='text-white bg-red-500 rounded-full px-2 py-2'/>
        <input type='name' placeholder='Search Food' className='px-14 py-2 rounded-3xl bg-slate-200'/>
        <IoSearch  size={30} className='-ml-9 cursor-pointer'/>
     </div>
     </div>
   
  )
}

export default SearchBox