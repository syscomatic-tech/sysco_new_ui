import Image from 'next/image'
import React from 'react'
import { useSelector } from 'react-redux'

const GradiantCircle = ({ size, className }) => {
    const theme = useSelector(state => state.theme.value)
    return (
        <div>
            < style
                dangerouslySetInnerHTML={{
                    __html:
                        "\n  .gradiant-circle {\n  animation: circleAnimation infinite 5s;\n}\n\n@keyframes circleAnimation {\n  0% {\n   margin-right: 0px;\n  }\n\n 50% {\n   margin-right: 7px;\n\n  }\n  100% {\n   margin-right: 0px;\n\n  }\n}\n"
                }
                }
            />
            {

                theme === 'dark' ?
                    <div className={`${className} z-30 gradiant-circle h-[${size}px] bg-darkGradiantBg rounded-full`} style={{ width: `${size}px`, height: `${size}px` }}></div>
                    :
                    <div className={`${className} z-30 gradiant-circle h-[${size}px] bg-darkGradiantBg rounded-full opacity-50`} style={{ width: `${size}px`, height: `${size}px` }}></div>

            }
        </div>
    )
}

export default GradiantCircle