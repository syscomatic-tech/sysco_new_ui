import SideShade from '@/components/shapes/SideShade'
import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const AboutPageBenifitSection = () => {
    const [data, setData] = useState({});
    const svgElementFromString = (str, parentID) => {
        const btn = document.querySelector(parentID);
        if(!btn){
            return
        }
        btn.innerHTML = str;
    };
    useEffect(() => {
        axios   
        .get(`${process.env.NEXT_PUBLIC_BASE_URL}/about_page_benifits?locale=en`)
        .then((res) => {
            setData(res?.data?.docs[0]);
        });
    }, []);
    return (
        <div className='pt-28'>
            <h5 className='text-black dark:text-white section-heading text-center flex-col flex justify-center leading-tight max-w-[300px] md:max-w-[400px] xl:max-w-[600px] mx-auto'>{data?.title}</h5>
            <div className='grid lg:grid-cols-2 mt-12 gap-x-14 gap-y-7'>
                {
                    data?.benifits?.map((benifit, index) =>
                        <div className={`flex items-center bg-darkGradiantBg rounded-xl ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ' flex-row'}`} key={index}>
                            <div className={` ${index % 2 !== 0 ? '-ml-7 lg:-m-0 lg:-mr-7' : '-ml-7'} py-5 `} id={`benifit_${index}`}>
                                {svgElementFromString(benifit?.icon, `#benifit_${index}`)}
                            </div>
                            <div className={` ${index % 2 !== 0 ? 'lg:text-end' : 'text-start'} p-5`}>
                                <p className={`font-title text-white font-semibold text-xl md:text-2xl xl:text-4xl `}>{benifit?.title}</p>
                                <p className='text-white text-base md:text-xl xl:text-3xl leading-tight mt-2'>{benifit?.description}</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default AboutPageBenifitSection