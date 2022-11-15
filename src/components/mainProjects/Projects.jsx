import React from 'react'
import { mainProjects } from '../../projects/projects'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FiGithub } from "react-icons/fi";
import { useNavigate } from "react-router-dom";


function Projects() {


return (
    <div
    id="mainProjects"
    className=" text-white mx-auto flex flex-col md:items-center justify-start 2xl:justify-center relative w-[100%] sm:w-[90%] md:w-[80%] pt-10 ">
        
        <div className='flex flex-col items-start justify-start w-[100%]'>
            <p className="text-[#64ffda] text-[8px] sm:text-[10px] lg:text-[14px] xl:text-[16x]">
                My Projects
            </p>

            <div className='flex items-center justify-start space-x-5 w-[100%]'>
                <p className='text-[#CCD6F6] font-bold text-[24px] sm:text-[35px] text-[40px] '>
                    Some Things I’ve Built
                </p>
                <hr className="none sm:flex lg:w-[30%] h-[2px] text-black bg-slate-800 opacity-30" />
            </div>

        </div>

        

        <div className='pt-5 sm:pt-16 w-full sm:w-[90%] md:w-[80%] space-y-32 flex flex-col justify-start item-start sm:justify-center sm:item-center pb-40 h-[100%] '
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        >


            {
                mainProjects.map((project,index)=>(
                    

                    <div key={index} className={`w-full relative flex flex-col items-start justify-start sm:px-5 
                    ${index%2 === 0 ? "md:flex-row md:items-start md:justify-start": "md:flex-row-reverse md:justify-start md:items-start"}  `}
                        data-aos={`${index % 2 === 0 ? "fade-right": "fade-left"}`}
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"
                    >

                        {/* Contents div */}
                        <dir 
                            data-aos={`${index % 2 === 0 ? "fade-up": "fade-down"}`}
                            data-aos-delay="50"
                            data-aos-duration="1500"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true"
                            data-aos-once="false"

                            className={`tracking-normal leading-none  w-full md:w-[90%] lg:w-[80%] xl:w-[70%] 2xl:w-[60%] md:absolute opacity-70 md:opacity-100  text-start z-50 -top-10 p-5
                            ${index%2 === 0 ? 
                            "md:justify-start md:items-start md:-right-20": 
                            "md:justify-end md:items-end md:-left-20"}`}>
                            
                            <p className={`text-[12px] text-[#64ffda] pb-1
                            ${index%2 === 0 ? "md:ml-42 md:text-right ": "md:mr-44 "} `}>
                                Featured Project
                            </p>
                            
                            <p className={`text-[#CCD6F6] text-[15px]  sm:text-[22px] font-bold pb-5
                            ${index%2 === 0 ? "md:ml-44 md:text-right": "md:mr-44 "}
                            `}>
                                {project.title}
                            </p>



                            <div className='md:bg-[#112240] rounded-md  md:-ml-1 pb-3 sm:pb-5'>
                                
                                <p 
                                className={`w-[100%] pb-5  md:p-3 text-[#8892B0] text-[12px] sm:text-[14px]  hyphens-auto 
                                ${index%2 === 0 ? "md:-mr-28 md:text-right": " md:mr-28"}
                                `}>
                                {project.description}
                                </p>


                                <div className={`rounded-b-md  md:pl-0
                                ${index%2 === 0 ? "": ""}
                                `}>

                                    <div className={`flex items-start justify-start  flex-wrap py-1  
                                    ${index%2 === 0 ? "md:items-end md:justify-end": "md:items-start md:justify-start md:pl-3"}
                                    `}>
                                        {project.techStacks.map((tech)=>(
                                            <p className='text-[#8892B0] text-[10px] pr-4 pb-1'>
                                                {tech}
                                            </p>
                                        ))}
                                    </div>

                                    <div className={`flex items-center justify-start pt-5 flex-wrap
                                    ${index%2 === 0 ? "md:items-end md:justify-end md:pr-4": "md:items-start md:justify-start md:pl-3"}
                                    `}>
                                        <FiGithub className='cursor-pointer text-[12px] md:text-[15px] duration-300 transition ease-in-out delay-150' />

                                        <a href={project.demoLink}>
                                        <div className='pl-8 animate-pulse flex items-center justify-center space-x-1 cursor-pointer'
                                        >
                                            <div className='w-2 h-2 bg-red-800 rounded-full'></div>
                                            <span className='text-[12px] md:text-[15px]'>Live</span>
                                        </div>
                                        </a>
                                    </div>

                                </div>

                            </div>

                        </dir>



                        <div className='w-[90%] md:w-[500px] mx-auto'
                        data-aos={`${index % 2 === 0 ? "flip-up": "flip-down"}`}
                        data-aos-delay="50"
                        data-aos-duration="2000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        >

                            <img 
                            className={`blur grayscale cursor-pointer hover:ease-in-out hover:duration-500 hover:blur-none hover:grayscale-0 relative w-full sm:h-[300px] rounded-xl object-cover shadow-2xl mx-auto
                            ${index%2 === 0 ? "md:-ml-24": " md:-mr-28"}
                            `}
                            src={project.img} alt="" />
                        
                        </div>
                    </div>
                    ))
                }

            
        
        </div>


    </div>

)
}

export default Projects