import React from "react";
import { Link } from "react-router-dom";

const Rightcard = () => {
  return (
    <div>
      {/* navbar */}
      <div className="w-full px-8 mt-10 ">
        <div className="flex justify-between font-bold font-SpaceGrotesk justify-center xl:text-xl lg:-base ">
          <h1 >Friend Activity</h1>
          <div className="flex gap-5 items-center ">
            <i class="fa-solid fa-user-plus cursor-pointer hover:text-white/50 duration-300"></i>
            <i class="fa-solid fa-xmark cursor-pointer hover:text-white/50 duration-300"></i>
          </div>
        </div>
        <p className="xl:text-lg lg:text-base font-[450] mt-5">Let friends and followers on Spotify see what you’re listening to.</p>
        <ul className="font-SpaceGrotesk flex flex-col gap-5 font-bold mt-5">
          <li>
            <Link
              to={"/"}
              className="flex items-center hover:text-white/50  duration-300 gap-3"
            >
                <div className="xl:w-[62px] xl:h-[62px]  lg:w-[50px] lg:h-[50px] flex items-center justify-center xl:text-3xl lg:text-2xl bg-white/20 rounded-full">
                <i class="fa-solid fa-user"></i>
                </div>
                <div className="w-[102px] flex flex-col gap-1">
                    <div className="w-full bg-white/20 h-[10px] rounded-full  text-[8px]"></div>
                    <div className="w-2/3 bg-white/20 h-[10px] rounded-full text-[8px]"></div>
                    <div className="w-2/3 bg-white/20 h-[10px] rounded-full"></div>
                </div>
            </Link>
          </li>
          <li>
            <Link
              to={"/"}
              className="flex items-center hover:text-white/50 duration-300 gap-3"
            >
            <div className="xl:w-[62px] xl:h-[62px] lg:w-[50px] lg:h-[50px] flex items-center justify-center xl:text-3xl lg:text-2xl bg-white/20 rounded-full">
            <i class="fa-solid fa-user"></i>
            </div>
            <div className="w-[102px] flex flex-col gap-1">
                <div className="w-full bg-white/20 h-[10px] rounded-full  text-[8px]"></div>
                <div className="w-2/3 bg-white/20 h-[10px] rounded-full text-[8px]"></div>
                <div className="w-2/3 bg-white/20 h-[10px] rounded-full"></div>
            </div>
            </Link>
          </li>
          <li>
            <Link
              to={"/"}
              className="flex items-center hover:text-white/50 duration-300 gap-3"
            >
            <div className="xl:w-[62px] xl:h-[62px] lg:w-[50px] lg:h-[50px] flex items-center justify-center xl:text-3xl lg:text-2xl bg-white/20 rounded-full">
            <i class="fa-solid fa-user"></i>
            </div>
            <div className="w-[102px] flex flex-col gap-1">
                <div className="w-full bg-white/20 h-[10px] rounded-full  text-[8px]"></div>
                <div className="w-2/3 bg-white/20 h-[10px] rounded-full text-[8px]"></div>
                <div className="w-2/3 bg-white/20 h-[10px] rounded-full"></div>
            </div>
            </Link>
          </li>
        </ul>
        <p className="font-[450] xl:text-base lg:text-sm mt-5">Go to Settings {'>'} Social and enable “Share my listening activity on Spotify.’ You can turn this off at any time.</p>
        
        
      </div>
    </div>
  );
};

export default Rightcard;
