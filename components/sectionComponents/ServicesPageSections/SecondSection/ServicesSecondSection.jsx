import GradiantCircle from '@/components/shapes/GradiantCircle'
import axios from 'axios';
import Image from 'next/image'
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const ServicesSecondSection = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BASE_URL}/services_page_second_section?locale=en`)
      .then((res) => {
        setData(res?.data?.docs[0]);
      });
  }, []);
  return (
    <div className='pt-28'>
      <p className='text-xl md:text-4xl font-title leading-tight xl:text-[40px] max-w-[800px] xl:max-w-[1037px] text-black dark:text-white'>With every single one of our clients we bring forth a deep
       {data?.title}</p>
      <div className='relative'>
        <div className=''>
          <Image src={data?.image?.url} width={813} height={605} className='mt-5' alt=''></Image>
        </div>
        <GradiantCircle size={32} className={'absolute right-28 top-0 z-40 hidden xl:block'} />
        <GradiantCircle size={130} className={'absolute right-40 top-20 hidden xl:block'} />
      </div>
    </div>
  )
}

export default ServicesSecondSection