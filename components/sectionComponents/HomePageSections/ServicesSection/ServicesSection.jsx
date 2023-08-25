import axios from "axios";
import React, { useEffect, useState } from "react";

const ServicesSection = () => {
  const svgElementFromString = (str, parentID) => {
    const container = document.querySelector(parentID);
    if (!container) {
      return
    }
    container.innerHTML = str;
  };
  const [hoverService, setHoverService] = useState("");
  const [data, setData] = useState({});
  useEffect(() => {
    axios
    .get(`${process.env.NEXT_PUBLIC_BASE_URL}/services?locale=en`)
    .then((res) => {
      setData(res?.data?.docs[0]);
    });
    setTimeout(() => {
      setHoverService('i')
    }, 1000);
  }, []);
  return (
    <div className="py-24">
      <h5 className="text-black dark:text-white sm:max-w-[400px] md:max-w-[500px] lg:max-w-[560px] xl:max-w-[660px] leading-tight section-heading">
        {data?.title}
      </h5>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 mt-12">
          {data?.services?.map((service, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoverService(service?.id)}
              onMouseLeave={() => setHoverService("")}
              className="flex flex-col items-center gap-4 py-10 border border-[#242731] bg-transparent hover:bg-darkGradiantBg"
            >
                <div id={`service-container-${index}`}>
                  {hoverService !== service?.id
                    ? svgElementFromString(
                        service?.icon,
                        `#service-container-${index}`
                      )
                    : svgElementFromString(
                        service?.hover_icon,
                        `#service-container-${index}`
                      )}
                  
              </div>
                <p className='text-sm font-medium md:text-xl xl:text-3xl text-black max-w-[90px] md:max-w-[130px] xl:max-w-[160px] text-center dark:text-white' style={{color: hoverService === service?.id && '#ffffff', fontWeight: hoverService === service?.id && 600}}>{service.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
