import Button from '@/components/button/Button'
import axios from 'axios';
import Link from 'next/link'
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const LetsStartSection = () => {
  const [data, setData] = useState({});
    useEffect(() => {
      axios
        .get(`${process.env.NEXT_PUBLIC_BASE_URL}/lets_start?locale=en`)
        .then((res) => {
          setData(res?.data?.docs[0]);
        });
    }, []);
  return (
    <div className='my-16 relative'>
      <div className='absolute h-full -left-[4000px] bg-[#1F2021] w-[8000px]'>

      </div>
      <div className=' bg-[#1F2021] relative py-7 sm:py-10 lg:py-12'>
        <div className='max-w-screen mx-auto'>
          <div className='w-20 h-20 md:w-40 md:h-40 xl:w-[150px] xl:h-[150px] bg-[#551FFF] rounded-full absolute bottom-[70%] xl:bottom-28 -left-10 xl:left-[-95px]'>
          </div>
          <div className='w-20 h-20 md:w-40 md:h-40 xl:w-[150px] xl:h-[150px] bg-[#551FFF] rounded-full absolute top-[70%] xl:top-28 -right-10 xl:right-[-95px]'>
          </div>
          <div className='absolute top-12 hidden sm:block left-[20%]'>
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="25" cy="25" r="24.5" stroke="white" strokeDasharray="8 8" />
            </svg>
          </div>
          <div className='absolute bottom-12 hidden sm:block right-[20%]'>
            <svg width="70" height="70" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="25" cy="25" r="24.5" stroke="white" strokeDasharray="8 8" />
            </svg>
          </div>
          <p className=' text-xl md:text-2xl lg:text-[40px] font-title text-center font-bold text-white'>{data?.title}</p>
          <div className='flex justify-center mt-5'>
            <Link href={'/quote'}><Button type={'primary-small'}>{data?.button}</Button></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LetsStartSection