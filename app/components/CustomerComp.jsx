'use client'
import React from 'react'
import CustomerCard from './CustomerCard'

const CustomerComp = () => {
  return (
    <div>
        <h1 className='text-2xl text-center font-extrabold'>What Customers Say</h1>
    <div className='flex flex-wrap justify-center items-center gap-20'> 
        
        <CustomerCard/>
        <CustomerCard/>
        <CustomerCard/>
    </div>
    </div>
  )
}

export default CustomerComp