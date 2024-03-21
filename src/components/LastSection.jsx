import React from "react";
import sonor from "../../public/SonorSpeaker3.png";
import vector from "../../public/Vector.svg";
function LastSection() {
  return (
    <div className="w-full flex items-center justify-center p-20">
      <div className="w-1/2">
        <h2 className="text-gray-400 text-2xl my-6">Stream music</h2>
        <h1 className="text-[77.45px] font-light leading-none">
          Astonishingly
        </h1>
        <h1 className="text-[77.45px] font-bold  leading-none">Clear</h1>
        <p className="text-lg w-[55%] text-black/50 mt-5">
          Each speaker is thoughtfully designed from the inside out with
          best-in-class acoustics and state-of-the-art software.
        </p>
        <div className="flex items-center justify-start gap-20 mt-10">
          <div className="">
            <h2 className="text-xl leading-none tracking-tight">1KG</h2>
            <h2 className="text-xl leading-none tracking-tight">Lightweight</h2>
          </div>
          <div>
            <img className="w-7" src={vector} alt="humidity" />
            <h2 className="text-xl leading-none tracking-tight">Humidity</h2>
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <img src={sonor} alt="sonor-speaker" />
      </div>
    </div>
  );
}

export default LastSection;
