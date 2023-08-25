import GradiantCircle from '@/components/shapes/GradiantCircle'
import axios from 'axios';
import Image from 'next/image'
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const AboutUsHeroSection = () => {
    const [data, setData] = useState({});
    useEffect(() => {
      axios
        .get(`${process.env.NEXT_PUBLIC_BASE_URL}/about_page_hero?locale=en`)
        .then((res) => {
          setData(res?.data?.docs[0]);
        });
    }, []);
    return (
        <div className='relative'>
            <GradiantCircle size={30} className={'absolute top-20 hidden xl:block right-[400px]'}/>
            <GradiantCircle size={100} className={'absolute top-40 hidden xl:block right-[200px]'}/>
            <p className='text-4xl sm:text-[40px] md:text-[50px] xl:text-[72px] text-black dark:text-white font-medium font-title'>{data?.title}</p>
            <p className='text-base md:text-xl lg:text-2xl xl:text-3xl text-black dark:text-white max-w-[886px] mt-5 mr-10'>{data?.subtitle}</p>
            <div className='mt-12 flex justify-center items-center gap-2 sm:gap-5'>
                <Image src={data?.img_1?.url} className='aspect-auto h-max w-[28%]' width={360} height={500} />
                <Image src={data?.img_2?.url} width={510} height={630} className='w-[40%] h-full aspect-auto' />
                <Image src={data?.img_3?.url} width={360} height={500} className='w-[28%] aspect-auto h-max' />
            </div>
        </div>
    )
}

export default AboutUsHeroSection