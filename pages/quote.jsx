import Button from '@/components/button/Button'
import MainLayout from '@/layouts/Main/MainLayout'
import Image from 'next/image'
import React from 'react'
import { useSelector } from 'react-redux'

const quote = () => {
    const theme = useSelector(state => state.theme.value)
    console.log(theme)
    return (
        <MainLayout>
            <div className='py-20'>
                <p className='text-4xl sm:text-[40px] md:text-[50px] xl:text-[72px] text-black dark:text-white font-medium font-title'>Get a Quote</p>
                <p className='text-base md:text-xl lg:text-2xl xl:text-3xl text-black dark:text-white '>Let’s work to make something new</p>
                <div className='pt-16 flex items-center flex-col lg:flex-row gap-12'>
                    <div className=''>
                        <Image
                            src='/assets/get-a-quote/quotePageImg.png'
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