'use client'
import React from 'react'
import SearchBox from './SearchBox'
import CardOne from './CardOne'
import HeroComp from './HeroComp'
import img1 from '/public/burger.png'
import img2 from '/public/n1.png'

const Hero = () => {
  return (
    <div>

        <div  className='px-10 flex'>
            <div>
                <div className='text-3xl font-extrabold'>
                    <h1 className='py-2'>Taste The</h1>
                    <p className='py-2 text-yellow-500'>Difference</p>
                    <div className='flex gap-2 py-2'>
                        <p>Taste The</p>
                        <p className=' text-yellow-500'>Good Life</p>
                    </div>
                </div>

                <div className='py-5'><SearchBox/></div>
                <div className='flex py-5 gap-2'>
                    <CardOne
                    image={img1}
                    heading='Deal 1'
                    />
                    <CardOne
                    image={img2}
                    heading='Deal 2'
                    />
                </div>
            </div>

            <div><HeroComp/></div>
        </div>
    </div>
  )
}

export default Hero