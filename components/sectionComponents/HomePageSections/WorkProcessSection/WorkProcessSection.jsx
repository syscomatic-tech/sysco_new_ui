import SideShade from '@/components/shapes/SideShade'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { useSelector } from 'react-redux'

const WorkProcessSection = () => {
    const [hoverProcess, sethoverProcess] = useState(0)
    const theme = useSelector(state => state.theme.value)
    const [hoverColor, sethoverColor] = useState('')
    useEffect(() => {
        if (theme === 'dark') {
            sethoverColor('#FFFFFF')
        } else {
            sethoverColor('#0D0D0D')

        }
    }, [theme])
    const [data, setData] = useState([]);
    useEffect(() => {
        axios
        .get(`${process?.env?.NEXT_PUBLIC_BASE_URL}/home_page_work_process?locale=en`)
        .then((res) => {
            setData(res?.data?.docs[0]);
        });
    }, []);
    const svgElementFromString = (str, parentID) => {
        const btn = document.querySelector(parentID);
        if(!btn){
          return
        }
        btn.innerHTML = str;
      };
    return (
        <div className='py-12 relative'>
            <h5 className='section-heading max-w-[430px] xl:max-w-[530px] text-black dark:text-white leading-tight'>{data?.title}</h5>
            <div className=' grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 sm:gap-y-8 xl:grid-cols-7 mt-12'>
                {data?.process?.map((item,index) =>
                    <div key={index}>
                        <div className='flex justify-between'>
                            <div onMouseEnter={() => sethoverProcess(index)} onMouseLeave={() => sethoverProcess(-1)} className={`sm:px-5 flex sm:flex-col justify-between sm:justify-start items-center gap-9`}>
                                <div className='flex items-center sm:w-full flex-row-reverse sm:flex-row gap-2 sm:gap-0 sm:justify-between'>
                                    <div id={`process_item_${index}`}>
                                        {
                                            hoverProcess !== index ? svgElementFromString(item.icon, `#process_item_${index}`) : svgElementFromString(item.hover_icon, `#process_item_${index}`)
                                        }
                                    </div>
                                    <p className={`text-[48px] md:text-[60px] xl:text-[82px] font-medium outline-text ${hoverProcess === index ? 'text-black' : 'text-transparent'} dark:${hoverProcess === index && 'text-white'}`}>{index + 1}</p>
                                </div>
                                <div className='text-center sm:text-start'>
                                    <p className=' text-lg font-title text-black dark:text-white font-medium' style={{ color: hoverProcess === index && '#551FFF' }}>{item?.title}</p>
                                    <p className={`text-sm  font-title ${hoverProcess === index ? 'text-black' : 'text-lightGray'} dark:${hoverProcess === index && 'text-white'}`}>{item?.description}</p>
                                </div>
                            </div>
                            {
                                index + 1 !== 7 &&
                                <div className='sm:flex flex-col hidden'>
                                    <div className='w-[2px] -mb-1 rounded-b-full h-[100px] md:h-[130px] xl:h-[130px] bg-[#252832]'>

                                    </div>
                                    <div>
                                        <IoIosArrowBack size={20} fontWeight={700} className='text-primary -ml-1.5 z-10 rotate-180' />
                                    </div>
                                    <div className='w-[2px] -mt-1 rounded-t-full h-[100px] md:h-[130px] xl:h-[130px] bg-[#252832]'>

                                    </div>
                                </div>
                            }
                        </div>
                        {
                            index + 1 !== 7 &&
                            <div className='sm:hidden flex pb-9 pt-3'>
                                <div className='h-[1.9px] -mr-1 rounded-b-full w-full bg-[#252832]'>

                                </div>
                                <div>
                                    <IoIosArrowBack size={20} className='text-primary -mt-1.5 z-10 -rotate-90' />
                                </div>
                                <div className='h-[1.9px] -ml-1 rounded-t-full w-full bg-[#252832]'>

                                </div>
                            </div>
                        }
                    </div>
                )
                }
            </div>
            <div className='w-screen relative left-[-20vw] 5xl:left-[-35vw] 10xl:left-[-40vw]'>

                <div className='absolute top-112 left-[-500px] rotate-[100deg] hidden lg:block'>
                    <SideShade className={'w-[1000px]'} />
                </div>
            </div>
        </div>
    )
}

export default WorkProcessSection