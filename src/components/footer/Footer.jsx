import React from "react";
import Image from "../../../public/logo-sonos.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
  FaTiktok,
} from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
const Footer = () => {
  return (
    <footer className="bg-[#f1f1f1] p-20 text-center flex items-center justify-between">
      <div className="flex items-center justify-start">
        <img src={Image} alt="sonos-logo" />
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-sm">
          Design By&nbsp;
          <a target="_blank" href="https://www.instagram.com/nazdumanskyy/">
            Nazariy Dumansky
          </a>
        </p>
        <p className="text-sm">
          Created By&nbsp;
          <a target="_blank" href="https://www.instagram.com/2ainbhaii/">
            Muhammad Zain
          </a>
        </p>
        <p className="text-gray-600 text-sm">
          &copy; 2024 Your Company Name. All rights reserved.
        </p>
      </div>
      <div className="flex items-center justify-center gap-4 text-xl">
        <div className="cursor-pointer p-2 border-2 border-black rounded-full">
          <FaXTwitter />
        </div>
        <div className="cursor-pointer p-2 border-2 border-black rounded-full">
          <FaFacebook />
        </div>
        <div className="cursor-pointer p-2 border-2 border-black rounded-full">
          <FaInstagram />
        </div>
        <div className="cursor-pointer p-2 border-2 border-black rounded-full">
          <FaLinkedin />
        </div>
        <div className="cursor-pointer p-2 border-2 border-black rounded-full">
          <FaTiktok />
        </div>
        <div className="cursor-pointer p-2 border-2 border-black rounded-full">
          <BiLogoGmail />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
