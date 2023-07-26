import ImpactSectionSolarPanel from '@/components/shapes/ImpactSectionSolarPanel'
import SideShade from '@/components/shapes/SideShade'
import Image from 'next/image'
import React from 'react'

const ImpactSection = () => {
  return (
    <div className='py-12 relative'>
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n@keyframes spin-reverse {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(-360deg);\n  }\n}\n\n.animate-spin-reverse-two {\n  animation: spin-reverse 11s linear infinite;\n}\n"
        }}
      />

      <h5 className='section-heading text-center text-black dark:text-white'>Our Impact on Businesses</h5>
      <p className='text-sm md:text-xl lg:text-3xl text-center text-black dark:text-white mt-3 max-w-[300px] sm:max-w-[550px] mx-auto leading-tight'>Syscomatic is a software development as a service (SDass) Platform with a business</p>
      <div className='flex justify-center -ml-8 -mr-8 mt-12 relative'>
        {/* 1st */}
        <div className='absolute flex items-center justify-center h-full z-0'>
          <div>
            <Image src={'/assets/images/impact-solar-line-1.png'} width={500} height={500} alt='' className='w-[100px] sm:w-[180px] md:w-[220px] mx-auto animate-slow-spin' />
          </div>
        </div>
        {/* 2nd */}
        <div className='absolute flex items-center justify-center h-full   z-0 w-full -mt-1'>
          <div>
            <Image src={'/assets/images/impact-solar-line-2.png'} width={500} height={500} alt='' className='w-[180px] sm:w-[320px] md:w-[390px]  mx-auto animate-spin-reverse-two' />
          </div>
        </div>

        {/* 3rd */}
        <div className='absolute flex items-center justify-center h-full z-0 -mt-1 ml-1 w-full'>
          <div>
            <Image src={'/assets/images/impact-solar-line-3.png'} width={500} height={500} alt='' className='w-[280px] sm:w-[500px] md:w-[619px] mx-auto animate-slow-spin-three' />
          </div>
        </div>
        <ImpactSectionSolarPanel />
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