'use client'
import React from 'react'
import Image from 'next/image'
import hero from '/public/chicken.png'
import hero1 from '/public/burger.png'
import hero2 from '/public/pizza.png'

const HeroComp = () => {
  return (
    
        <div className='h-full w-screen '>
           <div className='px-10 '>
            <div className='bg-yellow-500 rounded-l-3xl'>
              <div className=''>
              <div className='py-10 -ml-9'>
                <Image src={hero} alt='hero' height={700} width={500}/>
                </div>

              <div className='flex items-center'>
                <div className=' pl-4 -mb-14'><Image src={hero1} alt='hero' height={300} width={150}/></div>
                <div className='px-20 -mb-14'><Image src={hero2} alt='hero' height={300} width={150}/></div>
              </div>
              </div>

            </div>
            
            </div> 
           
        </div>
   
  )
}

export default HeroComp