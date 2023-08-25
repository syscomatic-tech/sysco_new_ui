import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const ServicesHeroSection = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BASE_URL}/services_page_hero?locale=en`)
      .then((res) => {
        setData(res?.data?.docs[0]);
      });
  }, []);
  return (
    <div className={`bg_services_hero bg-center bg-cover bg-no-repeat`}>
      <style>
        {`
            .bg_services_hero{
                background-image: url(${data?.bg_img?.url})   
            }
        `}
      </style>
      <div className="py-12 xl:py-28">
        <p className="text-[36px] sm:text-[50px] lg:text-[72px] xl:text-[60px] 2xl:text-[72px] text-primary-light text-center font-title">
          {data?.title}
        </p>
        <p className="text-base lg:text-xl text-black dark:text-white hidden md:block mt-10 max-w-[400px] lg:max-w-[477px] text-center mx-auto">
          {data?.subtitle}
        </p>
      </div>
    </div>
  );
};

export default ServicesHeroSection;
