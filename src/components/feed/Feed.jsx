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

      <div className="w-[100%] sm:w-[90%] md:w-[100%] 2xl:w-[80%] boxx flex flex-col-reverse md:flex-row items-center justify-center md:shadow-md  lg:shadow-lg 2xl: shadow-2xl mt-20 border-2 border-green-900  ">

        
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

        <div className="about w-[30%] mt-4 md:mt-14 md:ml-5 lg:ml-10 py-5 sm:py-0   ">
          <Intro />
        </div>


        <div className="imgg h-full md:ml-10 w-full lg:ml-10 rounded-full ">
          <img className="h-[105%] sm:h-[100%] opacity-80 " src={img2} alt="" />
        </div>

      </div>




    </div>
  );
}

export default Feed;
