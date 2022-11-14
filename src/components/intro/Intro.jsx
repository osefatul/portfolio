import React from "react";

function Intro() {
  return (
    <div className="text-white  font-montserrat  ">
      <p className="text-[#64ffda] text-[8px] sm:text-[10px] lg:text-[14px] xl:text-[16x]  opacity-50">
        Hi, my name is
      </p>
      <h1 className=" sm:whitespace-nowrap text-[22px] sm:text-[24px] md:text-[30px] lg:text-[35px] xl:text-[40px] 2xl:text-[50px] 3xl:text-[110px] font-bold text-[#CCD6F6]">
        Sefatullah Omar.
      </h1>
      <p className="text-[#8892B0] text-[10px] sm:text-[12px] lg:text-[14px] xl:text-[15px] 2xl:text-[17px] font-montserrat">
        <span className=" flex ">
          I’m a full-stack web developer based in Vancouver, specializing in building exceptional digital experiences using the MERN Stack.
        </span>
      </p>
    </div>
  );
}

export default Intro;
