import Button from '@/components/button/Button'
import Link from 'next/link'
import React from 'react'

const LetsStartSection = () => {
  return (
    <div className='py-16'>
      <div className='w-full bg-[#1F2021] relative py-7 sm:py-10 lg:py-12'>
        <div className='w-20 h-20 md:w-40 md:h-40 xl:w-[190px] xl:h-[190px] bg-[#551FFF] rounded-full absolute bottom-[70%] xl:bottom-20 -left-10 xl:left-[-95px]'>
        </div>
        <div className='w-20 h-20 md:w-40 md:h-40 xl:w-[190px] xl:h-[190px] bg-[#551FFF] rounded-full absolute top-[70%] xl:top-20 -right-10 xl:right-[-95px]'>
        </div>
        <div className='absolute top-12 hidden sm:block left-[20%]'>
          <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="25" cy="25" r="24.5" stroke="white" stroke-dasharray="8 8" />
          </svg>
        </div>
        <div className='absolute bottom-12 hidden sm:block right-[20%]'>
          <svg width="70" height="70" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="25" cy="25" r="24.5" stroke="white" stroke-dasharray="8 8" />
          </svg>
        </div>
        <p className=' text-xl md:text-2xl lg:text-[40px] font-title text-center font-bold text-white'>Let's start a project!</p>
        <div className='flex justify-center mt-5'>
          <Link href={'/quote'}><Button type={'primary-small'}>Get a quote</Button></Link>
        </div>
      </div>
    </div>
  )
}

export default LetsStartSection