import React from "react";
import "./logo.css";
import hexa from "../props/hex.svg";

function PreLoadingLogo() {
    return (
    <div className="brand font-comorants flex items-center justify-center">
        <span className="hoverText text-[82px] font-bold">SO</span>

        <div className="logo absolute animate-spin">
        <object
            className=" text-[#519f8d] w-[100px] h-[100px] sm:w-[200px]  sm:h-[200px] cursor-pointer "
            data={hexa}
            type="image/svg+xml"
        />
        </div>

        <div className="logo2 absolute top-58 ">
        <object
            className=" text-[#519f8d]w-[100px] h-[100px] sm:w-[200px]  sm:h-[200px] cursor-pointer "
            data={hexa}
            type="image/svg+xml"
        />
        </div>

        <div className="logo3 absolute top-58 ">
        <object
            className="  text-[#519f8d]w-[100px] h-[100px] sm:w-[200px]  sm:h-[200px] cursor-pointer "
            data={hexa}
            type="image/svg+xml"
        />
        </div>
    </div>
    );
}

export default PreLoadingLogo;
