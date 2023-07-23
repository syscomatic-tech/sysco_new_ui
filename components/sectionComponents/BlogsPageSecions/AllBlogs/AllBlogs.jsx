import Button from '@/components/button/Button'
import { Butcherman } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const AllBlogs = () => {
    const [selectedCategory, setSelectedCategory] = useState(0)
    const blogs = [
        {
            title: 'Mastering Responsive Web Design: Techniques and Best ',
            thumbnail: 'https://i.ibb.co/mXxm8W7/Rectangle-4818.png',
            date: 'jun 27, 2023',
            authorImg: 'https://i.ibb.co/j67VDBn/Ellipse-6.png',
            authorName: 'Safayat Hussain',
            desc: 'Lorem ipsum dolor, g lonreg njr;esng;kresgkljsne g;rtgklso;gnk bkltnbklghklts glgh;oit sit amet consectetur adipisicing elit. Facilis, molestias autem.',
            link: '/blog/1',
            category: 'Web Development',
        },
        {
            title: 'Mastering Responsive Web Design: Techniques and Best ',
            thumbnail: 'https://i.ibb.co/Sry5ryg/couqud3cfc971.jpg',
            date: 'jun 27, 2023',
            authorImg: 'https://i.ibb.co/j67VDBn/Ellipse-6.png',
            authorName: 'Safayat Hussain',
            desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, molestias autem.',
            link: '/blog/1',
            category: 'Web Development',
        },
        {
            title: 'Mastering Responsive Web Design: Techniques and Best ',
            thumbnail: 'https://i.ibb.co/mXxm8W7/Rectangle-4818.png',
            date: 'jun 27, 2023',
            authorImg: 'https://i.ibb.co/j67VDBn/Ellipse-6.png',
            authorName: 'Safayat Hussain',
            desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, molestias autem.',
            link: '/blog/1',
            category: 'Web Development',
        },
        {
            title: 'Mastering Responsive Web Design: Techniques and Best ',
            thumbnail: 'https://i.ibb.co/mXxm8W7/Rectangle-4818.png',
            date: 'jun 27, 2023',
            authorImg: 'https://i.ibb.co/j67VDBn/Ellipse-6.png',
            authorName: 'Safayat Hussain',
            desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, molestias autem.',
            link: '/blog/1',
            category: 'Web Development',
        },
        {
            title: 'Mastering Responsive Web Design: Techniques and Best ',
            thumbnail: 'https://i.ibb.co/YXtjySQ/053e9708894ea92ef74d6ff0680b6f37.jpg',
            date: 'jun 27, 2023',
            authorImg: 'https://i.ibb.co/j67VDBn/Ellipse-6.png',
            authorName: 'Safayat Hussain',
            desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, molestias autem.',
            link: '/blog/1',
            category: 'Web Development',
        },
        {
            title: 'Mastering Responsive Web Design: Techniques and Best ',
            thumbnail: 'https://i.ibb.co/mXxm8W7/Rectangle-4818.png',
            date: 'jun 27, 2023',
            authorImg: 'https://i.ibb.co/j67VDBn/Ellipse-6.png',
            authorName: 'Safayat Hussain',
            desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, molestias autem.',
            link: '/blog/1',
            category: 'Web Development',
        },
    ]
    const blogsCategory = [
        {
            title: 'All',
        },
        {
            title: 'Fantasy',
        },
        {
            title: 'NFT',
        },
        {
            title: 'Anime',
        },
        {
            title: 'Game',
        },
    ]
    return (
        <div className='py-20'>
            <h5 className='text-center section-heading text-black dark:text-white'>All Blogs</h5>
            {/* category */}
            <div className='flex items-center justify-center gap-[5%] mt-10 font-title'>
                {
                    blogsCategory.map((item, index) => <div className='flex flex-col items-center'>
                        <button className={`text-3xl ${selectedCategory === index ? 'text-primary ' : 'text-white'}`} onClick={() => setSelectedCategory(index)}>{item.title}</button>
                        {
                            selectedCategory === index && <div className='w-[140%] outline outline-[1px] outline-primary'></div>
                        }
                    </div>)
                }
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-5 gap-y-10 sm:gap-y-[100px] md:gap-y-12 xl:gap-y-8'>
                {/*  */}
                {
                    blogs.map(blog =>
                        <Link href={blog.link} className='my-10 relative flex flex-col items-end'>
                            <Image className='w-full aspect-[398/250] object-cover' src={blog.thumbnail} width={398} height={250} alt='' />
                            <div className='-my-[20%] p-4 bg-darkGradiantBg w-[89%] h-full flex flex-col justify-between'>
                                <div>
                                    <div className='w-max mt-2'>
                                        <div className='bg-primary h-[30px] sm:h-[35px] w-full ml-[5px] mb-[-6px]'>
                                        </div>
                                        <div className='bg-white px-2.5 py-1.5 -mt-[36px] sm:-mt-[42px]'>
                                            <p className='text-black font-title text-[12px] sm:text-base'>{blog.category}</p>
                                        </div>
                                    </div>
                                    <div className='mt-6'>
                                        <p className='text-white text-lg sm:text-xl xl:text-2xl font-title leading-tight'>{blog.title}</p>
                                        <p className=' text-lightGray mt-2 text-[13px] sm:text-sm lg:text-base leading-tight'>{blog.desc}</p>
                                    </div>
                                </div>
                                <div className='mt-6 flex items-center gap-3 md:gap-5'>
                                    <Image src={blog.authorImg} width={40} height={40} className='w-[30px] h-[30px] md:w-[40px] md:h-[40px]' alt='' />
                                    <div>
                                        <p className='text-[13px] md:text-[14px] text-white font-title'>{blog.authorName}</p>
                                        <p className='text-[10px] text-lightGray font-title'>{blog.date}</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )
                }

            </div>
            <div className='mt-24 flex justify-center'>
                <Button type={'secondary'}>More Blogs</Button>
            </div>
        </div>
    )
}

export default AllBlogs