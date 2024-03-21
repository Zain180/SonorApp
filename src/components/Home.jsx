import React from "react";
import { BiMouse } from "react-icons/bi";
import Sonor from "../../public/SonorSpeaker.png";
import Group from "../../public/Group.png";
import { GoArrowUpRight } from "react-icons/go";
function Home() {
  return (
    <div className="w-full flex items-center justify-center flex-col mt-20">
      <h1 className="cursor-default text-[135.75px] tracking-tighter leading-none">
        Hear how sound
      </h1>
      <h1 className="cursor-default text-[135.75px] italic font-bold tracking-tighter leading-none capitalize font-[times-new-roman]">
        should sound
      </h1>
      <h3 className="cursor-default text-[1.5rem] w-2/5 text-center text-gray-400 font-light">
        Each speaker is thoughtfully designed from the inside out with
        best-in-class acoustics and state-of-the-art software.
      </h3>
      <div className="cursor-default text-[20px] text-gray-400 font-light mt-2">
        <BiMouse />
      </div>
      <div data-scroll data-scroll-speed="2" className="relative mt-10">
        <img src={Sonor} alt="Sonor Speaker" />
        <div className="w-[900px] h-[700px] blur-3xl absolute  rounded-full bottom-[-200px] left-[-75px] bg-white"></div>
      </div>
      <div className="w-[150px] absolute right-20 bottom-[-400px]">
        <img className="w-full" src={Group} alt="" />
        <h3 className="text-xs tracking-tighter leading-none">
          Join With Million Of People Are Using Sonos Around The Worldwire,
        </h3>
      </div>
      <div className="w-[250px] absolute bottom-[-600px] left-20">
        <h3 className="text-sm leading-none tracking-tight">
          Experience Music Like Never Before With Crystal-Clear Audio And Deep
        </h3>
        <button className="flex items-center gap-1 justify-center border font-semibold border-black mt-4 px-4 py-2 capitalize rounded-full">
          Let&apos;s hear
          <GoArrowUpRight />
        </button>
      </div>
    </div>
  );
}

export default Home;
