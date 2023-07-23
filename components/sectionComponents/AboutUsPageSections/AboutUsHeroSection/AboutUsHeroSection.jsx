import GradiantCircle from '@/components/shapes/GradiantCircle'
import Image from 'next/image'
import React from 'react'

const AboutUsHeroSection = () => {
    return (
        <div className='relative'>
            <GradiantCircle size={30} className={'absolute top-20 hidden xl:block right-[400px]'}/>
            <GradiantCircle size={100} className={'absolute top-40 hidden xl:block right-[200px]'}/>
            <p className='text-4xl sm:text-[40px] md:text-[50px] xl:text-[72px] text-black dark:text-white font-medium font-title'>About us</p>
            <p className='text-base md:text-xl lg:text-2xl xl:text-3xl text-black dark:text-white max-w-[886px] mt-5 mr-10'>Syscomatic is software development as a service (SDass) Platform with a business-first approach. We offer a variety of value-adding solutions and best-of-breed services to internet companies worldwide.</p>
            <div className='mt-12 flex justify-center items-center gap-2 sm:gap-5'>
                <Image src={'https://i.ibb.co/D4T136j/Rectangle-4814.png'} className='aspect-auto h-max w-[28%]' width={360} height={500} />
                <Image src={'https://i.ibb.co/2dvXxPs/Rectangle-4815.png'} width={510} height={630} className='w-[40%] h-full aspect-auto' />
                <Image src={'https://i.ibb.co/dMn5kmd/Rectangle-4814-1.png'} width={360} height={500} className='w-[28%] aspect-auto h-max' />
            </div>
        </div>
    )
}

export default AboutUsHeroSection