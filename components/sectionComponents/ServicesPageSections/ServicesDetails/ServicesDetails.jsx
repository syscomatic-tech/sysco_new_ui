import axios from 'axios'
import Link from 'next/link'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'

const ServicesDetails = () => {
    const theme = useSelector(state => state.theme.theme)
    const [data, setData] = useState({});
    useEffect(() => {
      axios
        .get(`${process.env.NEXT_PUBLIC_BASE_URL}/services?locale=en`)
        .then((res) => {
          setData(res?.data?.docs[0]);
        });
    }, []);
    const services = [
        {
            service: 'Product Design (UI/UX)',
            desc: "The definition of product design describes the process of imagining, creating, and iterating products that solve users' problems or address specific needs in a given market. The key to successful product design is understanding the end-user customer, the person for whom the product is being created."
        },
        {
            service: 'Web Application Development',
            desc: "Aaddress specific needs in a given market. The key to successful product design is understanding the end-user customer, the person for whom the product is being created."
        },
        {
            service: 'Mobile App Development',
            desc: "The definition of product design describes the process of imagining, creating, and iterating products that solve users' problems or address specific needs in a given market. The key to successful product design is understanding the end-user customer, the person for whom the product is being created."
        },
        {
            service: "Software Testing and QA",
            desc: "the definition of product design describes the process of imagining, creating, and iterating products that solve users' problems or address specific needs in a given market. The key to successful product design is understanding the end-user customer, the person for whom the product is being created."
        },
        {
            service: "DevOps",
            desc: "The definition of product design describes the process of imagining, creating, and iteend-user customer, the person for whom the product is being created."
        },
        {
            service: "IoT Development",
            desc: "The definition of product design describes the process of imagining, creating, and iterating products that solve users' problems or addre key to successful product design is understanding the end-user customer, the person for whom the product is being created."
        },
        {
            service: "Software Audit",
            desc: "The definition of product design describes the process of imagining, creating, and iterating products that solve users' problems or address specific needs in a given market. The key to successful product design is understanding the end-user customer, the person for whom the product is being created."
        },
        {
            service: "ERP Solutions",
            desc: "The definition of product design describes the process of imagining, creating, and iterating products that solve users' problems or address speoduct is being created."
        },
    ]
    return (
        <div className='pt-12 flex flex-col divide-y divide-lightGray'>
            {
                data?.services?.map((service, index) => <div key={index} className={`py-10 md:py-16 xl:py-20 flex items-center gap-7 sm:gap-10 md:gap-14 justify-between ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div>
                        <div className='max-w-[570px] flex gap-5 md:gap-6 xl:gap-7'>
                            <p className='text-xl md:text-[40px] xl:text-[62px] text-black dark:text-white font-title leading-tight'>{index < 10 ? '0' + (index + 1) : index + 1}</p>
                            <p className='text-xl md:text-[40px] xl:text-[62px] text-primary-light font-title leading-tight'>{service?.name}</p>
                        </div>
                        <p className='text-base md:text-xl xl:text-[32px] leading-tight max-w-[914px] mt-8 text-black dark:text-white'>{service?.description}</p>
                    </div>
                    <div>
                        <Link href={''} className='bg-transparent w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20  xl:w-[200px] xl:h-[200px] rounded-full border border-lightGray flex items-center justify-center hover:bg-primary hover:border-0 duration-300'>
                            <svg className='fill-black dark:fill-white' xmlns="http://www.w3.org/2000/svg" width="25%" height="49" viewBox="0 0 49 49" fill="none">
                                <path d="M4.19231 0.5V7.88462H35.9092L0.5 43.2938L5.70615 48.5L41.1154 13.0908V44.8077H48.5V0.5H4.19231Z" />
                            </svg>
                        </Link>
                    </div>
                </div>)
            }
        </div>
    )
}

export default ServicesDetails