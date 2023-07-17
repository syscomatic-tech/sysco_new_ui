import Image from 'next/image'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const HeroSectionGraphics = () => {
    const [imageSrc, setImageSrc] = useState('/assets/shapes/hero-shape-dark.png')

    return <div id='scroll-image' className='imageChange bg-no-repeat bg-contain w-[600px] h-[600px] '>
        <style
            dangerouslySetInnerHTML={{
                __html:
                    "\n.imageChange{\n    animation: changeImage 3s linear infinite   ;\nbackground-image: url('/assets/shapes/hero-shape-dark.png');\n}\n\n@keyframes changeImage {\n 0 % {\n\n background-image: url('/assets/shapes/hero-shape-dark.png');\n  }\n\n50% {\n    background-image: url('/assets/shapes/hero-shape-light.png');\n    \n  }\n100% {\n\n    background-image: url('/assets/shapes/hero-shape-dark.png');\n  }\n}\n        "
            }}
        />
    </div>

}

export default HeroSectionGraphics