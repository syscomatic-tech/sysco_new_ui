import Button from '@/components/button/Button'
import GradiantCircle from '@/components/shapes/GradiantCircle'
import HeroSectionGraphics from '@/components/shapes/HeroSectionGraphics'
import SideShade from '@/components/shapes/SideShade'
import React from 'react'

const HeroSection = () => {
    return (
        <div className=''>
            <div className='absolute top-[-150px] left-[-200px] rotate-[120deg] max-w-full'>
                <SideShade />
            </div>
            <div className='py-28 flex justify-between items-center'>
                <div className='relative'>
                    <GradiantCircle size={25} className={'absolute -top-20 right-0'} />
                    <p className='text-[50px] sm:text-[60px] lg:text-[72px] leading-none font-medium flex flex-col font-title'>
                        <span className='text-[#262626] dark:text-white'>Build Your</span>
                        <span className='text-primary'>Digital Existence</span>
                    </p>
                    <div className=' w-36 h-36 rounded-full bg-primary blur-[150px] absolute top-20'></div>
                    <p className='my-5 text-black dark:text-white max-w-[642px] text-3xl'>We are your technology partner for innovative and impactful digital solutions.</p>
                    <Button className={''} type={'primary'}>Explore now</Button>
                    <div className='flex items-center mt-5 ml-32 gap-12'>
                        <GradiantCircle size={25} className={''} />
                        <GradiantCircle size={95} className={''} />
                    </div>
                </div>
                <div className='relative mr-10 hidden lg:block'>
                    <HeroSectionGraphics />
                    <div className=' w-36 h-36 rounded-full bg-primary blur-[150px] absolute top-0 right-0'></div>
                    <div className=' w-36 h-36 rounded-full bg-primary blur-[150px] absolute top-[300px] right-0'></div>
                    <GradiantCircle size={95} className={'absolute top-20 -right-32'} />
                </div>
            </div>
        </div>
    )
}

export default HeroSection