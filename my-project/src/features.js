import React from "react";

const features = () => {
  const groupdata = [
    {
      icon: "/images/icon.png",
      tiltle: "Uses Client First",
      description:
        "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. ",
      id: 1,
    },
    {
      icon: "/images/icon-1.png",
      tiltle: "Two Free Revision Round",
      description:
        "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. ",
      id: 2,
    },
    {
      icon: "/images/icon-2.png",
      tiltle: "Template Customization",
      description:
        "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. ",
      id: 3,
    },
    {
      icon: "/images/icon-3.png",
      tiltle: "24/7 Support",
      description:
        "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. ",
      id: 4,
    },
    {
      icon: "/images/icon-4.png",
      tiltle: "Quick Delivery",
      description:
        "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. ",
      id: 5,
    },
    {
      icon: "/images/icon-5.png",
      tiltle: "Hands-on approach",
      description:
        "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. ",
      id: 6,
    },
  ];
  return (
    //   <div className='overflow-y-hidden max-w-7xl mx-auto'>
    //   <div className="xl:mx-auto xl:container px-3 md:py-32 py-8 sm:py-16">
    //     <div className="lg:flex items-center justify-center lg:space-x-12 2xl:space-x-6">
    //       <div className>
    //         <p className="lg:text-4xl text-3xl font-extrabold leading-9 text-gray-800">Why choose us</p>
    //         <p className="text-lg leading-7 text-gray-600 mt-4 xl:w-7/12 w-full">Whether article spirits new her covered hastily sitting her. Money witty books nor son add</p>
    //         <div className="lg:hidden lg:w-3/5 xl:w-3/5 w-full lg:mt-0 mt-6">
    //           <img src="https://i.ibb.co/SKLJ7WX/austin-distel-jp-Hw8ndw-J-Q-unsplash-1.png" alt="ongoing meeting" className="w-full obejct-fit object-center object-fill h-full" />
    //         </div>
    //         <div className="mt-6 md:mt-10 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 lg:mt-6 2xl:mt-12">
    //           <div className="flex items-center">
    //             <div className="w-16 h-16 relative">
    //               <div className=" flex-shrink-0 z-20  w-16 h-16 flex items-center justify-center mt-2 mr-3">
    //                 <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/feature_6_Svg1.svg" alt="clock" />
    //               </div>
    //             </div>
    //             <div className="flex items-start flex-col ml-6 pt-8">
    //               <h2 className="text-lg font-semibold leading-4 text-gray-800">Time Prompt</h2>
    //               <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">Whether article spirits new her covered.</p>
    //             </div>
    //           </div>
    //           <div className="flex items-center">
    //             <div className="w-16 h-16 relative">
    //               <div className=" flex-shrink-0 z-20  w-16 h-16 flex items-center justify-center mt-2 mr-3">
    //                 <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/feature_6_Svg2.svg" alt="Friendly" />
    //               </div>
    //             </div>
    //             <div className="flex items-start flex-col ml-6 pt-8">
    //               <h2 className="text-lg font-semibold leading-4 text-gray-800">User Friendly</h2>
    //               <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">Whether article spirits new her covered.</p>
    //             </div>
    //           </div>
    //           <div className="flex items-center">
    //             <div className="w-16 h-16 relative">
    //               <div className=" flex-shrink-0 z-20  w-16 h-16 flex items-center justify-center mt-2 mr-3">
    //                 <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/feature_6_Svg3.svg" alt="Creative" />
    //               </div>
    //             </div>
    //             <div className="flex items-start flex-col ml-6 pt-8">
    //               <h2 className="text-lg font-semibold leading-4 text-gray-800">Creative Ideas</h2>
    //               <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">Whether article spirits new her covered.</p>
    //             </div>
    //           </div>
    //           <div className="flex items-center">
    //             <div className="w-16 h-16 relative">
    //               <div className=" flex-shrink-0 z-20  w-16 h-16 flex items-center justify-center mt-2 mr-3">
    //                 <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/feature_6_Svg4.svg" alt="Achievments" />
    //               </div>
    //             </div>
    //             <div className="flex items-start flex-col ml-6 pt-8">
    //               <h2 className="text-lg font-semibold leading-4 text-gray-800">Achievments</h2>
    //               <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">Whether article spirits new her covered.</p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="hidden lg:block lg:w-3/5 xl:w-3/5 w-full lg:mt-0 mt-6">
    //         <img src="https://i.ibb.co/SKLJ7WX/austin-distel-jp-Hw8ndw-J-Q-unsplash-1.png" alt="ongoing meeting" className="w-full obejct-fit object-center object-fill h-full" />
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="w-full h-full bg-[#F4F6FC] py-5 px-5 sm:py-8 md:py-24 lg:py-32 ">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-[47px]">
        <div className=" flex flex-col items-center max-w-[630px] mx-auto gap-3 ">
          <p className="text-gray-800 text-[16px] font-medium leading-7 text-center">
            Features
          </p>
          <p className="text-gray-800 text-2xl  lg:text-5xl font-semibold lg:leading-[64px] md:leading-[48px] sm:leading-[40px] leading-[32px]  text-center ">
            Design that solves problems, one product at a time
          </p>
        </div>

        <div className="grid grid-col-1 sm:grid-col-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-8">
          {groupdata.map((ite, index) => {
            return (
              <div
                key={index}
                className="w-full bg-white pt-[56px] pl-12 pb-12 pr-8 "
              >
                <div className="max-w-[324px]">
                  <img src={ite.icon} />
                  <p className="text-gray-800 text-lg sm:text-xl  md:text-2xl font-medium leading-9 mt-[22px]">
                    {ite.tiltle}
                  </p>
                  <p className=" opacity-70 text-gray-800 text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] font-normal leading-7  mt-1 sm:mt-2 md:mt-3">
                    {ite.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default features;
