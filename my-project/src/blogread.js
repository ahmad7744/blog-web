import React from 'react'

const blogread = () => {
    return (
        <div>
            <div>
                <div>
                    {/* Hero section start */}
                    <div class="w-full h-full bg-white ">
                        <div className='flex-col justify-center'>
                            <p class="text-center mt-32 text-[48px] font-semibold text-gray-800">A UX Case Study on Creating a<p></p> Studious Environment for Students</p>
                            <p class="opacity-90 text-center text-gray-800 text-[16px] font-medium mt-[16px] ">Andrew Jonson<span class="text-black text-[16px] font-medium"> Posted on 27th January 2021</span></p>
                            <img class="mt-8 mx-auto" src="/images/hero.png" />
                            
                            
                        </div>

                        {/*Our Blog section Start Now */}

                       

                        <div className='mx-auto max-w-[840px] gap-10 mt-12 '>
                            <p className='text-gray-800 text-[38px] font-semibold leading-10  '>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <p className='text-gray-800 text-[16px] font-normal leading-7 mt-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default blogread
