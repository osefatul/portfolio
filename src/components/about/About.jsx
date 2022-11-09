import React from 'react'
import { mainProjects } from '../../projects/projects'
import AOS from 'aos';
import 'aos/dist/aos.css';



function About() {

return (
    <div
    id="about"
    className=" text-white mx-auto flex flex-col md:items-center justify-start 2xl:justify-center relative w-full ">
        
        <div className='flex flex-col items-start justify-start w-[80%]'>
            <p className="text-[#64ffda] text-[8px] sm:text-[10px] lg:text-[14px] xl:text-[16x]">
                My Projects
            </p>

            <div className='flex items-center justify-start space-x-5 w-[80%]'>

            <p className='text-[#CCD6F6] font-bold text-[18px] sm:text-[30px] text-[40px] '>
                Some Things I’ve Built
            </p>
            <hr className="lg:w-[30%] h-[2px] text-black bg-slate-800 opacity-30" />
            </div>

        </div>

        <div className='sm:pt-10 w-[80%] space-y-10 flex flex-col sm:justify-center sm:item-center  pb-20 '
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        >


            {
                mainProjects.map((project,index)=>(
    
                    <div className={`relative flex flex-col items-start justify-center px-5 ${index%2 === 0 ? "sm:flex-row": "sm:flex-row-reverse "}  `}
                        data-aos={`${index % 2 === 0 ? "fade-right": "fade-left"}`}
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"
                    >

    
                        <dir className={` relative flex tracking-normal leading-none flex-col  `}>
                            
                            <p className='text-[12px] text-[#64ffda]'>
                                Featured Project
                            </p>
                            
                            <p className='text-[20px] font-bold'>
                                {project.title}
                            </p>

                            <p 
                            className={`text-[#8892B0] text-[12px] leading-snug flex items-center justify-center p-5 rounded-md sm:bg-[#112240] sm:absolute sm:z-20 ${index%2 ===0 ? "top-20 -right-20 ml-10": " -left-20 top-16"}`}>
                            {project.description}
                            </p>
                            
                        </dir>


                        <img 
                        className=" blur cursor-pointer hover:ease-in-out hover:duration-500 hover:blur-none relative w-full sm:w-[500px] rounded-xl object-cover" 
                        src={project.img} alt="" />
                    </div>
                    ))
                }

            
        
        </div>


    </div>

)
}

export default About