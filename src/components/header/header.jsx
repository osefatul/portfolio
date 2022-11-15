// import "./header.css";
import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import Logo from "../logo/Logo";

function Header() {
  const [toggle, setToggle] = useState(false);

  const icon = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)",
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      fill: "rgba(255, 255, 255, 1)",
    },
  };

  return (
    <nav className=" h-[98px] sm:h-[102px] flex items-center justify-between w-full z-40 shadow-2xl">
      <div className="flex items-center justify-between px-12 ">
        <motion.div
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 1.5, ease: "easeInOut" },
            fill: { duration: 2, ease: [1, 0, 0.8, 1] },
          }}
        >
          <div className="text-[#808040] text-lg md:text-xl lg:text-xl font-medium cursor-pointer">
            <Logo className="cursor-pointer" />
          </div>
        </motion.div>
      </div>

      <div className="">
        <ul className="hidden sm:flex items-center justify-center text-[#808040] space-x-5 md: text-base lg:text-lg 2xl:text-xl  px-12 ">
          {["Home", "About", "Work", "Skills", "Contact"].map((item) => (
            <li
              className="px-1 font-comorants font-bold hoverText"
              key={`link-${item}`}
            >
              <div className=" hover:border" />
              <div className="flex items-center jsutify-center">
                <a href={`#${item.toLowerCase()}`}>{item}</a>
              </div>
            </li>
          ))}
          <li className=" flex items-center justify-center border border-[#64ffda] hover:bg-[#06241d] hover:border-[#06241d] w-24 h-10 rounded-md  ease-in-out duration-300 ">
            <button className=" hoverText font-bold font-comorants ">
              Resume
            </button>
          </li>
        </ul>

        <div className=" sm:hidden h-[40px] relative flex items-center justify-center ]">
          {!toggle ? (
            <HiMenuAlt4
              className=" text-[#64ffda] hover:text-[#519f8d] cursor-pointer mr-8 h-8 w-8"
              onClick={() => setToggle(!toggle)}
            />
          ) : (
            <motion.div
              className="container z-40"
              initial={{ scale: 0 }}
              animate={{ rotate: 180, scale: 1.3 }}
              transition={{
                type: "spring",
                stiffness: 150,
                damping: 5,
              }}
            >
              <HiX
                className="hoverText m-3 w-[20px] h-[20px] "
                onClick={() => setToggle(false)}
              />
            </motion.div>
          )}

          <motion.div
            d="M0 100V0l50 50 50-50v100L75 75l-25 25-25-25z"
            variants={icon}
            initial="hidden"
            animate="visible"
            transition={{
              default: { duration: 3, ease: "easeInOut" },
              fill: { duration: 5, ease: [1, 0, 0.8, 1] },
            }}
            className={`fixed top-0 right-0 z-10 h-screen w-[50vw] 
            flex flex-col justify-end items-end 
            bg-[#001F3F] ${
              toggle ? "translate-x-0" : "translate-x-full"
            } ease-out duration-700  shadow-2xl`}
          >
            <ul className="h-[100%] w-full flex flex-col justify-start items-start space-y-5 mt-32">
              {["Home", "About", "Work", "Skills", "Contact"].map((item) => (
                <li
                  key={item}
                  className="hoverText w-[100%] flex items-start justify-center"
                >
                  <a href={`#${item.toLowerCase()}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
      
    </nav>
  );
}

export default Header;
