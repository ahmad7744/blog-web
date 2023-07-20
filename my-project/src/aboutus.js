import React from "react";

const aboutus = () => {
  const groupdata = [
    {
      icon: "/images/icon-5.png",
      tiltle: "Customize with ease",
      description:
        "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. ",
      id: 6,
    },
    {
      icon: "/images/icon-2.png",
      tiltle: "Perfectly Responsive",
      description:
        "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. ",
      id: 3,
    },

    {
      icon: "/images/icon.png",
      tiltle: "Friendly Support",
      description:
        "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. ",
      id: 1,
    },
  ];

  const teamdata = [
    {
      img: "/images/team-1.png",
      name: "John Smith",
      post: "CEO",
      id: 1,
    },
    {
      img: "/images/team-2.png",
      name: "Simon Adams",
      post: "CTO",
      id: 2,
    },

    {
      img: "/images/team-3.png",
      name: "Paul Jones",
      post: "Design Lead",
      id: 3,
    },

    {
      img: "/images/team-4.png",
      name: "Sara Hardin",
      post: "Project Manager",
      id: 4,
    },
  ];
  return (
    <div className="w-full h-full flex flex-col   sm:pt-16 md:pt-24 pt-5 gap-16 lg:gap-32">
      {/* About us Hero section is start now */}
      <div className="w-full h-full">
        <div className="max-w-7xl flex flex-col  lg:flex-row px-5 gap-3 justify-between mx-auto">
          <div className="flex flex-col gap-5 max-w-[594px]">
            <p className="text-gray-800 text-[16px] md:text-[18px] font-medium leading-loose">
              About us
            </p>
            <p className="text-gray-800 text-[26px] sm:text[34px] md:text-[42px] lg:text-[54px] font-semibold leading-[36px] sm:leading-[44px] md:leading-[60px] lg:leading-[74px]">
              Our designs solve problems
            </p>
            <p className="opacity-70 text-justify text-gray-800 text-[12px] sm:text-[14px] md:text-[16px] font-normal leading-5 lg:leading-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>
          <img src="/images/group.png" />
        </div>
      </div>
      {/* who we are section is start now */}
      <div className="w-full h-full">
        <div className="max-w-7xl flex flex-col gap-20 px-5 py-20 mx-auto bg-[#F4F5F5]">
          <div className="max-w-[1092px] flex flex-col lg:flex-row items-center justify-center gap-9 md:gap-[61px] mx-auto">
            <div className="flex flex-col gap-1">
              <p className=" text-gray-800 text-[16px] md:text-[18px] font-medium leading-7">
                Who we are
              </p>
              <div className="flex flex-col gap-4 max-w-[515px]">
                <p className="text-gray-800 text-[24px] sm:text-[28px] md:text-[32px] lg:text-[38px] font-semibold leading-[30px] md:leading-[56px]">
                  Goal focussed
                </p>
                <p className=" opacity-70 text-gray-800 text-[12px] sm:text-[14px] md:text-[16px]  font-normal leading-7">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
            <div className="max-w-[515px] gap-4 flex flex-col">
              <p className="text-gray-800 text-[24px] sm:text-[28px] md:text-[32px] lg:text-[38px] font-semibold leading-[30px] md:leading-[56px]">
                Continuous improvement
              </p>
              <p className="opacity-70 text-gray-800 text-[12px] sm:text-[14px] md:text-[16px]  font-normal leading-7">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-[390px] md:max-w-[768px] lg:max-w-7xl mx-auto">
          <img src="/images/who.png" />
        </div>
      </div>
      {/* process we follow section */}
      <div className="w-full h-full">
        <div className="max-w-7xl px-5  mx-auto">
          <div className="flex flex-col gap-6 md:gap-12  items-center">
            <div>
              <p className="text-gray-800 text-[24px] sm:text-[30px] md:text-[38px] lg:text-[48px] font-semibold leading-[64px] ">
                The process we follow
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-[56px]">
              <div className="max-w-[272px] flex flex-col gap-10">
                <img src="/images/line-icon.png" />
                <div className="flex flex-col gap-2">
                  <p className="text-gray-800 text-[20px] sm:text-[24px] lg:text-[24px] font-medium leading-5 md:leading-9">
                    Planning
                  </p>
                  <p className="opacity-70 text-gray-800 text-[12px] sm:text-[14px] md:text-[16px]  font-normal leading-7">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                  </p>
                </div>
              </div>
              <div className="max-w-[272px] flex flex-col gap-10">
                <img src="/images/line-icon.png" />
                <div className="flex flex-col gap-2">
                  <p className="text-gray-800  text-[20px] sm:text-[24px] lg:text-[24px] font-medium leading-5 md:leading-9">
                    Conception
                  </p>
                  <p className="opacity-70 text-gray-800 text-[12px] sm:text-[14px] md:text-[16px] font-normal leading-7">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                  </p>
                </div>
              </div>
              <div className="max-w-[272px] flex flex-col gap-10">
                <img src="/images/line-icon.png" />
                <div className="flex flex-col gap-2">
                  <p className="text-gray-800 text-[20px] sm:text-[24px] lg:text-[24px] font-medium leading-5 md:leading-9">
                    Design
                  </p>
                  <p className="opacity-70 text-gray-800 text-[12px] sm:text-[14px] md:text-[16px]  font-normal leading-7">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                  </p>
                </div>
              </div>
              <div className="max-w-[272px] flex flex-col gap-10">
                <img src="/images/line-icon.png" />
                <div className="flex flex-col gap-2">
                  <p className="text-gray-800 text-[20px] sm:text-[24px] lg:text-[24px] font-medium leading-5 md:leading-9">
                    Development
                  </p>
                  <p className="opacity-70 text-gray-800 text-[12px] sm:text-[14px] md:text-[16px] font-normal leading-7">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full bg-[#EEF4FA]">
        <div className="max-w-7xl flex flex-col gap-[75px] md:gap-[150px] py-16 md:py-32 px-5 mx-auto">
          <div className="flex flex-col md:flex-row gap-4 justify-between">
            <div className="max-w-[623px] flex flex-col gap-2 ">
              <p className="text-gray-800 text-base font-medium leading-7">
                Our Mission{" "}
              </p>
              <p className=" text-gray-800 text-[24px] sm:text-[28px] md:text-[32px] lg:text-[38px] font-semibold leading-[30px] md:leading-[56px]">
                Inspire, Innovate, Share
              </p>
              <p className=" opacity-70 text-gray-800 text-[12px] sm:text-[14px] md:text-[16px] font-normal leading-7">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div>
              <img src="/images/man.png" />
            </div>
          </div>
          <div className="flex flex-col md:flex-row-reverse gap-4 justify-between">
            <div className="max-w-[623px] flex flex-col gap-2">
              <p className="text-gray-800 text-base font-medium leading-7">
                Our Vision{" "}
              </p>
              <p className=" text-gray-800 text-[24px] sm:text-[28px] md:text-[32px] lg:text-[38px] font-semibold leading-[30px] md:leading-[56px]">
                Laser focus
              </p>
              <p className=" opacity-70 text-gray-800 text-[12px] sm:text-[14px] md:text-[16px] font-normal leading-7">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div>
              <img src="/images/group-1.png" />
            </div>
          </div>
        </div>
      </div>
      {/* The benefits of working with us section */}
      <div className="w-full h-full">
        <div className="max-w-7xl mx-auto px-5">
          <div className="flex flex-col gap-12 ">
            <div className="flex flex-col items-center gap-12">
              <div className="max-w-[630px]">
                <p className=" text-center text-gray-800 text-[24px] sm:text-[30px] md:text-[38px] lg:text-[48px] font-semibold lg:leading-[64px]">
                  The benefits of working with us
                </p>
              </div>
              <div className="grid grid-col-1 sm:grid-col-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-8">
                {groupdata.map((ite, index) => {
                  return (
                    <div
                      key={index}
                      className="w-full bg-[#F4F6FC] pt-[56px] pl-12 pb-12 pr-8 "
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

            <div className="flex flex-col items-center gap-4 lg:flex-row justify-between">
              <div>
                <p className="text-gray-800 text-[38px] font-semibold leading-[56px">
                  100.000+
                </p>
                <p className="opacity-70 text-gray-800 text-base font-normal leading-7">
                  Finsweet Users
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:flex  gap-10 items-center">
                <img src="/images/brand-1.png" />
                <img src="/images/brand-2.png" />
                <img src="/images/brand-3.png" />
                <img src="/images/brand-4.png" />
                <img src="/images/brand-5.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full bg-[#F4F6FC]">
        <div className="max-w-7xl mx-auto py-16 md:py-32">
          <div className="flex flex-col ">
            <div className="flex flex-col gap-12">
              <p className="text-center text-gray-800 text-[24px] sm:text-[30px] md:text-[38px] lg:text-[48px] font-semibold lg:leading-[64px]">
                Meet our team
              </p>
              <div className="grid grid-col-1 sm:grid-col-1 md:grid-cols-2 lg:grid-cols-4 mx-auto gap-8">
                {teamdata.map((ite, index) => {
                  return (
                    <div
                      key={index}
                      className="w-full bg-white  py-[48px] px-[64px] "
                    >
                      <div className=" w-full  flex flex-col items-center">
                        <div className="relative group ">
                          <img src={ite.img} />
                          <img
                            src="/images/e.png"
                            className="absolute top-0 left-0 hidden group-hover:block transition-all duration-700"
                          />
                          <div className=" absolute bottom-6 left-12 gap-3 hidden group-hover:block transition-all duration-700">
                            <div className="flex gap-3 ">
                              <img
                                src="/images/f.png"
                                className="cursor-pointer"
                              />
                              <img
                                src="/images/t.png"
                                className="cursor-pointer"
                              />
                              <img
                                src="/images/in.png"
                                className="cursor-pointer"
                              />
                            </div>
                          </div>
                        </div>

                        <p className="text-center text-gray-800 text-xl font-medium leading-9 mt-[30px]">
                          {ite.name}
                        </p>
                        <p className=" opacity-70 text-gray-800 text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] font-normal leading-7   md:mt-[2px]">
                          {ite.post}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default aboutus;
