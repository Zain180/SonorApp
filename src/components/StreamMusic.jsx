import React from "react";
import sonorSpeaker from "../../public/sonorSpeaker2.png";
import { GoArrowDownLeft } from "react-icons/go";

function StreamMusic() {
  return (
    <div data-scroll data-scroll-speed="1" className="w-full flex items-center justify-center bg-[#f9f9f9] p-20">
      <div className="w-1/2">
        <img
          className="w-full object-cover"
          src={sonorSpeaker}
          alt="sonorSpeaker"
        />
      </div>
      <div className="w-1/2 h-full p-20">
        <button className="w-32 h-32 flex items-center justify-center text-[50px]  rounded-full border border-black">
          <GoArrowDownLeft />
        </button>
        <h2 className="text-gray-400 text-2xl my-6">Stream music</h2>
        <h1 className="text-[77.45px] font-light leading-none">The Speaker </h1>
        <h1 className="text-[77.45px] font-bold  leading-none">ONE</h1>
        <p className="text-xl text-black/50 mt-5">
          It works smoothly with your smart home ecosystem. Control your speaker
          and projectors with only your voice, and let it seamlessly sync with
          your other devices for a totally connected experience.
        </p>
      </div>
    </div>
  );
}

export default StreamMusic;
