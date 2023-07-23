import GradiantCircle from '@/components/shapes/GradiantCircle'
import SideShade from '@/components/shapes/SideShade'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BiRightArrowAlt } from 'react-icons/bi'

const BolgsSecondSection = () => {
  const blogs = [
    {
      title: 'Mastering Responsive Web Design: Techniques and Best Practices',
      image: 'https://i.ibb.co/8d5rxjb/Rectangle-4744.png',
      link: '/blog/1',
      bgColor: '#02444F',
    },
    {
      title: 'Mastering Responsive Web Design: Techniques and Best Practices',
      image: 'https://i.ibb.co/0Q1fJJg/Rectangle-4732.png',
      link: '/blog/1',
      bgColor: '#311589',
    },
    {
      title: 'Mastering Responsive Web Design: Techniques and Best Practices',
      image: 'https://i.ibb.co/KDffzj4/Rectangle-4747.png',
      link: '/blog/1',
      bgColor: '#120147',
    },
  ]
  return (
    <div className='py-24'>
      <div className='grid relative grid-cols-1 xl:grid-cols-2 w-full gap-y-10 sm:gap-y-14 md:gap-y-16 xl:gap-y-64'>
        <GradiantCircle size={25} className={'absolute top-28 right-48 hidden xl:block'}/>
        <GradiantCircle size={100} className={'absolute top-[350px] z-[-1] right-48 hidden xl:block'}/>
        <SideShade className={'absolute top-0 lg:top-auto lg:bottom-[-300px] right-[-70%] md:right-[-40%] xl:right-0'}/>
        <SideShade className={'absolute bottom-[-30%] rotate-[120deg] left-[-70%] md:left-[-40%] block lg:hidden'}/>
        {
          blogs.map((blog, index) =>
            <div className={`flex items-center w-[70%] max-w-[500px] ${index % 2 !== 0 && 'xl:row-span-2 justify-self-end mr-[15%]'}`}>
              <div className=' relative'>
                <Image src={blog.image} width={500} height={620} className='' alt=''></Image>
                <div className={`w-[28%] h-full  absolute top-0 right-0`} style={{backgroundColor: blog.bgColor}}></div>
                <div className={`w-[28%] h-full  absolute top-0 right-[28%] opacity-50`} style={{backgroundColor: blog.bgColor}}></div>
                <div className='absolute left-[44%] h-full w-full top-0 flex flex-col justify-center max-w-[80%]'>
                  <p className=' text-base sm:text-3xl md:text-4xl xl:text-[32px] text-[#AB91FF] dark:text-white font-title leading-tight mb-5 md:mb-9 xl:mb-12'>{blog.title}</p>
                  <Link href={blog.link} className='text-xl flex items-center gap-1 whitespace-nowrap text-white'>See Details <BiRightArrowAlt size={40} /></Link>
                </div>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default BolgsSecondSection