import axios from 'axios';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Marquee from 'react-fast-marquee'


const TechnologySection = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BASE_URL}/home_page_technology?locale=en`)
      .then((res) => {
        setData(res?.data?.docs[0]);
      });
  }, []);
  return (<div className='lg:block hidden'>
    <div className='py-12'>
      <h5 className='section-heading text-black dark:text-white max-w-[400px] xl:max-w-[600px] leading-tight'>
        {data?.title}
      </h5>
      <div className='py-12 flex flex-col gap-12'>
        <Marquee speed={110}>
          {
            data?.technology?.map((technology,index) =>
              <div key={index} className='flex flex-col justify-center w-[160px] h-[155px] items-center gap-3 bg-darkGradiantBg rounded-md mx-5'>
                <img src={technology?.image} width={50} height={50} alt='' />
                <p className='text-white whitespace-nowrap font-title text-xl'>{technology?.name}</p>
              </div>
            )}
        </Marquee>
        <Marquee speed={110} direction='right'>
          {
            data?.technology?.reverse()?.map((technology, index) =>
              <div key={index} className='flex flex-col justify-center w-[160px] h-[155px] items-center gap-3 bg-darkGradiantBg rounded-md mx-5'>
                <img src={technology?.image} width={50} height={50} alt='' />
                <p className='text-white whitespace-nowrap font-title text-xl'>{technology?.name}</p>
              </div>
            )}
        </Marquee>
      </div>
    </div>
  </div>
  )
}

export default TechnologySection