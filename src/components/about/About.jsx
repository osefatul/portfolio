import React from 'react'
import { mainProjects } from '../../projects/projects'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FiGithub } from "react-icons/fi";



function About() {

return (
    <div
    id="about"
    className=" text-white mx-auto flex flex-col md:items-center justify-start 2xl:justify-center relative w-[100%] sm:w-[80%] pt-5 ">
        
        <div className='flex flex-col items-start justify-start w-[100%]'>
            <p className="text-[#64ffda] text-[8px] sm:text-[10px] lg:text-[14px] xl:text-[16x]">
                My Projects
            </p>

            <div className='flex items-center justify-start space-x-5 w-[100%]'>
                <p className='text-[#CCD6F6] font-bold text-[25px] sm:text-[35px] text-[40px] '>
                    Some Things I’ve Built
                </p>
                <hr className="none sm:flex lg:w-[30%] h-[2px] text-black bg-slate-800 opacity-30" />
            </div>

        </div>

        

        <div className='pt-10 sm:pt-20 w-full sm:w-[80%] space-y-32 flex flex-col justify-start item-start sm:justify-center sm:item-center pb-40 h-[100%] '
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        >


            {
                mainProjects.map((project,index)=>(


                    // Old versions

                    // <div className={`w-full relative flex flex-col items-start justify-start sm:justify-center sm:items-start sm:px-5 
                    // ${index%2 === 0 ? "sm:flex-row": "sm:flex-row-reverse "}  `}
                    //     data-aos={`${index % 2 === 0 ? "fade-right": "fade-left"}`}
                    //     data-aos-delay="50"
                    //     data-aos-duration="1000"
                    //     data-aos-easing="ease-in-out"
                    //     data-aos-mirror="true"
                    //     data-aos-once="false"
                    // >


                    
                    
                    // new versions
                    <div className={`w-full relative flex flex-col items-start justify-start sm:px-5 
                    ${index%2 === 0 ? "md:flex-row md:items-start md:justify-start": "md:flex-row-reverse md:justify-start md:items-start"}  `}
                        data-aos={`${index % 2 === 0 ? "fade-right": "fade-left"}`}
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"
                    >


                        {/* Old versions */}
                        
                        {/* <dir className={`relative flex flex-col tracking-normal leading-none items-start justify-start w-full -ml-10 sm:-ml-0`}>
                            
                            <p className='text-[12px] text-[#64ffda] pb-1'>
                                Featured Project
                            </p>
                            
                            <p className={`text-[#CCD6F6] text-[15px] pb-4 sm:pb-0 sm:text-[22px] font-bold 
                            ${index%2 === 0 ? "mr-5": ""}
                            `}>
                                {project.title}
                            </p>

                            <p 
                            className={`sm:w-[200%] 2xl:w-full  text-[#8892B0] text-[12px] sm:text-[14px] break-words leading-snug flex items-start justify-start sm:items-center sm:justify-center sm:p-3 sm:rounded-md sm:bg-[#112240] sm:absolute sm:z-20 
                            ${index%2 ===0 ? " sm:top-24 sm:-right-44 xl:top-24 xl:-right-32 sm:ml-10": "  md:-left-20 md:top-28"}`}>
                            {project.description}
                            </p>
                            
                        </dir>  */}


                        <dir className={`tracking-normal leading-none  w-full md:w-[60%] md:absolute opacity-70 md:opacity-100  text-start z-50 -top-10 p-5
                            ${index%2 === 0 ? "md:justify-start md:items-start md:-right-20": "md:justify-end md:items-end md:-left-20"}`}>
                            
                            <p className={`text-[12px] text-[#64ffda] pb-1  
                            ${index%2 === 0 ? "md:ml-42 md:text-right ": "md:mr-44 "} `}>
                                Featured Project
                            </p>
                            
                            <p className={`text-[#CCD6F6] text-[15px]  sm:text-[22px] font-bold pb-5
                            ${index%2 === 0 ? "md:ml-16 md:text-right": "md:mr-44 "}
                            `}>
                                {project.title}
                            </p>

                            <p 
                            className={`w-[100%] md:bg-[#112240] p-1 md:p-3  rounded-md text-[#8892B0] text-[12px] sm:text-[14px] break-all 
                            ${index%2 === 0 ? "md:-mr-28 md:text-right": " md:mr-28"}
                            `}>
                            {project.description}
                            </p>

                            <div className='flex items-start justify-start pt-5 flex-wrap pl-1'>
                                {project.techStacks.map((tech)=>(
                                    <p className='text-[#8892B0] text-[12px] pr-4'>
                                        {tech}
                                    </p>
                                ))}
                            </div>

                            <div className='flex items-start justify-start pt-5 flex-wrap pl-1'>
                            <FiGithub className='cursor-pointer text-[18px] hover:text-20px duration-300 transition ease-in-out delay-150' />
                            <div className='pl-8 animate-pulse flex items-center justify-center space-x-1'>
                                <div className='w-3 h-3 bg-red-800 rounded-full'></div>
                                <span className='text-[15px]'>Live</span>
                            </div>
                            </div>
                            
                        </dir>
                        

                        <img 
                        className={`blur grayscale cursor-pointer hover:ease-in-out hover:duration-500 hover:blur-none hover:grayscale-0 relative w-[80%] md:w-[500px] sm:h-[300px] rounded-xl object-cover shadow-2xl flex items-center justify-center mx-auto
                        ${index%2 === 0 ? "md:-ml-24": " md:-mr-28"}
                        `}
                        // className="blur cursor-pointer hover:ease-in-out hover:duration-500 hover:blur-none relative w-full md:w-[80%] rounded-xl object-cover"
                        src={project.img} alt="" />
                        
                    </div>
                    ))
                }

            
        
        </div>


    </div>

)
}

export default About