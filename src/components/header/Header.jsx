import React from "react";
import Logo from "../../../public/logo-sonos.png";
import { HiOutlineUser, HiOutlineShoppingBag } from "react-icons/hi2";
import { HiOutlineSearch } from "react-icons/hi";
function Header() {
  const navItems = ["About", "products", "features"];
  return (
    <div className="w-full flex items-center justify-between p-6">
      <img className="w-[211.03px] cursor-pointer" src={Logo} alt="Sonos" />
      <div className="flex items-center justify-center gap-[74px]">
        {navItems.map((item, index) => (
          <div key={index}>
            <div className="cursor-pointer capitalize">{item}</div>
          </div>
        ))}
      </div>
      <div className="flex items-center text-xl justify-center gap-[25.23px]">
        <HiOutlineSearch className="cursor-pointer" />
        <HiOutlineShoppingBag className="cursor-pointer" />
        <HiOutlineUser className="cursor-pointer" />
      </div>
    </div>
  );
}

export default Header;
