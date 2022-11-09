import React from "react";
import "./logo.css";
import hexa from "../props/hex.svg";

function Logo() {
  return (
    <div className="brand font-comorants flex items-center justify-center">
      <span className="absolute hoverText text-[30px] font-bold">SO</span>

      <div className="logo animate-spin">
        <object
          className=" text-[#519f8d] w-[50px] sm:w-[70px] h-[50px] sm:h-[70px] cursor-pointer "
          data={hexa}
          type="image/svg+xml"
        />
      </div>

      <div className="logo2 absolute sm:top-4 left-12 top-6 ">
        <object
          className=" text-[#519f8d] w-[50px] sm:w-[70px] h-[50px] sm:h-[70px] cursor-pointer "
          data={hexa}
          type="image/svg+xml"
        />
      </div>

      <div className="logo3 absolute sm:top-4 left-12 animate-spin top-6  ">
        <object
          className="  text-[#519f8d] w-[50px] sm:w-[70px] h-[50px] sm:h-[70px] cursor-pointer "
          data={hexa}
          type="image/svg+xml"
        />
      </div>
    </div>
  );
}

export default Logo;
