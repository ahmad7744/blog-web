import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const BlogRead = () => {
  const [post, setPost] = useState({});
  const { id } = useParams(); 

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
      .then(response => response.json())
      .then(jsonData => setPost(jsonData));
  }, [id]); 

  return (
            <div className=" px-5 flex flex-col gap-8 sm:gap-16 md:gap-32 md:py-32 py-8 sm:py-16">
            <div>
                <div>
                    {/* Hero section start */}
                    
                    
                    <div class="w-full h-full flex flex-col gap-8 sm:gap-16 md:gap-32 ">
                        <div className='flex flex-col justify-center gap-4 md:gap-8 sm:gap-6'>
                        <p class="text-center  md:text-[48px]  text-[24px] max-w-[949px] mx-auto font-semibold text-gray-800  "> A UX Case Study on Creating a Studious Environment for Students</p>
                        <p class="opacity-90 text-center text-gray-800 text-[10px] sm:text-[12px] md:text-[16px] font-medium  ">Andrew Jonson<span class="text-black text-[10px] md:text-[16px] sm:text-[12px] font-medium">{" "}Posted on 27th January 2021</span></p>
                        <img class="  mx-auto" src="/images/hero.png"/>
                        
                            
                            
                        </div>

                        {/*Our Blog section Start Now */}

                       

                        <div className='mx-auto max-w-[840px] flex flex-col md:gap-10 sm:gap-6 gap-4 px-5'>
                            <div className="flex flex-col md:gap-8 gap-4 sm:gap-6 ">
                            <p className='text-gray-800 lg: md:text-[48px] sm:text-[24px] text-[14px] font-semibold md:leading-10 sm:leading-8 leading-6 '>{post.title}</p>
                            <p className='text-gray-800 lg: md:text-[38px] sm:text-[24px] text-[14px] font-semibold md:leading-10 sm:leading-8 leading-6  '>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <p className='text-gray-800 text-[8px] sm:text-[10px] md:text-[16px] font-normal leading-3 md:leading-6 sm:leading-5 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                            </div>

                            <div className="flex flex-col md:gap-8 gap-4 sm:gap-6">
                            <p className='text-gray-800 md:text-[38px] sm:text-[24] text-[14px] font-semibold md:leading-10 sm:leading-8 leading-6  '>Ut enim ad minim veniam, quis nostrud.</p>
                            <p className='text-gray-800 text-[8px] sm:text-[10px] md:text-[16px] font-normal leading-3 md:leading-6 sm:leading-5 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                            </div>
                            
                            <ul className='list-disc pl-4 flex flex-col md:gap-3 sm:gap-2 gap-1'>
                              <li className='opacity-70 text-justify text-[6px] sm:text-[10px] md:text-[16px] text-gray-800 text-base font-normal leading-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</li>
                              <li className='opacity-70 text-justify text-[6px] sm:text-[10px] md:text-[16px] text-gray-800 text-base font-normal leading-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</li>
                              <li className='opacity-70 text-justify text-[6px] sm:text-[10px] md:text-[16px] text-gray-800 text-base font-normal leading-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</li>
                            </ul>
                            <p className='opacity-70" text-gray-800 text-[8px] sm:text-[10px] md:text-[16px] font-normal leading-3 md:leading-6 sm:leading-5 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <img className='mx-auto  md:mt-8 sm:mt-4 mt-3' src={post.url}/>
                            <p className='text-gray-800 md:text-[38px] sm:text-[24] text-[14px] font-semibold leading-[56px] '>Ut enim ad minim veniam, quis nostrud.</p>
                            <p className='text-gray-800 text-[8px] sm:text-[10px] md:text-[16px] font-normal leading-3 md:leading-6 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  
 
                            
                            
                        </div>
                    </div>


                </div>
            </div>
        </div>
 
        );
   
}

export default BlogRead;





// import React from 'react';
// import data from "./components/db.json";
// import { useParams } from 'react-router-dom';

// const BlogRead = () => {
//     const { id } = useParams();
//     const blogPost = data.blogread.find(item => item.id === parseInt(id));

//     if (blogPost) {
//         const { title, name, date, dis, url, h1, p1, li, img, h2 } = blogPost;

//         return (
   

 // } else {
    //     return <div className='text-7xl w-full h-full text-center py-32 '>Coming Soon</div>;
    // }
       

