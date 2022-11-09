import "./LeftNavigator.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { TiGroupOutline } from "react-icons/ti";
import { BiMessageRoundedDots } from "react-icons/bi";
import { BsArrowDownCircle } from "react-icons/bs";

function Navbar() {
  return (
    <div className="navigation">
      <a href="#">
        <AiOutlineHome style={{fontSize:"35px"}} className="icon active-nav" />
      </a>
      <a href="#about">
        <AiOutlineUser style={{fontSize:"35px"}} className="icon" />
      </a>
      <a href="#members">
        <TiGroupOutline style={{fontSize:"35px"}} className="icon" />
      </a>
      <a href="#contact">
        <BiMessageRoundedDots style={{fontSize:"35px"}} className="icon" />
      </a>
      <a href="#footer">
        <BsArrowDownCircle style={{fontSize:"35px"}} className="icon" />
      </a>
      {/* <hr className="bar sm:flex bg-[#a8b2d1] w-[1px] h-56 mt-2 " /> */}
      <hr className="flex bg-[#a8b2d1] w-[1px] h-56 mt-2 " />

    </div>
  );
}

export default Navbar;
