import React from 'react'
import { ReactTyped,Typed } from "react-typed";
import HUST from '../assets/HUST-C1-b.jpg'
import Background from '../assets/Background.jpg'

const Hero = () => {
  return (
    <div className='text-white relative'>
        <div className='z=0'>
          <img className='w-full h-full absolute mix-blend-difference' src={Background} alt="/" />
        </div>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-[#00df9a] font-bold p-2 z-10'>GROWING WITH DATA ANALYTICS</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
                Grow with data.
            </h1>
            <div className='flex justify-center items-center'>
                <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4 z-10'>
                  Fast, flexible financing for
                </p>
                <ReactTyped
                  className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
                  strings={['BTB', 'BTC', 'SASS']} 
                  typeSpeed={120} 
                  backSpeed={140} 
                  loop
                />
            </div>
            <div className='z-10'>
              <p className='md:text-2xl text-xl font-bold text-gray-500'>Monitor your data anlytics to increase revenue for BTB, BTC, SASS platforms</p>
            </div>
            <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black z-10'>
              Get Started
            </button>
        </div>
    </div>
    
  )
}

export default Hero
