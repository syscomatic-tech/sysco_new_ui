import ImpactSectionSolarPanel from '@/components/shapes/ImpactSectionSolarPanel'
import SideShade from '@/components/shapes/SideShade'
import axios from 'axios'
import Image from 'next/image'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const ImpactSection = () => {
  const [data, setData] = useState({})
  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BASE_URL}/home_page_impact?locale=en`)
      .then((res) => {
        setData(res?.data?.docs[0]);
      });
  }, []);
  return (
    <div className='py-12 relative'>
      <style>
  {`
  @keyframes spin-reverse {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(-360deg);
    }
  }
  
  .animate-spin-reverse-two {
    animation: spin-reverse 11s linear infinite;
  }
  `}
</style>
      <h5 className='section-heading text-center text-black dark:text-white'>{data?.title}</h5>
      <p className='text-sm md:text-xl lg:text-3xl text-center text-black dark:text-white mt-3 max-w-[300px] sm:max-w-[550px] mx-auto leading-tight'>{data?.subtitle}</p>
      <div className='flex justify-center -ml-8 -mr-8 mt-12 relative'>
        {/* 1st */}
        <div className='absolute flex items-center justify-center h-full z-0'>
          <div>
            <Image src={data?.solar_circle_1?.url} width={500} height={500} alt='' className='w-[100px] sm:w-[180px] md:w-[220px] mx-auto animate-slow-spin' />
          </div>
        </div>
        {/* 2nd */}
        <div className='absolute flex items-center justify-center h-full   z-0 w-full -mt-1'>
          <div>
            <Image src={data?.solar_circle_2?.url} width={500} height={500} alt='' className='w-[180px] sm:w-[320px] md:w-[390px]  mx-auto animate-spin-reverse-two' />
          </div>
        </div>

        {/* 3rd */}
        <div className='absolute flex items-center justify-center h-full z-0 -mt-1 ml-1 w-full'>
          <div>
            <Image src={data?.solar_circle_3?.url} width={500} height={500} alt='' className='w-[280px] sm:w-[500px] md:w-[619px] mx-auto animate-slow-spin-three' />
          </div>
        </div>
        <ImpactSectionSolarPanel img_dark={data?.image_dark} img_light={data?.image_light}/>
      </div>
      <div className='w-full relative right-[-15vw] 2xl:right-[-22vw] 5xl:right-[-35vw] 10xl:right-[-40vw]'>
      <div className='absolute -bottom-[600px] lg:bottom-0 right-[-300px] xl:right-[-200px]'>
        <SideShade />
      </div>

      </div>
    </div>
  )
}

export default ImpactSection