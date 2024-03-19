'use client'
import React from 'react'

const InputBox = () => {
  return ( 
        <div className="flex justify-center items-center">
        <input
           type="text"
           placeholder="Enter Your Email Address"
           className="text-gray-800 w-64 py-2.5 rounded-l-lg px-2 pr-0 focus:outline-none"
        />
        <button
           className="bg-yellow-600 hover:bg-yellow-500 rounded-lg -ml-3 px-3 py-2.5 font-[Poppins] text-white font-bold w-36"
         >
           Subscribe
        </button> 
                    
        </div>
   
  )
}

export default InputBox