import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Blogs = () => {
  const [myData, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData));
  }, []);
  const data = myData.slice(0, 12);

  const groupdata = [
    {
      icon: "/images/icon.png",
      tiltle: "Uses Client First",
      description: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. ",
      id:1
    },
    {
      icon: "/images/icon-1.png",
      tiltle: "Two Free Revision Round",
      description: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. ",
      id:2
    },
    {
      icon: "/images/icon-2.png",
      tiltle: "Template Customization",
      description: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. ",
      id:3
    },
    {
      icon: "/images/icon-3.png",
      tiltle: "24/7 Support",
      description: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. ",
      id:4
    },
    {
      icon: "/images/icon-4.png",
      tiltle: "Quick Delivery",
      description: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. ",
      id:5
    },
    {
      icon: "/images/icon-5.png",
      tiltle: "Hands-on approach",
      description: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. ",
      id:6
    },
  ];
  return (
    // fisrt section start now 
    <div className="w-full h-full  flex flex-col">
      <div className=" w-full h-full bg-[#1C1E53] py-32 text-white ">
        <div className="max-w-7xl mx-auto flex justify-between">
          <div className="max-w-[582px] flex flex-col gap-6">
            <p className="text-white text-[54px] font-semibold leading-[74px]">
              Building stellar websites for early startups
            </p>
            <div className="flex flex-col gap-12">
              <p className="opacity-70 text-white text-base font-normal leading-7">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
              <div className="flex gap-10">
                <p className="text-center rounded-[41px]  bg-amber-200 cursor-pointer px-5 py-1   sm:px-10 md:py-4 md:px-14 text-[10px] sm:text-[18px] font-semibold text-gray-900">
                  View our work
                </p>
                <p className="text-white text-[10px] sm:text-[12px] md:text-[16px] font-medium leading-7 flex gap-4 cursor-pointer items-center ">
                  View Pricing
                  <img src="/images/arrow-1.png" alt="arrow" />
                </p>
              </div>
            </div>
          </div>
          <div>
            <img src="/images/lis.png" />
          </div>
        </div>
      </div>
      {/* first section end */}



      {/* How we work section start now */}
      <div className="w-full h-full bg-[#F4F6FC] py-32">
        <div className="max-w-7xl mx-auto flex justify-between">
          <div className="max-w-[404px] flex flex-col gap-4">
            <p className=" text-gray-800 text-5xl font-semibold leading-[64px">
              How we work
            </p>
            <p className="opacity-70 text-gray-800 text-base font-normal leading-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
            <p className="text-indigo-700 text-[10px] sm:text-[12px] md:text-[16px] font-medium leading-7 flex gap-4 cursor-pointer items-center ">
              Get in touch with us
              <img src="/images/arrow-2.png" alt="arrow" />
            </p>
          </div>

          <div className="grid grid-cols-2 max-w-[656px] gap-6">
            <div className="max-w-[328px]">
              <img src="/images/pointer.png" />
              <p className="text-gray-800 text-[32px] font-medium leading-[48px] mt-4">
                Strategy
              </p>
              <p className="opacity-70 text-gray-800 text-base font-normal leading-7 mt-2">
                Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                aliquam .
              </p>
            </div>
            <div className="max-w-[328px]">
              <img src="/images/pointer-1.png" />
              <p className="text-gray-800 text-[32px] font-medium leading-[48px] mt-4">
                Wireframing
              </p>
              <p className="opacity-70 text-gray-800 text-base font-normal leading-7 mt-2">
                Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                aliquam .
              </p>
            </div>
            <div className="max-w-[328px]">
              <img src="/images/pointer-2.png" />
              <p className="text-gray-800 text-[32px] font-medium leading-[48px] mt-4">
                Design
              </p>
              <p className="opacity-70 text-gray-800 text-base font-normal leading-7 mt-2">
                Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                aliquam .
              </p>
            </div>
            <div className="max-w-[328px]">
              <img src="/images/pointer-3.png" />
              <p className="text-gray-800 text-[32px] font-medium leading-[48px] mt-4">
                Development
              </p>
              <p className="opacity-70 text-gray-800 text-base font-normal leading-7 mt-2">
                Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                aliquam .
              </p>
            </div>
          </div>
        </div>
      </div>


      {/* view  our projects section start now  */}

      <div className="w-full h-full py-32">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          <div className="flex justify-between">
            <p className=" text-gray-800 text-5xl font-semibold leading-[64px]">
              View our projects
            </p>
            <p className="text-gray-800 text-[10px] sm:text-[12px] md:text-[16px] font-medium leading-7 flex gap-4 cursor-pointer items-center ">
              View More
              <img src="/images/arrow.png" alt="arrow" />
            </p>
          </div>
          <div className="flex justify-between">
            <div className="relative">
              <img src="/images/Card.png" />
              <div className="bg-gradient-to-tl from-[#1C1E53]  to-[#1C1E536B] w-[396px] absolute h-[600px] top-0 flex flex-col justify-end items-center py-20 ">
                <div className="flex flex-col max-w-[313px]">
                  <p className="text-white text-2xl font-semibold leading-9">
                    Workhub office Webflow Webflow Design
                  </p>
                  <p className="opacity-80 text-white font-medium leading-7 mt-4">
                    Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                    aliquam{" "}
                  </p>
                  <p className="text-amber-200 text-[10px] sm:text-[12px] md:text-[16px] font-medium leading-7 flex gap-4 cursor-pointer items-center mt-10 ">
                    View project
                    <img src="/images/arrow-3.png" alt="arrow" />
                  </p>
                </div>
              </div>
            </div>
            <div className="relative flex flex-col gap-6">
              <img src="/images/rec.png" />
              <div className="absolute h-[284px] w-[414px]  bg-gradient-to-tl from-[#1C1E53]  to-[#1C1E536B] top-0 flex flex-col justify-end items-center py-12 ">
                <div className="flex flex-col max-w-[250px] gap-3">
                  <p className="text-white text-2xl font-semibold leading-9">
                    Unisaas Website Design
                  </p>
                  <p className="text-amber-200 text-[10px] sm:text-[12px] md:text-[16px] font-medium leading-7 flex gap-4 cursor-pointer items-center  ">
                    View project
                    <img src="/images/arrow-3.png" alt="arrow" />
                  </p>
                </div>
              </div>
              <div>
                <img src="/images/Card-1.png" width="414" />
              </div>
            </div>
          </div>
        </div>
      </div>





      {/* Features section start Now */}
      <div className="w-full h-full bg-[#F4F6FC] py-32 ">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-[47px]">
          <div className=" flex flex-col items-center max-w-[630px] mx-auto gap-3 ">
            <p className="text-gray-800 text-[16px] font-medium leading-7 text-center">
              Features
            </p>
            <p className="text-gray-800 text-5xl font-semibold leading-[64px] text-center ">
              Design that solves problems, one product at a time
            </p>
          </div>

          <div className="grid grid-cols-3 mx-auto gap-8">
            {groupdata.map((ite,index) => {
              return (
                <div 
                key={index}
                className="w-full bg-white pt-[56px] pl-12 pb-12 pr-8 ">
                  <div className="max-w-[324px]">
                    <img src={ite.icon} />
                    <p className="text-gray-800 text-2xl font-medium leading-9 mt-[22px]">
                      {ite.tiltle}
                    </p>
                    <p className=" opacity-70 text-gray-800 text-base font-normal leading-7 mt-3">
                      {ite.description}
                    </p>
                  </div>
                </div>
              );
            })}
          
          </div>
        </div>
      </div>


      {/* Customer Reivew Section Start Now */}

      <div className="w-full h-full bg-[#F4F6FC]  py-32">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between">
            <div className="max-w-[327px] flex flex-col gap-4 ">
              <p className=" text-gray-800 text-[38px] font-semibold leading-[56px]">
                What our clients say about us
              </p>
              <p className="opacity-70 text-gray-800 text-base font-normal leading-7">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.
              </p>
            </div>
            <div className="max-w-[843px] flex flex-col gap-12 ">
              <p className="text-gray-800 text-[32px] font-medium leading-[48px]">
                "The best agency we’ve worked with so far. They understand our
                product and are able to add new features with a great focus."
              </p>

              <div className="flex justify-between ">
                <div className="flex gap-[10px]">
                  <img src="/images/mask.png" />
                  <div className="flex flex-col ">
                    <p className=" text-gray-800 text-lg font-medium leading-loose">
                      Jenny Wilson
                    </p>
                    <p className="text-gray-800 text-xs font-medium leading-7">
                      Vice President
                    </p>
                  </div>
                </div>
                <div className="">
                  <img className="cursor-pointer" src="/images/arrows.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

       {/* FAQS Section Start Now */}

      <div className="w-full h-full bg-white  py-32">
        <div className="max-w-7xl mx-auto">
          <div className="flex ">
            <div className="max-w-[327px] flex flex-col gap-4 ">
              <p className=" text-gray-800 text-[38px] font-semibold leading-[56px]">
              Frequently asked questions
              </p>
              <p className="opacity-90 text-indigo-700 text-lg font-medium leading-loose cursor-pointer">
              Contact us for more info
              </p>
            </div>
            <div className="max-w-[846px] flex gap-12 ">
              <div className="flex ">
              <div className="">  
              <p className="text-indigo-700 text-2xl font-medium leading-9">
                01
              </p>
              <p>How much time does it take?</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
              
              
                </div>
                <div>
                  <img src="/images/+.png"/>
                </div>
              

              
            </div>
          </div>
        </div>
      </div>

     
      

      {/* Hero section start */}
      {/* ... */}

      <div class=" ">
        <div className="flex flex-col justify-center gap-4 md:gap-8 sm:gap-6 ">
          <p class="text-center  md:text-[48px]  text-[24px] max-w-[949px] mx-auto font-semibold text-gray-800  ">
            A UX Case Study on Creating a Studious Environment for Students
          </p>
          <p class="opacity-90 text-center text-gray-800 text-[10px] sm:text-[12px] md:text-[16px] font-medium  ">
            Andrew Jonson
            <span class="text-black text-[10px] md:text-[16px] sm:text-[12px] font-medium">
              {" "}
              Posted on 27th January 2021
            </span>
          </p>
          <img class="   mx-auto" src="/images/hero.png" />
          <p class=" opacity-70 max-w-[831px] mx-auto  text-center text-gray-800 text-[10px]  sm:text-[12px] md:text-[16px] font-normal">
            Apparently we had reached a great height in the atmosphere, for the
            sky was a dead black, and the stars had ceased to twinkle. By the
            same illusion which lifts the horizon of the sea to the level of the
            spectator on a hillside.
          </p>

          <Link to="/detail/1">
            <p className="text-center cursor-pointer  opacity-70  text-indigo-700 text-[10px] md:text-[16px] sm:text-[14px] font-normal animate-bounce">
              Read More
            </p>
          </Link>
        </div>
      </div>

      {/* Our Blog section Start Now */}
      {/* ... */}

      <div className="flex flex-col md:gap-12 sm:gap-8 gap-6 ">
        <p className="text-center  text-gray-800 md:text-[48px] text-[24px] font-semibold">
          Our Blog
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  mx-auto max-w-7xl gap-10 ">
          {data.map((ahmed) => (
            <div
              key={ahmed.id}
              className="flex flex-col gap-1 md:gap-4 sm:gap-2 "
            >
              <Link to={`/detail/${ahmed.id}`}>
                <img src={ahmed.url} alt={ahmed.title} />
              </Link>
              <p className=" opacity-70 text-gray-800 text-[10px] sm:text[14px] md:text-[16px] font-medium">
                {ahmed.albumId}
              </p>
              <p className="text-gray-800 md:text-[24px] sm:text[20px] text-[16px] font-medium leading-9  max-w-[404px]  h-[70px] overflow-hidden">
                {ahmed.title}
              </p>
              <p className="max-w-[404px] opacity-70 text-gray-800 text-[10px] sm:text-[12px] md:text-[16px] font-normal leading-7">
                {ahmed.thumbnailUrl}
              </p>
              <Link to={`/detail/${ahmed.id}`}>
                <p className="text-blue-950 text-[10px] sm:text-[12px] md:text-[16px] font-medium leading-7 flex gap-4 cursor-pointer items-center animate-bounce">
                  Read More <img src="/images/arrow.png" alt="arrow" />
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Blogs;

// import React from 'react'
// import { Link } from 'react-router-dom'
// import data from "./components/db.json"

// const Blogs = () => {

//   return (
//         <div>
//             <div>
//                 {/* Hero section start */}
//                 <div class="w-full h-full bg-white  px-5 md:py-32 py-8 sm:py-16  ">
//                     <div className='flex-col justify-center '>
//                         <p class="text-center  md:text-[48px]  text-[24px] max-w-[949px] mx-auto font-semibold text-gray-800  ">A UX Case Study on Creating a Studious Environment for Students</p>
//                         <p class="opacity-90 text-center text-gray-800 text-[10px] sm:text-[12px] md:text-[16px] font-medium mt-[10px] ">Andrew Jonson<span class="text-black text-[10px] md:text-[16px] sm:text-[12px] font-medium"> Posted on 27th January 2021</span></p>
//                         <img class="  mt-4  sm:mt-6 md:mt-8 mx-auto" src="/images/hero.png" />
//                         <p class=" opacity-70 max-w-[831px] mx-auto sm:mt-12 mt-4 text-center text-gray-800 text-[10px]  sm:text-[12px] md:text-[16px] font-normal">Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside.</p>
//                         <Link to="/detail/7"><p className='text-center cursor-pointer  opacity-70 mt-1 sm:mt-2 md:mt-4 text-indigo-700 text-[10px] md:text-[16px] sm:text-[14px] font-normal animate-bounce'>Read More</p></Link>
//                     </div>

//                     {/*Our Blog section Start Now */}

//                     <p className='text-center mt-10 md:mt-32 sm:mt-20 text-gray-800 md:text-[48px] text-[24px] font-semibold'>Our Blog</p>

//                     <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-5 mx-auto max-w-7xl gap-10 mt-4 md:mt-12 sm:mt-8 '>

//                     {data.card.map((it)=>{
// return(
//   <div>
//     <img src={it.url} />
//     <p className="md:mt-8 sm:mt-6 mt-3 opacity-70 text-gray-800 text-[10px] sm:text[14px] md:text-[16px] font-medium">
//       {it.date}
//     </p>
//     <p className="text-gray-800 md:text-[24px] sm:text[20px] text-[16px] font-medium leading-9 mx-auto max-w-[404px] sm:mt-2 mt-1 md:mt-4">
//       {it.title}
//     </p>
//     <p className="sm:mt-2 mt-1 md:mt-4 max-w-[404px] opacity-70 text-gray-800 text-[10px] sm:text-[12px] md:text-[16px] font-normal leading-7">
//       {it.dis}
//     </p>
//     <Link to={`/detail/${it.id}`}>
//       <p className="text-blue-950 text-[10px] sm:text-[12px] md:text-[16px] font-medium leading-7 flex gap-4 cursor-pointer items-center animate-bounce">
//         Read More <img src="/images/arrow.png" />
//       </p>
//     </Link>
//   </div>
// )

// }) }

//                     </div>

//                 </div>

//             </div>
//         </div>
//     )
// }

// export default Blogs

// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
//  const Blogs = () => {
//   const [posts, setPosts] = useState([]);
//    useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//       .then(response => response.json())
//       .then(posts => setPosts(posts))
//       .catch(error => console.log(`Error: ${error}`));
//   }, []);
//    return (

//     <div>

// <div class="w-full h-full bg-white  px-5 md:py-32 py-8 sm:py-16  ">
//                      <div className='flex-col justify-center '>
//                         <p class="text-center  md:text-[48px]  text-[24px] max-w-[949px] mx-auto font-semibold text-gray-800  ">A UX Case Study on Creating a Studious Environment for Students</p>
//                          <p class="opacity-90 text-center text-gray-800 text-[10px] sm:text-[12px] md:text-[16px] font-medium mt-[10px] ">Andrew Jonson<span class="text-black text-[10px] md:text-[16px] sm:text-[12px] font-medium"> Posted on 27th January 2021</span></p>
//                          <img class="  mt-4  sm:mt-6 md:mt-8 mx-auto" src="/images/hero.png" />
//                         <p class=" opacity-70 max-w-[831px] mx-auto sm:mt-12 mt-4 text-center text-gray-800 text-[10px]  sm:text-[12px] md:text-[16px] font-normal">Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside.</p>
//                         <Link to="/detail/7"><p className='text-center cursor-pointer  opacity-70 mt-1 sm:mt-2 md:mt-4 text-indigo-700 text-[10px] md:text-[16px] sm:text-[14px] font-normal animate-bounce'>Read More</p></Link>
//                      </div>
// </div>

//       <p className='text-center mt-10 md:mt-32 sm:mt-20 text-gray-800 md:text-[48px] text-[24px] font-semibold'>Our Blog</p>
//        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-5 mx-auto max-w-7xl gap-10 mt-4 md:mt-12 sm:mt-8 '>
//         {posts.map((post) => (
//           <div key={post.id}>
//             <p className="md:mt-8 sm:mt-6 mt-3 opacity-70 text-gray-800 text-[10px] sm:text[14px] md:text-[16px] font-medium">
//               {post.id}
//             </p>
//             <p className="text-gray-800 md:text-[24px] sm:text[20px] text-[16px] font-medium leading-9 mx-auto max-w-[404px] sm:mt-2 mt-1 md:mt-4">
//               {post.title}
//             </p>
//             <p className="sm:mt-2 mt-1 md:mt-4 max-w-[404px] opacity-70 text-gray-800 text-[10px] sm:text-[12px] md:text-[16px] font-normal leading-7">
//               {post.body}
//             </p>
//             <Link to={`/detail/${post.id}`}>
//               <p className="text-blue-950 text-[10px] sm:text-[12px] md:text-[16px] font-medium leading-7 flex gap-4 cursor-pointer items-center animate-bounce">
//                 Read More <img src="/images/arrow.png" />
//               </p>
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
//  export default Blogs;
