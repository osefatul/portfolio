import React from "react";
import "./RightNavigator.css";
import Buttons from "../button/button";
import { BsMouse } from "react-icons/bs";
import LinkedIn from "../props/linkedIn.png";
import twitter from "../props/twitter.png";

import { FiTwitter } from "react-icons/fi";
import { TiSocialGithub } from "react-icons/ti";



function RightNavbar() {
  return (
    <div className="scroll-down ">
      <a href="#">
        <FiTwitter style={{fontSize:"35px"}} className="icon  " />
      </a>

      <a href="#">
        <TiSocialGithub style={{fontSize:"35px"}} className="icon text-[32px]" />
      </a>
      <a href="#home" className=" text-white ">
        <BsMouse style={{fontSize:"35px"}} className="icon text-[32px]" />
      </a>
      <hr className="bar bg-[#a8b2d1] w-[1px] h-32 mt-2" />
    </div>
  );
}

export default RightNavbar;
