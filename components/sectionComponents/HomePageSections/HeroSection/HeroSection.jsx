import Button from "@/components/button/Button";
import GradiantCircle from "@/components/shapes/GradiantCircle";
import HeroSectionGraphics from "@/components/shapes/HeroSectionGraphics";
import SideShade from "@/components/shapes/SideShade";
import axios from "axios";
import React, { useEffect, useState } from "react";

const HeroSection = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BASE_URL}/home_page_hero?locale=en`)
      .then((res) => {
        setData(res?.data?.docs[0]);
      });
  }, []);
  return (
    <div className="">
      <style>
        {`
  .changeHeroTextText::before {
    content: '${data?.title_change_1}';
    animation: changeText infinite 5s;
  }

  @keyframes changeText {
    0% {
      content: '${data?.title_change_1}';
    }
    33% {
      content: '${data?.title_change_2}';
    }
    66% {
      content: '${data?.title_change_3}';
    }
    100% {
      content: '${data?.title_change_1}';
    }
  }
  `}
      </style>
      <div className="w-screen relative left-[-20vw] 5xl:left-[-35vw] 10xl:left-[-40vw]">
        <div className="absolute top-[-250px] left-[-200px] rotate-[120deg] max-w-full">
          <SideShade />
        </div>
      </div>
      <div className="py-12 flex justify-center xl:justify-between items-center">
        <div className="relative">
          <GradiantCircle
            size={25}
            className={"absolute -top-20 right-0 hidden xl:block"}
          />
          <p className="text-[36px] sm:text-[50px] lg:text-[72px] xl:text-[60px] 2xl:text-[72px] text-center xl:text-left leading-none font-medium flex flex-col font-title">
            <span className="text-[#262626] dark:text-white">
              {data?.title_unchangeable}
            </span>
            <span className="text-primary-light changeHeroTextText xl:w-[600px] 2xl:w-[686px] whitespace-nowrap"></span>
          </p>
          <div className=" w-36 h-36 rounded-full bg-primary blur-[150px] absolute top-20"></div>
          <p className="my-5 text-black dark:text-white max-w-[642px] text-sm md:text-xl lg:text-2xl xl:text-3xl text-center xl:text-left">
            {data?.subtitle}
          </p>
          <div className="flex justify-center xl:justify-start">
            <Button className={"hover:bg-primary-light"} type={"primary"}>
              {data?.button}
            </Button>
          </div>
          <div className="hidden xl:block">
            <div className="flex items-center mt-5 ml-32 gap-12">
              <GradiantCircle size={25} className={""} />
              <GradiantCircle size={95} className={""} />
            </div>
          </div>
        </div>
        <div className="relative hidden xl:block">
          <HeroSectionGraphics img_light={data?.image_light} img_dark={data?.image_dark}/>
          <div className=" w-36 h-36 rounded-full bg-primary blur-[150px] absolute top-0 right-0"></div>
          <div className=" w-36 h-36 rounded-full bg-primary blur-[150px] absolute top-[300px] right-0"></div>
          <GradiantCircle size={95} className={"absolute top-20 -right-32"} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
