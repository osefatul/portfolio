import React from 'react'
import project1 from "../../projects/ticket-system.jpg"
import { mainProjects } from '../../projects/projects'

function About() {

return (
    <div
    id="about"
    className=" text-white mx-auto flex flex-col md:items-center justify-start 2xl:justify-center relative w-full h-almost ">
        
        <div className='flex flex-col items-start justify-start w-[80%]'>
            <p className="text-[#64ffda] text-[8px] sm:text-[10px] lg:text-[14px] xl:text-[16x]  opacity-50">
                My Projects
            </p>

            <div className='flex items-center justify-start space-x-5 w-[80%]'>

            <p className='text-[#CCD6F6] font-bold text-[18px] sm:text-[30px] text-[40px] '>
                Some Things I’ve Built
            </p>
            <hr className="lg:w-[30%] h-[2px] text-black bg-slate-800 opacity-30" />
            </div>

        </div>

        <div className='pt-10 w-[80%] space-y-10'>


            {
                mainProjects.map((project,index)=>(
    
                    <div className='flex flex-col sm:flex-row space-y-10 sm:space-x-5 '>
                        <img className="w-[60%]" src={project.img} alt="" />

    
                        <dir className="space-y-4">
                            <p className='text-[20px] font-bold'>
                            {project.title}
                            </p>
                            <p>
                            {project.description}
                            </p>
                            
                        </dir>
                    </div>
                    ))
                }

            
        
        </div>


    </div>

)
}

export default About