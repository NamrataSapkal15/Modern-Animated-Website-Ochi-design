import React from 'react'

const About = () => {
    return (
        <div className='w-full p-20 bg-[#CDEA68] rounded-tr-3xl text-black'>
            <h1 className='font-mono text-[3vw]  leading-[3vw] tracking-tight'>Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h1>
      
      
       <div className=' flex gap-5 w-full border-t-[1px] mt-20 pt-10  border-[#91a549]'>
        <div className='w-1/2 '>
            <h1 className='text-6xl'>Our Approach:</h1>
            <button className='px-10 py-5 mt-10 bg-zinc-900 rounded-full text-white flex gap-10 uppercase'>Read More
            <div className='w-2 h-2 bg-zinc-100  rounded-full' ></div>
            </button>
       
        </div>
        <div className='w-1/2 h-[60vh] bg-[#c5e650] rounded-3xl'></div>
       </div>
       
        </div>
    )
}

export default About