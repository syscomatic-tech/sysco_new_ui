import Link from 'next/link'
import React from 'react'
import Button from '../button/Button'
import { HiSun } from 'react-icons/hi'
import { TbMoonFilled } from 'react-icons/tb'
import { useDispatch, useSelector } from 'react-redux'
import { setTheme } from '@/redux/slices/themeSlice'

const Navbar = () => {
    const theme = useSelector(state => state.theme.value)
    const dispatch = useDispatch()
    const handleTheme = () => {
        if (theme === 'dark') {
            dispatch(setTheme('light'))
            document.documentElement.classList.remove('dark')
        }
        else {
            dispatch(setTheme('dark'))
            document.documentElement.classList.add('dark')
        }
    }
    return (
        <div className=''>
            <div className="container flex justify-between items-center py-3">
                {/* sysco logo svg */}
                <svg width="180" height="31" viewBox="0 0 181 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M91.0134 24.944H87.7688C87.2333 24.944 86.9683 24.6789 86.9683 24.1434V6.2771C86.9683 5.74164 87.2333 5.47656 87.7688 5.47656H91.0134C91.5488 5.47656 91.8139 5.74164 91.8139 6.2771V7.53888H91.9676C92.2751 6.92919 92.7894 6.43085 93.5157 6.04913C94.242 5.66742 95.0744 5.47656 96.018 5.47656H97.089C99.305 5.47656 100.895 6.29301 101.86 7.92059C102.725 6.29301 104.214 5.47656 106.33 5.47656H107.438C109.399 5.47656 110.878 6.01202 111.886 7.07764C112.893 8.14856 113.391 9.68601 113.391 11.6953V24.1434C113.391 24.6789 113.126 24.944 112.591 24.944H109.346C108.811 24.944 108.546 24.6789 108.546 24.1434V11.9286C108.546 11.1121 108.381 10.5343 108.047 10.1897C107.719 9.84506 107.146 9.67541 106.33 9.67541H105.375C103.621 9.67541 102.74 10.6562 102.74 12.6125V24.1434C102.74 24.6789 102.459 24.944 101.903 24.944H98.6953C98.1599 24.944 97.8948 24.6789 97.8948 24.1434V11.9286C97.8948 11.1121 97.7252 10.5343 97.3806 10.1897C97.036 9.84506 96.4581 9.67541 95.6416 9.67541H94.4594C92.7046 9.67541 91.8245 10.6456 91.8245 12.5754V24.1434C91.8192 24.6789 91.5488 24.944 91.0134 24.944Z" fill={theme !=='dark'? 'black' : 'white'} />
                    <path d="M17.0722 17.5962V18.8845C17.0722 20.8195 16.5209 22.3464 15.4288 23.4067C14.3366 24.4723 12.8045 25.0131 10.8641 25.0131H6.73947C4.79909 25.0131 3.26693 24.4723 2.17481 23.4067C1.08269 22.3411 0.531321 20.8195 0.531321 18.8845V18.1263C0.531321 17.6333 0.759289 17.4053 1.25234 17.4053H4.47569C4.96874 17.4053 5.19671 17.6333 5.19671 18.1263V18.4285C5.19671 19.4146 5.38757 20.0773 5.78518 20.4484C6.1828 20.8195 6.87731 20.9998 7.91642 20.9998H9.69244C10.705 20.9998 11.3943 20.8089 11.8078 20.4113C12.216 20.0137 12.4175 19.3033 12.4175 18.2377V17.7817C12.4175 17.0289 12.1047 16.4404 11.495 16.0375C10.8959 15.6399 10.1378 15.4013 9.24711 15.3271C8.37235 15.2529 7.41277 15.1044 6.40017 14.8924C5.38757 14.6803 4.43328 14.3993 3.55322 14.0653C2.68906 13.7313 1.95745 13.0686 1.37957 12.0931C0.7964 11.1123 0.499512 9.83466 0.499512 8.29191V6.96651C0.499512 5.03144 1.05088 3.50458 2.143 2.44427C3.23513 1.37865 4.76728 0.837891 6.70766 0.837891H10.4877C12.4493 0.837891 13.9973 1.37865 15.0894 2.44427C16.1816 3.50988 16.7329 5.03144 16.7329 6.96651V7.68223C16.7329 8.17527 16.505 8.40324 16.0119 8.40324H12.7992C12.3061 8.40324 12.0782 8.17527 12.0782 7.68223V7.45426C12.0782 6.44166 11.8873 5.76836 11.4897 5.39725C11.0921 5.02614 10.3976 4.84588 9.35845 4.84588H7.88461C6.81899 4.84588 6.11388 5.04734 5.73217 5.45556C5.35045 5.86378 5.1649 6.63251 5.1649 7.79356V8.51457C5.1649 9.73924 6.23052 10.4496 8.33524 10.6299C10.4612 10.8049 12.375 11.2343 14.0238 11.9129C14.888 12.284 15.6196 12.952 16.2028 13.9063C16.7754 14.8659 17.0722 16.1064 17.0722 17.5962Z" fill={theme !=='dark'? 'black' : 'white'} />
                    <path d="M22.9089 31.396H20.4648C19.9559 31.396 19.7014 31.115 19.7014 30.5583V28.003C19.7014 27.441 19.9559 27.1653 20.4648 27.1653H21.2654C22.8664 27.1653 23.9586 26.9426 24.5311 26.4973C25.1037 26.052 25.5437 25.1931 25.8459 23.9207H23.826C23.3436 23.9207 23.0255 23.6557 22.8717 23.1202L18.4025 6.2771C18.2488 5.74164 18.4396 5.47656 18.9751 5.47656H22.3734C22.8824 5.47656 23.2004 5.74164 23.3277 6.2771L26.6094 20.3634H26.7631L30.0077 6.2771C30.1084 5.74164 30.4265 5.47656 30.962 5.47656H34.1694C34.8056 5.47656 35.0601 5.75755 34.9328 6.31421L30.2727 24.944C29.7108 27.054 28.8466 28.6604 27.675 29.7525C26.5086 30.8499 24.9182 31.396 22.9089 31.396Z" fill={theme !=='dark'? 'black' : 'white'} />
                    <path d="M44.4378 25.024H37.1799C36.671 25.024 36.4165 24.7589 36.4165 24.2235V21.7795C36.4165 21.4985 36.4695 21.3023 36.5703 21.1857C36.671 21.0691 36.8777 21.016 37.1799 21.016H43.5577C44.8036 21.016 45.4292 20.6343 45.4292 19.8709V19.68C45.4292 19.0704 44.9096 18.4819 43.8652 17.9252L40.0852 15.8258C38.7863 15.1631 37.832 14.4527 37.2223 13.6893C36.6127 12.9258 36.3052 11.945 36.3052 10.7522C36.3052 8.97086 36.777 7.66137 37.7154 6.81842C38.6591 5.98077 40.1329 5.55664 42.1422 5.55664H48.52C49.029 5.55664 49.2834 5.82172 49.2834 6.35718V8.83832C49.2834 9.1193 49.2304 9.31546 49.1297 9.43209C49.029 9.54873 48.8222 9.60174 48.52 9.60174H43.2131C41.9673 9.60174 41.3417 9.91984 41.3417 10.556V10.7469C41.3417 11.3089 41.8877 11.8814 42.9852 12.4646L46.8394 14.7549C48.1648 15.4653 49.0926 16.1969 49.628 16.9497C50.1635 17.7026 50.4286 18.6886 50.4286 19.908C50.4286 23.3222 48.4299 25.024 44.4378 25.024Z" fill={theme !=='dark'? 'black' : 'white'} />
                    <path d="M65.6404 21.5452V24.1801C65.6404 24.4611 65.5821 24.6572 65.4708 24.7739C65.3541 24.8905 65.1474 24.9435 64.8399 24.9435H59.1513C57.142 24.9435 55.5886 24.4081 54.4965 23.3425C53.4044 22.2715 52.853 20.7341 52.853 18.7248V11.7002C52.853 9.6909 53.3991 8.14814 54.4965 7.08252C55.5886 6.0116 57.142 5.48145 59.1513 5.48145H64.8399C65.3753 5.48145 65.6404 5.74652 65.6404 6.28198V8.91687C65.6404 9.19785 65.5821 9.39401 65.4708 9.51064C65.3541 9.62728 65.1474 9.68029 64.8399 9.68029H59.9147C59.1248 9.68029 58.5575 9.84994 58.2182 10.1945C57.8736 10.5391 57.704 11.117 57.704 11.9335V18.5021C57.704 19.3186 57.8736 19.8964 58.2182 20.241C58.5628 20.5856 59.1301 20.7553 59.9147 20.7553H64.8399C65.3753 20.7447 65.6404 21.0151 65.6404 21.5452Z" fill={theme !=='dark'? 'black' : 'white'} />
                    <path d="M77.4089 24.9435H74.0106C72.0013 24.9435 70.4479 24.4081 69.3505 23.3425C68.2584 22.2715 67.707 20.7341 67.707 18.7248V11.7002C67.707 9.6909 68.2531 8.14814 69.3505 7.08252C70.4426 6.0116 71.996 5.48145 74.0106 5.48145H77.4089C79.3917 5.48145 80.9398 6.02221 82.0478 7.10373C83.1558 8.18525 83.7072 9.71741 83.7072 11.7055V18.7301C83.7072 20.7129 83.1558 22.2503 82.0478 23.3319C80.9398 24.4028 79.3917 24.9435 77.4089 24.9435ZM74.7369 20.7818H76.6826C77.499 20.7818 78.0769 20.6174 78.4215 20.2834C78.7661 19.9547 78.9358 19.3822 78.9358 18.5657V11.8486C78.9358 11.0322 78.7661 10.4596 78.4215 10.1309C78.0769 9.80223 77.499 9.63258 76.6826 9.63258H74.7369C73.9205 9.63258 73.3479 9.79693 73.0192 10.1309C72.6905 10.4596 72.5209 11.0375 72.5209 11.8486V18.5657C72.5209 19.3822 72.6852 19.9547 73.0192 20.2834C73.3479 20.6174 73.9205 20.7818 74.7369 20.7818Z" fill={theme !=='dark'? 'black' : 'white'} />
                    <path d="M124.269 24.9435H123.352C121.343 24.9435 119.789 24.4081 118.692 23.3425C117.6 22.2715 117.048 20.7341 117.048 18.7248V11.7002C117.048 9.6909 117.594 8.14814 118.692 7.08252C119.784 6.0116 121.337 5.48145 123.352 5.48145H132.168C132.73 5.48145 133.006 5.74652 133.006 6.28198V24.1483C133.006 24.6838 132.725 24.9488 132.168 24.9488H128.961C128.426 24.9488 128.16 24.6838 128.16 24.1483V22.8865H128.007C127.726 23.5757 127.233 24.09 126.517 24.4346C125.807 24.7739 125.054 24.9435 124.269 24.9435ZM128.16 17.8447V10.0938C128.16 9.81283 128.007 9.67499 127.705 9.67499H124.115C123.299 9.67499 122.726 9.84464 122.398 10.1892C122.069 10.5338 121.899 11.1117 121.899 11.9282V18.4968C121.899 19.3133 122.064 19.8911 122.398 20.2357C122.726 20.5803 123.299 20.75 124.115 20.75H125.526C127.286 20.7447 128.16 19.7798 128.16 17.8447Z" fill={theme !=='dark'? 'black' : 'white'} />
                    <path d="M124.269 24.9435H123.352C121.343 24.9435 119.789 24.4081 118.692 23.3425C117.6 22.2715 117.048 20.7341 117.048 18.7248V11.7002C117.048 9.6909 117.594 8.14814 118.692 7.08252C119.784 6.0116 121.337 5.48145 123.352 5.48145H132.168C132.73 5.48145 133.006 5.74652 133.006 6.28198V24.1483C133.006 24.6838 132.725 24.9488 132.168 24.9488H128.961C128.426 24.9488 128.16 24.6838 128.16 24.1483V22.8865H128.007C127.726 23.5757 127.233 24.09 126.517 24.4346C125.807 24.7739 125.054 24.9435 124.269 24.9435ZM128.16 17.8447V10.0938C128.16 9.81283 128.007 9.67499 127.705 9.67499H124.115C123.299 9.67499 122.726 9.84464 122.398 10.1892C122.069 10.5338 121.899 11.1117 121.899 11.9282V18.4968C121.899 19.3133 122.064 19.8911 122.398 20.2357C122.726 20.5803 123.299 20.75 124.115 20.75H125.526C127.286 20.7447 128.16 19.7798 128.16 17.8447Z" fill={theme !=='dark'? 'black' : 'white'} />
                    <path d="M145.328 20.7455H143.801C142.984 20.7455 142.401 20.5758 142.046 20.2312C141.691 19.8866 141.511 19.3193 141.511 18.5294V10.0946C141.511 9.81361 141.664 9.67047 141.967 9.67047H145.222C145.529 9.67047 145.736 9.61745 145.853 9.50082C145.964 9.38948 146.022 9.18802 146.022 8.91234V6.27746C146.022 5.742 145.752 5.47692 145.222 5.47692H141.967C141.659 5.47692 141.511 5.33378 141.511 5.05279V1.42651C141.511 0.896357 141.246 0.625977 140.71 0.625977H137.503C136.941 0.625977 136.66 0.896357 136.66 1.42651V18.7574C136.66 20.7402 137.211 22.2723 138.319 23.3379C139.427 24.4088 140.986 24.9443 142.995 24.9443H145.322C145.63 24.9443 145.837 24.886 145.953 24.7747C146.07 24.6633 146.123 24.4619 146.123 24.1862V21.546C146.128 21.0158 145.863 20.7455 145.328 20.7455Z" fill={theme !=='dark'? 'black' : 'white'} />
                    <path d="M149.335 4.69201V1.36792C149.335 0.858968 149.589 0.604492 150.098 0.604492H153.422C153.931 0.604492 154.186 0.848365 154.186 1.33081V4.69201C154.186 5.20096 153.931 5.45543 153.422 5.45543H150.098C149.589 5.45543 149.335 5.20096 149.335 4.69201ZM149.335 24.1435V8.77422C149.335 8.23876 149.589 7.97368 150.098 7.97368H153.38C153.916 7.97368 154.181 8.23876 154.181 8.77422V24.1435C154.181 24.4722 154.122 24.6896 154.011 24.7903C153.894 24.891 153.698 24.944 153.417 24.944H150.136C149.6 24.944 149.335 24.679 149.335 24.1435Z" fill={theme !=='dark'? 'black' : 'white'} />
                    <path d="M170.171 21.5452V24.1801C170.171 24.4611 170.112 24.6572 170.001 24.7739C169.884 24.8905 169.678 24.9435 169.37 24.9435H163.681C161.672 24.9435 160.119 24.4081 159.021 23.3425C157.929 22.2715 157.378 20.7341 157.378 18.7248V11.7002C157.378 9.6909 157.924 8.14814 159.021 7.08252C160.114 6.0116 161.667 5.48145 163.681 5.48145H169.37C169.906 5.48145 170.171 5.74652 170.171 6.28198V8.91687C170.171 9.19785 170.112 9.39401 170.001 9.51064C169.884 9.62728 169.678 9.68029 169.37 9.68029H164.445C163.655 9.68029 163.088 9.84994 162.748 10.1945C162.404 10.5391 162.234 11.117 162.234 11.9335V18.5021C162.234 19.3186 162.404 19.8964 162.748 20.241C163.093 20.5856 163.66 20.7553 164.445 20.7553H169.37C169.9 20.7447 170.171 21.0151 170.171 21.5452Z" fill={theme !=='dark'? 'black' : 'white'} />
                    <path d="M174.211 5.36H173.75C173.659 5.36 173.617 5.31759 173.617 5.23277V1.34141C173.617 1.2937 173.591 1.26719 173.543 1.26719H172.62C172.53 1.26719 172.488 1.22477 172.488 1.13995V0.768839C172.488 0.684014 172.53 0.641602 172.62 0.641602H175.34C175.43 0.641602 175.473 0.684014 175.473 0.768839V1.14525C175.473 1.23008 175.43 1.27249 175.34 1.27249H174.418C174.365 1.27249 174.338 1.299 174.338 1.34671V5.24337C174.338 5.32289 174.296 5.36 174.211 5.36Z" fill={theme !=='dark'? 'black' : 'white'} />
                    <path d="M179.551 0.646903H180.373C180.458 0.646903 180.5 0.689316 180.5 0.774141V5.24337C180.5 5.3282 180.458 5.37061 180.373 5.37061H179.917C179.832 5.37061 179.79 5.3282 179.79 5.24337V1.53227H179.758L178.804 4.21486C178.772 4.29439 178.719 4.3315 178.645 4.3315H178.173C178.099 4.3315 178.046 4.29439 178.019 4.21486L177.044 1.52166H177.012V5.23277C177.012 5.28048 177.001 5.31229 176.985 5.3335C176.969 5.3494 176.938 5.36 176.885 5.36H176.439C176.354 5.36 176.312 5.31759 176.312 5.23277V0.768839C176.312 0.684014 176.354 0.641602 176.439 0.641602H177.261C177.314 0.641602 177.356 0.668109 177.378 0.721125L178.385 3.55217H178.422L179.435 0.721125C179.451 0.673411 179.488 0.646903 179.551 0.646903Z" fill={theme !=='dark'? 'black' : 'white'} />
                </svg>
                <nav className='absolute md:static p-6 flex flex-col md:flex-row items-center gap-4 xl:gap-14 text-xl font-medium text-black dark:text-white'>
                    <Link href={''}>About Us</Link>
                    <Link href={''}>Services</Link>
                    <Link href={''}>Portfolio</Link>
                    <Link href={''}>Blogs</Link>
                </nav>
                <div className='flex items-center gap-5'>
                    <button onClick={handleTheme}>

                        {theme === 'dark' ? <HiSun className=' text-[#551FFF] text-4xl'></HiSun> :
                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.942 1.70498C12.0313 1.50717 12.0659 1.28879 12.042 1.07289C12.0181 0.856988 11.9366 0.651582 11.8062 0.47836C11.6758 0.305138 11.5013 0.170529 11.3011 0.0887481C11.1009 0.00696702 10.8824 -0.0189514 10.6688 0.0137296C4.91 0.901574 0.5 5.90052 0.5 11.9369C0.5 18.5993 5.8724 24 12.5 24C19.1276 24 24.5 18.5993 24.5 11.9369C24.4999 11.8243 24.4983 11.7117 24.4952 11.5991C24.4892 11.3816 24.4248 11.1698 24.3088 10.9861C24.1929 10.8024 24.0296 10.6537 23.8364 10.5556C23.6432 10.4576 23.4272 10.4139 23.2113 10.4292C22.9954 10.4445 22.7876 10.5182 22.61 10.6425C21.3153 11.5489 19.7603 12.0027 18.1841 11.9342C16.6079 11.8656 15.0977 11.2785 13.8857 10.2632C12.6737 9.24777 11.827 7.86031 11.4759 6.31409C11.1247 4.76788 11.2885 3.14851 11.942 1.70498Z" fill="url(#paint0_linear_592_4763)" />
                                <defs>
                                    <linearGradient id="paint0_linear_592_4763" x1="-4.86066" y1="10.5217" x2="25.8665" y2="41.4664" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#551FFF" />
                                        <stop offset="1" stop-color="#0F091F" stop-opacity="0" />
                                    </linearGradient>
                                </defs>
                            </svg>

                        }
                    </button>
                    <div>
                        <Button type={'primary'}>Get a quote</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar