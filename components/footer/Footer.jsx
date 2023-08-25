import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
const Footer = () => {
  const [data, setData] = useState({});
  const theme= useSelector(state => state.theme.value);
  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BASE_URL}/footer?locale=en`)
      .then((res) => {
        setData(res?.data?.docs[0]);
      });
  }, []);
  const svgElementFromString = (str, parentID) => {
    const container = document.querySelector(parentID);
    if(!container) return
    container.innerHTML = str;
  };
  const router = useRouter();
  return (
    <div className={`pt-16 pb-10 `}>
      <div className=" flex  flex-wrap lg:flex-nowrap justify-center">
        <div className="p-5 md:p-12 w-full max-w-[435px] border border-lightGray">
          <div id="logo_container_footer">
            {/* sysco blue svg */}
            {
                svgElementFromString(data?.sysco_logo, '#logo_container_footer')
            }
          </div>
          <p className="text-black dark:text-white mt-7 text-sm md:text-lg">
            {
                data?.description
            }
          </p>
          <div className="flex items-center gap-6 mt-8">
            {data?.social_media?.map((item, index) => 
              <Link
                href={item.link}
                target="_blank"
                key={index}
                id={`footer_social_media-${index}`}
                className="text-[30px] text-black dark:text-white"
              >
                {
                    theme === 'dark' ? svgElementFromString(item.icon_dark, `#footer_social_media-${index}`) : svgElementFromString(item.icon_light, `#footer_social_media-${index}`)
                }
              </Link>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 grid-rows-4 divide-y w-full max-w-[435px] border border-lightGray">
          {data?.navigations?.map((item, index) => (
            <Link
              href={item.link}
              key={index}
              className="text-center py-3 flex justify-center items-center text-xl md:text-2xl font-title text-black dark:text-white"
            >
              {item.text}
            </Link>
          ))}
        </div>
        <div className=" flex items-center w-full p-5 md:p-12 max-w-[435px] border border-lightGray">
          <div className="flex flex-col gap-8 max-w-[335px]">
            {data?.contact?.map((item, index) => (
              <Link
                href={item.link}
                key={index}
                className="flex text-sm md:text-lg gap-7 text-black dark:text-white items-center"
              >
                <div id={`footer_contact_${index}`}>{svgElementFromString(item.icon, `#footer_contact_${index}`)}</div>
                {item.info}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="relative ">
        <p className="text-sm md:text-lg text-lightGray text-center pt-8 font-medium">
          All rights reserved to{" "}
          <span className="text-primary font-bold">Syscomatic™</span>{" "}
          Technologies
        </p>
        <Link
          href={router.pathname}
          className="absolute right-0 top-5 hidden md:block"
          id="scroll_up_icon"
        >
          {svgElementFromString(data?.up_scroll_icon, '#scroll_up_icon')}
        </Link>
      </div>
    </div>
  );
};

export default Footer;
