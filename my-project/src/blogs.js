import React from 'react'
import { Link } from 'react-router-dom'

const Blogs = () => {
    return (
        <div>
            <div>
                {/* Hero section start */}
                <div class="w-full h-full bg-white  ">
                    <div className='flex-col justify-center '>
                        <p class="text-center mt-32 text-[48px] max-w-[949px] mx-auto font-semibold text-gray-800 ">A UX Case Study on Creating a Studious Environment for Students</p>
                        <p class="opacity-90 text-center text-gray-800 text-[16px] font-medium mt-[16px] ">Andrew Jonson<span class="text-black text-[16px] font-medium"> Posted on 27th January 2021</span></p>
                        <img class="mt-8 mx-auto" src="/images/hero.png" />
                        <p class=" opacity-70 max-w-[831px] mx-auto mt-12 text-center text-gray-800 text-[16px] font-normal">Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside.</p>
                        <Link to="/detail/7"><p className='text-center cursor-pointer  opacity-70 mt-4 text-indigo-700 text-[16px] font-normal '>Read More</p></Link>
                    </div>

                    {/*Our Blog section Start Now */}

                    <p className='text-center mt-32 text-gray-800 text-[48px] font-semibold'>Our Blog</p>

                    <div className='grid grid-cols-3 mx-auto max-w-7xl gap-10 mt-12 '>
                       
                        <div>
                            <img src="/images/blog.png" />
                            <p className='mt-8 opacity-70 text-gray-800 text-[16px] font-medium'>27 Jan 2021</p>
                            <p className='text-gray-800 text-[24px] font-medium leading-9 mx-auto max-w-[404px] mt-4'>How one Webflow user grew his single person consultancy from $0-100K in 14 months</p>
                            <p className='mt-4 max-w-[404px] opacity-70 text-gray-800 text-[16px] font-normal leading-7'>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
                            <Link to="/detail/1"> <p className='text-blue-950 text-[16px] font-medium leading-7 flex gap-4 cursor-pointer items-center '> Read More <img src="/images/arrow.png" /></p></Link>
                        </div >
                        <div>
                            <img src="/images/blog-1.png" />
                            <p className='mt-8 opacity-70 text-gray-800 text-[16px] font-medium'>27 Jan 2021</p>
                            <p className='text-gray-800 text-[24px] font-medium leading-9 mx-auto max-w-[404px] mt-4'>How one Webflow user grew his single person consultancy from $0-100K in 14 months</p>
                            <p className='mt-4 max-w-[404px] opacity-70 text-gray-800 text-[16px] font-normal leading-7'>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
                            <Link to="/detail/2"> <p className='text-blue-950 text-[16px] font-medium leading-7 flex gap-4 cursor-pointer items-center '> Read More <img src="/images/arrow.png" /></p></Link>
                        </div >
                        <div>
                            <img src="/images/blog-2.png" />
                            <p className='mt-8 opacity-70 text-gray-800 text-[16px] font-medium'>27 Jan 2021</p>
                            <p className='text-gray-800 text-[24px] font-medium leading-9 mx-auto max-w-[404px] mt-4'>How one Webflow user grew his single person consultancy from $0-100K in 14 months</p>
                            <p className='mt-4 max-w-[404px] opacity-70 text-gray-800 text-[16px] font-normal leading-7'>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
                            <Link to="/detail/3"> <p className='text-blue-950 text-[16px] font-medium leading-7 flex gap-4 cursor-pointer items-center '> Read More <img src="/images/arrow.png" /></p></Link>
                        </div >
                        <div>
                            <img src="/images/blog-3.png" />
                            <p className='mt-8 opacity-70 text-gray-800 text-[16px] font-medium'>27 Jan 2021</p>
                            <p className='text-gray-800 text-[24px] font-medium leading-9 mx-auto max-w-[404px] mt-4'>How one Webflow user grew his single person consultancy from $0-100K in 14 months</p>
                            <p className='mt-4 max-w-[404px] opacity-70 text-gray-800 text-[16px] font-normal leading-7'>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
                            <Link to="/detail/4"> <p className='text-blue-950 text-[16px] font-medium leading-7 flex gap-4 cursor-pointer items-center '> Read More <img src="/images/arrow.png" /></p></Link>
                        </div >
                        <div>
                            <img src="/images/blog-4.png" />
                            <p className='mt-8 opacity-70 text-gray-800 text-[16px] font-medium'>27 Jan 2021</p>
                            <p className='text-gray-800 text-[24px] font-medium leading-9 mx-auto max-w-[404px] mt-4'>How one Webflow user grew his single person consultancy from $0-100K in 14 months</p>
                            <p className='mt-4 max-w-[404px] opacity-70 text-gray-800 text-[16px] font-normal leading-7'>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
                            <Link to="/detail/5"> <p className='text-blue-950 text-[16px] font-medium leading-7 flex gap-4 cursor-pointer items-center '> Read More <img src="/images/arrow.png" /></p></Link>
                        </div >
                        <div>
                            <img src="/images/blog-5.png" />
                            <p className='mt-8 opacity-70 text-gray-800 text-[16px] font-medium'>27 Jan 2021</p>
                            <p className='text-gray-800 text-[24px] font-medium leading-9 mx-auto max-w-[404px] mt-4'>How one Webflow user grew his single person consultancy from $0-100K in 14 months</p>
                            <p className='mt-4 max-w-[404px] opacity-70 text-gray-800 text-[16px] font-normal leading-7'>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
                            <Link to="/detail/6"> <p className='text-blue-950 text-[16px] font-medium leading-7 flex gap-4 cursor-pointer items-center '> Read More <img src="/images/arrow.png" /></p></Link>
                        </div >



                    </div>




                </div>

            </div>
        </div>
    )
}

export default Blogs
