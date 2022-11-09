import React from 'react'
import { mainProjects } from '../../projects/projects'
import AOS from 'aos';
import 'aos/dist/aos.css';



function About() {

return (
    <div
    id="about"
    className=" text-white mx-auto flex flex-col md:items-center justify-start 2xl:justify-center relative w-[100%] sm:w-[80%] pt-10 ">
        
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

        

        <div className='sm:pt-20 w-full sm:w-[80%] space-y-10 flex flex-col justify-start item-start sm:justify-center sm:item-center pb-40 h-[100%] '
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        >


            {
                mainProjects.map((project,index)=>(
    
                    <div className={`w-full relative flex flex-col items-start justify-start sm:justify-center sm:items-start sm:px-5 ${index%2 === 0 ? "sm:flex-row": "sm:flex-row-reverse "}  `}
                        data-aos={`${index % 2 === 0 ? "fade-right": "fade-left"}`}
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"
                    >

    
                        <dir className={`relative flex flex-col tracking-normal leading-none items-start justify-start w-full -ml-10 sm:-ml-0`}>
                            
                            <p className='text-[12px] text-[#64ffda] pb-1'>
                                Featured Project
                            </p>
                            
                            <p className='text-[#CCD6F6] text-[15px] pb-4 sm:pb-0 sm:text-[22px] font-bold'>
                                {project.title}
                            </p>

                            <p 
                            className={`w-[112%]  text-[#8892B0] text-[12px] sm:text-[14px] break-words leading-snug flex items-start justify-start sm:items-center sm:justify-center sm:p-3 sm:rounded-md sm:bg-[#112240] sm:absolute sm:z-20 
                            ${index%2 ===0 ? "sm:top-20 sm:-right-20 sm:ml-10": " sm:-left-20 sm:top-20"}`}>
                            {project.description}
                            </p>
                            
                        </dir>


                        <img 
                        className="blur cursor-pointer hover:ease-in-out hover:duration-500 hover:blur-none relative w-full md:w-[500px] sm:h-[300px] rounded-xl object-cover" 
                        src={project.img} alt="" />
                    </div>
                    ))
                }

            
        
        </div>


    </div>

)
}

export default About