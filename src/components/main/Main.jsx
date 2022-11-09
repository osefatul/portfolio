import React, { useEffect } from 'react'
import About from '../about/About'
import Feed from '../feed/Feed'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Main() {

        useEffect(() => {
                AOS.init();
        }, [])

return (
        <div className='flex flex-col items-center justify-center mx-auto w-[80%] md:w-full overflow-x-hidden overflow-y-hidden'>
        
        <div
        className='w-full'
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        >
        <Feed/>
        </div>
        
        <div
        className='w-full'
        data-aos="fade-right"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        >
        <About/>
        </div>



        

        </div>
)
}

export default Main