import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
function OtherProjects() {

    const [githubData, setGithubData] = useState([])
    const [splitUrlData, setSplitUrlData] = useState([])



    useEffect(()=>{
        const fetchData = async ()=>{
            const res = await axios("https://api.github.com/users/osefatul/repos")
            console.log(res.data)

            setSplitUrlData(res.data.map(data => {
                const splitHtmlUrl = data.html_url.split('/') //"https://github.com/osefatul/amazon-ecommerce-system"
                const splitDash = splitHtmlUrl[splitHtmlUrl.length - 1].split("-").join(" ") //"amazon-ecommerce-system" => "amazon ecommerce system"
                return splitDash
            }))

            setGithubData(res.data)
            return res
        }
        fetchData();
        console.log(splitUrlData)
    },[])



    return (
        
    <div
    id="githubProjects" 
    className=' text-white mx-auto flex flex-col md:items-center justify-start 2xl:justify-center relative w-[100%] sm:w-[90%] md:w-[80%] h-100% pb-20'>
        
        <div className='flex flex-col items-start justify-start w-[100%]'>
            <p className="text-[#64ffda] text-[8px] sm:text-[10px] lg:text-[14px] xl:text-[16x]">
                My Projects
            </p>

            <div className='flex items-center justify-start space-x-5 w-[100%]'>
                <p className='text-[#CCD6F6] font-bold text-[24px] sm:text-[35px] text-[40px] '>
                    Other NoteWorthy Projects
                </p>
                <hr className="none sm:flex lg:w-[30%] h-[2px] text-black bg-slate-800 opacity-30" />
            </div>

        </div>


        <div className='flex flex-col items-start justify-start w-[100%]'>

        {
            splitUrlData?.map((project,index)=>(
                <div className='text-[12px] capitalize '>
                    {project}
                </div>
            ))
        }
        </div>
    </div>
)
}

export default OtherProjects