import Button from '@/components/button/Button'
import MainLayout from '@/layouts/Main/MainLayout'
import axios from 'axios'
import Image from 'next/image'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const quote = () => {
    const [data, setData] = useState({});
  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BASE_URL}/get_a_quote?locale=en`)
      .then((res) => {
        setData(res?.data?.docs[0]);
      });
  }, []);
    return (
        <MainLayout>
            <div className='py-20'>
                <p className='text-4xl sm:text-[40px] md:text-[50px] xl:text-[72px] text-black dark:text-white font-medium font-title'>{data?.title}</p>
                <p className='text-base md:text-xl lg:text-2xl xl:text-3xl text-black dark:text-white '>{data?.subtitle}</p>
                <div className='pt-16 flex items-center flex-col lg:flex-row gap-12'>
                    <div className=''>
                        <Image
                            src={data?.img?.url}
                            alt=''
                            width={400}
                            height={400}/>
                    </div>
                    <div className='w-full lg:w-2/5 max-w-[500px] mx-auto'>
                        <form  className='h-full flex flex-col gap-[50px]'>
                            <div>
                                <input type="text" className='w-full bg-transparent  pb-4 text-black dark:text-white text-xl outline-none placeholder:text-black dark:placeholder:text-white placeholder:text-base sm:placeholder:text-lg lg:placeholder:text-xl placeholder:font-title' placeholder='Enter Your Name *'/>
                                <div className='w-full h-[2px] bg-primary '>
                                </div>
                            </div>
                            <div>
                                <input type="text" className='w-full bg-transparent  pb-4 text-black dark:text-white text-xl outline-none placeholder:text-black dark:placeholder:text-white placeholder:text-base sm:placeholder:text-lg lg:placeholder:text-xl placeholder:font-title' placeholder='Enter Your Email *'/>
                                <div className='w-full h-[2px] bg-primary '>
                                </div>
                            </div>
                            <div>
                                <input type="text" className='w-full bg-transparent  pb-4 text-black dark:text-white text-xl outline-none placeholder:text-black dark:placeholder:text-white placeholder:text-base sm:placeholder:text-lg lg:placeholder:text-xl placeholder:font-title' placeholder='Type Your Message'/>
                                <div className='w-full h-[2px] bg-primary '>
                                </div>
                            </div>
                            <div  className='mt-5'>
                                <Button type={'primary'}>Submit</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default quote