import axios from "axios";
import Link from "next/link";
import Carousel from "nuka-carousel";
import React, { useEffect, useState } from "react";
const BrandsSection = () => {
  const [data, setData] = useState([]);
  const [screenWidth, setScreenWidth] = useState(null);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    axios
    .get(`${process.env.NEXT_PUBLIC_BASE_URL}/brands?locale=en`)
    .then((res) => {
      let brandDouble = []
      res?.data?.docs?.map(brand => {
        brandDouble.push(brand);
      })
      res?.data?.docs?.map(brand => {
        brandDouble.push(brand);
      })
      setData(brandDouble);
    });
    // 
    const interval = setInterval(() => {
      setCounter((counter) => counter + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setScreenWidth(window.innerWidth);
    }
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [screenWidth, counter]);
  return (
    <div className="" id="services">
      <div className="py-12">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full ">
            {/* <div className="flex flex-wrap items-center justify-between"> */}
            <Carousel
              // animation="fade"
              autoplay
              pauseOnHover
              autoplayInterval={3000}
              speed={500}
              slidesToShow={screenWidth > 3000 ? 6 : screenWidth > 1024 ? 5 : screenWidth > 920 ? 4 : screenWidth > 720 ? 3 : 2}
              wrapAround={true}
              renderBottomCenterControls={false}
              renderCenterLeftControls={
                data?.length > 6
                  ? ({ previousSlide }) => (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-7 h-7 text-gray-500 font-bold cursor-pointer hover:text-gray-100"
                        onClick={previousSlide}
                        data-aos-delay={4000}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 19.5L8.25 12l7.5-7.5"
                        />
                      </svg>
                    )
                  : false
              }
              renderCenterRightControls={
                data?.length > 6
                  ? ({ nextSlide }) => (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-7 h-7 text-gray-500 font-bold cursor-pointer hover:text-gray-100"
                        onClick={nextSlide}
                        data-aos-delay={4000}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.25 4.5l7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    )
                  : false
              }
            >
              {data?.map((item, index) => (
                <a
                  key={index}
                  href={`${item?.website}`}
                  className="flex h-9 sm:h-[50px] items-center mx-auto justify-center"
                  data-aos-delay={50 + index * 100}
                  data-aos="fade-up"
                  target='blank'
                >
                  <img src={item?.logo?.url} alt="image" className="h-full" />
                </a>
              ))}
            </Carousel>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandsSection;
