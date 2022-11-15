import React, { useEffect } from "react";
import HomeAnimator from "../homeAnimator/HomeAnimator";
import { motion } from "framer-motion";
import "./feed.css";
import Intro from "../intro/Intro";
import img2 from "../props/mypic.png"


function Feed() {
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
    <div

      id="home"
      className=" text-white mx-auto md:ml-auto flex flex-col md:items-center justify-start xl:justify-center relative w-[100%] sm:w-[100%] 2xl:w-[100%] h-almost">
      
      <div className="absolute hidden md:flex items-center justify-center top-[5%]  md:top-[2%] 2xl:top-[6%] w-[90%] mb-20">
        <hr className="lg:w-[30%]  h-[2px] text-slate-700 bg-slate-800 opacity-30" />
        <h1 className=" mx-[20px] text-slate-800 text-[25px] xl:text-[32px] 2xl:text-[40px]    ">
          WEB DEVELOPER
        </h1>
        <hr className="lg:w-[30%] h-[2px] text-slate-700 bg-slate-800 opacity-30" />

      </div>

      <div className="relative w-[100%] sm:w-[90%] md:w-[100%] 2xl:w-[80%] boxx flex flex-col-reverse md:flex-row items-center justify-between md:shadow-md  lg:shadow-lg 2xl: shadow-2xl mt-28 border border-green-800">

        {/* Animation component */}
        {/* <motion.div
          // className="sm:w-[500px] md:w-[600px] lg:w-[750px] "
          className="img pb-11 w-[28%] "
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 1.5, ease: "easeInOut" },
            fill: { duration: 1, ease: [1, 0, 0.8, 1] },
          }}
        >
          <HomeAnimator />
        </motion.div> */}


        {/*THis is our perfect model */}
        {/* <div className="about w-[30%] mt-4 md:mt-14 md:ml-5 lg:ml-10 py-5 sm:py-0   ">
          <Intro />
        </div> */}

        {/* <div className="imgg h-full md:ml-10 w-full lg:ml-10 ">
          <img className="h-[105%] sm:h-[100%] opacity-50 z-50" src={img2} alt="" />
        </div> */}



        {/* Experimental */}
        <div className="w-[80%] md:w-[40%] md:pl-14 pb-3 sm:pb-1 md:mt-20">
          <Intro />
        </div>



        <div className="relative opacity-80 pr-2 pb-5 sm:pb-0 ">
          {/* <div className="rounded-full w-72 h-72 absolute bg-black right-[20%] shadow-lg boxx top-8 opacity-20  " /> */}
          <img className="opacity-60 pt-10" src={img2} alt="" />
        </div>

      </div>

    </div>
  );
}

export default Feed;
