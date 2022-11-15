import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { fetchGithubData } from '../../githubApi/githubApi'



function OtherProjects() {

    const dispatch = useDispatch()

        
    const {isLoading, projects} = useSelector(state => state.repos)
    const [allRepos, setAllRepos] = useState(projects)

    const [selectedTab, setSelectedTab] = useState(false)
    const tabs = [
        {id:0, title: "Fullstack Apps"},
        {id:1, title: "ReactJs", }, 
        {id:3, title: "Vanilla Javascript",},
    ]


    const handleSubmit =  (index, url) =>{
        setSelectedTab(index)
        }


    useEffect(()=>{
        dispatch(fetchGithubData())
    },[])

    
    
useEffect(()=>{
    setAllRepos(projects)
},[projects])


    return (
        
    <div
    id="githubProjects" 
    className='pt-10 text-white mx-auto flex flex-col md:items-center justify-start 2xl:justify-center relative w-[100%] sm:w-[90%] md:w-[80%] h-100% pb-20'>
        
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

{/* Selecting tab */}
        <div className='pt-10 flex space-x-5 flex items-center justify-center'>
            {
                tabs.map((tab, index) =>(
                    <div key={index}
                    // className='flex items-center justify-center border border-[#64ffda] hover:bg-[#06241d] hover:border-[#06241d] p-1 px-2 rounded-md  ease-in-out duration-300 '
                    className={`${index === selectedTab && "bg-[#06241d] border-slate-900 hoverText" } flex items-center justify-center border border-green-900 hover:bg-[#06241d] hover:border-[#06241d] p-1 px-2 rounded-md  ease-in-out duration-300 `}
                    onClick={() => handleSubmit(index, tab.url)}>
                        <h1 className={`${index === selectedTab && "hoverText text-[#eee344]"}  hoverText font-bold font-comorants text-[10px] sm:text-[16px]`}>
                        {tab.title}
                        </h1>
                    </div>
                ))
            }
        </div>

{/* All Projects map */}
        {
            isLoading ? 
            <div className='flex flex-wrap items-center justify-center w-[100%] pt-10' >
                ...Loading
            </div>:

            <div className='flex flex-wrap items-center justify-center w-[100%] pt-10'>
            {
                allRepos?.map((repo,index)=>(
                    <div 
                        key={index} className=' flex items-start justify-center text-[12px] capitalize w-48 h-64  sm:w-72 h-64  m-2 border border-slate-800 rounded-sm p-4 flex-wrap'>
                            <h1 className=' flex items-start justify-center text-[12px] capitalize' >
                                {repo.title}
                            </h1>
                        
                    </div>
                ))
            }
        </div>
        }
        
    </div>
)
}

export default OtherProjects