

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Blogs = () => {
  const [myData, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData));
  }, []);
  const data = myData.slice(0,12)
  return (
    
    
    
    <div className="w-full h-full bg-white  px-5 md:py-32 py-8 sm:py-16 " > 
      
        {/* Hero section start */}
        {/* ... */}

        <div class=" ">
          <div className="flex-col justify-center ">
            <p class="text-center  md:text-[48px]  text-[24px] max-w-[949px] mx-auto font-semibold text-gray-800  ">
              A UX Case Study on Creating a Studious Environment for Students
            </p>
            <p class="opacity-90 text-center text-gray-800 text-[10px] sm:text-[12px] md:text-[16px] font-medium mt-[10px] ">
              Andrew Jonson
              <span class="text-black text-[10px] md:text-[16px] sm:text-[12px] font-medium">
                {" "}
                Posted on 27th January 2021
              </span>
            </p>
            <img
              class="  mt-4  sm:mt-6 md:mt-8 mx-auto"
              src="/images/hero.png"
            />
            <p class=" opacity-70 max-w-[831px] mx-auto sm:mt-12 mt-4 text-center text-gray-800 text-[10px]  sm:text-[12px] md:text-[16px] font-normal">
              Apparently we had reached a great height in the atmosphere, for
              the sky was a dead black, and the stars had ceased to twinkle. By
              the same illusion which lifts the horizon of the sea to the level
              of the spectator on a hillside.
            </p>
            
            <Link to="/detail/1">
              <p className="text-center cursor-pointer  opacity-70 mt-1 sm:mt-2 md:mt-4 text-indigo-700 text-[10px] md:text-[16px] sm:text-[14px] font-normal animate-bounce">
                Read More
              </p>
            </Link>
          </div>
        </div>
      
      {/* Our Blog section Start Now */}
      {/* ... */}
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-5 mx-auto max-w-7xl gap-10 mt-4 md:mt-32 sm:mt-8 ">
        {data.map((ahmed) => (
          <div key={ahmed.id}>
           <Link to={`/detail/${ahmed.id}`}><img src={ahmed.url} alt={ahmed.title} /></Link> 
            <p className="md:mt-8 sm:mt-6 mt-3 opacity-70 text-gray-800 text-[10px] sm:text[14px] md:text-[16px] font-medium">
              {ahmed.albumId}
            </p>
            <p className="text-gray-800 md:text-[24px] sm:text[20px] text-[16px] font-medium leading-9 mx-auto max-w-[404px] sm:mt-2 mt-1 md:mt-4">
              {ahmed.title}
            </p>
            <p className="sm:mt-2 mt-1 md:mt-4 max-w-[404px] opacity-70 text-gray-800 text-[10px] sm:text-[12px] md:text-[16px] font-normal leading-7">
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
